import React from "react";
import { MessageSquare } from "lucide-react";

export default function EmptyState() {
  return (
    <div className='flex h-full flex-col items-center justify-center p-4 text-center'>
      <div className='mb-4 rounded-full bg-gray-100 p-3'>
        <MessageSquare className='h-6 w-6 text-gray-500' />
      </div>
      <h2 className='mb-2 text-lg font-medium'>Start a new conversation</h2>
      <p className='max-w-md text-sm text-gray-500'>Select a chat from the sidebar or create a new one to begin.</p>
    </div>
  );
}
