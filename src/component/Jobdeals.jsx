import React from 'react';

const jobData = [
    {
        title: "Software Engineer",
        company: "TechCorp",
        companyLogo: "https://i.ibb.co/mXD5MNf/facebook.png",
        location: "New York, USA",
        description: "Join our dynamic tech team and help us build cutting-edge software solutions."
    },
    {
        title: "Product Manager",
        company: "Innovate Inc.",
        companyLogo: "https://i.ibb.co/ThtyXpz/netflix.png",
        location: "San Francisco, USA",
        description: "Be a key player in leading product development for our innovative solutions."
    },
    {
        title: "UI/UX Designer",
        company: "Creative Labs",
        companyLogo: "https://i.ibb.co/TvvzXfq/google.png",
        location: "Los Angeles, USA",
        description: "Help design intuitive, user-friendly interfaces for our digital products."
    }
];

const Jobdeals = () => {
    return (
        <div className=" mx-auto p-6 bg-gray-50">
            <h1 className="text-3xl font-bold mb-6 text-center text-blue-600">Featured Job Deals</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {jobData.map((job, index) => (
                    <div key={index} className="bg-white shadow-md rounded-lg p-4 border border-gray-200 hover:shadow-lg transition-shadow duration-300">
                        <div className="flex items-center mb-4">
                            <img src={job.companyLogo} alt={job.company} className="w-16 h-16 rounded-full mr-4" />
                            <div>
                                <h3 className="text-xl font-semibold text-gray-800">{job.title}</h3>
                                <p className="text-sm text-gray-600">{job.company}</p>
                            </div>
                        </div>
                        <p className="text-gray-700 mb-4">{job.description}</p>
                        <p className="text-sm text-gray-500">Location: {job.location}</p>
                        <button className="w-full bg-blue-600 text-white py-2 mt-4 rounded-md hover:bg-blue-700 transition-colors duration-300">
                            Apply Now
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Jobdeals;
