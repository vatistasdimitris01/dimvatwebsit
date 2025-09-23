import React, { useState } from 'react';
import { Project } from '../types';

const ProjectCard: React.FC<{ project: Project; index: number }> = ({ project, index }) => {
    const colors = ['#ffb1ee', '#5e9bff', '#ff8e59', '#daef68', '#8f9aff', '#fcfd54', '#48f08b', '#ffbdf9'];
    const color = colors[index % colors.length];

    return (
        <div className="card-top-down rounded-3xl lg:rounded-[3rem] h-full w-full flex flex-col group" style={{ backgroundColor: color }}>
            <div className="p-6 lg:p-8 flex flex-col h-full">
                <div className="card-top-down__content flex-grow flex flex-col justify-between">
                    <div>
                        <div className="text-2xl lg:text-3xl font-medium">{project.title}</div>
                        <p className="text-base lg:text-lg mt-4 font-sans-text h-24 overflow-hidden">{project.description}</p>
                    </div>
                    <a href={project.url} target="_blank" rel="noopener noreferrer" className={`gl-buttons self-start mt-8 inline-block relative overflow-hidden rounded-full py-3 px-6 text-sm font-medium transition-colors duration-300 group-inner border border-black`}>
                        <span className={`relative z-10 transition-colors duration-300 group-hover:text-white`}>View Project</span>
                        <div className="absolute inset-0 bg-black scale-0 rounded-full transition-transform duration-300 group-hover:scale-105 z-0"></div>
                    </a>
                </div>
            </div>
        </div>
    );
};

interface CardListProps {
  id: string;
  title: string;
  projects: Project[];
}

const CardList: React.FC<CardListProps> = ({ id, title, projects }) => {
  const [showAll, setShowAll] = useState(false);
  const initialProjectCount = 6;
  const displayedProjects = showAll ? projects : projects.slice(0, initialProjectCount);
  const canShowMore = projects.length > initialProjectCount;

  return (
    <section id={id} className="py-12 md:py-20 px-4 md:px-6 bg-white scroll-mt-20">
      <div className="text-center max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-normal">{title}</h2>
      </div>

      <div className="relative">
        <div className="card-list__cards grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 mt-12 max-w-screen-xl mx-auto">
          {displayedProjects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>

        {!showAll && canShowMore && (
          <div className="overlay absolute bottom-0 inset-x-0 h-64 bg-gradient-to-t from-white to-transparent z-[2] hidden lg:block pointer-events-none"></div>
        )}
      </div>

      {!showAll && canShowMore && (
        <div className="text-center mt-12">
          <button
            onClick={() => setShowAll(true)}
            className="cards-grid__show-more gl-buttons inline-block relative overflow-hidden rounded-full py-3 px-12 text-base font-medium transition-colors duration-300 group border border-black"
          >
            <span className="relative z-10 transition-colors duration-300 group-hover:text-white">See More</span>
            <div className="absolute inset-0 bg-black scale-0 rounded-full transition-transform duration-300 group-hover:scale-105 z-0"></div>
          </button>
        </div>
      )}
    </section>
  );
};

export default CardList;
