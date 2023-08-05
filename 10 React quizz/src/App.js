import Header from "./Header";
import Main from "./Main";
import { useEffect, useReducer } from "react";

const initialState = {
  questions: [],
  status: "loading",
};

function reducer(state, action) {
  switch (action.type) {
    case "dataReceived":
      return {
        //grab all the current state 👇
        ...state,
        questions: action.payload,
        status: "ready",
      };
    case "dataFailed":
      return {
        //return the entire state
        ...state,
        status: "error",
      };
    default:
      throw new Error("Action is unknown");
  }
}

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(function () {
    fetch(`http://127.0.0.1:9000/questions`).then(res =>
      res
        .json()
        .then(data => dispatch({ type: "dataReceived", payload: data }))
        .catch(err => dispatch({ type: "dataFailed" }))
    );
  }, []);

  return (
    <div className="app">
      <Header />

      <Main>
        <p>Question</p>
      </Main>
    </div>
  );
}
