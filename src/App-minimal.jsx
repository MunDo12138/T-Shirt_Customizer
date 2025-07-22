import React from 'react';

function App() {
  console.log('Minimal App rendering...');
  
  return (
    <div className="w-full h-screen bg-gray-100 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">T-Shirt Customizer</h1>
        <p className="text-gray-600">Testing minimal setup...</p>
      </div>
    </div>
  );
}

export default App;