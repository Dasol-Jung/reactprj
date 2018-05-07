import React, {Component} from 'react'
import './App.css'
import Person from './Person/Person'
import './Person/Person.css'


class App extends Component{

  state = {
    persons : [
      {id : "dasas", name : "Aiden", age: 29},
      {id : "asdasd", name : "Celia", age : 31},
      {id : "asdasdqw", name : "React16", age : 1}
    ],
    showPersons : false
}

deletePersonHandler = (personIndex)=>{

  const persons = [...this.state.persons];
  persons.splice(personIndex,1);
  this.setState({persons : persons})

}

nameChangedHandler= (event, id)=>{
  const personIndex = this.state.persons.findIndex(p=>{
    return p.id===id;
  });

  const person = {
    ...this.state.persons[personIndex]
  };

  person.name = event.target.value;

  const persons = [...this.state.persons];
  persons[personIndex]= person;


this.setState({
  persons: persons
})
}

togglePersonsHandler = ()=>{
  this.setState({
  showPersons : !this.state.showPersons
  })
}

render(){
  const style={
    backgroundColor : 'green',
    color : 'white',
    fontSize : '1.5rem',
    fontFamily : "Arial",
    padding : '30px',
    border : '1px solid lightblue',
    cursor : 'pointer',
  };

  
  //normal javascript works here

  let persons =null;

  if(this.state.showPersons){
    
    persons = (
      <div>
        {this.state.persons.map((person, index)=>{
      return <Person
      name={person.name}
      age={person.age}
      click={()=>this.deletePersonHandler(index)}
      key={person.id}
      change={(event)=>this.nameChangedHandler(event, person.id)}/>
    })}
    </div>    
    )
    style.backgroundColor = 'red';

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