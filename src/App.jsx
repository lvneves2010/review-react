import React from 'react'

import Primeiro from './components / basicos/Primeiro'
import ComParametros from './components / basicos/ComParametros'
import Fragmentos from './components / basicos/Fragmentos'
import Aleatorio from './components / basicos/Aleatorio'


export default _ => 
        <div>
            <h1>Fundamentos React refactored</h1>
            <Aleatorio min={1} max={60} />        
            <Fragmentos />
            <ComParametros
                titulo="Situação do aluno"
                aluno="Bruno"
                nota={9.3} />
                <ComParametros
                titulo="Situação do aluno"
                aluno="Gustavo"
                nota={9.9} />
            <Primeiro />
        </div>