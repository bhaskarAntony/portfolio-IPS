import React, { useState } from 'react';
import { galleryData } from '../data/gallery';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

const GallerySection = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  const categories = ['All', ...new Set(galleryData.map(item => item.category))];

  const filteredImages = activeFilter === 'All' 
    ? galleryData 
    : galleryData.filter(item => item.category === activeFilter);

  const openLightbox = (index) => {
    setCurrentImage(index);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = 'auto';
  };

  const nextImage = () => {
    setCurrentImage((currentImage + 1) % filteredImages.length);
  };

  const prevImage = () => {
    setCurrentImage((currentImage - 1 + filteredImages.length) % filteredImages.length);
  };

  // Handle keyboard navigation for the lightbox
  React.useEffect(() => {
    const handleKeyDown = (e) => {
      if (!lightboxOpen) return;
      
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxOpen, currentImage]);

  return (
    <section id="gallery" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Gallery
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Visual highlights from field operations, training sessions, and public events.
          </p>
          <div className="w-24 h-1 bg-blue-600 mx-auto mt-4"></div>
        </div>

        {/* Category filters */}
        <div className="flex flex-wrap justify-center mb-12">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`mx-2 mb-2 px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeFilter === category
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600'
              }`}
              onClick={() => setActiveFilter(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredImages.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer transition-transform hover:scale-[1.02]"
              onClick={() => openLightbox(index)}
            >
              <div className="aspect-w-4 aspect-h-3">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 object-cover"
                />
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                <h3 className="text-white text-lg font-semibold mb-1">{item.title}</h3>
                <p className="text-gray-200 text-sm">{item.description}</p>
                <span className="absolute top-4 right-4 bg-blue-600/90 text-white text-xs px-2 py-1 rounded">
                  {item.category}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {lightboxOpen && (
          <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4">
            <button
              className="absolute top-6 right-6 text-white hover:text-gray-300 transition-colors"
              onClick={closeLightbox}
              aria-label="Close lightbox"
            >
              <X size={32} />
            </button>
            
            <button
              className="absolute left-6 top-1/2 -translate-y-1/2 bg-white/10 rounded-full p-2 text-white hover:bg-white/20 transition-colors"
              onClick={prevImage}
              aria-label="Previous image"
            >
              <ChevronLeft size={36} />
            </button>
            
            <button
              className="absolute right-6 top-1/2 -translate-y-1/2 bg-white/10 rounded-full p-2 text-white hover:bg-white/20 transition-colors"
              onClick={nextImage}
              aria-label="Next image"
            >
              <ChevronRight size={36} />
            </button>
            
            <div className="max-w-5xl  overflow-hidden">
              <img
                src={filteredImages[currentImage].image}
                alt={filteredImages[currentImage].title}
                className="max-w-full max-h-[70vh] object-contain mx-auto"
              />
              
              <div className="bg-black/70 p-4 mt-2">
                <h3 className="text-white text-lg font-semibold">
                  {filteredImages[currentImage].title}
                </h3>
                <p className="text-gray-300">
                  {filteredImages[currentImage].description}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default GallerySection;