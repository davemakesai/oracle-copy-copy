import { useState } from 'react';
import { X } from 'lucide-react';
import Footer from '@/components/Footer';
import galleryHero from '@/assets/gallery-hero.jpg';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryImages = [
    // Facilities
    {
      src: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop',
      name: 'Modern Interior',
      category: 'Facilities',
    },
    {
      src: 'https://images.unsplash.com/photo-1631217872137-5853540035c2?w=600&h=400&fit=crop',
      name: 'Waiting Area',
      category: 'Facilities',
    },
    {
      src: 'https://images.unsplash.com/photo-1586773860414-72d26f7d11a7?w=600&h=400&fit=crop',
      name: 'Private Room',
      category: 'Facilities',
    },
    {
      src: 'https://images.unsplash.com/photo-1527984339349-a058b1140352?w=600&h=400&fit=crop',
      name: 'Bright Hallway',
      category: 'Facilities',
    },
    // Equipment
    {
      src: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600&h=400&fit=crop',
      name: 'Free Weights',
      category: 'Equipment',
    },
    {
      src: 'https://images.unsplash.com/photo-1599058917212-d750089bc07e?w=600&h=400&fit=crop',
      name: 'Exercise Balls',
      category: 'Equipment',
    },
    {
      src: 'https://images.unsplash.com/photo-1627993453786-a512714a4a35?w=600&h=400&fit=crop',
      name: 'Cardio Machine',
      category: 'Equipment',
    },
    {
      src: 'https://images.unsplash.com/photo-1549060279-7e168fcee0c2?w=600&h=400&fit=crop',
      name: 'Resistance Bands',
      category: 'Equipment',
    },
    // Clinic
    {
      src: 'https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?w=600&h=400&fit=crop',
      name: 'Reception Desk',
      category: 'Clinic',
    },
    {
      src: 'https://images.unsplash.com/photo-1618498082410-b4aa22193b38?w=600&h=400&fit=crop',
      name: 'Consultation Office',
      category: 'Clinic',
    },
    {
      src: 'https://images.unsplash.com/photo-1580281657527-47f249e8f5df?w=600&h=400&fit=crop',
      name: 'Welcoming Space',
      category: 'Clinic',
    },
    {
      src: 'https://images.unsplash.com/photo-1551884831-bbf3cdc6469e?w=600&h=400&fit=crop',
      name: 'Professional Environment',
      category: 'Clinic',
    },
    // Treatment
    {
      src: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=600&h=400&fit=crop',
      name: 'Guided Exercise',
      category: 'Treatment',
    },
    {
      src: 'https://images.unsplash.com/photo-1616803689944-768b8a7c7d8c?w=600&h=400&fit=crop',
      name: 'Shoulder Therapy',
      category: 'Treatment',
    },
    {
      src: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=600&h=400&fit=crop',
      name: 'Recovery Session',
      category: 'Treatment',
    },
    {
      src: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop',
      name: 'Patient Assessment',
      category: 'Treatment',
    },
  ];

  const categories = ['All', 'Facilities', 'Equipment', 'Clinic', 'Treatment'];
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredImages = activeCategory === 'All' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 pt-32" style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${galleryHero})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center" data-aos="fade-up">
            <h1 className="font-playfair text-4xl sm:text-5xl lg:text-6xl font-bold text-brand-white mb-6 tracking-tight">
              Gallery
            </h1>
            <p className="font-inter text-xl text-brand-white/90 max-w-3xl mx-auto leading-relaxed">
              Take a look inside our state-of-the-art facility and see our team in action, 
              providing exceptional physiotherapy care to our patients.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 bg-subtle-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4" data-aos="fade-up">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full font-inter font-medium transition-all duration-200 ${
                  activeCategory === category
                    ? 'bg-brand-primary text-brand-white'
                    : 'bg-secondary text-muted-foreground hover:bg-brand-primary/10 hover:text-brand-primary'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="pb-20 bg-subtle-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredImages.map((image, index) => (
              <div
                key={index}
                className="relative group cursor-pointer overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                data-aos="fade-up"
                data-aos-delay={index * 50}
                onClick={() => setSelectedImage(image.src)}
              >
                <img
                  src={image.src}
                  alt={image.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="font-inter text-white font-semibold text-lg truncate">
                    {image.name}
                  </h3>
                  <span className="bg-brand-primary/90 text-brand-white px-2 py-1 rounded-full text-xs font-inter font-medium">
                    {image.category}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-brand-dark/90 z-50 flex items-center justify-center p-4 animate-fade-in">
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-brand-white hover:text-brand-accent transition-colors"
            >
              <X size={32} />
            </button>
            <img
              src={selectedImage}
              alt="Enlarged gallery view"
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
            />
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Gallery;