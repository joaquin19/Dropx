import React from "react";
import { DropContext } from "../../context";
import './form.style.css';

function DropForm() {
    const [newDropValue, setNewDropValue] = React.useState('');

    const {
        addDrop,
        setOpenModal
    } = React.useContext(DropContext);

    const onChange = (event) => {
        setNewDropValue(event.target.value);
    }

    const onCancel = () => {
        setOpenModal(false);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        addDrop(newDropValue);
        setOpenModal(false)
    }

    return(
        <form onSubmit={onSubmit}>
            <label>Add your new product</label>
            <div>
                <input value={newDropValue} onChange={onChange} placeholder="Código postal de origen"/>
            </div>
            <div>
                <input placeholder="Código postal de destino"/>
            </div>
            <div>
                <input placeholder="Medidas del paquete"/>
            </div>

            <div className="DropForm-button DropForm-buttonContainer">
                <button onClick={onCancel} type="button" className="DropForm-button DropForm-button--cancel">
                    <i class="fas fa-ban"></i> Cancel
                </button>
                <button type="submit" className="DropForm-button DropForm-button--add">
                    <i class="fas fa-save"></i> Add
                </button>
            </div>            
        </form>
    );
}

export {DropForm};