const {createSlice} = require('@reduxjs/toolkit');

const MyCartSlice = createSlice({
  name: 'product',
  initialState: [],
  reducers: {
    addProductToMyCart(state, action) {
      let myindex = -1;
      state.map((item, i) => {
       
        if (item.id == action.payload.id) {
          myindex = i;
        }
      });
      if (myindex == -1) {
        state.push({
          id: action.payload.id,
          imgdata: action.payload.imgdata,
          price: action.payload.price,
          qnty: action.payload.qnty + 1,
          rname: action.payload.rname,
        });
      } else {
        state[myindex].qnty = state[myindex].qnty + 1;
      }
    },

    removeMyCartItem(state, action) {
      let myindex = -1;
      state.map((item, i) => {
        if (item.id == action.payload.id) {
          myindex = i;
        }
      });
      if (myindex == -1) {
        state.push({
          id: action.payload.id,
          imgdata: action.payload.imgdata,
          price: action.payload.price,
          qnty: action.payload.qnty + 1,
          rname: action.payload.rname,
        });
      } else {
        state[myindex].qnty = state[myindex].qnty - 1;
      }
    },
    deleteMyCartItem(state, action) {
      return (
        state = state.filter(item => {
          item.id != action.payload;
        })
      );
    },
  },
});

export const {addProductToMyCart, removeMyCartItem, deleteMyCartItem} =
  MyCartSlice.actions;
export default MyCartSlice.reducer;
