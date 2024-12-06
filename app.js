const newdata = document.getElementById("root");
        newdata.innerHTML="Hello from js"
        // Using React to update #react
        const reactElement = React.createElement("div", {id:"react"}, "Hello from React");
      const reactRoot =  ReactDOM.createRoot(document.getElementById("react"));
   

       const nestedElement = React.createElement("div",{id:"parent"},
                             React.createElement("div",{id:"child1"},
                            [React.createElement("h1",{},"Hello Ashique"),React.createElement("h2",{},"Hello Jabben")],
                             React.createElement("div",{id:"child2"},
                             React.createElement("h3",{},"Hello Izhaan Marzuq")
                             )));

      const reactRoot_nested =  ReactDOM.createRoot(document.getElementById("parent"));
       reactRoot_nested.render(nestedElement);
