import { getAllCaseStudySlugs, getCaseStudyBySlug } from '@/data/caseStudiesData';
import CaseStudyTemplate from '@/pages/Casestudy/CaseStudyTemplate';
import { notFound } from 'next/navigation';

// Generate static params for all case studies
export async function generateStaticParams() {
  const slugs = getAllCaseStudySlugs();
  return slugs.map(slug => ({
    slug: slug,
  }));
}

// Generate metadata for SEO
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const caseStudy = getCaseStudyBySlug(slug);

  if (!caseStudy) {
    return {
      title: 'Case Study Not Found - GWC Data.AI',
    };
  }

  return {
    title: `${caseStudy.title} - GWC Data.AI Case Study`,
    description: caseStudy.problemStatement.substring(0, 160),
  };
}

export default async function CaseStudyPage({ params }) {
  const { slug } = await params;
  const caseStudy = getCaseStudyBySlug(slug);

  if (!caseStudy) {
    notFound();
  }

  return <CaseStudyTemplate caseStudy={caseStudy} />;
}
