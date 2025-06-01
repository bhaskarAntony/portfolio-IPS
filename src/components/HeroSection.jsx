import React from 'react';
import { profileData } from '../data/profile';
import { Download } from 'lucide-react';
import profile from '../data/Profile.pdf'

const HeroSection = () => {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center pt-16"
    >
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-indigo-900 opacity-90"></div>
      
      {/* Pattern overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djZoNnYtNmgtNnptMCAtMzR2Nmg2di02aC02em0tMTIgMHY2aDZ2LTZoLTZ6bTAgMTJ2Nmg2di02aC02em0wIDEydjZoNnYtNmgtNnptMCAxMnY2aDZ2LTZoLTZ6bTEyIC0yNHY2aDZ2LTZoLTZ6bTEyIDB2Nmg2di02aC02em0wIDEydjZoNnYtNmgtNnptMCAxMnY2aDZ2LTZoLTZ6bS0xMiAtMTJ2Nmg2di02aC02em0tMTIgMHY2aDZ2LTZoLTZ6bS0xMiAwdjZoNnYtNmgtNnptMCAxMnY2aDZ2LTZoLTZ6bTAgMTJ2Nmg2di02aC02em0xMiAwdjZoNnYtNmgtNnptMCAtMTJ2Nmg2di02aC02em0wIC0xMnY2aDZ2LTZoLTZ6bTAgLTEydjZoNnYtNmgtNnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-20"></div>
      
      <div className="container mx-auto px-4 z-10 flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            {profileData.name}
            <span className="text-blue-300 ml-2">{profileData.title}</span>
          </h1>
          
          <h2 className="text-xl md:text-2xl text-blue-200 font-semibold mb-6">
            {profileData.designation}
          </h2>
          
          <p className="text-lg text-gray-200 mb-8 max-w-lg mx-auto md:mx-0">
            {profileData.tagline}
          </p>
          
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center md:justify-start">
            <a 
              href="#contact" 
              className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition-colors duration-300"
            >
              Get in Touch
            </a>
            
            <a 
              href={profile}
              download={profile}
              className="inline-flex items-center justify-center px-6 py-3 bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900 font-medium rounded-md transition-colors duration-300"
            >
              <Download size={18} className="mr-2" />
              Download Resume
            </a>
          </div>
        </div>
        
        <div className="md:w-2/5">
          <div className="relative">
            {/* Image with border */}
            <div className="relative h-72 w-72 md:h-96 md:w-96 mx-auto overflow-hidden rounded-lg border-4 border-white/20 shadow-2xl">
              <img 
                src={profileData.profileImage} 
                alt={profileData.name} 
                className="w-full h-full object-cover"
              />
              
              {/* Decorative elements */}
              <div className="absolute -bottom-2 -right-2 h-20 w-20 bg-blue-500 opacity-70 rounded-tr-2xl"></div>
              <div className="absolute -top-2 -left-2 h-20 w-20 bg-indigo-600 opacity-70 rounded-br-2xl"></div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-0 right-0 flex justify-center">
        <a 
          href="#about" 
          className="animate-bounce flex items-center justify-center w-10 h-10 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
          aria-label="Scroll to About section"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default HeroSection;