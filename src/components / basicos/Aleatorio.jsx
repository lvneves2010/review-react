import React from 'react'

export default (props) => {
    const { min, max } = props
    const a1 = parseInt(Math.random() * (max - min)) + min
    const a2 = parseInt(Math.random() * (max - min)) + min
    const a3 = parseInt(Math.random() * (max - min)) + min
    const a4 = parseInt(Math.random() * (max - min)) + min
    const a5 = parseInt(Math.random() * (max - min)) + min
    const a6 = parseInt(Math.random() * (max - min)) + min
    return (
        <div>
            <h2>Valor Aleatorio ( Palpites pra mega Sena )</h2>
            <p>Valor minimo: {min}  </p>
            <p>Valor maximo: {max}  </p>
            <p>Valores escolhidos: {a1} , {a2} ,{a3} ,{a4} ,{a5} e {a6}  </p>
        </div>
    )
}