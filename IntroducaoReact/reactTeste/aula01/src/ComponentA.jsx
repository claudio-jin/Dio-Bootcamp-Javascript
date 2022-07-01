import React from "react";

//Tudo que eu passo dentro de um componente, eu posso acessa-lo
//por meio do children
//Pra renderizar um componente, preciso chamar o filho do componente
function ComponentA(props) {
    return (
        <div>Texto vindo do componente A
            <div>{props.children}</div>
        </div>

    )
}

export default ComponentA