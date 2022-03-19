import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import { render } from '@testing-library/react';

class Button1 extends React.Component
{
  render()
  {
    return(
      <div>
      <button className="button-style" onClick={()=>alert(this.props.alertmessage1)}>{this.props.children}</button>
      <Button2 alertmessage2={"child from:"+this.props.alertmessage1}>{"child from:"+this.props.children}</Button2>
        </div>
    );
  }
}

class Button2 extends React.Component
{
  render()
  {
    return(
      <button className="button-style" onClick={()=>alert(this.props.alertmessage2)}>{this.props.children}</button>
    );
  }
}


function App() {

const[count,setCount] = useState(0);

  return (
    <div className="App">
     <div className="square">
    <b> Exercise-1 - simple hello world</b> 
<p>Hello world !</p>

<b> Exercise-2 simple click event handling</b> 
<button className="button-style" onClick={()=>alert("clicked")}>Normal Button</button>

<b> Exercise-3 Parent child component communication</b> 
<Button1 alertmessage1="alert Parent Component">Button Parent Component</Button1>

<b> Exercise-4 increment using usestate hooks</b> 
<p>Count:{count}</p>
<button className="button-style" onClick={()=>setCount(count+1)}> Start Counting</button>
     </div>
    
    </div>
  );
}

export default App;
