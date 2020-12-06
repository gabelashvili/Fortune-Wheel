import styled from 'styled-components'

export const CanvasStyles = styled.canvas`
    transition: all 8s cubic-bezier(0.25, 0.1, 0.25, 1);
    transform: ${({ rotateDeg }) => `rotateZ(${rotateDeg}deg)`};
`
