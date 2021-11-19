class HelloWorld {
    constructor(text) {
        this.props = {     // it's an object
            text: text     // key/value pair
        };
    };
    render() {
        // returns a DOM node
        let domNode = document.createElement("h1");
        domNode.innerText = this.props.text;
        let root = document.getElementById("root")
        root.appendChild(domNode)
        return domNode;
    };
};