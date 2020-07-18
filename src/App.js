import React,{Component} from 'react';
import './App.css';
import {MDCTextField} from '@material/textfield';
import Threads from './Components/Threads';
import QuestionBox from './Components/questionBox';
import LogIn from './Components/LogIn';
class App extends Component {
  constructor(props) {
    super(props);

    this.state={
      hasUsername:false,
      username:"",
      question:"",
      existingThreads:[],
      comment:""

    }
  }

/* FUNCTIONS*/
userInput = (event) => {
  this.setState({
    username: event.target.value
  })
}

setUser = () => {
  if(this.state.username.length>0)
  this.setState({
    hasUsername:true
  })
}

inputQuestion = question => (event) => {
  this.setState({
    question: event.target.value
  })
}


addQuestion = () => {
  if(this.state.question.length>0)
  {
 const newThread={
  threadQuestion:this.state.question,
  threadComments:[],
  id:1+Math.random(),
  comment:""
 }
 const list= [...this.state.existingThreads]
 list.push(newThread);
 this.setState({
  question:"",
  existingThreads:list
 },()=>{console.log(this.state.existingThreads)})
  }}
inputComment = item => (event) => {

const existingThreads_renew=[...this.state.existingThreads]
  for(let i=0;i<existingThreads_renew.length;i++)
  {
    if(item===existingThreads_renew[i].id)
    {
      existingThreads_renew[i].comment=event.target.value
      break;
    }
}
this.setState({
    existingThreads_renew,
  })
}


addComment = (thread) => {
  const newComm={
    commText:thread.comment.slice(),
    id:1+Math.random(),
  }
  if(newComm.commText.length>0)
  {
  const existingThreads_renew=[...this.state.existingThreads]
  for(let i=0;i<existingThreads_renew.length;i++)
  {
    if(thread.id===existingThreads_renew[i].id)
    {
      existingThreads_renew[i].threadComments.push(newComm);
      existingThreads_renew[i].comment="";
      console.log("Thread has new comm",existingThreads_renew[i]);
      break;
    }
  }
  this.setState({
    existingThreads_renew,
  })
  console.log("ThreadComms",thread.threadComments)
}
}


 onSave = val => {  
}



  render() {
 return (
 this.state.hasUsername===true ? 
  ( /*Feed page*/
    <div className="App">
      <header>
        <p className="siteName"> NotStackOverflow</p>
      </header>
      <QuestionBox 
      username={this.state.username}
      inputQuestion={this.inputQuestion}
      question={this.state.question}
      addQuestion={this.addQuestion} />
      
      <Threads  existingThreads={this.state.existingThreads} 
      onSave={this.onSave} 
      inputComment={this.inputComment} 
      addComment ={this.addComment}/>
    </div>
  ) 

  :


  (  /*Log page*/
    <LogIn userInput={this.userInput} setUser={this.setUser}/>
  )
  );
}
}

export default App;
