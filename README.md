# Algoritmos de Escalonamento em Javascript (Node)

**Aluno**: Caio Costa de Oliveira

Este repositório se trata da reconstrução dos [**algoritmos de escalonamento**](https://dev.educatux.com.br/uniceub/str/-/tree/master/algoritmos_de_escalonamento) da matéria **Sistemas em Tempo Real e Embarcados** do UniCeub.

O repositório está subdividido em 4 setores, cada um com uma pasta, onde cada pasta representa a resolução de cada exercício do laboratório. Além disso, cada pasta possui um README que contém uma descrição do exercício e uma explicação da resolução.

## Instalação

Clone o repositório com o comando 
~~~shell
git clone https://gitlab.com/caio_oliveira_ceub/algoritmos_escalonamento_str.git
~~~

e em seguida installe a dependência pelo **Yarn** ou **NPM** pelo comando

~~~shell
yarn install
~~~
ou 
~~~shell
npm install
~~~

## Sobre os Algoritmos


### EDF - Earliest Deadline First

O "Earliest Deadline First" (EDF) é um algoritmo de escalonamento de prioridade dinâmica usado em sistemas operacionais em tempo real para colocar processos em uma fila de prioridade. Sempre que ocorrer um evento de agendamento (tarefa concluída, nova tarefa liberada, etc.), a fila será pesquisada para o processo mais próximo de seu prazo. Este processo é o próximo a ser agendado para execução.

Para rodar o código, apenas executar o comando
~~~shell
node EDF.js
~~~

### FCFS - First Come First Serve

O "First Come First Serve" (FCFS) é um algoritmo de escalonamento muito semelhante às estruturas de dados da fila FIFO (*first in first out*), em que o elemento de dados que é adicionado primeiro à fila é o que sairá primeiro da fila.


Para rodar o código, apenas executar o comando
~~~shell
node FCFS.js
~~~