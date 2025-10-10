import React from 'react';

const Spinner = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-16 h-16 border-8 border-t-pink-300 border-r-blue-300 border-b-green-300 border-l-purple-300 rounded-full animate-spin"></div>
    </div>
  );
};

export default Spinner;
