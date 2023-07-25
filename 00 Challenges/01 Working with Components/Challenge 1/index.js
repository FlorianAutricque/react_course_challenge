import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />

        <SkillList />
      </div>
    </div>
  );
}

function Intro() {
  return (
    <div>
      <h2> Florian Autricque </h2>
      <p> Hola I'm a web dev who is learning React </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      <Language name="JavaScript" emoji="💪" color="blue" />

      <Language name="HTML" emoji="🚴" color="yellow" />

      <Language name="CSS" emoji="👋" color="red" />

      <Language name="React" emoji="✅" color="orange" />
    </div>
  );
}

function Language(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      <p> {props.name} </p>
      <p> {props.emoji} </p>
    </div>
  );
}

function Avatar() {
  return <img className="avatar" src="/phone.jpeg" alt="avatar" />;
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
