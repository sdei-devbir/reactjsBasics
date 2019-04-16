/*function forbiddenWordsMiddleware({ dispatch }) {
    return function(next){
      return function(action){
        // do your stuff
        return next(action);
      }
    }
}*/

import { ADD_ARTICLE } from "../constants/action-types";
const forbiddenWords = ["spam", "money"];
export function forbiddenWordsMiddleware({ dispatch }) {
  return function(next) {
    return function(action) {
      // do your stuff
      console.log('middleware')
      console.log('action')
      console.log(action)
      if (action.type === ADD_ARTICLE) {
        console.log('if')
        const foundWord = forbiddenWords.filter(word =>
          action.payload.title.includes(word)
        );
        if (foundWord.length) {
          console.log('found bad word')
          return dispatch({ type: "FOUND_BAD_WORD" });
        }
      }      
      return next(action);
    };
  };
}