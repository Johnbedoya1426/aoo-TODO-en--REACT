import React from "react";
import ReactDOM from 'react-dom/client';
import './Modal.css';

function Modal({children}) {
    return  ReactDOM.createPortal(
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