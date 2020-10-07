function hiper_periodo(processos, qnt) {
    //Hiper Periodo é o maior periodo dentre todos os processos
    let temp = 0;

    for (i = 0; i < qnt; i++) {
      if (processos[i][3] > temp)
          temp = processos[i][3]
    }

    return temp;
}

function escolher_menor_deadline(processos, qnt, deadlines) {
    let menor_deadline = 10000;
    let escolhido = -1;

    for (i = 0; i < qnt; i++) {
      if (deadlines[i] < menor_deadline){
        menor_deadline = deadlines[i]
        escolhido = i
      }
    }

    return escolhido;
}

function edf(processos, qnt) {
    let relogio = 0;
    let deadlines = Array.from({length: qnt}, (_, i) => 0);

    for (i = 0; i < qnt; i++) {
      deadlines[i] = processos[i][2];
    }

    let periodos = Array.from({length: qnt}, (_, i) => 0);

    for (i = 0; i < qnt; i++) {
      periodos[i] = processos[i][3];
    }
    console.log(`Processos: ${processos}`)
    console.log(`Deadlines: ${deadlines}`)
    console.log(`Periodos: ${periodos}\n`)
    contador = Array.from({length: qnt}, (_, i) => 0);

    while (true) {
      escolhido = escolher_menor_deadline(processos, qnt, deadlines)
      console.log(`Processo Escolhido: ${escolhido}`)

      if (periodos[escolhido] >= relogio) {
          relogio += processos[escolhido][1]
          console.log(`Processo: P${escolhido} executando...`)
          console.log(`Relogio: ${relogio}`)
          console.log(`Burst Time do Processo P${escolhido}: processos[escolhido][1]`)

          console.log(`Deadline ANTERIOR do Processo : ${deadlines[escolhido]}`)
          deadlines[escolhido] += processos[escolhido][3]
          console.log(`Deadline do Processo P${escolhido} Atualizada: ${deadlines[escolhido]}`)
          
          console.log(`Periodo ANTERIOR do Processo: ${periodos[escolhido]}`)
          periodos[escolhido] += processos[escolhido][3]
          console.log(`Periodo do Processo P${escolhido} Atualizado: ${periodos[escolhido]}\n`)
          contador[escolhido] += 1
      }
      if (relogio >= 20)
          break;
    }

    for (i = 0; i < qnt; i++) {
      console.log(`O Processo P${i} Executou ${contador[i]} vezes`)
    }
}

            //0  1  2  3
            //id bt dl p
processos = [
            [0, 3, 7, 20],
            [1, 2, 4, 5],
            [2, 2, 8, 10]
            ]

qnt = processos.length;
edf(processos, qnt)
