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
import { signup, signInWithGoogle, signInWithGitHub } from '../helpers/auth';

export default class Signup extends Component {
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
    this.setState({ error: ' '});
      try {
        await signup(this.state.email, this.state.password);
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
          <h1>Sign up to <Link to="/">Chatty</Link>
          </h1>
            <p>Fill in the form below to create an account.</p>

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
            </FormGroup>

            <FormGroup>
              { this.state.error ? <p>{ this.state.error }</p> : null}
              <Button 
                type="submit"
                variant="primary"
              >
                  Sign up
              </Button>

                <p>or </p>

              <Button 
                onClick={ this.googleSignIn } type="button"
                variant="danger"
              >
                Sign up with Google
              </Button>

              <Button 
                type="button" 
                variant="secondary"
                onClick={ this.githubSignIn }
              >
                Sign up with GitHub
              </Button>
            </FormGroup>
            <hr />

            <p>Already have an account? <Link to="/login">Log in</Link></p>

        </Form>
      </Container>
    )
  }
}