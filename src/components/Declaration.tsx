// import React from 'react';
// import { FileCheck, Linkedin, Github, Mail, Phone } from 'lucide-react';

// const Declaration = () => {
//   const socialLinks = [
//     { icon: Linkedin, label: 'LinkedIn', url: 'https://www.linkedin.com/in/sanjeev-kumar-mohanasundaram-a7b260249' },
//     { icon: Github, label: 'GitHub', url: 'https://github.com/Candykittie' },
//     { icon: Mail, label: 'Email', url: 'mailto:sanjay1633410@gmail.com' },
//     { icon: Phone, label: 'Phone', url: '+91 8778296986' },
//   ];

//   return (
//     <section id="contact" className="py-20 px-4">
//       <div className="max-w-6xl mx-auto">
//         <div className="glass-card p-8 text-center">
//           <div className="flex justify-center mb-6">
//             <div className="p-4 rounded-full bg-blue-500/20">
//               {/* <FileCheck className="w-8 h-8 text-blue-400" /> */}
//             </div>
//           </div>
          
//           {/* <h2 className="text-2xl font-bold text-enhanced-primary mb-6">Declaration</h2> */}
          
//           {/* <div className="glass-card-inner p-6 mb-8">
//             <p className="text-enhanced-body leading-relaxed text-lg mb-4 font-semibold">
//               I hereby declare that the above-mentioned details are true to the best of my knowledge and belief.
//             </p>
//             <div className="text-right">
//               <p className="text-enhanced-primary font-bold text-lg">Sanjeev Kumar.M</p>
//               <div className="w-32 h-px bg-blue-400 ml-auto mt-2"></div>
//             </div>
//           </div> */}

//           <div className="border-t border-white/20 pt-8">
//             <h3 className="text-xl font-bold text-enhanced-secondary mb-6">Connect With Me</h3>
//             <div className="flex flex-wrap justify-center gap-4">
//               {socialLinks.map((link, index) => (
//                 <a
//                   key={index}
//                   href={link.url}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="glass-button-social group"
//                 >
//                   <link.icon className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
//                   {link.label}
//                 </a>
//               ))}
//             </div>
//           </div>
//         </div>

//         <div className="text-center mt-8">
//           <p className="text-enhanced-muted text-sm font-medium">
//             © 2024 Sanjeev Kumar.M. All rights reserved.
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Declaration;

import React from 'react';
import { Linkedin, Github, Mail, Phone } from 'lucide-react';

const Declaration = () => {
  const socialLinks = [
    { icon: Linkedin, label: 'LinkedIn', url: 'https://www.linkedin.com/in/sanjeev-kumar-mohanasundaram-a7b260249' },
    { icon: Github, label: 'GitHub', url: 'https://github.com/Candykittie' },
    { icon: Mail, label: 'Email', url: 'mailto:sanjay1633410@gmail.com' },
    { icon: Phone, label: 'Phone', url: 'tel:+918778296986' },
  ];

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="glass-card p-8 text-center">
          <div className="border-t border-white/20 pt-8">
            <h3 className="text-xl font-bold text-enhanced-secondary mb-6">Connect With Me</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-button-social group"
                >
                  <link.icon className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center mt-8">
          <p className="text-enhanced-muted text-sm font-medium">
            © 2025 Sanjeev Kumar Mohanasundaram All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Declaration;
