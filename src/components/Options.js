import React from 'react'
import Option from './Option'






const Options = (props)=>
        (<div >
        <div className='widget-header'>
        <h3 className ='widget-header__title'>Your options</h3>
        <button 
        className = 'button button__link'
        onClick={props.handleRemove}
        >
        Remove All
        </button>
        
        </div>
            
        {props.options.length===0&&<p className='widget__message'>please add an option to get started</p>}
        {
            props.options.map((option,index)=>
            <Option 
            key = {option} 
            optionText={option}
            count = {index +1}
            handleRemoveOne = {props.handleRemoveOne}
            />)
        }
        
    
        </div>
        
    );




export default Options