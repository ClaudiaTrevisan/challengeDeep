import axios from 'axios';

export const getInfo = async (city, setState, setStateDisplay) =>{
    try {

        const result = await axios.get(`http://localhost:3003/forecast?city=${city.city}`);

        setStateDisplay('midle');

        setState(result);

        setStateDisplay('final');

    } catch (error) {
        alert('Algo deu errado. Tente novamente!');
    }
};