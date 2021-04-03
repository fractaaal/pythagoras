import React from 'react'
import Form from './components/Form'
import Triangle from './components/Triangle'
import './App.css';
import Length from './components/Length';

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
      [event.target.name]:Number(event.target.value)
    })
  }

  calculate = (event) => {
    const reg = new RegExp(/^[0-9]*$/)

    switch(true){
      case(this.state.s<1||this.state.t<1):
        alert('sとtは1以上の整数です!')
        break;
      case(!(reg.test(this.state.s))||!(reg.test(this.state.t))):
        alert('sとtは半角数字で入力してください!')
        break;
      case(this.state.s>this.state.t):
        alert('sはt以下にしてください!')
        break;
      case((this.state.s%2) === 0 && (this.state.t%2) === 0):
        alert('sとtが偶数になってます!')
        break;
      case((this.state.s%2) === 0):
        alert('sが偶数になってます!')
        break;
      case((this.state.t%2) === 0):
        alert('tが偶数になってます!')
        break;

      default:
        this.setState({
          a:this.state.s*this.state.t,
          b:(this.state.t**2-this.state.s**2)/2,
          c:(this.state.t**2+this.state.s**2)/2
        })
        break;
    }


    event.preventDefault()
  }

  render(){
    console.log(this.state.s,this.state.t)

    return(
      <div>
        <h3>互いに素な奇数s,tを入力してください (1≦s≦t)</h3>
        <Form handleChange={this.handleChange} calculate={this.calculate} />
        <Length a={this.state.a} b={this.state.b} c={this.state.c}/>
        <Triangle a={this.state.a} b={this.state.b}/>
      </div>

    )
  }

}

export default App;
