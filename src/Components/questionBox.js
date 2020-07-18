import React from 'react';

const QuestionBox = ({username,inputQuestion,question,addQuestion}) => {
	return(
		<div>
		<p className="f3 i courier">Hello, {username} </p>
      <div>
      <p className="f3 i courier">Type your question here</p>
       <textarea className="questionBox" placeholder="Type question here..."
                 onChange={inputQuestion(question)} value={question}/>
       <div>
      <button  style={{"marginTop":"15px", backgroundColor:"#121212"}} className="link dim br-pill ba bw1 ph3 pv2 mb2 dib dark-gray"
       type="submit"

       onClick={addQuestion}>Add a question </button>
        </div>
        </div>
        </div>
	);
}

export default QuestionBox;