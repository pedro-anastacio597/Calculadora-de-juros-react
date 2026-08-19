function BotaoJuros({onCalcular}) {
    return(
        <button onClick={() => onCalcular()}>
            Calcular juros
        </button>
    );
};

export default BotaoJuros;