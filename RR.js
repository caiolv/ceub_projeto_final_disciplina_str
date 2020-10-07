const reducer = (accumulator, currentValue) => accumulator + currentValue;

// ROUND-ROBIN
function round_robin(processos, quantum, qnt_processos) {
    // Criando uma lista de Burst Time restante dos processos
    bt_restante = Array.from({length: qnt_processos}, (_, i) => 0);
    // Criando uma lista de Waiting Time
    wt = Array.from({length: qnt_processos}, (_, i) => 0);
    // Copiando BurstTime dos processos para o bt_restante
    for (var i = 0; i < qnt_processos; i++)
        bt_restante[i] = processos[i][2]

    tempo = 0 // Tempo total que será adicionado ao WaitingTime
    overhead = 1 // Valor hipotetico para o tempo gasto na troca de contexto entre processos

    while (true) {
        // Variavel de Controle, verifica se os processos foram
        // finalizados ou não
        let finalizados = true;
        for (var i = 0; i < qnt_processos; i++) {
            tempo += overhead // Para cada troca de contexto entre os processos, Adicionar ao Tempo Total

            // Se for maior que 0, ainda há processos a serem
            // Finalizados
            if (bt_restante[i] > 0) { 
                finalizados = false;
                // Se o tempo restante for maior que Quantum 
                if (bt_restante[i] > quantum) {
                    // Somar quantum ao tempo de processamento
                    tempo += quantum
                    // Retirar do BurstTime restante o Tempo(quantum)
                    // que ja foi processado
                    bt_restante[i] -= quantum
                }
                else { // Caso o tempo restante seja menor que quantum
                    // Somar ao tempo, o tempo restante de bt
                    tempo += bt_restante[i]
                    // WaitingTime = tempo_total - burst_time do processo
                    wt[i] = tempo - processos[i][2]
                    // Zerando burst time
                    bt_restante[i] = 0
                }
            }
        }
        // Se todos os Processos foram concluídos
        if (finalizados)
            break
    }
    return wt // Retornar Lista de WaitingTime

}

function turn_around_time(processos, wt, qnt_processos) { 
    tat =   Array.from({length: qnt_processos}, (_, i) => 0);
    for (var i = 0; i < qnt_processos; i++)
        tat[x] = processos[x][2] + wt[x]
    return tat
}

function average_tat(tat, qnt_processos) { 
    turnaround_time = tat.reduce(reducer);
    return (turnaround_time/qnt_processos)
}

function average_wt(wt, qnt_processos) { 
    waiting_time = wt.reduce(reducer);
    return (waiting_time/qnt_processos)
}
