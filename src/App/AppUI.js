import React from "react";
import {ListComponent} from './components/list/list.component';
import {SearchComponent} from './components/search/search.component';
import { DropContext } from "./context";
import { CreateDropButton } from "./components/create-drop/createDrop.component";
import { Modal } from './components/modal/modal.component';
import {DropForm} from './components/form/form.component.js';
import './App.css';

function AppUI() {

    const {
        error,
        loading,
        searchAll,
        deleteDrop,
        openModal,
        setOpenModal
    } = React.useContext(DropContext);

    return(
        <React.Fragment>
            <h1 className='text-center'>Test SkyDropx</h1>
            <SearchComponent/>
                {error && <p className="text-center">Lo sentimos, hubo un error...</p>}
                {loading && <p className="text-center">Estamos cargando, por favor espere...</p>}
                {(!loading && !searchAll.length) && <p className="text-center">¡Sin datos por el momento!</p>}
                {searchAll.map(search => (
                  <ListComponent 
                      key={search.id}
                      text={search.id}
                      onDelete={() => deleteDrop(search.id)}
                       />
                ))}

            { !!openModal && (
                <Modal>
                    {/* <p>{searchAll[0]?.id}</p> */}
                    <DropForm/>
                </Modal>
            )}

            <CreateDropButton
                setOpenModal={setOpenModal}
            />
        </React.Fragment>
    );
}

export {AppUI};
