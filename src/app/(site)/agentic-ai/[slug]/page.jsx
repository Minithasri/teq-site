import { notFound } from 'next/navigation';
import { agenticAiTopics } from '@/data/agenticAiTopics';
import Template1 from '@/components/AgenticAI/Templates/Template1/index';
import Template2 from '@/components/AgenticAI/Templates/Template2/index';
import Template3 from '@/components/AgenticAI/Templates/Template3/index';
import Template4 from '@/components/AgenticAI/Templates/Template4/index';
import Template5 from '@/components/AgenticAI/Templates/Template5/index';

const templateMap = {
  template1: Template1,
  template2: Template2,
  template3: Template3,
  template4: Template4,
  template5: Template5,
};

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const topic = agenticAiTopics.find(t => t.slug === slug);
  if (!topic) return {};
  return {
    title: topic.seoTitle || topic.title,
    description: topic.seoDescription || topic.description,
  };
}

export async function generateStaticParams() {
  return agenticAiTopics.map(t => ({ slug: t.slug }));
}

export default async function AgenticTopicPage({ params }) {
  const { slug } = await params;
  const topic = agenticAiTopics.find(t => t.slug === slug);
  if (!topic) notFound();

  const TemplateComponent = templateMap[topic.template] || Template1;
  return <TemplateComponent data={topic} />;
}
