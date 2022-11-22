import React,{useState} from "react";



//create your first component
const TodoListv2 = () => {
	const [tareas, nueva] = useState(["Entrenar", "Comer sano", "Pasear al perro"]);
    const [input, setInput] = useState("");
	return (
		<div className="text-center">
			
			<h1> Todo List</h1>
			

            <input placeholder="Ingrese su tarea" value={input} onChange={(e)=>(setInput(e.target.value))}/>
            <button onClick={()=>{
                nueva([...tareas,input])
                setInput("")
            }}>agregar tarea</button>
            

			{tareas.map((value, index)=>{
              return <li key={index}>{value}</li>
                })}
		</div>
	);
};

export default TodoListv2;
