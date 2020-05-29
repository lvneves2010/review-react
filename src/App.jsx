import React from 'react'

import Primeiro from './components / basicos/Primeiro'
import ComParametros from './components / basicos/ComParametros'
import Fragmentos from './components / basicos/Fragmentos'
import Aleatorio from './components / basicos/Aleatorio'
import Card from './components /layout/Card'


export default _ => 
        <div>
            <h1>Fundamentos React refactored</h1>
            <Card titulo="#04 - Palpites Mega Sena">
                <Aleatorio min={1} max={60} />        
            </Card>
            <Card titulo="#03 - Fragmentos">
                <Fragmentos />      
            </Card>
            <Card titulo="#02 - Com Parametros">
                <ComParametros
                titulo="Situação do aluno"
                aluno="Bruno"
                nota={9.3} />
                <ComParametros
                titulo="Situação do aluno"
                aluno="Gustavo"
                nota={9.9} />
            </Card>
            <Card titulo="#01 - Primeiro">
                <Primeiro />
            </Card>
        </div>