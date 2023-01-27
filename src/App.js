import Profile from './Profile';
import Login from './Login';
import {Route, Routes} from "react-router-dom";


function App() {
  return (
    <div>
      <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='login' element={<Login/>}/>
      <Route path='profile' element={<Profile/>}/>  
      </Routes>
    </div>
  );
}

export default App;
