type SettingsActionType = setLimitValuesACType

const initialState = {minValue: 2, maxValue: 5}
export const settingsReducer = (state = initialState, action: SettingsActionType) => {
    switch (action.type) {
        case 'SET-SETTINGS': {
            return {...state, maxValue: action.maxValue, minValue: action.minValue}
        }
        default:
            return state
    }
}
type setLimitValuesACType = ReturnType<typeof setLimitValuesAC>
export const setLimitValuesAC = (minValue: number, maxValue: number) => {
    return {
        type: 'SET-SETTINGS', minValue, maxValue
    }
}