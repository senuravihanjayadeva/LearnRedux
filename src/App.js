import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./actions";

function App() {
  const counter = useSelector((state) => state.counter);
  const isLogged = useSelector((state) => state.isLogged);
  const dispatch = useDispatch();

  return (
    <div>
      <p>Counter : {counter}</p>
      <button
        onClick={() => {
          dispatch(increment(3));
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          dispatch(decrement());
        }}
      >
        -
      </button>
      <h3>{isLogged ? <p>Logged</p> : <p>Not Looged</p>}</h3>
    </div>
  );
}

export default App;
