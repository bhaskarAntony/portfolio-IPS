import React from 'react';
import { achievementsData } from '../data/achievements';
import { Medal, Award, Globe, Shield, Users } from 'lucide-react';

const AchievementsSection = () => {
  // Function to get the appropriate icon component
  const getIconComponent = (iconName, size = 40) => {
    switch (iconName) {
      case 'Medal':
        return <Medal size={size} />;
      case 'Award':
        return <Award size={size} />;
      case 'Globe':
        return <Globe size={size} />;
      case 'Shield':
        return <Shield size={size} />;
      case 'Users':
        return <Users size={size} />;
      default:
        return <Award size={size} />;
    }
  };

  return (
    <section id="achievements" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Achievements & Awards
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Recognition for service excellence, bravery, and contributions to law enforcement.
          </p>
          <div className="w-24 h-1 bg-blue-600 mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievementsData.map((achievement, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-gray-700 rounded-lg shadow-lg overflow-hidden transition-transform hover:translate-y-[-5px]"
            >
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-6 flex justify-center">
                <div className="h-20 w-20 rounded-full bg-white/20 flex items-center justify-center text-white">
                  {getIconComponent(achievement.icon)}
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                    {achievement.title}
                  </h3>
                  <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs font-semibold px-3 py-1 rounded-full">
                    {achievement.year}
                  </span>
                </div>
                
                <p className="text-gray-600 dark:text-gray-300">
                  {achievement.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Decorative elements */}
        <div className="relative mt-20">
          <div className="flex justify-center">
            <div className="relative">
              <div className="bg-blue-50 dark:bg-blue-900/30 p-8 rounded-lg shadow-md max-w-3xl">
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4 text-center">
                  Service Recognition
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-center mb-6">
                  Beyond formal awards, Shri Deepan M.N. has been recognized for his commitment to professional excellence, integrity, and dedication to public service throughout his career.
                </p>
                
                <div className="flex flex-wrap justify-center gap-4">
                  <div className="flex items-center space-x-2 bg-white dark:bg-gray-800 px-4 py-2 rounded-full shadow-sm">
                    <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                    <span className="text-sm text-gray-700 dark:text-gray-300">Operational Excellence</span>
                  </div>
                  
                  <div className="flex items-center space-x-2 bg-white dark:bg-gray-800 px-4 py-2 rounded-full shadow-sm">
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    <span className="text-sm text-gray-700 dark:text-gray-300">Community Service</span>
                  </div>
                  
                  <div className="flex items-center space-x-2 bg-white dark:bg-gray-800 px-4 py-2 rounded-full shadow-sm">
                    <div className="w-3 h-3 rounded-full bg-purple-500"></div>
                    <span className="text-sm text-gray-700 dark:text-gray-300">Leadership</span>
                  </div>
                  
                  <div className="flex items-center space-x-2 bg-white dark:bg-gray-800 px-4 py-2 rounded-full shadow-sm">
                    <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                    <span className="text-sm text-gray-700 dark:text-gray-300">Innovation</span>
                  </div>
                </div>
              </div>
              
              {/* Decorative shapes */}
              <div className="absolute -top-5 -left-5 w-10 h-10 rounded-full bg-blue-500 opacity-20"></div>
              <div className="absolute -bottom-5 -right-5 w-10 h-10 rounded-full bg-indigo-500 opacity-20"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;