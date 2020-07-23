import React,{Component} from 'react';
import './App.css';
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
      existingThreads:[{
  threadQuestion:"Hello, how are you?",
  threadComments:[ {commText:"I'm fine, how about you?",
    id:1+Math.random(),
    isInEditMode:false,
    wasEdited:false,
    isAnswerBest:false},{commText:"test test test",
    id:1+Math.random(),
    isInEditMode:false,
    wasEdited:false,
    isAnswerBest:false}],
  id:1+Math.random(),
  bestAnswer:false
}],
      comment:"",

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
  comment:``,
  bestAnswer:false
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
    isInEditMode:false,
    wasEdited:false,
    isAnswerBest:false
    
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
      
      break;
    }
  }
  this.setState({
    existingThreads_renew,
  })
  
}
}


 onSave = val => {  
}

edit = (id,comment_id) => {
  const existingThreads_renew=[...this.state.existingThreads]
  for(let i=0;i<existingThreads_renew.length;i++)
  {
    if(id===existingThreads_renew[i].id)
    {
      for( let j=0;j<existingThreads_renew[i].threadComments.length;j++)
        if (comment_id===existingThreads_renew[i].threadComments[j].id)
        {
          existingThreads_renew[i].threadComments[j].isInEditMode=true;
          break;
        }
    }
  }
  this.setState({
    existingThreads_renew,
  })
}
editComment = (id,comment_id) => event => {
  const existingThreads_renew=[...this.state.existingThreads]
  for(let i=0;i<existingThreads_renew.length;i++)
  {
    if(id===existingThreads_renew[i].id)
    {
      for( let j=0;j<existingThreads_renew[i].threadComments.length;j++)
        if (comment_id===existingThreads_renew[i].threadComments[j].id)
        {
          existingThreads_renew[i].threadComments[j].commText=event.target.value;
          
          break;
        }
    }
  }
  this.setState({
    existingThreads_renew,
  })
}

submitEdit= (id,comment_id) => {
 const existingThreads_renew=[...this.state.existingThreads]
  for(let i=0;i<existingThreads_renew.length;i++)
  {
    if(id===existingThreads_renew[i].id)
    {
      for( let j=0;j<existingThreads_renew[i].threadComments.length;j++)
        if (comment_id===existingThreads_renew[i].threadComments[j].id)
        {
          existingThreads_renew[i].threadComments[j].wasEdited=true;
          existingThreads_renew[i].threadComments[j].isInEditMode=false;
            
          break;
        }
    }
  }
  this.setState({
    existingThreads_renew,

  })
}

likeAnswer= (id,comment_id) => {
 const existingThreads_renew=[...this.state.existingThreads]
  for(let i=0;i<existingThreads_renew.length;i++)
  {
    if(id===existingThreads_renew[i].id)
    { if(existingThreads_renew[i].bestAnswer===false)
      {
      for( let j=0;j<existingThreads_renew[i].threadComments.length;j++)
        if (comment_id===existingThreads_renew[i].threadComments[j].id)
        {
          existingThreads_renew[i].threadComments[j].isAnswerBest=true;
          existingThreads_renew[i].bestAnswer=true;
          break;
        }
      }
    }
  }

   this.setState({
    existingThreads_renew
  })
}

checkBestAnswer = (thread,comment) => {
      if(thread.bestAnswer===false)
      {
        if(comment.isAnswerBest===true)
        { thread.bestAnswer=true;
          return true;
        }

      }
      return false;
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
      addComment ={this.addComment}
      edit={this.edit}
      editComment={this.editComment}
      submitEdit={this.submitEdit}
      username={this.state.username}
      isAnswerBest={this.state.isAnswerBest}
      likeAnswer={this.likeAnswer}
      checkBestAnswer={this.checkBestAnswer}/>

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
