import React from "react";
import { Content } from "./Content";
import {Header} from "./components/Heads"
import styled from 'styled-components'

const Lala = styled.div`
   margin: -8px;
`;

function App() {
  return ( 
    <Lala>
      <Header />
      <Content />
    </Lala>
  )
}

export default App;