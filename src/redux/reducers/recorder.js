import {actionRecord, statusRecord} from "../../enums";

const initialState = {
    status: statusRecord.INIT,
    time: 0
}

export default function (state = initialState, action) {
    switch (action.type) {
        case actionRecord.START:
            return {
                ...state,
                status: statusRecord.RECORDING
            }
        case actionRecord.STOP:
            return {
                ...state,
                status: statusRecord.STOPPED
            }
        case actionRecord.RESET:
            return {
                ...state,
                ...initialState
            }
        case actionRecord.TIME_TICK:
            return {
                ...state,
                time: state.time + action.time
            }
        default:
            return state
    }
}