import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
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

class ListImages extends React.Component
{
  render()
  {return(
    <div className='listStyle'>
    <img style={{height:'20px',width:'20px',padding:'10px'}}src={this.props.url}></img>
    <p>{this.props.text}</p>
    </div>);
  }
}

class Jokes extends React.Component
{
  render()
  {return(
    <div className='jokes'>
   <b>{this.props.option.setup}</b>
    <p>{this.props.option.punchline}</p>
    </div>);
  }
}


class JSONlist extends React.Component
{
  render()
  {return(
 
<div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
    <img style={{height:'200px',width:'200px'}} src={this.props.option.avatar}></img>
    </div>
    <div class="flip-card-back">
      <b>{this.props.option.employment.title}</b>
      <p>{this.props.option.first_name} {this.props.option.last_name}</p>
    </div>
  </div>
</div>

   );
  }
}


function App() {

const[count,setCount] = useState(0);
const[FirstName,setFirstName] = useState('');
const[LastName,setLastName] = useState('');


const array_list = ['dog', 'cat', 'chicken', 'cow', 'sheep', 'horse'];

const image_list = [
  {"image":"https://img.icons8.com/office/16/000000/jake--v2.png","text":"Jake"},
  {"image":"https://img.icons8.com/office/16/000000/popeye.png","text":"Popeye"},
  {"image":"https://img.icons8.com/office/16/000000/genie.png","text":"Genie"},
  {"image":"https://img.icons8.com/office/16/000000/superman.png","text":"Superman"}              
];


const JokesList = [
	{
		id: '1',
		setup: 'Whats the best thing about a Boolean?',
		punchline: 'Even if youre wrong, you\'re only off by a bit'
	},
	{
		id: '2',
		setup: 'Why do programmers wear glasses?',
		punchline: 'Because they need to C#'
	},
  {
		id: '3',
		setup: 'Why do riders wear helmet?',
		punchline: 'Because they dont want to face hell'
	},
  {
		id: '4',
		setup: 'Whats the best thing about a Boolean?',
		punchline: 'Even if youre wrong, you\'re only off by a bit'
	},
	{
		id: '5',
		setup: 'Why do programmers wear glasses?',
		punchline: 'Because they need to C#'
	},
  {
		id: '6',
		setup: 'Why do riders wear helmet?',
		punchline: 'Because they dont want to face hell'
	}
];

const [ListJson,setListJSON]= useState([]);

useEffect(()=>{ fetch(
  "https://random-data-api.com/api/users/random_user?size=10")
              .then((res) => res.json())
              .then((json) => {setListJSON(json)});
},[]);

return (  
<div className="App">
<div className="square">
<h1>React JS Practice Exercises </h1>
<a href='https://coderfiles.dev/blog/reactjs-coding-exercises/'>Challenge Link</a>

<div className='outer-div'>
<div className='inner-div'>
<b> Exercise-1 - simple hello world</b> 
<p>Hello world !</p>
</div>
<div className='inner-div'>
<b> 
Exercise-2 simple click event handling</b> 
<button className="button-style" onClick={()=>alert("clicked")}>Normal Button</button>
</div>
</div>


<div className='outer-div'>
<div className='inner-div'>
<b> Exercise-3 Parent child component communication</b> 
<Button1 alertmessage1="alert Parent Component">Button Parent Component</Button1>
</div>
<div className='inner-div'>
<b> Exercise-4 increment using usestate hooks</b> 
<p>Count:{count}</p>
<button className="button-style" onClick={()=>setCount(count+1)}> Start Counting</button>
</div>
</div>



<div className='outer-div'>
<div className='inner-div'>
<b> Exercise-5 Rendering list using Map</b> 
<ul>
{array_list.map((option, index)=> 
<li key={index}>{option}</li>)}
</ul>
</div>

<div className='inner-div'>
<b> Exercise-6 Image list using map</b> 
{image_list.map((option,index)=>
<ListImages key={index} url={option.image} text={option.text}></ListImages>)}
</div>
</div>


<div className='outer-div'>
<div className='inner-div'>
<b> Exercise-7 Create a Form</b> 
<input 
className='listStyle'
placeholder='First Name' 
onChange={(e)=>{setFirstName(e.target.value);console.log(FirstName)}}
type="text"></input>
<input 
className='listStyle' 
placeholder='Last Name' 
onChange={(e)=>{setLastName(e.target.value);console.log(LastName);}}
type="text"></input>
<button className='button-style' onClick={()=>alert("Welcome "+FirstName+ " "+ LastName)}>Greet !</button>
</div>
</div>

<div className='outer-div'>
<div className='inner-div'>
<b> Exercise-8 List Jokes</b> 
<div className='JokesDiv'>
{JokesList.map((option,index)=>
<Jokes key={index} option={option}></Jokes>)}
</div>
</div></div>

<div className='outer-div'>
<div className='inner-div'>
<b> Exercise-9 Fetch JSON and render GRID Via API</b> 
<div className='JokesDiv'>
{ListJson.map((option,index)=>
<JSONlist key={index} option={option}></JSONlist>)}
</div>
</div></div>

</div></div>

  );
}

export default App;
