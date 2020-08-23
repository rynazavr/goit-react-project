import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import animation from './animationExit.module.css';
import css from './EditTitle.module.css';
const EditTitle = ({ valueTitle, elementID, editOperation }) => {
  console.log('TYTY');

  const [title, setTitle] = useState(valueTitle);
  const [isUpdate, setUpdate] = useState(true);
  const [active, setActive] = useState(false);
  return (
    <>
      <CSSTransition
        classNames={animation}
        in={active}
        timeout={300}
        mountOnEnter
        unmountOnExit
      >
        <>
          <label className={css.wrapper}>
            <input
              type="text"
              className={css.input_change}
              value={title}
              onChange={e => setTitle(e.target.value)}
            />
            <button
              type="button"
              onClick={async () => {
                await editOperation(elementID, title);
                setUpdate(!isUpdate);
              }}
              className={css['sprint__change-name-btn--active']}
            ></button>
          </label>
        </>
      </CSSTransition>
      <CSSTransition
        classNames={animation}
        in={isUpdate}
        timeout={300}
        unmountOnExit
        mountOnEnter
        onExited={() => setActive(true)}
        onEnter={() => setActive(false)}
      >
        <>
          <h1 className={css['sprint__title']}> {title} </h1>
          <button
            onClick={() => setUpdate(!isUpdate)}
            className={css['sprint__change-name-btn']}
          ></button>
        </>
      </CSSTransition>
    </>
  );
};

export default EditTitle;
