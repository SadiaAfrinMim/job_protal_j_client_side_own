import React from 'react';
import { motion } from 'framer-motion'; // For animations

const faqData = [
    {
        question: "What is the job application process?",
        answer: "The application process involves submitting your resume, filling out a short form, and potentially going through an interview."
    },
    {
        question: "How long does it take to hear back after applying?",
        answer: "Typically, you'll hear back within 1-2 weeks, but it may vary depending on the position."
    },
    {
        question: "Can I apply to multiple jobs at the same time?",
        answer: "Yes, you can apply for multiple roles as long as you meet the requirements for each position."
    },
    {
        question: "How do I prepare for an interview?",
        answer: "Research the company, practice common interview questions, and be ready to talk about your skills and experience."
    }
];

const Jobrelated = () => {
    return (
        <div className="container mx-auto p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* FAQ Section */}
                <div className="faq-section p-8 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-600 shadow-lg rounded-lg">
                    <h2 className="text-3xl font-semibold text-white mb-6 text-center">Frequently Asked Questions</h2>
                    <div>
                        {faqData.map((faq, index) => (
                            <div key={index} className="mb-6">
                                <h3 className="text-xl font-semibold text-white">{faq.question}</h3>
                                <p className="text-gray-200 mt-2">{faq.answer}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Animated Section */}
                <motion.div 
                    className="animated-section p-8 bg-gradient-to-r from-teal-400 via-green-500 to-blue-600 text-white shadow-lg rounded-lg flex flex-col justify-center items-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    <h2 className="text-3xl font-semibold mb-4">Why Join Us?</h2>
                    <p className="text-lg mb-6 text-center">We provide an inclusive and dynamic work environment where your growth is our priority.</p>

                    {/* Animated Image with Gradient Effect */}
                    <motion.div
                        className="icon-container w-24 h-24 bg-gradient-to-r from-pink-600 via-orange-500 to-red-600 rounded-full flex items-center justify-center mb-4"
                        animate={{ rotate: 360 }}
                        transition={{ repeat: Infinity, duration: 4 }}
                    >
                        <img 
                            src="https://i.ibb.co/ThtyXpz/netflix.png" 
                            alt="Company Icon" 
                            className="w-16 h-16 object-contain rounded-full" 
                        />
                    </motion.div>

                    <p className="mt-4 text-sm text-center">We offer flexible hours, career development programs, and a supportive community where you can thrive.</p>
                </motion.div>
            </div>
        </div>
    );
};

export default Jobrelated;
