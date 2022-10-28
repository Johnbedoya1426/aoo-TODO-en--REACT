import React from "react";
import { TodoContext } from "../TodoContext";
import './TodoSearch.css';



function TodoSearch(){

        const {searchValue, setSearchValue} = React.useContext(TodoContext)

        const onSearchValueChange = (event) => {
            console.log(event.target.value);
            setSearchValue(event.target.value);
        };
        
        return(
            <input 
                className="TodoSearch" 
                placeholder="Crear TODO" 
                value={searchValue}
                onChange={onSearchValueChange}
                />
        );
    }
    export {TodoSearch};


// class Componente extends React.Component {
//     constructor() {
//         this.state = {
//             patito: 'John'
//         };
//     }

//     render(){
//         return(
//             <div onClick={() => this.setState('alexis')}>{this.state.patito}</div>
//         )
//     }
// }

