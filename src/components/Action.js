import React from 'react'


const Action =(props)=>
    (
        <div>
        <button 
        className='big_button' 
        onClick={props.randomOption}
        disabled={!props.hasOptions}
        >What should I do?
        </button>
        </div>
    );
    
    



export default Action;