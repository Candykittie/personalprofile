// import React from 'react';
// import { GraduationCap, Calendar, Trophy } from 'lucide-react';

// const Education = () => {
//   const educationData = [
//     {
//       degree: 'Master of Computer Applications (MCA)',
//       institution: 'ANNAMALAI UNIVERSITY',
//       year: '2021-2023',
//       grade: 'First Class',
//       percentage: '82.7%',
//       icon: GraduationCap,
//     },
//     {
//       degree: 'Bachelor of Computer Applications (BCA)',
//       institution: 'Shree Raghavendra arts and science college',
//       year: '2018-2021',
//       Location: 'keezhamoongiladi',
//       percentage: '79%',
//       icon: GraduationCap,
//     },
//     {
//       degree: 'HSC',
//       institution: 'Nirmala Matriculation Higher Secondary school',
//         percentage: '73.4%',
//       year: '2017-2018',
//       Location: 'Chidambaram',
//       icon: Trophy,
//     },
//     {
//       degree: 'SSLC',
//       institution: 'Nirmala Matriculation Higher Secondary school',
//       year: '2015-2016',
//       grade: 'First Class',
//       percentage: '86.4%',
//       icon: Trophy,
//     },
//   ];

//   return (
//     <section id="education" className="py-20 px-4">
//       <div className="max-w-6xl mx-auto">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl font-bold text-enhanced-primary mb-4">Education</h2>
//           <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full"></div>
//         </div>

//         <div className="relative">
//           {/* Timeline line */}
//           <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-400 to-purple-400 rounded-full opacity-50"></div>
          
//           <div className="space-y-12">
//             {educationData.map((item, index) => (
//               <div key={index} className={`flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
//                <>
//                 <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
//                   <div className="glass-card p-6 education-card group">
//                     <div className="flex items-center mb-4">
//                       <div className="p-3 rounded-full bg-blue-500/20 mr-4">
//                         <item.icon className="w-6 h-6 text-blue-300" />
//                       </div>
//                       <div className="flex items-center text-blue-200">
//                         <Calendar className="w-4 h-4 mr-2" />
//                         <span className="font-medium">{item.year}</span>
//                       </div>
//                     </div>
//                     <h3 className="text-xl font-bold text-enhanced-secondary mb-2">{item.degree}</h3>
//                     <p className="text-enhanced-body mb-3 font-semibold">{item.institution}</p>
//                     <div className="flex items-center justify-between">
//                       <span className="text-sm text-enhanced-muted font-semibold">{item.grade}</span>
//                       <span className="text-lg font-bold text-blue-600">{item.percentage}</span>
//                     </div>
//                   </div>
//                 </div>
                
//                 <div className="relative z-10">
//                   <div className="w-4 h-4 bg-blue-500 rounded-full border-4 border-white/20"></div>
//                 </div>
                
//                 <div className="w-full md:w-5/12"></div>
//                </>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Education;


// import React from 'react';
// import { GraduationCap, Calendar, Trophy } from 'lucide-react';

// const Education = () => {
//   const educationData = [
//     {
//       degree: 'Master of Computer Applications (MCA)',
//       institution: 'ANNAMALAI UNIVERSITY',
//       year: '2021-2023',
//       grade: 'First Class',
//       percentage: '82.7%',
//       icon: GraduationCap,
//     },
//     {
//       degree: 'Bachelor of Computer Applications (BCA)',
//       institution: 'Shree Raghavendra arts and science college',
//       year: '2018-2021',
//       Location: 'Keezhamoongiladi',
//       percentage: '79%',
//       icon: GraduationCap,
//     },
//     {
//       degree: 'HSC',
//       institution: 'Nirmala Matriculation Higher Secondary school',
//       percentage: '73.4%',
//       year: '2017-2018',
//       Location: 'Chidambaram',
//       icon: Trophy,
//     },
//     {
//       degree: 'SSLC',
//       institution: 'Nirmala Matriculation Higher Secondary school',
//       year: '2015-2016',
//       grade: 'First Class',
//       percentage: '86.4%',
//       icon: Trophy,
//     },
//   ];

//   return (
//     <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-900 to-slate-800 text-white">
//       <div className="max-w-4xl mx-auto">
//         {/* Header */}
//         <div className="text-center mb-12">
//           <h2 className="text-3xl sm:text-4xl font-bold mb-4">Education</h2>
//           <div className="w-20 h-1 mx-auto bg-gradient-to-r from-blue-400 to-purple-400 rounded-full" />
//         </div>

