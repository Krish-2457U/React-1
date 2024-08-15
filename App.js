// const h1 = React.createElement("h2", {id:"heading", xyz : "abc"}, "Heading from React!");

//     //  creating a root

//     const root = ReactDOM.createRoot(document.getElementById("root"));

//     root.render(h1)

//     // console.log(h1)


/**
 * 
 * <div id = "parent"></div>
 * <div id = "child"> </div>
 * <h1>Heading Tag</h1>
 * 
 */

// const parent = React.createElement("div",{id:"parent"},React.createElement("div",{id:"child"},React.createElement("h1",{},"I'm Heading Tag")));

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(parent);



/**
 * 
 * <ol id="one"></ol>
 * <ol id="two"></ol>
 * <li>Idli
 */


// const one = React.createElement("ol",{id:"one"} ,React.createElement("ol",{id:"two"},React.createElement("li",{},"Idli")));


// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(one);

/*<div id = "parent"></div>
* <div id = "child"> </div>
* <h1>Heading Tag</h1>
*/

const parent = React.createElement("div", {id:"parent"},
  [  React.createElement("div", {id:"child1"},[
     React.createElement("h1", {}, "I'm Heading 1"),
     React.createElement("h2", {}, "I'm Heading 2"),]),

   React.createElement("div", {id:"child2"},[
   React.createElement("h1", {}, "I'm Heading 1"),
   React.createElement("h2", {}, "I'm Heading 2"),]),
  ]);

const root = ReactDOM.createRoot(document.getElementById("header"));
console.log(parent);
root.render(parent);