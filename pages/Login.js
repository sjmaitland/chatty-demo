import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { 
  Container,
  Button,
  Form,
  FormLabel,
  FormControl,
  FormGroup
 } from 'react-bootstrap';
import { signin, signInWithGoogle, signInWithGitHub } 
from '../helpers/auth';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      email: '',
      password: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.googleSignIn = this.googleSignIn.bind(this);
    this.githubSignIn = this.githubSignIn.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  async handleSubmit(event) {
    event.preventDefault();
    this.setState({ error: "" });
    try {
      await signin(this.state.email, this.state.password);
    } catch (error) {
      this.setState({ error: error.message });
    }
  }

  async googleSignIn() {
    try {
      await signInWithGoogle();
    } catch (error) {
      this.setState({ error: error.message });
    }
  }

  async githubSignIn() {
    try {
      await signInWithGitHub();
    } catch (error) {
      this.setState({ error: error.message });
    }
  }

  render() {
    return (
      <Container>
        <Form
          autoComplete="off"
          onSubmit={ this.handleSubmit }
        >
          <h1>Log in to <Link to="/">Chatty</Link></h1>
            <p>Fill in the form below to log in to your account.</p>

            <FormGroup>
              <FormLabel>Email:</FormLabel>
              <FormControl
                placeholder="Email"
                name="email"
                type="email"
                onChange={ this.handleChange }
                value={ this.state.email }
              /> 
            </FormGroup>

            <FormGroup>
              <FormLabel>Password:</FormLabel>
                <FormControl
                  placeholder="Password"
                  name="password"
                  onChange={ this.handleChange }
                  value={ this.state.password }
                  type="password"
                />
            
              <br />
              <br />
           
              { this.state.error ? (
                <p>{ this.state.error }</p>
              ) : null }
              <button variant="primary" type="submit">Login</button>
            </FormGroup>
              
              <FormGroup>
                <p>&nbsp;</p>
                <p>You can also login with any of these services:</p>
                  <Button 
                    variant="danger"
                    type="button"
                    onClick={ this.googleSignIn }
                  >
                    Login with Google
                  </Button>

                  <Button
                    variant="secondary"
                    type="button"
                    onClick={ this.githubSignIn }
                  >
                    Login with GitHub
                  </Button>
            </FormGroup>

            <hr />

            <p>Don't have an account? <Link to="/signup">Sign up!</Link></p>
        </Form>
      </Container>
    )
  }
}