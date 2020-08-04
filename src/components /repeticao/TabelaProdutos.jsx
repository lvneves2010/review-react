import './TabelaProdutos.css'
import React from 'react'
import produtos from '../../data/produtos'

export default props => {

    const lis = produtos.map((produto, i) => {
        return (
            <tr key={produto.id} className={i % 2 == 0 ? 'Par' : 'Impar'}>
                <td>{produto.id}</td>        
                <td>{produto.name}</td>        
                <td>R$ {produto.price.toFixed(2).replace('.', ',')}</td>        
            </tr>
        )
    })
    return (
        <div className="TabelaProdutos">
            <table>
                <tr>
                <th>Id</th>
                <th>Produto</th>
                <th>Preço</th>
                </tr>
                {lis}
            </table>
        </div>
    )
}