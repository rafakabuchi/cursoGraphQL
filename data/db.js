const  perfis = [
    { id: 1, nome: 'comum' },
    { id: 2, nome: 'administrador' }
]

const usuarios = [{
    id: 1,
    nome: 'Melanie C',
    email:'melaniec@spicegirls.com',
    idade: 40,
    perfil_id: 1,
    status: 'ATIVO'
}, {
    id: 2,
    nome: 'Emma Bunton',
    email:'emmabunton@spicegirls.com',
    idade: 41,
    perfil_id: 2,
    status: 'INATIVO'
}, {
    id: 3,
    nome: 'Melanie B',
    email:'melanieb@spicegirls.com',
    idade: 40,
    perfil_id: 1,
    status: 'BLOQUEADO'
}]

module.exports = { usuarios, perfis }