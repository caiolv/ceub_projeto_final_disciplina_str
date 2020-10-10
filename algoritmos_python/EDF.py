def hiper_periodo(processos, qnt):
    # Hiper Periodo é o maior periodo dentre todos os processos
    temp = 0
    for i in range(qnt):
        if processos[i][3] > temp:
            temp = processos[i][3]
    return temp

def escolher_menor_deadline(processos, qnt, deadlines):
    menor_deadline = 10000
    escolhido = -1
    for i in range(qnt):
        if deadlines[i] < menor_deadline:
            menor_deadline = deadlines[i]
            escolhido = i
    return escolhido

def edf(processos, qnt):
    relogio = 0
    deadlines = [0] * qnt
    for i in range(qnt):
        deadlines[i] = processos[i][2]
    periodos = [0] * qnt
    for i in range(qnt):
        periodos[i] = processos[i][3]
    print(f"Processos: {processos}")
    print(f"Deadlines: {deadlines}")
    print(f"Periodos: {periodos}\n")
    contador = [0] * qnt

    while True:
        escolhido = escolher_menor_deadline(processos, qnt, deadlines)
        print(f"Processo Escolhido: {escolhido}")
        if periodos[escolhido] >= relogio:
            relogio += processos[escolhido][1]
            print(f"Processo: P{escolhido} executando...")
            print(f"Relogio: {relogio}")
            print(f"Burst Time do Processo P{escolhido}: processos[escolhido][1]")

            print(f"Deadline ANTERIOR do Processo : {deadlines[escolhido]}")
            deadlines[escolhido] += processos[escolhido][3]
            print(f"Deadline do Processo P{escolhido} Atualizada: {deadlines[escolhido]}")
            
            print(f"Periodo ANTERIOR do Processo: {periodos[escolhido]}")
            periodos[escolhido] += processos[escolhido][3]
            print(f"Periodo do Processo P{escolhido} Atualizado: {periodos[escolhido]}\n")
            contador[escolhido] += 1
        if relogio >= 20:
            break

    for i in range(qnt):
        print(f"O Processo P{i} Executou {contador[i]} vezes")

            #0  1  2  3
            #id bt dl p
processos = [
            [0, 3, 7, 20],
            [1, 2, 4, 5],
            [2, 2, 8, 10]
            ]

qnt = len(processos)
edf(processos, qnt)
