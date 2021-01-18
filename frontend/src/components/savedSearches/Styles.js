import styled from 'styled-components'

export const DivSavedSearches = styled.div`
    display: ${(props)=> props.stateItens.length > 0 ? 'flex' : 'none'};
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 1.3em;
`;

export const DivHug = styled.div`
    display: flex;
`;

export const DivInfoSaved = styled.div`
    display: flex;
    align-items: center;
    width: 75vw;
    height: 40px;
    padding-left: 20px;
    margin-right: 8px;
    border: 1px solid;
    font-size: 1.1rem;
    font-weight: 700;
    color: #5e5d5d;
    word-wrap: break-word;
`;

export const ImgDelete = styled.img`
    width: 26px;
`;

export const ButtonCompare = styled.button`
    width: 81.1vw;
    align-self: baseline;
    margin-left: .8em;
    height: 40px;
    background-color: black;
    color: white;
    border: none;
    font-size: 1.3rem;
    cursor: pointer;
`;