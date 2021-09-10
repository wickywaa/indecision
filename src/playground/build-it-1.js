
class Visibility extends React.Component{
    constructor(props){
        super(props)
        this.toggle = this.toggle.bind(this)
        this.state={
            toggle:false
        };
    }
    toggle(){
        this.setState((prevState)=>{
            return{
                toggle:!prevState.toggle
        };
        });
    }
    render(){
        return(
            <div>
                <h1>Visibility toggle</h1>
                <button onClick={this.toggle}>{!this.state.toggle?'show details':'hide details'}</button>
                {this.state.toggle &&(
                    <div>
                    <p> here are the details you were looking for</p>
                    </div>
                )}
            </div>
        );
    }
}


ReactDOM.render(<Visibility/>,document.getElementById('app'))


