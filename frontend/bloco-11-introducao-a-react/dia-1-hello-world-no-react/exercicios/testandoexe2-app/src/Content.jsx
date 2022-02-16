import React, { Component } from "react"

const conteudos = [
    {
        conteudo: 'High Order Functions',
        bloco: 8,
        status: 'Aprendido'
    },
    {
        conteudo: 'Composicao de Componentes',
        bloco: 11,
        status: 'Aprendendo',
    },
    {
        conteudo: 'Composicao de Estados',
        bloco: 12,
        status: 'Aprenderei'
    },
    {
        conteudo: 'Redux',
        bloco: 16,
        status: 'Aprenderei'
    },
];

let iClass = 0;

class Content extends Component {
    render() {
        return conteudos.map((e) => {
            iClass++;
            return <div className={(iClass).toString}>
                <ul>O Conteúdo é:{e.conteudo}</ul>
                <ul>Status: {e.status}</ul>
                <ul>Bloco: {e.bloco}</ul>
                <p>---------------------------------------------------------------------------------</p>
            </div>

        })
    }
}

export default Content


