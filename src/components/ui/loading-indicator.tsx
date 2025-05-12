import React from "react";

export default function LoadingIndicator() {
  return (
    <div className='flex flex-col items-center justify-center gap-2'>
      <div className='h-6 w-6 animate-spin rounded-full border-2 border-gray-300 border-t-black' />
      <p className='text-sm text-gray-500'>Loading...</p>
    </div>
  );
}
