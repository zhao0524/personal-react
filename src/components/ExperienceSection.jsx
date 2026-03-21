import { useState } from 'react';
import OrbitImages from './OrbitImages';
import BorderGlow from './BorderGlow';

const images = [
  `${import.meta.env.BASE_URL}wilfrid_laurier_university_logo.jpg`,
  `${import.meta.env.BASE_URL}wilfrid_laurier_university_students_union_logo.jpg`,
  `${import.meta.env.BASE_URL}emergconnect_logo.jpg`,
  `${import.meta.env.BASE_URL}lazaridissupplychainassociation_logo.jpg`,
  `${import.meta.env.BASE_URL}varsity_tutors_logo.jpg`,
];

export const ExperienceSection = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const handleImageClick = (index) => {
    setSelectedIndex(prev => prev === index ? null : index);
  };

  const isOpen = selectedIndex !== null;

  return (
    <section id="experience" className="py-24 px-4 relative bg-secondary/30 overflow-hidden">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          My <span className="text-primary">Experience</span>
        </h2>
        <p className="text-center text-muted-foreground mb-0 max-w-2xl mx-auto">
          A journey through the technologies and environments I've worked with.
        </p>

        <div className="relative" style={{ marginTop: '-10%' }}>
          {/* Orbit shifts left via translateX */}
          <div
            className="transition-all duration-1000 ease-in-out"
            style={{ transform: isOpen ? 'translateX(-35%)' : 'translateX(0)' }}
          >
            <OrbitImages
              images={images}
              shape="ellipse"
              radiusX={620}
              radiusY={160}
              rotation={-16}
              duration={35}
              itemSize={180}
              responsive={true}
              radius={210}
              direction="normal"
              fill
              showPath
              pathColor="rgba(230, 230, 235, 0.7)"
              pathWidth={2}
              paused={false}
              onImageClick={handleImageClick}
            />
          </div>

          {/* Text panel slides in from the right, vertically centered */}
          <div
            className="absolute top-1/2"
            style={{
              right: '-15%',
              width: '45%',
              transform: `translateY(-50%) scale(${isOpen ? 1 : 0.8})`,
              opacity: isOpen ? 1 : 0,
              transition: isOpen
                ? 'opacity 0.4s ease 0.5s, transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) 0.5s'
                : 'opacity 0.2s ease, transform 0.2s ease',
              pointerEvents: isOpen ? 'auto' : 'none',
            }}
          >
            <BorderGlow edgeSensitivity={30} glowColor="40 80 80" backgroundColor="rgba(255, 255, 255, 0.05)" borderRadius={28} glowRadius={40} glowIntensity={1} coneSpread={25} animated={false} fillOpacity={0} colors={['#c084fc', '#f472b6', '#38bdf8']}>
              <div className="p-8 min-h-80">
                {isOpen && (
                  <>
                    <img
                      src={images[selectedIndex]}
                      alt="company logo"
                      className="h-16 object-contain mb-4"
                    />
                    <p className="text-muted-foreground text-sm">
                      Details coming soon...
                    </p>
                  </>
                )}
              </div>
            </BorderGlow>
          </div>
        </div>
      </div>
    </section>
  );
};
