import React from "react";

//Quando chamamaos
function ComponentB(props) {
    return (
        <div>Texto vindo do componente B
            <div>{props.children}</div>
        </div>

    )
}

export default ComponentB