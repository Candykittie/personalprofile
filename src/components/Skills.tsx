import React from 'react';
import { 
  Code2, 
  FileCode, 
  Globe, 
  Atom, 
  Hash, 
  Database, 
  Brain, 
  Cpu 
} from 'lucide-react';

const Skills = () => {
  const skills = [
    {
      name: 'Angular',
      level: 85,
      icon: Code2,
      color: 'from-red-400 to-green-600',
    },
    {
      name: 'Python',
      level: 75,
      icon: FileCode,
      color: 'from-blue-400 to-red-600',
    },
    {
      name: 'HTML & CSS',
      level: 85,
      icon: Globe,
      color: 'from-orange-400 to-green-600',
    },
    {
      name: 'C#',
      level: 70,
      icon: Hash,
      color: 'from-green-400 to-green-600',
    },
    {
      name: 'React-JS',
      level: 75,
      icon: Atom,
      color: 'from-red-400 to-green-600',
    },
    {
      name: 'Mysql',
      level: 75,
      icon: Database,
      color: 'from-red-400 to-red-600',
    },
    {
      name: 'Deep learning',
      level: 60,
      icon: Brain,
      color: 'from-red-400 to-indigo-600',
    },
    {
      name: 'Machine Learning',
      level: 60,
      icon: Cpu,
      color: 'from-red-400 to-pink-600',
    },
  ];

  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-enhanced-primary mb-4">Technical Skills</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div key={index} className="flip-card">
              <div className="flip-card-inner glass-card">
                {/* Front - Logo Only */}
                <div className="flip-card-front flex items-center justify-center p-6">
                  <skill.icon
                    className="w-16 h-16 text-enhanced-primary"
                  />
                </div>

                {/* Back - Skill Info */}
                <div className="flip-card-back p-6 text-center">
                  <h3 className="text-xl font-bold text-enhanced-secondary mb-4">{skill.name}</h3>
                  <div className="relative">
                    <div className="w-full bg-white/5 rounded-full h-3 mb-2">
                      <div
                        className={`h-3 rounded-full bg-gradient-to-r ${skill.color} transition-all duration-1000 ease-out`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                    <span className="text-sm text-enhanced-body font-bold">{skill.level}%</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
