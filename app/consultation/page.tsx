// /* eslint-disable @next/next/no-img-element */
// "use client";
// import { useState } from "react";
// import {
//   ArrowRight,
//   ArrowLeft,
//   ChevronLeft,
//   ChevronRight,
//   Clock,
//   MapPin,
//   Globe,
//   CheckCircle2,
//   Shield,
//   Award,
//   Users,
//   Building2,
//   ChevronDown,
//   Phone as PhoneIcon,
// } from "lucide-react";
// // import logo from "figma:asset/58999c323b4341362baed6ec5f1b9d3f7db35c54.png";

// export default function ConsultationPage() {
//   const [currentStep, setCurrentStep] = useState(1);
//   const [selectedDuration, setSelectedDuration] = useState("30min");
//   const [selectedDate, setSelectedDate] = useState<Date | null>(null);
//   const [selectedTime, setSelectedTime] = useState<string | null>(null);
//   const [meetingType, setMeetingType] = useState("online");
//   const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

//   const [formData, setFormData] = useState({
//     firstName: "",
//     email: "",
//     phone: "",
//     website: "",
//     service: "",
//     notes: "",
//     agreePolicy: false,
//   });

//   const steps = [
//     {
//       number: 1,
//       label: "Choose Time Slot",
//       active: currentStep >= 1,
//       completed: currentStep > 1,
//     },
//     {
//       number: 2,
//       label: "Your Information",
//       active: currentStep >= 2,
//       completed: currentStep > 2,
//     },
//     {
//       number: 3,
//       label: "Confirmation",
//       active: currentStep >= 3,
//       completed: false,
//     },
//   ];

//   const timeSlots = [
//     "09:00 AM",
//     "09:30 AM",
//     "10:00 AM",
//     "10:30 AM",
//     "11:00 AM",
//     "11:30 AM",
//     "12:00 PM",
//     "12:30 PM",
//     "02:00 PM",
//     "02:30 PM",
//     "03:00 PM",
//     "03:30 PM",
//     "04:00 PM",
//     "04:30 PM",
//     "05:00 PM",
//   ];

//   const services = [
//     "Facebook Marketing & Ads Management",
//     "Web Design",
//     "Web Development",
//     "UI/UX Design",
//     "Brand Identity & Creative Design",
//     "Software Development",
//     "Mobile App Development",
//   ];

//   const whyCards = [
//     {
//       icon: Shield,
//       title: "Meta Business Partner",
//       description:
//         "Official Meta verified partner for digital marketing solutions.",
//     },
//     {
//       icon: Award,
//       title: "Verified Tech Provider",
//       description:
//         "Certified technology partner delivering enterprise-grade solutions.",
//     },
//     {
//       icon: Users,
//       title: "Expert Team",
//       description:
//         "10+ years combined experience in digital marketing and development.",
//     },
//     {
//       icon: Building2,
//       title: "UK-Based Registered Company",
//       description: "Registered and operating from London, United Kingdom.",
//     },
//   ];

//   const faqs = [
//     {
//       q: "How long is the review time?",
//       a: "Our team typically reviews consultation requests within 24-48 hours during business days.",
//     },
//     {
//       q: "Is the consultation free?",
//       a: "Yes, the initial consultation is completely free with no obligations.",
//     },
//     {
//       q: "What if my time zone is different?",
//       a: "Our system automatically detects your time zone and displays available slots accordingly.",
//     },
//     {
//       q: "Can I reschedule?",
//       a: "Yes, you can reschedule by contacting our support team at least 24 hours before the scheduled time.",
//     },
//     {
//       q: "What should I prepare for the consultation?",
//       a: "Please have your business goals, project requirements, and any relevant materials ready to discuss.",
//     },
//   ];

//   const handleNextStep = () => {
//     if (currentStep === 1 && selectedDate && selectedTime) {
//       setCurrentStep(2);
//     } else if (currentStep === 2 && validateForm()) {
//       setCurrentStep(3);
//     }
//   };

//   const validateForm = () => {
//     return (
//       formData.firstName &&
//       formData.email &&
//       formData.phone &&
//       formData.agreePolicy
//     );
//   };

//   const getDaysInMonth = (date: Date) => {
//     const year = date.getFullYear();
//     const month = date.getMonth();
//     const firstDay = new Date(year, month, 1);
//     const lastDay = new Date(year, month + 1, 0);
//     const days = [];

//     for (let i = 0; i < firstDay.getDay(); i++) {
//       days.push(null);
//     }

//     for (let i = 1; i <= lastDay.getDate(); i++) {
//       days.push(new Date(year, month, i));
//     }

//     return days;
//   };

//   const [currentMonth, setCurrentMonth] = useState(new Date());
//   const days = getDaysInMonth(currentMonth);

//   // Helper functions for date/time logic
//   const today = new Date();
//   today.setHours(0, 0, 0, 0);

//   const isCurrentMonth = () => {
//     return (
//       currentMonth.getMonth() === new Date().getMonth() &&
//       currentMonth.getFullYear() === new Date().getFullYear()
//     );
//   };

//   const isPastDate = (date: Date | null) => {
//     if (!date) return false;
//     const checkDate = new Date(date);
//     checkDate.setHours(0, 0, 0, 0);
//     return checkDate < today;
//   };

//   const isToday = (date: Date | null) => {
//     if (!date) return false;
//     const checkDate = new Date(date);
//     checkDate.setHours(0, 0, 0, 0);
//     return checkDate.getTime() === today.getTime();
//   };

//   const isTimeSlotDisabled = (timeSlot: string) => {
//     if (!selectedDate) return false;

//     // Parse the time slot
//     const [time, period] = timeSlot.split(" ");
//     const [hours, minutes] = time.split(":").map(Number);
//     let slotHours = hours;

//     // Convert to 24-hour format
//     if (period === "PM" && hours !== 12) {
//       slotHours = hours + 12;
//     } else if (period === "AM" && hours === 12) {
//       slotHours = 0;
//     }

//     const slotTime = new Date(selectedDate);
//     slotTime.setHours(slotHours, minutes, 0, 0);

//     // If selected date is today
//     if (isToday(selectedDate)) {
//       const now = new Date();
//       const oneHourFromNow = new Date(now.getTime() + 60 * 60 * 1000);

//       // Disable if slot is earlier than 1 hour from now
//       return slotTime <= oneHourFromNow;
//     }

//     // For future dates, all slots are enabled
//     return false;
//   };

//   return (
//     <div className="consultation-page" style={{ backgroundColor: "#FFFFFF" }}>
//       {/* PAGE HEADER */}
//       <section
//         className="page-header animate-fade-in consultation-page-header"
//         style={{
//           padding: "100px 0 60px",
//           background: "linear-gradient(180deg, #FFFFFF 0%, #F7FBFF 100%)",
//         }}
//       >
//         <div className="consultation-header-container max-w-[1440px] mx-auto px-12">
//           <div className="text-center">
//             <h1
//               className="consultation-page-title"
//               style={{
//                 fontFamily: "Inter, sans-serif",
//                 fontSize: "52px",
//                 fontWeight: 700,
//                 color: "#151561",
//                 letterSpacing: "-0.02em",
//                 marginBottom: "20px",
//               }}
//             >
//               Book a Consultation
//             </h1>
//             <p
//               className="consultation-page-subtitle"
//               style={{
//                 fontFamily: "Inter, sans-serif",
//                 fontSize: "19px",
//                 fontWeight: 400,
//                 color: "#505050",
//                 lineHeight: "1.7",
//                 maxWidth: "700px",
//                 margin: "0 auto",
//               }}
//             >
//               Choose a suitable time, complete your details, and our team will
//               review and confirm your consultation request.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* STEP INDICATOR */}
//       <section
//         className="step-indicator consultation-step-indicator"
//         style={{
//           padding: "40px 0",
//           backgroundColor: "#FFFFFF",
//           borderBottom: "1px solid rgba(0, 0, 0, 0.06)",
//         }}
//       >
//         <div className="consultation-step-container max-w-[900px] mx-auto px-12">
//           <div className="consultation-steps-wrapper flex items-center justify-between">
//             {steps.map((step, index) => (
//               <div
//                 key={step.number}
//                 className="consultation-step-item flex items-center"
//                 style={{ flex: 1 }}
//               >
//                 <div className="flex items-center gap-3">
//                   <div
//                     className="step-circle"
//                     style={{
//                       width: "44px",
//                       height: "44px",
//                       borderRadius: "50%",
//                       background: step.active
//                         ? "linear-gradient(135deg, #FF0000 0%, #FF3333 100%)"
//                         : "rgba(21, 21, 97, 0.1)",
//                       display: "flex",
//                       alignItems: "center",
//                       justifyContent: "center",
//                       transition: "all 0.4s ease",
//                       boxShadow: step.active
//                         ? "0 4px 12px rgba(255, 0, 0, 0.25)"
//                         : "none",
//                     }}
//                   >
//                     {step.completed ? (
//                       <CheckCircle2 size={22} color="#FFFFFF" />
//                     ) : (
//                       <span
//                         style={{
//                           fontFamily: "Inter, sans-serif",
//                           fontSize: "16px",
//                           fontWeight: 600,
//                           color: step.active ? "#FFFFFF" : "#151561",
//                         }}
//                       >
//                         {step.number}
//                       </span>
//                     )}
//                   </div>
//                   <span
//                     className="step-label"
//                     style={{
//                       fontFamily: "Inter, sans-serif",
//                       fontSize: "16px",
//                       fontWeight: step.active ? 600 : 400,
//                       color: step.active ? "#151561" : "#808080",
//                     }}
//                   >
//                     {step.label}
//                   </span>
//                 </div>
//                 {index < steps.length - 1 && (
//                   <div
//                     className="step-divider"
//                     style={{
//                       flex: 1,
//                       height: "2px",
//                       background: step.completed
//                         ? "linear-gradient(90deg, #FF0000 0%, #FF3333 100%)"
//                         : "rgba(21, 21, 97, 0.1)",
//                       margin: "0 20px",
//                       transition: "all 0.4s ease",
//                     }}
//                   />
//                 )}
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* STEP CONTENT */}
//       <section
//         className="step-content"
//         style={{
//           padding: "80px 0",
//           background: "linear-gradient(180deg, #FFFFFF 0%, #F7FBFF 100%)",
//           minHeight: "600px",
//         }}
//       >
//         <div className="max-w-[1440px] mx-auto px-12">
//           {/* STEP 1 — BOOK YOUR SLOT */}
//           {currentStep === 1 && (
//             <div
//               className="step-1-container consultation-step-1-container animate-fade-in-up"
//               style={{
//                 background: "#FFFFFF",
//                 borderRadius: "32px",
//                 padding: "60px",
//                 boxShadow: "0 8px 32px rgba(21, 21, 97, 0.08)",
//                 border: "1px solid rgba(0, 0, 0, 0.06)",
//               }}
//             >
//               <div className="consultation-two-col-grid grid grid-cols-2 gap-12">
//                 {/* LEFT SIDE — Consultation Type Panel */}
//                 <div
//                   className="consultation-left-panel"
//                   style={{
//                     height: "100%",
//                   }}
//                 >
//                   <div
//                     className="consultation-details-card"
//                     style={{
//                       width: "100%",
//                       height: "100%",
//                       padding: "48px",
//                       background:
//                         "linear-gradient(165deg, rgba(255, 0, 0, 0.04) 0%, #FFFFFF 45%, rgba(21, 21, 97, 0.06) 100%)",
//                       borderRadius: "24px",
//                       position: "relative",
//                       overflow: "hidden",
//                       boxShadow:
//                         "0 12px 40px rgba(21, 21, 97, 0.08), inset 0 2px 16px rgba(21, 21, 97, 0.04)",
//                       border: "1px solid rgba(255, 0, 0, 0.08)",
//                       display: "flex",
//                       alignItems: "center",
//                       justifyContent: "center",
//                     }}
//                   >
//                     {/* Abstract Background Shape - Top Right Red Glow */}
//                     <div
//                       style={{
//                         position: "absolute",
//                         top: "-80px",
//                         right: "-80px",
//                         width: "280px",
//                         height: "280px",
//                         background:
//                           "radial-gradient(circle, rgba(255, 0, 0, 0.06) 0%, transparent 70%)",
//                         borderRadius: "50%",
//                         pointerEvents: "none",
//                       }}
//                     />

//                     {/* Abstract Background Shape - Bottom Left Navy Glow */}
//                     <div
//                       style={{
//                         position: "absolute",
//                         bottom: "-100px",
//                         left: "-100px",
//                         width: "320px",
//                         height: "320px",
//                         background:
//                           "radial-gradient(circle, rgba(21, 21, 97, 0.05) 0%, transparent 70%)",
//                         borderRadius: "50%",
//                         pointerEvents: "none",
//                       }}
//                     />

//                     <div style={{ position: "relative", zIndex: 1 }}>
//                       {/* Logo */}
//                       <div style={{ marginBottom: "28px" }}>
//                         {/* <img
//                           src={logo.src}
//                           alt="Optichore"
//                           style={{
//                             width: "120px",
//                             height: "auto",
//                           }}
//                         /> */}
//                       </div>

//                       {/* Micro Header */}
//                       <div
//                         style={{
//                           fontFamily: "Inter, sans-serif",
//                           fontSize: "14px",
//                           fontWeight: 600,
//                           color: "#8A8A8A",
//                           textTransform: "uppercase",
//                           letterSpacing: "2px",
//                           marginBottom: "14px",
//                         }}
//                       >
//                         Book a Free Consultation
//                       </div>

//                       <h3
//                         style={{
//                           fontFamily: "Inter, sans-serif",
//                           fontSize: "40px",
//                           fontWeight: 800,
//                           color: "#11125A",
//                           marginBottom: "16px",
//                           letterSpacing: "-0.02em",
//                           lineHeight: "1.2",
//                         }}
//                       >
//                         {selectedDuration === "30min" ? "30 Minutes" : "1 Hour"}{" "}
//                         Consultation
//                       </h3>

//                       {/* Premium Sub-headline */}
//                       <p
//                         style={{
//                           fontFamily: "Inter, sans-serif",
//                           fontSize: "17px",
//                           fontWeight: 400,
//                           color: "#555555",
//                           lineHeight: "1.65",
//                           marginBottom: "32px",
//                         }}
//                       >
//                         Speak with our certified experts to understand how
//                         Optichore can support your business growth.
//                       </p>

//                       {/* Duration Toggle - Premium */}
//                       <div
//                         className="duration-toggle-container"
//                         style={{
//                           display: "inline-flex",
//                           background: "rgba(21, 21, 97, 0.08)",
//                           borderRadius: "60px",
//                           padding: "6px",
//                           marginBottom: "32px",
//                           boxShadow: "0 2px 8px rgba(21, 21, 97, 0.08)",
//                         }}
//                       >
//                         <button
//                           onClick={() => setSelectedDuration("30min")}
//                           className="duration-button"
//                           style={{
//                             fontFamily: "Inter, sans-serif",
//                             fontSize: "15px",
//                             fontWeight: 600,
//                             color:
//                               selectedDuration === "30min"
//                                 ? "#FFFFFF"
//                                 : "#151561",
//                             background:
//                               selectedDuration === "30min"
//                                 ? "linear-gradient(135deg, #FF0000 0%, #FF3333 100%)"
//                                 : "transparent",
//                             padding: "13px 32px",
//                             borderRadius: "60px",
//                             border: "none",
//                             cursor: "pointer",
//                             transition:
//                               "all 0.35s cubic-bezier(0.4, 0, 0.2, 1)",
//                             boxShadow:
//                               selectedDuration === "30min"
//                                 ? "0 4px 12px rgba(255, 0, 0, 0.25)"
//                                 : "none",
//                           }}
//                           onMouseEnter={(e) => {
//                             if (selectedDuration !== "30min") {
//                               e.currentTarget.style.background =
//                                 "rgba(21, 21, 97, 0.04)";
//                             }
//                           }}
//                           onMouseLeave={(e) => {
//                             if (selectedDuration !== "30min") {
//                               e.currentTarget.style.background = "transparent";
//                             }
//                           }}
//                         >
//                           30 Minutes
//                         </button>
//                         <button
//                           onClick={() => setSelectedDuration("1hour")}
//                           className="duration-button"
//                           style={{
//                             fontFamily: "Inter, sans-serif",
//                             fontSize: "15px",
//                             fontWeight: 600,
//                             color:
//                               selectedDuration === "1hour"
//                                 ? "#FFFFFF"
//                                 : "#151561",
//                             background:
//                               selectedDuration === "1hour"
//                                 ? "linear-gradient(135deg, #FF0000 0%, #FF3333 100%)"
//                                 : "transparent",
//                             padding: "13px 32px",
//                             borderRadius: "60px",
//                             border: "none",
//                             cursor: "pointer",
//                             transition:
//                               "all 0.35s cubic-bezier(0.4, 0, 0.2, 1)",
//                             boxShadow:
//                               selectedDuration === "1hour"
//                                 ? "0 4px 12px rgba(255, 0, 0, 0.25)"
//                                 : "none",
//                           }}
//                           onMouseEnter={(e) => {
//                             if (selectedDuration !== "1hour") {
//                               e.currentTarget.style.background =
//                                 "rgba(21, 21, 97, 0.04)";
//                             }
//                           }}
//                           onMouseLeave={(e) => {
//                             if (selectedDuration !== "1hour") {
//                               e.currentTarget.style.background = "transparent";
//                             }
//                           }}
//                         >
//                           1 Hour
//                         </button>
//                       </div>

//                       {/* Consultation Summary - Minimal */}
//                       {selectedDate && selectedTime && (
//                         <div
//                           style={{
//                             marginTop: "32px",
//                             padding: "22px",
//                             background: "rgba(255, 255, 255, 0.7)",
//                             borderRadius: "16px",
//                             border: "1px solid rgba(21, 21, 97, 0.08)",
//                             boxShadow: "0 2px 8px rgba(21, 21, 97, 0.04)",
//                           }}
//                         >
//                           <h4
//                             style={{
//                               fontFamily: "Inter, sans-serif",
//                               fontSize: "14px",
//                               fontWeight: 700,
//                               color: "#151561",
//                               marginBottom: "16px",
//                               letterSpacing: "-0.01em",
//                             }}
//                           >
//                             Consultation Summary
//                           </h4>

//                           {/* Duration */}
//                           <div style={{ marginBottom: "14px" }}>
//                             <div
//                               style={{
//                                 display: "flex",
//                                 alignItems: "center",
//                                 gap: "8px",
//                                 marginBottom: "4px",
//                               }}
//                             >
//                               <Clock size={14} color="#FF0000" />
//                               <span
//                                 style={{
//                                   fontFamily: "Inter, sans-serif",
//                                   fontSize: "12px",
//                                   fontWeight: 600,
//                                   color: "#808080",
//                                   textTransform: "uppercase",
//                                   letterSpacing: "0.5px",
//                                 }}
//                               >
//                                 Duration
//                               </span>
//                             </div>
//                             <div
//                               style={{
//                                 fontFamily: "Inter, sans-serif",
//                                 fontSize: "14px",
//                                 fontWeight: 600,
//                                 color: "#151561",
//                                 paddingLeft: "22px",
//                               }}
//                             >
//                               {selectedDuration === "30min"
//                                 ? "30 Minutes"
//                                 : "1 Hour"}
//                             </div>
//                           </div>

//                           {/* Divider */}
//                           <div
//                             style={{
//                               height: "1px",
//                               background: "rgba(21, 21, 97, 0.06)",
//                               margin: "14px 0",
//                             }}
//                           />

