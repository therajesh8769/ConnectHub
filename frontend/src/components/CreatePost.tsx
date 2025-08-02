import React, { useState } from 'react';
import { Send } from 'lucide-react';

interface CreatePostProps {
  onCreatePost: (text: string) => void;
  isLoading: boolean;
}

const CreatePost: React.FC<CreatePostProps> = ({ onCreatePost, isLoading }) => {
  const [text, setText] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim()) {
      onCreatePost(text.trim());
      setText('');
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6 mb-6">
      <form onSubmit={handleSubmit}>
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="What's on your mind? Share your thoughts with the community..."
          className="w-full p-4 border border-gray-300 rounded-lg resize-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          rows={4}
          maxLength={1000}
          disabled={isLoading}
        />
        
        <div className="flex justify-between items-center mt-4">
          <span className="text-sm text-gray-500">
            {text.length}/1000 characters
          </span>
          
          <button
            type="submit"
            disabled={!text.trim() || isLoading}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center space-x-2 transition-colors"
          >
            <Send className="h-4 w-4" />
            <span>{isLoading ? 'Posting...' : 'Post'}</span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreatePost;