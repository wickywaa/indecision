import React from 'react'
import AddOption from './AddOption'
import Header from './Header'
import Action from './Action'
import Options from './Options'
import OptionsModal from './OptionsModal'


export default class IndecisionApp extends React.Component{
    state = {
        options:[],
        selectedOption:undefined
    }  
    handleRemove=()=>{
        this.setState(()=>({options:[]}))     
    }
    handleRemoveOne=(optionToRemove)=>{ 
        this.setState((prevState)=>({
            options:prevState.options.filter((option)=>option !== optionToRemove)
        }))
    }
    handleDecision=()=>{
        const optionsLength =this.state.options.length
        const randomNum = Math.floor(Math.random()*optionsLength)
        const option = this.state.options[randomNum]
        this.setState(()=>({
            selectedOption:option
        }))
        
        // const randomNum = Math.floor(Math.random() *app.options.length)
    }
    handleAddOption=(option)=>{
        console.log('hi')
        if(!option){
            return 'please add a valid option'
        }else if(this.state.options.indexOf(option)>-1){
            return'you halready have this exact same option'
        }else{
            
        this.setState((prevState)=>({options: prevState.options.concat(option)}))

        }   
    }
    handleCloseModal=()=> this.setState(()=>({selectedOption:undefined}))

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
    render(){
        
        const subtitle = 'Put your life in the hands of a computer'
        return(
            <div>
            <Header subtitle = {subtitle}/>
            <div className='container'>
            <Action 
            hasOptions = {this.state.options.length>0}
            randomOption ={this.handleDecision}
            />
            <div className='widget'>
            <Options 
            options = {this.state.options}
            handleRemove={this.handleRemove}
            handleRemoveOne ={this.handleRemoveOne}
            />
            <AddOption
            handleAddOption={this.handleAddOption}
            />
            </div>
            
            
            </div>
            
            <OptionsModal
            selectedOption = {this.state.selectedOption}
            handleCloseModal ={this.handleCloseModal}
            />
            
            </div>
        );
    }
    
}