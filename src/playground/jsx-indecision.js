console.log(' app.js is running');

// JSX = javascript xml
const app = {
     title: 'Indecision App',
     subtitle: 'Outsource your decisions!',
     options: []
};

const onFormSubmit=(e)=>{
    e.preventDefault();
    
    const option = e.target.elements.option.value;
    if (option){
        app.options.push(option);
        e.target.elements.option.value = '';
       
        renderOptions()
    }
}

const clearAll=()=>{
    app.options = [];
    renderOptions()


}

const onMakeDecision =()=>{
    // const randomNum = Math.floor(Math.random() *app.options.length)
    const option = app.options[randomNum]
    alert(option)
    console.log(option)
    console.log(randomNum)
}



const renderOptions=()=>{
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            {app.options.length>0?<p>Here are your options</p>:<p>no options</p>}
            <button disabled ={app.options.length<2} onClick={onMakeDecision}>what should I do?</button>
            <button onClick={clearAll} name = "clear"> clear all</button>
            <ol>
            {
                app.options.map((option)=><li key={option}> {option}</li>)
            }

        
                
            </ol>
        
    
        <form onSubmit={onFormSubmit}>
        <input type = "text" name = "option"/>
        <button>add option</button>
        </form>
    
        </div>
    
    );
    
    
    const appRoot = document.getElementById('app');
    
    ReactDOM.render(template,appRoot)


    
}

renderOptions()

