import React, { Component } from 'react'
import Todoinput from './Todoinput.js'
import Todoing from './Todoing.js'
export default class Todolist extends Component {
    constructor(){
        super();
        if(localStorage.getItem('todo') == null){
            let list = [];
            var todoLen =0;
            localStorage.setItem('todo',JSON.stringify(list));
        }else{
            todoLen = localStorage.getItem('todo').length;
        }
        if(localStorage.getItem('finish') == null){
            let list = [];
            var finishLen =0;
            localStorage.setItem('finish',JSON.stringify(list));
        }else{
            finishLen = localStorage.getItem('finish').length;
        }
        this.state = {
            todo:JSON.parse(localStorage.getItem("todo")),
            finish:JSON.parse(localStorage.getItem("finish")),
            todoLen:todoLen,
            finishLen:finishLen
        }
    }
    componentDidMount(){
        let todo = JSON.parse(localStorage.getItem("todo"));
        // console.log([...this.state.todo]);
        let finish = JSON.parse(localStorage.getItem("finish"));
        // console.log(finish.length);
        this.setState({
            todoLen:todo.length,
            finishLen:finish.length
        })
    }
    // 获得localStorage中的数据（value）
    getList = (key)=>{
        return JSON.parse(localStorage.getItem(key))
    }
    // 向localStorage中添加数据（value）
    setList = (key,item)=>{
        return localStorage.setItem(key,JSON.stringify(item))
    }
    // 数据添加
    addItem = (data)=>{
        this.setState({
            todo:[...this.state.todo,data]
        },()=>{
            this.setList("todo",this.state.todo);
            this.componentDidMount();
        })
    }
    // 删除正在进行的数据
    delItem = (idx,e)=>{
        let todo = this.getList("todo");
        todo.splice(idx,1);
        this.setState({
            todo:todo
        })
        this.setList("todo",todo);
        this.componentDidMount();
    }
    // 删除已经完成的数据
    delItem1 = (idx,e)=>{
        let finish = this.getList("finish");
        finish.splice(idx,1);
        this.setState({
            finish:finish
        })
        this.setList("finish",finish);
        this.componentDidMount();
    }
    // 将false变为true
    changeTrue=(idx)=>{
        let list1 = this.getList("todo");
        console.log(list1);
        let list2 = this.getList("finish");
        var data = list1[idx];
        list2.push(data);
        list1.splice(idx,1);
        this.setState({
            todo:list1,
            finish:list2
        })
        this.setList("todo",list1);
        this.setList("finish",list2);
        this.componentDidMount();
    }
    // 将true变为false
    changeFalse=(idx)=>{;
        let list1 = this.getList("todo");
        let list2 = this.getList("finish");
        var data = list2[idx];
        list1.push(data);
        list2.splice(idx,1);
        this.setState({
            todo:list1,
            finish:list2
        })
        this.setList("todo",list1);
        this.setList("finish",list2);
        this.componentDidMount();
    }
    render() {
        return (
            <div>
                <Todoinput add={this.addItem}/>
                <Todoing del={this.delItem} del1={this.delItem1} todo={this.state.todo} finish={this.state.finish}
                    checkTrue={this.changeTrue} checkFalse={this.changeFalse} todoLen={this.state.todoLen}
                    finishLen={this.state.finishLen}/>
            </div>
        )
    }
}

