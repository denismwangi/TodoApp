import React, { Component } from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Todos from './components/Todos'
import Header from './components/layout/Header'
import AddTodo from './components/AddTodo'
import './App.css'
import uuid from 'react-uuid'
import About from './components/pages/About'
import axios from 'axios'

 class App extends Component {
  state = {
    todos: []
}
componentDidMount(){
  axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
  //.then(res => console.log(res.data))
  .then(res => this.setState({todos: res.data}))

}
//toggle complete
markComplete = (id) =>{
  this.setState({
    todos: this.state.todos.map(todo =>{
      if(todo.id === id){
        todo.completed = !todo.completed
      }
      return todo
    })
  });
}

//Add todo
addTodo = (title) =>{
 // console.log(title);

 //const newTodo ={
  // id: uuid(),
  // title: title,
  // completed: false
 //}
 //this.setState({todos: [...this.state.todos, newTodo]})
axios.post('https://jsonplaceholder.typicode.com/todos', {
  title,
  completed: false
})
.then(res => this.setState({todos: [...this.state.todos, res.data] }) )

}



//Delete todo
delTodo = (id) => {
  // console.log(id)
// this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id )]
axios.delete('https://jsonplaceholder.typicode.com/todos/${1d}')
.then(res => this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id )] }));
}
 
  render() {
   // console.log(this.state.todos)

    return (
      <Router>
      <div className="App">

     
      <div className = "container">
        <Header/>
       <Route exact path="/" render={props => (
         <React.Fragment>
         <AddTodo addTodo={this.addTodo}/>
        <Todos todos={this.state.todos}
         markComplete = {this.markComplete}
         delTodo = {this.delTodo}
         />
         </React.Fragment>

       )}  />
         <Route path="/about" component={About}/>
      </div>
      </div>
      </Router>
    )

    
  }
}

export default App

