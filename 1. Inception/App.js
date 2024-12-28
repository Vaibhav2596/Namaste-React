{
  /* <div id="parent">
    <div id="child">
        <h1></h1>
    </div>
</div> */
}

// ReactElement(Object) => HTML(Browser Understands)

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },
    React.createElement("h1", {}, "Namaste React")
  )
);

const heading = React.createElement(
  "h1",
  { id: "heading", xyz: "abc" },
  "Hello World From React!"
);

console.log(heading);
console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);
root.render(parent);
