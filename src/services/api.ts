export function loadLists() {
    return [
      { 
        title: 'Tarefas', 
        creatable: true,
        cards: [
          {
            id: 1,
            content: 'Estudar módulo 01 de NodeJS',
            labels: ['#7159c1'],
            user: 'https://avatars.githubusercontent.com/u/132391248?s=400&u=907f6b1a4dd9d607bb417c27c9442aabc93e8f82&v=4'
          },
          {
            id: 2,
            content: 'Criar vídeo para o Youtube ensinando a recriar a interface do Pipefy',
            labels: ['#7159c1'],
            user: 'https://avatars.githubusercontent.com/u/132391248?s=400&u=907f6b1a4dd9d607bb417c27c9442aabc93e8f82&v=4'
          },
          {
            id: 3,
            content: 'Estudar módulo 03 de React Native',
            labels: ['#7159c1'],
            user: 'https://avatars.githubusercontent.com/u/132391248?s=400&u=907f6b1a4dd9d607bb417c27c9442aabc93e8f82&v=4'
          },
          {
            id: 4,
            content: 'Gravar Aula "NextJS: Utilizando server-side rendering com ReactJS"',
            labels: ['#54e1f7'],
            user: 'https://avatars.githubusercontent.com/u/132391248?s=400&u=907f6b1a4dd9d607bb417c27c9442aabc93e8f82&v=4'
          },
          {
            id: 5,
            content: 'Gravar testes e deploy ReactJS',
            labels: ['#54e1f7'],
            user: 'https://avatars.githubusercontent.com/u/132391248?s=400&u=907f6b1a4dd9d607bb417c27c9442aabc93e8f82&v=4'
          },
        ]
      },
      { 
        title: 'Fazendo', 
        creatable: false,
        cards: [
          {
            id: 6,
            content: 'Recriando clone do Pipefy',
            labels: [],
            user: 'https://avatars.githubusercontent.com/u/132391248?s=400&u=907f6b1a4dd9d607bb417c27c9442aabc93e8f82&v=4'
          }
        ]
      },
      { 
        title: 'Pausado', 
        creatable: false,
        cards: [
          {
            id: 7,
            content: 'Gravar sobre Geolocalização e mapas com React Native',
            labels: ['#7159c1'],
            user: 'https://avatars.githubusercontent.com/u/132391248?s=400&u=907f6b1a4dd9d607bb417c27c9442aabc93e8f82&v=4'
          },
          {
            id: 8,
            content: 'Gravar testes e deploy ReactJS',
            labels: ['#54e1f7'],
            user: 'https://avatars.githubusercontent.com/u/132391248?s=400&u=907f6b1a4dd9d607bb417c27c9442aabc93e8f82&v=4'
          },
          {
            id: 9,
            content: 'Ajustes na biblioteca unform',
            labels: [],
          }
        ]
      },
      { 
        title: 'Concluído', 
        creatable: false,
        done: true,
        cards: [
          {
            id: 10,
            content: 'Gravar aula sobre deploy e CI com React Native',
            labels: [],
          },
          {
            id: 12,
            content: 'Gravar testes e deploy ReactJS',
            labels: ['#54e1f7'],
          },
          {
            id: 13,
            content: 'Gravar Aula "Internacionalização de aplicações Node.js, ReactJS e React Native"',
            labels: ['#7159c1'],
          }
        ]
      },
    ];
  }