import React,{useState} from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [tareas, nueva] = useState(["Entrenar", "Comer sano", "Pasear al perro"]);
	return (
		<div className="text-center">
			
			<h1> Todo List</h1>
			<form onSubmit={(e)=>{
				e.preventDefault();
				nueva([...tareas,e.target[0].value]);
				e.target[0].value="";
			}}>

            <input placeholder="Ingrese su tarea"/>
            </form>

			{tareas.map((value, index)=>{
              return <li key={index}>{value}</li>
                })}
		</div>
	);
};

export default Home;
