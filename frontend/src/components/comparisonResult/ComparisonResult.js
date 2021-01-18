import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import {goBack} from '../../routes/Coordinator'
import { BigDiv, ButtonBack, ContentTable, DivTable, HeaderColumnCel, HeaderColumnCelBlack, LineCel } from './Styles';

const ComparisonResult = () =>{
    const history = useHistory();
    const savedInfos = JSON.parse(localStorage.getItem('saved')) || []
    const [itensToCompare, setItensToCompare] = useState(savedInfos);

    const clickSort = (info) =>{
        let arrayOfItens = [...itensToCompare];
        if(info === "city"){
            arrayOfItens.sort(function (a,b){
                return a.city - b.city
            })
        };
        if(info === "temp"){
            arrayOfItens.sort(function (a,b) {
                return a.temp - b.temp
            })
        };
        if(info === "humidity"){
            arrayOfItens.sort(function (a,b) {
                return a.humidity - b.humidity
            })
        };
        if(info === "wind"){
            arrayOfItens.sort(function (a,b) {
                return a.wind_speedy - b.wind_speedy
            })
        };

        setItensToCompare(arrayOfItens)
    };

    return (
        <DivTable>
            <ContentTable>
                <BigDiv>
                    <HeaderColumnCelBlack onClick={()=>clickSort("city")}>
                        CIDADE
                    </HeaderColumnCelBlack>
                    <HeaderColumnCel onClick={()=>clickSort("temp")}>
                        TEMP.
                    </HeaderColumnCel>
                    <HeaderColumnCelBlack onClick={()=>clickSort("humidity")}>
                        UMIDADE
                    </HeaderColumnCelBlack>
                    <HeaderColumnCel onClick={()=>clickSort("wind")}>
                        VENTO
                    </HeaderColumnCel>
                    
                    {itensToCompare && itensToCompare.map((item) =>{
                        return (
                            <>
                                <LineCel>
                                    {item.city}
                                </LineCel>
                                <LineCel>
                                    {item.temp}°
                                </LineCel>
                                <LineCel>
                                    {item.humidity}%
                                </LineCel>
                                <LineCel>
                                    {item.wind_speedy}
                                </LineCel>
                            </>
                            
                        );
                    })}
                </BigDiv>     
                <ButtonBack onClick={()=>goBack(history)}>VOLTAR</ButtonBack>           
            </ContentTable>
        </DivTable>
    );
}

export default ComparisonResult