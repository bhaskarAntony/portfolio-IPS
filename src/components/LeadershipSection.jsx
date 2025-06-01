import React from 'react';
import { leadershipData } from '../data/leadership';
import { Lightbulb, Users, ShieldCheck, BookOpen } from 'lucide-react';

const LeadershipSection = () => {
  const icons = [
    <Lightbulb size={24} className="text-blue-600" />,
    <Users size={24} className="text-indigo-600" />,
    <ShieldCheck size={24} className="text-green-600" />,
    <BookOpen size={24} className="text-amber-600" />
  ];

  return (
    <section id="leadership" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Leadership & Initiatives
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Transformative programs and leadership initiatives that have made a difference.
          </p>
          <div className="w-24 h-1 bg-blue-600 mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {leadershipData.map((item, index) => (
            <div 
              key={index} 
              className="bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg flex flex-col md:flex-row transition-transform hover:translate-y-[-5px]"
            >
              <div className="md:w-2/5 h-60 md:h-auto">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="md:w-3/5 p-6 flex flex-col justify-between">
                <div>
                  <div className="flex items-center mb-3">
                    {/* <div className="mr-3 p-2 bg-blue-100 dark:bg-blue-900/40 rounded-full">
                      {icons[index]}
                    </div> */}
                    <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                      {item.title}
                    </h3>
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {item.description}
                  </p>
                </div>
                
               
              </div>
            </div>
          ))}
        </div>

        {/* Testimonial section */}
        {/* <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl shadow-xl p-8 md:p-12 relative overflow-hidden">
          Decorative patterns
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="smallGrid" width="20" height="20" patternUnits="userSpaceOnUse">
                  <path d="M 20 0 L 0 0 0 20" fill="none" stroke="white" strokeWidth="1"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#smallGrid)" />
            </svg>
          </div>

          <div className="relative z-10 text-center">
            <svg className="w-12 h-12 text-white opacity-30 mx-auto mb-6" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
              <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
            </svg>
            <p className="text-xl md:text-2xl text-white font-medium italic mb-8 max-w-4xl mx-auto">
              "Shri Deepan's leadership has been transformative for our battalion. His strategic vision combined with genuine care for personnel welfare has created a culture of excellence and commitment to public service."
            </p>
            <div className="font-semibold text-white">
              Deputy Commandant, 1st Battalion KSRP
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default LeadershipSection;