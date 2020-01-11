import React from 'react';


function Needtodo(props) { 
    return (
        <div>
            <input type="checkbox" checked={props.item.completed} onChange={onNeedtodoChnage} />
            <span>{props.item.description}</span>
        </div>
    )
}

function onNeedtodoChnage() {

}

export default Needtodo 