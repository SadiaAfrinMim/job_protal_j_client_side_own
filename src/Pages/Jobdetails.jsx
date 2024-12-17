import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Jobdetails = () => {
    const {
        _id,
        title,
        location,
        jobType,
        category,
        applicationDeadline,
        salaryRange: { min: salaryMin, max: salaryMax, currency },
        description,
        company,
        requirements,
        responsibilities,
        status,
        hr_email,
        hr_name,
        company_logo
    } = useLoaderData();

    return (
        <div className="container mx-auto p-6">
            {/* Header Section */}
            <div className="flex flex-col lg:flex-row justify-between items-center mb-8 bg-gradient-to-r from-blue-500 to-purple-600 p-6 rounded-lg shadow-lg text-white">
                <img
                    src={company_logo}
                    alt={`${company} logo`}
                    className="w-20 h-20 rounded-full mb-4 lg:mb-0 border-4 border-white"
                />
                <div className="text-center lg:text-left">
                    <h2 className="text-3xl font-bold mb-2">{title}</h2>
                    <h4 className="text-lg font-semibold">{company}</h4>
                    <p className="text-sm mt-2">📍 {location}</p>
                </div>
            </div>

            {/* Job Details */}
          <div className='border-2 border-blue-500 p-4 rounded-lg bg-blue-100'>
          <div className="bg-gradient-to-r from-white to-gray-100 p-6 rounded-lg shadow-md">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Job Details</h3>
                <p><strong>Type:</strong> {jobType}</p>
                <p><strong>Category:</strong> {category}</p>
                <p><strong>Salary:</strong> {salaryMin} - {salaryMax} {currency}</p>
                <p><strong>Application Deadline:</strong> {applicationDeadline}</p>
                <p
                    className={`mt-2 font-semibold ${
                        status === 'active' ? 'text-green-600' : 'text-red-600'
                    }`}
                >
                    <strong>Status:</strong> {status}
                </p>
            </div>

            {/* Description Section */}
            <div className="bg-gradient-to-l from-blue-50 to-purple-50 p-6 mt-6 rounded-lg shadow-md">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Description</h3>
                <p className="text-gray-700">{description}</p>
            </div>

            {/* Requirements Section */}
            <div className="bg-gradient-to-r from-white to-gray-200 p-6 mt-6 rounded-lg shadow-md">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Requirements</h3>
                <div className="flex flex-wrap gap-3">
                    {requirements.map((req, index) => (
                        <button
                            key={index}
                            className="btn btn-sm btn-outline btn-primary shadow-md"
                        >
                            {req}
                        </button>
                    ))}
                </div>
            </div>

            {/* Responsibilities Section */}
            <div className="bg-gradient-to-l from-purple-50 to-blue-50 p-6 mt-6 rounded-lg shadow-md">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Responsibilities</h3>
                <div className="flex flex-wrap gap-3">
                    {responsibilities.map((resp, index) => (
                        <button
                            key={index}
                            className="btn btn-sm btn-outline btn-secondary shadow-md"
                        >
                            {resp}
                        </button>
                    ))}
                </div>
            </div>

            {/* HR Contact Section */}
            <div className="bg-gradient-to-r from-white to-gray-200 p-6 mt-6 rounded-lg shadow-md">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">HR Contact</h3>
                <p><strong>Name:</strong> {hr_name}</p>
                <p><strong>Email:</strong> {hr_email}</p>
            </div>
            <div className='flex items-center justify-center p-4'>
            <Link to={`/jobapply/${_id}`} className="btn btn-secondary">Apply Now</Link>
            </div>
          </div>
          
        </div>
    );
};

export default Jobdetails;
