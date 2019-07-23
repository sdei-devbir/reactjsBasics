import { ADD_ARTICLE } from "../constants/action-types";
/* export function addArticle(payload) {
  return { type: ADD_ARTICLE, payload };
}
export function addArticleConsole(payload) {
    
    return { type: ADD_ARTICLE, payload  };
}
*/
export const addArticle = (payload) => {

    
    return { type: ADD_ARTICLE, payload };
}

export const addArticleConsole = () => {

    return { type: 'test' };
} 

/*
export const getData = () => {

    return fetch("https://jsonplaceholder.typicode.com/posts")
      .then(response => response.json())
      .then(json => {
        return { type: "DATA_LOADED", payload: json };
    });
} 
*/
/* export const getData = () => {

    console.log('action API call')
    return function(dispatch) {
        return fetch("https://jsonplaceholder.typicode.com/posts")
            .then(response => response.json())
            .then(json => {
            dispatch({ type: "DATA_LOADED", payload: json });
        });
    };
} */

export const getData = () => {

    return { type: "DATA_REQUESTED" }; // only type is required
} 
