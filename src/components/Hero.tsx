// import React, { useState, useEffect } from 'react';
// import { Download, Mail, ArrowDown, User } from 'lucide-react';

// const Hero = () => {
//   const [text, setText] = useState('');
//   const [isDeleting, setIsDeleting] = useState(false);
//   const [loopNum, setLoopNum] = useState(0);
//   const [typingSpeed, setTypingSpeed] = useState(150);

//   const words = ['Aspiring Developer', 'Problem Solver', 'Tech Enthusiast', 'MCA Graduate'];

//   useEffect(() => {
//     const handleTyping = () => {
//       const i = loopNum % words.length;
//       const fullText = words[i];

//       setText(
//         isDeleting
//           ? fullText.substring(0, text.length - 1)
//           : fullText.substring(0, text.length + 1)
//       );

//       setTypingSpeed(isDeleting ? 75 : 150);

//       if (!isDeleting && text === fullText) {
//         setTimeout(() => setIsDeleting(true), 1000);
//       } else if (isDeleting && text === '') {
//         setIsDeleting(false);
//         setLoopNum(loopNum + 1);
//       }
//     };

//     const timer = setTimeout(handleTyping, typingSpeed);
//     return () => clearTimeout(timer);
//   }, [text, isDeleting, loopNum, typingSpeed]);

//   return (
//     <section id="home" className="min-h-screen flex items-center justify-center relative px-4 py-20">
//       <div className="text-center space-y-8 relative z-10">
//         <div className="glass-card-hero p-8 md:p-12 max-w-4xl mx-auto">
//           <div className="flex justify-center mb-8">
//             <div className="relative">
//               <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-blue-400/20 to-purple-400/20 border-4 border-white/20 flex items-center justify-center backdrop-blur-sm">
//                 <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-white/10 flex items-center justify-center">
//                   <User className="w-12 h-12 md:w-16 md:h-16 text-white/70" />
//                 </div>
//               </div>
//               <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-400 rounded-full border-4 border-white/20 flex items-center justify-center">
//                 <div className="w-3 h-3 bg-green-300 rounded-full animate-pulse"></div>
//               </div>
//             </div>
//           </div>
//           <div className="space-y-6">
//             <h1 className="text-4xl md:text-6xl font-bold text-enhanced-primary mb-4">
//               Sanjeev Kumar.M
//             </h1>
//             <h2 className="text-xl md:text-2xl text-enhanced-secondary font-bold">
//               Master of Computer Applications
//             </h2>
//             <div className="h-12 flex items-center justify-center">
//               <p className="text-lg md:text-xl text-enhanced-body">
//                 {text}
//                 <span className="animate-pulse">|</span>
//               </p>
//             </div>
//             <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
//               <button className="glass-button-primary group">
//                 <Download className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
//                 Download Resume
//               </button>
//               <button className="glass-button-secondary group">
//                 <Mail className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
//                 Contact Me
//               </button>
//             </div>
//           </div>
//         </div>
        
//         <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
//           <ArrowDown className="w-6 h-6 text-white opacity-70" />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;

// import React, { useState, useEffect } from 'react';
// import { Download, Mail, ArrowDown } from 'lucide-react';
// import myPhoto from '../assets/profile.jpg'; // ✅ Your actual photo

// const Hero = () => {
//   const [text, setText] = useState('');
//   const [isDeleting, setIsDeleting] = useState(false);
//   const [loopNum, setLoopNum] = useState(0);
//   const [typingSpeed, setTypingSpeed] = useState(150);

//   const words = ['Aspiring Developer', 'Problem Solver', 'Tech Enthusiast', 'MCA Graduate'];

//   useEffect(() => {
//     const handleTyping = () => {
//       const i = loopNum % words.length;
//       const fullText = words[i];

//       setText(
//         isDeleting
//           ? fullText.substring(0, text.length - 1)
//           : fullText.substring(0, text.length + 1)
//       );

//       setTypingSpeed(isDeleting ? 75 : 150);

//       if (!isDeleting && text === fullText) {
//         setTimeout(() => setIsDeleting(true), 1000);
//       } else if (isDeleting && text === '') {
//         setIsDeleting(false);
//         setLoopNum(loopNum + 1);
//       }
//     };

