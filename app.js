const heading = React.createElement
    (
        "div",
        { id: 'parent' },
       [
        React.createElement
        (
            "div",
            { id: 'child1' },
            [React.createElement 
                (
                    "h1",
                    { id: 'heading' },
                    "Hello From React h1 tag"

                ), React.createElement('h2', { id: "heading2" }, "h2 from react")]
        ),
        React.createElement
        (
            "div",
            { id: 'child2' },
            [React.createElement
                (
                    "h1",
                    { id: 'heading' },
                    "Hello From React h1 tag"

                ), React.createElement('h2', { id: "heading2" }, "h2 from react")]
        )
       ]
    );
console.log(heading);
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(heading);
