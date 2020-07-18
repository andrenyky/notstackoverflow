import React from 'react';

const LogIn = ({userInput,setUser}) => {
	return (
		<div className="f3 tc">		
	 <header>
    <p className="siteName"> NotStackOverflow</p>
    </header>
    <div className="ba bw3 br3 borderUser">
    <p style={{"fontFamily":"'Roboto', sans-serif"}}> Enter username </p>
    
     <input 
     type="text"
     placeholder="..."
     onChange={userInput}
     className="pa3 ba b--green bg- "
     style={{"borderRadius":"15px","backgroundColor":"#121212", color:"#AAA9A7", "width":"50%"}}
     />
     <div>
     <button onClick={setUser}
             className="link dim br-pill ba bw1 ph3 pv2 mb2 dib dark-gray"
             style={{"marginTop":"15px", backgroundColor:"#121212"}}>
     Login
     </button>
     </div>
     </div>
     </div>
	);
}

export default LogIn;