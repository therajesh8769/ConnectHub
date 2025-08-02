import React from 'react';
import { Link } from 'react-router-dom';
import { User, Clock } from 'lucide-react';

interface Post {
  _id: string;
  text: string;
  author: {
    _id: string;
    name: string;
  };
  createdAt: string;
}

interface PostCardProps {
  post: Post;
}

const PostCard: React.FC<PostCardProps> = ({ post }) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
      const now = new Date();
  const diffInMs = now - date;
  const diffInMinutes = Math.floor(diffInMs / (1000 * 60));
  const diffInHours = Math.floor(diffInMinutes / 60);
  const diffInDays = Math.floor(diffInHours / 24);

  if (diffInMinutes < 1) {
    return 'just now';
  } else if (diffInMinutes < 60) {
    return `${diffInMinutes}m ago`;
  } else if (diffInHours < 24) {
    return `${diffInHours}h ago`;
  } else {
    return `${diffInDays}d ago`;
  }
  };

  return (
    <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6 mb-4 hover:shadow-lg transition-shadow">
      <div className="flex items-center mb-4">
        <div className="bg-blue-100 rounded-full p-2 mr-3">
          <User className="h-6 w-6 text-blue-600" />
        </div>
        <div className="flex-1">
          <Link
            to={`/user/${post.author._id}`}
            className="font-semibold text-gray-900 hover:text-blue-600 transition-colors"
          >
            {post.author.name}
          </Link>
          <div className="flex items-center text-gray-500 text-sm mt-1">
            <Clock className="h-4 w-4 mr-1" />
            {formatDate(post.createdAt)}
          </div>
        </div>
      </div>
      
      <div className="text-gray-800 leading-relaxed">
        {post.text.split('\n').map((line, index) => (
          <p key={index} className="mb-2 last:mb-0">
            {line}
          </p>
        ))}
      </div>
    </div>
  );
};

export default PostCard;