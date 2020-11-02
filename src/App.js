import React from 'react'
import './App.css'
import firebase from './config/firebase'
class App extends 
React.Component{
  constructor(){
    super()
    this.state = {
      todos: [],
      value: '',
    }
  }
  componentDidMount(){
    firebase.database().ref('todos').on('child_added',function(data){
      console.log(data.key)
    })
  }
  add_todo = () => {
    var unique_ID = firebase.database().ref('todos').push().key
    var obj = {title: this.state.value, edit: false, ID: unique_ID}
    this.state.todos.push(obj)
    this.setState({
      todos: this.state.todos,
      value: '',
    })
    firebase.database().ref('todos').child(obj.ID).set(obj)
  }
  delete_todo = (index,theID) =>{
    this.state.todos.splice(index,1)
    this.setState({
      todos: this.state.todos,
    })
    firebase.database().ref('todos').child(theID).remove()
  }
  edit_todo = (index,val) => {
    this.state.todos[index].edit= true
    this.setState({
      todos: this.state.todos
    })
  }
  handleChange = (e,index) => {
    this.state.todos[index].title = e.target.value
    this.setState({
      todos: this.state.todos
    })
  }
  update_todo = (index) => {
    this.state.todos[index].edit = false
    this.setState({
      todos: this.state.todos
    })
  }
  render(){
    //console.log('this is firebase',firebase)
    // console.log(this.state.todos)
    return(
      <>
        <div className='container' >
          <h1>To Do Application</h1>
          <div>
            <input value={this.state.value} onChange={(e)=>this.setState({value: e.target.value})} type='text' placeholder='Enter ToDo'/>
            <button onClick={this.add_todo}>Add</button>
            <ul>
              {
                this.state.todos.map((v,i)=>(
                  <li key={i}>
                    {v.edit ? <input type='text' placeholder={v.title} onChange={(e)=>this.handleChange(e,i)} /> : v.title}
                    {v.edit ?
                      <button onClick={()=> this.update_todo(i)}>Update</button>
                      :
                      <button onClick={()=> this.edit_todo(i,v.title)}>Edit</button>
                    }
                    <button id={this.state.todos[i].ID} onClick={()=>this.delete_todo(i,v.ID) } >Delete</button>
                  </li>
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