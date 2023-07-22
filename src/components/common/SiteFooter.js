import React from 'react';
import Container from 'react-bootstrap/Container';

function SiteFooter() {
  return (
    <footer className="py-5" style={{  bottom: 6   }}>
      <Container className="px-5">
        <p className="text-center">&copy; 2023 MyWebsite. All rights reserved.</p>
        <p className="text-center">
          <a href="/about">About</a> | <a href="/contact">Contact</a>
        </p>
      </Container>
    </footer>
  );
}

export default SiteFooter;

