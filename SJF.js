const inputInt = require("./inputInt");

const reducer = (accumulator, currentValue) => accumulator + currentValue;

function waiting_time(processos) {
    //definindo a qnt. tempo de servico baseado na qnt de processos
    tempo_servico = Array.from({length: processos.length}, (_, i) => 0);
    //definindo tamanho da waiting list
    wt = Array.from({length: processos.length}, (_, i) => 0);

    for (x = 1; x < processos.length; x++) {
      tempo_servico[x] = (tempo_servico[x-1] + processos[x-1][1]);
      wt[x] = tempo_servico[x] - processos[x][0];
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
        for (var i = 0; i < processos.length - 1; i++) {
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
// print(":::::::::::::::::::::::::::::::::::SJF:::::::::::::::::::::::::::::::::::")

// processos = []
// qnt_processos = int(input("Quantidade de processos: "))
// for x in range(qnt_processos):
//     pid = f"P{x}"
//     at = int(input("Arrival Time: "))
//     bt = int(input("Burst Time: "))
//     processos.append([pid, at, bt])

// /*
// #############################################
// #  Estrutura da Lista de Processos           #
// #  Lista_processos = [                      #
// #                    [id, at, bt],          #
// #                    [id2, at2, bt2],       #
// #                   ]                       #
// #                                           #
// #   id = id do processo                     #
// #   at = Arrival Time                       #
// #   bt = Burst Time                         #
// #                                           #
// #############################################
// */
// wt = waiting_time(processos)
// tat = turn_around_time(processos)
// avg_wt = average_wt(processos)
// avg_tat = average_tat(processos)
// print("| Process |\t| Burst Time |\t\t| Arrival Time |\t| Waiting Time |\t| Turn-Around Time |\t| Completion Time |\n\n")
// for proc in range(len(processos)):
//     print(f"{processos[proc][0]}\t\t\t{processos[proc][2]}\t\t\t{processos[proc][1]}\t\t\t{wt[proc]}\t\t\t{tat[proc]}\t\t\t{tat[proc] + processos[proc][1]}\n")

// print(f"Average Waiting Time: {avg_wt}")
// print(f"Average Turn-Around Time: {avg_tat}")

// print("\n:::::::::::::::::::::::DEPOIS::::::::::::::::::::::\n")

// processos = SJF(processos)
// wt = waiting_time(processos)
// tat = turn_around_time(processos)
// avg_wt = average_wt(processos)
// avg_tat = average_tat(processos)
// print(processos)

// print("| Process |\t| Burst Time |\t\t| Arrival Time |\t| Waiting Time |\t| Turn-Around Time |\t| Completion Time |\n\n")
// for proc in range(len(processos)):
//     print(f"{processos[proc][0]}\t\t\t{processos[proc][2]}\t\t\t{processos[proc][1]}\t\t\t{wt[proc]}\t\t\t{tat[proc]}\t\t\t{tat[proc] + processos[proc][1]}\n")

// print(f"Average Waiting Time: {avg_wt}")
// print(f"Average Turn-Around Time: {avg_tat}")