//     const timer = setTimeout(handleTyping, typingSpeed);
//     return () => clearTimeout(timer);
//   }, [text, isDeleting, loopNum, typingSpeed]);

//   return (
//     <section id="home" className="min-h-screen flex items-center justify-center relative px-4 py-20">
//       <div className="text-center space-y-8 relative z-10">
//         <div className="glass-card-hero p-8 md:p-12 max-w-4xl mx-auto">
//           <div className="flex justify-center mb-8">
//             <div className="relative">
//               <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-blue-400/20 to-purple-400/20 border-4 border-white/20 flex items-center justify-center backdrop-blur-sm">
//                 <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-white/10 overflow-hidden">
//                   <img
//                     src={myPhoto}
//                     alt="Sanjeev Kumar"
//                     className="w-full h-full object-cover rounded-full"
//                   />
//                 </div>
//               </div>
//               <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-400 rounded-full border-4 border-white/20 flex items-center justify-center">
//                 <div className="w-3 h-3 bg-green-300 rounded-full animate-pulse"></div>
//               </div>
//             </div>
//           </div>

//           <div className="space-y-6">
//             <h1 className="text-4xl md:text-6xl font-bold text-enhanced-primary mb-4">
//               Sanjeev Kumar.M
//             </h1>
//             <h2 className="text-xl md:text-2xl text-enhanced-secondary font-bold">
//               Master of Computer Applications
//             </h2>
//             <div className="h-12 flex items-center justify-center">
//               <p className="text-lg md:text-xl text-enhanced-body">
//                 {text}
//                 <span className="animate-pulse">|</span>
//               </p>
//             </div>
//             <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
//               {/* <button className="glass-button-primary group">
//                 <Download className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
//                 Download Resume
//               </button> */}
//               <button className="glass-button-secondary group">
                
//                 <Mail className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" 
//                 />
//                 Contact Me
//               </button>
//             </div>
//           </div>
//         </div>

//         <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
//           <ArrowDown className="w-6 h-6 text-white opacity-70" />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;

import React, { useState, useEffect } from 'react';
import { Download, Mail, ArrowDown } from 'lucide-react';
import myPhoto from '../assets/profile.jpg'; // ✅ Replace with your correct path

const Hero = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const words = ['Aspiring Developer', 'Problem Solver', 'Tech Enthusiast', 'MCA Graduate'];

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % words.length;
      const fullText = words[i];

      setText(
        isDeleting
          ? fullText.substring(0, text.length - 1)
          : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 75 : 150);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed]);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative px-4 py-20">
      <div className="text-center space-y-8 relative z-10">
        <div className="glass-card-hero p-8 md:p-12 max-w-4xl mx-auto">
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-blue-400/20 to-purple-400/20 border-4 border-white/20 flex items-center justify-center backdrop-blur-sm">
                <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-white/10 overflow-hidden">
                  <img
                    src={myPhoto}
                    alt="Sanjeev Kumar"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </div>
              <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-400 rounded-full border-4 border-white/20 flex items-center justify-center">
                <div className="w-3 h-3 bg-green-300 rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold text-enhanced-primary mb-4">
              Sanjeev Kumar Mohanasundaram
            </h1>
            <h2 className="text-xl md:text-2xl text-enhanced-secondary font-bold">
              Master of Computer Applications
            </h2>
            <div className="h-12 flex items-center justify-center">
              <p className="text-lg md:text-xl text-enhanced-body">
                {text}
                <span className="animate-pulse">|</span>
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              {/* Download Button (Optional) */}
              {/* <a
                href="/path-to-your-resume.pdf"
                download
                className="glass-button-primary group inline-flex items-center justify-center"
              >
                <Download className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Download Resume
              </a> */}

              {/* Contact Me - Mail Button */}
              <a
                href="mailto:sanjay1633410@gmail.com?subject=Hello&body=Hi Sanjeev, I saw your portfolio..."
                className="glass-button-secondary group inline-flex items-center justify-center"
              >
                <Mail className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Contact Me
              </a>
            </div>
          </div>
        </div>

        {/* Arrow Down Icon */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-white opacity-70" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
