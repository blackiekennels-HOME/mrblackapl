import { useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

interface Photo {
  id: string;
  src: string;
  alt: string;
  title?: string;
  category?: string;
}

interface PhotoGalleryProps {
  photos: Photo[];
  columns?: number;
  showCategories?: boolean;
}

export default function PhotoGallery({ photos, columns = 3, showCategories = false }: PhotoGalleryProps) {
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const categories = showCategories ? Array.from(new Set(photos.map(p => p.category).filter((c): c is string => Boolean(c)))) : [];
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const filteredPhotos = activeCategory && showCategories
    ? photos.filter(p => p.category === activeCategory)
    : photos;

  const handleNext = () => {
    const index = filteredPhotos.findIndex(p => p.id === selectedPhoto?.id);
    if (index < filteredPhotos.length - 1) {
      setSelectedPhoto(filteredPhotos[index + 1]);
    }
  };

  const handlePrev = () => {
    const index = filteredPhotos.findIndex(p => p.id === selectedPhoto?.id);
    if (index > 0) {
      setSelectedPhoto(filteredPhotos[index - 1]);
    }
  };

  return (
    <div>
      {/* Category Filter */}
      {showCategories && categories.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-8">
          <button
            onClick={() => setActiveCategory(null)}
            className={`px-4 py-2 rounded text-sm font-semibold transition-all ${
              activeCategory === null
                ? "bg-[oklch(0.72_0.18_75)] text-[oklch(0.08_0_0)]"
                : "bg-[oklch(0.14_0_0)] text-[oklch(0.72_0.18_75)] border border-[oklch(0.72_0.18_75)]"
            }`}
            style={{ fontFamily: "'Source Sans 3', sans-serif" }}
          >
            All Photos
          </button>
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded text-sm font-semibold transition-all ${
                activeCategory === cat
                  ? "bg-[oklch(0.72_0.18_75)] text-[oklch(0.08_0_0)]"
                  : "bg-[oklch(0.14_0_0)] text-[oklch(0.72_0.18_75)] border border-[oklch(0.72_0.18_75)]"
              }`}
              style={{ fontFamily: "'Source Sans 3', sans-serif" }}
            >
              {cat}
            </button>
          ))}
        </div>
      )}

      {/* Photo Grid */}
      <div className={`grid gap-4 mb-8`} style={{ gridTemplateColumns: `repeat(auto-fill, minmax(${300 / columns}px, 1fr))` }}>
        {filteredPhotos.map(photo => (
          <div
            key={photo.id}
            className="relative group cursor-pointer overflow-hidden rounded-sm"
            onClick={() => setSelectedPhoto(photo)}
          >
            <img
              src={photo.src}
              alt={photo.alt}
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-end p-4">
              {photo.title && (
                <h3 className="text-white font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ fontFamily: "'Playfair Display', serif" }}>
                  {photo.title}
                </h3>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4">
          <div className="relative max-w-4xl w-full">
            {/* Close Button */}
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute -top-12 right-0 text-white hover:text-[oklch(0.72_0.18_75)] transition-colors"
              aria-label="Close gallery"
            >
              <X size={32} />
            </button>

            {/* Image */}
            <img
              src={selectedPhoto.src}
              alt={selectedPhoto.alt}
              className="w-full h-auto rounded-sm"
            />

            {/* Navigation */}
            {filteredPhotos.length > 1 && (
              <>
                <button
                  onClick={handlePrev}
                  disabled={filteredPhotos.findIndex(p => p.id === selectedPhoto.id) === 0}
                  className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 text-white hover:text-[oklch(0.72_0.18_75)] disabled:opacity-30 transition-colors"
                  aria-label="Previous photo"
                >
                  <ChevronLeft size={40} />
                </button>
                <button
                  onClick={handleNext}
                  disabled={filteredPhotos.findIndex(p => p.id === selectedPhoto.id) === filteredPhotos.length - 1}
                  className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 text-white hover:text-[oklch(0.72_0.18_75)] disabled:opacity-30 transition-colors"
                  aria-label="Next photo"
                >
                  <ChevronRight size={40} />
                </button>
              </>
            )}

            {/* Info */}
            <div className="mt-4 text-center">
              {selectedPhoto.title && (
                <h3 className="text-white text-lg font-semibold mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                  {selectedPhoto.title}
                </h3>
              )}
              <p className="text-gray-300 text-sm">{selectedPhoto.alt}</p>
              {filteredPhotos.length > 1 && (
                <p className="text-gray-400 text-xs mt-2">
                  {filteredPhotos.findIndex(p => p.id === selectedPhoto.id) + 1} / {filteredPhotos.length}
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
