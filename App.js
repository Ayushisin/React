
//************************************************************************create single element

// const heading = React.createElement (
//     "h1", { id: "heading",
//              abc: "ymc"
// }, "Hello React");
// console.log(heading) // object

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);


// **************************************************************************create nested element

const perent =React.createElement("div",{id:"perent"}, 
   [React.createElement("div",{id:"child"}, [React.createElement("h1", {} , "hello h1 i am here"), React.createElement("h2", {} , "hello h2 i am here" )])
,React.createElement("div",{id:"child"}, [React.createElement("h1", {} , "hello h1 i am here"), React.createElement("h2", {} , "hello h2 i am here" )])]);
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(perent)