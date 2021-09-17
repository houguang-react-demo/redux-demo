import {createSlice} from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    title: "标题一",
    content: "内容一"
  },
  {
    id: 2,
    title: "标题二",
    content: "内容二"
  }
];

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    postAdded(state, action) {
      state.push(action.payload)
    },
    postDeleted(state, action) {
      state.map((item, index) => {
        if (item.id === action.payload.id) {
          delete state[index];
        }
      })
    },
    postEdited(state, action) {
      state.map((item, index) => {
        if (item.id === action.payload.id) {
          state[index] = action.payload
        }
      })
    }
  }
});

export const {postAdded, postDeleted, postEdited} = postsSlice.actions;
export default postsSlice.reducer;
