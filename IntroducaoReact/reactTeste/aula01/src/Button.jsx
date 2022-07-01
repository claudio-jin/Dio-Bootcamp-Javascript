import React from "react";

function Button(props) {
    //Desestruturação de um props (dado)

    const { name, onClick } = props;
    //cons name = props.name // A linha de cima é a mesma coisa
    return (
        <button onClick={onClick}>{ name }</button>
    )
}

export default Button