//                           {/* Date */}
//                           <div style={{ marginBottom: "14px" }}>
//                             <div
//                               style={{
//                                 display: "flex",
//                                 alignItems: "center",
//                                 gap: "8px",
//                                 marginBottom: "4px",
//                               }}
//                             >
//                               <Clock size={14} color="#FF0000" />
//                               <span
//                                 style={{
//                                   fontFamily: "Inter, sans-serif",
//                                   fontSize: "12px",
//                                   fontWeight: 600,
//                                   color: "#808080",
//                                   textTransform: "uppercase",
//                                   letterSpacing: "0.5px",
//                                 }}
//                               >
//                                 Date & Time
//                               </span>
//                             </div>
//                             <div
//                               style={{
//                                 fontFamily: "Inter, sans-serif",
//                                 fontSize: "14px",
//                                 fontWeight: 600,
//                                 color: "#151561",
//                                 paddingLeft: "22px",
//                                 lineHeight: "1.5",
//                               }}
//                             >
//                               {selectedDate.toLocaleDateString("en-US", {
//                                 month: "short",
//                                 day: "numeric",
//                                 year: "numeric",
//                               })}
//                               <br />
//                               <span
//                                 style={{ color: "#505050", fontWeight: 500 }}
//                               >
//                                 {selectedTime}
//                               </span>
//                             </div>
//                           </div>

//                           {/* Divider */}
//                           <div
//                             style={{
//                               height: "1px",
//                               background: "rgba(21, 21, 97, 0.06)",
//                               margin: "14px 0",
//                             }}
//                           />

//                           {/* Timezone */}
//                           <div>
//                             <div
//                               style={{
//                                 display: "flex",
//                                 alignItems: "center",
//                                 gap: "8px",
//                                 marginBottom: "4px",
//                               }}
//                             >
//                               <MapPin size={14} color="#FF0000" />
//                               <span
//                                 style={{
//                                   fontFamily: "Inter, sans-serif",
//                                   fontSize: "12px",
//                                   fontWeight: 600,
//                                   color: "#808080",
//                                   textTransform: "uppercase",
//                                   letterSpacing: "0.5px",
//                                 }}
//                               >
//                                 Timezone
//                               </span>
//                             </div>
//                             <div
//                               style={{
//                                 fontFamily: "Inter, sans-serif",
//                                 fontSize: "14px",
//                                 fontWeight: 600,
//                                 color: "#151561",
//                                 paddingLeft: "22px",
//                               }}
//                             >
//                               {Intl.DateTimeFormat().resolvedOptions().timeZone}
//                               <span
//                                 style={{
//                                   display: "block",
//                                   fontSize: "12px",
//                                   fontWeight: 400,
//                                   color: "#808080",
//                                   marginTop: "2px",
//                                 }}
//                               >
//                                 Auto-detected
//                               </span>
//                             </div>
//                           </div>
//                         </div>
//                       )}
//                     </div>
//                   </div>
//                 </div>

//                 {/* RIGHT SIDE — Calendar + Time Selector */}
//                 <div className="consultation-right-panel">
//                   {/* Calendar */}
//                   <div
//                     className="consultation-calendar"
//                     style={{
//                       background: "#FFFFFF",
//                       borderRadius: "20px",
//                       padding: "24px",
//                       marginBottom: "24px",
//                       border: "1px solid rgba(0, 0, 0, 0.06)",
//                     }}
//                   >
//                     <div
//                       className="calendar-header"
//                       style={{
//                         display: "flex",
//                         alignItems: "center",
//                         justifyContent: "space-between",
//                         marginBottom: "24px",
//                       }}
//                     >
//                       <h4
//                         className="calendar-month-title"
//                         style={{
//                           fontFamily: "Inter, sans-serif",
//                           fontSize: "18px",
//                           fontWeight: 600,
//                           color: "#151561",
//                         }}
//                       >
//                         {currentMonth.toLocaleDateString("en-US", {
//                           month: "long",
//                           year: "numeric",
//                         })}
//                       </h4>
//                       <div
//                         className="calendar-nav-buttons"
//                         style={{ display: "flex", gap: "8px" }}
//                       >
//                         <button
//                           className="calendar-nav-btn"
//                           onClick={() =>
//                             !isCurrentMonth() &&
//                             setCurrentMonth(
//                               new Date(
//                                 currentMonth.getFullYear(),
//                                 currentMonth.getMonth() - 1
//                               )
//                             )
//                           }
//                           disabled={isCurrentMonth()}
//                           style={{
//                             width: "36px",
//                             height: "36px",
//                             borderRadius: "50%",
//                             border: "1px solid rgba(0, 0, 0, 0.1)",
//                             background: isCurrentMonth()
//                               ? "rgba(0, 0, 0, 0.05)"
//                               : "#FFFFFF",
//                             cursor: isCurrentMonth()
//                               ? "not-allowed"
//                               : "pointer",
//                             display: "flex",
//                             alignItems: "center",
//                             justifyContent: "center",
//                             opacity: isCurrentMonth() ? 0.4 : 1,
//                           }}
//                         >
//                           <ChevronLeft size={18} color="#151561" />
//                         </button>
//                         <button
//                           className="calendar-nav-btn"
//                           onClick={() =>
//                             setCurrentMonth(
//                               new Date(
//                                 currentMonth.getFullYear(),
//                                 currentMonth.getMonth() + 1
//                               )
//                             )
//                           }
//                           style={{
//                             width: "36px",
//                             height: "36px",
//                             borderRadius: "50%",
//                             border: "1px solid rgba(0, 0, 0, 0.1)",
//                             background: "#FFFFFF",
//                             cursor: "pointer",
//                             display: "flex",
//                             alignItems: "center",
//                             justifyContent: "center",
//                           }}
//                         >
//                           <ChevronRight size={18} color="#151561" />
//                         </button>
//                       </div>
//                     </div>

//                     {/* Calendar Grid */}
//                     <div
//                       className="calendar-grid"
//                       style={{
//                         display: "grid",
//                         gridTemplateColumns: "repeat(7, 1fr)",
//                         gap: "8px",
//                       }}
//                     >
//                       {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(
//                         (day) => (
//                           <div
//                             key={day}
//                             style={{
//                               fontFamily: "Inter, sans-serif",
//                               fontSize: "13px",
//                               fontWeight: 600,
//                               color: "#808080",
//                               textAlign: "center",
//                               padding: "8px 0",
//                             }}
//                           >
//                             {day}
//                           </div>
//                         )
//                       )}
//                       {days.map((day, index) => {
//                         const isDisabled = !day || isPastDate(day);
//                         const isSelected =
//                           day && selectedDate?.getTime() === day.getTime();

//                         return (
//                           <button
//                             key={index}
//                             onClick={() =>
//                               day && !isPastDate(day) && setSelectedDate(day)
//                             }
//                             disabled={isDisabled}
//                             style={{
//                               fontFamily: "Inter, sans-serif",
//                               fontSize: "14px",
//                               fontWeight: 500,
//                               color: isSelected ? "#FFFFFF" : "#151561",
//                               background: isSelected
//                                 ? "linear-gradient(135deg, #FF0000 0%, #FF3333 100%)"
//                                 : day
//                                 ? "#FFFFFF"
//                                 : "transparent",
//                               border: day
//                                 ? "1px solid rgba(0, 0, 0, 0.06)"
//                                 : "none",
//                               borderRadius: "12px",
//                               padding: "12px",
//                               cursor: isDisabled ? "not-allowed" : "pointer",
//                               opacity: isDisabled ? 0.4 : 1,
//                               transition: "all 0.3s ease",
//                             }}
//                           >
//                             {day?.getDate()}
//                           </button>
//                         );
//                       })}
//                     </div>
//                   </div>

//                   {/* Time Slots */}
//                   {selectedDate && (
//                     <div
//                       className="animate-fade-in-up"
//                       style={{
//                         background: "#FFFFFF",
//                         borderRadius: "20px",
//                         padding: "24px",
//                         marginBottom: "24px",
//                         border: "1px solid rgba(0, 0, 0, 0.06)",
//                       }}
//                     >
//                       <h4
//                         style={{
//                           fontFamily: "Inter, sans-serif",
//                           fontSize: "16px",
//                           fontWeight: 600,
//                           color: "#151561",
//                           marginBottom: "16px",
//                         }}
//                       >
//                         Available Time Slots
//                       </h4>
//                       <div
//                         style={{
//                           display: "grid",
//                           gridTemplateColumns: "repeat(3, 1fr)",
//                           gap: "10px",
//                           maxHeight: "240px",
//                           overflowY: "auto",
//                         }}
//                       >
//                         {timeSlots.map((time) => {
//                           const disabled = isTimeSlotDisabled(time);
//                           const isSelected = selectedTime === time;

//                           return (
//                             <button
//                               key={time}
//                               onClick={() => !disabled && setSelectedTime(time)}
//                               disabled={disabled}
//                               style={{
//                                 fontFamily: "Inter, sans-serif",
//                                 fontSize: "14px",
//                                 fontWeight: 500,
//                                 color: isSelected ? "#FFFFFF" : "#151561",
//                                 background: isSelected
//                                   ? "linear-gradient(135deg, #151561 0%, #3434A0 100%)"
//                                   : "#FFFFFF",
//                                 border: "1px solid rgba(0, 0, 0, 0.1)",
//                                 borderRadius: "12px",
//                                 padding: "12px",
//                                 cursor: disabled ? "not-allowed" : "pointer",
//                                 opacity: disabled ? 0.4 : 1,
//                                 transition: "all 0.3s ease",
//                               }}
//                             >
//                               {time}
//                             </button>
//                           );
//                         })}
//                       </div>
//                     </div>
//                   )}

//                   {/* Next Button */}
//                   <button
//                     className="consultation-next-button"
//                     onClick={handleNextStep}
//                     disabled={!selectedDate || !selectedTime}
//                     style={{
//                       fontFamily: "Inter, sans-serif",
//                       fontSize: "17px",
//                       fontWeight: 600,
//                       color: "#FFFFFF",
//                       background:
//                         selectedDate && selectedTime
//                           ? "linear-gradient(135deg, #FF0000 0%, #FF3333 100%)"
//                           : "rgba(21, 21, 97, 0.3)",
//                       padding: "16px 40px",
//                       borderRadius: "50px",
//                       border: "none",
//                       cursor:
//                         selectedDate && selectedTime
//                           ? "pointer"
//                           : "not-allowed",
//                       width: "100%",
//                       display: "flex",
//                       alignItems: "center",
//                       justifyContent: "center",
//                       gap: "10px",
//                       boxShadow:
//                         selectedDate && selectedTime
//                           ? "0 8px 24px rgba(255, 0, 0, 0.25)"
//                           : "none",
//                       transition: "all 0.3s ease",
//                     }}
//                   >
//                     Next
//                     <ArrowRight size={20} />
//                   </button>
//                 </div>
//               </div>
//             </div>
//           )}

//           {/* STEP 2 — YOUR INFORMATION */}
//           {currentStep === 2 && (
//             <div
//               className="step-2-container consultation-step-2-container animate-fade-in-up"
//               style={{
//                 background: "#FFFFFF",
//                 borderRadius: "32px",
//                 padding: "60px",
//                 boxShadow: "0 8px 32px rgba(21, 21, 97, 0.08)",
//                 border: "1px solid rgba(0, 0, 0, 0.06)",
//               }}
//             >
//               <div className="step-2-grid consultation-step-2-grid grid grid-cols-2 gap-12">
//                 {/* LEFT SIDE — Booking Summary */}
//                 <div
//                   className="booking-summary-panel consultation-booking-summary"
//                   style={{
//                     padding: "40px",
//                     background:
//                       "linear-gradient(135deg, #F7FBFF 0%, #FFFFFF 100%)",
//                     borderRadius: "24px",
//                     position: "relative",
//                     overflow: "hidden",
//                   }}
//                 >
//                   <h3
//                     className="booking-summary-title"
//                     style={{
//                       fontFamily: "Inter, sans-serif",
//                       fontSize: "28px",
//                       fontWeight: 700,
//                       color: "#151561",
//                       marginBottom: "32px",
//                     }}
//                   >
//                     Booking Summary
//                   </h3>

//                   <div
//                     className="booking-summary-details"
//                     style={{
//                       display: "flex",
//                       flexDirection: "column",
//                       gap: "24px",
//                     }}
//                   >
//                     <div>
//                       <div
//                         style={{
//                           fontFamily: "Inter, sans-serif",
//                           fontSize: "13px",
//                           fontWeight: 600,
//                           color: "#808080",
//                           marginBottom: "6px",
//                         }}
//                       >
//                         Consultation Type
//                       </div>
//                       <div
//                         style={{
//                           fontFamily: "Inter, sans-serif",
//                           fontSize: "17px",
//                           fontWeight: 600,
//                           color: "#151561",
//                         }}
//                       >
//                         {selectedDuration === "30min" ? "30 Minutes" : "1 Hour"}{" "}
//                         Consultation
//                       </div>
//                     </div>

//                     <div>
//                       <div
//                         style={{
//                           fontFamily: "Inter, sans-serif",
//                           fontSize: "13px",
//                           fontWeight: 600,
//                           color: "#808080",
//                           marginBottom: "6px",
//                         }}
//                       >
//                         Date
//                       </div>
//                       <div
//                         style={{
//                           fontFamily: "Inter, sans-serif",
//                           fontSize: "17px",
//                           fontWeight: 600,
//                           color: "#151561",
//                         }}
//                       >
//                         {selectedDate?.toLocaleDateString("en-US", {
//                           weekday: "long",
//                           month: "long",
//                           day: "numeric",
//                           year: "numeric",
//                         })}
//                       </div>
//                     </div>

//                     <div>
//                       <div
//                         style={{
//                           fontFamily: "Inter, sans-serif",
//                           fontSize: "13px",
//                           fontWeight: 600,
//                           color: "#808080",
//                           marginBottom: "6px",
//                         }}
//                       >
//                         Time
//                       </div>
//                       <div
//                         style={{
//                           fontFamily: "Inter, sans-serif",
//                           fontSize: "17px",
//                           fontWeight: 600,
//                           color: "#151561",
//                         }}
//                       >
//                         {selectedTime}
//                       </div>
//                     </div>

//                     <div>
//                       <div
//                         style={{
//                           fontFamily: "Inter, sans-serif",
//                           fontSize: "13px",
//                           fontWeight: 600,
//                           color: "#808080",
//                           marginBottom: "6px",
//                         }}
//                       >
//                         Time Zone
//                       </div>
//                       <div
//                         style={{
//                           fontFamily: "Inter, sans-serif",
//                           fontSize: "17px",
//                           fontWeight: 600,
//                           color: "#151561",
//                         }}
//                       >
//                         GMT (London)
//                       </div>
//                     </div>

//                     <div
//                       className="meeting-type-section"
//                       style={{
//                         marginTop: "24px",
//                         paddingTop: "24px",
//                         borderTop: "1px solid rgba(0, 0, 0, 0.06)",
//                       }}
//                     >
//                       <div
//                         style={{
//                           fontFamily: "Inter, sans-serif",
//                           fontSize: "13px",
//                           fontWeight: 600,
//                           color: "#808080",
//                           marginBottom: "12px",
//                         }}
//                       >
//                         Meeting Type
//                       </div>
//                       <div
//                         className="meeting-type-options"
//                         style={{
//                           display: "flex",
//                           flexDirection: "column",
//                           gap: "10px",
//                         }}
//                       >
//                         <label
//                           className="meeting-type-option"
//                           style={{
//                             display: "flex",
//                             alignItems: "center",
//                             gap: "12px",
//                             padding: "14px",
//                             background:
//                               meetingType === "online"
//                                 ? "rgba(255, 0, 0, 0.08)"
//                                 : "transparent",
//                             border: `1px solid ${
//                               meetingType === "online"
//                                 ? "#FF0000"
//                                 : "rgba(0, 0, 0, 0.1)"
//                             }`,
//                             borderRadius: "12px",
//                             cursor: "pointer",
//                           }}
//                         >
//                           <input
//                             type="radio"
//                             name="meetingType"
//                             checked={meetingType === "online"}
//                             onChange={() => setMeetingType("online")}
//                             style={{ cursor: "pointer" }}
//                           />
//                           <span
//                             style={{
//                               fontFamily: "Inter, sans-serif",
//                               fontSize: "15px",
//                               color: "#151561",
//                             }}
//                           >
//                             Online Video Meeting
//                           </span>
//                         </label>
//                         <label
//                           className="meeting-type-option"
//                           style={{
//                             display: "flex",
//                             alignItems: "center",
//                             gap: "12px",
//                             padding: "14px",
//                             background:
//                               meetingType === "in-person"
//                                 ? "rgba(255, 0, 0, 0.08)"
//                                 : "transparent",
//                             border: `1px solid ${
//                               meetingType === "in-person"
//                                 ? "#FF0000"
//                                 : "rgba(0, 0, 0, 0.1)"
//                             }`,
//                             borderRadius: "12px",
//                             cursor: "pointer",
//                           }}
//                         >
//                           <input
//                             type="radio"
//                             name="meetingType"
//                             checked={meetingType === "in-person"}
//                             onChange={() => setMeetingType("in-person")}
//                             style={{ cursor: "pointer" }}
//                           />
//                           <span
//                             style={{
//                               fontFamily: "Inter, sans-serif",
//                               fontSize: "15px",
//                               color: "#151561",
//                             }}
//                           >
//                             In-person: London, UK
//                           </span>
//                         </label>
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 {/* RIGHT SIDE — Information Form */}
//                 <div className="information-form-panel consultation-form-panel">
//                   <h3
//                     className="form-panel-title"
//                     style={{
//                       fontFamily: "Inter, sans-serif",
//                       fontSize: "28px",
//                       fontWeight: 700,
//                       color: "#151561",
//                       marginBottom: "32px",
//                     }}
//                   >
//                     Your Information
//                   </h3>

//                   <div
//                     className="form-fields-wrapper"
//                     style={{
//                       display: "flex",
//                       flexDirection: "column",
//                       gap: "20px",
//                     }}
//                   >
//                     <div className="form-field">
//                       <label
//                         style={{
//                           fontFamily: "Inter, sans-serif",
//                           fontSize: "14px",
//                           fontWeight: 600,
//                           color: "#151561",
//                           marginBottom: "8px",
//                           display: "block",
//                         }}
//                       >
//                         First Name *
//                       </label>
//                       <input
//                         type="text"
//                         className="form-input"
//                         value={formData.firstName}
//                         onChange={(e) =>
//                           setFormData({
//                             ...formData,
//                             firstName: e.target.value,
//                           })
//                         }
//                         placeholder="Enter your first name"
//                         style={{
//                           fontFamily: "Inter, sans-serif",
//                           fontSize: "15px",
//                           color: "#151561",
//                           background: "#FFFFFF",
//                           border: "1px solid rgba(0, 0, 0, 0.1)",
//                           borderRadius: "12px",
//                           padding: "14px 16px",
//                           width: "100%",
//                           outline: "none",
//                           transition: "all 0.3s ease",
//                         }}
//                       />
//                     </div>

