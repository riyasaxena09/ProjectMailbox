import Welcome from './components/Welcome';
import './App.css';
import See2 from './components/See2';
import Inbox from './components/inbox';
import See from './components/See';
import Sent from './components/Sent';
import SignUp from './components/Signup';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
function App() {
  return (
    <div>

     <BrowserRouter>
<Routes>

  <Route path='/' element={<SignUp></SignUp>}></Route>
  <Route path='/wel' element={<Welcome></Welcome>}></Route>
  <Route path='/sent' element={<Sent></Sent>}></Route>
  <Route path='/see' element={<See></See>}></Route>
  <Route path='/see2' element={<See></See>}></Route>
  <Route path='/inbox' element={<Inbox></Inbox>}></Route>
</Routes>
</BrowserRouter>
    </div>
  );
}

export default App;
