
import {html, LitElement} from '@polymer/lit-element';


// import '../components/app-todo-top.js';
import './app-list.js';
import './app-todo-top';
/**
 * `<app-todo>` Custom component to add a todo
 *
 * <body>
 *  <app-todo></app-todo>
 *
 * @polymer
 * @litElement
 * @customElement
 */
class Todo extends LitElement{
    
    /**
     * Static getter properties
     * 
     * @returns Object
     */
    static get properties() {
        return {
            /**
             * holds all the todos
             */
            todos: { type: Array },

            /**
             * holds the new todo input value
             */
            inputvalue: { type: String}
        }
    }

    /**
     * constructor
     */
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
    }

   
    /**
     * render method
     * 
     * @returns {customElements}
     */
    render() {
        // console.log(this.todos);
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
        this.todos = this.todos.map((item)=> {
            if(item['id']==id){
                item.completed = !item.completed
            }
            return {...item};
        });
    }

    handleInput(e) {
        this.inputvalue = e.target.value;
    }

    handleAdd() {
        this.counter++;
        this.todos = [...this.todos, {id:this.counter, title:this.inputvalue, completed:false}];
        this.inputvalue = '';
    }



}

window.customElements.define('app-todo', Todo);