// import React from 'react';
// import { Phone, Mail, Linkedin, FileText, MapPin, User } from 'lucide-react';
// import myPhoto from '../assets/logo/profile.jpg';
// const About = () => {
//   const contactInfo = [
//     { icon: Phone, label: 'Phone', value: '8778296986 , 7397138743' },
//     { icon: Mail, label: 'Email', value: 'sanjay1633410@gmail.com' },
//     {
//       icon: Linkedin,
//       label: 'LinkedIn',
//       value: 'https://www.linkedin.com/in/sanjeev-kumar-mohanasundaram-a7b260249',
//       displayText: 'Sanjeev Kumar Mohanasundaram',
//       isLink: true,
//     },
//     {
//       icon: MapPin,
//       label: 'Location',
//       value: 'https://maps.app.goo.gl/N4HDCuu4etybwZaF9',
//       displayText: 'Address',
//       isLink: true,
//     },
//   ];

//   return (
//     <section id="about" className="py-20 px-4">
//       <div className="max-w-6xl mx-auto">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl font-bold text-enhanced-primary mb-4">About Me</h2>
//           <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full"></div>
//         </div>

//         <div className="grid md:grid-cols-2 gap-8">
//           {/* Left Side - Profile */}
//           <div className="glass-card p-8 flex flex-col items-center text-center">
//             <div className="relative mb-6">
//               <div className="w-48 h-48 rounded-2xl bg-gradient-to-br from-blue-400/20 to-purple-400/20 border-2 border-white/20 flex items-center justify-center backdrop-blur-sm">
//                 <div className="w-40 h-40 rounded-xl bg-white/10 flex items-center justify-center">
//                   <User className="w-20 h-20 text-white/70" />
//                 </div>
//               </div>
//               <div className="absolute -bottom-3 -right-3 px-3 py-1 bg-blue-500/30 rounded-full border border-white/20 backdrop-blur-sm">
//                 <span className="text-xs text-white font-semibold">Professional</span>
//               </div>
//             </div>
//             <h3 className="text-2xl font-semibold text-enhanced-secondary mb-2">Sanjeev Kumar.M</h3>
//             <p className="text-enhanced-body font-semibold mb-4">MCA Graduate</p>
//             <div className="flex gap-2">
//               <span className="px-3 py-1 rounded-full bg-green-500/20 text-green-300 text-xs font-semibold">Available</span>
//               <span className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-semibold">Remote</span>
//             </div>
//           </div>

//           {/* Right Side - Introduction */}
//           <div className="glass-card p-8 space-y-6">
//             <p className="text-enhanced-body leading-relaxed text-lg">
//               I'm a builder at heart — turning bold ideas into digital reality. Whether it's architecting scalable apps or fine-tuning the smallest UI detail, I bring precision, curiosity, and a problem-solving mindset to everything I create.
//             </p>
//             <p className="text-enhanced-body leading-relaxed text-lg">
//               From dynamic web apps to interactive user experiences, I believe tech should feel intuitive, perform seamlessly, and solve problems that matter.
//             </p>
//             <p className="text-enhanced-body leading-relaxed text-lg">
//               My toolkit includes modern frameworks, fast iterations, and a mindset that thrives on innovation and impact.
//             </p>
//           </div>

//           {/* Full-width - Contact Info */}
//           <div className="glass-card p-8 md:col-span-2">
//             <h3 className="text-2xl font-semibold text-enhanced-secondary mb-6">Contact Information</h3>
//             <div className="space-y-4">
//               {contactInfo.map((item, index) => (
//                 <div
//                   key={index}
//                   className="flex items-center space-x-4 p-3 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300"
//                 >
//                   <div className="p-2 rounded-full bg-blue-500/20">
//                     <item.icon className="w-5 h-5 text-blue-400" />
//                   </div>
//                   <div>
//                     <p className="text-sm text-enhanced-muted">{item.label}</p>
//                     {item.isLink ? (
//                       <a
//                         href={item.value}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="text-blue-300 hover:underline break-all font-bold"
//                       >
//                         {item.displayText || item.value}
//                       </a>
//                     ) : (
//                       <p className="text-enhanced-body font-bold">{item.value}</p>
//                     )}
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;


// import React from 'react';
// import { Phone, Mail, Linkedin, MapPin, User } from 'lucide-react';
// import profilephoto from '../assets/profile.jpg'; // <- Replace with your actual image

// const About = () => {
//   const contactInfo = [
//     { icon: Phone, label: 'Phone', value: '8778296986 , 7397138743' },
//     { icon: Mail, label: 'Email', value: 'sanjay1633410@gmail.com' },
//     {
//       icon: Linkedin,
//       label: 'LinkedIn',
//       value: 'https://www.linkedin.com/in/sanjeev-kumar-mohanasundaram-a7b260249',
//       displayText: 'Sanjeev Kumar Mohanasundaram',
//       isLink: true,
//     },
//     {
//       icon: MapPin,
//       label: 'Location',
//       value: 'https://maps.app.goo.gl/N4HDCuu4etybwZaF9',
//       displayText: 'Location',
//       isLink: true,
//     },
//   ];

//   return (
//     <section id="about" className="py-20 px-4">
//       <div className="max-w-6xl mx-auto">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl font-bold text-enhanced-primary mb-4">About Me</h2>
//           <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full"></div>
//         </div>

