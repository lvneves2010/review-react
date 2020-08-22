import React, {useState} from 'react'
import IndiretaFilho from './IndiretaFilho'

export default props => {
    const [nome, setNome] = useState('?')
    const [idade, setIdade] = useState(0)
    const [nerd, setNerd] = useState(false)
    function fornecerInformacoes(nomep, idadep, nerdp) {
        setNome(nomep)
        setIdade(idadep)
        setNerd(nerdp)
    }

    return (
        <div>
            <div>
                Pai {nome}:  {idade} - {nerd ? 'verdade' : 'falso'}
            </div>
            <IndiretaFilho quandoClicar={fornecerInformacoes}></IndiretaFilho>
        </div>
    )
}