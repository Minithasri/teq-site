'use client';

import Image from 'next/image';
import { useState } from 'react';

// Content mapping for Google Cloud Services based on provided documentation
const googleCloudServices = [
  {
    name: 'Google Compute Engine',
    tag: 'Google Compute Engine',
    description:
      "Google Compute Engine is an Infrastructure as a Service (IaaS) offering that allows users to run virtual machines (VMs) on Google's infrastructure. It provides scalable and flexible computing resources, allowing you to deploy and manage virtual machines in the cloud easily. Compute Engine is suitable for a wide range of workloads, including web hosting, application development, and data processing.",
  },
  {
    name: 'Google Kubernetes Engine',
    tag: 'Google Kubernetes Engine',
    description:
      'Google Kubernetes Engine (GKE) is a managed Kubernetes service provided by Google Cloud Platform. Kubernetes is an open-source container orchestration platform that automates the deployment, scaling, and management of containerised applications. GKE simplifies the process of deploying, managing, and scaling containerised applications using Kubernetes while supporting standard tooling like Helm and kubectl.',
  },
  {
    name: 'Google Cloud Storage',
    tag: 'Google Cloud Storage',
    description:
      'Google Cloud Storage is a cloud-based object storage system offered by GCP. It allows you to store and retrieve data in a highly scalable and durable manner. It integrates seamlessly with other services like BigQuery and Cloud Functions, making it ideal for business intelligence, data exploration, and machine learning use cases.',
  },
  {
    name: 'BigQuery',
    tag: 'BigQuery',
    description:
      "Google BigQuery is a fully managed and serverless data warehouse and analytics platform. It is designed to enable super-fast SQL queries using the processing power of Google's infrastructure. BigQuery is suitable for a variety of use cases, including business intelligence, data exploration, ad hoc querying, and machine learning.",
  },
  {
    name: 'Google App Engine',
    tag: 'Google App Engine',
    description:
      'Google App Engine is a fully managed platform-as-a-service (PaaS) offering which allows developers to build and deploy scalable web applications without managing underlying infrastructure. It abstracts away server management, allowing developers to focus on writing code for web applications, APIs, and microservices.',
  },
  {
    name: 'Looker Studio',
    tag: 'Looker Studio',
    description:
      'Looker is a business intelligence and data exploration platform that allows organizations to analyze and visualize their data. Looker provides a web-based interface for creating and sharing dashboards, reports, and visualizations, enabling both technical and non-technical users to derive insights from various data sources.',
  },
  {
    name: 'Vertex AI',
    tag: 'Vertex AI',
    description:
      'Google Cloud Vertex AI is a managed machine learning (ML) platform that provides tools and services to help organizations build, deploy, and manage ML models at scale. It includes AI Platform Pipelines for orchestrating and deploying end-to-end machine learning workflows.',
  },
  {
    name: 'Migration Tools',
    tag: 'Migration Tools',
    description:
      'We offer expertise in Migrate for Compute Engine for VM movement, Database Migration for minimal downtime transitions, and BigQuery Data Transfer to automatically pull data from sources like Google Ads and YouTube. We also specialize in Cloud Storage Transfer from on-premises systems to GCP.',
  },
];

