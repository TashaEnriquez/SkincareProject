import '../styles/Signup.css';
const Signup = () => {
  return (
  <div className="signup-form">
       <form>
         <h1>Register</h1>
         <div className="content">
          <div className="input-field">
                 <input type="text" placeholder="Name" autocomplete="nope" />
             </div>
             <div className="input-field">
                 <input type="email" placeholder="Email" autocomplete="nope" />
             </div>
             <div className="input-field">
                 <input type="password" placeholder="Password" autocomplete="new-password" />
            </div>
            <div className="input-field">
                 <input type="password" placeholder="Confirm Password" autocomplete="password" />
            </div>
         </div>
            <div className="action">
              <button className='signup-page-signup'>Register</button>
           </div>
       </form>
      </div>
    )
};

export default Signup;
