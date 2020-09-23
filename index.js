const { ApolloServer, gql } = require('apollo-server')

const  perfis = [
    { id: 1, nome: 'comum' },
    { id: 2, nome: 'administrador' }
]

const typeDefs = gql`
    scalar Date


    type Produto {
    nome: String!
    preco: Float!
    desconto: Float
    precoComDesconto: Float
    }

    type Usuario {
        id: Int
        nome: String!
        email: String!
        idade: Int
        salario: Float
        vip: Boolean
    }

    type Perfil {
        id: Int
        nome: String
    }
    # Pontos de entrada da API/Consultas
    type Query {
        manha: String
        tarde: String
        noite: String
        horaAtual: Date
        usuarioLogado: Usuario
        produtoEmDestaque: Produto
        numerosMegaSena: [Int!]!
        usuarios: [Usuario]
        usuario(id: Int): Usuario
        perfis: [Perfil]
        perfil(id: Int): Perfil
    }

`

const resolvers = {
    Produto: {
        precoComDesconto(produto) {
            if(produto.desconto) {
                return produto.preco * (1 - produto.desconto)
            } else {
                return produto.preco
            }
        }
    },

    Usuario: {
        salario(usuario) {
            return usuario.salario_real
        }
    },


    Query: {
        manha() {
            return 'Bom dia!'
        },
        tarde() {
            return 'Boa tarde!'
        },
        noite() {
            return 'Boa noite!'
        },
        horaAtual() {
            return new Date
        },

        usuarioLogado() {
            return {
                id: 3,
                nome: 'Rafaela Saori',
                email: 'rkabuchi@gmail.com',
                idade: 35,
                salario_real: 10000.00,
                vip: true
            }
        },

        produtoEmDestaque() {
            return{
                nome: 'Playstion 5',
                preco: 4999.00,
                desconto: 0.15
            }
        },

        numerosMegaSena() {
            // return [08, 05, 03, 07, 26, 02]
            const crescente = (a,b) => a - b
            return Array(6).fill(0)
            .map(n => parseInt(Math.random() * 60 + 1))
            .sort(crescente)
        },

        usuarios() {
            return usuarios
        },

        usuario(_, args) {
            const sels = usuarios.filter(u => u.id === args.id)
            return sels ? sels[0] : null
        },

        perfis() {
            return perfis
        },

        perfil(_, { id }) {
            const sels = perfis.filter(p => p.id === id)
            return sels ? sels[0] : null
        }
    }


}

const server = new ApolloServer
({
    typeDefs,
    resolvers
})

server.listen().then(({ url }) => {
    console.log(`Executando em ${url}`)
})