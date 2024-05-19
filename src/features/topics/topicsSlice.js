import { createSlice } from '@reduxjs/toolkit';

export const topicsSlice = createSlice({
    name: 'topics',
    initialState: {
      topics: {}
    },
    reducers: {
       addTopic (state, action) {
          //payload: {id: '123456', name: 'name of topic', icon: 'icon url'}
          const { id } = action.payload;
          const newTopic = {...action.payload, quizIds: []};
          state.topics[id] = newTopic;
       },
       addQuizId (state, action) {
          //payload: {topicId: '', quizId: ''}
          const { topicId, quizId } = action.payload;
          state.topics[topicId].quizIds.push(quizId);
       }
    }
});

export const selectTopics = (state) => state.topics.topics;
export const { addTopic, addQuizId } = topicsSlice.actions

export default topicsSlice.reducer;
