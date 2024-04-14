import React, { useState } from "react";
import { Container, Row, Col, Form, FormGroup, Button } from "reactstrap";
import { Link } from "react-router-dom";
import "../styles/login.css";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import registerImg from "../assets/images/register.png";
import userIcon from "../assets/images/user.png";

const Register = () => {
  const auth = getAuth();

  let [signupData, setSignupData] = useState({
    username: "",
    email: "",
    password: "",
  });

  let handleChange = (e) => {
    let { name, value } = e.target;
    setSignupData({
      ...signupData,
      [name]: value,
    });
  };

  let handleSubmit = (e) => {
    createUserWithEmailAndPassword(auth, signupData.email, signupData.password)
      .then((userCredential) => {
        console.log(userCredential);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
       if(errorCode == "auth/email-already-in-use"){
       
       }
      });

    e.preventDefault();
  };
  return (
    <section>
      <Container>
        <Row>
          <Col lg="8" className="m-auto">
            <div className="login-container d-flex justify-content-between">
              <div className="login-img">
                <img src={registerImg} alt="" />
              </div>

              <div className="login-form">
                <div className="user">
                  <img src={userIcon} alt="" />
                </div>
                <h2>Register</h2>
                
                <form>
                  <FormGroup>
                    <input
                      type="text"
                      placeholder="Username"
                      required
                      id="username"
                      onChange={handleChange}
                      value={signupData.username}
                      name="username"
                    />
                  </FormGroup>
                  <FormGroup>
                    <input
                      type="email"
                      placeholder="Email"
                      required
                      id="email"
                      onChange={handleChange}
                      value={signupData.email}
                      name="email"
                    />
                  </FormGroup>
                  <FormGroup>
                    <input
                      type="password"
                      placeholder="Password"
                      required
                      id="password"
                      onChange={handleChange}
                      value={signupData.password}
                      name="password"
                    />
                  </FormGroup>
                  <Button
                    onClick={handleSubmit}
                    className="btn secondary-btn auth-btn"
                    type="submit"
                  >
                    Create Account
                  </Button>
                </form>
                <p>
                  Already have an account? <Link to="/login">Login</Link>
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Register;