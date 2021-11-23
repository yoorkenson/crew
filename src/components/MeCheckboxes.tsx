import { Field } from 'formik';
import React, { FunctionComponent, ReactNode, useState } from 'react';

interface MeCheckState {
    items: Array<string>
    name: string
    add: boolean
}

const MeCheckboxes: FunctionComponent<MeCheckState> = (props: MeCheckState & { children?: ReactNode }) => {
    const {items, name, add} = props
    const newItems = items

    const [adding, setAdding] = useState(false)
    const [addString, setAddString] = useState('')

    const addItem = (value: string) => {
        newItems.push(value)
        setAdding(!adding)
    }



    return (
        <div className="me__wrapper">
            {newItems.map((item) => {
                return (
                    <label className="me__checkbox" key={item}>
                        <Field name={name} type="checkbox" value={item}/>
                        <span className="me__item">{item}</span>
                    </label>
                )
            })}
            <div style={adding ? {display: 'block'} : {display: 'none'}}>
                <input value={addString} onChange={(e) => setAddString(e.target.value)} className='item__input' type='text'/>
                <div onClick={() => addItem(addString)} className="me__item_add">Add</div>
            </div>
            {add && <div onClick={() => setAdding(!adding)} className="me__item_add">{adding ? 'Cancel Add' : '+Add'}</div>}
        </div>
    );
};

export default MeCheckboxes;