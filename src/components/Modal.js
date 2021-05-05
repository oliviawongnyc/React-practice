function Modal({ deleteHandler }) {
  return (
    <div className='modal'>
      <p>Are you sure?</p>
      <button className='btn btn--alt' onClick={deleteHandler}>
        Cancel
      </button>
      <button className='btn' onClick={deleteHandler}>
        Confirm
      </button>
    </div>
  );
}

export default Modal;
