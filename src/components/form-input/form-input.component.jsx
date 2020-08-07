import React from 'react';
import './form-input.styles.scss';

const FormInput = ({    handleChange, label, ...otherProps  })=>(
    <div className='group'>
        {
            label ?
            (<label className={`$props.value.length`  ? 'shrink' : ''}form-input-label>
                {label}
            </label>)
            : null
        }
        <input className='form-input' 
        onChange={handleChange} {...otherProps}/>
        
    </div>
)
export default FormInput;