import React, { FunctionComponent, ReactNode } from 'react';

interface ModalTagProps {
    modalTag: boolean
    setModalTag: React.Dispatch<React.SetStateAction<boolean>>
}

const ModalTags: FunctionComponent<ModalTagProps> = (props: ModalTagProps & { children?: ReactNode }) => {
    const {modalTag, setModalTag} = props
    // const history = useHistory();
    const deleteTag = () => {
        console.log('deleted')
    }
    return (
        <div className={modalTag ? 'modal active' : 'modal'}>
            <div className="modal__wrapper">
                <div className="container">
                    <div className="modal__window">
                        <div className="modal__window__title">
                            Delete tag
                        </div>
                        <div className="modal__window__subtitle">
                            Are you sure you want to delete this tag?
                        </div>
                        {/* <button className="button" onClick={() => history.goBack()} >Delete</button> */}
                        <button className="button" onClick={deleteTag} >Delete</button>
                        <button className="button button_white" onClick={() => setModalTag(!modalTag)}>Keep</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ModalTags;