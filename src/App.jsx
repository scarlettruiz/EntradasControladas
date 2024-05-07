import React, { useState } from 'react'
import './App.css'



function App() {
      const [miTexto,setMiTexto] = useState('')
      const handleText = (event) => {
      setMiTexto(event.target.value)
    
        miTexto(result)
    
      }

    

   

    return (
        <div>
          <div>
            Capture su texto
          </div>
          <input type="text" onChange={handleText} onSubmit={miTexto}/ >
          <h3>Su Texto</h3>
          <p>
            {miTexto}
          </p>
        </div>
    );
}

export default App;