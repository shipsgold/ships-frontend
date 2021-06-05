export interface Store {
  put: (key: string, data: string) => void;
  get: (key: string) => string | null;
}

