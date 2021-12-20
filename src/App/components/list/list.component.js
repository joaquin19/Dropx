import React from 'react';
import './lsit.style.css';

function ListComponent(props) {

    return (
        <ul>
            <li className="ListComponent"> 
                <i className='fas fa-people-carry'></i>   
                <p  className='ListComponent-p'>{props.text}</p>  
                <i className="Icon Icon-delete fas fa-trash-alt" onClick={props.onDelete}></i>          
            </li>
        </ul>
    );
}

export {ListComponent};