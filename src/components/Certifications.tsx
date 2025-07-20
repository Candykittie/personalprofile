import React from 'react';
import { Award, Calendar } from 'lucide-react';

const Certifications = () => {
  const certifications = [
     {
      title: 'Advanced Cyber Security',
      issuer: 'Guvi',
      date: '2025',
      description: 'Cyber Security.',
      color: 'from-purple-400 to-red-600',
    },
     {
      title: 'AWS Cloud Computing',
      issuer: 'Reccsar Private Limited',
      date: '2025',
      description: 'Online faculty Internship Program.',
      color: 'from-purple-400 to-purple-600',
    },
     {
      title: 'AI Job Simulation ',
      issuer: 'Forage',
      date: '2024',
      description: 'Artificial Intelligence.',
      color: 'from-pink-400 to-pink-600',
    },
     {
      title: 'J.P.Morgan Software Engineering Job Simulation ',
      issuer: 'Forage',
      date: '2024',
      description: 'Software Engineering Job Simulation.',
      color: 'from-pink-400 to-pink-600',
    },
      {
      title: 'Python Data Analysis',
      issuer: 'IBM',
      date: '2024',
      description: 'Advanced Python programming for data analysis and visualization.',
      color: 'from-green-400 to-green-600',
    },
    {
      title: 'AI for India',
      issuer: 'GUVI',
      date: '2023',
      description: 'Comprehensive certification in Artificial Intelligence fundamentals and applications.',
      color: 'from-blue-400 to-blue-600',
    },
    {
      title: 'Java Workshop',
      issuer: 'AVC College of Engineering',
      date: '2022',
      description: 'Advanced Java programming concepts and enterprise application development.',
      color: 'from-orange-400 to-orange-600',
    },
   
  ];

  return (
    <section id="certifications" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-enhanced-primary mb-3">Certifications</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className={`w-full h-24 rounded-full bg-gradient-to-r ${cert.color} bg-opacity-20 border border-white/10 backdrop-blur-sm 
                px-4 py-2 flex items-center justify-between shadow-md transition-all hover:scale-[1.01] hover:shadow-lg`}
            >
              {/* Icon */}
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                <Award className="w-5 h-5 text-white" />
              </div>

              {/* Info */}
              <div className="flex-1 px-4">
                <h3 className="text-sm font-semibold text-white">{cert.title}</h3>
                <p className="text-xs text-white/70">{cert.issuer}</p>
              </div>

              {/* Date */}
              <div className="flex items-center gap-1 text-xs text-white/60">
                <Calendar className="w-4 h-4" />
                <span>{cert.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
