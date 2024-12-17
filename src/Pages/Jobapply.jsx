import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Authuse from '../hook/Authuse';
import Swal from 'sweetalert2';

const Jobapply = () => {
   const{id} = useParams();
   const {user} = Authuse()
   console.log(id)


    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic, e.g., send data to API
      const form =e.target;
      const name = form.name.value;
      const email =form.email.value;
      const phone =form.phone.value;
    //   const resume = form.resume.value;
      const coverLetter= form.coverLetter.value;
      const applicaned ={job_id:id,name,email:user.email,phone,coverLetter}
      console.log( applicaned )      
        fetch('http://localhost:5000/job-application',{
            method:'POST',
            headers: {
                'content-type':'application/json'
            },
            body: JSON.stringify( applicaned )
            
            
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Your work has been saved",
                showConfirmButton: false,
                timer: 1500
              });
        })
    };

    return (
        <div className="container mx-auto p-6">
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-8 rounded-lg shadow-lg text-white">
                <h2 className="text-3xl font-bold mb-4">Apply for the Job</h2>
                <p className="text-sm">Please fill out the form below to submit your application.</p>
            </div>

            <form
             onSubmit={handleSubmit}
                className="mt-6 bg-white p-6 rounded-lg shadow-md max-w-2xl mx-auto"
            >
                {/* Full Name */}
                <div className="mb-4">
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-600">
                        Full Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                   
                    
                        className="w-full mt-2 p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter your full name"
                        required
                    />
                </div>

                {/* Email */}
                <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-600">
                        Email Address
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                    
            
                        className="w-full mt-2 p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter your email"
                        
                    />
                </div>

                {/* Phone */}
                <div className="mb-4">
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-600">
                        Phone Number
                    </label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        
                       
                        className="w-full mt-2 p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter your phone number"
                        required
                    />
                </div>

                {/* Resume Upload */}
                {/* <div className="mb-4">
                    <label htmlFor="resume" className="block text-sm font-semibold text-gray-600">
                        Upload Resume
                    </label>
                    <input
                        type="file"
                        id="resume"
                        name="resume"
                        accept=".pdf,.doc,.docx"
               
                        className="w-full mt-2 p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        
                    />
                </div> */}

                {/* Cover Letter */}
                <div className="mb-4">
                    <label htmlFor="coverLetter" className="block text-sm font-semibold text-gray-600">
                        Cover Letter
                    </label>
                    <textarea
                        id="coverLetter"
                        name="coverLetter"
                        
                    
                        className="w-full mt-2 p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Write a brief cover letter"
                        rows="5"
                    ></textarea>
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300"
                >
                    Submit Application
                </button>
            </form>
        </div>
    );
};

export default Jobapply;
