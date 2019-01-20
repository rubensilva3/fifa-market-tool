import styled from 'styled-components';

const Container = styled.div`
    height: 56px;
    width: 100%;
    z-index: 1;
    background-color: #311b92;
    color: #000000;
    box-shadow: 0 12px 17px 2px rgba(0, 0, 0, 0.14),
        0 5px 22px 4px rgba(0, 0, 0, 0.12), 0 7px 8px -4px rgba(0, 0, 0, 0.2);
    padding: 12px;
    font-size: 24px;
    display: flex;
    align-items: center;
    position: fixed;

    h5 {
        letter-spacing: 0;
        font-size: 24px;
        font-weight: 400;
        margin-left: 24px;
    }

    a {
        text-decoration: none;
        color: #ffffff;
    }

    a:hover {
        text-decoration: none;
        cursor: pointer;
        color: #ffeb3b;
    }
`;

export default Container;
