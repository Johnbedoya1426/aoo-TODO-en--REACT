import React from "react";
// import ReactDOM from 'react-dom/client';
import { createPortal } from 'react-dom';
import './Modal.css';

function Modal({children}) {
    return  createPortal(
      <div className="ModalBackground">  
        {children}
      </div>,
        document.getElementById('modal')
    );
}

export { Modal }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>

//     <App />
    
//   </React.StrictMode>
// );