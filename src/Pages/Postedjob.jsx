import React, { useEffect, useState } from 'react';
import Authuse from '../hook/Authuse';
import { Link } from 'react-router-dom';

const Postedjob = () => {
    const { user } = Authuse();
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/jobs?email=${user.email}`)
            .then((res) => res.json())
            .then((data) => setJobs(data));
    }, [user.email]);

    return (
        <div className="max-w-6xl mx-auto p-6">
            <h1 className="text-2xl font-bold mb-4">
                My Posted Jobs ({jobs.length})
            </h1>
           
                <table className="table-auto border-collapse border border-gray-300 w-full">
                    <thead>
                        <tr className="bg-gray-200">
                            <th className="border border-gray-300 px-4 py-2">#</th>
                            <th className="border border-gray-300 px-4 py-2">Title</th>
                            <th className="border border-gray-300 px-4 py-2">Location</th>
                            <th className="border border-gray-300 px-4 py-2">Job Type</th>
                            <th className="border border-gray-300 px-4 py-2">Deadline</th>
                            <th className="border border-gray-300 px-4 py-2">Company</th>
                            <th className="border border-gray-300 px-4 py-2">HR Name</th>
                            <th className="border border-gray-300 px-4 py-2">Logo</th>
                            <th className="border border-gray-300 px-4 py-2">Application count</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {jobs.map((job, index) => (
                            <tr key={job._id} className="text-center">
                                <td className="border border-gray-300 px-4 py-2">
                                    {index + 1}
                                </td>
                                <td className="border border-gray-300 px-4 py-2">
                                    {job.title}
                                </td>
                                <td className="border border-gray-300 px-4 py-2">
                                    {job.location}
                                </td>
                                <td className="border border-gray-300 px-4 py-2">
                                    {job.jobType}
                                </td>
                                <td className="border border-gray-300 px-4 py-2">
                                    {job.applicationDeadline}
                                </td>
                                <td className="border border-gray-300 px-4 py-2">
                                    {job.company}
                                </td>
                                <td className="border border-gray-300 px-4 py-2">
                                    {user.email}
                                </td>
                                <td className="border border-gray-300 px-4 py-2">
                                    <img
                                        src={job.company_logo}
                                        alt="Company Logo"
                                        className="w-10 h-10 mx-auto"
                                    />
                                </td>
                                <td className="border border-gray-300 px-4 py-2">
                                    {job.
applicationCount}
                                </td>
                                
                            </tr>
                        ))}
                    </tbody>
                </table>
           
        </div>
    );
};

export default Postedjob;
