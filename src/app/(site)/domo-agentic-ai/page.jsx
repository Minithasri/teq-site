'use client';
import AgentBundle from '@/pages/DomoAgenticAI/AgentBundle';
import AgentCatalyst from '@/pages/DomoAgenticAI/AgentCatalyst';
import BuiltAIAgents from '@/pages/DomoAgenticAI/BuiltAIAgents';
import DomoAgenticAI from '@/pages/DomoAgenticAI/DomoAgenticAI';
import DomoBanner from '@/pages/DomoAgenticAI/DomoBanner';
import DomoMatter from '@/pages/DomoAgenticAI/DomoMatter';
import PlatformFeatures from '@/pages/DomoAgenticAI/PlatformFeatures';
import SimpleSteps from '@/pages/DomoAgenticAI/SimpleSteps';
import WhyDomo from '@/pages/DomoAgenticAI/WhyDomo';
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
