import { useDispatch } from "react-redux";
import { LoginActions } from "../Redux/loginredux";
import { UseSelector, useSelector } from "react-redux/es/hooks/useSelector";
import { useNavigate } from "react-router";
import './See.css';
function See(){
    const nav=useNavigate();
    const showmail=useSelector(state=>state.com1.ans);
    function compose(){
        nav('/wel');
      }
      
      function move(){
        nav('/sent');
      }
      function log(){
        nav('/')
      }
      function domove(){
        nav('/inbox');
      }
    return (
        <>
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
        <div className="form1">
  {<div><div className="b">[*{showmail.email}]  </div> <br></br><div>{showmail.text}</div></div>

}
</div>
</div>
 




        </>
    )
}
export default See;