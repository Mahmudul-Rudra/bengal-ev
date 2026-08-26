// "use client";
// import { motion } from "framer-motion";
// import { useState } from "react";

// // Icons remain the same...
// const ContactIcon = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-8 h-8 text-bengal-green"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>;
// const AnalysisIcon = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-8 h-8 text-bengal-green"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /></svg>;
// const PlanningIcon = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-8 h-8 text-bengal-green"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>;
// const DeliveryIcon = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-8 h-8 text-bengal-green"><rect x="1" y="3" width="15" height="13" /><polygon points="16 8 20 8 23 11 23 16 16 16 16 8" /><circle cx="5.5" cy="18.5" r="2.5" /><circle cx="18.5" cy="18.5" r="2.5" /></svg>;
// const AutoRickshawIcon = () => <svg viewBox="0 0 24 24" className="w-10 h-10 text-bengal-green" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="8" width="12" height="8" rx="1" /><polygon points="15 8 20 11 20 16 15 16" /><circle cx="7" cy="18" r="2" /><circle cx="17" cy="18" r="2" /></svg>;

// const steps = [
//   { title: "Contact Us", icon: <ContactIcon /> },
//   { title: "Project Analysis", icon: <AnalysisIcon /> },
//   { title: "Planning", icon: <PlanningIcon /> },
//   { title: "Delivery", icon: <DeliveryIcon /> },
// ];

// export function HowItWorks() {
//   const [activeStep, setActiveStep] = useState(0);
//   const path = "M 50 50 Q 250 10 500 50 T 950 50";

//   return (
//     <section className="py-12 bg-white px-6 overflow-hidden">
//       <div className="max-w-6xl mx-auto">
//         <h2 className="text-4xl font-bold text-center mb-16 text-bengal-dark">How It Works</h2>
        
//         {/* Only show path animation on Desktop */}
//         <div className="relative hidden md:block h-[180px]">
//           <svg className="absolute top-20 left-0 w-full h-32" viewBox="0 0 1000 100" preserveAspectRatio="none">
//             <path d={path} fill="none" stroke="#d1d5db" strokeWidth="2" strokeDasharray="8 8" />
//           </svg>

//           <motion.div
//             className="absolute z-10"
//             initial={{ offsetDistance: "0%" }}
//             animate={{ offsetDistance: "100%" }}
//             transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
//             style={{ offsetPath: `path("${path}")`, top: "72px" }}
//             onUpdate={(latest) => {
//               const pos = parseFloat(latest.offsetDistance as string);
//               if (pos > 75) setActiveStep(3);
//               else if (pos > 50) setActiveStep(2);
//               else if (pos > 25) setActiveStep(1);
//               else setActiveStep(0);
//             }}
//           >
//             <AutoRickshawIcon />
//           </motion.div>
//         </div>

//         {/* Responsive Cards: Grid on desktop, stack on mobile */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-4">
//           {steps.map((step, i) => (
//             <div key={i} className="flex flex-col items-center">
//               <div className={`w-6 h-6 rounded-full border-4 border-white shadow-lg mb-8 transition-all ${activeStep === i ? "bg-bengal-green scale-125" : "bg-gray-300"}`} />
//               <div className="text-center p-6 border border-gray-100 rounded-3xl bg-white shadow-sm w-full h-full">
//                 <div className="w-16 h-16 bg-green-50 rounded-2xl flex items-center justify-center mx-auto mb-4">{step.icon}</div>
//                 <h3 className="font-bold text-bengal-dark">{step.title}</h3>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";
import { motion } from "framer-motion";
import { useState } from "react";

// Optimized Icons
const ContactIcon = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-8 h-8 md:w-10 md:h-10 text-bengal-green"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>;
const AnalysisIcon = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-8 h-8 md:w-10 md:h-10 text-bengal-green"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /></svg>;
const PlanningIcon = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-8 h-8 md:w-10 md:h-10 text-bengal-green"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>;
const DeliveryIcon = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-8 h-8 md:w-10 md:h-10 text-bengal-green"><rect x="1" y="3" width="15" height="13" /><polygon points="16 8 20 8 23 11 23 16 16 16 16 8" /><circle cx="5.5" cy="18.5" r="2.5" /><circle cx="18.5" cy="18.5" r="2.5" /></svg>;
const AutoRickshawIcon = () => <svg viewBox="0 0 24 24" className="w-10 h-10 md:w-14 md:h-14 text-bengal-green" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="8" width="12" height="8" rx="1" /><polygon points="15 8 20 11 20 16 15 16" /><circle cx="7" cy="18" r="2" /><circle cx="17" cy="18" r="2" /></svg>;

const steps = [
  { title: "Contact Us", icon: <ContactIcon /> },
  { title: "Project Analysis", icon: <AnalysisIcon /> },
  { title: "Planning", icon: <PlanningIcon /> },
  { title: "Delivery", icon: <DeliveryIcon /> },
];

export function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0);
  const path = "M 50 50 Q 250 10 500 50 T 950 50";

  return (
    <section className="py-20 bg-white px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-20 text-bengal-dark">How It Works</h2>
        
        {/* Animated Path Section (Desktop Only) */}
        <div className="relative hidden md:block h-[180px]">
          <svg className="absolute top-20 left-0 w-full h-32" viewBox="0 0 1000 100" preserveAspectRatio="none">
            <path d={path} fill="none" stroke="#e5e7eb" strokeWidth="3" strokeDasharray="12 12" />
          </svg>

          <motion.div
            className="absolute z-10"
            initial={{ offsetDistance: "0%" }}
            animate={{ offsetDistance: "100%" }}
            transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
            style={{ offsetPath: `path("${path}")`, top: "50px" }}
            onUpdate={(latest) => {
              const pos = parseFloat(latest.offsetDistance as string);
              if (pos > 75) setActiveStep(3);
              else if (pos > 50) setActiveStep(2);
              else if (pos > 25) setActiveStep(1);
              else setActiveStep(0);
            }}
          >
            <AutoRickshawIcon />
          </motion.div>
        </div>

        {/* Responsive Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-4">
          {steps.map((step, i) => (
            <div key={i} className="flex flex-col items-center">
              {/* Dot Indicator */}
              <div className={`w-4 h-4 rounded-full mb-8 transition-all duration-300 ${activeStep === i ? "bg-bengal-green scale-150 shadow-lg" : "bg-gray-300"}`} />
              
              {/* Card Container - Increased padding and size */}
              <div className="text-center p-8 md:p-10 border border-gray-100 rounded-[2rem] bg-white shadow-sm hover:shadow-xl transition-all w-full h-full">
                {/* Icon Container - Scaled for PC/Laptop */}
                <div className="w-20 h-20 md:w-24 md:h-24 bg-green-50 rounded-3xl flex items-center justify-center mx-auto mb-8">
                  {step.icon}
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-bengal-dark">{step.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}