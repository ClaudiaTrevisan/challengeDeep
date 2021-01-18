import styled from 'styled-components';

export const DivForm = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const SearchForm = styled.form`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    margin-top: 35px;
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
`;

export const ImgSearch = styled.img`
    width: 25px;
    height:22px;
    position: absolute;
    right: 30px;
`;