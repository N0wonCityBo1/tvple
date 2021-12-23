import {Navbar,Nav,Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';

export function Navi(){
    return(
        <>
        <Navbar bg="primary" variant="dark">
          <Container>
          <Navbar.Brand href="#home">Tvple</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">홈</Nav.Link>
            <Nav.Link href="/login">로그인</Nav.Link>
            <Nav.Link href="/upload">업로드</Nav.Link>
          </Nav>
          </Container>
        </Navbar>
      </>
    )
}


