class Counter extends React.Component{
    constructor(props){
        super(props)
        this.handleAdd = this.handleAdd.bind(this);
        this.handleMinus=this.handleMinus.bind(this);
        this.handleReset =this.handleReset.bind(this);
        this.state={
            count:0
        };
    }

    componentDidMount(){
        try{

        const count = parseInt( localStorage.getItem('count'),10)
        if(count && !isNaN(count)){
            this.setState(()=>({count}))
       
        }
        

        }catch(e){
            return console.log('error:',e)
        }
        
    
    }
    
    componentDidUpdate(prevProps,prevState){
        if(prevState.count!==this.state.count){
            localStorage.setItem('count',this.state.count);
            
        }
        console.log('update')
    }
    
    handleAdd(){
        this.setState((prevState)=>{
            return{
                count: prevState.count +1
            };
        });
    }
    handleMinus(){
        this.setState((prevState)=>{
            return{
                count: prevState.count-1
            };
        });
    }
    handleReset(){
        this.setState(()=>{
            return{
                count:0
            };
        });
    }
    render(){
        return(
            <div>
            <h1>count:{this.state.count} </h1>
            <button onClick={this.handleAdd}>+1</button>
            <button onClick = {this.handleMinus}>-1</button>
            <button onClick = {this.handleReset}>reset</button>
            

            </div>
        );
    }
}



ReactDOM.render(<Counter/>,document.getElementById('app'))




// let count = 0;
// const addOne = ()=>{
//     count++;
//     renderCounterApp();
// };

// const minusOne = ()=>{
    
//     count --;
//     renderCounterApp();
// }

// const resetButton =()=>{
//     count = 0;
//     renderCounterApp();
// }

// const appRoot = document.getElementById('app');

// const renderCounterApp =()=>{

//     const templatetwo = (
//         <div>
//         <h1>Count: {count} </h1>
//         <button onClick={addOne}>+1</button>
//         <button onClick={minusOne}>-1</button>
//         <button onClick = {resetButton}>Reset</button>
//         </div>
//     );
//     ReactDOM.render(templatetwo, appRoot);

// }



//renderCounterApp()
