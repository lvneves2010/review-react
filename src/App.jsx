import './App.css'
import React from 'react'

import Primeiro from './components / basicos/Primeiro'
import ComParametros from './components / basicos/ComParametros'
import Fragmentos from './components / basicos/Fragmentos'
import Aleatorio from './components / basicos/Aleatorio'
import Card from './components /layout/Card'
import Familia from './components / basicos/Familia'
import FamiliaMembro from './components / basicos/FamiliaMembro'
import ListaAlunos from './components /repeticao/ListaAlunos'
import TabelaProdutos from './components /repeticao/TabelaProdutos'
import ParOuImpar from './components /condicional/ParOuImpar'
import UsuarioInfo from './components /condicional/UsuarioInfo'
import DiretaPai from './components /comunicacao/DiretaPai';
import IndiretaPai from './components /comunicacao/IndiretaPai';
import FormInput from './components /formulario/FormInput';
import Contador from './components /contador/Contador';


export default _ => 
        <div className="App" >
            <h1>Fundamentos React refactored</h1>
            <div className="Cards">
                <Card titulo="#12 - Contador" >
                    <Contador numeroInicial={10}></Contador>
                </Card>
                <Card titulo="#11 - Componente Controlado(Input)" color="#00E">
                    <FormInput></FormInput>
                </Card>
                <Card titulo="#10 - Comunicação Indireta" color="#00E" >
                    <IndiretaPai></IndiretaPai>
                </Card>
                <Card titulo="#09 - Comunicação Direta" color="#00E"  >
                    <DiretaPai></DiretaPai>
                </Card>
                <Card titulo="#08 - Condicional Render2" color="#00E" >
                    <UsuarioInfo usuario={{ nome: "Leonardo" }}></UsuarioInfo>
                    <UsuarioInfo usuario={{ email: "Leonardo" }}></UsuarioInfo>
                    <UsuarioInfo ></UsuarioInfo>
                </Card>
                <Card titulo="#08 - Condicional Render" color="#00E">
                    <ParOuImpar numero={21}></ParOuImpar>
                </Card>
                <Card titulo="#07 - Repetição2" color="#00E" >
                    <TabelaProdutos></TabelaProdutos>
                </Card>
                <Card titulo="#06 - Repetição" color="#00E" >
                    <ListaAlunos></ListaAlunos>
                </Card>
                <Card titulo="#05 - componente com filhos" color="#00E" >
                    <Familia sobrenome="Neves" >
                        <FamiliaMembro nome="Leonardo" />
                        <FamiliaMembro nome="Bruno" />
                        <FamiliaMembro nome="Gustavo" />
                    </Familia>       
                </Card>
                <Card titulo="#04 - Palpites Mega Sena" color="#00E" >
                    <Aleatorio min={1} max={60} />        
                </Card>
                <Card titulo="#03 - Fragmentos" color="#00E" >
                    <Fragmentos />      
                </Card>
                <Card titulo="#02 - Com Parametros" color="#00E" >
                    <ComParametros
                    titulo="Situação do aluno"
                    aluno="Bruno"
                    nota={9.3} />
                    <ComParametros
                    titulo="Situação do aluno"
                    aluno="Gustavo"
                    nota={9.9} />
                </Card>
                <Card titulo="#01 - Primeiro" color="#00E" >
                    <Primeiro />
                </Card>
            </div>
        </div>