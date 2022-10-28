import React from "react";
import { TodoProvider } from "../TodoContext";
import { AppUI } from "./AppUI";



function App(props) {
  
  // console.log('Render antes del useeffect')

  // React.useEffect(() => {
  //   console.log('Use effect');
  // }, [totalTodos]);

  // console.log('Render despues del useeffect')
  return (
    <TodoProvider>
        <AppUI />
    </TodoProvider>
  );


}

export default App;
