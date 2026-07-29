'use client';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { FiChevronDown, FiMapPin, FiSearch } from 'react-icons/fi';

const ExploreSection = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [location, setLocation] = useState('');
  const [jobType, setJobType] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const sectionRef = useRef(null);
  const dropdownRef = useRef(null);
  const jobsPerPage = 6;

  // Job type options
  const jobTypeOptions = [
    { value: 'full-time', label: 'Full Time' },
    { value: 'part-time', label: 'Part Time' },
    { value: 'contract', label: 'Contract' },
  ];

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = event => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const [jobCareerData, setJobCareerData] = useState([]);

  // Dynamically load Zoho Recruit embed script and scrape jobs from widget DOM
  useEffect(() => {
    const script = document.createElement('script');
    script.src =
      'https://static.zohocdn.com/recruit/embed_careers_site/javascript/v1.1/embed_jobs.js';
    script.type = 'text/javascript';
    script.onload = () => {
      const initializeWidget = () => {
        const targetDiv = document.getElementById('rec_job_listing_div');
        if (!targetDiv) return;

        if (window.rec_embed_js && window.rec_embed_js.load) {
          window.rec_embed_js.load({
            widget_id: 'rec_job_listing_div',
            page_name: 'Careers',
            source: 'CareerSite',
            site: 'https://gwcdata.zohorecruit.in',
            brand_color: '#350303ff',
            empty_job_msg: 'No current Openings',
          });

          const observer = new MutationObserver(() => {
            const jobContainer = document.querySelector('.rec_job_listing_div_jobs');
            if (jobContainer) {
              const jobElements = jobContainer.querySelectorAll('.rec-job-info');
              const jobs = Array.from(jobElements).map((job, index) => {
                const titleElement = job.querySelector('.rec-job-title a');
                const title = titleElement?.innerText.trim() || 'Unknown Title';
                const applyLink = titleElement?.href || '';
                const location = job.querySelector('.zrsite_Location')?.innerText.trim() || '';
                const description =
                  job.querySelector('.zrsite_Job_Description')?.innerText.trim() || '';
                const dateOpened =
                  job.querySelector('span.zrsite_Date_Opened')?.innerText.trim() || '';
                const jobType = job.querySelector('span.zrsite_Job_Type')?.innerText.trim() || '';

                return {
                  id: index + 1,
                  title,
                  link: applyLink,
                  location,
                  description,
                  date: dateOpened,
                  type: jobType,
                };
              });

              setJobCareerData(jobs);
              observer.disconnect();
            }
          });

          const targetNode = document.getElementById('rec_job_listing_div');
          if (targetNode) {
            observer.observe(targetNode, {
              childList: true,
              subtree: true,
            });
          }

          setTimeout(() => observer.disconnect(), 10000);
        }
      };

      setTimeout(initializeWidget, 100);
    };

    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  // Filter jobs based on search criteria
  const filteredJobs = jobCareerData.filter(job => {
    const matchesSearch =
      searchQuery === '' || job.title.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesLocation =
      location === '' || job.location.toLowerCase().includes(location.toLowerCase());

    const matchesType = jobType === '' || job.type.toLowerCase().includes(jobType.toLowerCase());

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
      id='explore-section'
      className='w-full py-16 lg:py-24'
      style={{ backgroundColor: '#3D194B' }}
    >
      <div
        id='rec_job_listing_div'
        style={{ minHeight: '100px', visibility: 'hidden', display: 'none' }}
      />
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Header */}
        <div className='text-center mb-8 lg:mb-12'>
          <h2 className='text-white text-[32px] lg:text-[36px] font-medium mb-4'>
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

          {/* Job Type Custom Dropdown */}
          <div className='flex-1 relative' ref={dropdownRef}>
            <button
              type='button'
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className='w-full px-4 py-3 rounded-full bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 flex items-center justify-between'
            >
              <span className={jobType === '' ? 'text-gray-400' : 'text-gray-700'}>
                {jobTypeOptions.find(opt => opt.value === jobType)?.label || 'Select Type'}
              </span>
              <FiChevronDown
                className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${
                  isDropdownOpen ? 'rotate-180' : ''
                }`}
              />
            </button>

            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <div className='absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl shadow-lg overflow-hidden z-50 border border-gray-100'>
                {jobTypeOptions.map((option, index) => (
                  <button
                    key={option.value}
                    type='button'
                    onClick={() => {
                      setJobType(option.value);
                      setIsDropdownOpen(false);
                      setCurrentPage(1); // Reset to page 1 when filtering
                    }}
                    className={`w-full px-4 py-3 text-left hover:bg-purple-50 transition-colors ${
                      jobType === option.value
                        ? 'bg-purple-50 text-purple-700 font-medium'
                        : 'text-gray-700'
                    } ${index === 0 ? 'rounded-t-2xl' : ''} ${
                      index === jobTypeOptions.length - 1 ? 'rounded-b-2xl' : ''
                    }`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            )}
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
                  <h3 className='text-white text-lg lg:text-[18px] font-medium'>{job.title}</h3>
                  <div className='flex flex-wrap items-center gap-2 text-sm text-white/70'>
                    {job.location && <span>{job.location}</span>}
                    {job.location && job.type && <span className='text-white/40'>|</span>}
                    {job.type && <span>{job.type}</span>}
                    {job.date && (job.location || job.type) && (
                      <span className='text-white/40'>|</span>
                    )}
                    {job.date && <span>Posted: {job.date}</span>}
                  </div>
                  {/* <p className='text-white/60 text-sm'>Required Skills:</p> */}
                </div>

                {/* Right Side - Read More Link */}
                {/* Right Side - Read More Link */}
                <a
                  href={job.link || '#'}
                  target={job.link ? '_blank' : '_self'}
                  rel={job.link ? 'noopener noreferrer' : ''}
                  className='flex items-center gap-2 cursor-pointer group flex-shrink-0'
                >
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
                </a>
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
              className={`text-white font-medium transition-all ${
                currentPage === pageNumber ? 'border-b-2 border-white pb-1' : 'hover:opacity-70'
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
