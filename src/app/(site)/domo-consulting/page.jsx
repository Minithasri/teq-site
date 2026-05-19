'use client';
import AgentBundle from '@/components/DomoAgenticAI/AgentBundle';
import AgentCatalyst from '@/components/DomoAgenticAI/AgentCatalyst';
import BuiltAIAgents from '@/components/DomoAgenticAI/BuiltAIAgents';
import DomoAgenticAI from '@/components/DomoAgenticAI/DomoAgenticAI';
import DomoBanner from '@/components/DomoAgenticAI/DomoBanner';
import DomoMatter from '@/components/DomoAgenticAI/DomoMatter';
import PlatformFeatures from '@/components/DomoAgenticAI/PlatformFeatures';
import SimpleSteps from '@/components/DomoAgenticAI/SimpleSteps';
import WhyDomo from '@/components/DomoAgenticAI/WhyDomo';
export default function DomoPage() {
  return (
    <div>
      <main>
        <DomoBanner />
        <DomoAgenticAI />
        <DomoMatter />
        <AgentCatalyst />
        <PlatformFeatures />
        <AgentBundle />
        <SimpleSteps />
        <BuiltAIAgents />
        <WhyDomo />
      </main>
    </div>
  );
}
