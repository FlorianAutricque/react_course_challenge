import Header from "./Header";
import Main from "./Main";
import Loader from "./Loader";
import Error from "./Error";
import { useEffect, useReducer } from "react";
import StartScreen from "./StartScreen";

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
  //question and status are destructured from state

  const [{ questions, status }, dispatch] = useReducer(reducer, initialState);

  const numQuestions = questions.length;

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
        {status === "loading" && <Loader />}
        {status === "error" && <Error />}
        {status === "ready" && <StartScreen numQuestions={numQuestions} />}
      </Main>
    </div>
  );
}
