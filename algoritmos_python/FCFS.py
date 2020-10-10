# Calcular Waiting Time
def waiting_time(processos):
    #Definindo a quantidade tempos de servico de cada baseado na qnt. de processos
    tempo_servico = [0] * len(processos)
    #O tempo de servico é a soma de todos os BurstTime dos Processos anteriores
    tempo_servico[0] = 0
    # Definindo tamanho da waiting list
    wt = [0] * len(processos)

    for x in range(1, len(processos)):
        tempo_servico[x] = (tempo_servico[x-1] + processos[x-1][1])
        wt[x] = tempo_servico[x] - processos[x][0]
        if (wt[x] < 0):
            wt[x] = 0
    return wt

# Calcular Turn around Time
def turn_around_time(processos):
    #TurnAround Time = BurstTime + WaitingTime
    tat = [0] * len(processos) # Turn around time
    wt = waiting_time(processos)
    for x in range(len(processos)):
        tat[x] = processos[x][1] + wt[x]
    return tat

# Calcular media do waiting time
def average_wt(processos):
    qnt_proc = len(processos)
    wt = sum(waiting_time(processos))
    return (wt / qnt_proc)

# Calcular media do Turnaround time
def average_tat(processos):
    qnt_proc = len(processos)
    tat = sum(turn_around_time(processos))
    return (tat / qnt_proc)


#####################################################################

# Lista de todos os processos
processos = []
qnt_processos = int(input("Qnt de Processos: "))
for x in range(qnt_processos):
    at = int(input("Arrival Time: "))
    bt =  int(input("Burst Time: "))
    processos.append([at, bt])

"""
Estrutura do Processo
    [ [arrival_time, burst_time] ]
"""


print("Process\tBurst Time\tArrival Time\tWaiting Time\tTurn-Around Time\tCompletion Time\n\n")
wt = waiting_time(processos)
tat = turn_around_time(processos)
avg_wt = average_wt(processos)
avg_tat = average_tat(processos)
# Completion Time = Turn Around Time + Arrival Time
for proc in range(len(processos)):
    print(f"{proc}\t\t{processos[proc][1]}\t\t{processos[proc][0]}\t\t{wt[proc]}\t\t{tat[proc]}\t\t{tat[proc] + processos[proc][0]}\n")
print(f"Average Waiting Time : {avg_wt}")
print(f"Average Turn-Around Time: {avg_tat}")
