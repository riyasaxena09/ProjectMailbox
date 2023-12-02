import { LoginActions } from "../Redux/loginredux";
import { useEffect } from "react";
import './inbox.css';
import { useSelector } from 'react-redux';
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
function Inbox(){
    const nav=useNavigate();
    const count=useSelector(state=>state.com1.count);
    function move(){
        nav('/sent');
      }
      function compose(){
        nav('/wel');
      }

      function log(){
        nav('/')
      }
      function domove(){
        nav('/inbox');
      }
    function show(ans){
    
        dispatch(LoginActions.showmailInbox(ans));
        nav('/see2');
    }
    function Delete(id){
        fetch(`https://box1-a743f-default-rtdb.firebaseio.com/riya/${id}.json`,{
        method:'DELETE',
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
        console.log(data);
        dispatch(LoginActions.deleteItem());
     setright(!right)
    })
    }
    let t=0;
    const [right,setright]=useState(false);
    const dispatch=useDispatch();
    let e=[];
    const data=useSelector(state=>state.com1.sent);

    function Getin(){
        t++;
        fetch('https://box1-a743f-default-rtdb.firebaseio.com/riya.json',{
         method:'GET',
            headers:{
                'Content-type':'application/json',
            },
        }).then((res)=>{
            if(res.ok){
        return res.json();
            }else{
                return res.json().then((data)=>{
                    let errormsg="Authentication fault";
                 
                   throw new Error(errormsg);
                });
            }
        }).then((data)=>{
           console.log(data)
dispatch(LoginActions.deleteItemInbox());
           for(const key in data){
            console.log(key)
           
            if(data[key].sender===localStorage.getItem('mail'))
           {
         e.push({
            sender:data[key].sender,
            email:data[key].email,
            text:data[key].text, 
        id:key,
         })
           }
        }
        console.log(e)
        dispatch(LoginActions.sentbox(e));
      })
    }
    useEffect(()=>{
        Getin();
    
    },[right]);
      
    
   console.log(data)
  return(
    <>
     <h1>SentBox</h1>
      <div className=' main'>
        <div className='sidebar'>
          <div className='s' style={{backgroundColor:"gray"}} onClick={compose}>Compose</div>
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
      <div className="for">
    {
        data.map(item=>{
            return(
         <div className="ria"> <span onClick={()=>show(item.id)}>*[{item.email}] {item.text}</span><button className="delete" onClick={()=>Delete(item.id)}>Delete</button></div>
            )
        })
    }
    </div>
    </div>
    </>
  )  
}
export default Inbox;