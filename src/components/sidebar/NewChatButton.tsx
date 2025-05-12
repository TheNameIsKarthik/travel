import React from "react";
import { Plus } from "lucide-react";

interface NewChatButtonProps {
  onClick: () => void;
}

export default function NewChatButton({ onClick }: NewChatButtonProps) {
  return (
    <button
      onClick={onClick}
      className='flex w-full items-center gap-3 rounded-md border border-white/20 px-3 py-2 text-sm 
        font-medium transition-colors hover:bg-gray-800'
    >
      <Plus className='h-4 w-4' />
      <span>New chat</span>
    </button>
  );
}
