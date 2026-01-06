'use client';
import Image from 'next/image';
import { useRef, useState } from 'react';
import { FiMapPin, FiSearch } from 'react-icons/fi';

const ExploreSection = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [location, setLocation] = useState('');
  const [jobType, setJobType] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const sectionRef = useRef(null);
  const jobsPerPage = 6;

  // All job listings
  const allJobs = [
    {
      id: 1,
      title: 'Senior Product Manager',
      location: 'Pan India, Pan India, India',
      type: 'Full time',
      date: '08/05/2025',
    },
    {
      id: 2,
      title: 'Associate Data Scientist',
      location: 'Kolkata, West Bengal, India',
      type: 'Full time',
      date: '08/05/2025',
    },
    {
      id: 3,
      title: 'Agentic AI Developer',
      location: 'Kolkata, West Bengal, India',
      type: 'Full time',
      date: '08/05/2025',
    },
    {
      id: 4,
      title: 'Senior UI/UX Designer',
      location: 'Kolkata, West Bengal, India',
      type: 'Full time',
      date: '08/05/2025',
    },
    {
      id: 5,
      title: 'Snowflake Architect',
      location: 'Kolkata, West Bengal, India',
      type: 'Full time',
      date: '08/05/2025',
    },
    {
      id: 6,
      title: 'Senior Full Stack Engineer',
      location: 'Kolkata, West Bengal, India',
      type: 'Full time',
      date: '08/05/2025',
    },
    {
      id: 7,
      title: 'PowerBI Architect',
      location: 'Kolkata, West Bengal, India',
      type: 'Full time',
      date: '08/05/2025',
    },
    {
      id: 8,
      title: 'Sales Director (US Market)',
      location: 'Kolkata, West Bengal, India',
      type: 'Full time',
      date: '08/08/2025',
    },
    {
      id: 9,
      title: 'Program Manager',
      location: 'Salt Lake City, Utah, United States',
      type: 'Full time',
      date: '09/30/2025',
    },
    {
      id: 10,
      title: 'Senior AI Engineer',
      location: 'Kolkata, West Bengal, India',
      type: 'Full time',
      date: '10/03/2025',
    },
    {
      id: 11,
      title: 'Creative Digital Media Designer',
      location: 'Hosur, Tamil Nadu, India',
      type: 'Full time',
      date: '10/08/2025',
    },
  ];

  // Filter jobs based on search criteria
  const filteredJobs = allJobs.filter(job => {
    const matchesSearch =
      searchQuery === '' || job.title.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesLocation =
      location === '' || job.location.toLowerCase().includes(location.toLowerCase());

    const matchesType = jobType === '' || job.type.toLowerCase() === jobType.toLowerCase();

    return matchesSearch && matchesLocation && matchesType;
  });

  // Calculate pagination based on filtered jobs
  const totalPages = Math.ceil(filteredJobs.length / jobsPerPage);
  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = filteredJobs.slice(indexOfFirstJob, indexOfLastJob);

  const handlePageChange = pageNumber => {
    setCurrentPage(pageNumber);
    // Scroll to the top of the ExploreSection
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleSearch = () => {
    // Reset to page 1 when searching
    setCurrentPage(1);
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section
      ref={sectionRef}
      className='w-full py-16 lg:py-24'
      style={{ backgroundColor: '#3D194B' }}
    >
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Header */}
        <div className='text-center mb-8 lg:mb-12'>
          <h2 className='text-white text-3xl lg:text-4xl font-bold mb-4'>
            Explore the Amazingness
          </h2>
          <p className='text-white/80 text-base lg:text-lg'>
            "Empower Your Future: Join Us on the Journey to Professional Excellence!"
          </p>
        </div>

        {/* Search Filters */}
        <div className='flex flex-col lg:flex-row gap-4 mb-12 lg:mb-16'>
          {/* Search Input */}
          <div className='flex-1 relative'>
            <div className='absolute left-4 top-1/2 -translate-y-1/2 text-gray-400'>
              <FiSearch className='w-5 h-5' />
            </div>
            <input
              type='text'
              placeholder='Search Opportunities'
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className='w-full pl-12 pr-4 py-3 rounded-full bg-white text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500'
            />
          </div>

          {/* Location Input */}
          <div className='flex-1 relative'>
            <div className='absolute left-4 top-1/2 -translate-y-1/2 text-gray-400'>
              <FiMapPin className='w-5 h-5' />
            </div>
            <input
              type='text'
              placeholder='Select Location'
              value={location}
              onChange={e => setLocation(e.target.value)}
              className='w-full pl-12 pr-4 py-3 rounded-full bg-white text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500'
            />
          </div>

          {/* Job Type Select */}
          <div className='flex-1'>
            <select
              value={jobType}
              onChange={e => setJobType(e.target.value)}
              className='w-full px-4 py-3 rounded-full bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 appearance-none cursor-pointer'
            >
              <option value=''>Select Type</option>
              <option value='full-time'>Full Time</option>
              <option value='part-time'>Part Time</option>
              <option value='contract'>Contract</option>
            </select>
          </div>

          {/* Search Button */}
          <button
            onClick={handleSearch}
            className='px-8 py-3 rounded-full text-white font-medium hover:scale-105 transition-transform shadow-lg whitespace-nowrap'
            style={{
              background: 'linear-gradient(180deg, #7030B1 0%, #B56DD3 100%)',
            }}
          >
            Search
          </button>
        </div>

        {/* Job Listings */}
        <div className='space-y-4'>
          {currentJobs.map(job => (
            <div
              key={job.id}
              className='bg-white/5 backdrop-blur-sm rounded-xl p-6 hover:bg-white/10 transition-colors border border-white/10'
            >
              <div className='flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4'>
                {/* Left Side - Job Info */}
                <div className='flex-1 space-y-3'>
                  <h3 className='text-white text-lg lg:text-xl font-semibold'>{job.title}</h3>
                  <div className='flex flex-wrap items-center gap-2 text-sm text-white/70'>
                    <span>{job.location}</span>
                    <span className='text-white/40'>|</span>
                    <span>{job.type}</span>
                    <span className='text-white/40'>|</span>
                    <span>Experience: 5-10 years</span>
                  </div>
                  {/* <p className='text-white/60 text-sm'>Required Skills:</p> */}
                </div>

                {/* Right Side - Read More Link */}
                <div className='flex items-center gap-2 cursor-pointer group flex-shrink-0'>
                  <span
                    className='text-sm lg:text-base font-medium whitespace-nowrap'
                    style={{ color: '#F97316' }}
                  >
                    Read full job description
                  </span>
                  <div className='relative w-4 h-4'>
                    <Image
                      src='/images/Careers/arrow_red.svg'
                      alt='Arrow'
                      fill
                      className='object-contain group-hover:translate-x-1 transition-transform'
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className='flex justify-end items-center gap-4 mt-12'>
          {/* Previous Arrow */}
          {currentPage > 1 && (
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              className='w-8 h-8 flex items-center justify-center hover:opacity-70 transition-opacity'
            >
              <Image
                src='/images/Careers/Arrow_right.svg'
                alt='Previous'
                width={20}
                height={20}
                className='rotate-180'
              />
            </button>
          )}

          {/* Page Numbers */}
          {Array.from({ length: totalPages }, (_, i) => i + 1).map(pageNumber => (
            <button
              key={pageNumber}
              onClick={() => handlePageChange(pageNumber)}
              className={`text-white font-medium transition-all ${currentPage === pageNumber ? 'border-b-2 border-white pb-1' : 'hover:opacity-70'
                }`}
            >
              {pageNumber}
            </button>
          ))}

          {/* Next Arrow */}
          {currentPage < totalPages && (
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              className='w-8 h-8 flex items-center justify-center hover:opacity-70 transition-opacity'
            >
              <Image src='/images/Careers/Arrow_right.svg' alt='Next' width={20} height={20} />
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default ExploreSection;
