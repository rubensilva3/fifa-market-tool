import React from 'react';
import { Link } from 'react-router-dom';
import Container from './style';

const Header = () => (
    <Container>
        <Link to="/">
            <h5>Fifa Market Tool</h5>
        </Link>
    </Container>
);

export default Header;
