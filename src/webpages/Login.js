import '../styles/Login.css';


const Login = () => {
    return (
      <div className="login-form">
       <form>
         <h1>Login</h1>
         <div className="content">
             <div className="input-field">
                 <input type="email" placeholder="Email" autocomplete="nope" />
             </div>
             <div className="input-field">
                 <input type="password" placeholder="Password" autocomplete="new-password" />
            </div>
         </div>
            <div className="action">
              <button className='login-page-sign-in'>Sign in</button>
           </div>
       </form>
      </div>
    )
};

export default Login;
