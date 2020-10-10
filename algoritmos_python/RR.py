# ROUND-ROBIN
def round_robin(processos, quantum, qnt_processos):
    # Criando uma lista de Burst Time restante dos processos
    bt_restante = [0] * qnt_processos
    # Criando uma lista de Waiting Time
    wt = [0] * qnt_processos
    # Copiando BurstTime dos processos para o bt_restante
    for i in range(qnt_processos):
        bt_restante[i] = processos[i][2]

    tempo = 0 # Tempo total que será adicionado ao WaitingTime
    overhead = 1 # Valor hipotetico para o tempo gasto na troca de contexto entre processos

    while True:
        # Variavel de Controle, verifica se os processos foram
        # finalizados ou não
        finalizados = True
        for i in range(qnt_processos):
            tempo += overhead # Para cada troca de contexto entre os processos, Adicionar ao Tempo Total

            # Se for maior que 0, ainda há processos a serem
            # Finalizados
            if bt_restante[i] > 0:
                finalizados = False
                # Se o tempo restante for maior que Quantum 
                if bt_restante[i] > quantum:
                    # Somar quantum ao tempo de processamento
                    tempo += quantum
                    # Retirar do BurstTime restante o Tempo(quantum)
                    # que ja foi processado
                    bt_restante[i] -= quantum
                else: # Caso o tempo restante seja menor que quantum
                    # Somar ao tempo, o tempo restante de bt
                    tempo += bt_restante[i]
                    # WaitingTime = tempo_total - burst_time do processo
                    wt[i] = tempo - processos[i][2]
                    # Zerando burst time
                    bt_restante[i] = 0
        # Se todos os Processos foram concluídos
        if (finalizados == True):
            break
    return wt # Retornar Lista de WaitingTime



def turn_around_time(processos, wt, qnt_processos):
    tat = [0] * qnt_processos
    for x in range(qnt_processos):
        tat[x] = processos[x][2] + wt[x]
    return tat


def average_tat(tat, qnt_processos):
    turnaround_time = sum(tat)
    return (turnaround_time/qnt_processos)

def average_wt(wt, qnt_processos):
    waiting_time = sum(wt)
    return (waiting_time/qnt_processos)


#####################################################################

processos = []
print("Algoritmo Round Robin")
qnt_processos = int(input("Quantidade de processos: "))
for x in range(qnt_processos):
    pid = f"P{x}"
    at = int(input("Arrival Time: "))
    bt = int(input("Burst Time: "))
    processos.append([pid, at, bt])
quantum = int(input("Informe o Quantum: "))

###########################################
# Estrutura da Lista de Processos
# 
#   processos = [
#               [id, at, bt],
#               [id2, at2, bt2]
#               ]
#
#   id = id do processo
#   at = Arrival Time
#   bt = Burst Time
############################################

# Waiting Time
wt = round_robin(processos, quantum, qnt_processos)
# TurnAround Time
tat = turn_around_time(processos, wt, qnt_processos)
# Média de todos os TurnAround Time
avg_tat = average_tat(tat, qnt_processos)
# Média de todos os Waiting Time
avg_wt = average_wt(wt, qnt_processos)
print(f"WT = {wt}\nTAT = {tat}\nAVG_TAT = {avg_tat}\nAVG_WT = {avg_wt}")


print("| Process |\t| Burst Time |\t\t| Arrival Time |\t| Waiting Time |\t| Turn-Around Time |\t\n\n")
for proc in range(len(processos)):
    print(f"{processos[proc][0]}\t\t\t{processos[proc][2]}\t\t\t{processos[proc][1]}\t\t\t{wt[proc]}\t\t\t         {tat[proc]}\t\t\t\n")

print(f"Average Waiting Time: {avg_wt}")
print(f"Average Turn-Around Time: {avg_tat}")

