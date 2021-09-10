
class IndecisionApp extends React.Component{
    constructor(props){
        super(props);
        this.state={
            options:[]
        };
        this.handleRemove = this.handleRemove.bind(this);
        this.handleDecision =this.handleDecision.bind(this);
        this.handleAddOption =this.handleAddOption.bind(this);
        this.handleRemoveOne = this.handleRemoveOne.bind(this);
    }

    componentDidMount(){

        try{
            const json = localStorage.getItem('options')
            const options = JSON.parse(json)
            if(options){
            this.setState(()=>({options}))
            }


        }catch(e){
            // Do nothing at all
        }

       
    }
    
    componentDidUpdate(prevProps,prevState){
        if (prevState.options.length !== this.state.options.length){

        const json = JSON.stringify(this.state.options)
        localStorage.setItem('options',json)
        console.log('saving data')
        }
    }
   
    componentWillUnmount(){
        console.log('componenet will unmount')
    }
    handleRemove(){
        this.setState(()=>({options:[]}))
            
        
    }
    handleRemoveOne(optionToRemove){
        
        this.setState((prevState)=>({
            options:prevState.options.filter((option)=>option !== optionToRemove)
        }))
    }
    handleDecision(){
        const optionsLength =this.state.options.length
        const randomNum = Math.floor(Math.random()*optionsLength)
        const option = this.state.options[randomNum]
        return(
             alert(option)
            
        )
        // const randomNum = Math.floor(Math.random() *app.options.length)
    }
    handleAddOption(option){
        if(!option){
            return 'please add an option'
        }else if(this.state.options.indexOf(option)>-1){
            return'you halready have this exact same option'
        }else{
            
        this.setState((prevState)=>({options: prevState.options.concat(option)}))

        }

    
    }
    render(){
        
        const subtitle = 'Put your life in the hands of a computer'
        return(
            <div>
            <Header subtitle = {subtitle}/>
            <Action 
            hasOptions = {this.state.options.length>0}
            randomOption ={this.handleDecision}
            />
            <Options 
            options = {this.state.options}
            handleRemove={this.handleRemove}
            handleRemoveOne ={this.handleRemoveOne}
            />
            <AddOption
            handleAddOption={this.handleAddOption}
            />
            <User
            name = "Gav"
            age = {33}
            />
            </div>
        );
    }
    
}



const Header =(props) =>{
    return(
        <div>
            <h1>{props.title}</h1>
            {props.subtitle&&<h2>{props.subtitle}</h2>}
        </div>
    );
}

Header.defaultProps={
    title:'Indecision'
}




const Action =(props)=>{
    return(
        <div>
        <button onClick={props.randomOption}
        disabled={!props.hasOptions}
        >what should I do
        </button>
        </div>
    );
    
    
}



const Options = (props)=>{
    return(<div>
        <button onClick={props.handleRemove}>Remove All</button>
        {props.options.length===0&&<p>please add an option</p>}
        {
            props.options.map((option)=>
            <Option 
            key = {option} 
            optionText={option}
            handleRemoveOne = {props.handleRemoveOne}
            />)
        }
        
    
        </div>
        
    );

}

const Option = (props)=>{
    return(
        <div>
            {props.optionText}
            <button onClick={(e)=>{
                props.handleRemoveOne(props.optionText);

            }}
            >
            remove</button>
        </div>
    );
};




class AddOption extends React.Component{
    constructor(props){
        super(props);
        this.handleAddOption =this.handleAddOption.bind(this)
        this.state = {
            error: undefined
        }
        
    }
    handleAddOption(e){

        e.preventDefault();
        const option = e.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option)
        
        
        this.setState(()=>({error}));
       if(!error){
        e.target.elements.option.value = ''
       }
        
    }

  
    render(){
        return(
            <div>
            {this.state.error && <p>{this.state.error}</p>}
            <form onSubmit= {this.handleAddOption}>
            <input type = "text" name ="option"></input>
            <button>add option</button>
            </form>
            </div>

        );
    }
}

const User = (props)=>{
    return (
        <div>
        <p>Name: {props.name}</p>
        <p>Age: {props.age}</p>
        </div>
    )
}



ReactDOM.render(<IndecisionApp/>,document.getElementById('app'));
//babel src/app.js --out-file=public/scripts/app.js --presets="env,react" --watch
//babel src/playground/es6-let-const.js --out-file=public/scripts/app.js --presets="env,react" --watch