import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import PostCard from '../components/PostCard';
import { User } from 'lucide-react';
import { userAPI } from '../api';

interface UserProfileProps {
  user: any;
  onLogout: () => void;
}

const UserProfile: React.FC<UserProfileProps> = ({ user, onLogout }) => {
  const { userId } = useParams<{ userId: string }>();
  const [profileData, setProfileData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    if (userId) {
      fetchUserProfile();
    }
  }, [userId]);

  const fetchUserProfile = async () => {
    try {
      setIsLoading(true);
      setError('');
      const response = await userAPI.getUserProfile(userId!);
      setProfileData(response.data);
    } catch (error: any) {
      setError(error.response?.data?.message || 'Failed to load user profile.');
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar user={user} onLogout={onLogout} />
        <div className="max-w-2xl mx-auto px-4 py-8">
          <div className="text-center py-8">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
            <p className="text-gray-600 mt-4">Loading profile...</p>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar user={user} onLogout={onLogout} />
        <div className="max-w-2xl mx-auto px-4 py-8">
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
            {error}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar user={user} onLogout={onLogout} />
      
      <div className="max-w-2xl mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-md border border-gray-200 p-8 mb-6">
          <div className="flex items-start space-x-6">
            <div className="bg-blue-100 rounded-full p-4">
              <User className="h-16 w-16 text-blue-600" />
            </div>

            <div className="flex-1">
              <h1 className="text-2xl font-bold text-gray-900 mb-2">
                {profileData?.user?.name}
              </h1>
              {profileData?.user?.bio ? (
                <div>
                  <h3 className="text-sm font-medium text-gray-700 mb-2">About</h3>
                  <p className="text-gray-800 leading-relaxed">
                    {profileData.user.bio.split('\n').map((line: string, index: number) => (
                      <span key={index}>
                        {line}
                        {index < profileData.user.bio.split('\n').length - 1 && <br />}
                      </span>
                    ))}
                  </p>
                </div>
              ) : (
                <p className="text-gray-500 italic">No bio available</p>
              )}
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            Posts by {profileData?.user?.name}
          </h2>
          
          {profileData?.posts?.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">No posts yet</p>
            </div>
          ) : (
            <div>
              {profileData?.posts?.map((post: any) => (
                <PostCard key={post._id} post={post} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserProfile;