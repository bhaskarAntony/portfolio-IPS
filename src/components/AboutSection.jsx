import React from 'react';
import { profileData } from '../data/profile';
import { BookOpen, Award, Briefcase, GraduationCap } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">About</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-6">
              Professional Background
            </h3>
            
            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              {profileData.about.earlyCareer}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-1 gap-6 mb-8">
              {/* Education */}
              <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md transition-transform hover:translate-y-[-5px]">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full mr-4">
                    <GraduationCap className="text-blue-600 dark:text-blue-300" size={24} />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-800 dark:text-white">Education</h4>
                </div>
                <ul className="space-y-2">
                  {profileData.about.education.map((edu, index) => (
                    <li key={index} className="text-gray-700 dark:text-gray-300">
                      <span className="font-medium">{edu.degree}</span> - {edu.institution}, {edu.year}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Specialization */}
              {/* <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md transition-transform hover:translate-y-[-5px]">
                <div className="flex items-center mb-4">
                  <div className="bg-indigo-100 dark:bg-indigo-900 p-3 rounded-full mr-4">
                    <Briefcase className="text-indigo-600 dark:text-indigo-300" size={24} />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-800 dark:text-white">Specialization</h4>
                </div>
                <p className="text-gray-700 dark:text-gray-300">
                  {profileData.about.specialization}
                </p>
              </div> */}
            </div>

            {/* Training */}
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md transition-transform hover:translate-y-[-5px]">
              <div className="flex items-center mb-4">
                <div className="bg-green-100 dark:bg-green-900 p-3 rounded-full mr-4">
                  <Award className="text-green-600 dark:text-green-300" size={24} />
                </div>
                <h4 className="text-lg font-semibold text-gray-800 dark:text-white">Training & Expertise</h4>
              </div>
              <p className="text-gray-700 dark:text-gray-300">
                {profileData.about.training}
              </p>
            </div>
          </div>

          {/* Right side with decorative elements */}
          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 bg-blue-600 rounded-tl-[80px] rounded-br-[80px] opacity-10 absolute -top-6 -left-6"></div>
              <div className="w-64 h-64 md:w-80 md:h-80 bg-indigo-600 rounded-tr-[80px] rounded-bl-[80px] opacity-10 absolute -bottom-6 -right-6"></div>
              
              <div className="relative z-10 bg-white dark:bg-gray-700 p-8 rounded-lg shadow-xl">
                <div className="mb-6 flex justify-center">
                  <div className="p-4 bg-blue-50 dark:bg-blue-900/30 rounded-full">
                    <BookOpen className="text-blue-600 dark:text-blue-400" size={40} />
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-center text-gray-800 dark:text-white mb-4">
                  Service Highlights
                </h3>
                
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center mr-3 mt-1">
                      <span className="text-blue-600 dark:text-blue-400 text-xs font-bold">✓</span>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300">Over 5 years of distinguished service in the Indian Police Service</p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center mr-3 mt-1">
                      <span className="text-blue-600 dark:text-blue-400 text-xs font-bold">✓</span>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300">Leadership experience across multiple districts and specialized units</p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center mr-3 mt-1">
                      <span className="text-blue-600 dark:text-blue-400 text-xs font-bold">✓</span>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300">Received letter of appreciation from Deputy Commissioner of Police, Kalaburagi for supervision in detection of criminals in a challenging murder case with hardly any clue !</p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center mr-3 mt-1">
                      <span className="text-blue-600 dark:text-blue-400 text-xs font-bold">✓</span>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300">Honored with the DG & IGP Commendation Disc, marking the first time this prestigious award has been presented in Karnataka, recognizing distinguished service in the police fraternity.</p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center mr-3 mt-1">
                      <span className="text-blue-600 dark:text-blue-400 text-xs font-bold">✓</span>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300">"Pioneered the development of the Senior Police Officers Research and Training Institute (SPORTI) platform, enhancing training and research capabilities within the Karnataka State Police.</p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center mr-3 mt-1">
                      <span className="text-blue-600 dark:text-blue-400 text-xs font-bold">✓</span>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300">Introduced a digital armoury management system incorporating fingerprint authentication, streamlining the issuance and return of weapons and ensuring accountability.</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;