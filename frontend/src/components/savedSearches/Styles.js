import styled from 'styled-components'

export const DivSavedSearches = styled.div`
    display: ${(props)=> props.stateItens.length > 0 ? 'flex' : 'none'};
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 1.3em;
    margin-bottom: 12px;
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

    @media(min-width: 410px) {
        width: 326px;
    }
`;

export const ImgDelete = styled.img`
    width: 26px;
`;

export const ButtonCompare = styled.button`
    width: 82vw;
    align-self: baseline;
    height: 40px;
    background-color: black;
    color: white;
    border: 1px solid black;
    font-size: 1.3rem;
    cursor: pointer;

    @media(min-width: 364px) {
        width: 81.1vw;
    };

    @media(min-width: 410px) {
        width: 348px;
        margin: 0px;
    };
`;