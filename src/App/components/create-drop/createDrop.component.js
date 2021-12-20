import React from 'react';
import './createDrop.style.css';

function CreateDropButton(props) {
  const onClickButton = () => {
    props.setOpenModal(prevState => !prevState);
  };
  
  return (
    <button
      className="CreateDropButton"
      onClick={onClickButton}
    ><i class="fas fa-plus"></i>
    </button>
  );
}

export { CreateDropButton };