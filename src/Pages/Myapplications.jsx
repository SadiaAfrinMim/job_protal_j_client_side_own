import React, { useEffect, useState } from 'react';
import Authuse from '../hook/Authuse';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import UseAxiosSecure from '../Useaxiossecure/UseAxiosSecure';

const MyApplications = () => {
    const { user } = Authuse();
    const [jobs, setJobs] = useState([]);

    const axiosSecure = UseAxiosSecure()
    // const navigate = useNavigate();

    useEffect(() => {

        // Redirect to login page if the user is not logged in
        // navigate('/login');
        // return;

        axiosSecure.get(`/job-application?email=${user.email}`)
            .then(res => setJobs(res.data))


        // axios.get(`https://job-portal-severside-management-system.vercel.app/job-application?email=${user.email}`,{withCredentials: true})
        // .then(res=>setJobs(res.data))

        // Fetch the job applications if the user is logged in
        // fetch(`https://job-portal-severside-management-system.vercel.app/job-application?email=${user.email}`)
        //     .then(res => res.json())
        //     .then(data => setJobs(data))
        //     .catch(error => console.error('Error fetching applications:', error));
    }, [user.email]);

    const handleDelete = (id) => {
        fetch(`https://job-portal-severside-management-system.vercel.app/job-application/${id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    // Remove the deleted application from the local state
                    setJobs(prevJobs => prevJobs.filter(job => job._id !== id));
                }
            })
            .catch(error => {
                console.error('Error deleting application:', error);
            });
    };

    return (
        <div className="container mx-auto p-6">
            {user ? (
                <>
                    <h1 className="text-2xl font-bold mb-4 text-center text-blue-600">
                        My Applications ({jobs.length})
                    </h1>
                    {jobs.length === 0 ? (
                        <p className="text-center text-gray-600">No job applications found.</p>
                    ) : (
                        <table className="min-w-full bg-white border border-gray-300 shadow-md rounded-lg overflow-hidden">
                            <thead className="bg-blue-500 text-white">
                                <tr>
                                    <th className="py-3 px-6 text-left">Job Title</th>
                                    <th className="py-3 px-6 text-left">Company</th>
                                    <th className="py-3 px-6 text-left">Cover Letter</th>
                                    <th className="py-3 px-6 text-left">Company Logo</th>
                                    <th className="py-3 px-6 text-left">Phone Number</th>
                                    <th className="py-3 px-6 text-left">View</th>
                                    <th className="py-3 px-6 text-left">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {jobs.map((application, index) => (
                                    <tr key={index} className="border-b hover:bg-gray-50">
                                        <td className="py-3 px-6">{application.title}</td>
                                        <td className="py-3 px-6">{application.company}</td>
                                        <td className="py-3 px-6">{application.coverLetter}</td>
                                        <td className="py-3 px-6">
                                            <img
                                                src={application.company_logo}
                                                alt="Company Logo"
                                                className="w-16 h-16 object-cover rounded-full"
                                            />
                                        </td>
                                        <td className="py-3 px-6">{application.phone}</td>
                                        <td className="py-3 px-6">
                                            <Link to={`/viewApplications/${application.job_id}`} className="text-blue-500 underline">
                                                View Applications
                                            </Link>
                                        </td>
                                        <td className="py-3 px-6">
                                            <button
                                                onClick={() => handleDelete(application._id)}
                                                className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-700"
                                            >
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}
                </>
            ) : (
                <p className="text-center text-red-500">Redirecting to login...</p>
            )}
        </div>
    );
};

export default MyApplications;
