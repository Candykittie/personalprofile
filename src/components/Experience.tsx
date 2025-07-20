// // import React from 'react';
// // import { Briefcase, MapPin, Calendar, CheckCircle } from 'lucide-react';

// // const Experience = () => {
// //   const experiences = [
// //     {
// //       title: 'Associate Developer Trainee',
// //       company: 'Bivinu Services LLP',
// //       location: 'New Delhi',
// //       duration: '5 Months',
// //       type: 'Trainee',
// //       projects: [
// //         {
// //           name: 'Shape Distance Calculator',
// //           link: 'https://github.com/Candykittie/shapedistancecalculator',
// //         },
// //         {
// //           name: 'Content Editor Application',
// //           link: 'https://github.com/Candykittie/shapedistancecalculator',
// //         },
// //       ],
// //       skills: ['Angular', 'JavaScript', 'HTML/CSS', 'TypeScript'],
// //     },
// //     {
// //       title: 'Intern',
// //       company: 'Shaish Info Solutions Pvt Ltd',
// //       location: 'Chennai',
// //       duration: 'Nov 2023 – Jan 2024',
// //       type: 'Internship',
// //       projects: [],
// //       skills: ['Python'],
// //     },
// //   ];

// //   return (
// //     <section id="experience" className="py-20 px-4">
// //       <div className="max-w-6xl mx-auto">
// //         <div className="text-center mb-16">
// //           <h2 className="text-4xl font-bold text-enhanced-primary mb-4">Experience</h2>
// //           <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full"></div>
// //         </div>

// //         <div className="space-y-8">
// //           {experiences.map((exp, index) => (
// //             <div key={index} className="glass-card p-8 experience-card">
// //               <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
// //                 <div className="flex items-center mb-4 lg:mb-0">
// //                   <div className="p-3 rounded-full bg-blue-500/20 mr-4">
// //                     <Briefcase className="w-6 h-6 text-blue-600" />
// //                   </div>
// //                   <div>
// //                     <h3 className="text-2xl font-bold text-enhanced-secondary">{exp.title}</h3>
// //                     <p className="text-lg text-enhanced-body font-semibold">{exp.company}</p>
// //                   </div>
// //                 </div>

// //                 <div className="flex flex-col sm:flex-row gap-4 text-sm">
// //                   <div className="flex items-center text-enhanced-muted">
// //                     <MapPin className="w-4 h-4 mr-2" />
// //                     <span className="font-semibold">{exp.location}</span>
// //                   </div>
// //                   <div className="flex items-center text-enhanced-muted">
// //                     <Calendar className="w-4 h-4 mr-2" />
// //                     <span className="font-semibold">{exp.duration}</span>
// //                   </div>
// //                   <span className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-700 text-xs font-bold">
// //                     {exp.type}
// //                   </span>
// //                 </div>
// //               </div>

// //               <div className="grid md:grid-cols-2 gap-6">
// //                 {exp.projects.length > 0 && (
// //                   <div>
// //                     <h4 className="text-lg font-bold text-enhanced-secondary mb-3">Key Projects</h4>
// //                     <ul className="space-y-2">
// //                       {exp.projects.map((project, projectIndex) => (
// //                         <li key={projectIndex} className="flex items-center text-enhanced-body">
// //                           <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
// //                           <a
// //                             href={project.link}
// //                             target="_blank"
// //                             rel="noopener noreferrer"
// //                             className="text-blue-500 font-semibold hover:underline"
// //                           >
// //                             {project.name}
// //                           </a>
// //                         </li>
// //                       ))}
// //                     </ul>
// //                   </div>
// //                 )}

// //                 <div>
// //                   <h4 className="text-lg font-bold text-enhanced-secondary mb-3">Technologies Used</h4>
// //                   <div className="flex flex-wrap gap-2">
// //                     {exp.skills.map((skill, skillIndex) => (
// //                       <span
// //                         key={skillIndex}
// //                         className="px-3 py-1 rounded-full bg-white/10 text-enhanced-body text-sm border border-white/20 font-semibold"
// //                       >
// //                         {skill}
// //                       </span>
// //                     ))}
// //                   </div>
// //                 </div>
// //               </div>
// //             </div>
// //           ))}
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default Experience;
// import React from 'react';
// import { Briefcase, MapPin, Calendar, CheckCircle } from 'lucide-react';

// const Experience = () => {
//   const experiences = [
//      {
//       title: 'Programmer',
//       company: 'Gojan School of Business and Technology',
//       location: 'chennai',
//       duration: 'Currently working ',
//       type: 'Full-time',
//       projects :[],
//     },
    
