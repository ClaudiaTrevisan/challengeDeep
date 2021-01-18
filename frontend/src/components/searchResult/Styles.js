import styled from 'styled-components'

export const BigDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const DivResult = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 1px solid;
    width: 84vw;
    margin-top: 30px;
    height: 250px;
    padding: 10px;
`;

export const DivTextShowing = styled.div`
    display: ${(props)=> props.stateValue !== 'final' ? 'flex' : 'none' };
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const DivResultContet = styled.div`
    display: ${(props)=> props.stateValue === 'final' ? 'flex' : 'none'};
    flex-direction: column;
    height: 100%;
    width: 95%;
`;

export const DivDetailCity = styled.div`
    text-align: center;
    font-size: 1.1rem;
    font-weight: 600;
`;

export const DivDetailDate = styled.div`
    text-align: center;
`;

export const DivDetail = styled.div`
    align-self: center;
    margin-top: 2em;
`;

export const ButtonSave = styled.button`
    background-color: black;
    color: white;
    width: 150px;
    height: 40px;
    border: none;
    font-size: 1.3rem;
    margin-top: 1.6em;
    align-self: center;
    cursor: pointer;
`;