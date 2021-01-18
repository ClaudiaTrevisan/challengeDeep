import React from 'react';
import useForm from '../../hooks/useForm';
import {getInfo} from '../../services/getInfo';
import loupe from '../../assets/loupe.svg'
import { DivForm, SearchForm, ImgSearch, InputSearch } from './Styles';

const FormSearch = (props) =>{
    const {form, handleInputChange, resetState} = useForm({city: ""})

    const clickSearch = (event) =>{
        event.preventDefault();
        getInfo(form, props.functionSetState, props.setStateDisplay);
        resetState();
    };

    return (
        <DivForm>
            <SearchForm>
                <InputSearch
                    type='text'
                    value={form.city}
                    onChange={handleInputChange}
                    required
                    name='city'
                    placeholder='Cidade'
                />
                <ImgSearch data-testid={'clickSearch'} onClick={clickSearch} src={loupe} alt='Buscar'/>
            </SearchForm>
        </DivForm>
    );
}

export default FormSearch