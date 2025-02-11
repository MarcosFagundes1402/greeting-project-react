export const Data = () => {
    const data = new Date();
    const mes = data.getMonth()

    const meses = [
        "Janeiro", "Fevereiro", "Março", "Abril",
        "Maio", "Junho", "Julho", "Agosto", "Setembro",
        "Outubro", "Novembro", "Dezembro",
    ];

    const nomeDoMes = meses[mes]

    return <div className="font-light text-2xl italic text-center">
        {data.getDate()} de {nomeDoMes} de {data.getFullYear()}
    </div>;
};
