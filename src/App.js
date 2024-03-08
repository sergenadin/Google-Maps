import React from 'react';
import './App.css';
import './index.css'; // Importez le fichier index.css
import MapComponent from './MapComponent';

function App() {
  return (
    <div className="App">
      <main>
        <MapComponent /> {/* Utilisez MapComponent au lieu de Map */}
      </main>
    </div>
  );
}

export default App;
