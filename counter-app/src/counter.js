import React from "react";

function Counter(props) {
  const { item } = props;

  return (
    <div className="counter">
      <p>{item.itemname}</p>
      <img
        src={item.image}
        alt={item.itemname}
        style={{ width: "150px", height: "150px" }}
      />
      <p>ราคา : {item.price} THB</p>
      <p>จำนวน : {item.value}</p>
      <button onClick={() => props.onIncrement(item)} className="btn btn-primary">
        +
      </button>
      <button onClick={() => props.onDecrement(item)} className="btn btn-secondary">
        -
      </button>
    </div>
  );
}

export default Counter;
