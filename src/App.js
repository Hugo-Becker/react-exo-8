
import './App.css';
import React from 'react'

class App extends React.Component {

  bjr=()=>{
    console.log('Bonjour')
  };
  alrt=()=>{
    alert('nooo copy')
  }


  render(){
    
    return (
      <div>
        <h1 onCopy={this.alrt}>Exercice 8</h1>
        <button style={{width:"200px", height:"2OOpx", backgroundColor:"red"}} onClick={this.bjr}></button>
      </div>
    
      );

  }
  
}

export default App;
