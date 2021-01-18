import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { goToComparisonScreen } from '../../routes/Coordinator';
import del from '../../assets/x-mark.svg'
import { ButtonCompare, DivHug, DivInfoSaved, DivSavedSearches, ImgDelete } from './Styles';

const SavedSearches = () =>{
    const history = useHistory();
    const savedInfos = JSON.parse(localStorage.getItem('saved')) || [];
    const [savedItens, setSavedItens] = useState(savedInfos);

    const clickRemove = (city) =>{
        let arrayOfItens = [...savedItens]
        for(let i = 0; i<= arrayOfItens.length; i++){
            if(arrayOfItens[i].city === city){
                arrayOfItens.splice(i, 1)
            };
        };
        localStorage.setItem('saved', JSON.stringify(arrayOfItens))
        setSavedItens(arrayOfItens)
    };

    const clickCompare = () =>{
        if(savedItens.length < 2){
            return alert('É preciso ao menos duas cidades para comparar')
        };
        goToComparisonScreen(history)
    };

    return (
        <DivSavedSearches stateItens={savedItens}>
            <>
                {savedItens && savedItens.map((item) =>{
                    return(
                        <DivHug>
                            <DivInfoSaved key={item.city}>
                                {item.city} 
                            </DivInfoSaved>
                            <ImgDelete onClick={()=>clickRemove(item.city)} src={del} alt="Remover"/>
                        </DivHug>
                    );
                })}
            </>
            <ButtonCompare onClick={clickCompare}>COMPARAR</ButtonCompare>
        </DivSavedSearches>
    );
}

export default SavedSearches