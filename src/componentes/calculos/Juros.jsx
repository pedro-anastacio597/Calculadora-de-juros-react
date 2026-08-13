function calcularJurosSimples({capital, taxa, tempo}){
    const c= Number(capital);
    const tem= Number(tempo);
    const ta= Number(taxa)/100;

    let dadosjurossimples= [];

    for (let t=1; t<= tem; t++) {
        let J = c * ta * t;
        let M= c + J;

        const dadosmes= {juros: J.toFixed(2), montante: M.toFixed(2), tempo: t, tipo: "Simples"}
        dadosjurossimples.push(dadosmes)
    };

    return dadosjurossimples;
};

function calcularJurosCompostos({capital, taxa, tempo}){
    const c= Number(capital);
    const tem= Number(tempo);
    const ta= Number(taxa)/100;

    let dadosjuroscomposto = [];

    for (let t=1; t<= tem; t++) {
        let M = c * (1 + ta)**t;
        let J = M - c;
        
        const dadosmes= {juros: J.toFixed(2), montante: M.toFixed(2), tempo: t, tipo: "Composto"} 

        dadosjuroscomposto.push(dadosmes)
    };

    return dadosjuroscomposto;
};


export {calcularJurosCompostos, calcularJurosSimples };