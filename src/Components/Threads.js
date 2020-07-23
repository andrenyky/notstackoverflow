import React from 'react';
import { AiFillLike,AiOutlineLike } from 'react-icons/ai';
import avatar from './avatar.png';
const Threads = ({existingThreads,onSave,inputComment,addComment,edit,editComment,submitEdit,username,isAnswerBest,likeAnswer,checkBestAnswer}) => {
  
return (
	<div style={{}}>
      {existingThreads.map((item)=>{
        
        return (
          <div key={item.id}>
            <div className="ba bw3  threadStyle" style={{"padding":"25px","marginTop":"2em"}}>
            <p className="f2"id="questionStyle">{item.threadQuestion}</p>
            
            {item.threadComments.map(comment=>{
              
              return( comment.isInEditMode ? 

                (
                  <div key={comment.id} style={{"backgroundColor":"#403F33","width":"100%","height":"auto"}}>
                <div style={{"display":"flex"}}>
                <img src={avatar} id="avatar_pic" alt="avatar"/>
                <h3 style={{"marginLeft":"25px"}}>{username} said</h3>
                </div>
                  <textarea rows="7" cols="70" className="commentBox" style={{"whiteSpace": "pre-line",}} value={comment.commText} onChange={editComment(item.id,comment.id)} />
                  <button style={{"marginLeft":"15px"}} className="f6 grow no-underline br-pill ph3 pv2 mb2 dib white bg-mid-gray"  onClick={()=>submitEdit(item.id,comment.id)}> Edit </button>
                  </div>

                ) 
                :
                (
                <div key={comment.id} style={{"backgroundColor":"#403F33","width":"100%","height":"auto"}}>
                <div style={{"display":"flex"}}>
                <img src={avatar} id="avatar_pic" alt="avatar"/>
                <h3 style={{"marginLeft":"25px"}}>{username} said</h3>
                {comment.wasEdited ? (<p style={{"marginLeft":"25px"}}>*edited </p>):(<p></p>)}
                </div>
                <div >
                <p  style={{"whiteSpace": "pre-line","textAlign":"left","marginLeft":"50px"}}>{comment.commText}</p>
                <button className="f6 grow no-underline br-pill ph3 pv2 mb2 dib white bg-mid-gray" onClick={()=>edit(item.id,comment.id)}>Edit me </button>
                 { comment.isAnswerBest ? (<AiFillLike style={{"marginLeft":"15px"}}/>)
                  : 
                  (<AiOutlineLike style={{"marginLeft":"15px"}} onClick={()=>likeAnswer(item.id,comment.id)}/>)}
                </div>
                <hr style={{"marginTop":"25px"}}/>
                </div>
                ) 
                
              );
            })}
            
            <div style={{"display":"flex"}}>
            <textarea className="commentBox" onChange={inputComment(item.id)} value={item.comment} placeholder="Type your comment here..."/> 
            <div>
            <button style={{"marginLeft":"15px"}} className="f6 grow no-underline br-pill ph3 pv2 mb2 dib white bg-mid-gray" 
            onClick={()=>addComment(item)}>Add new comm </button>
            </div>
            </div>
            </div>
            
          </div>
        );
      })}
      </div>
      );
}

export default Threads;



///ITEM.bestAnswer
///comment.isAnswerBest
///Need to work with those to set the best answer for each thread