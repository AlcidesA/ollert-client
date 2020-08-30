import styled from 'styled-components';

export const Section = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
`

export const Wrapper = styled.div`
    max-width: 25rem;
    border-radius: 0.2rem;
    padding: 1.625rem 2.5rem;
    
    @media (min-width: 768px){
        background-color: #FFF;
        box-shadow: rgba(0, 0, 0, 0.1) 0 0 10px;
    }
`

export const Title = styled.h1`
    display: block;
    margin: 0.5rem 0 1rem;
    font-size: 1rem;
    text-align: center;
    color: #5E6C84;
`
