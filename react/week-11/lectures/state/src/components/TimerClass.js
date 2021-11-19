import React, { Component } from "react";

class TimerClass extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0,
            articles: []
        }
        console.log("Inside constructor.")
    }
    handleClick = () => {
        this.setState({count: this.state.count + 1})
    }
    async componentDidMount() {
        let results = await fetch("https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=0cf790498275413a9247f8b94b3843fd")
        let data = await results.json()
        this.setState({
            articles: data.articles
        }, () => {
            console.log(this.state.articles)
        })
    }
    componentDidUpdate() {
        console.log("Component updated.")
    }
    render() {
        const {articles} = this.state
        console.log("Mounted to screen.")
        return (
            <>
                <h1>Hello world</h1>
                <ul>
                {articles.map(article => {
                    return <li>{article.title}</li>
                })}
                </ul>
                <h2>{this.state.count}</h2>
                <button onClick={this.handleClick}>Click</button>
            </>
        )
    }
}

export default TimerClass;