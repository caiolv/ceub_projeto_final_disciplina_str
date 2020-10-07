const input = require("./input");

// Calcular Waiting Time
function waiting_time(processos) {
    //Definindo a quantidade tempos de servico de cada baseado na qnt. de processos
    let tempo_servico = Array.from({length: processos.length}, (_, i) => 0);
    //O tempo de servico é a soma de todos os BurstTime dos Processos anteriores
    tempo_servico[0] = 0;
    // Definindo tamanho da waiting list
    wt = Array.from({length: processos.length}, (_, i) => 0);

    for (i = 1; i < processos.length; i++) {
      tempo_servico[x] = (tempo_servico[x-1] + processos[x-1][1])
      wt[x] = tempo_servico[x] - processos[x][0]
      if (wt[x] < 0)
          wt[x] = 0
    }

    return wt
}

// Calcular Turn around Time
function turn_around_time(processos){
    //TurnAround Time = BurstTime + WaitingTime
    let tat =  Array.from({length: processos.length}, (_, i) => 0); // Turn around time
    let wt = waiting_time(processos);

    for (i = 0; i < processos.length; i++)
      tat[x] = processos[x][1] + wt[x];

    return tat;
}
const reducer = (accumulator, currentValue) => accumulator + currentValue;

// Calcular media do waiting time
function average_wt(processos){
    qnt_proc = processos.length;
    wt = waiting_time(processos).reduce(reducer);
    return (wt / qnt_proc);
}

// Calcular media do Turnaround time
function average_tat(processos){
    let qnt_proc = len(processos);
    tat = turn_around_time(processos).reduce(reducer);
    
    return (tat / qnt_proc);
}

// #####################################################################

// Lista de todos os processos
processos = []

input("Qnt de Processos: ", qtdProcessos => {
  for (var i = 0; i < qtdProcessos; i++) {
    let at = 0;
    let bt = 0;



  }
});

// qnt_processos = int(input("Qnt de Processos: "))
// for x in range(qnt_processos):
//     at = int(input("Arrival Time: "))
//     bt =  int(input("Burst Time: "))
//     processos.append([at, bt])

// /*
// Estrutura do Processo
//     [ [arrival_time, burst_time] ]
// */


// console.log("Process\tBurst Time\tArrival Time\tWaiting Time\tTurn-Around Time\tCompletion Time\n\n")
// wt = waiting_time(processos)
// tat = turn_around_time(processos)
// avg_wt = average_wt(processos)
// avg_tat = average_tat(processos)
// // Completion Time = Turn Around Time + Arrival Time
// for proc in range(len(processos)):
//     print(f"{proc}\t\t{processos[proc][1]}\t\t{processos[proc][0]}\t\t{wt[proc]}\t\t{tat[proc]}\t\t{tat[proc] + processos[proc][0]}\n")
// print(f"Average Waiting Time : {avg_wt}")
// print(f"Average Turn-Around Time: {avg_tat}")
