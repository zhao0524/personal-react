import { useState } from 'react';
import OrbitImages from './OrbitImages';
import BorderGlow from './BorderGlow';

const companies = [
  { image: `${import.meta.env.BASE_URL}wilfrid_laurier_university_logo.jpg`, name: "Wilfrid Laurier University", position: "Research Assistant", bullets: [
    "Designed and developed machine learning models to analyze financial data, identifying patterns for prediction and decision-making.",
    "Conducted exploratory data analysis on market datasets to uncover trends, anomalies, and potential trading signals.",
    "Engineered features from time-series financial data to improve model performance in forecasting tasks.",
    "Evaluated model effectiveness using statistical metrics and backtesting techniques to simulate real-world performance.",
    "Implemented and compared multiple ML algorithms (e.g., regression, classification, time-series models) to optimize predictive accuracy.",
    "Built data pipelines to clean, preprocess, and structure large-scale financial datasets for efficient model training.",
    "Collaborated on research experiments, iterating on model design based on empirical results and domain-specific insights.",
  ] },
  { image: `${import.meta.env.BASE_URL}wilfrid_laurier_university_logo.jpg`, name: "Wilfrid Laurier University", position: "Instruction Assistant", bullets: [
    "Delivered hands-on support to students in data cleaning, visualization, and statistical modeling, improving project accuracy and analytical rigor.",
    "Guided students through complex concepts by breaking down technical material into clear, structured explanations.",
    "Reviewed and provided detailed feedback on assignments and projects, helping students strengthen problem-solving and coding approaches.",
    "Assisted in developing instructional materials and examples to reinforce key concepts in data analysis and modeling.",
    "Facilitated lab sessions and one-on-one support, addressing diverse learning needs and increasing student engagement.",
    "Identified common learning gaps and proactively adapted explanations to improve overall class comprehension.",
  ] },
  { image: `${import.meta.env.BASE_URL}wilfrid_laurier_university_students_union_logo.jpg`, name: "Student Union", position: "Board of Director", bullets: [
    "Directed strategic decision-making alongside executive leadership, shaping policies and initiatives that improved student engagement and campus-wide participation.",
    "Represented the student body in high-level discussions, advocating for student needs and influencing key organizational decisions.",
    "Oversaw budgeting and resource allocation, ensuring responsible financial management and alignment with organizational goals.",
    "Collaborated with cross-functional teams to plan and execute large-scale student events, increasing attendance and community involvement.",
    "Evaluated organizational performance through data-driven insights, recommending improvements to enhance operational efficiency.",
  ] },
  { image: `${import.meta.env.BASE_URL}emergconnect_logo.jpg`, name: "Emergconnect", position: "Software Engineer", bullets: [
    "Improved NLP/LLM triage model accuracy by conducting error analysis and refining prompt structures, enhancing classification of patient complaints into appropriate urgency categories.",
    "Designed and implemented evaluation pipelines (confusion matrices, performance metrics) to systematically assess and iterate on model performance.",
    "Optimized model reliability by identifying edge cases and reducing misclassification through targeted testing and data-driven refinements.",
    "Collaborated with cross-functional teams to align model outputs with real-world triage requirements, improving usability in healthcare scenarios.",
    "Debugged and resolved frontend/mobile application issues, ensuring smoother integration between model outputs and user interface.",
    "Engineered structured testing workflows to validate model behavior across diverse input scenarios, improving consistency and robustness.",
  ] },
  { image: `${import.meta.env.BASE_URL}lazaridissupplychainassociation_logo.jpg`, name: "Laurier Supply Chain Association", position: "Software Engineer", bullets: [
    "Developed and deployed an interactive chatbot feature for the association's website, improving user engagement and accessibility of resources.",
    "Engineered conversational flows to streamline access to event information, membership details, and FAQs, reducing manual inquiries.",
    "Collaborated with cross-functional team members to integrate chatbot functionality into the frontend, ensuring a seamless user experience.",
    "Optimized chatbot responses through iterative testing and user feedback, increasing accuracy and relevance of information delivery.",
    "Contributed to website enhancement initiatives by identifying gaps in user interaction and implementing scalable solutions.",
    "Strengthened digital presence by improving navigation efficiency and reducing friction in accessing key association services.",
  ] },
  {
    image: `${import.meta.env.BASE_URL}varsity_tutors_logo.jpg`,
    name: "Varsity Tutors",
    position: "Math Tutor",
    bullets: [
      "Delivered one-on-one and small-group tutoring sessions in mathematics and data-related courses, improving student comprehension and academic performance.",
      "Simplified complex concepts (e.g., statistics, data analysis, algebra) into clear, structured explanations tailored to individual learning styles.",
      "Diagnosed student knowledge gaps through targeted questioning and practice assessments, increasing problem-solving accuracy over time.",
      "Guided students through assignments and exam preparation, reinforcing key concepts and effective study strategies.",
      "Fostered an engaging and supportive learning environment, boosting student confidence and participation.",
    ],
  },
];

const images = companies.map(c => c.image);

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
              itemSize={110}
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
              <div className="p-8 min-h-80 text-left">
                {isOpen && (
                  <>
                    <div className="flex items-center gap-4 mb-4 text-left">
                      <img
                        src={companies[selectedIndex].image}
                        alt="company logo"
                        className="h-16 w-16 object-contain"
                      />
                      <div>
                        <h3 className="text-xl font-bold">{companies[selectedIndex].position}</h3>
                        <p className="text-sm text-muted-foreground tracking-wide">{companies[selectedIndex].name}</p>
                      </div>
                    </div>
                    {companies[selectedIndex].bullets.length > 0 ? (
                      <ul className="space-y-3 text-left">
                        {companies[selectedIndex].bullets.map((point, i) => (
                          <li key={i} className="flex gap-2 text-sm text-muted-foreground leading-relaxed tracking-wide font-light">
                            <span className="text-primary shrink-0 mt-0.5">▸</span>
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-muted-foreground text-sm tracking-wide font-light">Details coming soon...</p>
                    )}
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
