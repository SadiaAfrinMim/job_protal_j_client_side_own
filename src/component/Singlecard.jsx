import React from 'react';
import { Link } from 'react-router-dom';

const Singlecard = ({ job }) => {
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
    } = job;

    return (
        <div className="card w-full max-w-xl mx-auto bg-base-100 shadow-xl p-6">
            {/* Header Section with Logo and Location */}
            <div className="flex justify-between items-center mb-4">
                <img
                    src={company_logo}
                    alt={`${company} logo`}
                    className="w-16 h-16 rounded-full"
                />
                <p className="text-sm font-semibold text-gray-500">
                    📍 {location}
                </p>
            </div>

            {/* Job Details */}
            <h2 className="card-title text-2xl font-bold text-primary">{title}</h2>
            <h4 className="text-lg font-semibold text-gray-600">{company}</h4>
            <p className="mt-2 text-sm text-gray-500">
                <strong>Type:</strong> {jobType} | <strong>Category:</strong> {category}
            </p>
            <p className="text-sm text-gray-500">
                <strong>Salary:</strong> {salaryMin} - {salaryMax} {currency}
            </p>
            <p className="text-sm text-gray-500">
                <strong>Application Deadline:</strong> {applicationDeadline}
            </p>
            <p
                className={`mt-2 text-sm font-semibold ${
                    status === 'active' ? 'text-green-600' : 'text-red-600'
                }`}
            >
                <strong>Status:</strong> {status}
            </p>

            {/* Description */}
            <p className="mt-4 text-sm text-gray-700">
                <strong>Description:</strong> {description}
            </p>

            {/* Requirements as Buttons */}
            <div className="mt-4">
                <strong>Requirements:</strong>
                <div className="flex flex-wrap gap-2 mt-2">
                    {requirements.map((req, index) => (
                        <button
                            key={index}
                            className="btn btn-sm btn-outline btn-primary"
                        >
                            {req}
                        </button>
                    ))}
                </div>
            </div>

            {/* Responsibilities as Buttons */}
            <div className="mt-4">
                <strong>Responsibilities:</strong>
                <div className="flex flex-wrap gap-2 mt-2">
                    {responsibilities.map((resp, index) => (
                        <button
                            key={index}
                            className="btn btn-sm btn-outline btn-secondary"
                        >
                            {resp}
                        </button>
                    ))}
                </div>
            </div>

            {/* HR Contact */}
           <div className='flex items-center justify-center'>
           <p className="mt-4 text-sm text-gray-600">
                <strong>HR Contact:</strong> {hr_name} ({hr_email})
            </p>
            <Link to={`/job/${_id}`} className="btn btn-primary">Apply now</Link>
           </div>
        </div>
    );
};

export default Singlecard;
