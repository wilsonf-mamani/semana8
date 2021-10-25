let todolist = document.getElementById("ToDo_list");
let ultareas = document.getElementById("ul_tareas");
let mistareas = [];

class list_todo{
    constructor(todolist, ultareas, mistareas){
        this.todolist = todolist;
        this.ultareas = ultareas;
        this.mistareas = mistareas;
    }

    nueva_tarea(){        
        let that = this;
        todolist.addEventListener("submit", function(evento){
            evento.preventDefault();
            let Tarea = todolist.tarea.value;
            mistareas.push(Tarea);
            todolist.reset();

            that.dibujar_Tareas();
        });
    }

    dibujar_Tareas(){
        ultareas.innerHTML = "";
    
        mistareas.forEach(function(mytarea){
            let li = document.createElement("li");
            li.innerHTML = mytarea;
            ultareas.appendChild(li);
        });
    }
}

let crea_item = new list_todo(todolist, ultareas, mistareas);
crea_item.nueva_tarea();
crea_item.dibujar_Tareas();