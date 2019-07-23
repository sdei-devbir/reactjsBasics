import React from "react";
import { connect } from "react-redux";
const mapStateToProps = state => {
  return { articles: state.articles };
};
const ConnectedList = ({ articles }) => (

  <div>
        <div> List Component here </div>
        <ul className="list-group list-group-flush">
            {articles.map(el => (
            <li className="list-group-item" key={el.id}>
                {el.title}
            </li>
            ))}
        </ul>

  </div>
  
);
const List = connect(mapStateToProps)(ConnectedList);
export default List;