/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react'
import { AnyEventObject, EventObject, interpret, Interpreter, State, StateConfig, StateMachine, Typestate } from 'xstate'
import { useService } from "@xstate/react";
import {AuthContext, AuthEvents,  authMachine, AuthMachine, AuthSerializedState, AuthState} from '../machines'
import { localStore } from "../storage"
import { Store } from '../storage/store';
import { UserMachine, userMachine, UserSerializedState, UserContext, UserState, UserEvents } from '../machines/user';

interface Services {
  auth: AuthMachine
  user: UserMachine
}

interface CacheStateFunc<S> {
  (): S | null
}
interface CacheStateSaveFunc<S> {
  (state?: S): void 
}

interface ServiceCacheEntry<S, C, St extends Typestate<C>={
  value: any;
  context: C;
}, E extends EventObject = AnyEventObject > {
  service?: Interpreter<C, any, E, St>
  state: CacheStateFunc<StateConfig<C, E>>
  save: CacheStateSaveFunc<State<C, E, any, St>>
}

interface ServiceCache {
  auth: ServiceCacheEntry<AuthSerializedState, AuthContext, AuthState, AuthEvents>
  user: ServiceCacheEntry<UserSerializedState, UserContext, UserState, UserEvents>
}
/* TODO if adding services becomes tedious we can simply  any cast the entries
interface ServiceCache {
  [index: keyof Services]: ServiceCacheEntry<any, any, any, any>
} */

const getStateFromStore = <S>(serviceKey: keyof Services, store: Store): CacheStateFunc<S> => () => {
  const result = store.get(serviceKey) 
  if(!result)
    return null 
  return JSON.parse(result) as S
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const saveStateToStore = <S extends StateConfig<any,any> >(serviceKey: keyof Services, store: Store): CacheStateSaveFunc<S> => 
  (state?: S): void => {
    if(state) store.put(serviceKey, JSON.stringify( State.create(state).toJSON()))
  }

const serviceCache: ServiceCache = {
  auth: {
    state: getStateFromStore<AuthSerializedState>("auth", localStore),
    save: saveStateToStore<AuthSerializedState>("auth", localStore)
  },
  user: {
    state: getStateFromStore<UserSerializedState>("user", localStore),
    save: saveStateToStore<UserSerializedState>("user", localStore)
  }
}

const services: Services = {
  auth: authMachine(),
  user: userMachine()
}

const useServiceMachine = <C, S extends Typestate<C> = {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    value: any;
    context: C;
}, E extends EventObject= AnyEventObject>
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (machine: StateMachine<C, any, E, S>, 
    cache: ServiceCacheEntry<State<C, E>, C, S, E>,
    cleanup: boolean) => () => {
    const { save } = cache;
    const state = cache.state();
    if (!cache.service) {
    // eslint-disable-next-line no-param-reassign
      cache.service = interpret(machine, {devTools: true})
      if(state){
        const st = machine.resolveState(State.create(state))
        cache.service.start(st)
      }else
        cache.service.start()
    }
    const { service } = cache;
    if(cleanup){
      React.useEffect(
        () => () => {
          save(service?.state)
          // eslint-disable-next-line no-param-reassign
          cache.service = undefined;
        },
        [service, save]
      );
    }else {
      React.useEffect(
        () => () => {
          save(service?.state)
        },
        [service, save]
      );
    }
    if(service ===null){
    // eslint-disable-next-line no-console
      console.error("terrible mistake")
    }
    return useService(service);
  }

export const useAuthService = useServiceMachine(services.auth, serviceCache.auth, false)
export const useUserService = useServiceMachine(services.user, serviceCache.user, false)
