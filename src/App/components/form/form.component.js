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
                <input value={newDropValue} onChange={onChange} placeholder="zip code of origin"/>
            </div> <br/>
            <div>
                <input placeholder="destination zip code"/>
            </div><br/>
            <label>Package measurements</label>
            <div>
                <input className="mb-2" placeholder="weigth"/>
                <input className="mb-2" placeholder="unit distance"/>
                <input className="mb-2" placeholder="unit mass"/>
                <input className="mb-2" placeholder="height"/>
                <input className="mb-2" placeholder="width"/>
                <input placeholder="length"/>
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