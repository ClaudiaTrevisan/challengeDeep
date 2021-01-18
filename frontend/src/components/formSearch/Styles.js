import styled from 'styled-components';

export const DivForm = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media(min-width: 410px) {
        width: 355px;
    }

`;

export const SearchForm = styled.form`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    margin-top: 35px;

    @media(min-width: 410px) {
        width: 380px;
    }
`;

export const InputSearch = styled.input`
    width: 84%;
    height: 30px;
    position: relative;
    padding-top: 10px;
    padding-left: 20px;
    font-size: 1.1rem;
    border: 1px solid;

    ::placeholder {
        text-align: right;
        padding-right: 40px;
        font-weight: 700;
        font-size: 1.3rem;
    };

    @media(min-width: 410px) {
        width: 100%;
    }
`;

export const ImgSearch = styled.img`
    width: 25px;
    height:22px;
    position: absolute;
    right: 30px;

    @media(min-width: 455px) {
        right: 50px;
    }

    @media(min-width: 482px) {
        right: 70px;
    }

    @media(min-width: 522px) {
        right: 5.5em;
    }

    @media(min-width: 567px) {
        right: 7em;
    }

    @media(min-width: 609px) {
        right: 8em;
    }

    @media(min-width: 645px) {
        right: 9.4em;
    };

    @media(min-width: 688px) {
        right: 11em;
    }

    @media(min-width: 721px) {
        right: 12em;
    }

    @media(min-width: 772px) {
        right: 13.5em;
    }

    @media(min-width: 816px) {
        right: 15em;
    }

    @media(min-width: 867px) {
        right: 16.5em;
    }

    @media(min-width: 913px) {
        right: 18em;
    }

    @media(min-width: 964px) {
        right: 19.5em;
    }

    @media(min-width: 1008px) {
        right: 21em;
    }

    @media(min-width: 1059px) {
        right: 22.5em;
    }

    @media(min-width: 1100px) {
        right: 46em;
    }
`;