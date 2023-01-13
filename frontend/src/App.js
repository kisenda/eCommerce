import React from 'react';
import { Container } from 'react-bootstrap';
import Header from './component/Header';
import Footer from './component/Footer';

function App() {
  return (
    <>
      <Header />
      <main>
        <Container>
          <h2>Yayasan Salamina Syifaul Husna</h2>
        </Container>
      </main>
      <Footer />
    </>
  );
}

export default App;