//         <div className="grid md:grid-cols-2 gap-8 items-center">
//           {/* Left Section: Info */}
//           <div className="glass-card p-8 space-y-6 text-center md:text-left">
//             <h3 className="text-3xl font-bold text-enhanced-secondary">Sanjeev Kumar.M</h3>
//             <p className="text-lg text-enhanced-body font-semibold">MCA Graduate</p>
//             <div className="flex gap-3 justify-center md:justify-start">
//               <span className="px-3 py-1 rounded-full bg-green-500/20 text-green-300 text-xs font-semibold">Available</span>
//               <span className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-semibold">Remote</span>
//             </div>
//             <p className="text-enhanced-body leading-relaxed">
//               I'm a builder at heart — turning bold ideas into digital reality. Whether it's architecting scalable apps or fine-tuning the smallest UI detail, I bring precision, curiosity, and a problem-solving mindset to everything I create.
//             </p>
//             <p className="text-enhanced-body leading-relaxed">
//               From dynamic web apps to interactive user experiences, I believe tech should feel intuitive, perform seamlessly, and solve problems that matter.
//             </p>
//             <p className="text-enhanced-body leading-relaxed">
//               My toolkit includes modern frameworks, fast iterations, and a mindset that thrives on innovation and impact.
//             </p>
//           </div>

//           {/* Right Section: Image */}
//           <div className="glass-card p-6 flex justify-center">
//             <div className="relative w-64 h-64 rounded-2xl overflow-hidden border-2 border-white/10 bg-white/5">
//               <img
//                 src={profilephoto}
//                 alt="Sanjeev Kumar.M"
//                 className="w-full h-full object-cover"
//               />
//               <div className="absolute bottom-2 right-2 bg-blue-500/30 px-3 py-1 rounded-full text-xs text-white font-semibold backdrop-blur-sm">
//                 Professional
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Contact Info Section */}
//         <div className="glass-card p-8 mt-12">
//           <h3 className="text-2xl font-semibold text-enhanced-secondary mb-6">Contact Information</h3>
//           <div className="space-y-4">
//             {contactInfo.map((item, index) => (
//               <div
//                 key={index}
//                 className="flex items-center space-x-4 p-3 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300"
//               >
//                 <div className="p-2 rounded-full bg-blue-500/20">
//                   <item.icon className="w-5 h-5 text-blue-400" />
//                 </div>
//                 <div>
//                   <p className="text-sm text-enhanced-muted">{item.label}</p>
//                   {item.isLink ? (
//                     <a
//                       href={item.value}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="text-blue-300 hover:underline break-all font-bold"
//                     >
//                       {item.displayText || item.value}
//                     </a>
//                   ) : (
//                     <p className="text-enhanced-body font-bold">{item.value}</p>
//                   )}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;

import React from 'react';
import { Phone, Mail, Linkedin, MapPin, User } from 'lucide-react';
import profilephoto from '../assets/profile.jpg'; // Make sure the image is here

const About = () => {
  const contactInfo = [
    { icon: Phone, label: 'Phone', value: '8778296986 , 7397138743' },
    { icon: Mail, label: 'Email', value: 'sanjay1633410@gmail.com' },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'https://www.linkedin.com/in/sanjeev-kumar-mohanasundaram-a7b260249',
      displayText: 'Sanjeev Kumar Mohanasundaram',
      isLink: true,
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'https://maps.app.goo.gl/N4HDCuu4etybwZaF9',
      displayText: 'Location',
      isLink: true,
    },
  ];

  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-enhanced-primary mb-4">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full"></div>
        </div>

        {/* Profile + Intro */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
         {/* Left: Full-Container Image */}
<div className="glass-card p-0 overflow-hidden w-full h-full flex justify-center items-center">
  <div className="relative w-full h-[506px] rounded-2xl overflow-hidden">
    <img
      src={profilephoto}
      alt="Sanjeev Kumar.M"
      className="w-full object-cover"
    />
    <div className="absolute bottom-2 right-2 bg-blue-500/30 px-3 py-1 rounded-full text-xs text-white font-semibold backdrop-blur-sm">
      Professional
    </div>
  </div>
</div>


          {/* Right: Info */}
          <div className="glass-card p-8 space-y-6">
            <h3 className="text-3xl font-bold text-enhanced-secondary">Sanjeev Kumar Mohanasundaram</h3>
            <p className="text-lg text-enhanced-body font-semibold">MCA Graduate</p>
            <div className="flex gap-3">
              <span className="px-3 py-1 rounded-full bg-green-500/20 text-green-300 text-xs font-semibold">Available</span>
              <span className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-semibold">Remote</span>
            </div>
            <p className="text-enhanced-body leading-relaxed">
              I'm a builder at heart — turning bold ideas into digital reality. Whether it's architecting scalable apps or fine-tuning the smallest UI detail, I bring precision, curiosity, and a problem-solving mindset to everything I create.
            </p>
            <p className="text-enhanced-body leading-relaxed">
              From dynamic web apps to interactive user experiences, I believe tech should feel intuitive, perform seamlessly, and solve problems that matter.
            </p>
            <p className="text-enhanced-body leading-relaxed">
              My toolkit includes modern frameworks, fast iterations, and a mindset that thrives on innovation and impact.
            </p>
          </div>
        </div>

        {/* Contact Section */}
        <div className="glass-card p-8 mt-12">
          <h3 className="text-2xl font-semibold text-enhanced-secondary mb-6">Contact Information</h3>
          <div className="space-y-4">
            {contactInfo.map((item, index) => (
              <div
                key={index}
                className="flex items-center space-x-4 p-3 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300"
              >
                <div className="p-2 rounded-full bg-blue-500/20">
                  <item.icon className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <p className="text-sm text-enhanced-muted">{item.label}</p>
                  {item.isLink ? (
                    <a
                      href={item.value}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-300 hover:underline break-all font-bold"
                    >
                      {item.displayText || item.value}
                    </a>
                  ) : (
                    <p className="text-enhanced-body font-bold">{item.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
