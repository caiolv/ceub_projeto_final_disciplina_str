const inputInt = require("./inputInt");

// Calcular Waiting Time
function waiting_time(processos) {
    //Definindo a quantidade tempos de servico de cada baseado na qnt. de processos
    let tempo_servico = Array.from({length: processos.length}, (_, i) => 0);
    //O tempo de servico é a soma de todos os BurstTime dos Processos anteriores
    tempo_servico[0] = 0;
    // Definindo tamanho da waiting list
    let wt = Array.from({length: processos.length}, (_, i) => 0);

    for (x = 1; x < processos.length; x++) {
      tempo_servico[x] = (tempo_servico[x-1] + processos[x-1][1])
      wt[x] = tempo_servico[x] - processos[x][0]
      if (wt[x] < 0)
          wt[x] = 0
    }

    return wt
}

// Calcular Turn around Time
function turn_around_time(processos) {
    //TurnAround Time = BurstTime + WaitingTime
    let tat = Array.from({length: processos.length}, (_, i) => 0); // Turn around time
    let wt = waiting_time(processos);

    for (x = 0; x < processos.length; x++)
      tat[x] = processos[x][1] + wt[x];

    return tat;
}
const reducer = (accumulator, currentValue) => accumulator + currentValue;

// Calcular media do waiting time
function average_wt(processos){
    let qnt_proc = processos.length;
    let wt = waiting_time(processos).reduce(reducer);
    return (wt / qnt_proc);
}

// Calcular media do Turnaround time
function average_tat(processos){
    let qnt_proc = processos.length;
    let tat = turn_around_time(processos).reduce(reducer);
    
    return (tat / qnt_proc);
}

// #####################################################################

// Lista de todos os processos
processos = []

let qtdProcessos = inputInt('Qnt de Processos: ');

for (var i = 0; i < qtdProcessos; i++) {
  let at = inputInt('Arrival Time:');
  let bt = inputInt('Burst Time:');

  processos.push([at, bt])
}

// /*
// Estrutura do Processo
//     [ [arrival_time, burst_time] ]
// */


console.log("Process\tBurst Time\tArrival Time\tWaiting Time\tTurn-Around Time\tCompletion Time\n\n")
const wt = waiting_time(processos)
const tat = turn_around_time(processos)
const avg_wt = average_wt(processos)
const avg_tat = average_tat(processos)

// Completion Time = Turn Around Time + Arrival Time
for (proc = 0; proc < processos.length; proc++)
    console.log(`${proc}\t\t${processos[proc][1]}\t\t${processos[proc][0]}\t\t${wt[proc]}\t\t${tat[proc]}\t\t${tat[proc] + processos[proc][0]}\n`)
console.log(`Average Waiting Time : ${avg_wt}`)
console.log(`Average Turn-Around Time: ${avg_tat}`)
