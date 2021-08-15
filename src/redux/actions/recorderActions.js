import {actionRecord} from "../../enums";


export function actionStart() {
    return {
        type: actionRecord.START
    }
}

export function actionStop() {
    return {
        type: actionRecord.STOP
    }
}

export function actionReset() {
    return {
        type: actionRecord.RESET
    }
}

export function actionTick(time) {
    return {
        type: actionRecord.TIME_TICK,
        time: time
    }
}