import React, {Component} from 'react'
import './App.css'
import Person from './Person/Person'
import './Person/Person.css'

class App extends Component{

  state = {
    persons : [
      {name : "Aiden", age: 29},
      {name : "Celia", age : 31},
      {name : "React16", age : 1}
    ],
    showPersons : false
}

deletePersonHandler = (personIndex)=>{

  const persons = [...this.state.persons];
  persons.splice(personIndex,1);
  this.setState({persons : persons})

}

togglePersonsHandler = ()=>{
  this.setState({
  showPersons : !this.state.showPersons
  })
}

render(){
  const style={
    backgroundColor : '#eee',
    fontSize : '1.5rem',
    fontFamily : "Arial",
    padding : '30px',
    border : '1px solid lightblue',
    cursor : 'pointer'
  };

  //normal javascript works here

  let persons =null;

  if(this.state.showPersons){
    persons = this.state.persons.map((person, index)=>{
      return <Person name={person.name} age={person.age} click={()=>this.deletePersonHandler(index)}/>
    })
  }

  return (

  //inside return, JSX not javascript
    <div className="App">
    <h1>React App</h1>
    <p>Hello</p>
    <button style ={style} onClick={this.togglePersonsHandler}>Toggle Persons</button>
    {persons}
    </div>
  );
}

}

export default App;