const Offerings = () => {
  const [activeTab, setActiveTab] = useState(0);

  // Helper to get image path based on active tab index
  const getImagePath = index => `/images/partners/google-cloud/gg${index + 1}.png`;

  return (
    <section
      className='w-full py-20 px-4 md:px-8'
      style={{
        background: 'linear-gradient(180deg, #EBD8F3 0%, rgba(255, 255, 255, 0) 50%, #EBD8F3 100%)',
      }}
    >
      <div className='max-w-7xl mx-auto'>
        {/* Header */}
        <h2 className='text-3xl md:text-4xl font-medium text-center text-[#404040] mb-12'>
          Google Service Offerings
        </h2>

        {/* Desktop View: Tabs & Interactive Card */}
        <div className='hidden md:block'>
          {/* Tabs Container - Single Line Compact */}
          <div className='flex justify-center mb-10'>
            <div className='inline-flex flex-nowrap justify-center bg-[#FBF4FE] rounded-full p-1 gap-2 shadow-lg border border-purple-50'>
              {googleCloudServices.map((service, index) => {
                const isActive = activeTab === index;
                return (
                  <button
                    key={index}
                    onClick={() => setActiveTab(index)}
                    className={`px-3 py-2 md:px-4 md:py-2.5 rounded-full text-[11px] md:text-xs lg:text-sm font-medium transition-all duration-300 border whitespace-nowrap ${
                      isActive
                        ? 'text-white transform scale-105'
                        : 'text-[#7030B1] border-transparent hover:bg-purple-50'
                    }`}
                    style={{
                      background: isActive
                        ? 'linear-gradient(180deg, #7030B1 0%, #B56DD3 100%)'
                        : 'transparent',
                    }}
                  >
                    {service.name}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Content Card */}
          <div className='bg-white rounded-[16px] p-2 md:p-4 shadow-xl max-w-6xl mx-auto border '>
            <div className='flex flex-col md:flex-row gap-8 items-center'>
              {/* Left Image Area */}
              <div className='relative w-full md:w-[596px] h-[300px] md:h-[346px] shrink-0 rounded-[12px] overflow-hidden flex items-center justify-center'>
                <div className='relative w-full h-full'>
                  <Image
                    key={activeTab}
                    src={getImagePath(activeTab)}
                    alt={`Illustration for ${googleCloudServices[activeTab].name}`}
                    fill
                    className='object-cover'
                    priority={true}
                  />
                </div>
              </div>

              {/* Right Content Area */}
              <div className='p-6 md:pr-12 flex-1'>
                {/* Service Tag with Number */}
                <div className='inline-block px-4 py-1.5 rounded-2xl border border-[#9156AA] text-[#7030B1] font-semibold text-[15px] mb-6 md:mb-8 bg-transparent tracking-wide'>
                  {activeTab + 1}. {googleCloudServices[activeTab].tag}
                </div>

                {/* Service Title
                <h3 className='text-2xl font-medium text-[#404040] mb-4'>
                  {googleCloudServices[activeTab].name}
                </h3> */}

                {/* Description derived from sources */}
                <p className='text-[#404040] leading-relaxed text-[15px] md:text-[16px]'>
                  {googleCloudServices[activeTab].description}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile View: Tabs + Selected Service */}
        <div className='md:hidden'>
          {/* Mobile Tabs */}
          <div className='flex justify-center mb-8 px-4'>
            <div className='flex flex-wrap justify-center bg-[#FBF4FE] rounded-3xl p-3 gap-2 border border-purple-50 max-w-full'>
              {googleCloudServices.map((service, index) => {
                const isActive = activeTab === index;
                return (
                  <button
                    key={index}
                    onClick={() => setActiveTab(index)}
                    className={`px-4 py-2 rounded-full text-[12px] font-medium transition-all duration-300 border whitespace-nowrap ${
                      isActive
                        ? 'text-white border-transparent shadow-md'
                        : 'text-[#7030B1] border-transparent hover:bg-purple-50'
                    }`}
                    style={{
                      background: isActive
                        ? 'linear-gradient(180deg, #7030B1 0%, #B56DD3 100%)'
                        : 'transparent',
                    }}
                  >
                    {service.name}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Selected Service Card */}
          <div className='bg-white rounded-[24px] overflow-hidden shadow-lg border border-gray-100 flex flex-col'>
            {/* Image */}
            <div className='relative w-full h-[240px]'>
              <Image
                src={getImagePath(activeTab)}
                alt={`Illustration for ${googleCloudServices[activeTab].name}`}
                fill
                className='object-cover'
              />
            </div>

            {/* Content */}
            <div className='p-6 flex flex-col items-start'>
              {/* Tag */}
              <div className='inline-block px-4 py-1.5 rounded-2xl border border-[#9156AA] text-[#7030B1] font-semibold text-sm mb-4 bg-transparent'>
                {activeTab + 1}. {googleCloudServices[activeTab].tag}
              </div>

              {/* Title */}
              <h3 className='text-xl font-bold text-gray-800 mb-3'>
                {googleCloudServices[activeTab].name}
              </h3>

              {/* Description */}
              <p className='text-gray-600 text-sm leading-relaxed'>
                {googleCloudServices[activeTab].description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offerings;
