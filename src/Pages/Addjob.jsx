import React, { useState } from 'react';
import Authuse from '../hook/Authuse';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const AddJob = () => {
    const { user } = Authuse();
    const navigate = useNavigate();

    const handleAddJob = (e) => {
        e.preventDefault();
        if (!user) {
            navigate('/login'); // Redirect to login page if user is not logged in
            return;
        }

        const formData = new FormData(e.target);
        const initialData = Object.fromEntries(formData.entries());
        const { min, max, currency, ...newJob } = initialData;

        newJob.salaryRange = { min, max, currency };
        newJob.requirements = newJob.requirements.split('\n');
        newJob.responsibilities = newJob.responsibilities.split('\n');

        fetch('https://job-portal-severside-management-system.vercel.app/jobs', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(newJob),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.insertedId) {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Job has been added.',
                        showConfirmButton: false,
                        timer: 1500,
                    });
                    navigate('/'); // Redirect to the homepage or dashboard
                }
            })
            .catch((error) => console.error('Error adding job:', error));
    };

    return (
        <div className="max-w-4xl mx-auto py-10">
            <div className="bg-white shadow-md rounded-lg p-6">
                <h1 className="text-2xl font-bold mb-6">Add Job</h1>
                <form onSubmit={handleAddJob} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Job Title</label>
                        <input
                            type="text"
                            name="title"
                            className="input input-bordered w-full"
                            placeholder="Enter job title"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Location</label>
                        <input
                            type="text"
                            name="location"
                            className="input input-bordered w-full"
                            placeholder="Enter location"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Job Type</label>
                        <input
                            type="text"
                            name="jobType"
                            className="input input-bordered w-full"
                            placeholder="Enter job type"
                            required
                        />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-medium text-gray-700">Job Field</span>
                        </label>
                        <select name="jobField" defaultValue="Pick a Job Field" className="select select-ghost w-full">
                            <option disabled>Pick a Job Field</option>
                            <option>Engineering</option>
                            <option>Marketing</option>
                            <option>Finance</option>
                            <option>Teaching</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Application Deadline</label>
                        <input
                            type="date"
                            name="applicationDeadline"
                            className="input input-bordered w-full"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Salary Range</label>
                        <div className="flex space-x-4">
                            <input
                                type="number"
                                name="min"
                                className="input input-bordered w-full"
                                placeholder="Min salary"
                                required
                            />
                            <input
                                type="number"
                                name="max"
                                className="input input-bordered w-full"
                                placeholder="Max salary"
                                required
                            />
                            <select name="currency" defaultValue="Currency" className="select select-ghost w-full max-w-xs">
                                <option disabled>Currency</option>
                                <option>BDT</option>
                                <option>USD</option>
                                <option>INR</option>
                            </select>
                        </div>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Description</label>
                        <textarea
                            name="description"
                            className="textarea textarea-bordered w-full"
                            placeholder="Enter job description"
                            rows="4"
                            required
                        ></textarea>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Company</label>
                        <input
                            type="text"
                            name="company"
                            className="input input-bordered w-full"
                            placeholder="Enter company name"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Requirements</label>
                        <textarea
                            name="requirements"
                            className="textarea textarea-bordered w-full"
                            placeholder="Enter job requirements (one per line)"
                            rows="3"
                            required
                        ></textarea>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Responsibilities</label>
                        <textarea
                            name="responsibilities"
                            className="textarea textarea-bordered w-full"
                            placeholder="Enter job responsibilities (one per line)"
                            rows="3"
                            required
                        ></textarea>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">HR Email</label>
                        <input
                            type="email"
                            defaultValue={user.email} // Populate the field with the user's email
                            name="hr_email"
                            readOnly // Make the input read-only
                            className="input input-bordered w-full"
                            placeholder="Enter HR email"
                            required
                        />

                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">HR Name</label>
                        <input
                            type="text"
                            name="hr_name"
                            className="input input-bordered w-full"
                            placeholder="Enter HR name"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Company Logo</label>
                        <input
                            type="url"
                            name="company_logo"
                            className="input input-bordered w-full"
                            placeholder="Enter company logo URL"
                        />
                    </div>
                    <div className="text-right">
                        <button type="submit" className="btn btn-primary">Submit Job</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddJob;
