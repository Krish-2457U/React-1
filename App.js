const parent = React.createElement("div", {id:"parent"},
  [  React.createElement("div", {id:"child1"},[
     React.createElement("h1", {}, "This is React Dev Tutorial"),
     React.createElement("h2", {}, "hafhkahkfhkahf"),]),

   React.createElement("div", {id:"child2"},[
   React.createElement("h1", {}, "I'm Heading 1"),
   React.createElement("h2", {}, "I'm Heading 2"),]),
  ]);

const root = ReactDOM.createRoot(document.getElementById("header"));
console.log(parent);
root.render(parent);