import  { useEffect, useState } from 'react'
import Job from '../Job/Job';

const FeaturedJobs = () => {

    const [jobs, setJobs] = useState([]);
    // This is not the best way to show all data
    const [datalength, setDatalength] = useState(4);

    useEffect(() => {
        fetch('jobs.json')
            .then(res => res.json())
            .then(data => setJobs(data));
    }, [])

    return (
        <div>
            <div>
                <h2 className='text-5xl text-center'>Featured Jobs : {jobs.length} </h2>
                <a href="#sec">Go to Section 1</a>
                <h2 id="sec">Section-1</h2>




                <p className='text-center'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className='grid md:grid-cols-2 lg:grid-cols-2 '>
                {
                    jobs.slice(0, datalength).map(job => <Job key={job.id} job={job} ></Job>)
                }
            </div>
            <div className= {datalength === jobs.length ? 'hidden' : ''}>
                <button className='btn btn-primary bg-gradient-to-r from-[#7E90FE] to-[#9873FF] text-white p-2'
                    onClick={() => setDatalength(jobs.length)}>See All Jobs</button>
            </div>
        </div>
    )
}

export default FeaturedJobs