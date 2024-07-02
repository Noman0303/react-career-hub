import { IoLocationOutline } from "react-icons/io5";
import { AiOutlineDollar } from "react-icons/ai";
import { Link } from "react-router-dom";

const Job = ({job}) => {

    const {id,logo,job_title,remote_or_onsite,company_name, job_type,location,salary}=job;

    
  return (
    
    <div className='m-2 p-2 border-2 border-black' >
        <img className='h-10' src={logo} alt="" />
        <h2 className='font-extrabold mt-2 text-base'>{job_title}</h2>
        <p className='mt-2'>{company_name}</p>
        <div className='flex gap-4 mt-2'>
            <button className='border-2 rounded-lg p-1 border-violet-500 text-violet-500'>{remote_or_onsite}</button>
            <button className='border-2 rounded-lg p-1 border-violet-500 text-violet-500'>{job_type}</button>
        </div>
        <div className='flex mt-2 '>
        
        <h2 className="mr-6 flex align-middle"><IoLocationOutline className="mr-1 mt-1"></IoLocationOutline> {location}</h2>
        <h2 className="flex"> <AiOutlineDollar className="mr-1 mt-1"></AiOutlineDollar> Salary : {salary} </h2>
        </div>
        <Link to ={`/job/${id}`}>
        <button className='bg-gradient-to-r from-[#7E90FE] to-[#9873FF] text-white p-2 mt-2 btn'>View Details</button>
        </Link>
    </div>
 
  )
  
}

export default Job