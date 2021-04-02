import React from 'react'
import Form from './components/Form'
import Triangle from './components/Triangle'
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      s:1,
      t:3,
      a:3,
      b:4,
      c:5
    }

    this.handleChange = this.handleChange.bind(this)
    this.calculate = this.calculate.bind(this)

  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]:event.target.value
    })
  }

  calculate = (event) => {
    this.setState({
      a:this.state.s*this.state.t,
      b:(this.state.t**2-this.state.s**2)/2,
      c:(this.state.t**2+this.state.s**2)/2
    })

    event.preventDefault()
  }

  render(){
    console.log(this.state.s,this.state.t)

    return(
      <div>
        <h3>s,tを入力してください</h3>
        <Form handleChange={this.handleChange} calculate={this.calculate} />
        <p>s={this.state.s} t={this.state.t} a={this.state.a} b={this.state.b} c={this.state.c}</p>
        <Triangle />
      </div>

    )
  }

}

export default App;