//                     <div>
//                       <label
//                         style={{
//                           fontFamily: "Inter, sans-serif",
//                           fontSize: "14px",
//                           fontWeight: 600,
//                           color: "#151561",
//                           marginBottom: "8px",
//                           display: "block",
//                         }}
//                       >
//                         Email *
//                       </label>
//                       <input
//                         type="email"
//                         value={formData.email}
//                         onChange={(e) =>
//                           setFormData({ ...formData, email: e.target.value })
//                         }
//                         placeholder="your.email@example.com"
//                         style={{
//                           fontFamily: "Inter, sans-serif",
//                           fontSize: "15px",
//                           color: "#151561",
//                           background: "#FFFFFF",
//                           border: "1px solid rgba(0, 0, 0, 0.1)",
//                           borderRadius: "12px",
//                           padding: "14px 16px",
//                           width: "100%",
//                           outline: "none",
//                           transition: "all 0.3s ease",
//                         }}
//                       />
//                     </div>

//                     <div>
//                       <label
//                         style={{
//                           fontFamily: "Inter, sans-serif",
//                           fontSize: "14px",
//                           fontWeight: 600,
//                           color: "#151561",
//                           marginBottom: "8px",
//                           display: "block",
//                         }}
//                       >
//                         Phone Number *
//                       </label>
//                       <input
//                         type="tel"
//                         value={formData.phone}
//                         onChange={(e) =>
//                           setFormData({ ...formData, phone: e.target.value })
//                         }
//                         placeholder="+44 20 1234 5678"
//                         style={{
//                           fontFamily: "Inter, sans-serif",
//                           fontSize: "15px",
//                           color: "#151561",
//                           background: "#FFFFFF",
//                           border: "1px solid rgba(0, 0, 0, 0.1)",
//                           borderRadius: "12px",
//                           padding: "14px 16px",
//                           width: "100%",
//                           outline: "none",
//                           transition: "all 0.3s ease",
//                         }}
//                       />
//                     </div>

//                     <div>
//                       <label
//                         style={{
//                           fontFamily: "Inter, sans-serif",
//                           fontSize: "14px",
//                           fontWeight: 600,
//                           color: "#151561",
//                           marginBottom: "8px",
//                           display: "block",
//                         }}
//                       >
//                         Company Website
//                       </label>
//                       <input
//                         type="url"
//                         value={formData.website}
//                         onChange={(e) =>
//                           setFormData({ ...formData, website: e.target.value })
//                         }
//                         placeholder="https://yourcompany.com"
//                         style={{
//                           fontFamily: "Inter, sans-serif",
//                           fontSize: "15px",
//                           color: "#151561",
//                           background: "#FFFFFF",
//                           border: "1px solid rgba(0, 0, 0, 0.1)",
//                           borderRadius: "12px",
//                           padding: "14px 16px",
//                           width: "100%",
//                           outline: "none",
//                           transition: "all 0.3s ease",
//                         }}
//                       />
//                     </div>

//                     <div>
//                       <label
//                         style={{
//                           fontFamily: "Inter, sans-serif",
//                           fontSize: "14px",
//                           fontWeight: 600,
//                           color: "#151561",
//                           marginBottom: "8px",
//                           display: "block",
//                         }}
//                       >
//                         Choose a Service
//                       </label>
//                       <select
//                         value={formData.service}
//                         onChange={(e) =>
//                           setFormData({ ...formData, service: e.target.value })
//                         }
//                         style={{
//                           fontFamily: "Inter, sans-serif",
//                           fontSize: "15px",
//                           color: "#151561",
//                           background: "#FFFFFF",
//                           border: "1px solid rgba(0, 0, 0, 0.1)",
//                           borderRadius: "12px",
//                           padding: "14px 16px",
//                           width: "100%",
//                           outline: "none",
//                           cursor: "pointer",
//                         }}
//                       >
//                         <option value="">Select a service</option>
//                         {services.map((service) => (
//                           <option key={service} value={service}>
//                             {service}
//                           </option>
//                         ))}
//                       </select>
//                     </div>

//                     <div>
//                       <label
//                         style={{
//                           fontFamily: "Inter, sans-serif",
//                           fontSize: "14px",
//                           fontWeight: 600,
//                           color: "#151561",
//                           marginBottom: "8px",
//                           display: "block",
//                         }}
//                       >
//                         Additional Notes
//                       </label>
//                       <textarea
//                         value={formData.notes}
//                         onChange={(e) =>
//                           setFormData({ ...formData, notes: e.target.value })
//                         }
//                         placeholder="Tell us about your project or any specific requirements..."
//                         rows={4}
//                         style={{
//                           fontFamily: "Inter, sans-serif",
//                           fontSize: "15px",
//                           color: "#151561",
//                           background: "#FFFFFF",
//                           border: "1px solid rgba(0, 0, 0, 0.1)",
//                           borderRadius: "12px",
//                           padding: "14px 16px",
//                           width: "100%",
//                           outline: "none",
//                           resize: "vertical",
//                           transition: "all 0.3s ease",
//                         }}
//                       />
//                     </div>

//                     <label
//                       style={{
//                         display: "flex",
//                         alignItems: "flex-start",
//                         gap: "12px",
//                         cursor: "pointer",
//                       }}
//                     >
//                       <input
//                         type="checkbox"
//                         checked={formData.agreePolicy}
//                         onChange={(e) =>
//                           setFormData({
//                             ...formData,
//                             agreePolicy: e.target.checked,
//                           })
//                         }
//                         style={{ marginTop: "4px", cursor: "pointer" }}
//                       />
//                       <span
//                         style={{
//                           fontFamily: "Inter, sans-serif",
//                           fontSize: "14px",
//                           color: "#505050",
//                         }}
//                       >
//                         You agree to our privacy policy *
//                       </span>
//                     </label>

//                     <div
//                       className="form-button-group"
//                       style={{
//                         display: "flex",
//                         gap: "12px",
//                         marginTop: "12px",
//                       }}
//                     >
//                       <button
//                         className="back-button"
//                         onClick={() => setCurrentStep(1)}
//                         style={{
//                           fontFamily: "Inter, sans-serif",
//                           fontSize: "16px",
//                           fontWeight: 600,
//                           color: "#151561",
//                           background: "transparent",
//                           border: "2px solid #151561",
//                           borderRadius: "50px",
//                           padding: "14px 32px",
//                           cursor: "pointer",
//                           transition: "all 0.3s ease",
//                           display: "flex",
//                           alignItems: "center",
//                           gap: "8px",
//                         }}
//                       >
//                         <ArrowLeft size={18} />
//                         Back
//                       </button>
//                       <button
//                         className="submit-button"
//                         onClick={handleNextStep}
//                         disabled={!validateForm()}
//                         style={{
//                           fontFamily: "Inter, sans-serif",
//                           fontSize: "16px",
//                           fontWeight: 600,
//                           color: "#FFFFFF",
//                           background: validateForm()
//                             ? "linear-gradient(135deg, #FF0000 0%, #FF3333 100%)"
//                             : "rgba(21, 21, 97, 0.3)",
//                           border: "none",
//                           borderRadius: "50px",
//                           padding: "14px 32px",
//                           cursor: validateForm() ? "pointer" : "not-allowed",
//                           flex: 1,
//                           boxShadow: validateForm()
//                             ? "0 8px 24px rgba(255, 0, 0, 0.25)"
//                             : "none",
//                           transition: "all 0.3s ease",
//                         }}
//                       >
//                         Request Consultation
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           )}

//           {/* STEP 3 — PENDING REVIEW */}
//           {currentStep === 3 && (
//             <div
//               className="step-3-container consultation-step-3-container animate-fade-in"
//               style={{
//                 background: "#FFFFFF",
//                 borderRadius: "32px",
//                 padding: "80px 60px",
//                 boxShadow: "0 8px 32px rgba(21, 21, 97, 0.08)",
//                 border: "1px solid rgba(0, 0, 0, 0.06)",
//                 textAlign: "center",
//                 maxWidth: "800px",
//                 margin: "0 auto",
//               }}
//             >
//               {/* Premium Success Checkmark Icon with Animation */}
//               <div
//                 className="success-icon-wrapper consultation-success-icon"
//                 style={{
//                   width: "120px",
//                   height: "120px",
//                   background:
//                     "linear-gradient(135deg, #FF0000 0%, #FF3333 100%)",
//                   borderRadius: "50%",
//                   display: "flex",
//                   alignItems: "center",
//                   justifyContent: "center",
//                   margin: "0 auto 36px",
//                   boxShadow: "0 16px 48px rgba(255, 0, 0, 0.3)",
//                   position: "relative",
//                   animation: "successPulse 2s ease-in-out infinite",
//                 }}
//               >
//                 {/* Outer glow ring */}
//                 <div
//                   style={{
//                     position: "absolute",
//                     width: "140px",
//                     height: "140px",
//                     borderRadius: "50%",
//                     border: "3px solid rgba(255, 0, 0, 0.2)",
//                     animation: "ringExpand 2s ease-in-out infinite",
//                   }}
//                 />
//                 <CheckCircle2
//                   size={60}
//                   color="#FFFFFF"
//                   strokeWidth={2.5}
//                   style={{
//                     animation: "checkmarkStroke 0.6s ease-in-out",
//                   }}
//                 />
//               </div>

//               {/* Main Heading */}
//               <h2
//                 className="success-title"
//                 style={{
//                   fontFamily: "Inter, sans-serif",
//                   fontSize: "36px",
//                   fontWeight: 800,
//                   color: "#151561",
//                   marginBottom: "20px",
//                   letterSpacing: "-0.02em",
//                   lineHeight: "1.2",
//                 }}
//               >
//                 Your Consultation is Successfully Booked!
//               </h2>

//               {/* Subheading */}
//               <p
//                 className="success-description"
//                 style={{
//                   fontFamily: "Inter, sans-serif",
//                   fontSize: "19px",
//                   fontWeight: 400,
//                   color: "#606060",
//                   lineHeight: "1.7",
//                   maxWidth: "520px",
//                   margin: "0 auto 48px",
//                 }}
//               >
//                 We&apos;ve received your request. Our team will review the
//                 details and send a confirmation shortly.
//               </p>

//               {/* Appointment Summary Card */}
//               <div
//                 className="appointment-summary-card consultation-appointment-card"
//                 style={{
//                   marginTop: "48px",
//                   padding: "36px",
//                   background:
//                     "linear-gradient(135deg, rgba(255, 0, 0, 0.02) 0%, #F7FBFF 100%)",
//                   borderRadius: "24px",
//                   border: "1px solid rgba(21, 21, 97, 0.08)",
//                   boxShadow: "0 12px 40px rgba(21, 21, 97, 0.1)",
//                   textAlign: "left",
//                   animation: "slideUp 0.6s ease-out 0.3s backwards",
//                 }}
//               >
//                 <h4
//                   className="appointment-card-title"
//                   style={{
//                     fontFamily: "Inter, sans-serif",
//                     fontSize: "20px",
//                     fontWeight: 700,
//                     color: "#151561",
//                     marginBottom: "28px",
//                     textAlign: "center",
//                   }}
//                 >
//                   Appointment Details
//                 </h4>

//                 {/* Selected Date */}
//                 <div
//                   className="appointment-detail-row"
//                   style={{
//                     display: "flex",
//                     alignItems: "flex-start",
//                     gap: "16px",
//                     marginBottom: "20px",
//                   }}
//                 >
//                   <div
//                     style={{
//                       width: "44px",
//                       height: "44px",
//                       background:
//                         "linear-gradient(135deg, rgba(255, 0, 0, 0.1) 0%, rgba(255, 0, 0, 0.05) 100%)",
//                       borderRadius: "12px",
//                       display: "flex",
//                       alignItems: "center",
//                       justifyContent: "center",
//                       flexShrink: 0,
//                     }}
//                   >
//                     <Clock size={20} color="#FF0000" />
//                   </div>
//                   <div style={{ flex: 1 }}>
//                     <div
//                       style={{
//                         fontFamily: "Inter, sans-serif",
//                         fontSize: "13px",
//                         fontWeight: 600,
//                         color: "#808080",
//                         textTransform: "uppercase",
//                         letterSpacing: "0.5px",
//                         marginBottom: "6px",
//                       }}
//                     >
//                       Selected Date
//                     </div>
//                     <div
//                       style={{
//                         fontFamily: "Inter, sans-serif",
//                         fontSize: "16px",
//                         fontWeight: 600,
//                         color: "#151561",
//                       }}
//                     >
//                       {selectedDate?.toLocaleDateString("en-US", {
//                         weekday: "long",
//                         month: "long",
//                         day: "numeric",
//                         year: "numeric",
//                       })}
//                     </div>
//                   </div>
//                 </div>

//                 {/* Divider */}
//                 <div
//                   style={{
//                     height: "1px",
//                     background: "rgba(21, 21, 97, 0.08)",
//                     margin: "20px 0",
//                   }}
//                 />

//                 {/* Selected Time */}
//                 <div
//                   className="appointment-detail-row"
//                   style={{
//                     display: "flex",
//                     alignItems: "flex-start",
//                     gap: "16px",
//                     marginBottom: "20px",
//                   }}
//                 >
//                   <div
//                     style={{
//                       width: "44px",
//                       height: "44px",
//                       background:
//                         "linear-gradient(135deg, rgba(255, 0, 0, 0.1) 0%, rgba(255, 0, 0, 0.05) 100%)",
//                       borderRadius: "12px",
//                       display: "flex",
//                       alignItems: "center",
//                       justifyContent: "center",
//                       flexShrink: 0,
//                     }}
//                   >
//                     <Clock size={20} color="#FF0000" />
//                   </div>
//                   <div style={{ flex: 1 }}>
//                     <div
//                       style={{
//                         fontFamily: "Inter, sans-serif",
//                         fontSize: "13px",
//                         fontWeight: 600,
//                         color: "#808080",
//                         textTransform: "uppercase",
//                         letterSpacing: "0.5px",
//                         marginBottom: "6px",
//                       }}
//                     >
//                       Selected Time
//                     </div>
//                     <div
//                       style={{
//                         fontFamily: "Inter, sans-serif",
//                         fontSize: "16px",
//                         fontWeight: 600,
//                         color: "#151561",
//                       }}
//                     >
//                       {selectedTime}
//                     </div>
//                   </div>
//                 </div>

//                 {/* Divider */}
//                 <div
//                   style={{
//                     height: "1px",
//                     background: "rgba(21, 21, 97, 0.08)",
//                     margin: "20px 0",
//                   }}
//                 />

//                 {/* Duration */}
//                 <div
//                   className="appointment-detail-row"
//                   style={{
//                     display: "flex",
//                     alignItems: "flex-start",
//                     gap: "16px",
//                     marginBottom: "20px",
//                   }}
//                 >
//                   <div
//                     style={{
//                       width: "44px",
//                       height: "44px",
//                       background:
//                         "linear-gradient(135deg, rgba(255, 0, 0, 0.1) 0%, rgba(255, 0, 0, 0.05) 100%)",
//                       borderRadius: "12px",
//                       display: "flex",
//                       alignItems: "center",
//                       justifyContent: "center",
//                       flexShrink: 0,
//                     }}
//                   >
//                     <Clock size={20} color="#FF0000" />
//                   </div>
//                   <div style={{ flex: 1 }}>
//                     <div
//                       style={{
//                         fontFamily: "Inter, sans-serif",
//                         fontSize: "13px",
//                         fontWeight: 600,
//                         color: "#808080",
//                         textTransform: "uppercase",
//                         letterSpacing: "0.5px",
//                         marginBottom: "6px",
//                       }}
//                     >
//                       Duration
//                     </div>
//                     <div
//                       style={{
//                         fontFamily: "Inter, sans-serif",
//                         fontSize: "16px",
//                         fontWeight: 600,
//                         color: "#151561",
//                       }}
//                     >
//                       {selectedDuration === "30min" ? "30 Minutes" : "1 Hour"}
//                     </div>
//                   </div>
//                 </div>

//                 {/* Divider */}
//                 <div
//                   style={{
//                     height: "1px",
//                     background: "rgba(21, 21, 97, 0.08)",
//                     margin: "20px 0",
//                   }}
//                 />

//                 {/* Timezone */}
//                 <div
//                   className="appointment-detail-row"
//                   style={{
//                     display: "flex",
//                     alignItems: "flex-start",
//                     gap: "16px",
//                     marginBottom: "20px",
//                   }}
//                 >
//                   <div
//                     style={{
//                       width: "44px",
//                       height: "44px",
//                       background:
//                         "linear-gradient(135deg, rgba(255, 0, 0, 0.1) 0%, rgba(255, 0, 0, 0.05) 100%)",
//                       borderRadius: "12px",
//                       display: "flex",
//                       alignItems: "center",
//                       justifyContent: "center",
//                       flexShrink: 0,
//                     }}
//                   >
//                     <Globe size={20} color="#FF0000" />
//                   </div>
//                   <div style={{ flex: 1 }}>
//                     <div
//                       style={{
//                         fontFamily: "Inter, sans-serif",
//                         fontSize: "13px",
//                         fontWeight: 600,
//                         color: "#808080",
//                         textTransform: "uppercase",
//                         letterSpacing: "0.5px",
//                         marginBottom: "6px",
//                       }}
//                     >
//                       Timezone
//                     </div>
//                     <div
//                       style={{
//                         fontFamily: "Inter, sans-serif",
//                         fontSize: "16px",
//                         fontWeight: 600,
//                         color: "#151561",
//                       }}
//                     >
//                       {Intl.DateTimeFormat().resolvedOptions().timeZone}
//                       <span
//                         style={{
//                           display: "block",
//                           fontSize: "13px",
//                           fontWeight: 400,
//                           color: "#808080",
//                           marginTop: "4px",
//                         }}
//                       >
//                         Auto-detected
//                       </span>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Divider */}
//                 <div
//                   style={{
//                     height: "1px",
//                     background: "rgba(21, 21, 97, 0.08)",
//                     margin: "20px 0",
//                   }}
//                 />

//                 {/* Status */}
//                 <div
//                   className="appointment-detail-row appointment-status-row"
//                   style={{
//                     display: "flex",
//                     alignItems: "flex-start",
//                     gap: "16px",
//                   }}
//                 >
//                   <div
//                     style={{
//                       width: "44px",
//                       height: "44px",
//                       background:
//                         "linear-gradient(135deg, rgba(255, 165, 0, 0.1) 0%, rgba(255, 165, 0, 0.05) 100%)",
//                       borderRadius: "12px",
//                       display: "flex",
//                       alignItems: "center",
//                       justifyContent: "center",
//                       flexShrink: 0,
//                     }}
//                   >
//                     <Clock size={20} color="#FF8C00" />
//                   </div>
//                   <div style={{ flex: 1 }}>
//                     <div
//                       style={{
//                         fontFamily: "Inter, sans-serif",
//                         fontSize: "13px",
//                         fontWeight: 600,
//                         color: "#808080",
//                         textTransform: "uppercase",
//                         letterSpacing: "0.5px",
//                         marginBottom: "6px",
//                       }}
//                     >
//                       Status
//                     </div>
//                     <div
//                       style={{
//                         display: "inline-block",
//                         fontFamily: "Inter, sans-serif",
//                         fontSize: "14px",
//                         fontWeight: 600,
//                         color: "#FF8C00",
//                         background: "rgba(255, 165, 0, 0.1)",
//                         padding: "6px 14px",
//                         borderRadius: "50px",
//                       }}
//                     >
//                       Pending Admin Review
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               {/* Confirmation Text */}
//               <p
//                 className="confirmation-message"
//                 style={{
//                   fontFamily: "Inter, sans-serif",
//                   fontSize: "15px",
//                   fontWeight: 400,
//                   color: "#707070",
//                   lineHeight: "1.6",
//                   marginTop: "32px",
//                   marginBottom: "40px",
//                 }}
//               >
//                 You will receive an email confirmation once your consultation
//                 request is reviewed.
//               </p>

