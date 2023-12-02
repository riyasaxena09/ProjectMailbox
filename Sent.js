import './Sent.css';
import { LoginActions } from '../Redux/loginredux';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { useNavigate } from 'react-router';
function Sent(){
  
   let m=[];
   
   function move(){
    nav('/sent');
  }
  function log(){
    nav('/')
  }
  function domove(){
    nav('/inbox');
  }
  function compose(){
    nav('/wel')
  }
    const nav=useNavigate();
    const [right,setright]=useState(true);
    localStorage.setItem("right",true);
    const dispatch=useDispatch();
    const mail=useSelector(state=>state.com1.mail);
    const {load,setload}=useState([]);
   const data=useSelector(state=>state.com1.des);
   const count=useSelector(state=>state.com1.count);
 console.log(data.length)
 console.log(count);
function show(ans){

dispatch(LoginActions.showmail(ans));

 
dispatch(LoginActions.deleteItem());

nav('/see');
}
function Delete(id){
    console.log(id);
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
  function compose(){
    dispatch(LoginActions.deleteItem());
    console.log(data)
    nav('/wel');
  }
    let e=[];
 console.log(mail);
  
    function Get(){
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

           for(const key in data){
            console.log(key)
           
            if(data[key].email===localStorage.getItem('mail'))
           {
         e.push({
sender:data[key].sender,
            email:data[key].email,
            text:data[key].text, 
        id:key,
         })


           }
        }
        

console.log(count)
       dispatch(LoginActions.add(e));
       dispatch(LoginActions.countnum(e.length))
      })
    }
     
        useEffect(()=>{
          
            Get();
           
          
        },[right]);
     var a;
      var c;

    return(
<>
<h1>Inbox</h1>
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
        <div className='ria'><span onClick={()=>show(item)}>* [{item.sender}]    {item.text}</span><button className="delete" onClick={()=>Delete(item.id)}>Delete</button></div>)
       })
    }
   </div>
</div>



</>
    )
}
export default Sent;