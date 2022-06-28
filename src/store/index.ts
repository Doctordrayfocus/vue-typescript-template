/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { createStore, Store, useStore as baseUseStore } from "vuex";
import { InjectionKey } from "vue";

// define your typings for the store state
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface State {}

// define injection key
export const key: InjectionKey<Store<State>> = Symbol();

export const store = createStore<State>({
  state: {},
  mutations: {},
  plugins: [],
});

// define your own `useStore` composition function
export function useStore() {
  return baseUseStore(key);
}
