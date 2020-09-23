const { usuarios, perfis } = require('../data/db')

module.exports = {
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
