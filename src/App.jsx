import { Suspense } from 'react';
import Canvas from './canvas';
import Customizer from './pages/Customizer';
import Home from './pages/Home';
import { LoadingSpinner, ThreeErrorBoundary } from './components';

function App() {
  console.log('App rendering...');
  
  return (
    <main className="app transition-all ease-in">
      <Home />
      <ThreeErrorBoundary>
        <div className="w-full h-full">
          <Suspense fallback={<LoadingSpinner message="Loading 3D Experience..." />}>
            <Canvas />
          </Suspense>
        </div>
      </ThreeErrorBoundary>
      <Customizer />
    </main>
  )
}

export default App
