import React from 'react';
import classes from './Modal.module.css'

const Modal = ({ children, visible, setVisible }) => {

    const rootClasses = [classes.Modal]

    if (visible) {
        rootClasses.push(classes.active)
    }

    return (
        <div onClick={() => setVisible(false)} className={rootClasses.join(' ')}>
            <div className={classes.Modal_content} onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
}; 

export default Modal;