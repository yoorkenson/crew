import { Field, useFormikContext } from 'formik';
import React, { FunctionComponent, ReactNode, useEffect, useRef, useState } from 'react';
import crossTag from '../assets/icons/cross_tag.svg'
import { useActions } from '../hooks/useActions';
import { IEdit } from '../models/IEdit';
import { ModalConfirmation } from './ModalConfirmation';

interface MeCheckState {
    items: Array<string>
    name: string
    add: boolean
}

const MeCheckboxes: FunctionComponent<MeCheckState> = (props: MeCheckState & { children?: ReactNode }) => {

    
    const {items, name, add} = props
    const {setFieldValue, values} = useFormikContext();

    const [adding, setAdding] = useState(false)
    const [addString, setAddString] = useState('')
    const [removeConfirmation, setRemoveConfirmation] = useState({opened: false, itemIndex: -1});

    const { addItem, removeItem } = useActions()

    const addRef = useRef<HTMLInputElement>(null);

    const startAdding = () => setAdding(true);
    const finishAdding = () => {
        if (addString) {
            addItem(addString)
            setFieldValue(name, [...(values as any)[name], addString])
        };
        setAddString('');
        setAdding(false);
    }

    const openConfirmationModal = (index: number) => setRemoveConfirmation({opened: true, itemIndex: index});
    const closeConfirmationModal = () => setRemoveConfirmation({opened: false, itemIndex: removeConfirmation.itemIndex});
    const confirmRemoval = () => {
        if (removeConfirmation.itemIndex !== -1) removeItem(removeConfirmation.itemIndex);
        closeConfirmationModal();
    }

    useEffect(() => {
        if (adding) addRef.current?.focus()
    }, [adding])
    
    return (
        <div className="me__wrapper">
            {items.map((item, i) => {
                if (i <= 12) {
                    return (
                        <label className="me__checkbox" key={item}>
                            <Field name={name} type="checkbox" value={item}/>
                            <span className="me__item">{item}</span>
                        </label>
                    )
                }
                else {
                    console.log('interest ', i)
                    return (
                        <label className="me__checkbox" key={item}>
                            <Field name={name} type="checkbox" value={item}/>
                            <div className="me__item">
                                <span>{item}</span>
                                <div onClick={ (e) => { e.preventDefault(); openConfirmationModal(i) } } className='me__checkbox__cross'>
                                    <img src={crossTag} alt="X"/>
                                </div>
                            </div>
                            
                        </label>
                    )
                }
            })}

            
            <label style={adding ? {display: 'block'} : {display: 'none'}} className='me__checkbox'>
                <Field name='interestsCheck' type="checkbox" value={addString} disabled checked/>
                <div className="me__item">
                    <input 
                        value={addString} 
                        className='item__input item__input_no me__item'
                        onChange={(e) => setAddString(e.target.value)} 
                        onBlur={finishAdding}
                        ref={addRef}
                        style={{color: '#fff'}}
                    />
                </div>
            </label>

            {add && <div onClick={adding ? finishAdding : startAdding} className="me__item_add">+Add</div>}

            {removeConfirmation.opened && 
                <ModalConfirmation 
                    onCancel={closeConfirmationModal}
                    onConfirm={confirmRemoval}
                    title='Delete Tag'
                    message='Are you sure you want to delete the tag?'
                    confirmLabel='Delete'
                />}
        </div>
    );
};

export default MeCheckboxes;