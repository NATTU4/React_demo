const heading=React.createElement("div",{id:"parent"},
    React.createElement("div",{id:"child"},
        [React.createElement("h1",{id:"h1"},"Iam in h1 tag"),
        React.createElement("h2",{id:"h2"},"Iam in h2 tag"),
        React.createElement("h3",{id:"h3"},"Iam in h3 tag"),
        React.createElement("h4",{id:"h4"},"Iam in h4 tag"),
        React.createElement("h5",{id:"h5"},"Iam in h5 tag"),
        React.createElement("h6",{id:"h6"},"Iam in h6 tag"),
        React.createElement("h7",{id:"h7"},"Iam in h7 tag")]
            
    )
 );
 
console.log(heading);

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
