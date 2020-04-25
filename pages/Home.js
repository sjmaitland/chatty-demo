import React, { Component } from 'react';
import { default as Header } from '../components/Header';
import { default as Footer } from '../components/Footer';
import {
  Jumbotron,
  Container,
  Button
} from 'react-bootstrap';

export default class HomePage extends Component {
  render() {
    return(
      <div className="home">
        <Header />

        <section>
          <Jumbotron>
            <Container>
              <h1>Welcome to Chatty</h1>
              <p className="lead">A great place to share your thoughts with friends </p>
              <Button variant="primary" href="/signup">Sign up</Button>
              <Button variant="secondary" href="/login">Log in to your account</Button>
            </Container>
          </Jumbotron>
        </section>
        <Footer />
      </div>

    )
  }
}