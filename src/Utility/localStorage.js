const getStoredJobApplication =() => {
    const storedJobAppliaction = localStorage.getItem('job-applications')

if (storedJobAppliaction){
    return JSON.parse(storedJobAppliaction)
}
return [];

}


const saveJobApplication = id => {
    const storedJobAppliactions = getStoredJobApplication();
    const exists = storedJobAppliactions.find(jobId => jobId === id);
    if (!exists){
        storedJobAppliactions.push(id);
        localStorage.setItem('job-applications',JSON.stringify(storedJobAppliactions))
    }

}

export {saveJobApplication,getStoredJobApplication}