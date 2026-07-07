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
      {/* 1. Breadcrumbs & Header Area */}
      <div className='max-w-7xl mx-auto px-4 md:px-6'>
        {/* Breadcrumbs */}
        <Breadcrumbs title={blog.breadcrumbTitle || blog.title} />

        {/* Blog Title & Author Details */}
        <BlogHeader blog={blog} />

        {/* 2. Executive Summary Section */}
        <ExecutiveSummary summary={blog.executiveSummary} />

        {/* 4. Featured Image Section */}
        <BlogImage src={blog.image} alt={blog.title} />
      </div>

      {/* 5. Analysis Section (Full Screen Width) */}
      <AnalysisSection analysis={blog.analysisSection} />

      {/* 6. Mid Area (Table & Optional Additional Image) */}
      <div className='max-w-7xl mx-auto px-4 md:px-6'>
        {/* Table Section */}
        <BlogTable tableData={blog.tableSection} />

        {/* Additional Image Section */}
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

      {/* 7. Inflection Point Section */}
      <InflectionPoint sectionData={blog.inflectionSection} />

      {/* 8. Blog Content Section (e.g. How Agents Talk) */}
      {blog.content && blog.content.length > 0 && (
        <div className='max-w-7xl mx-auto px-4 md:px-6'>
          <div className='mt-12 max-w-full '>
            <BlogContent content={blog.content} />
          </div>
        </div>
      )}

      {/* 9. Comparison Table Section (Full Screen Width) */}
      <ComparisonTable tableData={blog.comparisonTableSection} />

      {/* 9. Post Comparison Image Section */}
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

      {/* 10. Deployment Cards Section */}
      <DeploymentCards deploymentData={blog.deploymentCardsSection} />

      {/* 11. Enterprise Scenario Section (Full Screen Width) */}
      <EnterpriseScenario scenarioData={blog.enterpriseScenarioSection} />

      {/* 12. Governance Imperative Section */}
      <GovernanceImperative governanceData={blog.governanceSection} />

      {/* 13. Readiness Checklist Section */}
      <ReadinessChecklist checklistData={blog.readinessChecklist} />

      {/* 14. GWC Perspective Section */}
      <GwcPerspective perspectiveData={blog.gwcPerspective} />

      {/* 15. Key Takeaways Section (Full Screen Width) */}
      <KeyTakeaways takeawaysData={blog.keyTakeawaysSection} />

      {/* 16. About GWC Section */}
      <AboutGwc aboutData={blog.aboutSection} />

      {/* 17. Bottom Area: Back Navigation */}
      <div className='max-w-7xl mx-auto px-4 md:px-6'>
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
