import React from 'react'
import { useLoaderData, useParams } from 'react-router-dom'
import { AiOutlineDollar } from "react-icons/ai";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from '../../Utility/localStorage';

const JobDetails = () => {

    const jobs = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id);
    const job = jobs.find(job => job.id === idInt);

    const handleApplyJob = () =>{
        saveJobApplication (idInt);
        toast("You have applied successfully");
    }
   
    if (!job) {
        return <div>Job not found</div>;
    }

    console.log(job);
    
    const{job_description,job_responsibility,educational_requirements,experiences,salary,job_title,contact_information}=job
    
    const { phone, email, address } = contact_information;

    return (
        <div>
            <h2 className='text-center p-20 bg-blue-100'>Job Details of : {job_title}</h2>

            <div className='grid gap-4 md:grid-cols-4 m-4'>

                <div className='border md:col-span-3 p-2'>
                    <h2>Left side </h2>
                    <p><span className='font-bold'>Job Description :</span> {job_description}</p><br></br>
                    <p><span className='font-bold'>Job Responsibility :</span> {job_responsibility}</p><br></br>
                    <p><span className='font-bold'>Educational Requirement :</span> <br />{educational_requirements}</p>
                    <p><span className='font-bold'>Experience :</span> <br /> {experiences}</p><br />
                </div>

                <div className='border p-2'>
                    <div className='border p-2 bg-gray-200 rounded-lg'>
                    <h2>Right side </h2>
                    <h2 className='font-bold border-b pb-2'>Job Details</h2>
                    <p className='flex'><span className='font-bold flex'> <AiOutlineDollar className="mr-1 mt-1 text-blue-600"></AiOutlineDollar> Salary :</span>{salary}</p>
                    <p><span className='font-bold'>Job Title :</span>{job_title}</p>
                    <p className='font-bold'>Contact Information</p>
                    <p><span className='font-bold'>Phone :</span>{phone} </p>
                    <p><span className='font-bold'>Email :</span> {email} </p>
                    <p> <span className='font-bold'>Address :</span> {address}</p>
                    </div>
                    <div>
                        <button className='btn border w-full mt-4 h-9 bg-blue-400 text-white' type="button" onClick={handleApplyJob} >Apply Now</button>
                        <ToastContainer />
                    </div>
                </div>
            </div>
           
        </div>
    )
}

export default JobDetails

