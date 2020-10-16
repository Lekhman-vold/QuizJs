import {CREATE_QUIZ_QUESTION, RESET_QUIZ_CREATOR} from "./actionTypes";
import axios from "../../Axios/axios-quiz";

export function createQuizQuestion(item) {
    return {
        type: CREATE_QUIZ_QUESTION,
        item
    }
}

export function resetQuizCreation() {
    return {
        type: RESET_QUIZ_CREATOR
    }
}

export function finishCreateQuiz() {
    return async (dispatch, getState) => {
        await axios.post('quizes.json', getState().create.quiz)
        dispatch(resetQuizCreation())
    }
}