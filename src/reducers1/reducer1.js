import {createStore} from 'redux';
  
  const reducer = (state=[], action) => {
    switch(action.type){
      case "ADD_ITEM":
        return [...state, action.item];
      case "DELETE_ITEM":
        return [...state.slice(0, action.index),...state.slice(action.index+1)];
      default:
        return state;
    }
  }
  
  const store = createStore(reducer);

  export default store;