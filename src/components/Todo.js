import { useState } from 'react';
import Modal from './Modal';
import Backdrop from './Backdrop';

function Todo({ title }) {
  const [modalShown, setModalShown] = useState(false);

  function deleteHandler() {
    setModalShown(!modalShown);
  }

  return (
    <div className='card'>
      <h2>{title}</h2>
      <div className='actions'>
        <button className='btn' onClick={deleteHandler}>
          Delete
        </button>
      </div>
      {modalShown && <Modal deleteHandler={deleteHandler} />}
      {modalShown && <Backdrop deleteHandler={deleteHandler} />}
    </div>
  );
}

export default Todo;
