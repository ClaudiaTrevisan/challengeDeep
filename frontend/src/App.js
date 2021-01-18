import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Router from './routes/Router';
import styled from 'styled-components';

const DivMother = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const App = () =>{
  return (
    <DivMother>
      <BrowserRouter>
        <Router/>
      </BrowserRouter>
    </DivMother>
  );
}

export default App;
