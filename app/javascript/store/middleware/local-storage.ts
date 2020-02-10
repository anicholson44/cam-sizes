import { Middleware } from "redux";
import { RootState } from "..";

const rootStateKey = "rootState";

export const rootStateStorage = {
    set: (s: RootState) => window.localStorage.setItem(rootStateKey, JSON.stringify(s)),
    get: (): RootState => JSON.parse(window.localStorage.getItem(rootStateKey))
};

const middleware: Middleware<{}, RootState> = store => next => action => {
  const result = next(action);
  rootStateStorage.set(store.getState());
  return result;
};

export default middleware;
