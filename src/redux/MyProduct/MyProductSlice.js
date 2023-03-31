const {createSlice} = require('@reduxjs/toolkit');

const MyProductSlice = createSlice({
  name: 'product',
  initialState: [],
  reducers: {
    addMyProducts(state, action) {
      state.push(action.payload);
    },
    increaseQty(state, action) {
      let myindex = -1;
      state.map((item, i) => {
        if (item.id == action.payload) {
          myindex = i;
        
        }
        if (myindex == -1) {
        } else {
          state[myindex].qnty = state[myindex].qnty + 1;
        }
      });
    },


decreaseQty(state, action) {
  let myindex = -1;
  state.map((item, i) => {
    if (item.id == action.payload) {
      myindex = i;
    }
    if (myindex == -1) {
    } else {
      state[myindex].qnty = state[myindex].qnty - 1;
    }
  });
},

  },
});

export const {addMyProducts, increaseQty,decreaseQty} = MyProductSlice.actions;
export default MyProductSlice.reducer;
