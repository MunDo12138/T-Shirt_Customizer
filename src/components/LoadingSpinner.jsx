import React from 'react';

const LoadingSpinner = ({ message = "Loading 3D Model..." }) => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center">
        <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-500 mx-auto mb-4"></div>
        <p className="text-gray-600 text-lg">{message}</p>
      </div>
    </div>
  );
};

export default LoadingSpinner;