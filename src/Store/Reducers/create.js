import {CREATE_QUIZ_QUESTION, RESET_QUIZ_CREATOR} from "../Actions/actionTypes";

const initialState = {
    quiz: []
}

export default function createReducer(state = initialState, action){
    switch(action.type){
        case CREATE_QUIZ_QUESTION:
            return {
                ...state,
                quiz: [...state.quiz, action.item]
            }
        case RESET_QUIZ_CREATOR:
            return {
                ...state, quiz: []
            }
        default:
            return state
    }
}