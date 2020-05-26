import React from 'react'

export default function(props) {
  
    const status = props.nota >= 7 ? 'Aprovado' : 'Para recuperação'
    const notaInt = Math.ceil(props.nota)
    return (
        <div>
            <h2>{props.titulo}</h2>
            <h3>{props.aluno} tem nota {notaInt} </h3>
            <p> e foi {status} !</p>
        </div>
    )
}
