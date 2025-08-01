import React from 'react';

const Spinner = () => {
  return (
    <div className="fixed inset-0 z-50 bg-white bg-opacity-0 flex justify-center items-center">
      <div className="w-10 h-10 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>
    </div>
  );
};


export default Spinner;
