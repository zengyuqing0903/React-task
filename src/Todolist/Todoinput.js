import React, { Component } from 'react'
export default class Todoinput extends Component {
    constructor(){
        super();
        this.handleInput = this.handleInput.bind(this);
        this.state = {
            inputValue:''
        } 
    }
    handleInput = (e)=>{
        if(e.keyCode === 13){
            this.props.add(e.target.value);
        }
    }
    handleChange = (e) => {
        this.setState({
            inputValue: e.target.value
        })
    }
    render() {
        return (
            <div>
                <label>ToDoList：</label>
                <input id="inp" onChange={this.handleChange} value={this.state.inputValue} onKeyDown={this.handleInput} type="text"/>
            </div>
        )
    }
}