//         <div className="relative pl-6">
//           {/* Timeline line */}
//           <div className="absolute left-4 top-0 w-1 h-full bg-gradient-to-b from-blue-400 to-purple-400 opacity-30 rounded-full"></div>

//           <div className="flex flex-col gap-12">
//             {educationData.map((item, index) => (
//               <div key={index} className="relative pl-8">
//                 {/* Timeline Dot */}
//                 <div className="absolute left-0 top-5 w-4 h-4 bg-blue-500 rounded-full border-4 border-white dark:border-slate-900 shadow-md z-10"></div>

//                 {/* Education Card */}
//                 <div className="bg-slate-800 border border-slate-700 shadow-xl rounded-xl p-6">
//                   <div className="flex items-center mb-4">
//                     <div className="p-3 bg-blue-500/20 rounded-full mr-3">
//                       <item.icon className="w-6 h-6 text-blue-300" />
//                     </div>
//                     <div className="flex items-center text-blue-300 text-sm font-medium">
//                       <Calendar className="w-4 h-4 mr-1" />
//                       {item.year}
//                     </div>
//                   </div>

//                   <h3 className="text-xl font-semibold mb-1">{item.degree}</h3>
//                   <p className="text-slate-300 font-medium mb-1">{item.institution}</p>

//                   {item.Location && (
//                     <p className="text-sm text-slate-400 mb-1">📍 {item.Location}</p>
//                   )}

//                   <div className="flex justify-between text-sm mt-3">
//                     <span className="text-slate-400 font-semibold">
//                       {item.grade || 'Passed'}
//                     </span>
//                     <span className="text-blue-400 font-bold text-lg">{item.percentage}</span>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Education;


// import React from 'react';
// import { GraduationCap, Calendar, Trophy } from 'lucide-react';

// const Education = () => {
//   const educationData = [
//     {
//       degree: 'Master of Computer Applications (MCA)',
//       institution: 'ANNAMALAI UNIVERSITY',
//       year: '2021-2023',
//        Location: 'Chidambaram',
//       // grade: 'First Class',
//       percentage: '82.7%',
//       icon: GraduationCap,
//     },
//     {
//       degree: 'Bachelor of Computer Applications (BCA)',
//       institution: 'Shree Raghavendra arts and science college',
//       year: '2018-2021',
//       Location: 'Keezhamoongiladi',
//       percentage: '79%',
//       icon: GraduationCap,
//     },
//     {
//       degree: 'HSC',
//       institution: 'Nirmala Matriculation Higher Secondary school',
//       percentage: '73.4%',
//       year: '2017-2018',
//       Location: 'Chidambaram',
//       icon: Trophy,
//     },
//     {
//       degree: 'SSLC',
//       institution: 'Nirmala Matriculation Higher Secondary school',
//       percentage: '86.4%',
//       year: '2015-2016',
//       Location :'Chidambaram',
//       icon: Trophy,
//     },
//   ];

//   return (
//     <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-900 to-slate-800 text-white">
//       <div className="max-w-6xl mx-auto">
//         {/* Section Header */}
//         <div className="text-center mb-16">
//           <h2 className="text-3xl sm:text-4xl font-bold mb-4">Education</h2>
//           <div className="w-20 h-1 mx-auto bg-gradient-to-r from-blue-400 to-purple-400 rounded-full" />
//         </div>

//         {/* Timeline container */}
//         <div className="relative">
//           {/* Vertical line in the center */}
//           <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-400 to-purple-400 opacity-40 rounded-full"></div>

//           <div className="space-y-16">
//             {educationData.map((item, index) => {
//               const isLeft = index % 2 !== 0;

//               return (
//                 <div
//                   key={index}
//                   className={`flex flex-col md:flex-row ${
//                     isLeft ? 'md:flex-row-reverse' : ''
//                   } items-center md:items-start md:justify-between md:gap-8`}
//                 >
//                   {/* Left/Right card */}
//                   <div className={`w-full md:w-5/12 ${isLeft ? 'md:pl-12' : 'md:pr-12'}`}>
//                     <div className="bg-slate-800 border border-slate-700 shadow-lg p-6 rounded-xl">
//                       <div className="flex items-center mb-4">
//                         <div className="p-3 bg-blue-500/20 rounded-full mr-3">
//                           <item.icon className="w-6 h-6 text-blue-300" />
//                         </div>
//                         <div className="flex items-center text-blue-300 text-sm font-medium">
//                           <Calendar className="w-4 h-4 mr-1" />
//                           {item.year}
//                         </div>
//                       </div>
//                       <h3 className="text-xl font-semibold mb-1">{item.degree}</h3>
//                       <p className="text-slate-300 font-medium mb-1">{item.institution}</p>

