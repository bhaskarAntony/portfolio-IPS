import React from 'react';
import { Shield } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="flex items-center mb-4">
              <Shield className="text-blue-400 mr-2" size={28} />
              <h3 className="text-xl font-bold">Sri Deepan M.N., IPS</h3>
            </div>
            <p className="text-gray-400 mb-6">
              Commandant, 1st Battalion, Karnataka State Reserve Police, Bengaluru.
              Dedicated to serving the nation with integrity, courage, and commitment.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.linkedin.com/in/deepan-m-n-a3831315" 
                className="text-gray-400 hover:text-blue-400 transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a 
                href="https://x.com/deepanmn" 
                className="text-gray-400 hover:text-blue-400 transition-colors"
                aria-label="Twitter"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#about" className="text-gray-400 hover:text-blue-400 transition-colors">About</a>
              </li>
              <li>
                <a href="#timeline" className="text-gray-400 hover:text-blue-400 transition-colors">Career Timeline</a>
              </li>
              <li>
                <a href="#achievements" className="text-gray-400 hover:text-blue-400 transition-colors">Achievements</a>
              </li>
              <li>
                <a href="#leadership" className="text-gray-400 hover:text-blue-400 transition-colors">Leadership</a>
              </li>
              <li>
                <a href="#media" className="text-gray-400 hover:text-blue-400 transition-colors">Media</a>
              </li>
              <li>
                <a href="#gallery" className="text-gray-400 hover:text-blue-400 transition-colors">Gallery</a>
              </li>
              <li>
                <a href="#faq" className="text-gray-400 hover:text-blue-400 transition-colors">FAQ</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-blue-400 transition-colors">Contact</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Official Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="https://ksrp.karnataka.gov.in" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Karnataka State Reserve Police
                </a>
              </li>
              <li>
                <a href="https://ksp.gov.in" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Karnataka State Police
                </a>
              </li>
              {/* <li>
                <a href="https://mha.gov.in" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Ministry of Home Affairs
                </a>
              </li>
              <li>
                <a href="https://svpnpa.gov.in" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Sardar Vallabhbhai Patel National Police Academy
                </a>
              </li> */}
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-center items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              &copy; {currentYear} Sri Deepan M.N., IPS. All rights reserved.
            </p>
            {/* <div className="flex space-x-6">
              <a href="#" className="text-gray-500 hover:text-gray-300 text-sm">Privacy Policy</a>
              <a href="#" className="text-gray-500 hover:text-gray-300 text-sm">Terms of Use</a>
              <a href="#" className="text-gray-500 hover:text-gray-300 text-sm">Disclaimer</a>
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;