import React from "react";

export default class List extends React.Component {
  render() {
    const { list } = this.props;
    const { handleDelete } = this.props;

    return (
      <ul>
        {list.map((listItem, index) => {
          return (
            <li key={index} className="list-item">
              <span className="list-item-text">{listItem}</span>
              <button onClick={() => handleDelete(index)} className="delete">
                x
              </button>
            </li>
          );
        })}
      </ul>
    );
  }
}