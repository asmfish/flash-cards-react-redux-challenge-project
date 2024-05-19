import { createSlice } from '@reduxjs/toolkit';
//You’ll want to make use of the topicsSlice‘s extraReducers to respond to a quizzesSlice "addQuiz" action.
import { addQuizId } from '../topics/topicsSlice';

export const quizzesSlice = createSlice({
    name: 'quizzes',
    initialState: {
        quizzes: {}
    },
    reducers: {
        addQuiz (state, action) {
          //payload: { id: '123', name: 'quiz name', topicId: '456', cardIds: ['1', '2', '3', ...]}
          const { id } = action.payload;
          const newQuizz = action.payload;
          state.quizzes[id] = newQuizz;
       }
    }
});

// thunk to quizz to the related topic
export const addQuizToTopic = quiz => {
    const { id, topicId } = quiz;
    return (dispatch) => {
        dispatch(quizzesSlice.actions.addQuiz(quiz));
        dispatch(addQuizId( { quizId: id, topicId: topicId } ));
    }
};

export const selectQuizzes = (state) => state.quizzes.quizzes;
export const { addQuiz } = quizzesSlice.actions

export default quizzesSlice.reducer;
