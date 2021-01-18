import styled from 'styled-components'

export const DivTable = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
`;

export const ContentTable = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    border: 1px solid;
`;

export const BigDiv = styled.div`
    display: grid;
    grid-template-columns: auto auto auto auto;
    grid-template-rows: repeat(auto-fill, minmax(min(1rem, 100%), 1fr));    
    width: 90vw;
    margin: 4px 4px 8px 4px;

    @media(min-width: 560px) {
        width: 540px;
    }

`;

export const HeaderTable = styled.div`
    display: flex;
    margin: 4px 4px 8px 4px;
`;

export const HeaderColumnCel = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid;
    padding: 5px;
    margin-bottom: 8px;
`;

export const HeaderColumnCelBlack = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid black;
    padding: 5px;
    margin-bottom: 8px;
    background-color: black;
    color: white;
`;

export const DivLineCel = styled.div`
    display: flex;
`;

export const LineCel = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid;
    padding: 7px;
    text-align: center;
`;

export const ButtonBack = styled.button`
    width: 200px;
    background-color: black;
    color: white;
    border: none;
    font-size: 1.3rem;
    margin: 5px 5px 8px 5px;
    align-self: center;
    cursor: pointer;
`;