//     {
//       title: 'Associate Developer Trainee',
//       company: 'Bivinu Services LLP',
//       location: 'New Delhi',
//       duration: '5 Months',
//       type: 'Full-time',
//       projects: [
//         {
//           name: 'Shape Distance Calculator',
//           link: 'https://github.com/Candykittie/shapedistancecalculator',
//         },
//         {
//           name: 'Content Editor Application',
//           link: 'https://github.com/Candykittie/content_Editor',
//         },
//       ],
//       skills: ['Angular', 'JavaScript', 'HTML/CSS', 'TypeScript'],
//     },
//     {
//       title: 'Intern',
//       company: 'Shaish Info Solutions Pvt Ltd',
//       location: 'Chennai',
//       duration: 'Nov 2023 – Jan 2024',
//       type: 'Internship',
//       projects: [],
//       skills: ['Python', 'Web Development', 'Database', 'Problem Solving'],
//     },
//     {
//       title: 'Human Feelings Image Classification Using Deep Learning',
//       company: 'Academic Project',
//       location: 'Chidambaram',
//       duration: '2023',
//       type: 'Project',
//       description:
//         'A deep learning-powered system designed to classify human emotions from facial expressions in images, showcasing the potential of AI in interpreting human behavior.',
//       longDescription:
//         'This project implements an advanced emotion recognition system using deep learning techniques. It accurately detects and classifies a range of human emotions — including happiness, sadness, anger, fear, surprise, and disgust — based on facial imagery. The model integrates preprocessing pipelines, real-time detection capabilities, and visual performance metrics to deliver a robust emotion analysis solution.',
//       projects: [
//         {
//           name: 'GitHub Repository',
//           link: 'https://github.com/Candykittie/kittie',
//         },
//       ],
//       skills: [
//         'Python',
//         'TensorFlow',
//         'Machine Learning',
//         'Deep Learning',
//         'OpenCV',
//         'NumPy',
//         'Matplotlib',
//       ],
//       features: [
//         'Real-time emotion detection from facial images',
//         'Multi-class classification of six basic emotions',
//         'High-accuracy neural network architecture',
//         'Robust image preprocessing pipeline',
//         'Visual performance analytics (accuracy/loss graphs)',
//         'Scalable design suitable for deployment in applications',
//       ],
//     },
//   ];

//   return (
//     <section id="experience" className="py-20 px-4">
//       <div className="max-w-6xl mx-auto">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl font-bold text-enhanced-primary mb-4">Experience</h2>
//           <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full"></div>
//         </div>

//         <div className="space-y-8">
//           {experiences.map((exp, index) => (
//             <div key={index} className="glass-card p-8 experience-card">
//               <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
//                 <div className="flex items-center mb-4 lg:mb-0">
//                   <div className="p-3 rounded-full bg-blue-500/20 mr-4">
//                     <Briefcase className="w-6 h-6 text-blue-600" />
//                   </div>
//                   <div>
//                     <h3 className="text-2xl font-bold text-enhanced-secondary">{exp.title}</h3>
//                     <p className="text-lg text-enhanced-body font-semibold">{exp.company}</p>
//                   </div>
//                 </div>

//                 <div className="flex flex-col sm:flex-row gap-4 text-sm">
//                   <div className="flex items-center text-enhanced-muted">
//                     <MapPin className="w-4 h-4 mr-2" />
//                     <span className="font-semibold">{exp.location}</span>
//                   </div>
//                   <div className="flex items-center text-enhanced-muted">
//                     <Calendar className="w-4 h-4 mr-2" />
//                     <span className="font-semibold">{exp.duration}</span>
//                   </div>
//                   <span className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-700 text-xs font-bold">
//                     {exp.type}
//                   </span>
//                 </div>
//               </div>

//               {exp.description && (
//                 <p className="text-enhanced-body mb-4 text-sm italic">{exp.description}</p>
//               )}
//               {exp.longDescription && (
//                 <p className="text-enhanced-body mb-6 text-sm">{exp.longDescription}</p>
//               )}

//               <div className="grid md:grid-cols-2 gap-6">
//                 {exp.projects.length > 0 && (
//                   <div>
//                     <h4 className="text-lg font-bold text-enhanced-secondary mb-3">Project Link</h4>
//                     <ul className="space-y-2">
//                       {exp.projects.map((project, projectIndex) => (
//                         <li key={projectIndex} className="flex items-center text-enhanced-body">
//                           <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
//                           <a
//                             href={project.link}
//                             target="_blank"
//                             rel="noopener noreferrer"
//                             className="text-blue-500 font-semibold hover:underline"
//                           >
//                             {project.name}
//                           </a>
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
//                 )}

//                 <div>
//                   <h4 className="text-lg font-bold text-enhanced-secondary mb-3">Technologies Used</h4>
//                   <div className="flex flex-wrap gap-2">
//                     {exp.skills.map((skill, skillIndex) => (
//                       <span
//                         key={skillIndex}
//                         className="px-3 py-1 rounded-full bg-white/10 text-enhanced-body text-sm border border-white/20 font-semibold"
//                       >
//                         {skill}
//                       </span>
//                     ))}
//                   </div>
//                 </div>
//               </div>

//               {exp.features && (
//                 <div className="mt-6">
//                   <h4 className="text-lg font-bold text-enhanced-secondary mb-3">Key Features</h4>
//                   <ul className="list-disc list-inside space-y-1 text-enhanced-body text-sm">
//                     {exp.features.map((feature, idx) => (
//                       <li key={idx}>{feature}</li>
//                     ))}
//                   </ul>
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Experience;


