import React from 'react'
import { Container,Row,Col , Form, FormGroup, Button} from 'reactstrap'
import { Link } from 'react-router-dom'
import '../styles/login.css'

import loginImg from '../assets/images/login.png'
import userIcon from '../assets/images/user.png'
import { useState } from 'react'



const Login = () => {

  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
})

const handleClick = e => {
  e.preventDefault();
}

let handleSubmit= () =>{
  console.log(signupData);
}

let [signupData,setSignupData] = useState({
  email:"",
  password:""
})


let handleForm = (e) =>{
  let {name,value} = e.target
  setSignupData({
    ...signupData,[name]:value
  })
}
  return (
    <section>
      <Container>
        <Row>
          <Col lg='8' className='m-auto'>
          <div className="login-container d-flex justify-content-between">
            <div className="login-img">
              <img src={loginImg} alt="" />
            </div>

            <div className="login-form">
              <div className="user">
                <img src={userIcon} alt="" />
              </div>
              <h2>Login</h2>

              <Form onSubmit={handleClick}>
                <FormGroup>
                  <input onChange={handleForm} type="email" placeholder='Email' required id='email' />
                </FormGroup>
                <FormGroup>
                  <input onChange={handleForm}  type="password" placeholder='Password' required id='password' />
                </FormGroup>
                <Button className='btn secondary-btn auth-btn' onClick={handleSubmit}type='submit'>Login</Button>
              </Form>
              <p>Don't have an account? <Link to='/register'>Create</Link></p>
            </div>
          </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Login