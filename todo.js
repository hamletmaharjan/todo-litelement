
import {html, LitElement} from '@polymer/lit-element';


import './app-todo-top.js';
import './app-list.js';

class Todo extends LitElement{
    constructor() {
        super();
        this.todos = [
            {id:1, title: "Do Some Work", completed: false},
            {id:2, title: "Make a cup of coffee", completed:false},
            {id:3, title: "Do the kick", completed: true}
        ];
        this.counter = this.todos.length;
        this.handleDelete = this.handleDelete.bind(this);
        this.handleToggle = this.handleToggle.bind(this);
        this.handleInput = this.handleInput.bind(this);
        this.handleAdd = this.handleAdd.bind(this);
        this.inputvalue = '';
        // this.input = this.shadowRoot.querySelector('input');
    }

    static get properties() {
        return {
            todos: { type: Object},
            inputvalue: { type: String}
        }
    }
   

    render() {
        console.log('render');
        console.log(this.todos);
        return html`
            <style>
            * {
                font-family: 'Arial', sans-serif;
                text-aligh:center;
            }
            
            #add-btn {
                margin-left:10px;
            }
        
            #delete-btn {
                background-color:red;
                color:white;
                border:none;
                margin-left:10px;
            }
            button:hover {
                cursor:pointer;
            }
            </style>
            <div>
                <h1>Todo app</h1>
                <app-todo-top .inputvalue="${this.inputvalue}" .onInput=${this.handleInput} .onClick=${this.handleAdd}></app-todo-top>
               
                <app-list .todos=${this.todos} .onToggle=${this.handleToggle} .onDelete=${this.handleDelete}></app-list>
               
            </div>
        `;
    }

    handleDelete(id) {
        this.todos = this.todos.filter(function(todo) {
            return todo.id != id;
        });
    }

    handleToggle(id) {
        // console.log(id);
        this.todos.forEach((item, i) => {
            if(item["id"] == id){
                item.completed = !item.completed;
            }
        });
        this.todos = [...this.todos];
    }

    handleInput(e) {
        // console.log(e);
        this.inputvalue = e.target.value;
    }

    handleAdd() {
        // console.log('add');
        this.counter++;
        this.todos = [...this.todos, {id:this.counter, title:this.inputvalue, completed:false}];
        this.inputvalue = '';
    }



}

window.customElements.define('app-todo', Todo);