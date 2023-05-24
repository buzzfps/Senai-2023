var meses = [
    {mes: 'janeiro', aporte: 500, rent: 0.001},
    {mes: 'fevereiro', aporte: 300, rent:0.003},
    {mes: 'marco', aporte: 250, rent: 0.005},
    {mes: 'abril', aporte: 300, rent: 0.01 },
    {mes: 'maio', aporte: 100, rent: 0.007  },
    {mes: 'junho', aporte: 0, rent: 0.005  },
    {mes: 'julho', aporte: 0, rent: 0.003  },
    {mes: 'agosto', aporte: 300, rent: 0.008 },
    {mes: 'setembro', aporte: 400, rent: 0.011 },
    {mes: 'outubro', aporte: 500, rent: 0.01},
]

function calcInvestimento(aporte, montante){
    return new Promise(() =>{
        setTimeout(() =>{
            let rendimento = (aporte.aporte + montante) *aporte.rent;
            console.log(`Rendeu ${rendimento.toFixed(2)}`);
            res(rendimento)
        }, 500);
    });
}

async function res(){
         let montante = 0
         for(let i = 0; i < meses.length; i++){
                console.log(`${meses[i].mes}, investimento: ${meses[i].aporte}, juros: ${(meses[i].rent * 100).toFixed(2)}%`);
                let rendimento = await calcInvestimento(meses[i], montante);
                montante += meses[i].aporte + rendimento;
                console.log('Montante = ' + montante.toFixed(2)+'\n');
        };
    };
res();