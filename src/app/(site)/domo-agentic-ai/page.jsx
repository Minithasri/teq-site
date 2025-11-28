'use client';
import DomoBanner from '@/pages/DomoAgenticAI/DomoBanner';
import DomoAgenticAI from '@/pages/DomoAgenticAI/DomoAgenticAI';
import DomoMatter from '@/pages/DomoAgenticAI/DomoMatter';
import AgentCatalyst from '@/pages/DomoAgenticAI/AgentCatalyst';
import PlatformFeatures from '@/pages/DomoAgenticAI/PlatformFeatures';
import BuiltAIAgents from '@/pages/DomoAgenticAI/BuiltAIAgents';
import SimpleSteps from '@/pages/DomoAgenticAI/SimpleSteps';
import AgentBundle from '@/pages/DomoAgenticAI/AgentBundle';
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
      </main>
    </div>
  );
}
