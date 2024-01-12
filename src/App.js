
import './App.css';
import Navbar from './components/Navbar';
import Dropdown from './components/Dropdown';
import Jobcard from './components/Job_Discrp';
import Dummy from './components/Dummy';
import React,{useState} from 'react'

function App() {
  const [jobsrch, setjobsrch] = useState({
    title: "",
    experience: "",
    location: "",
    type: ""
  });
  const [filteredJobs, setFilteredJobs] = useState(Dummy);
 const [searchPerformed, setSearchPerformed] = useState(false); // New state
 
 const JobSearch = () => {
  
  if (jobsrch.title || jobsrch.type || jobsrch.location || jobsrch.experience) {
    const filteredData = Dummy.filter(job =>
      (job.title === jobsrch.title ||  jobsrch.title === "") &&
      (job.type === jobsrch.type || jobsrch.type === "") &&
      (job.location === jobsrch.location || jobsrch.location === "") &&
      (job.experience === jobsrch.experience || jobsrch.experience === "")
    );
    setFilteredJobs(filteredData);
    setSearchPerformed(true); 
  }
};

  const clearFilters = () => {
    setjobsrch({
      title: "",
      experience: "",
      location: "",
      type: ""
    });
    setFilteredJobs(Dummy);
    setSearchPerformed(false); // Reset state when filters are cleared
  };
  // const JobSearch = () => {
  //   const filteredData = Dummy.filter(job =>
  //     (job.title === jobsrch.title || jobsrch.title === "") &&
  //     (job.type === jobsrch.type || jobsrch.type === "") &&
  //     (job.location === jobsrch.location || jobsrch.location === "") &&
  //     (job.experience === jobsrch.experience || jobsrch.experience === "")
  //   );
  //   setFilteredJobs(filteredData);
  // };
  return (
    <>

     <Navbar/>
     <Dropdown JobSearch={JobSearch} jobsrch={jobsrch} setjobsrch={setjobsrch} searchPerformed={searchPerformed} clearFilters={clearFilters}/>
     {filteredJobs.map((jobs) => {

      return(
        <Jobcard key={jobs.id} {...jobs}/>
      )

      })}

    </>
  );
}

export default App;
