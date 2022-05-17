import React, { memo } from 'react';

const habitAddForm = memo(props => {

    const inputRef = React.createRef();
    const formRef = React.createRef();
    const onSubmit = event =>{
        event.preventDefault();
        console.log(inputRef.current.value);
        const name = inputRef.current.value;
        name && props.onAdd(name);
        //this.inputRef.current.value = '';
        formRef.current.reset();
    }
    console.log('habitAddForm..');
    return (
        <form ref={formRef} className='add-form' onSubmit={onSubmit}>
            <input ref={inputRef} type="text" className='add-input' placeholder='Habit' />
            <button className="add-button">Add</button>
        </form>
    );
});
            
export default habitAddForm;