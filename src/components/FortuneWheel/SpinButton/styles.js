import styled from 'styled-components'

export const Button = styled.div`
    font: 1.5em/0 sans-serif;
    user-select: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100px;
    height: 100px;
    background: #fff;
    color: #fff;
    box-shadow: 0 0 0 8px currentColor, 0 0px 15px 5px rgba(0, 0, 0, 0.6);
    border-radius: 50%;
    transition: 0.8s;
    background: rgb(255, 136, 34);
    position: absolute;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    &::before {
        content: "";
        position: absolute;
        top: -17px;
        border: 10px solid transparent;
        border-bottom-color: currentColor;
        border-top: none;
    }
`
export const P = styled.p`
    max-width: 100%
`
