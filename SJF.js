const inputInt = require("./inputInt");

const reducer = (accumulator, currentValue) => accumulator + currentValue;

function waiting_time(processos) {
    //definindo a qnt. tempo de servico baseado na qnt de processos
    tempo_servico = Array.from({length: processos.length}, (_, i) => 0);
    //definindo tamanho da waiting list
    wt = Array.from({length: processos.length}, (_, i) => 0);

    for (x = 1; x < processos.length; x++) {
      tempo_servico[x] = (parseInt(tempo_servico[x-1]) + parseInt(processos[x-1][2]));
      wt[x] = parseInt(tempo_servico[x]) - parseInt(processos[x][1]);
      if (wt[x] < 0)
					wt[x] = 0;
    }
    return wt;
}

function turn_around_time(processos) {
    //turnaround time = burstTime + waitingTime
    tat = Array.from({length: processos.length}, (_, i) => 0);
    wt = waiting_time(processos)

    for (x = 0; x < processos.length; x++)
        tat[x] = processos[x][2] + wt[x];

    return tat;
}
function average_tat(processos){
    tat = turn_around_time(processos).reduce(reducer);
    
    //Retornando o tempo medio 
    //Soma_dos_tat / qnt.Processos
    return (tat / processos.length);
}

function average_wt(processos) {
    wt = waiting_time(processos).reduce(reducer);
    return (wt / processos.length);
}


function SJF(processos) {
    //Ordenando por Job(Burst time) mais curto

    for (var i = 0; i < processos.length; i++) {
        for (var j = 0; j < processos.length - 1; j++) {
            if (processos[j][2] > processos[j+1][2]) {
                let aux = processos[j];
                processos[j] = processos[j+1];
                processos[j+1] = aux
            }
        }
    }
    
    return processos
}

//######################################################################
console.log(":::::::::::::::::::::::::::::::::::SJF:::::::::::::::::::::::::::::::::::")

processos = []

qtdProcessos = inputInt("Quantidade de processos: ")

for (var i = 0; i < qtdProcessos; i++) {
  let pid = "P"; 
  let at = inputInt('Arrival Time:');
  let bt = inputInt('Burst Time:');

  processos.push([pid, at, bt])
}

/*
#############################################
#  Estrutura da Lista de Processos           #
#  Lista_processos = [                      #
#                    [id, at, bt],          #
#                    [id2, at2, bt2],       #
#                   ]                       #
#                                           #
#   id = id do processo                     #
#   at = Arrival Time                       #
#   bt = Burst Time                         #
#                                           #
#############################################
*/
wt = waiting_time(processos)
tat = turn_around_time(processos)
avg_wt = average_wt(processos)
avg_tat = average_tat(processos)
console.log("| Process |\t| Burst Time |\t\t| Arrival Time |\t| Waiting Time |\t| Turn-Around Time |\t| Completion Time |\n\n")

for (proc = 0; proc < processos.length; proc++)
    console.log(`${processos[proc][0]}${proc}\t\t\t${processos[proc][2]}\t\t\t${processos[proc][1]}\t\t\t${wt[proc]}\t\t\t${tat[proc]}\t\t\t${tat[proc] + processos[proc][1]}\n`)

console.log(`Average Waiting Time: {avg_wt}`)
console.log(`Average Turn-Around Time: {avg_tat}`)

console.log("\n:::::::::::::::::::::::DEPOIS::::::::::::::::::::::\n")

processos = SJF(processos)
wt = waiting_time(processos)
tat = turn_around_time(processos)
avg_wt = average_wt(processos)
avg_tat = average_tat(processos)
console.log(processos)

console.log("| Process |\t| Burst Time |\t\t| Arrival Time |\t| Waiting Time |\t| Turn-Around Time |\t| Completion Time |\n\n")
for (proc = 0; proc < processos.length; proc++)
    console.log(`${processos[proc][0]}${proc}\t\t\t${processos[proc][2]}\t\t\t${processos[proc][1]}\t\t\t${wt[proc]}\t\t\t${tat[proc]}\t\t\t${tat[proc] + processos[proc][1]}\n`)

console.log(`Average Waiting Time: ${avg_wt}`)
console.log(`Average Turn-Around Time: ${avg_tat}`)


