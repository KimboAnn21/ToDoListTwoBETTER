import React, { Component } from 'react';
import './ToDoList.css';

class ToDoItems extends Component {
    constructor(props) {
        super(props);

        this.createTasks = this.createTasks.bind(this);
    }
        delete(key) {
            this.props.delete(key);
        }
    
        createTasks(item) {
            return <li onClick={() => this.delete(item.key)}//delete by clicking item
            key={item.key}>{item.text}</li>//turning list into JSX/HTML-ish elemnts
        }
    
    render () {
        var todoEntries = this.props.entries;
        var listItems = todoEntries.map(this.createTasks);//array of list elements

        return (
            <ol className="theList">
                {listItems}
            </ol>
        );
    }
};

export default ToDoItems;