/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react'
import { interpret, State } from 'xstate'
import { useService } from "@xstate/react";
import {AuthInterpeter, authMachine, AuthMachine, AuthSerializedState} from '../machines'
import { localStore } from "../storage"
import { Store } from '../storage/store';

interface Services {
  auth: AuthMachine
}

interface CacheStateFunc<S> {
  (): S | null
}
interface CacheStateSaveFunc<S> {
  (state?: S): void 
}

interface ServiceCacheEntry<I,S> {
    service?: I 
    state: CacheStateFunc<S> 
    save: CacheStateSaveFunc<S> 
}

interface ServiceCache {
  auth: ServiceCacheEntry<AuthInterpeter,AuthSerializedState>
}

const getStateFromStore = <S>(serviceKey: keyof Services, store: Store): CacheStateFunc<S> => () => {
  const result = store.get(serviceKey) 
  if(!result)
    return null 
  return JSON.parse(result) as S
}

const saveStateToStore = <S extends State<any,any,any> >(serviceKey: keyof Services, store: Store): CacheStateSaveFunc<S> => 
  (state?: S): void => {
    if(state)
      store.put(serviceKey, JSON.stringify(state.toJSON()))
  }

const serviceCache: ServiceCache = {
  auth: {
    state: getStateFromStore<AuthSerializedState>("auth", localStore),
    save: saveStateToStore<AuthSerializedState>("auth", localStore)
  }
}

const services: Services = {
  auth: authMachine()
}

const useServiceMachine = ( serviceKey: keyof Services, cleanup: boolean) => () => {
  const machine = services[serviceKey]
  const cacheEntry = serviceCache[serviceKey]
  const { save } = cacheEntry;
  const state = cacheEntry.state();
  if (!cacheEntry.service) {
    cacheEntry.service = interpret(services[serviceKey], {devTools: true})
    if(state){
      const st = machine.resolveState(State.create(state))
      cacheEntry.service.start(st)
    }else
      cacheEntry.service.start()
  }
  const { service } = cacheEntry;
  if(cleanup){
    React.useEffect(
      () => () => {
        save(service?.state)
        serviceCache[serviceKey].service = undefined;
      },
      [service, machine, save]
    );
  }else {
    React.useEffect(
      () => () => {
        save(service?.state)
      },
      [service, machine, save]
    );
  }
  if(service ===null){
    // eslint-disable-next-line no-console
    console.error("terrible mistake")
  }
  return useService(service);
}
// eslint-disable-next-line import/prefer-default-export
export const useAuthService = useServiceMachine("auth", false)
