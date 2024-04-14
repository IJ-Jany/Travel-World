import React from 'react'
import { Container,Row,Col , Form, FormGroup, Button} from 'reactstrap'
import { Link } from 'react-router-dom'
import '../styles/login.css'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import registerImg from '../assets/images/register.png'
import userIcon from '../assets/images/user.png'
import { useState } from 'react'



const Register = () => {
  const auth = getAuth();

  const [credentials, setCredentials] = useState({
    username:undefined,
    email:undefined,
    password:undefined
})

const handleClick = e => {
  e.preventDefault();
}

let handleChange = (e) =>{
  let {name,value} = e.target
  setSignupData({
    ...signupData,[name]:value
  })
}

let [signupData,setSignupData] = useState({
  username:"",
  email:"",
  password:""
})

let handleSubmit= () =>{
  createUserWithEmailAndPassword(auth, signupData.email,signupData.password).then
  ((userCredential)=>{
    console.log(userCredential );
  }).catch((error)=>{
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode);
    console.log(errorMessage);
  })
}
  return (
    <section>
      <Container>
        <Row>
          <Col lg='8' className='m-auto'>
          <div className="login-container d-flex justify-content-between">
            <div className="login-img">
              <img src={registerImg} alt="" />
            </div>

            <div className="login-form">
              <div className="user">
                <img src={userIcon} alt="" />
              </div>
              <h2>Register</h2>

              <Form onSubmit={handleClick}>
              <FormGroup>
                  <input type="text" placeholder='Username' required id='username' onChange={handleChange} />
                </FormGroup>
                <FormGroup>
                  <input type="email" placeholder='Email' required id='email' onChange={handleChange} />
                </FormGroup>
                <FormGroup>
                  <input type="password" placeholder='Password' required id='password' onChange={handleChange} />
                </FormGroup>
                <Button onClick={handleSubmit} className='btn secondary-btn auth-btn' type='submit'>Create Account</Button>
              </Form>
              <p> Already have an account? <Link to='/login'>Login</Link></p>
            </div>
          </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Register