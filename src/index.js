import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css";
import ToDoListTwo from './ToDoListTwo';

var destination = document.querySelector("#container");

ReactDOM.render(
    <div>
        <ToDoListTwo/>
    </div>,
    destination
);