//               {/* Action Buttons */}
//               <div
//                 className="success-action-buttons"
//                 style={{
//                   display: "flex",
//                   gap: "16px",
//                   justifyContent: "center",
//                   marginTop: "40px",
//                 }}
//               >
//                 <button
//                   className="primary-cta-button"
//                   onClick={() => (window.location.href = "/")}
//                   style={{
//                     fontFamily: "Inter, sans-serif",
//                     fontSize: "16px",
//                     fontWeight: 600,
//                     color: "#FFFFFF",
//                     background:
//                       "linear-gradient(135deg, #FF0000 0%, #FF3333 100%)",
//                     padding: "16px 40px",
//                     borderRadius: "50px",
//                     border: "none",
//                     cursor: "pointer",
//                     transition: "all 0.3s ease",
//                     boxShadow: "0 8px 24px rgba(255, 0, 0, 0.3)",
//                   }}
//                   onMouseEnter={(e) => {
//                     e.currentTarget.style.transform = "translateY(-2px)";
//                     e.currentTarget.style.boxShadow =
//                       "0 12px 32px rgba(255, 0, 0, 0.4)";
//                   }}
//                   onMouseLeave={(e) => {
//                     e.currentTarget.style.transform = "translateY(0)";
//                     e.currentTarget.style.boxShadow =
//                       "0 8px 24px rgba(255, 0, 0, 0.3)";
//                   }}
//                 >
//                   Go to Home
//                 </button>

//                 <button
//                   className="secondary-cta-button"
//                   onClick={() => {
//                     setCurrentStep(1);
//                     setSelectedDate(null);
//                     setSelectedTime(null);
//                     setFormData({
//                       firstName: "",
//                       email: "",
//                       phone: "",
//                       website: "",
//                       service: "",
//                       notes: "",
//                       agreePolicy: false,
//                     });
//                   }}
//                   style={{
//                     fontFamily: "Inter, sans-serif",
//                     fontSize: "16px",
//                     fontWeight: 600,
//                     color: "#151561",
//                     background: "#FFFFFF",
//                     padding: "16px 40px",
//                     borderRadius: "50px",
//                     border: "2px solid #151561",
//                     cursor: "pointer",
//                     transition: "all 0.3s ease",
//                   }}
//                   onMouseEnter={(e) => {
//                     e.currentTarget.style.background = "#151561";
//                     e.currentTarget.style.color = "#FFFFFF";
//                   }}
//                   onMouseLeave={(e) => {
//                     e.currentTarget.style.background = "#FFFFFF";
//                     e.currentTarget.style.color = "#151561";
//                   }}
//                 >
//                   Book Another Consultation
//                 </button>
//               </div>
//             </div>
//           )}
//         </div>
//       </section>

//       {/* WHY CONSULTATION WITH OPTICHORE */}
//       <section
//         className="why-consultation-section consultation-why-section"
//         style={{
//           padding: "120px 0",
//           backgroundColor: "#FFFFFF",
//         }}
//       >
//         <div className="max-w-[1440px] mx-auto px-12">
//           <div className="text-center mb-16 why-section-header">
//             <h2
//               className="why-section-title"
//               style={{
//                 fontFamily: "Inter, sans-serif",
//                 fontSize: "48px",
//                 fontWeight: 700,
//                 color: "#151561",
//                 letterSpacing: "-0.02em",
//                 marginBottom: "16px",
//               }}
//             >
//               Why Consultation with Optichore?
//             </h2>
//             <p
//               className="why-section-subtitle"
//               style={{
//                 fontFamily: "Inter, sans-serif",
//                 fontSize: "19px",
//                 fontWeight: 400,
//                 color: "#505050",
//                 lineHeight: "1.7",
//                 maxWidth: "700px",
//                 margin: "0 auto",
//               }}
//             >
//               We bring expertise, certification, and proven results to every
//               consultation.
//             </p>
//           </div>

//           <div className="why-cards-grid grid grid-cols-4 gap-6">
//             {whyCards.map((card, index) => {
//               const Icon = card.icon;
//               return (
//                 <div
//                   key={index}
//                   className="why-card consultation-why-card animate-fade-in-up"
//                   style={{
//                     background: "rgba(255, 255, 255, 0.7)",
//                     backdropFilter: "blur(20px)",
//                     WebkitBackdropFilter: "blur(20px)",
//                     borderRadius: "24px",
//                     padding: "36px 28px",
//                     border: "1px solid rgba(255, 255, 255, 0.4)",
//                     boxShadow: "0 8px 32px rgba(21, 21, 97, 0.1)",
//                     transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
//                     animationDelay: `${index * 0.1}s`,
//                   }}
//                 >
//                   <div
//                     className="why-card-icon"
//                     style={{
//                       width: "60px",
//                       height: "60px",
//                       background:
//                         "linear-gradient(135deg, #FF0000 0%, #FF3333 100%)",
//                       borderRadius: "14px",
//                       display: "flex",
//                       alignItems: "center",
//                       justifyContent: "center",
//                       marginBottom: "20px",
//                       boxShadow: "0 6px 20px rgba(255, 0, 0, 0.25)",
//                     }}
//                   >
//                     <Icon size={28} color="#FFFFFF" />
//                   </div>

//                   <div className="why-card-content">
//                     <h3
//                       className="why-card-title"
//                       style={{
//                         fontFamily: "Inter, sans-serif",
//                         fontSize: "19px",
//                         fontWeight: 600,
//                         color: "#151561",
//                         marginBottom: "10px",
//                         lineHeight: "1.3",
//                       }}
//                     >
//                       {card.title}
//                     </h3>

//                     <p
//                       className="why-card-description"
//                       style={{
//                         fontFamily: "Inter, sans-serif",
//                         fontSize: "15px",
//                         fontWeight: 400,
//                         color: "#505050",
//                         lineHeight: "1.65",
//                       }}
//                     >
//                       {card.description}
//                     </p>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </section>

//       {/* MINI FAQ SECTION */}
//       <section
//         className="faq-section"
//         style={{
//           padding: "120px 0",
//           background: "linear-gradient(180deg, #FFFFFF 0%, #F7FBFF 100%)",
//         }}
//       >
//         <div className="max-w-[900px] mx-auto px-12">
//           <div className="text-center mb-16">
//             <h2
//               style={{
//                 fontFamily: "Inter, sans-serif",
//                 fontSize: "48px",
//                 fontWeight: 700,
//                 color: "#151561",
//                 letterSpacing: "-0.02em",
//                 marginBottom: "16px",
//               }}
//             >
//               Frequently Asked Questions
//             </h2>
//           </div>

//           <div
//             className="consultation-faq-list"
//             style={{ display: "flex", flexDirection: "column", gap: "16px" }}
//           >
//             {faqs.map((faq, index) => (
//               <div
//                 key={index}
//                 className="consultation-faq-item"
//                 style={{
//                   background: "#FFFFFF",
//                   borderRadius: "20px",
//                   border: "1px solid rgba(0, 0, 0, 0.06)",
//                   overflow: "hidden",
//                   transition: "all 0.3s ease",
//                 }}
//               >
//                 <button
//                   onClick={() =>
//                     setExpandedFaq(expandedFaq === index ? null : index)
//                   }
//                   style={{
//                     width: "100%",
//                     padding: "24px 28px",
//                     display: "flex",
//                     alignItems: "center",
//                     justifyContent: "space-between",
//                     background: "transparent",
//                     border: "none",
//                     cursor: "pointer",
//                     textAlign: "left",
//                   }}
//                 >
//                   <span
//                     style={{
//                       fontFamily: "Inter, sans-serif",
//                       fontSize: "17px",
//                       fontWeight: 600,
//                       color: "#151561",
//                     }}
//                   >
//                     {faq.q}
//                   </span>
//                   <ChevronDown
//                     size={20}
//                     color="#151561"
//                     style={{
//                       transform:
//                         expandedFaq === index
//                           ? "rotate(180deg)"
//                           : "rotate(0deg)",
//                       transition: "transform 0.3s ease",
//                     }}
//                   />
//                 </button>
//                 {expandedFaq === index && (
//                   <div
//                     className="animate-fade-in"
//                     style={{
//                       padding: "0 28px 24px",
//                       fontFamily: "Inter, sans-serif",
//                       fontSize: "15px",
//                       color: "#505050",
//                       lineHeight: "1.7",
//                     }}
//                   >
//                     {faq.a}
//                   </div>
//                 )}
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* FINAL CTA SECTION */}
//       <section
//         className="final-cta-section"
//         style={{
//           padding: "100px 0",
//           background: "linear-gradient(135deg, #151561 0%, #1a1a7a 100%)",
//         }}
//       >
//         <div className="max-w-[1440px] mx-auto px-12 text-center">
//           <h2
//             style={{
//               fontFamily: "Inter, sans-serif",
//               fontSize: "42px",
//               fontWeight: 700,
//               color: "#FFFFFF",
//               letterSpacing: "-0.02em",
//               marginBottom: "24px",
//             }}
//           >
//             Need Quick Assistance?
//           </h2>
//           <p
//             style={{
//               fontFamily: "Inter, sans-serif",
//               fontSize: "18px",
//               fontWeight: 400,
//               color: "rgba(255, 255, 255, 0.8)",
//               lineHeight: "1.7",
//               maxWidth: "600px",
//               margin: "0 auto 40px",
//             }}
//           >
//             Our support team is available to help you with any questions.
//           </p>
//           <button
//             style={{
//               fontFamily: "Inter, sans-serif",
//               fontSize: "17px",
//               fontWeight: 600,
//               color: "#151561",
//               background: "#FFFFFF",
//               padding: "16px 40px",
//               borderRadius: "50px",
//               border: "none",
//               cursor: "pointer",
//               boxShadow: "0 8px 24px rgba(0, 0, 0, 0.15)",
//               transition: "all 0.3s ease",
//             }}
//           >
//             Contact Support
//           </button>
//         </div>
//       </section>

//       {/* FOOTER */}

//       {/* ANIMATIONS & STYLES */}
//       <style>{`
//         @keyframes fadeIn {
//           from {
//             opacity: 0;
//           }
//           to {
//             opacity: 1;
//           }
//         }

//         @keyframes fadeInUp {
//           from {
//             opacity: 0;
//             transform: translateY(30px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }

//         @keyframes successPulse {
//           0%, 100% {
//             transform: scale(1);
//           }
//           50% {
//             transform: scale(1.05);
//           }
//         }

//         @keyframes ringExpand {
//           0% {
//             transform: scale(1);
//             opacity: 0.6;
//           }
//           50% {
//             transform: scale(1.1);
//             opacity: 0.3;
//           }
//           100% {
//             transform: scale(1);
//             opacity: 0.6;
//           }
//         }

//         @keyframes checkmarkStroke {
//           0% {
//             opacity: 0;
//             transform: scale(0.8);
//           }
//           100% {
//             opacity: 1;
//             transform: scale(1);
//           }
//         }

//         @keyframes slideUp {
//           0% {
//             opacity: 0;
//             transform: translateY(20px);
//           }
//           100% {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }

//         .animate-fade-in {
//           animation: fadeIn 0.6s ease forwards;
//         }

//         .animate-fade-in-up {
//           opacity: 0;
//           animation: fadeInUp 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
//         }

//         .why-card:hover {
//           transform: translateY(-8px);
//           box-shadow: 0 20px 60px rgba(21, 21, 97, 0.18);
//         }

//         input:focus,
//         textarea:focus,
//         select:focus {
//           border-color: #FF0000 !important;
//           box-shadow: 0 0 0 3px rgba(255, 0, 0, 0.1) !important;
//         }

//         html {
//           scroll-behavior: smooth;
//         }

//         /* ===== TABLET BREAKPOINT (768px - 1024px) ===== */
//         @media (min-width: 768px) and (max-width: 1024px) {
//           .consultation-page-header {
//             padding: 80px 0 50px !important;
//           }

//           .consultation-header-container {
//             padding-left: 2rem !important;
//             padding-right: 2rem !important;
//           }

//           .consultation-page-title {
//             font-size: 44px !important;
//           }

//           .consultation-page-subtitle {
//             font-size: 18px !important;
//             max-width: 90% !important;
//           }

//           .consultation-step-indicator {
//             padding: 32px 0 !important;
//           }

//           .consultation-step-container {
//             padding-left: 2rem !important;
//             padding-right: 2rem !important;
//           }

//           .step-label {
//             font-size: 14px !important;
//           }

//           .step-divider {
//             margin: 0 12px !important;
//           }

//           .consultation-step-1-container {
//             padding: 40px !important;
//           }

//           .consultation-details-card {
//             padding: 32px !important;
//           }

//           .consultation-calendar {
//             padding: 20px !important;
//           }

//           .calendar-grid {
//             gap: 6px !important;
//           }

//           /* Step 2 - Tablet */
//           .consultation-step-2-container {
//             padding: 40px !important;
//           }

//           .consultation-step-2-grid {
//             grid-template-columns: 1fr !important;
//             gap: 32px !important;
//             display: flex !important;
//             flex-direction: column !important;
//           }

//           /* Reorder for tablet - Summary FIRST, Form SECOND */
//           .consultation-booking-summary {
//             order: 1 !important;
//             padding: 32px !important;
//           }

//           .booking-summary-title {
//             font-size: 26px !important;
//             margin-bottom: 28px !important;
//           }

//           .booking-summary-details {
//             gap: 20px !important;
//           }

//           .consultation-form-panel {
//             order: 2 !important;
//             padding: 0 !important;
//           }

//           .form-button-group {
//             gap: 12px !important;
//           }

//           .back-button {
//             padding: 12px 28px !important;
//           }

//           .submit-button {
//             padding: 12px 28px !important;
//           }

//           /* Why Consultation Section - Tablet */
//           .consultation-why-section {
//             padding: 80px 0 !important;
//           }

//           .why-section-header {
//             margin-bottom: 48px !important;
//           }

//           .why-section-title {
//             font-size: 40px !important;
//           }

//           .why-section-subtitle {
//             font-size: 18px !important;
//             max-width: 80% !important;
//           }

//           /* Cards Grid - 2x2 Layout */
//           .why-cards-grid {
//             grid-template-columns: repeat(2, 1fr) !important;
//             gap: 24px !important;
//           }

//           /* Cards - Vertical Layout on Tablet */
//           .consultation-why-card {
//             display: flex !important;
//             flex-direction: column !important;
//             align-items: flex-start !important;
//             padding: 32px 24px !important;
//             border-radius: 24px !important;
//           }

//           .why-card-icon {
//             width: 56px !important;
//             height: 56px !important;
//             margin-bottom: 16px !important;
//             border-radius: 14px !important;
//           }

//           .why-card-icon svg {
//             width: 26px !important;
//             height: 26px !important;
//           }

//           .why-card-title {
//             font-size: 18px !important;
//             margin-bottom: 8px !important;
//           }

//           .why-card-description {
//             font-size: 14px !important;
//           }

//           /* FAQ - Tablet */
//           .faq-section {
//             padding: 80px 0 !important;
//           }

//           .faq-section h2 {
//             font-size: 40px !important;
//           }

//           .consultation-faq-item button {
//             padding: 20px 24px !important;
//           }

//           .consultation-faq-item > div {
//             padding: 0 24px 20px !important;
//           }

//           /* Step 3 - Tablet */
//           .consultation-step-3-container {
//             padding: 60px 48px !important;
//             max-width: 90% !important;
//           }

//           .consultation-success-icon {
//             width: 100px !important;
//             height: 100px !important;
//             margin-bottom: 28px !important;
//           }

//           .consultation-success-icon svg {
//             width: 50px !important;
//             height: 50px !important;
//           }

//           .success-title {
//             font-size: 32px !important;
//           }

//           .success-description {
//             font-size: 18px !important;
//             margin-bottom: 40px !important;
//           }

//           .consultation-appointment-card {
//             padding: 32px !important;
//             margin-top: 40px !important;
//           }

//           .appointment-card-title {
//             font-size: 19px !important;
//             margin-bottom: 24px !important;
//           }

//           .appointment-detail-row > div:last-child > div:last-child {
//             font-size: 16px !important;
//           }

//           .confirmation-message {
//             font-size: 15px !important;
//             margin-top: 28px !important;
//             margin-bottom: 36px !important;
//           }

//           .success-action-buttons {
//             gap: 14px !important;
//             flex-wrap: wrap;
//           }

//           .primary-cta-button,
//           .secondary-cta-button {
//             flex: 1;
//             min-width: 200px;
//           }
//         }

//         /* ===== MOBILE BREAKPOINT (≤767px) ===== */
//         @media (max-width: 767px) {
//           /* Page Header */
//           .consultation-page-header {
//             padding: 60px 0 40px !important;
//           }

//           .consultation-header-container {
//             padding-left: 1.5rem !important;
//             padding-right: 1.5rem !important;
//           }

//           .consultation-page-title {
//             font-size: 32px !important;
//             margin-bottom: 16px !important;
//             letter-spacing: -0.01em !important;
//           }

//           .consultation-page-subtitle {
//             font-size: 16px !important;
//             line-height: 1.6 !important;
//             max-width: 100% !important;
//           }

//           /* Step Indicator - Compact Horizontal */
//           .consultation-step-indicator {
//             padding: 24px 0 !important;
//           }

//           .consultation-step-container {
//             padding-left: 1rem !important;
//             padding-right: 1rem !important;
//           }

//           .consultation-steps-wrapper {
//             gap: 8px;
//           }

//           .consultation-step-item {
//             flex-direction: column;
//             align-items: center !important;
//             text-align: center;
//             gap: 6px !important;
//           }

//           .consultation-step-item > div {
//             flex-direction: column;
//             gap: 6px !important;
//           }

//           .step-circle {
//             width: 36px !important;
//             height: 36px !important;
//           }

//           .step-circle span {
//             font-size: 14px !important;
//           }

//           .step-label {
//             font-size: 11px !important;
//             white-space: nowrap;
//             overflow: hidden;
//             text-overflow: ellipsis;
//             max-width: 80px;
//           }

//           .step-divider {
//             display: none !important;
//           }

//           /* Step Content */
//           .step-content {
//             padding: 40px 0 !important;
//           }

//           .step-content > div {
//             padding-left: 1rem !important;
//             padding-right: 1rem !important;
//           }

//           /* Step 1 Container - Single Column */
//           .consultation-step-1-container {
//             padding: 24px !important;
//             border-radius: 24px !important;
//           }

//           .consultation-two-col-grid {
//             grid-template-columns: 1fr !important;
//             gap: 24px !important;
//           }

//           /* Consultation Details Card */
//           .consultation-left-panel {
//             order: 1;
//           }

//           .consultation-details-card {
//             padding: 24px !important;
//             display: block !important;
//             height: auto !important;
//           }

//           .consultation-details-card > div {
//             width: 100%;
//             text-align: center;
//           }

//           .consultation-details-card img {
//             width: 100px !important;
//             margin: 0 auto 20px !important;
//           }

//           .consultation-details-card h3 {
//             font-size: 28px !important;
//             line-height: 1.3 !important;
//           }

//           .consultation-details-card p {
//             font-size: 15px !important;
//           }

//           /* Duration Toggle - Mobile Friendly */
//           .duration-toggle-container {
//             width: 100% !important;
//             display: flex !important;
//           }

