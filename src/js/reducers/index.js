/*const initialState = {
    articles: []
  };
  function rootReducer(state = initialState, action) {
    return state;
  };
  export default rootReducer;
  */

  /*
 import { ADD_ARTICLE } from "../constants/action-types";
 const initialState = {
   articles: []
 };
 function rootReducer(state = initialState, action) {
   if (action.type === ADD_ARTICLE) {
     state.articles.push(action.payload);
   }
   return state;
 }
 export default rootReducer;
 */

import { ADD_ARTICLE } from "../constants/action-types";
const initialState = { // just a JS object, to always return an object
  articles: [],
  remoteArticles: []
};
function rootReducer(state = initialState, action) {

  console.log('reducer')
  if (action.type === ADD_ARTICLE) {
    return Object.assign({}, state, {
      articles: state.articles.concat(action.payload)
    });
  }
  if(action.type === 'FOUND_BAD_WORD'){

  }
  if (action.type === "DATA_LOADED") {
    return Object.assign({}, state, {
      remoteArticles: state.remoteArticles.concat(action.payload)
    });
  }
  return state;
}
export default rootReducer; 