import React from "react";

const listCustomer = [
    {
        id: 1,
        name : "claudio jin",
        skills : ["React", "Javascript"]

    },
    {
        id: 2,
        name : "Paulo jin",
        skills : ["Java", "Python"]

    },    {
        id: 3,
        name : "Rafael jin",
        skills : ["Node", "Go"]

    },    {
        id: 4,
        name : "guilherme jin",
        skills : ["database", "Oracle"]

    },
]

//Listas e chaves
const Listas = () => {

    //pode usar o indice quando nao tiver uma chave id
    const renderCustomer = (customer, index) => {
        return (
             //cada item precisa de uma chave da lista
            <div key={`Customer ${customer.id}`}>
                <li>
                {customer.name}
            </li>
            {customer.skills.map(renderSkills)}
            </div>
        )
    }

    const renderSkills = (skill, index) => <div style={{ paddingLeft: '30px'}}><li key={`Skill ${index}`}>{skill}</li></div>

    return (
        <div>
            ola vindo de listas
            <div>
                {listCustomer.map(renderCustomer)}
            </div>
        </div>
    )
}


export default Listas