//           .duration-button {
//             flex: 1 !important;
//             padding: 14px 20px !important;
//             font-size: 14px !important;
//             min-height: 48px;
//           }

//           /* Calendar - Right Panel */
//           .consultation-right-panel {
//             order: 2;
//           }

//           .consultation-calendar {
//             padding: 16px !important;
//             margin-bottom: 20px !important;
//           }

//           .calendar-header {
//             margin-bottom: 16px !important;
//           }

//           .calendar-month-title {
//             font-size: 16px !important;
//           }

//           .calendar-nav-buttons {
//             gap: 6px !important;
//           }

//           .calendar-nav-btn {
//             width: 44px !important;
//             height: 44px !important;
//           }

//           .calendar-grid {
//             gap: 4px !important;
//           }

//           .calendar-grid > div {
//             font-size: 11px !important;
//             padding: 4px 0 !important;
//           }

//           .calendar-grid > button {
//             padding: 10px 4px !important;
//             font-size: 13px !important;
//             min-height: 40px;
//           }

//           /* Time Slots */
//           .animate-fade-in-up > div:nth-child(2) {
//             grid-template-columns: repeat(2, 1fr) !important;
//             gap: 8px !important;
//             max-height: 200px !important;
//           }

//           .animate-fade-in-up > div:nth-child(2) button {
//             padding: 14px 8px !important;
//             font-size: 13px !important;
//             min-height: 48px;
//           }

//           /* Next Button - Mobile Sticky */
//           .consultation-next-button {
//             padding: 16px 32px !important;
//             font-size: 16px !important;
//             height: 52px !important;
//             position: relative;
//           }

//           /* Step 2 Container - Single Column */
//           .consultation-step-2-container {
//             padding: 24px !important;
//             border-radius: 24px !important;
//           }

//           .step-2-grid {
//             grid-template-columns: 1fr !important;
//             gap: 24px !important;
//             display: flex !important;
//             flex-direction: column !important;
//           }

//           /* Reorder for mobile - Summary FIRST, Form SECOND */
//           .consultation-booking-summary {
//             order: 1 !important;
//             padding: 20px !important;
//             border-radius: 20px !important;
//           }

//           .booking-summary-title {
//             font-size: 22px !important;
//             margin-bottom: 20px !important;
//           }

//           .booking-summary-details {
//             gap: 16px !important;
//           }

//           .booking-summary-details > div {
//             display: flex;
//             flex-direction: column;
//           }

//           .booking-summary-details > div > div:first-child {
//             font-size: 12px !important;
//             margin-bottom: 4px !important;
//           }

//           .booking-summary-details > div > div:last-child {
//             font-size: 15px !important;
//           }

//           .meeting-type-section {
//             margin-top: 16px !important;
//             padding-top: 16px !important;
//           }

//           .consultation-form-panel {
//             order: 2 !important;
//           }

//           /* Form Inputs */
//           .form-input,
//           .step-2-container input,
//           .step-2-container select,
//           .step-2-container textarea {
//             font-size: 16px !important;
//             padding: 14px 16px !important;
//             min-height: 48px !important;
//           }

//           .form-panel-title {
//             font-size: 24px !important;
//             margin-bottom: 24px !important;
//           }

//           /* Meeting Type Options - Full Width */
//           .meeting-type-option {
//             min-height: 48px !important;
//             padding: 16px !important;
//           }

//           /* Button Group - Stacked */
//           .form-button-group {
//             flex-direction: column-reverse !important;
//             gap: 12px !important;
//             margin-top: 20px !important;
//           }

//           .back-button,
//           .submit-button {
//             width: 100% !important;
//             justify-content: center !important;
//             height: 52px !important;
//             font-size: 16px !important;
//           }

//           .back-button {
//             order: 2;
//           }

//           .submit-button {
//             order: 1;
//           }

//           /* Why Consultation Section - Mobile */
//           .consultation-why-section {
//             padding: 60px 0 !important;
//           }

//           /* Section Header */
//           .why-section-header {
//             margin-bottom: 32px !important;
//           }

//           .why-section-title {
//             font-size: 28px !important;
//             margin-bottom: 12px !important;
//             line-height: 1.3 !important;
//           }

//           .why-section-subtitle {
//             font-size: 16px !important;
//             max-width: 100% !important;
//             padding: 0 16px;
//           }

//           /* Cards Grid - Single Column */
//           .why-cards-grid {
//             grid-template-columns: 1fr !important;
//             gap: 16px !important;
//           }

//           /* Card - Horizontal Layout on Mobile */
//           .consultation-why-card {
//             display: flex !important;
//             flex-direction: row !important;
//             align-items: flex-start !important;
//             gap: 16px !important;
//             padding: 20px !important;
//             border-radius: 20px !important;
//           }

//           /* Icon - Left Aligned */
//           .why-card-icon {
//             width: 48px !important;
//             height: 48px !important;
//             margin-bottom: 0 !important;
//             flex-shrink: 0 !important;
//             border-radius: 12px !important;
//             box-shadow: 0 4px 16px rgba(255, 0, 0, 0.2) !important;
//           }

//           .why-card-icon svg {
//             width: 24px !important;
//             height: 24px !important;
//           }

//           /* Content - Right Side */
//           .why-card-content {
//             flex: 1;
//             display: flex;
//             flex-direction: column;
//           }

//           .why-card-title {
//             font-size: 16px !important;
//             margin-bottom: 6px !important;
//             line-height: 1.4 !important;
//           }

//           .why-card-description {
//             font-size: 14px !important;
//             line-height: 1.6 !important;
//           }

//           /* FAQ Items - Mobile */
//           .consultation-faq-item button {
//             padding: 18px 20px !important;
//             font-size: 15px !important;
//           }

//           .consultation-faq-item button span {
//             font-size: 15px !important;
//             line-height: 1.4 !important;
//           }

//           .consultation-faq-item > div {
//             padding: 0 20px 20px !important;
//             font-size: 14px !important;
//           }

//           .faq-section {
//             padding: 60px 0 !important;
//           }

//           .faq-section h2 {
//             font-size: 32px !important;
//             margin-bottom: 12px !important;
//           }

//           /* Step 3 - Confirmation Page - Mobile */
//           .consultation-step-3-container {
//             padding: 40px 24px !important;
//             border-radius: 24px !important;
//           }

//           /* Success Icon */
//           .consultation-success-icon {
//             width: 80px !important;
//             height: 80px !important;
//             margin: 0 auto 24px !important;
//             box-shadow: 0 8px 24px rgba(255, 0, 0, 0.25) !important;
//           }

//           .consultation-success-icon > div {
//             width: 100px !important;
//             height: 100px !important;
//             border-width: 2px !important;
//           }

//           .consultation-success-icon svg {
//             width: 40px !important;
//             height: 40px !important;
//           }

//           /* Title and Description */
//           .success-title {
//             font-size: 26px !important;
//             margin-bottom: 16px !important;
//             line-height: 1.3 !important;
//             max-width: 100% !important;
//           }

//           .success-description {
//             font-size: 16px !important;
//             margin-bottom: 32px !important;
//             max-width: 100% !important;
//             padding: 0 8px;
//           }

//           /* Appointment Details Card */
//           .consultation-appointment-card {
//             margin-top: 32px !important;
//             padding: 20px !important;
//             border-radius: 20px !important;
//           }

//           .appointment-card-title {
//             font-size: 18px !important;
//             margin-bottom: 20px !important;
//           }

//           /* Appointment Detail Rows */
//           .appointment-detail-row {
//             flex-direction: column !important;
//             align-items: flex-start !important;
//             gap: 8px !important;
//             margin-bottom: 16px !important;
//           }

//           .appointment-detail-row > div:first-child {
//             width: 40px !important;
//             height: 40px !important;
//             margin-bottom: 0 !important;
//           }

//           .appointment-detail-row > div:last-child {
//             padding-left: 0 !important;
//           }

//           .appointment-detail-row > div:last-child > div:first-child {
//             font-size: 12px !important;
//             margin-bottom: 4px !important;
//           }

//           .appointment-detail-row > div:last-child > div:last-child {
//             font-size: 15px !important;
//           }

//           /* Status Badge */
//           .appointment-status-row > div:last-child > div {
//             font-size: 13px !important;
//             padding: 8px 16px !important;
//             white-space: nowrap;
//             overflow: hidden;
//             text-overflow: ellipsis;
//             max-width: 100%;
//           }

//           /* Dividers - Hide some on mobile */
//           .consultation-appointment-card > div[style*="height: 1px"] {
//             margin: 12px 0 !important;
//           }

//           /* Confirmation Message */
//           .confirmation-message {
//             font-size: 14px !important;
//             margin-top: 24px !important;
//             margin-bottom: 32px !important;
//             padding: 0 8px;
//           }

//           /* Action Buttons - Stacked */
//           .success-action-buttons {
//             flex-direction: column-reverse !important;
//             gap: 12px !important;
//             margin-top: 32px !important;
//           }

//           .primary-cta-button,
//           .secondary-cta-button {
//             width: 100% !important;
//             height: 52px !important;
//             padding: 16px 32px !important;
//             font-size: 16px !important;
//             display: flex;
//             align-items: center;
//             justify-content: center;
//           }

//           .primary-cta-button {
//             order: 1;
//           }

//           .secondary-cta-button {
//             order: 2;
//           }
//         }

//         /* ===== SMALL MOBILE (≤414px) ===== */
//         @media (max-width: 414px) {
//           .consultation-page-title {
//             font-size: 28px !important;
//           }

//           .consultation-page-subtitle {
//             font-size: 15px !important;
//           }

//           .step-label {
//             font-size: 10px !important;
//             max-width: 70px;
//           }

//           .consultation-details-card h3 {
//             font-size: 24px !important;
//           }

//           .calendar-grid > button {
//             padding: 8px 2px !important;
//             font-size: 12px !important;
//             min-height: 36px;
//           }
//         }
//       `}</style>
//     </div>
//   );
// }








//============================================================NEW CODE






"use client"
import { useState } from 'react';
import { ArrowRight, ArrowLeft, ChevronLeft, ChevronRight, Clock, MapPin, Globe, CheckCircle2, Shield, Award, Users, Building2, ChevronDown, Phone as PhoneIcon } from 'lucide-react';
import { ConsultationOverlay } from '@/components/ConsultationOverlay';

// import logo from 'figma:asset/58999c323b4341362baed6ec5f1b9d3f7db35c54.png';

