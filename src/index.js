import React from 'react';
// import ReactDOM from 'react-dom'; ****DEPRECATED****
import { createRoot } from 'react-dom/client'; // Use instead of ReactDom (React 18)
import './index.css';
import App from './App';

const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App />);

//****DEPRECATED (React 17)****
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );
