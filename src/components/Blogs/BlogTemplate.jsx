// src/components/Blogs/BlogTemplate.jsx
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FiArrowLeft } from 'react-icons/fi';
import AboutGwc from './sections/AboutGwc';
import AnalysisSection from './sections/AnalysisSection';
import BlogContent from './sections/BlogContent';
import BlogHeader from './sections/BlogHeader';
import BlogImage from './sections/BlogImage';
import BlogTable from './sections/BlogTable';
import Breadcrumbs from './sections/Breadcrumbs';
import ComparisonTable from './sections/ComparisonTable';
import DeploymentCards from './sections/DeploymentCards';
import EnterpriseScenario from './sections/EnterpriseScenario';
import ExecutiveSummary from './sections/ExecutiveSummary';
import GovernanceImperative from './sections/GovernanceImperative';
import GwcPerspective from './sections/GwcPerspective';
import InflectionPoint from './sections/InflectionPoint';
import KeyTakeaways from './sections/KeyTakeaways';
import ReadinessChecklist from './sections/ReadinessChecklist';

const BlogTemplate = ({ blog }) => {
  if (!blog) {
    return (
      <div className='max-w-7xl mx-auto px-4 py-20 text-center'>
        <h1 className='text-2xl font-semibold text-gray-800'>Blog post not found</h1>
        <p className='mt-2 text-gray-600'>
          The article you are looking for does not exist or has been moved.
        </p>
        <Link
          href='/blogs'
          className='mt-6 inline-flex items-center gap-2 text-primary hover:underline'
        >
          <FiArrowLeft /> Back to blogs
        </Link>
      </div>
    );
  }

  return (
    <article className='min-h-screen bg-[#FFFFFF] pb-20 pt-[120px]'>
      {/* 1. Header Area: Breadcrumbs, Title, Summary, Featured Image */}
      <div className='max-w-7xl mx-auto px-4 md:px-6'>
        {/* Breadcrumbs */}
        <Breadcrumbs title={blog.breadcrumbTitle || blog.title} />

        {/* Blog Title & Author Details */}
        <BlogHeader blog={blog} />

        {/* Executive Summary (2nd section) */}
        <ExecutiveSummary summary={blog.executiveSummary} />

        {/* Featured Image (3rd section) */}
        <BlogImage src={blog.image} alt={blog.title} />
      </div>

      {/* 2. Analysis Section - Background is full screen width */}
      <AnalysisSection analysis={blog.analysisSection} />

      {/* 3. Mid Area: Table & Additional Image wrapped in max-w-7xl */}
      <div className='max-w-7xl mx-auto px-4 md:px-6'>
        {/* Table Section (5th section) */}
        <BlogTable tableData={blog.tableSection} />

        {/* Additional Image Section (6th section) */}
        {blog.additionalImage && (
          <div className='w-full my-12 overflow-hidden rounded-2xl'>
            <Image
              src={blog.additionalImage}
              alt='Additional blog details'
              width={1200}
              height={630}
              className='w-full h-auto object-cover'
            />
          </div>
        )}
      </div>

      {/* 3.5. Inflection Point Section */}
      <InflectionPoint sectionData={blog.inflectionSection} />

      {/* 4. Comparison Table Section - Background is full screen width bg-[#F8F7F5] */}
      <ComparisonTable tableData={blog.comparisonTableSection} />

      {/* Post Comparison Image Section */}
      {blog.postComparisonImage && (
        <div className='max-w-7xl mx-auto px-4 md:px-6'>
          <div className='w-full my-12 overflow-hidden rounded-2xl'>
            <Image
              src={blog.postComparisonImage}
              alt='Post comparison details'
              width={1200}
              height={630}
              className='w-full h-auto object-cover'
            />
          </div>
        </div>
      )}

      {/* 4.5. Deployment Cards Section (8th section) */}
      <DeploymentCards deploymentData={blog.deploymentCardsSection} />

      {/* 4.8. Enterprise Scenario Section (9th section) - Background is full screen width */}
      <EnterpriseScenario scenarioData={blog.enterpriseScenarioSection} />

      {/* 4.9. Governance Imperative Section (10th section) */}
      <GovernanceImperative governanceData={blog.governanceSection} />

      {/* 4.95. Readiness Checklist Section (11th section) */}
      <ReadinessChecklist checklistData={blog.readinessChecklist} />

      {/* 4.98. GWC Perspective Section (12th section) */}
      <GwcPerspective perspectiveData={blog.gwcPerspective} />

      {/* 4.99. Key Takeaways Section (13th section) - Background is full screen width */}
      <KeyTakeaways takeawaysData={blog.keyTakeawaysSection} />

      {/* 4.995. About GWC Section (14th section) */}
      <AboutGwc aboutData={blog.aboutSection} />

      {/* 5. Bottom Area: Text Content, Back Navigation */}
      <div className='max-w-7xl mx-auto px-4 md:px-6'>
        {/* Main Blog Content - wrapped in a readable container */}
        <div className='mt-12 max-w-4xl mx-auto'>
          <BlogContent content={blog.content} />
        </div>

        {/* Back Navigation */}
        <div className='mt-16 pt-8 border-t border-gray-100 max-w-4xl mx-auto flex justify-center'>
          <Link
            href='/blogs'
            className='inline-flex items-center gap-2 px-5 py-2.5 bg-[#F3F0FF] hover:bg-[#e9e3ff] rounded-lg text-[#7030B1] font-semibold transition-colors duration-200'
          >
            <FiArrowLeft /> Back to Blogs
          </Link>
        </div>
      </div>
    </article>
  );
};

export default BlogTemplate;
