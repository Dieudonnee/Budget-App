import logo from './logo.svg';
import './App.css';

import {GlobalContextProvider} from './context/GlobalState'
import GoogleLogin from 'react-google-login'
import {useState} from 'react'
import Base from './Base'

function App() {
  const[loginData, setLoginData] = useState(
    localStorage.getItem('loginData')
    ? JSON.parse(localStorage.getItem('loginData'))
    :null
  )

  const handleFailure = (result) => {
    alert(result);
  };
  const handleLogin = async(googleData) => {
    const res = await fetch('/api/google-login',{
      method: 'POST',
      body: JSON.stringify({
        token: googleData.tokenId,
      }),
      headers: {
      'Content-type': 'application/json',
      }
    });
    const data = await res.json();
    setLoginData(data);
    localStorage.setItem('loginData', JSON.stringify(data));
  };
  const handleLogout = () => {
    localStorage.removeItem('loginData');
    setLoginData(null);
  }
  

  return (
    <GlobalContextProvider>
    
    
    <div>
    {
      loginData ? (
        <div>
        <div  className="login">
        <h3>welcome to Budget app {loginData.wl}</h3>
          <button onClick={handleLogout}>Logout</button>
        </div>
        

        <Base/>

          
          
  </div>

      ) : (
        <div className="container">
         <div className="app-wrapper-login">
        <GoogleLogin
        clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
        buttonText="Log in with Google "
        onSuccess={handleLogin}
        onFailure={handleFailure}
        cookiePolicy={'single_host_origin'} className="googleLogin"
      ></GoogleLogin>
      </div>
      </div>
      )
    }
      
    </div>

     
    
    </GlobalContextProvider>
  );
}

export default App;
