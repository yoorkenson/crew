import React, { FC, useState } from 'react';

const ModalDiscard: FC = () => {
    const [modalDisc, setModalDisc] = useState(false)
    return (
        <div className={modalDisc ? 'modal active' : 'modal'}>
            <div className="modal__wrapper">
                <div className="container">
                    <div className="modal__window">
                        <div className="modal__window__title">
                            Discard Changes
                        </div>
                        <div className="modal__window__subtitle">
                            Are you sure you want to discard your changes?
                        </div>
                        <button className="button" >Discard</button>
                        <button className="button button_white" onClick={() => setModalDisc(!modalDisc)}>Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ModalDiscard;