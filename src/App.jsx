import { Suspense } from 'react';
import Canvas from './canvas';
import Customizer from './pages/Customizer';
import Home from './pages/Home';
import { ErrorBoundary, LoadingSpinner } from './components';

function App() {
  return (
    <ErrorBoundary>
      <main className="app transition-all ease-in">
        <Home />
        <Suspense fallback={<LoadingSpinner message="Loading 3D Experience..." />}>
          <Canvas />
        </Suspense>
        <Customizer />
      </main>
    </ErrorBoundary>
  )
}

export default App
