import './Welcome.css';
import React, { useState } from 'react';
import { Editor } from 'react-draft-wysiwyg';
import { EditorState } from 'draft-js';
import { ContentState, convertFromHTML } from 'draft-js';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { useRef } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
function Welcome(){
  
  const nav=useNavigate();
  const mailid=useRef();
  function move(){
    nav('/sent');
  }
  function log(){
    nav('/')
  }
  const data=useSelector(state=>state.com1.des);
  const count=useSelector(state=>state.com1.count);
  console.log(data)
const msg=useRef();
  const [editorState, setEditorState] = useState(() => EditorState.createEmpty());
function domove(){
  nav('/inbox');
}
function submithandler(e){

  e.preventDefault();
const email=mailid.current.value;
const contentState = editorState.getCurrentContent();
const text = contentState.getPlainText('\n');
const sender=localStorage.getItem("mail");
console.log(email);
console.log(text);
const obj={
  sender:sender,
  email:email,
  text:text
}

fetch('https://box1-a743f-default-rtdb.firebaseio.com/riya.json', 
{
     method:'POST',
body:JSON.stringify(obj),
headers:{
    'Content-type':'application/json',
},
}).then((res)=>{
if(res.ok){
return res.json();
}else{
    return res.json().then((data)=>{
        let errormsg="not a valid email";
  
       throw new Error(errormsg);
    });
}
}).then((data)=>{
console.log(data)

})


 }
 
   



  const onEditorStateChange = (newEditorState) => {
    setEditorState(newEditorState);
  };
    return(
        <>
    <h1>welcome to mail box client</h1>
      <div className=' main'>
        <div className='sidebar'>
          <div className='s' style={{backgroundColor:"gray"}}>Compose</div>
          <div className='s'  onClick={move}>Inbox<sup></sup></div>
          <div className='s' onClick={domove}>Sent</div>
          <div className='s'>Stared</div>
          <div className='s'>Trash</div>
          <div className='s'>Draft</div>
          <div className='l' onClick={log}>
            Logout
          </div>
          <div className='s'>
           Your Profile
          </div>
        </div>
        <form className='form2' onSubmit={submithandler}>
        <div>
        <label className="la">To:</label>
        <input className='I' ref={mailid}></input>
        </div>
        <hr></hr>
        <div>

          <label className="la">Subject:</label>
          <input className='I'></input>
        </div>
        <hr></hr>
        <div>
          <div className='edi'>  <Editor 
          ref={msg}
        editorState={editorState}
        onEditorStateChange={onEditorStateChange}
      />
     </div>
          <button className='send'>Send</button>

        </div>
        </form>
       
        
      </div>
 
</>
    )
}
export default Welcome;