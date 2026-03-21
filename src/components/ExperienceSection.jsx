import OrbitImages from './OrbitImages';

const images = [
  "https://picsum.photos/300/300?grayscale&random=1",
  "https://picsum.photos/300/300?grayscale&random=2",
  "https://picsum.photos/300/300?grayscale&random=3",
  "https://picsum.photos/300/300?grayscale&random=4",
  "https://picsum.photos/300/300?grayscale&random=5",
  "https://picsum.photos/300/300?grayscale&random=6",
];

export const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          My <span className="text-primary">Experience</span>
        </h2>
        <p className="text-center text-muted-foreground mb-0 max-w-2xl mx-auto">
          A journey through the technologies and environments I've worked with.
        </p>

        <div style={{ marginTop: '-20%' }}>
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
        />
        </div>
      </div>
    </section>
  );
};
