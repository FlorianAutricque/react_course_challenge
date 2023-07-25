import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const languages = [
  {
    name: "JavaScript",
    level: "god",
    color: "red",
  },
  {
    name: "HTML",
    level: "god",
    color: "blue",
  },
  {
    name: "CSS",
    level: "god",
    color: "purple",
  },
  {
    name: "React",
    level: "noob",
    color: "yellow",
  },
  {
    name: "Ruby",
    level: "intergod",
    color: "green",
  },
];

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
      <ul className="skill-list">
        {languages.map(l => (
          <Language lamObj={l} key={l.name} />
        ))}
      </ul>
    </div>
  );
}

function Language({ lamObj }) {
  return (
    <div className="skill" style={{ backgroundColor: lamObj.color }}>
      <p> {lamObj.name} </p>
      <p>
        {" "}
        {lamObj.level === "god"
          ? "💪"
          : "" || lamObj.level === "noob"
          ? "🤮"
          : "" || lamObj.level === "intergod"
          ? "😀"
          : ""}{" "}
      </p>
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
