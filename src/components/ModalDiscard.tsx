import React, { FunctionComponent, ReactNode } from 'react';
import { useHistory } from 'react-router-dom';
import { RouteNames } from '../routes';

interface ModalDiscardProps {
    modalDisc: boolean
    setModalDisc: React.Dispatch<React.SetStateAction<boolean>>
}

const ModalDiscard: FunctionComponent<ModalDiscardProps> = (props: ModalDiscardProps & { children?: ReactNode }) => {
    const {modalDisc, setModalDisc} = props
    const history = useHistory();
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
                        <button className="button" onClick={() => history.goBack()} >Discard</button>
                        <button className="button button_white" onClick={() => setModalDisc(!modalDisc)}>Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ModalDiscard;