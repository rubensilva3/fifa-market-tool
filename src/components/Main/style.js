import styled from 'styled-components';

const Container = styled.div`
    background-color: #ffffff;
    color: #000000;
    padding: 56px 24px 24px 24px;
    margin-top: 56px;
    font-size: 16px;

    input {
        border: 0.1rem solid #9e9e9e;
        border-radius: 4px;
        outline: none;
        padding: 0 12px;
        height: 48px;
        width: 100%;
        color: #212121;
        margin: 12px 0 60px 0;
    }

    label {
        font-size: 20px;
    }

    button {
        padding: 16px 32px;
        border: none;
        background-color: #ffeb3b;
        font-size: 16px;
        font-weight: 600;
    }

    div {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    p {
        font-weight: 600;
        font-size: 20px;
    }
`;

export default Container;
