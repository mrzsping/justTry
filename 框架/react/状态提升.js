import React from 'react'
class Us extends React.Component{
  constructor(props){
    super(props);
  }
  toCh = (e) => {
    this.props.toCh(e.target.value)
  }
  render(){
    return(
      <div>
        <input onChange={this.toCh} value={this.props.num}/>
      </div>
    )
  }
}
  class Ch extends React.Component{
    constructor(props){
      super(props);
    }
    toUs = (e) => {
      this.props.toUs(e.target.value)
    }
    render(){
      return(
        <div>
          <input onChange={this.toUs} value={this.props.num}/>
        </div>
      )
    }
  }

export default class Change extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      num: 0,
      type: 1
    }
  }
  toUs = (num) => {
    console.log(num)
    this.setState({
      type: 0,
      num
    })
  }
  toCh = (num) => {
    console.log(num)
    this.setState({
      type: 0,
      num
    })
  }
  render(){
    let num1 = this.state.type === 0 ? parseInt(this.state.num) : parseInt(this.state.num) / 6
    let num2 = this.state.type === 1 ? parseInt(this.state.num) : parseInt(this.state.num) * 6
    return(
      <div>
        <Us num={num1} toCh={this.toCh}></Us>
        <Ch num={num2} toUs={this.toUs}></Ch>
      </div>
    )
  }
}
// 父组件的函数作为子组件的属性传入，并在子组件上触发