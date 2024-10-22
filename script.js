const inputBox = document.getElementById('inputBox');
const addBtn = document.getElementById('addBtn');
const todoList = document.getElementById('todoList');

const saveLocalTodos=(todo)=>{
  let todos ;
  if(localStorage.getItem("todos") === null){
    todos = [];
  }else{
    todos = JSON.parse(localStorage.getItem("todos"));
  }
    todos.push(todo);
    localStorage.setItem("todos",JSON.stringify(todos));
}

const deleteLocalTodos =(todo)=>{
  let todos ;
  if(localStorage.getItem("todos") === null){
    todos = [];
  }else{
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  let todoText = todo.children[0].innerHTML;
  let todoIndex = todos.indexOf(todoText);
  todos.splice(todoIndex,1);
  localStorage.setItem("todos",JSON.stringify(todos));

}

const getLocalTodos =()=>{
  let todos ;
  if(localStorage.getItem("todos") === null){
    todos = [];
  }
  else{
    todos = JSON.parse(localStorage.getItem("todos"));
    todos.forEach(todo => {
      const li = document.createElement("li");
      const p = document.createElement("p");
      p.innerHTML = todo ;
      li.appendChild(p);

      const done = document.createElement("button");
      done.innerHTML = `<i class="fa fa-check"></i>`;
      done.classList.add("btndone");
      li.appendChild(done);

      const deletebtn = document.createElement("button");
      deletebtn.innerHTML =`<i class="fa fa-trash"></i>`;
      deletebtn.classList.add("btndelete");
      li.appendChild(deletebtn);

      todoList.appendChild(li);
      const remove =(e)=>{
          
        li.remove();
        deleteLocalTodos(e.target.parentElement);
         
         
        }

     
        li.querySelector(".btndelete").addEventListener("click" ,remove);

        const check=()=>{
          li.querySelector("p").style.textDecoration="line-through";
          li.querySelector(".btndone").style.background="grey";
        }
        li.querySelector(".btndone").addEventListener("click" ,check);
  
    });
  }
}


const addTodo =()=>{ 
  const inputText = inputBox.value.trim();
    if(inputBox.value =="" ){
        alert("Enter Your Task");
    }else{
        const li = document.createElement("li");
        const p = document.createElement("p");
        p.innerHTML =`${inputBox.value}` ;
        li.appendChild(p);

        const done = document.createElement("button");
        done.innerHTML = `<i class="fa fa-check"></i>`;
        done.classList.add("btndone");
        li.appendChild(done);

        const deletebtn = document.createElement("button");
        deletebtn.innerHTML =`<i class="fa fa-trash"></i>`;
        deletebtn.classList.add("btndelete");
        li.appendChild(deletebtn);

        todoList.appendChild(li);
        inputBox.value=""
        saveLocalTodos(inputText);
        const remove =(e)=>{
          
          li.remove();
          deleteLocalTodos(e.target.parentElement);
           
           
          }

       
          li.querySelector(".btndelete").addEventListener("click" ,remove);

          const check=()=>{
            li.querySelector("p").style.textDecoration="line-through";
            li.querySelector(".btndone").style.background="grey";
          }
          li.querySelector(".btndone").addEventListener("click" ,check);
    }
   
    
   
}

document.addEventListener('DOMContentLoaded', getLocalTodos());





