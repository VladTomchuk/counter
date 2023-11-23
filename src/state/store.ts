import {combineReducers, legacy_createStore} from "redux";
import {settingsReducer} from "./settingsReducer";


const rootReducer = combineReducers({
    settingsReducer
})
export type AppRootStateType = ReturnType<typeof rootReducer>

export const store = legacy_createStore(rootReducer)


// const persistedState = loadState();
// export const store = legacy_createStore(rootReducer,persistedState,applyMiddleware(thunk))
// store.subscribe(throttle(() => {
//     saveState({
//         settings: store.getState().settingsReducer
//     });
// }, 1000));