import React from 'react';
import { Briefcase, MapPin, Calendar, CheckCircle } from 'lucide-react';

const Experience = () => {
  const experiences = [
  {
    title: 'Programmer',
    company: 'Gojan School of Business and Technology',
    location: 'Chennai',
    duration: 'Currently working',
    type: (
      <span className="px-3 py-1  bg-blue text-white text-xs font-semibold shadow-sm">
        Full-time
      </span>
    ),
    projects: [],
    skills: ['Web Development', 'Teaching', 'Lab Management'],
  },
  {
    title: 'Associate Developer Trainee',
    company: 'Bivinu Services LLP',
    location: 'New Delhi',
    duration: '5 Months',
    type: (
      <span className="px-3 py-1  bg-indigo text-white text-xs font-semibold shadow-sm">
        Trainee
      </span>
    ),
    projects: [
      {
        name: 'Shape Distance Calculator',
        link: 'https://github.com/Candykittie/shapedistancecalculator',
      },
      {
        name: 'Content Editor Application',
        link: 'https://github.com/Candykittie/content_Editor',
      },
    ],
    skills: ['Angular', 'JavaScript', 'HTML/CSS', 'TypeScript'],
  },
  {
    title: 'Intern',
    company: 'Shiash Info Solutions Pvt Ltd',
    location: 'Chennai',
    duration: 'Nov 2023 – Jan 2024',
    type: (
      <span className="px-3 py-1  bg-green text-white text-xs font-semibold shadow-sm">
        Internship
      </span>
    ),
    projects: [],
    skills: ['Python', 'Web Development', 'Database', 'Problem Solving'],
  },
  {
    title: 'Human Feelings Image Classification Using Deep Learning',
    company: 'Academic Project',
    location: 'Chidambaram',
    duration: '2023',
    type: (
      <span className="px-3 py-1 bg-purple text-white text-xs font-semibold shadow-sm">
        Project
      </span>
    ),
    description:
      'A deep learning-powered system designed to classify human emotions from facial expressions in images, showcasing the potential of AI in interpreting human behavior.',
    longDescription:
      'This project implements an advanced emotion recognition system using deep learning techniques. It accurately detects and classifies a range of human emotions — including happiness, sadness, anger, fear, surprise, and disgust — based on facial imagery. The model integrates preprocessing pipelines, real-time detection capabilities, and visual performance metrics to deliver a robust emotion analysis solution.',
    projects: [
      {
        name: 'GitHub Repository',
        link: 'https://github.com/Candykittie/kittie',
      },
    ],
    skills: [
      'Python',
      'TensorFlow',
      'Machine Learning',
      'Deep Learning',
      'OpenCV',
      'NumPy',
      'Matplotlib',
    ],
    features: [
      'Real-time emotion detection from facial images',
      'Multi-class classification of six basic emotions',
      'High-accuracy neural network architecture',
      'Robust image preprocessing pipeline',
      'Visual performance analytics (accuracy/loss graphs)',
      'Scalable design suitable for deployment in applications',
    ],
  },
];

  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-enhanced-primary mb-4">Experience</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full"></div>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="glass-card p-8 experience-card">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                <div className="flex items-center mb-4 lg:mb-0">
                  <div className="p-3 rounded-full bg-blue-500/20 mr-4">
                    <Briefcase className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-enhanced-secondary">{exp.title}</h3>
                    <p className="text-lg text-enhanced-body font-semibold">{exp.company}</p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 text-sm">
                  <div className="flex items-center text-enhanced-muted">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span className="font-semibold">{exp.location}</span>
                  </div>
                  <div className="flex items-center text-enhanced-muted">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span className="font-semibold">{exp.duration}</span>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-700 text-xs font-bold">
                    {exp.type}
                  </span>
                </div>
              </div>

              {exp.description && (
                <p className="text-enhanced-body mb-4 text-sm italic">{exp.description}</p>
              )}
              {exp.longDescription && (
                <p className="text-enhanced-body mb-6 text-sm">{exp.longDescription}</p>
              )}

              <div className="grid md:grid-cols-2 gap-6">
                {exp.projects.length > 0 && (
                  <div>
                    <h4 className="text-lg font-bold text-enhanced-secondary mb-3">Project Link</h4>
                    <ul className="space-y-2">
                      {exp.projects.map((project, projectIndex) => (
                        <li key={projectIndex} className="flex items-center text-enhanced-body">
                          <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500 font-semibold hover:underline"
                          >
                            {project.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div>
                  <h4 className="text-lg font-bold text-enhanced-secondary mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1 rounded-full bg-white/10 text-enhanced-body text-sm border border-white/20 font-semibold"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {exp.features && (
                <div className="mt-6">
                  <h4 className="text-lg font-bold text-enhanced-secondary mb-3">Key Features</h4>
                  <ul className="list-disc list-inside space-y-1 text-enhanced-body text-sm">
                    {exp.features.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
