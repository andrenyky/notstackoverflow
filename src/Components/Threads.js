import React from 'react';
import EdiText from 'react-editext';
const Threads = ({existingThreads,onSave,inputComment,addComment}) => {
return (
	<div style={{}}>
      {existingThreads.map((item)=>{
        
        return (
          <div key={item.id}>
            <div className="ba bw3  threadStyle" style={{"padding":"25px","marginTop":"2em"}}>
            <p className="f2"id="questionStyle">{item.threadQuestion}</p>
            
            {item.threadComments.map(comment=>{
              
              return(
                <div key={comment.id}>
                
                <EdiText
        type='text'
        value={comment.commText}
        onSave={onSave}
      />
             
                <hr/>
                </div>
                
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