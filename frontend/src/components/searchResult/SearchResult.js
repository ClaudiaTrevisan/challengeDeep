import React from 'react';
import { initialText, midleText } from '../../constants/constants';
import { BigDiv, ButtonSave, DivDetailCity, DivDetailDate, DivDetail, DivResult, DivResultContet, DivTextShowing } from './Styles';

const SearchResult = (props) =>{
    const forecastCity = props.result.data;
    const textShowing = props.stateDisplay === 'initial' ? initialText : midleText;

    const clickSave = (item) =>{
        const savedItens = JSON.parse(localStorage.getItem('saved')) || [];
        if(savedItens.length >= 5){
            return alert('O limite de itens salvos é de até 5 cidades')
        };
        if(savedItens.length > 0){
            for(let i = 0; i >= savedItens.length; i++){
                if(savedItens[i].city === item.city){
                    return alert('Esta cidade já está salva')
                };
            };
        };
        let newArray = [...savedItens, item];
        localStorage.setItem('saved', JSON.stringify(newArray));
        props.setStateDisplay('initial');
        window.location.reload()
    };

    return (
        <BigDiv>
            <DivResult>
                <DivTextShowing stateValue={props.stateDisplay}>
                    {textShowing}
                </DivTextShowing>
            
                <DivResultContet stateValue={props.stateDisplay}>
                    <DivDetailCity>
                        {forecastCity && forecastCity.city}
                    </DivDetailCity>
                    <DivDetailDate>
                        {forecastCity && forecastCity.date}, {forecastCity && forecastCity.time}
                    </DivDetailDate>
                    <DivDetail>
                        <ul>
                            <li>Temperatura: {forecastCity && forecastCity.temp}°</li>
                            <li>Humidade: {forecastCity && forecastCity.humidity}%</li>
                            <li>Velocidade do vento: {forecastCity && forecastCity.wind_speedy}</li>
                        </ul>
                    </DivDetail>
                    <ButtonSave onClick={()=>clickSave(forecastCity)}>SALVAR</ButtonSave>
                </DivResultContet>
            </DivResult>
        </BigDiv>
    );
}

export default SearchResult