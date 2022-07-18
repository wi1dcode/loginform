import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      email: "",
      password: "",
      rememberMe: false,
      emailIsValid: false,
      passwordIsValid: false,
      isSubmitted: false,
    }
  }


  handleEmailChange = (e) => {

    const regex = new RegExp(/^[\w.]+@([\w-]+.)+[\w-]{2,4}$/)

    if (regex.test(e.target.value)) {

      this.setState({
        email: e.target.value,
        emailIsValid: true
      })

    } else {
      this.setState({
        email: e.target.value,
        emailIsValid: false
      })
    }    
  }


  handlePasswordChange = (e) => {
    this.setState({ password: e.target.value }); 
    if (e.target.value.length > 5) {
      this.setState({passwordIsValid: true})
      console.log('good');
    } else {
      this.setState({passwordIsValid: false})
    }
  }

  handleRememberMeChange = () => {
    this.setState({ rememberMe: true });
  }

  handleSubmit = (e) => {

    e.preventDefault();    
    console.log("clicked");    
    if (this.state.passwordIsValid === true && this.state.emailIsValid === true) {
      this.state.isSubmitted = true
      console.log("submit true");
    } else {
      this.state.isSubmitted = false
      alert("Submit false")
      console.log("submit false");

    }
  }

  handleSuccess = () => {
    if (this.state.passwordIsValid === false || this.state.emailIsValid === false) {


    }
  }

  render() {
    
    return(
      <>
      <div className='container'> 
      <form onSubmit={this.handleSubmit} onClick={this.handleSuccess}>
        <div className="mb-3">

          <label 
          htmlFor="exampleInputEmail1" 
          className="form-label">Email address</label>

          <input 
          type="email" 
          value={this.state.email} 
          onChange={this.handleEmailChange}
          className="form-control" 
          id="exampleInputEmail1" 
          aria-describedby="emailHelp" />

          <div 
          id="emailHelp" 
          className="form-text">We'll never share your email with anyone else.</div>

        </div>

        <div className="mb-3">
          <label 
          htmlFor="exampleInputPassword1" 
          className="form-label">Password</label>

          <input 
          type="password" 
          className="form-control" 
          id="exampleInputPassword1"
          value={this.state.password} 
          onChange={this.handlePasswordChange}
          />

        </div>
        <div className="mb-3 form-check">
          <input 
          type="checkbox" 
          className="form-check-input" 
          id="exampleCheck1" />

          <label 
          className="form-check-label" 
          htmlFor="exampleCheck1"
          onChange={this.handleRememberMeChange}
          >Remember me
          </label>

        </div>

        <button 
        type="submit" 
        className="btn btn-primary"
        // onSubmit={this.handleSubmit}
        >Submit</button>

      </form>
      </div>
      </>
    )
  }
}

export default App;
