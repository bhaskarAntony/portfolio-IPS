import React, { useState } from 'react';
import { mediaData } from '../data/media';
import { FileText, Video, Mic, Newspaper, Link } from 'lucide-react';

const MediaSection = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filterOptions = [
    { label: 'All', value: 'all' },
    { label: 'Articles', value: 'article' },
    { label: 'Publications', value: 'publication' },
    { label: 'News', value: 'news' },
    { label: 'Podcasts', value: 'podcast' },
    { label: 'Videos', value: 'video' }
  ];

  const filteredMedia = activeFilter === 'all' 
    ? mediaData 
    : mediaData.filter(item => item.type === activeFilter);

  const getIcon = (type) => {
    switch (type) {
      case 'article':
        return <FileText size={24} />;
      case 'publication':
        return <FileText size={24} />;
      case 'news':
        return <Newspaper size={24} />;
      case 'podcast':
        return <Mic size={24} />;
      case 'video':
        return <Video size={24} />;
      default:
        return <Link size={24} />;
    }
  };

  return (
    <section id="media" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Media & Publications
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Featured interviews, articles, and media coverage of initiatives and operations.
          </p>
          <div className="w-24 h-1 bg-blue-600 mx-auto mt-4"></div>
        </div>

        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {filterOptions.map((option) => (
            <button
              key={option.value}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeFilter === option.value
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600'
              }`}
              onClick={() => setActiveFilter(option.value)}
            >
              {option.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredMedia.map((item, index) => (
            <div 
              key={index} 
              className="bg-white dark:bg-gray-700 rounded-lg shadow-md overflow-hidden transition-transform hover:translate-y-[-5px]"
            >
              <div className={`p-4 ${
                item.type === 'article' ? 'bg-blue-500' :
                item.type === 'publication' ? 'bg-purple-500' :
                item.type === 'news' ? 'bg-amber-500' :
                item.type === 'podcast' ? 'bg-green-500' :
                'bg-red-500'
              }`}>
                <div className="flex justify-between items-center">
                  <span className="text-white font-medium">{item.source}</span>
                  <div className="bg-white/20 p-2 rounded-full text-white">
                    {getIcon(item.type)}
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-white flex-grow">
                    {item.title}
                  </h3>
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {item.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {item.date}
                  </span>
                  
                  <a 
                    href={item.link} 
                    className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium"
                  >
                    View
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Featured coverage */}
        <div className="mt-16 bg-white dark:bg-gray-700 rounded-xl shadow-lg overflow-hidden">
          <div className="p-8 md:p-10">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
              Featured Media Coverage
            </h3>
            
            <div className="border-l-4 border-blue-500 pl-6 py-2 mb-8">
              <p className="text-gray-600 dark:text-gray-300 italic mb-4">
                "Commandant Deepan's innovative approach to community policing has created a model that other units across the country are now adopting. His emphasis on building trust between police forces and local communities has led to measurable improvements in both crime prevention and resolution rates."
              </p>
              <p className="text-gray-700 dark:text-gray-400 font-medium">
                — National Security Review, December 2022
              </p>
            </div>
            
            <a 
              href="#" 
              className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition-colors duration-300"
            >
              View Press Kit
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MediaSection;