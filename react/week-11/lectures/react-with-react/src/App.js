class App extends React.Component{
    constructor(){
        super()
    }
    render(){       // render returns JSX, required
        console.log(this.props.cityName)
        return <h1>Hello, {this.props.cityName}.</h1>
    }
}