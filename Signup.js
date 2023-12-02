import { useRef, useState } from "react";
import LoginSlice from "../Redux/loginredux";
import { LoginActions } from "../Redux/loginredux";
import { useNavigate } from "react-router";
import { useSelector } from 'react-redux';
import { useDispatch } from "react-redux";
import './Signup.css';
function SignUp(){
    const count=useSelector(state=>state.com1.count)
    const dispatch=useDispatch();
    const [change,setchange] =useState(false);
    const nav=useNavigate();
    let a=0;
    const [c,setc]=useState(0);
    function ChangeHandler(e){
e.preventDefault();
setchange(!change);
    }
    const Iemail=useRef();
    const Ipass=useRef();
   function submithandler(e){
    console.log(count)
        const mail=Iemail.current.value;

        const pass=Ipass.current.value;
        console.log(mail)
        localStorage.setItem("mail",mail);
      //dispatch(LoginActions.mail(mail));
        e.preventDefault();
        let url;
        if(change){
url='https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCGr-BeIHaM5DSBQE2fvL3NHUDFI4BKzDk';
        }else{
            url='https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCGr-BeIHaM5DSBQE2fvL3NHUDFI4BKzDk';
        }
        fetch(url,{
            method:'POST',
            body:JSON.stringify({
                email:mail,
                password:pass,
                returnSecureToken:true,
            }),
            headers:{
                'Content-type':'aplication/json',
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

            console.log(data.idToken);
        
            localStorage.setItem("token",data.idToken);
            let a=0;
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
                 
       
                  for(const key in data){
                  
                  
                   if(data[key].email===localStorage.getItem('mail'))
                  {a++;
                    console.log("hy")
                   
               dispatch(LoginActions.countnum());
                  }
                 
                }
            })
          
       nav('/wel')
       console.log(a)
        })
.catch((err)=>{
    alert(err.message);
})        
    }

    return(
        <>
        
        <h1 className="head">Welcome to the Mail Box</h1>
        <br></br>
        <hr></hr>
        <div className="form">
        <form  onSubmit={submithandler}>
            {change ?<h1 className="he">Login</h1>:<h1 className="he">SignUp</h1>}
        
            <div className="la"><label>Email:</label>
            <input className='I' type="email"  ref={Iemail}></input></div>
            <div className="la"><label>Password:</label>
            <input className='I' type="password" ref={Ipass}></input></div>
            <div>{change?<button  className="enter">Login</button>:<button className="enter">SignUp</button>}</div>
            <div>{change && <button className='par'>Forget password</button>}</div>
            <button onClick={ChangeHandler}  className='para'>{change?<p>Don't have an account?SignUp</p>:<p>already have an account ? Login</p>}</button>
        </form>
        </div>
        </>
    )
}
export default SignUp;