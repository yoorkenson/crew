import React, { FC, useState } from 'react';

const ModalIncomplete: FC = () => {
    const [modalInc, setModalInc] = useState(false)
    return (
        <div className={modalInc ? 'modal active' : 'modal'}>
            <div className="modal__wrapper">
                <div className="container">
                    <div className="modal__window">
                        <div className="modal__window__title">
                            Proceed with incomplete profile?
                        </div>
                        <div className="modal__window__subtitle">
                            You will have a higher chance of matching with a more complete profile.
                        </div>
                        <button className="button" onClick={() => setModalInc(!modalInc)}>Back to edit</button>
                        <button className="button button_white">Skip for now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ModalIncomplete;