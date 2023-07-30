// small challenges for fun made from codepen.io
// challenge 1

/**
  Challenge: Display `JSX is cool!` as an output

  Solution: https://codepen.io/angelo_jin/pen/xxXrZLd
  Video for reference: https://youtu.be/VzNNjNmbXpY
**/
function App() {
  return <div> JSX is cool </div>;
}

ReactDOM.render(<App />, document.getElementById("root"));

// challenge 2

/**
  Challenge: Display all users to the browser
  Small Hint: Use array map with react key

  Solution: https://codepen.io/angelo_jin/pen/wvreMpZ
  Video for reference: https://youtu.be/VzNNjNmbXpY
**/

const users = [
  { name: "John Doe", id: 1 },
  { name: "Jane Doe", id: 2 },
  { name: "Billy Doe", id: 3 },
];

function App() {
  return (
    <>
      <h3>User Name</h3>
      <ul>
        {users.map(user => (
          <li>{user.name}</li>
        ))}
      </ul>
    </>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));

// challenge 3
/**
  Challenge: Make the button functional
  A click on button should toggle (show/hide) the string `Toggle Challenge` each time it is pressed

  Solution: https://codepen.io/angelo_jin/pen/abLwyrL
  Video for reference: https://youtu.be/VzNNjNmbXpY
**/
function App() {
  const [show, setShow] = React.useState(true);

  function handleHide() {
    setShow(show => !show);
  }

  return (
    <>
      <button onClick={handleHide}>
        {show ? "Hide Element Below" : "Show Element"}
      </button>

      <div>{show ? "Toggle Challenge" : ""} </div>
    </>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));

//challenge 4
/**
  Challenge: User should be able to type in any characters on input and those character should show in the browser.

  Solution: https://codepen.io/angelo_jin/pen/yLzvMop
  Video for reference: https://youtu.be/VzNNjNmbXpY
**/
function App() {
  const [text, setText] = React.useState("");

  return (
    <>
      <input
        type="text"
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder="Enter Text"
      />
      <p>{text}</p>
    </>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));

//challenge 5
/**
  Challenge: Make button disabled when there is no character on the input field. Enable the `Submit` button (remove button from being disabled) when there is at least one character.

  Solution: https://codepen.io/angelo_jin/pen/dyVmyYz
  Video for reference: https://youtu.be/VzNNjNmbXpY
**/
function App() {
  const [enable, setEnable] = React.useState("");

  return (
    <>
      <h3>Disable Button Challenge</h3>
      <input
        type="text"
        value={enable}
        onChange={e => setEnable(e.target.value)}
      />
      <button disabled={!enable}>Submit</button>
    </>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));

//challenge 6

/**
  Challenge: Parent text (I need to be updated from my child) should be updated when Child button below is clicked. Feel free to use any string to update the parent's current string.

  Solution: https://codepen.io/angelo_jin/pen/KKXoKgO
  Video for reference: https://youtu.be/VzNNjNmbXpY
**/
function Child({ setValue }) {
  return (
    <>
      <div>Child</div>
      <button onClick={() => setValue("yo")}>Change Parent Value</button>
    </>
  );
}

function Parent() {
  const [value, setValue] = React.useState(
    "I need to be updated from my child"
  );

  return (
    <>
      <h3>Update Parent State Challenge (Using Callback)</h3>
      <div className="wrapper">
        <div>Parent</div>
        <div className="box-wrapper">{value}</div>
      </div>

      <div className="wrapper">
        <Child setValue={setValue} />
      </div>
    </>
  );
}

ReactDOM.render(<Parent />, document.getElementById("root"));

//challenge 7

/**
  Challenge: Show entire Child component content inside Parent component. Only add code on Parent Component below

  Solution: https://codepen.io/angelo_jin/pen/MWEVJNb
  Video for Reference: https://youtu.be/VzNNjNmbXpY
**/
function Child() {
  return <div>This is children content </div>;
}

// Add code only here
function Parent({ children }) {
  return (
    <div>
      <h3>Parent Component</h3>
      {children}
    </div>
  );
}

function App() {
  return (
    <Parent>
      <Child />
    </Parent>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));

//challenge 8
/**
  Challenge: Make this app work like a calculator that can add two numbers.

  Functionality: When user place numbers on first and second input and hit the button. The sum should appear on the `Total: ` as an output.

  Solution: https://codepen.io/angelo_jin/pen/BawrWzy
  Video for reference: https://youtu.be/VzNNjNmbXpY
**/
function App() {
  const [number1, setNumber1] = React.useState();
  const [number2, setNumber2] = React.useState();
  const [total, setTotal] = React.useState(0);

  function calc() {
    setTotal(number1 + number2);
  }

  return (
    <div>
      <h2>Adding Two Numbers</h2>
      <input
        placeholder="First Number"
        type="number"
        value={number1}
        onChange={e => setNumber1(+e.target.value)}
      />
      <input
        placeholder="Second Number"
        type="number"
        value={number2}
        onChange={e => setNumber2(+e.target.value)}
      />

      <button onClick={calc}>Add Two Numbers</button>
      <p>Total: {total}</p>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));

//challegne 9
/**
  Challenge: Pressing `Increment` button should increase the counter count by one. Pressing `Decrement` button should decrease the counter count by one.

  Solution: https://codepen.io/angelo_jin/pen/yLzKMXX
  Video for reference: https://youtu.be/VzNNjNmbXpY
**/
const App = () => {
  const [math, setMath] = React.useState(0);

  return (
    <div>
      <h2>Counter: {math}</h2>
      <button onClick={() => setMath(math + 1)}>Increment</button>
      <button onClick={() => setMath(math - 1)}>Decrement</button>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
