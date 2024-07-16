export function loadLists() {
    return [
      { 
        title: 'Leads Iniciais', 
        creatable: false,
        cards: [
          {
            id: 1,
            status: 'Em andamento',
            statusColor: '#7024FF',
            name: 'Priscila Santos',
            course: 'SEMI 2024',
            contacts: 1,
            user: 'https://avatars.githubusercontent.com/u/132391248?s=400&u=907f6b1a4dd9d607bb417c27c9442aabc93e8f82&v=4',
            info: '',
            labels: ['#7159c1']
          },
          {
            id: 2,
            status: 'Em andamento',
            statusColor: '#7024FF',
            name: 'Isa',
            course: 'SEMI 2024',
            contacts: 1,
            user: 'https://avatars.githubusercontent.com/u/132391248?s=400&u=907f6b1a4dd9d607bb417c27c9442aabc93e8f82&v=4',
            info: 'CONTATO 1 15/07/2024 13:27',
            labels: ['#7159c1']
          },
          {
            id: 3,
            status: 'Em andamento',
            statusColor: '#7024FF',
            name: 'Elizabeth Rodrigues',
            course: 'SEMI 2024',
            contacts: 1,
            user: 'https://avatars.githubusercontent.com/u/132391248?s=400&u=907f6b1a4dd9d607bb417c27c9442aabc93e8f82&v=4',
            info: 'CONTATO 3 15/07/2024 13:27',
            labels: ['#7159c1']
          },
          {
            id: 4,
            status: 'Em andamento',
            statusColor: '#7024FF',
            name: 'Gabriely Valério',
            course: 'SEMI 2024',
            contacts: 1,
            user: 'https://avatars.githubusercontent.com/u/132391248?s=400&u=907f6b1a4dd9d607bb417c27c9442aabc93e8f82&v=4',
            info: '',
            labels: ['#7159c1']
          },
          {
            id: 5,
            status: 'Em andamento',
            statusColor: '#7024FF',
            name: 'Murilo Inez Rosa da Silva',
            course: 'SEMI 2024',
            contacts: 1,
            user: 'https://avatars.githubusercontent.com/u/132391248?s=400&u=907f6b1a4dd9d607bb417c27c9442aabc93e8f82&v=4',
            info: 'CONTATO 5 15/07/2024 13:27',
            labels: ['#7159c1']
          },
        ]
      },
      { 
        title: 'Qualificados', 
        creatable: false,
        cards: [
          {
            id: 6,
            status: 'Em andamento',
            statusColor: '#7024FF',
            name: 'Recriando clone do Pipefy',
            course: 'SEMI 2024',
            contacts: 1,
            user: 'https://avatars.githubusercontent.com/u/132391248?s=400&u=907f6b1a4dd9d607bb417c27c9442aabc93e8f82&v=4',
            info: 'CONTATO 6 15/07/2024 13:27',
            labels: []
          }
        ]
      },
      { 
        title: 'Propostas Enviadas', 
        creatable: false,
        cards: [
          {
            id: 7,
            status: 'Em andamento',
            statusColor: '#7024FF',
            name: 'Gravar sobre Geolocalização e mapas com React Native',
            course: 'SEMI 2024',
            contacts: 1,
            user: 'https://avatars.githubusercontent.com/u/132391248?s=400&u=907f6b1a4dd9d607bb417c27c9442aabc93e8f82&v=4',
            info: '',
            labels: ['#7159c1']
          },
          {
            id: 8,
            status: 'Em andamento',
            statusColor: '#7024FF',
            name: 'Gravar testes e deploy ReactJS',
            course: 'SEMI 2024',
            contacts: 1,
            user: 'https://avatars.githubusercontent.com/u/132391248?s=400&u=907f6b1a4dd9d607bb417c27c9442aabc93e8f82&v=4',
            info: 'CONTATO 8 15/07/2024 13:27',
            labels: ['#54e1f7']
          },
          {
            id: 9,
            status: 'Em andamento',
            statusColor: '#7024FF',
            name: 'Ajustes na biblioteca unform',
            course: 'SEMI 2024',
            contacts: 1,
            info: 'CONTATO 9 15/07/2024 13:27',
            labels: []
          }
        ]
      },
      { 
        title: 'Negociações', 
        creatable: false,
        cards: [
          {
            id: 10,
            status: 'Concluído',
            statusColor: '#7024FF',
            name: 'Gravar aula sobre deploy e CI com React Native',
            course: 'SEMI 2024',
            contacts: 1,
            info: '',
            labels: []
          },
          {
            id: 12,
            status: 'Concluído',
            statusColor: '#7024FF',
            name: 'Gravar testes e deploy ReactJS',
            course: 'SEMI 2024',
            contacts: 1,
            info: 'CONTATO 12 15/07/2024 13:27',
            labels: ['#54e1f7']
          },
          {
            id: 13,
            status: 'Concluído',
            statusColor: '#7024FF',
            name: 'Gravar Aula "Internacionalização de aplicações Node.js, ReactJS e React Native"',
            course: 'SEMI 2024',
            contacts: 1,
            info: '',
            labels: ['#7159c1']
          }
        ]
      },
      { 
        title: 'Fechados', 
        creatable: false,
        done: true,
        cards: [
          {
            id: 14,
            status: 'Concluído',
            statusColor: '#7024FF',
            name: 'Maria Silva',
            course: 'Marketing Digital',
            contacts: 2,
            info: 'Fechado em 15/07/2024',
            labels: ['#ff6347']
          },
          {
            id: 15,
            status: 'Concluído',
            statusColor: '#7024FF',
            name: 'Carlos Eduardo',
            course: 'Desenvolvimento Web',
            contacts: 3,
            info: 'Fechado em 12/07/2024',
            labels: ['#32cd32']
          },
          {
            id: 16,
            status: 'Concluído',
            statusColor: '#7024FF',
            name: 'Ana Beatriz',
            course: 'Design Gráfico',
            contacts: 1,
            info: 'Fechado em 10/07/2024',
            labels: ['#ff6347']
          }
        ]
      }
    ];
  }
  