export default function ConsultationPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedDuration, setSelectedDuration] = useState('30min');
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [meetingType, setMeetingType] = useState('online');
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  // Toggle this to enable/disable the overlay
  const [isConsultationActive, setIsConsultationActive] = useState(false);

  const [formData, setFormData] = useState({
    firstName: '',
    email: '',
    phone: '',
    website: '',
    service: '',
    notes: '',
    agreePolicy: false
  });

  const steps = [
    { number: 1, label: 'Choose Time Slot', active: currentStep >= 1, completed: currentStep > 1 },
    { number: 2, label: 'Your Information', active: currentStep >= 2, completed: currentStep > 2 },
    { number: 3, label: 'Confirmation', active: currentStep >= 3, completed: false }
  ];

  const timeSlots = [
    '09:00 AM', '09:30 AM', '10:00 AM', '10:30 AM',
    '11:00 AM', '11:30 AM', '12:00 PM', '12:30 PM',
    '02:00 PM', '02:30 PM', '03:00 PM', '03:30 PM',
    '04:00 PM', '04:30 PM', '05:00 PM'
  ];

  const services = [
    'Facebook Marketing & Ads Management',
    'Web Design',
    'Web Development',
    'UI/UX Design',
    'Brand Identity & Creative Design',
    'Software Development',
    'Mobile App Development'
  ];

  const whyCards = [
    { icon: Shield, title: 'Meta Business Partner', description: 'Official Meta verified partner for digital marketing solutions.' },
    { icon: Award, title: 'Verified Tech Provider', description: 'Certified technology partner delivering enterprise-grade solutions.' },
    { icon: Users, title: 'Expert Team', description: '10+ years combined experience in digital marketing and development.' },
    { icon: Building2, title: 'UK-Based Registered Company', description: 'Registered and operating from London, United Kingdom.' }
  ];

  const faqs = [
    { q: 'How long is the review time?', a: 'Our team typically reviews consultation requests within 24-48 hours during business days.' },
    { q: 'Is the consultation free?', a: 'Yes, the initial consultation is completely free with no obligations.' },
    { q: 'What if my time zone is different?', a: 'Our system automatically detects your time zone and displays available slots accordingly.' },
    { q: 'Can I reschedule?', a: 'Yes, you can reschedule by contacting our support team at least 24 hours before the scheduled time.' },
    { q: 'What should I prepare for the consultation?', a: 'Please have your business goals, project requirements, and any relevant materials ready to discuss.' }
  ];

  const handleNextStep = () => {
    if (currentStep === 1 && selectedDate && selectedTime) {
      setCurrentStep(2);
    } else if (currentStep === 2 && validateForm()) {
      setCurrentStep(3);
    }
  };

  const validateForm = () => {
    return formData.firstName && formData.email && formData.phone && formData.agreePolicy;
  };

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const days = [];
    
    for (let i = 0; i < firstDay.getDay(); i++) {
      days.push(null);
    }
    
    for (let i = 1; i <= lastDay.getDate(); i++) {
      days.push(new Date(year, month, i));
    }
    
    return days;
  };

  const [currentMonth, setCurrentMonth] = useState(new Date());
  const days = getDaysInMonth(currentMonth);

  // Helper functions for date/time logic
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const isCurrentMonth = () => {
    return currentMonth.getMonth() === new Date().getMonth() && 
           currentMonth.getFullYear() === new Date().getFullYear();
  };

  const isPastDate = (date: Date | null) => {
    if (!date) return false;
    const checkDate = new Date(date);
    checkDate.setHours(0, 0, 0, 0);
    return checkDate < today;
  };

  const isToday = (date: Date | null) => {
    if (!date) return false;
    const checkDate = new Date(date);
    checkDate.setHours(0, 0, 0, 0);
    return checkDate.getTime() === today.getTime();
  };

  const isTimeSlotDisabled = (timeSlot: string) => {
    if (!selectedDate) return false;

    // Parse the time slot
    const [time, period] = timeSlot.split(' ');
    const [hours, minutes] = time.split(':').map(Number);
    let slotHours = hours;
    
    // Convert to 24-hour format
    if (period === 'PM' && hours !== 12) {
      slotHours = hours + 12;
    } else if (period === 'AM' && hours === 12) {
      slotHours = 0;
    }

    const slotTime = new Date(selectedDate);
    slotTime.setHours(slotHours, minutes, 0, 0);

    // If selected date is today
    if (isToday(selectedDate)) {
      const now = new Date();
      const oneHourFromNow = new Date(now.getTime() + 60 * 60 * 1000);
      
      // Disable if slot is earlier than 1 hour from now
      return slotTime <= oneHourFromNow;
    }

    // For future dates, all slots are enabled
    return false;
  };

  return (
    <div className="consultation-page" style={{ backgroundColor: '#FFFFFF' }}>

      {/* PAGE HEADER */}
      <section 
        className="page-header animate-fade-in consultation-page-header"
        style={{
          padding: '100px 0 60px',
          background: 'linear-gradient(180deg, #FFFFFF 0%, #F7FBFF 100%)',
        }}
      >
        <div className="consultation-header-container max-w-[1440px] mx-auto px-12">
          <div className="text-center">
            <h1 
              className="consultation-page-title"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '52px',
                fontWeight: 700,
                color: '#151561',
                letterSpacing: '-0.02em',
                marginBottom: '20px',
              }}
            >
              Book a Consultation
            </h1>
            <p 
              className="consultation-page-subtitle"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '19px',
                fontWeight: 400,
                color: '#505050',
                lineHeight: '1.7',
                maxWidth: '700px',
                margin: '0 auto',
              }}
            >
              Choose a suitable time, complete your details, and our team will review and confirm your consultation request.
            </p>
          </div>
        </div>
      </section>

      {/* STEP INDICATOR */}
      <section 
        className="step-indicator consultation-step-indicator"
        style={{
          padding: '40px 0',
          backgroundColor: '#FFFFFF',
          borderBottom: '1px solid rgba(0, 0, 0, 0.06)',
        }}
      >
        <div className="consultation-step-container max-w-[900px] mx-auto px-12">
          <div className="consultation-steps-wrapper flex items-center justify-between">
            {steps.map((step, index) => (
              <div key={step.number} className="consultation-step-item flex items-center" style={{ flex: 1 }}>
                <div className="flex items-center gap-3">
                  <div 
                    className="step-circle"
                    style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '50%',
                      background: step.active 
                        ? 'linear-gradient(135deg, #FF0000 0%, #FF3333 100%)' 
                        : 'rgba(21, 21, 97, 0.1)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      transition: 'all 0.4s ease',
                      boxShadow: step.active ? '0 4px 12px rgba(255, 0, 0, 0.25)' : 'none',
                    }}
                  >
                    {step.completed ? (
                      <CheckCircle2 size={22} color="#FFFFFF" />
                    ) : (
                      <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', fontWeight: 600, color: step.active ? '#FFFFFF' : '#151561' }}>
                        {step.number}
                      </span>
                    )}
                  </div>
                  <span 
                    className="step-label"
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '16px',
                      fontWeight: step.active ? 600 : 400,
                      color: step.active ? '#151561' : '#808080',
                    }}
                  >
                    {step.label}
                  </span>
                </div>
                {index < steps.length - 1 && (
                  <div 
                    className="step-divider"
                    style={{
                      flex: 1,
                      height: '2px',
                      background: step.completed 
                        ? 'linear-gradient(90deg, #FF0000 0%, #FF3333 100%)' 
                        : 'rgba(21, 21, 97, 0.1)',
                      margin: '0 20px',
                      transition: 'all 0.4s ease',
                    }}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STEP CONTENT */}
      <section 
        className="step-content"
        style={{
          padding: '80px 0',
          background: 'linear-gradient(180deg, #FFFFFF 0%, #F7FBFF 100%)',
          minHeight: '600px',
        }}
      >
        <div className="max-w-[1440px] mx-auto px-12">
          {/* STEP 1 — BOOK YOUR SLOT */}
          {currentStep === 1 && (
            <div 
              className="step-1-container consultation-step-1-container animate-fade-in-up"
              style={{
                background: '#FFFFFF',
                borderRadius: '32px',
                padding: '60px',
                boxShadow: '0 8px 32px rgba(21, 21, 97, 0.08)',
                border: '1px solid rgba(0, 0, 0, 0.06)',
                position: 'relative',
                pointerEvents: !isConsultationActive ? 'auto' : 'none',
              }}
            >
              {/* Consultation Overlay */}
              <ConsultationOverlay 
                isActive={!isConsultationActive}
                variant="coming-soon"
                ctaType="contact"
              />

              <div className="consultation-two-col-grid grid grid-cols-2 gap-12">
                {/* LEFT SIDE — Consultation Type Panel */}
                <div 
                  className="consultation-left-panel"
                  style={{
                    height: '100%',
                  }}
                >
                  <div
                    className="consultation-details-card"
                    style={{
                      width: '100%',
                      height: '100%',
                      padding: '48px',
                      background: 'linear-gradient(165deg, rgba(255, 0, 0, 0.04) 0%, #FFFFFF 45%, rgba(21, 21, 97, 0.06) 100%)',
                      borderRadius: '24px',
                      position: 'relative',
                      overflow: 'hidden',
                      boxShadow: '0 12px 40px rgba(21, 21, 97, 0.08), inset 0 2px 16px rgba(21, 21, 97, 0.04)',
                      border: '1px solid rgba(255, 0, 0, 0.08)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                  {/* Abstract Background Shape - Top Right Red Glow */}
                  <div 
                    style={{
                      position: 'absolute',
                      top: '-80px',
                      right: '-80px',
                      width: '280px',
                      height: '280px',
                      background: 'radial-gradient(circle, rgba(255, 0, 0, 0.06) 0%, transparent 70%)',
                      borderRadius: '50%',
                      pointerEvents: 'none',
                    }}
                  />

                  {/* Abstract Background Shape - Bottom Left Navy Glow */}
                  <div 
                    style={{
                      position: 'absolute',
                      bottom: '-100px',
                      left: '-100px',
                      width: '320px',
                      height: '320px',
                      background: 'radial-gradient(circle, rgba(21, 21, 97, 0.05) 0%, transparent 70%)',
                      borderRadius: '50%',
                      pointerEvents: 'none',
                    }}
                  />

                  <div style={{ position: 'relative', zIndex: 1 }}>
                    {/* Logo */}
                    {/* <div style={{ marginBottom: '28px' }}>
                      <img 
                        src={logo}
                        alt="Optichore"
                        style={{
                          width: '120px',
                          height: 'auto',
                        }}
                      />
                    </div> */}

                    {/* Micro Header */}
                    <div 
                      style={{
                        fontFamily: 'Inter, sans-serif',
                        fontSize: '14px',
                        fontWeight: 600,
                        color: '#8A8A8A',
                        textTransform: 'uppercase',
                        letterSpacing: '2px',
                        marginBottom: '14px',
                      }}
                    >
                      Book a Free Consultation
                    </div>

                    <h3 
                      style={{
                        fontFamily: 'Inter, sans-serif',
                        fontSize: '40px',
                        fontWeight: 800,
                        color: '#11125A',
                        marginBottom: '16px',
                        letterSpacing: '-0.02em',
                        lineHeight: '1.2',
                      }}
                    >
                      {selectedDuration === '30min' ? '30 Minutes' : '1 Hour'} Consultation
                    </h3>

                    {/* Premium Sub-headline */}
                    <p 
                      style={{
                        fontFamily: 'Inter, sans-serif',
                        fontSize: '17px',
                        fontWeight: 400,
                        color: '#555555',
                        lineHeight: '1.65',
                        marginBottom: '32px',
                      }}
                    >
                      Speak with our certified experts to understand how Optichore can support your business growth.
                    </p>

                    {/* Duration Toggle - Premium */}
                    <div 
                      className="duration-toggle-container"
                      style={{
                        display: 'inline-flex',
                        background: 'rgba(21, 21, 97, 0.08)',
                        borderRadius: '60px',
                        padding: '6px',
                        marginBottom: '32px',
                        boxShadow: '0 2px 8px rgba(21, 21, 97, 0.08)',
                      }}
                    >
                      <button
                        onClick={() => setSelectedDuration('30min')}
                        className="duration-button"
                        style={{
                          fontFamily: 'Inter, sans-serif',
                          fontSize: '15px',
                          fontWeight: 600,
                          color: selectedDuration === '30min' ? '#FFFFFF' : '#151561',
                          background: selectedDuration === '30min' 
                            ? 'linear-gradient(135deg, #FF0000 0%, #FF3333 100%)' 
                            : 'transparent',
                          padding: '13px 32px',
                          borderRadius: '60px',
                          border: 'none',
                          cursor: 'pointer',
                          transition: 'all 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
                          boxShadow: selectedDuration === '30min' ? '0 4px 12px rgba(255, 0, 0, 0.25)' : 'none',
                        }}
                        onMouseEnter={(e) => {
                          if (selectedDuration !== '30min') {
                            e.currentTarget.style.background = 'rgba(21, 21, 97, 0.04)';
                          }
                        }}
                        onMouseLeave={(e) => {
                          if (selectedDuration !== '30min') {
                            e.currentTarget.style.background = 'transparent';
                          }
                        }}
                      >
                        30 Minutes
                      </button>
                      <button
                        onClick={() => setSelectedDuration('1hour')}
                        className="duration-button"
                        style={{
                          fontFamily: 'Inter, sans-serif',
                          fontSize: '15px',
                          fontWeight: 600,
                          color: selectedDuration === '1hour' ? '#FFFFFF' : '#151561',
                          background: selectedDuration === '1hour' 
                            ? 'linear-gradient(135deg, #FF0000 0%, #FF3333 100%)' 
                            : 'transparent',
                          padding: '13px 32px',
                          borderRadius: '60px',
                          border: 'none',
                          cursor: 'pointer',
                          transition: 'all 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
                          boxShadow: selectedDuration === '1hour' ? '0 4px 12px rgba(255, 0, 0, 0.25)' : 'none',
                        }}
                        onMouseEnter={(e) => {
                          if (selectedDuration !== '1hour') {
                            e.currentTarget.style.background = 'rgba(21, 21, 97, 0.04)';
                          }
                        }}
                        onMouseLeave={(e) => {
                          if (selectedDuration !== '1hour') {
                            e.currentTarget.style.background = 'transparent';
                          }
                        }}
                      >
                        1 Hour
                      </button>
                    </div>

                    {/* Consultation Summary - Minimal */}
                    {selectedDate && selectedTime && (
                      <div 
                        style={{
                          marginTop: '32px',
                          padding: '22px',
                          background: 'rgba(255, 255, 255, 0.7)',
                          borderRadius: '16px',
                          border: '1px solid rgba(21, 21, 97, 0.08)',
                          boxShadow: '0 2px 8px rgba(21, 21, 97, 0.04)',
                        }}
                      >
                        <h4 
                          style={{
                            fontFamily: 'Inter, sans-serif',
                            fontSize: '14px',
                            fontWeight: 700,
                            color: '#151561',
                            marginBottom: '16px',
                            letterSpacing: '-0.01em',
                          }}
                        >
                          Consultation Summary
                        </h4>

                        {/* Duration */}
                        <div style={{ marginBottom: '14px' }}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                            <Clock size={14} color="#FF0000" />
                            <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', fontWeight: 600, color: '#808080', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                              Duration
                            </span>
                          </div>
                          <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', fontWeight: 600, color: '#151561', paddingLeft: '22px' }}>
                            {selectedDuration === '30min' ? '30 Minutes' : '1 Hour'}
                          </div>
                        </div>

                        {/* Divider */}
                        <div style={{ height: '1px', background: 'rgba(21, 21, 97, 0.06)', margin: '14px 0' }} />

                        {/* Date */}
                        <div style={{ marginBottom: '14px' }}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                            <Clock size={14} color="#FF0000" />
                            <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', fontWeight: 600, color: '#808080', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                              Date & Time
                            </span>
                          </div>
                          <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', fontWeight: 600, color: '#151561', paddingLeft: '22px', lineHeight: '1.5' }}>
                            {selectedDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                            <br />
                            <span style={{ color: '#505050', fontWeight: 500 }}>{selectedTime}</span>
                          </div>
                        </div>

                        {/* Divider */}
                        <div style={{ height: '1px', background: 'rgba(21, 21, 97, 0.06)', margin: '14px 0' }} />

                        {/* Timezone */}
                        <div>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                            <MapPin size={14} color="#FF0000" />
                            <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', fontWeight: 600, color: '#808080', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                              Timezone
                            </span>
                          </div>
                          <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', fontWeight: 600, color: '#151561', paddingLeft: '22px' }}>
                            {Intl.DateTimeFormat().resolvedOptions().timeZone}
                            <span style={{ display: 'block', fontSize: '12px', fontWeight: 400, color: '#808080', marginTop: '2px' }}>
                              Auto-detected
                            </span>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                  </div>
                </div>

                {/* RIGHT SIDE — Calendar + Time Selector */}
                <div className="consultation-right-panel">
                  {/* Calendar */}
                  <div 
                    className="consultation-calendar"
                    style={{
                      background: '#FFFFFF',
                      borderRadius: '20px',
                      padding: '24px',
                      marginBottom: '24px',
                      border: '1px solid rgba(0, 0, 0, 0.06)',
                    }}
                  >
                    <div className="calendar-header" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '24px' }}>
                      <h4 className="calendar-month-title" style={{ fontFamily: 'Inter, sans-serif', fontSize: '18px', fontWeight: 600, color: '#151561' }}>
                        {currentMonth.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
                      </h4>
                      <div className="calendar-nav-buttons" style={{ display: 'flex', gap: '8px' }}>
                        <button
                          className="calendar-nav-btn"
                          onClick={() => !isCurrentMonth() && setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1))}
                          disabled={isCurrentMonth()}
                          style={{
                            width: '36px',
                            height: '36px',
                            borderRadius: '50%',
                            border: '1px solid rgba(0, 0, 0, 0.1)',
                            background: isCurrentMonth() ? 'rgba(0, 0, 0, 0.05)' : '#FFFFFF',
                            cursor: isCurrentMonth() ? 'not-allowed' : 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            opacity: isCurrentMonth() ? 0.4 : 1,
                          }}
                        >
                          <ChevronLeft size={18} color="#151561" />
                        </button>
                        <button
                          className="calendar-nav-btn"
                          onClick={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1))}
                          style={{
                            width: '36px',
                            height: '36px',
                            borderRadius: '50%',
                            border: '1px solid rgba(0, 0, 0, 0.1)',
                            background: '#FFFFFF',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                          }}
                        >
                          <ChevronRight size={18} color="#151561" />
                        </button>
                      </div>
                    </div>

                    {/* Calendar Grid */}
                    <div className="calendar-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '8px' }}>
                      {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                        <div 
                          key={day}
                          style={{
                            fontFamily: 'Inter, sans-serif',
                            fontSize: '13px',
                            fontWeight: 600,
                            color: '#808080',
                            textAlign: 'center',
                            padding: '8px 0',
                          }}
                        >
                          {day}
                        </div>
                      ))}
                      {days.map((day, index) => {
                        const isDisabled = !day || isPastDate(day);
                        const isSelected = day && selectedDate?.getTime() === day.getTime();
                        
                        return (
                          <button
                            key={index}
                            onClick={() => day && !isPastDate(day) && setSelectedDate(day)}
                            disabled={isDisabled}
                            style={{
                              fontFamily: 'Inter, sans-serif',
                              fontSize: '14px',
                              fontWeight: 500,
                              color: isSelected ? '#FFFFFF' : '#151561',
                              background: isSelected
                                ? 'linear-gradient(135deg, #FF0000 0%, #FF3333 100%)' 
                                : day ? '#FFFFFF' : 'transparent',
                              border: day ? '1px solid rgba(0, 0, 0, 0.06)' : 'none',
                              borderRadius: '12px',
                              padding: '12px',
                              cursor: isDisabled ? 'not-allowed' : 'pointer',
                              opacity: isDisabled ? 0.4 : 1,
                              transition: 'all 0.3s ease',
                            }}
                          >
                            {day?.getDate()}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Time Slots */}
                  {selectedDate && (
                    <div 
                      className="animate-fade-in-up"
                      style={{
                        background: '#FFFFFF',
                        borderRadius: '20px',
                        padding: '24px',
                        marginBottom: '24px',
                        border: '1px solid rgba(0, 0, 0, 0.06)',
                      }}
                    >
                      <h4 style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', fontWeight: 600, color: '#151561', marginBottom: '16px' }}>
                        Available Time Slots
                      </h4>
                      <div 
                        style={{
                          display: 'grid',
                          gridTemplateColumns: 'repeat(3, 1fr)',
                          gap: '10px',
                          maxHeight: '240px',
                          overflowY: 'auto',
                        }}
                      >
                        {timeSlots.map(time => {
                          const disabled = isTimeSlotDisabled(time);
                          const isSelected = selectedTime === time;
                          
                          return (
                            <button
                              key={time}
                              onClick={() => !disabled && setSelectedTime(time)}
                              disabled={disabled}
                              style={{
                                fontFamily: 'Inter, sans-serif',
                                fontSize: '14px',
                                fontWeight: 500,
                                color: isSelected ? '#FFFFFF' : '#151561',
                                background: isSelected 
                                  ? 'linear-gradient(135deg, #151561 0%, #3434A0 100%)' 
                                  : '#FFFFFF',
                                border: '1px solid rgba(0, 0, 0, 0.1)',
                                borderRadius: '12px',
                                padding: '12px',
                                cursor: disabled ? 'not-allowed' : 'pointer',
                                opacity: disabled ? 0.4 : 1,
                                transition: 'all 0.3s ease',
                              }}
                            >
                              {time}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {/* Next Button */}
                  <button
                    className="consultation-next-button"
                    onClick={handleNextStep}
                    disabled={!selectedDate || !selectedTime}
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '17px',
                      fontWeight: 600,
                      color: '#FFFFFF',
                      background: selectedDate && selectedTime 
                        ? 'linear-gradient(135deg, #FF0000 0%, #FF3333 100%)' 
                        : 'rgba(21, 21, 97, 0.3)',
                      padding: '16px 40px',
                      borderRadius: '50px',
                      border: 'none',
                      cursor: selectedDate && selectedTime ? 'pointer' : 'not-allowed',
                      width: '100%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '10px',
                      boxShadow: selectedDate && selectedTime ? '0 8px 24px rgba(255, 0, 0, 0.25)' : 'none',
                      transition: 'all 0.3s ease',
                    }}
                  >
                    Next
                    <ArrowRight size={20} />
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* STEP 2 — YOUR INFORMATION */}
          {currentStep === 2 && (
            <div 
              className="step-2-container consultation-step-2-container animate-fade-in-up"
              style={{
                background: '#FFFFFF',
                borderRadius: '32px',
                padding: '60px',
                boxShadow: '0 8px 32px rgba(21, 21, 97, 0.08)',
                border: '1px solid rgba(0, 0, 0, 0.06)',
                position: 'relative',
                pointerEvents: !isConsultationActive ? 'auto' : 'none',
              }}
            >
              {/* Consultation Overlay */}
              <ConsultationOverlay 
                isActive={!isConsultationActive}
                variant="coming-soon"
                ctaType="contact"
              />

              <div className="step-2-grid consultation-step-2-grid grid grid-cols-2 gap-12">
                {/* LEFT SIDE — Booking Summary */}
                <div 
                  className="booking-summary-panel consultation-booking-summary"
                  style={{
                    padding: '40px',
                    background: 'linear-gradient(135deg, #F7FBFF 0%, #FFFFFF 100%)',
                    borderRadius: '24px',
                    position: 'relative',
                    overflow: 'hidden',
                  }}
                >
                  <h3 
                    className="booking-summary-title"
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '28px',
                      fontWeight: 700,
                      color: '#151561',
                      marginBottom: '32px',
                    }}
                  >
                    Booking Summary
                  </h3>

                  <div className="booking-summary-details" style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                    <div>
                      <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', fontWeight: 600, color: '#808080', marginBottom: '6px' }}>
                        Consultation Type
                      </div>
                      <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '17px', fontWeight: 600, color: '#151561' }}>
                        {selectedDuration === '30min' ? '30 Minutes' : '1 Hour'} Consultation
                      </div>
                    </div>

                    <div>
                      <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', fontWeight: 600, color: '#808080', marginBottom: '6px' }}>
                        Date
                      </div>
                      <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '17px', fontWeight: 600, color: '#151561' }}>
                        {selectedDate?.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' })}
                      </div>
                    </div>

                    <div>
                      <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', fontWeight: 600, color: '#808080', marginBottom: '6px' }}>
                        Time
                      </div>
                      <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '17px', fontWeight: 600, color: '#151561' }}>
                        {selectedTime}
                      </div>
                    </div>

                    <div>
                      <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', fontWeight: 600, color: '#808080', marginBottom: '6px' }}>
                        Time Zone
                      </div>
                      <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '17px', fontWeight: 600, color: '#151561' }}>
                        GMT (London)
                      </div>
                    </div>

                    <div className="meeting-type-section" style={{ marginTop: '24px', paddingTop: '24px', borderTop: '1px solid rgba(0, 0, 0, 0.06)' }}>
                      <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', fontWeight: 600, color: '#808080', marginBottom: '12px' }}>
                        Meeting Type
                      </div>
                      <div className="meeting-type-options" style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                        <label 
                          className="meeting-type-option"
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '12px',
                            padding: '14px',
                            background: meetingType === 'online' ? 'rgba(255, 0, 0, 0.08)' : 'transparent',
                            border: `1px solid ${meetingType === 'online' ? '#FF0000' : 'rgba(0, 0, 0, 0.1)'}`,
                            borderRadius: '12px',
                            cursor: 'pointer',
                          }}
                        >
                          <input
                            type="radio"
                            name="meetingType"
                            checked={meetingType === 'online'}
                            onChange={() => setMeetingType('online')}
                            style={{ cursor: 'pointer' }}
                          />
                          <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '15px', color: '#151561' }}>
                            Online Video Meeting
                          </span>
                        </label>
                        <label 
                          className="meeting-type-option"
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '12px',
                            padding: '14px',
                            background: meetingType === 'in-person' ? 'rgba(255, 0, 0, 0.08)' : 'transparent',
                            border: `1px solid ${meetingType === 'in-person' ? '#FF0000' : 'rgba(0, 0, 0, 0.1)'}`,
                            borderRadius: '12px',
                            cursor: 'pointer',
                          }}
                        >
                          <input
                            type="radio"
                            name="meetingType"
                            checked={meetingType === 'in-person'}
                            onChange={() => setMeetingType('in-person')}
                            style={{ cursor: 'pointer' }}
                          />
                          <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '15px', color: '#151561' }}>
                            In-person: London, UK
                          </span>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>

                {/* RIGHT SIDE — Information Form */}
                <div className="information-form-panel consultation-form-panel">
                  <h3 
                    className="form-panel-title"
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '28px',
                      fontWeight: 700,
                      color: '#151561',
                      marginBottom: '32px',
                    }}
                  >
                    Your Information
                  </h3>

                  <div className="form-fields-wrapper" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    <div className="form-field">
                      <label style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', fontWeight: 600, color: '#151561', marginBottom: '8px', display: 'block' }}>
                        First Name *
                      </label>
                      <input
                        type="text"
                        className="form-input"
                        value={formData.firstName}
                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                        placeholder="Enter your first name"
                        style={{
                          fontFamily: 'Inter, sans-serif',
                          fontSize: '15px',
                          color: '#151561',
                          background: '#FFFFFF',
                          border: '1px solid rgba(0, 0, 0, 0.1)',
                          borderRadius: '12px',
                          padding: '14px 16px',
                          width: '100%',
                          outline: 'none',
                          transition: 'all 0.3s ease',
                        }}
                      />
                    </div>

                    <div>
                      <label style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', fontWeight: 600, color: '#151561', marginBottom: '8px', display: 'block' }}>
                        Email *
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="your.email@example.com"
                        style={{
                          fontFamily: 'Inter, sans-serif',
                          fontSize: '15px',
                          color: '#151561',
                          background: '#FFFFFF',
                          border: '1px solid rgba(0, 0, 0, 0.1)',
                          borderRadius: '12px',
                          padding: '14px 16px',
                          width: '100%',
                          outline: 'none',
                          transition: 'all 0.3s ease',
                        }}
                      />
                    </div>

                    <div>
                      <label style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', fontWeight: 600, color: '#151561', marginBottom: '8px', display: 'block' }}>
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+44 20 1234 5678"
                        style={{
                          fontFamily: 'Inter, sans-serif',
                          fontSize: '15px',
                          color: '#151561',
                          background: '#FFFFFF',
                          border: '1px solid rgba(0, 0, 0, 0.1)',
                          borderRadius: '12px',
                          padding: '14px 16px',
                          width: '100%',
                          outline: 'none',
                          transition: 'all 0.3s ease',
                        }}
                      />
                    </div>

                    <div>
                      <label style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', fontWeight: 600, color: '#151561', marginBottom: '8px', display: 'block' }}>
                        Company Website
                      </label>
                      <input
                        type="url"
                        value={formData.website}
                        onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                        placeholder="https://yourcompany.com"
                        style={{
                          fontFamily: 'Inter, sans-serif',
                          fontSize: '15px',
                          color: '#151561',
                          background: '#FFFFFF',
                          border: '1px solid rgba(0, 0, 0, 0.1)',
                          borderRadius: '12px',
                          padding: '14px 16px',
                          width: '100%',
                          outline: 'none',
                          transition: 'all 0.3s ease',
                        }}
                      />
                    </div>

                    <div>
                      <label style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', fontWeight: 600, color: '#151561', marginBottom: '8px', display: 'block' }}>
                        Choose a Service
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        style={{
                          fontFamily: 'Inter, sans-serif',
                          fontSize: '15px',
                          color: '#151561',
                          background: '#FFFFFF',
                          border: '1px solid rgba(0, 0, 0, 0.1)',
                          borderRadius: '12px',
                          padding: '14px 16px',
                          width: '100%',
                          outline: 'none',
                          cursor: 'pointer',
                        }}
                      >
                        <option value="">Select a service</option>
                        {services.map(service => (
                          <option key={service} value={service}>{service}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', fontWeight: 600, color: '#151561', marginBottom: '8px', display: 'block' }}>
                        Additional Notes
                      </label>
                      <textarea
                        value={formData.notes}
                        onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                        placeholder="Tell us about your project or any specific requirements..."
                        rows={4}
                        style={{
                          fontFamily: 'Inter, sans-serif',
                          fontSize: '15px',
                          color: '#151561',
                          background: '#FFFFFF',
                          border: '1px solid rgba(0, 0, 0, 0.1)',
                          borderRadius: '12px',
                          padding: '14px 16px',
                          width: '100%',
                          outline: 'none',
                          resize: 'vertical',
                          transition: 'all 0.3s ease',
                        }}
                      />
                    </div>

                    <label 
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '12px',
                        cursor: 'pointer',
                      }}
                    >
                      <input
                        type="checkbox"
                        checked={formData.agreePolicy}
                        onChange={(e) => setFormData({ ...formData, agreePolicy: e.target.checked })}
                        style={{ marginTop: '4px', cursor: 'pointer' }}
                      />
                      <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#505050' }}>
                        You agree to our privacy policy *
                      </span>
                    </label>

                    <div className="form-button-group" style={{ display: 'flex', gap: '12px', marginTop: '12px' }}>
                      <button
                        className="back-button"
                        onClick={() => setCurrentStep(1)}
                        style={{
                          fontFamily: 'Inter, sans-serif',
                          fontSize: '16px',
                          fontWeight: 600,
                          color: '#151561',
                          background: 'transparent',
                          border: '2px solid #151561',
                          borderRadius: '50px',
                          padding: '14px 32px',
                          cursor: 'pointer',
                          transition: 'all 0.3s ease',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '8px',
                        }}
                      >
                        <ArrowLeft size={18} />
                        Back
                      </button>
                      <button
                        className="submit-button"
                        onClick={handleNextStep}
                        disabled={!validateForm()}
                        style={{
                          fontFamily: 'Inter, sans-serif',
                          fontSize: '16px',
                          fontWeight: 600,
                          color: '#FFFFFF',
                          background: validateForm() 
                            ? 'linear-gradient(135deg, #FF0000 0%, #FF3333 100%)' 
                            : 'rgba(21, 21, 97, 0.3)',
                          border: 'none',
                          borderRadius: '50px',
                          padding: '14px 32px',
                          cursor: validateForm() ? 'pointer' : 'not-allowed',
                          flex: 1,
                          boxShadow: validateForm() ? '0 8px 24px rgba(255, 0, 0, 0.25)' : 'none',
                          transition: 'all 0.3s ease',
                        }}
                      >
                        Request Consultation
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* STEP 3 — PENDING REVIEW */}
          {currentStep === 3 && (
            <div 
              className="step-3-container consultation-step-3-container animate-fade-in"
              style={{
                background: '#FFFFFF',
                borderRadius: '32px',
                padding: '80px 60px',
                boxShadow: '0 8px 32px rgba(21, 21, 97, 0.08)',
                border: '1px solid rgba(0, 0, 0, 0.06)',
                textAlign: 'center',
                maxWidth: '800px',
                margin: '0 auto',
              }}
            >
              {/* Premium Success Checkmark Icon with Animation */}
              <div 
                className="success-icon-wrapper consultation-success-icon"
                style={{
                  width: '120px',
                  height: '120px',
                  background: 'linear-gradient(135deg, #FF0000 0%, #FF3333 100%)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 36px',
                  boxShadow: '0 16px 48px rgba(255, 0, 0, 0.3)',
                  position: 'relative',
                  animation: 'successPulse 2s ease-in-out infinite',
                }}
              >
                {/* Outer glow ring */}
                <div
                  style={{
                    position: 'absolute',
                    width: '140px',
                    height: '140px',
                    borderRadius: '50%',
                    border: '3px solid rgba(255, 0, 0, 0.2)',
                    animation: 'ringExpand 2s ease-in-out infinite',
                  }}
                />
                <CheckCircle2 
                  size={60} 
                  color="#FFFFFF" 
                  strokeWidth={2.5}
                  style={{
                    animation: 'checkmarkStroke 0.6s ease-in-out',
                  }}
                />
              </div>

              {/* Main Heading */}
              <h2 
                className="success-title"
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '36px',
                  fontWeight: 800,
                  color: '#151561',
                  marginBottom: '20px',
                  letterSpacing: '-0.02em',
                  lineHeight: '1.2',
                }}
              >
                Your Consultation is Successfully Booked!
              </h2>

              {/* Subheading */}
              <p 
                className="success-description"
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '19px',
                  fontWeight: 400,
                  color: '#606060',
                  lineHeight: '1.7',
                  maxWidth: '520px',
                  margin: '0 auto 48px',
                }}
              >
                We&apos;ve received your request. Our team will review the details and send a confirmation shortly.
              </p>

              {/* Appointment Summary Card */}
              <div 
                className="appointment-summary-card consultation-appointment-card"
                style={{
                  marginTop: '48px',
                  padding: '36px',
                  background: 'linear-gradient(135deg, rgba(255, 0, 0, 0.02) 0%, #F7FBFF 100%)',
                  borderRadius: '24px',
                  border: '1px solid rgba(21, 21, 97, 0.08)',
                  boxShadow: '0 12px 40px rgba(21, 21, 97, 0.1)',
                  textAlign: 'left',
                  animation: 'slideUp 0.6s ease-out 0.3s backwards',
                }}
              >
                <h4 
                  className="appointment-card-title"
                  style={{ 
                    fontFamily: 'Inter, sans-serif', 
                    fontSize: '20px', 
                    fontWeight: 700, 
                    color: '#151561', 
                    marginBottom: '28px',
                    textAlign: 'center',
                  }}
                >
                  Appointment Details
                </h4>

                {/* Selected Date */}
                <div className="appointment-detail-row" style={{ display: 'flex', alignItems: 'flex-start', gap: '16px', marginBottom: '20px' }}>
                  <div 
                    style={{
                      width: '44px',
                      height: '44px',
                      background: 'linear-gradient(135deg, rgba(255, 0, 0, 0.1) 0%, rgba(255, 0, 0, 0.05) 100%)',
                      borderRadius: '12px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <Clock size={20} color="#FF0000" />
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', fontWeight: 600, color: '#808080', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '6px' }}>
                      Selected Date
                    </div>
                    <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', fontWeight: 600, color: '#151561' }}>
                      {selectedDate?.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' })}
                    </div>
                  </div>
                </div>

                {/* Divider */}
                <div style={{ height: '1px', background: 'rgba(21, 21, 97, 0.08)', margin: '20px 0' }} />

                {/* Selected Time */}
                <div className="appointment-detail-row" style={{ display: 'flex', alignItems: 'flex-start', gap: '16px', marginBottom: '20px' }}>
                  <div 
                    style={{
                      width: '44px',
                      height: '44px',
                      background: 'linear-gradient(135deg, rgba(255, 0, 0, 0.1) 0%, rgba(255, 0, 0, 0.05) 100%)',
                      borderRadius: '12px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <Clock size={20} color="#FF0000" />
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', fontWeight: 600, color: '#808080', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '6px' }}>
                      Selected Time
                    </div>
                    <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', fontWeight: 600, color: '#151561' }}>
                      {selectedTime}
                    </div>
                  </div>
                </div>

                {/* Divider */}
                <div style={{ height: '1px', background: 'rgba(21, 21, 97, 0.08)', margin: '20px 0' }} />

                {/* Duration */}
                <div className="appointment-detail-row" style={{ display: 'flex', alignItems: 'flex-start', gap: '16px', marginBottom: '20px' }}>
                  <div 
                    style={{
                      width: '44px',
                      height: '44px',
                      background: 'linear-gradient(135deg, rgba(255, 0, 0, 0.1) 0%, rgba(255, 0, 0, 0.05) 100%)',
                      borderRadius: '12px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <Clock size={20} color="#FF0000" />
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', fontWeight: 600, color: '#808080', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '6px' }}>
                      Duration
                    </div>
                    <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', fontWeight: 600, color: '#151561' }}>
                      {selectedDuration === '30min' ? '30 Minutes' : '1 Hour'}
                    </div>
                  </div>
                </div>

                {/* Divider */}
                <div style={{ height: '1px', background: 'rgba(21, 21, 97, 0.08)', margin: '20px 0' }} />

                {/* Timezone */}
                <div className="appointment-detail-row" style={{ display: 'flex', alignItems: 'flex-start', gap: '16px', marginBottom: '20px' }}>
                  <div 
                    style={{
                      width: '44px',
                      height: '44px',
                      background: 'linear-gradient(135deg, rgba(255, 0, 0, 0.1) 0%, rgba(255, 0, 0, 0.05) 100%)',
                      borderRadius: '12px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <Globe size={20} color="#FF0000" />
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', fontWeight: 600, color: '#808080', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '6px' }}>
                      Timezone
                    </div>
                    <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', fontWeight: 600, color: '#151561' }}>
                      {Intl.DateTimeFormat().resolvedOptions().timeZone}
                      <span style={{ display: 'block', fontSize: '13px', fontWeight: 400, color: '#808080', marginTop: '4px' }}>
                        Auto-detected
                      </span>
                    </div>
                  </div>
                </div>

                {/* Divider */}
                <div style={{ height: '1px', background: 'rgba(21, 21, 97, 0.08)', margin: '20px 0' }} />

                {/* Status */}
                <div className="appointment-detail-row appointment-status-row" style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                  <div 
                    style={{
                      width: '44px',
                      height: '44px',
                      background: 'linear-gradient(135deg, rgba(255, 165, 0, 0.1) 0%, rgba(255, 165, 0, 0.05) 100%)',
                      borderRadius: '12px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <Clock size={20} color="#FF8C00" />
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', fontWeight: 600, color: '#808080', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '6px' }}>
                      Status
                    </div>
                    <div 
                      style={{ 
                        display: 'inline-block',
                        fontFamily: 'Inter, sans-serif', 
                        fontSize: '14px', 
                        fontWeight: 600, 
                        color: '#FF8C00',
                        background: 'rgba(255, 165, 0, 0.1)',
                        padding: '6px 14px',
                        borderRadius: '50px',
                      }}
                    >
                      Pending Admin Review
                    </div>
                  </div>
                </div>
              </div>

              {/* Confirmation Text */}
              <p 
                className="confirmation-message"
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '15px',
                  fontWeight: 400,
                  color: '#707070',
                  lineHeight: '1.6',
                  marginTop: '32px',
                  marginBottom: '40px',
                }}
              >
                You will receive an email confirmation once your consultation request is reviewed.
              </p>

              {/* Action Buttons */}
              <div className="success-action-buttons" style={{ display: 'flex', gap: '16px', justifyContent: 'center', marginTop: '40px' }}>
                <button
                  className="primary-cta-button"
                  onClick={() => window.location.href = '/'}
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '16px',
                    fontWeight: 600,
                    color: '#FFFFFF',
                    background: 'linear-gradient(135deg, #FF0000 0%, #FF3333 100%)',
                    padding: '16px 40px',
                    borderRadius: '50px',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 8px 24px rgba(255, 0, 0, 0.3)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = '0 12px 32px rgba(255, 0, 0, 0.4)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 8px 24px rgba(255, 0, 0, 0.3)';
                  }}
                >
                  Go to Home
                </button>

                <button
                  className="secondary-cta-button"
                  onClick={() => {
                    setCurrentStep(1);
                    setSelectedDate(null);
                    setSelectedTime(null);
                    setFormData({
                      firstName: '',
                      email: '',
                      phone: '',
                      website: '',
                      service: '',
                      notes: '',
                      agreePolicy: false
                    });
                  }}
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '16px',
                    fontWeight: 600,
                    color: '#151561',
                    background: '#FFFFFF',
                    padding: '16px 40px',
                    borderRadius: '50px',
                    border: '2px solid #151561',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = '#151561';
                    e.currentTarget.style.color = '#FFFFFF';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = '#FFFFFF';
                    e.currentTarget.style.color = '#151561';
                  }}
                >
                  Book Another Consultation
                </button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* WHY CONSULTATION WITH OPTICHORE */}
      <section 
        className="why-consultation-section consultation-why-section"
        style={{
          padding: '120px 0',
          backgroundColor: '#FFFFFF',
        }}
      >
        <div className="max-w-[1440px] mx-auto px-12">
          <div className="text-center mb-16 why-section-header">
            <h2 
              className="why-section-title"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '48px',
                fontWeight: 700,
                color: '#151561',
                letterSpacing: '-0.02em',
                marginBottom: '16px',
              }}
            >
              Why Consultation with Optichore?
            </h2>
            <p 
              className="why-section-subtitle"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '19px',
                fontWeight: 400,
                color: '#505050',
                lineHeight: '1.7',
                maxWidth: '700px',
                margin: '0 auto',
              }}
            >
              We bring expertise, certification, and proven results to every consultation.
            </p>
          </div>

          <div className="why-cards-grid grid grid-cols-4 gap-6">
            {whyCards.map((card, index) => {
              const Icon = card.icon;
              return (
                <div
                  key={index}
                  className="why-card consultation-why-card animate-fade-in-up"
                  style={{
                    background: 'rgba(255, 255, 255, 0.7)',
                    backdropFilter: 'blur(20px)',
                    WebkitBackdropFilter: 'blur(20px)',
                    borderRadius: '24px',
                    padding: '36px 28px',
                    border: '1px solid rgba(255, 255, 255, 0.4)',
                    boxShadow: '0 8px 32px rgba(21, 21, 97, 0.1)',
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    animationDelay: `${index * 0.1}s`,
                  }}
                >
                  <div 
                    className="why-card-icon"
                    style={{
                      width: '60px',
                      height: '60px',
                      background: 'linear-gradient(135deg, #FF0000 0%, #FF3333 100%)',
                      borderRadius: '14px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '20px',
                      boxShadow: '0 6px 20px rgba(255, 0, 0, 0.25)',
                    }}
                  >
                    <Icon size={28} color="#FFFFFF" />
                  </div>

                  <div className="why-card-content">
                    <h3 
                      className="why-card-title"
                      style={{
                        fontFamily: 'Inter, sans-serif',
                        fontSize: '19px',
                        fontWeight: 600,
                        color: '#151561',
                        marginBottom: '10px',
                        lineHeight: '1.3',
                      }}
                    >
                      {card.title}
                    </h3>

                    <p 
                      className="why-card-description"
                      style={{
                        fontFamily: 'Inter, sans-serif',
                        fontSize: '15px',
                        fontWeight: 400,
                        color: '#505050',
                        lineHeight: '1.65',
                      }}
                    >
                      {card.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* MINI FAQ SECTION */}
      <section 
        className="faq-section"
        style={{
          padding: '120px 0',
          background: 'linear-gradient(180deg, #FFFFFF 0%, #F7FBFF 100%)',
        }}
      >
        <div className="max-w-[900px] mx-auto px-12">
          <div className="text-center mb-16">
            <h2 
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '48px',
                fontWeight: 700,
                color: '#151561',
                letterSpacing: '-0.02em',
                marginBottom: '16px',
              }}
            >
              Frequently Asked Questions
            </h2>
          </div>

          <div className="consultation-faq-list" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="consultation-faq-item"
                style={{
                  background: '#FFFFFF',
                  borderRadius: '20px',
                  border: '1px solid rgba(0, 0, 0, 0.06)',
                  overflow: 'hidden',
                  transition: 'all 0.3s ease',
                }}
              >
                <button
                  onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                  style={{
                    width: '100%',
                    padding: '24px 28px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    background: 'transparent',
                    border: 'none',
                    cursor: 'pointer',
                    textAlign: 'left',
                  }}
                >
                  <span 
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '17px',
                      fontWeight: 600,
                      color: '#151561',
                    }}
                  >
                    {faq.q}
                  </span>
                  <ChevronDown 
                    size={20} 
                    color="#151561"
                    style={{
                      transform: expandedFaq === index ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 0.3s ease',
                    }}
                  />
                </button>
                {expandedFaq === index && (
                  <div 
                    className="animate-fade-in"
                    style={{
                      padding: '0 28px 24px',
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '15px',
                      color: '#505050',
                      lineHeight: '1.7',
                    }}
                  >
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA SECTION */}
      <section 
        className="final-cta-section"
        style={{
          padding: '100px 0',
          background: 'linear-gradient(135deg, #151561 0%, #1a1a7a 100%)',
        }}
      >
        <div className="max-w-[1440px] mx-auto px-12 text-center">
          <h2 
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '42px',
              fontWeight: 700,
              color: '#FFFFFF',
              letterSpacing: '-0.02em',
              marginBottom: '24px',
            }}
          >
            Need Quick Assistance?
          </h2>
          <p 
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '18px',
              fontWeight: 400,
              color: 'rgba(255, 255, 255, 0.8)',
              lineHeight: '1.7',
              maxWidth: '600px',
              margin: '0 auto 40px',
            }}
          >
            Our support team is available to help you with any questions.
          </p>
          <button
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '17px',
              fontWeight: 600,
              color: '#151561',
              background: '#FFFFFF',
              padding: '16px 40px',
              borderRadius: '50px',
              border: 'none',
              cursor: 'pointer',
              boxShadow: '0 8px 24px rgba(0, 0, 0, 0.15)',
              transition: 'all 0.3s ease',
            }}
          >
            Contact Support
          </button>
        </div>
      </section>

      {/* DEVELOPER CONTROL - Toggle Overlay (Remove in production) */}
      <section 
        style={{
          padding: '40px 0',
          background: 'linear-gradient(135deg, #F7FBFF 0%, #FFFFFF 100%)',
          borderTop: '2px dashed rgba(255, 0, 0, 0.2)',
          borderBottom: '2px dashed rgba(255, 0, 0, 0.2)',
        }}
      >
        <div className="max-w-[1440px] mx-auto px-12">
          <div 
            style={{
              background: '#FFFFFF',
              borderRadius: '20px',
              padding: '32px',
              boxShadow: '0 4px 20px rgba(21, 21, 97, 0.08)',
              border: '1px solid rgba(0, 0, 0, 0.06)',
              textAlign: 'center',
            }}
          >
            <div style={{ marginBottom: '20px' }}>
              <h4 
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '20px',
                  fontWeight: 700,
                  color: '#151561',
                  marginBottom: '8px',
                }}
              >
                🛠️ Developer Controls
              </h4>
              <p 
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '14px',
                  fontWeight: 400,
                  color: '#808080',
                  lineHeight: '1.6',
                }}
              >
                Toggle the consultation booking overlay on/off. Remove this section in production.
              </p>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '20px' }}>
              <span 
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '15px',
                  fontWeight: 600,
                  color: '#505050',
                }}
              >
                Consultation Status:
              </span>
              
              <div 
                style={{
                  display: 'inline-flex',
                  background: 'rgba(21, 21, 97, 0.08)',
                  borderRadius: '60px',
                  padding: '6px',
                }}
              >
                <button
                  onClick={() => setIsConsultationActive(false)}
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '14px',
                    fontWeight: 600,
                    color: !isConsultationActive ? '#FFFFFF' : '#151561',
                    background: !isConsultationActive 
                      ? 'linear-gradient(135deg, #FF0000 0%, #FF3333 100%)' 
                      : 'transparent',
                    padding: '10px 24px',
                    borderRadius: '60px',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    boxShadow: !isConsultationActive ? '0 4px 12px rgba(255, 0, 0, 0.25)' : 'none',
                  }}
                >
                  Coming Soon (Show Overlay)
                </button>
                <button
                  onClick={() => setIsConsultationActive(true)}
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '14px',
                    fontWeight: 600,
                    color: isConsultationActive ? '#FFFFFF' : '#151561',
                    background: isConsultationActive 
                      ? 'linear-gradient(135deg, #10B981 0%, #059669 100%)' 
                      : 'transparent',
                    padding: '10px 24px',
                    borderRadius: '60px',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    boxShadow: isConsultationActive ? '0 4px 12px rgba(16, 185, 129, 0.25)' : 'none',
                  }}
                >
                  Active (Hide Overlay)
                </button>
              </div>

              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '8px 16px',
                  borderRadius: '50px',
                  background: !isConsultationActive 
                    ? 'rgba(255, 0, 0, 0.1)' 
                    : 'rgba(16, 185, 129, 0.1)',
                  border: `1px solid ${!isConsultationActive ? 'rgba(255, 0, 0, 0.2)' : 'rgba(16, 185, 129, 0.2)'}`,
                }}
              >
                <div
                  style={{
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    background: !isConsultationActive ? '#FF0000' : '#10B981',
                  }}
                />
                <span
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '13px',
                    fontWeight: 600,
                    color: !isConsultationActive ? '#FF0000' : '#10B981',
                  }}
                >
                  {!isConsultationActive ? 'OVERLAY ON' : 'OVERLAY OFF'}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}

      {/* ANIMATIONS & STYLES */}
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes successPulse {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
        }

        @keyframes ringExpand {
          0% {
            transform: scale(1);
            opacity: 0.6;
          }
          50% {
            transform: scale(1.1);
            opacity: 0.3;
          }
          100% {
            transform: scale(1);
            opacity: 0.6;
          }
        }

        @keyframes checkmarkStroke {
          0% {
            opacity: 0;
            transform: scale(0.8);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes slideUp {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fadeIn 0.6s ease forwards;
        }

        .animate-fade-in-up {
          opacity: 0;
          animation: fadeInUp 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }

        .why-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 60px rgba(21, 21, 97, 0.18);
        }

        input:focus,
        textarea:focus,
        select:focus {
          border-color: #FF0000 !important;
          box-shadow: 0 0 0 3px rgba(255, 0, 0, 0.1) !important;
        }

        html {
          scroll-behavior: smooth;
        }

        /* ===== TABLET BREAKPOINT (768px - 1024px) ===== */
        @media (min-width: 768px) and (max-width: 1024px) {
          .consultation-page-header {
            padding: 80px 0 50px !important;
          }

          .consultation-header-container {
            padding-left: 2rem !important;
            padding-right: 2rem !important;
          }

          .consultation-page-title {
            font-size: 44px !important;
          }

          .consultation-page-subtitle {
            font-size: 18px !important;
            max-width: 90% !important;
          }

          .consultation-step-indicator {
            padding: 32px 0 !important;
          }

          .consultation-step-container {
            padding-left: 2rem !important;
            padding-right: 2rem !important;
          }

          .step-label {
            font-size: 14px !important;
          }

          .step-divider {
            margin: 0 12px !important;
          }

          .consultation-step-1-container {
            padding: 40px !important;
          }

          .consultation-details-card {
            padding: 32px !important;
          }

          .consultation-calendar {
            padding: 20px !important;
          }

          .calendar-grid {
            gap: 6px !important;
          }

          /* Step 2 - Tablet */
          .consultation-step-2-container {
            padding: 40px !important;
          }

          .consultation-step-2-grid {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
            display: flex !important;
            flex-direction: column !important;
          }

          /* Reorder for tablet - Summary FIRST, Form SECOND */
          .consultation-booking-summary {
            order: 1 !important;
            padding: 32px !important;
          }

          .booking-summary-title {
            font-size: 26px !important;
            margin-bottom: 28px !important;
          }

          .booking-summary-details {
            gap: 20px !important;
          }

          .consultation-form-panel {
            order: 2 !important;
            padding: 0 !important;
          }

          .form-button-group {
            gap: 12px !important;
          }

          .back-button {
            padding: 12px 28px !important;
          }

          .submit-button {
            padding: 12px 28px !important;
          }

          /* Why Consultation Section - Tablet */
          .consultation-why-section {
            padding: 80px 0 !important;
          }

          .why-section-header {
            margin-bottom: 48px !important;
          }

          .why-section-title {
            font-size: 40px !important;
          }

          .why-section-subtitle {
            font-size: 18px !important;
            max-width: 80% !important;
          }

          /* Cards Grid - 2x2 Layout */
          .why-cards-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 24px !important;
          }

          /* Cards - Vertical Layout on Tablet */
          .consultation-why-card {
            display: flex !important;
            flex-direction: column !important;
            align-items: flex-start !important;
            padding: 32px 24px !important;
            border-radius: 24px !important;
          }

          .why-card-icon {
            width: 56px !important;
            height: 56px !important;
            margin-bottom: 16px !important;
            border-radius: 14px !important;
          }

          .why-card-icon svg {
            width: 26px !important;
            height: 26px !important;
          }

          .why-card-title {
            font-size: 18px !important;
            margin-bottom: 8px !important;
          }

          .why-card-description {
            font-size: 14px !important;
          }

          /* FAQ - Tablet */
          .faq-section {
            padding: 80px 0 !important;
          }

          .faq-section h2 {
            font-size: 40px !important;
          }

          .consultation-faq-item button {
            padding: 20px 24px !important;
          }

          .consultation-faq-item > div {
            padding: 0 24px 20px !important;
          }

          /* Step 3 - Tablet */
          .consultation-step-3-container {
            padding: 60px 48px !important;
            max-width: 90% !important;
          }

          .consultation-success-icon {
            width: 100px !important;
            height: 100px !important;
            margin-bottom: 28px !important;
          }

          .consultation-success-icon svg {
            width: 50px !important;
            height: 50px !important;
          }

          .success-title {
            font-size: 32px !important;
          }

          .success-description {
            font-size: 18px !important;
            margin-bottom: 40px !important;
          }

          .consultation-appointment-card {
            padding: 32px !important;
            margin-top: 40px !important;
          }

          .appointment-card-title {
            font-size: 19px !important;
            margin-bottom: 24px !important;
          }

          .appointment-detail-row > div:last-child > div:last-child {
            font-size: 16px !important;
          }

          .confirmation-message {
            font-size: 15px !important;
            margin-top: 28px !important;
            margin-bottom: 36px !important;
          }

          .success-action-buttons {
            gap: 14px !important;
            flex-wrap: wrap;
          }

          .primary-cta-button,
          .secondary-cta-button {
            flex: 1;
            min-width: 200px;
          }
        }

        /* ===== MOBILE BREAKPOINT (≤767px) ===== */
        @media (max-width: 767px) {
          /* Page Header */
          .consultation-page-header {
            padding: 60px 0 40px !important;
          }

          .consultation-header-container {
            padding-left: 1.5rem !important;
            padding-right: 1.5rem !important;
          }

          .consultation-page-title {
            font-size: 32px !important;
            margin-bottom: 16px !important;
            letter-spacing: -0.01em !important;
          }

          .consultation-page-subtitle {
            font-size: 16px !important;
            line-height: 1.6 !important;
            max-width: 100% !important;
          }

          /* Step Indicator - Compact Horizontal */
          .consultation-step-indicator {
            padding: 24px 0 !important;
          }

          .consultation-step-container {
            padding-left: 1rem !important;
            padding-right: 1rem !important;
          }

          .consultation-steps-wrapper {
            gap: 8px;
          }

          .consultation-step-item {
            flex-direction: column;
            align-items: center !important;
            text-align: center;
            gap: 6px !important;
          }

          .consultation-step-item > div {
            flex-direction: column;
            gap: 6px !important;
          }

          .step-circle {
            width: 36px !important;
            height: 36px !important;
          }

          .step-circle span {
            font-size: 14px !important;
          }

          .step-label {
            font-size: 11px !important;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            max-width: 80px;
          }

          .step-divider {
            display: none !important;
          }

          /* Step Content */
          .step-content {
            padding: 40px 0 !important;
          }

          .step-content > div {
            padding-left: 1rem !important;
            padding-right: 1rem !important;
          }

          /* Step 1 Container - Single Column */
          .consultation-step-1-container {
            padding: 24px !important;
            border-radius: 24px !important;
          }

          .consultation-two-col-grid {
            grid-template-columns: 1fr !important;
            gap: 24px !important;
          }

          /* Consultation Details Card */
          .consultation-left-panel {
            order: 1;
          }

          .consultation-details-card {
            padding: 24px !important;
            display: block !important;
            height: auto !important;
          }

          .consultation-details-card > div {
            width: 100%;
            text-align: center;
          }

          .consultation-details-card img {
            width: 100px !important;
            margin: 0 auto 20px !important;
          }

          .consultation-details-card h3 {
            font-size: 28px !important;
            line-height: 1.3 !important;
          }

          .consultation-details-card p {
            font-size: 15px !important;
          }

          /* Duration Toggle - Mobile Friendly */
          .duration-toggle-container {
            width: 100% !important;
            display: flex !important;
          }

          .duration-button {
            flex: 1 !important;
            padding: 14px 20px !important;
            font-size: 14px !important;
            min-height: 48px;
          }

          /* Calendar - Right Panel */
          .consultation-right-panel {
            order: 2;
          }

          .consultation-calendar {
            padding: 16px !important;
            margin-bottom: 20px !important;
          }

          .calendar-header {
            margin-bottom: 16px !important;
          }

          .calendar-month-title {
            font-size: 16px !important;
          }

          .calendar-nav-buttons {
            gap: 6px !important;
          }

          .calendar-nav-btn {
            width: 44px !important;
            height: 44px !important;
          }

          .calendar-grid {
            gap: 4px !important;
          }

          .calendar-grid > div {
            font-size: 11px !important;
            padding: 4px 0 !important;
          }

          .calendar-grid > button {
            padding: 10px 4px !important;
            font-size: 13px !important;
            min-height: 40px;
          }

          /* Time Slots */
          .animate-fade-in-up > div:nth-child(2) {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 8px !important;
            max-height: 200px !important;
          }

          .animate-fade-in-up > div:nth-child(2) button {
            padding: 14px 8px !important;
            font-size: 13px !important;
            min-height: 48px;
          }

          /* Next Button - Mobile Sticky */
          .consultation-next-button {
            padding: 16px 32px !important;
            font-size: 16px !important;
            height: 52px !important;
            position: relative;
          }

          /* Step 2 Container - Single Column */
          .consultation-step-2-container {
            padding: 24px !important;
            border-radius: 24px !important;
          }

          .step-2-grid {
            grid-template-columns: 1fr !important;
            gap: 24px !important;
            display: flex !important;
            flex-direction: column !important;
          }

          /* Reorder for mobile - Summary FIRST, Form SECOND */
          .consultation-booking-summary {
            order: 1 !important;
            padding: 20px !important;
            border-radius: 20px !important;
          }

          .booking-summary-title {
            font-size: 22px !important;
            margin-bottom: 20px !important;
          }

          .booking-summary-details {
            gap: 16px !important;
          }

          .booking-summary-details > div {
            display: flex;
            flex-direction: column;
          }

          .booking-summary-details > div > div:first-child {
            font-size: 12px !important;
            margin-bottom: 4px !important;
          }

          .booking-summary-details > div > div:last-child {
            font-size: 15px !important;
          }

          .meeting-type-section {
            margin-top: 16px !important;
            padding-top: 16px !important;
          }

          .consultation-form-panel {
            order: 2 !important;
          }

          /* Form Inputs */
          .form-input,
          .step-2-container input,
          .step-2-container select,
          .step-2-container textarea {
            font-size: 16px !important;
            padding: 14px 16px !important;
            min-height: 48px !important;
          }

          .form-panel-title {
            font-size: 24px !important;
            margin-bottom: 24px !important;
          }

          /* Meeting Type Options - Full Width */
          .meeting-type-option {
            min-height: 48px !important;
            padding: 16px !important;
          }

          /* Button Group - Stacked */
          .form-button-group {
            flex-direction: column-reverse !important;
            gap: 12px !important;
            margin-top: 20px !important;
          }

          .back-button,
          .submit-button {
            width: 100% !important;
            justify-content: center !important;
            height: 52px !important;
            font-size: 16px !important;
          }

          .back-button {
            order: 2;
          }

          .submit-button {
            order: 1;
          }

          /* Why Consultation Section - Mobile */
          .consultation-why-section {
            padding: 60px 0 !important;
          }

          /* Section Header */
          .why-section-header {
            margin-bottom: 32px !important;
          }

          .why-section-title {
            font-size: 28px !important;
            margin-bottom: 12px !important;
            line-height: 1.3 !important;
          }

          .why-section-subtitle {
            font-size: 16px !important;
            max-width: 100% !important;
            padding: 0 16px;
          }

          /* Cards Grid - Single Column */
          .why-cards-grid {
            grid-template-columns: 1fr !important;
            gap: 16px !important;
          }

          /* Card - Horizontal Layout on Mobile */
          .consultation-why-card {
            display: flex !important;
            flex-direction: row !important;
            align-items: flex-start !important;
            gap: 16px !important;
            padding: 20px !important;
            border-radius: 20px !important;
          }

          /* Icon - Left Aligned */
          .why-card-icon {
            width: 48px !important;
            height: 48px !important;
            margin-bottom: 0 !important;
            flex-shrink: 0 !important;
            border-radius: 12px !important;
            box-shadow: 0 4px 16px rgba(255, 0, 0, 0.2) !important;
          }

          .why-card-icon svg {
            width: 24px !important;
            height: 24px !important;
          }

          /* Content - Right Side */
          .why-card-content {
            flex: 1;
            display: flex;
            flex-direction: column;
          }

          .why-card-title {
            font-size: 16px !important;
            margin-bottom: 6px !important;
            line-height: 1.4 !important;
          }

          .why-card-description {
            font-size: 14px !important;
            line-height: 1.6 !important;
          }

          /* FAQ Items - Mobile */
          .consultation-faq-item button {
            padding: 18px 20px !important;
            font-size: 15px !important;
          }

          .consultation-faq-item button span {
            font-size: 15px !important;
            line-height: 1.4 !important;
          }

          .consultation-faq-item > div {
            padding: 0 20px 20px !important;
            font-size: 14px !important;
          }

          .faq-section {
            padding: 60px 0 !important;
          }

          .faq-section h2 {
            font-size: 32px !important;
            margin-bottom: 12px !important;
          }

          /* Step 3 - Confirmation Page - Mobile */
          .consultation-step-3-container {
            padding: 40px 24px !important;
            border-radius: 24px !important;
          }

          /* Success Icon */
          .consultation-success-icon {
            width: 80px !important;
            height: 80px !important;
            margin: 0 auto 24px !important;
            box-shadow: 0 8px 24px rgba(255, 0, 0, 0.25) !important;
          }

          .consultation-success-icon > div {
            width: 100px !important;
            height: 100px !important;
            border-width: 2px !important;
          }

          .consultation-success-icon svg {
            width: 40px !important;
            height: 40px !important;
          }

          /* Title and Description */
          .success-title {
            font-size: 26px !important;
            margin-bottom: 16px !important;
            line-height: 1.3 !important;
            max-width: 100% !important;
          }

          .success-description {
            font-size: 16px !important;
            margin-bottom: 32px !important;
            max-width: 100% !important;
            padding: 0 8px;
          }

          /* Appointment Details Card */
          .consultation-appointment-card {
            margin-top: 32px !important;
            padding: 20px !important;
            border-radius: 20px !important;
          }

          .appointment-card-title {
            font-size: 18px !important;
            margin-bottom: 20px !important;
          }

          /* Appointment Detail Rows */
          .appointment-detail-row {
            flex-direction: column !important;
            align-items: flex-start !important;
            gap: 8px !important;
            margin-bottom: 16px !important;
          }

          .appointment-detail-row > div:first-child {
            width: 40px !important;
            height: 40px !important;
            margin-bottom: 0 !important;
          }

          .appointment-detail-row > div:last-child {
            padding-left: 0 !important;
          }

          .appointment-detail-row > div:last-child > div:first-child {
            font-size: 12px !important;
            margin-bottom: 4px !important;
          }

          .appointment-detail-row > div:last-child > div:last-child {
            font-size: 15px !important;
          }

          /* Status Badge */
          .appointment-status-row > div:last-child > div {
            font-size: 13px !important;
            padding: 8px 16px !important;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            max-width: 100%;
          }

          /* Dividers - Hide some on mobile */
          .consultation-appointment-card > div[style*="height: 1px"] {
            margin: 12px 0 !important;
          }

          /* Confirmation Message */
          .confirmation-message {
            font-size: 14px !important;
            margin-top: 24px !important;
            margin-bottom: 32px !important;
            padding: 0 8px;
          }

          /* Action Buttons - Stacked */
          .success-action-buttons {
            flex-direction: column-reverse !important;
            gap: 12px !important;
            margin-top: 32px !important;
          }

          .primary-cta-button,
          .secondary-cta-button {
            width: 100% !important;
            height: 52px !important;
            padding: 16px 32px !important;
            font-size: 16px !important;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .primary-cta-button {
            order: 1;
          }

          .secondary-cta-button {
            order: 2;
          }
        }

        /* ===== SMALL MOBILE (≤414px) ===== */
        @media (max-width: 414px) {
          .consultation-page-title {
            font-size: 28px !important;
          }

          .consultation-page-subtitle {
            font-size: 15px !important;
          }

          .step-label {
            font-size: 10px !important;
            max-width: 70px;
          }

          .consultation-details-card h3 {
            font-size: 24px !important;
          }

          .calendar-grid > button {
            padding: 8px 2px !important;
            font-size: 12px !important;
            min-height: 36px;
          }
        }
      `}</style>
    </div>
  );
}