function Tabela({ capital, taxa, simples, composto }) {
    return(
        <div>
            <table>
                <tr>
                    <th>Capital</th>
                    <th>Mês</th>
                    <th>Taxa</th>
                    <th>Juros Simples</th>
                    <th>Juros Composto</th>
                    <th>Total juros Simples</th>
                    <th>Total jutos Compostos</th>
                </tr>

                
                {simples.map( (dados, indicie) =>{
                    return(
                        <tr key={indicie}>
                            <td>{capital}R$</td>
                            <td>{dados.tempo}°</td>
                            <td>{dados.taxa}</td>
                            <td>{dados.juros}</td>
                            <td>{composto[indicie].juros}</td>
                            <td>{dados.montante}R$</td>
                            <td>{composto[indicie].montante}R$</td>
                        </tr>
                    )
                })}
            </table>
        </div>
    )
}

export default Tabela;