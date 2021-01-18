import React from 'react';
import { render, fireEvent, getByTestId, wait, waitFor } from '@testing-library/react';
import App from './App';
import axios from 'axios'
import userEvent from '@testing-library/user-event';

axios.get = jest.fn().mockResolvedValue({
  data: {}
});

describe('Challenge Deep', () =>{
  test('Renders elements correctly', async () =>{
    const { getByPlaceholderText, getByTestId } = render(<App/>);

    expect(getByPlaceholderText('Cidade')).toBeInTheDocument();
    expect(getByTestId('resultSearch')).toBeInTheDocument();

  });

  test('Search City', async () =>{
    try {
      axios.get = jest.fn().mockResolvedValue({
        data: {
          city: 'test, ts',
          date: 'test',
          time: 'test',
          temp: 20,
          humidity: 30,
          wind_speedy: 'test'
        }
      });
  
      const { getByPlaceholderText, getByTestId } = render(<App/>);
  
      const input = getByPlaceholderText('Cidade');
  
      userEvent.type((input, 'test, ts'));
  
      expect(input).toHaveValue('test, ts');
  
      fireEvent.click(getByTestId('clickSearch'));
  
      expect(axios.get).toHaveBeenCalledWith(`http://localhost:3003/forecast`, {
        city: 'test, ts'
      });
  
      expect(input).toHaveValue('');
      expect(getByTestId('resultSearch')).toHaveTextContent(
        'test, ts', 
        'test, test', 
        'Temperatura: 20', 
        'Umidade: 30',
        'Velocidade do vento: test'
      );
    } catch (error) {
      throw new Error(error.message)
    }
  });
})