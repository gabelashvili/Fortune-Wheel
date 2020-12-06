import styled from 'styled-components'

export const Div = styled.div`
    width: 400px;
    height: 500px;
    border: 3px solid black;
    border-radius: 20px;
    background-color: white;
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: auto;
`

export const Title = styled.h1`
    margin: 0;
    font-size: 24px;
    margin-bottom: 20px;
`
export const AddNewInput = styled.div`
    width: 100%;
    height: 35px;
    display: grid;
    grid-auto-flow: column;
    grid-column-gap: 10px;
`

export const Input = styled.input`
    background-color: #D3D3D3;
    border: none;
    height: 100%;
    width: 100%;
    outline: none;
    padding: 0 10px;
    box-sizing: border-box; 
`

export const Button = styled.button`
    height: 100%;
    font-size: 25px;
`

export const Dots = styled.div`
    font-size: 22px;
    font-weight: 500;
`
export const List = styled.div`
    display: grid;
    grid-auto-flow: column;
    grid-column-gap: 10px;
    width: 100%;
    height: 30px;
    margin-bottom: 10px;
`
