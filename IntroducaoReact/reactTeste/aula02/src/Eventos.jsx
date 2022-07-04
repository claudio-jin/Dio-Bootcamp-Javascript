import React from 'react';

const Eventos = () => {
    
    const name = "Evento dio"
    
    const handleChange = (e) => {
        const { value } = e.target
        console.log(value)
    }
    
    const showEvent = (e) => {
        console.log('Evento clicado')
        console.log(e)
        alert(name)

    }

    const deleteButton = <button onClick={showEvent}>Mostrar evento</button>

    return (
        <div>
            <input onChange={handleChange}/>
            {deleteButton}
        </div>
    )
}

export default Eventos