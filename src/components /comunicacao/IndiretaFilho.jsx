import React from 'react'

export default props => {

    const c = props.quandoClicar
    const gerar = () => parseInt(Math.random() * 20) + 40
    const gerarN = () => Math.random() > 0.5
    return (
        <div>
            <div>
                Filho
            </div>
            <button onClick={
                e =>  c('João', gerar(), gerarN()) 
            } >Fornecer Informações</button>
        </div>
    )
}