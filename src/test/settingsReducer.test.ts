import {setLimitValuesAC, settingsReducer} from "../state/settingsReducer";

describe('settingsReducer', () => {
    it('should return the initial state', () => {
        const initialState = {minValue: 2, maxValue: 5};
        const action = {type: 'UNKNOWN_ACTION'}; // Any action that doesn't match the reducer
        // @ts-ignore
        const newState = settingsReducer(initialState, action);

        expect(newState).toEqual(initialState);
    });

    it('should handle SET-SETTINGS action', () => {
        const initialState = {minValue: 2, maxValue: 5};
        const newMinValue = 1;
        const newMaxValue = 10;
        const action = setLimitValuesAC(newMinValue, newMaxValue);
        const newState = settingsReducer(initialState, action);

        expect(newState).toEqual({minValue: newMinValue, maxValue: newMaxValue});
    });

    // Add more tests if needed
});
