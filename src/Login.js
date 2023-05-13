import "./login.css";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


function Login(){
    const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [redirect, setRedirect] = useState(false);
  let navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    if (id === 'admin' && password === 'admin') {
      setRedirect(true);
    } else {
      alert('Invalid ID or password');
    }
  }

  if (redirect) {
    return navigate('/Dashboard');
  }
    return(
        <>
        <div className="bgg">
        <div className="loginpage">
            <img className="limg" src="./Logoimg/washigniter.png" alt="Companylogo"/>
            <h4 className="lh4">LOGIN</h4>
            <form onSubmit={handleSubmit}>
            <input className="linput1" value={id} onChange={e => setId(e.target.value)} placeholder="Username" type={"text"}/>
            <input className="linput2" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" type={"password"} />
            <button className="loginbutton" type="submit"  onClick={()=>handleSubmit}>Login</button>
            </form>
            <hr className="lhr"></hr>
            <h5 className="lh5">2014 - 2021 © Washigniter</h5>
        </div>
        </div>
        </>
    )
}
export {Login};