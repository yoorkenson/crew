import React, { FunctionComponent, ReactNode } from 'react';
import { useHistory } from 'react-router-dom';
import { RouteNames } from '../routes';

interface ModalIncompleteProps {
    modalInc: boolean
    setModalInc: React.Dispatch<React.SetStateAction<boolean>>
}

const ModalIncomplete: FunctionComponent<ModalIncompleteProps> = (props: ModalIncompleteProps & { children?: ReactNode }) => {
    const {modalInc, setModalInc} = props
    const history = useHistory();
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
                        <button className="button button_white" onClick={() => history.push(RouteNames.PROFILE)}>Complete later</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ModalIncomplete;