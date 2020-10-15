import styled from 'styled-components'

export const Title = styled.h1`
    margin: 0.5rem 0 1rem;
    font-size: 1.25em;
    color: #172b4d;
`

export const Wrapper = styled.main`
    background: #FFF;
    padding: 2rem 1rem;
    min-height: 100vh;
`
export const BoardList = styled.ul`
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    list-style: none;
`

export const Board = styled.li`
    width: 12rem;
    height: 6rem;
    background: #0079bf;
    padding: 0.5rem;
    border-radius: 0.3rem;
    color: #FFF;
    font-weight: bold;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    transition: 0.3s ease-in-out;
    cursor: pointer;

    &:hover {
        background: #005a8e;
    }
`
