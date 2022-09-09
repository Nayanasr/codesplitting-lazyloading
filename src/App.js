import logo from './logo.svg';
import './App.css';
import { Suspense, useState } from 'react';
import React from 'react';
import ComponentOne from './components/ComponentOne';
const  ComponentTwo = React.lazy(() => import("./components/ComponentTwo"));

function App() {
  const [isShow, setIsShow] = useState(false);

  return (
    <div className="App">
      <ComponentOne />
      {isShow && (
        <Suspense fallback = {<h>Loading......</h>}>
         <ComponentTwo />
        </Suspense>
      )}

      <button onClick={() => {
        setIsShow(true);
       }}>
        UPDATE
      </button>
      
    </div>
  );
}

export default App;