//                       {item.Location && (
//                         <p className="text-sm text-slate-400 mb-1">📍 {item.Location}</p>
//                       )}

//                       <div className="flex justify-between text-sm mt-3">
//                         <span className="text-slate-400 font-semibold">{item.grade || 'Passed'}</span>
//                         <span className="text-blue-400 font-bold text-lg">{item.percentage}</span>
//                       </div>
//                     </div>
//                   </div>

//                   {/* Dot in center */}
//                   <div className="hidden md:flex flex-col items-center justify-center z-10">
//                     <div className="w-4 h-4 bg-blue-500 rounded-full border-4 border-white shadow-lg" />
//                   </div>

//                   {/* Empty div for balance */}
//                   <div className="w-0 md:w-5/12"></div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Education;

import React from 'react';
import { GraduationCap, Calendar, Trophy } from 'lucide-react';

const Education = () => {
  const educationData = [
    {
      degree: 'Master of Computer Applications (MCA)',
      institution: 'ANNAMALAI UNIVERSITY',
      year: '2021-2023',
      Location: 'Chidambaram',
      percentage: '82.7%',
      icon: GraduationCap,
    },
    {
      degree: 'Bachelor of Computer Applications (BCA)',
      institution: 'Shree Raghavendra arts and science college',
      year: '2018-2021',
      Location: 'Keezhamoongiladi',
      percentage: '79%',
      icon: GraduationCap,
    },
    {
      degree: 'HSC',
      institution: 'Nirmala Matriculation Higher Secondary school',
      percentage: '73.4%',
      year: '2017-2018',
      Location: 'Chidambaram',
      icon: Trophy,
    },
    {
      degree: 'SSLC',
      institution: 'Nirmala Matriculation Higher Secondary school',
      percentage: '86.4%',
      year: '2015-2016',
      Location: 'Chidambaram',
      icon: Trophy,
    },
  ];

  return (
    <section
      id="education"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-900 to-slate-800 text-white"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Education</h2>
          <div className="w-20 h-1 mx-auto bg-gradient-to-r from-blue-400 to-purple-400 rounded-full" />
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical Line in the center (for desktop only) */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-400 to-purple-400 opacity-40 rounded-full"></div>

          <div className="space-y-16 md:space-y-0">
            {educationData.map((item, index) => {
              const isLeft = index % 2 !== 0;

              return (
                <div
                  key={index}
                  className={`flex flex-col md:flex-row ${
                    isLeft ? 'md:flex-row-reverse' : ''
                  } items-center md:items-start md:justify-between md:gap-8 relative`}
                >
                  {/* Card Section */}
                  <div
                    className={`w-full md:w-5/12 ${
                      isLeft ? 'md:pl-12' : 'md:pr-12'
                    } relative pl-6 md:pl-0`}
                  >
                    {/* Left border for mobile */}
                    <div className="absolute top-4 left-2 h-full w-1 bg-blue-500 rounded-full md:hidden"></div>

                    <div className="bg-slate-800 border border-slate-700 shadow-lg p-6 rounded-xl relative z-10">
                      <div className="flex items-center mb-4">
                        <div className="p-3 bg-blue-500/20 rounded-full mr-3">
                          <item.icon className="w-6 h-6 text-blue-300" />
                        </div>
                        <div className="flex items-center text-blue-300 text-sm font-medium">
                          <Calendar className="w-4 h-4 mr-1" />
                          {item.year}
                        </div>
                      </div>
                      <h3 className="text-xl font-semibold mb-1">{item.degree}</h3>
                      <p className="text-slate-300 font-medium mb-1">
                        {item.institution}
                      </p>
                      {item.Location && (
                        <p className="text-sm text-slate-400 mb-1">
                          📍 {item.Location}
                        </p>
                      )}

                      <div className="flex justify-between text-sm mt-3">
                        <span className="text-slate-400 font-semibold">
                          {item.grade || 'Passed'}
                        </span>
                        <span className="text-blue-400 font-bold text-lg">
                          {item.percentage}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Dot in center (desktop only) */}
                  <div className="hidden md:flex flex-col items-center justify-center z-10">
                    <div className="w-4 h-4 bg-blue-500 rounded-full border-4 border-white shadow-lg" />
                  </div>

                  {/* Empty div for spacing */}
                  <div className="w-0 md:w-5/12"></div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;

