import bidoof from "./bidoof.png"
import React from "react"

class Button extends React.Component{
    constructor(){
        super()
        this.state = {
            count : 0
        }
    }

    addCount= () =>{
        this.setState(
            {
                count : this.state.count + 1
            }
        )
    }

    render(){
        return(
            <div>
                <button onClick={this.addCount}><img src={bidoof} alt="bidoof" /></button>
                <p>You touched the bidoof {this.state.count} times this session.    </p>
            </div>
        )
    }
}

export default Button