import React from 'react'
import './App.css'
class App extends 
React.Component{
  constructor(){
    super()
    this.state = {
      todos: ['safeer','waleed'],
      value: '',
    }
  }
  add_todo = () => {
    this.state.todos.push(this.state.value)
    this.setState({
      todos: this.state.todos,
      value: '',
    })
  }
  render(){
    return(
      <>
        <div className='container' >
          <h1>To Do Application</h1>
          <div>
            <input value={this.state.value} onChange={(e)=>this.setState({value: e.target.value})} type='text' placeholder='Enter ToDo'/>
            <button onClick={this.add_todo} >Add</button>
            <ul>
              {
                this.state.todos.map((v,i)=>(
                  <li key={i} >{v}</li>
                ))
              }
            </ul>
          </div>
        </div>
      </>
    )
  }
}
export default App;