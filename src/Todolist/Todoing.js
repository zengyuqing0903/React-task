import React, { Component } from 'react'
import PropTypes from 'prop-types';
export default class Todoing extends Component {
    changeCheck=(e,idx)=>{
        this.props.checkTrue(idx);
    }
    changeCheck1=(e,idx)=>{
        this.props.checkFalse(idx);
    }
    render() {
        var {todo,finish,todoLen,finishLen} = this.props;
        return (
            <div>
                <h2>{"正在进行："}</h2>
                <p>{"代办："}{todoLen}</p>
                <ul>
                    {
                        todo.map((item,idx)=>
                            <li key={idx}>
                                <input type='checkbox' checked={false} onChange={(e)=>this.changeCheck(e,idx)}/>
                                {item}---<button onClick={(e)=>this.props.del(idx,e)}>删除</button>
                            </li>
                        )   
                    }
                </ul>
                <h2>{"已经完成："}</h2>
                <p>{"完成："}{finishLen}</p>
                <ul>
                    {
                        finish.map((item,idx)=>
                            <li key={idx}>
                                <input type='checkbox'checked={true} onChange={(e)=>this.changeCheck1(e,idx)}/>
                                {item}---<button onClick={(e)=>this.props.del1(idx,e)} >删除</button>
                            </li>
                        )   
                    }
                </ul>
            </div>
        )
    }
}
Todoing.prototypes = {
    todo: PropTypes.array,
    del : PropTypes.func
}