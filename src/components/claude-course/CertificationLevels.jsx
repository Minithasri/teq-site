'use client';

import { ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';

export default function CertificationLevels() {
  const [openIndex, setOpenIndex] = useState(0);

  const levels = [
    {
      title: 'Claude Certified Associate – Foundations',
      meta: '7 Domains • 35 hrs',
      learn: [
        {
          title: 'Master Claude Fundamentals',
          desc: 'Understand how language models work, write effective prompts, and recognize AI limitations.',
        },
        {
          title: 'Work Smarter with Claude',
          desc: 'Handle documents, spreadsheets, and complex information while using Projects, Skills, and saved context efficiently.',
        },
        {
          title: 'Ensure Reliable & Secure Results',
          desc: 'Learn to verify AI outputs, identify inaccuracies, and follow best practices for privacy and confidentiality.',
        },
      ],
      domains: [
        { name: 'Prompting and Task Execution', weight: '14%' },
        { name: 'Output Evaluation and Validation', weight: '21%' },
        { name: 'Product and Model Selection', weight: '12%' },
        { name: 'Workflow Integration and Solution Design', weight: '16%' },
        { name: 'Configuration and Knowledge Management', weight: '12%' },
        { name: 'Governance, Risk, and Responsible Use', weight: '15%' },
        { name: 'Troubleshooting and Optimization', weight: '10%' },
      ],
    },
    {
      title: 'Claude Certified Developer – Foundations',
      meta: '8 Domains • 45 hrs',
      learn: [
        {
          title: 'Advanced Claude Integration',
          desc: 'Learn how to integrate Claude into complex developer workflows and automate repetitive coding tasks.',
        },
        {
          title: 'Optimizing API Performance',
          desc: 'Best practices for managing API calls, reducing latency, and handling high-volume context windows.',
        },
        {
          title: 'Security & Compliance',
          desc: 'Ensure enterprise-grade security when deploying Claude models in production environments.',
        },
      ],
      domains: [
        { name: 'API Integration and Architecture', weight: '20%' },
        { name: 'Performance Optimization', weight: '15%' },
        { name: 'Security and Compliance', weight: '25%' },
        { name: 'Advanced Prompt Engineering', weight: '15%' },
        { name: 'Debugging and Error Handling', weight: '15%' },
        { name: 'Deployment Strategies', weight: '10%' },
      ],
    },
    {
      title: 'Claude Certified Architect – Foundations',
      meta: '5 Domains • 45 hrs',
      learn: [
        {
          title: 'System Architecture Design',
          desc: 'Design robust, scalable AI architectures using Claude for enterprise applications.',
        },
        {
          title: 'Data Pipeline Engineering',
          desc: 'Build efficient data processing pipelines to feed context into language models.',
        },
        {
          title: 'Model Evaluation Frameworks',
          desc: 'Develop comprehensive evaluation frameworks to monitor and improve model performance.',
        },
      ],
      domains: [
        { name: 'Enterprise Architecture', weight: '30%' },
        { name: 'Data Pipeline Design', weight: '25%' },
        { name: 'System Scalability', weight: '20%' },
        { name: 'Performance Monitoring', weight: '15%' },
        { name: 'Cost Optimization', weight: '10%' },
      ],
    },
    {
      title: 'Claude Certified Architect – Professional',
      meta: '7 Domains • 45 hrs',
      learn: [
        {
          title: 'Strategic AI Leadership',
          desc: 'Lead enterprise-wide AI transformation initiatives and establish governance frameworks.',
        },
        {
          title: 'Complex Solution Architecture',
          desc: 'Design multi-agent systems and orchestrate complex workflows across multiple domains.',
        },
        {
          title: 'Risk Management',
          desc: 'Identify and mitigate systemic risks in large-scale generative AI deployments.',
        },
      ],
      domains: [
        { name: 'Strategic Leadership', weight: '20%' },
        { name: 'Multi-Agent Architecture', weight: '20%' },
        { name: 'Advanced Risk Mitigation', weight: '15%' },
        { name: 'Enterprise Governance', weight: '15%' },
        { name: 'Innovation Management', weight: '10%' },
        { name: 'Ethical AI Practices', weight: '10%' },
        { name: 'Global Deployment', weight: '10%' },
      ],
    },
  ];

  return (
    <section
      style={{
        width: '100%',
        backgroundColor: '#FFFFFF',
        fontFamily: 'Outfit, sans-serif',
        padding: '72px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <div style={{ width: '100%' }}>
        {/* Header Section */}
        <div style={{ marginBottom: '40px' }}>
          <h2
            style={{
              fontSize: '40px',
              fontWeight: 600,
              color: '#DE896A',
              margin: '0 0 16px 0',
              lineHeight: '1.1',
              letterSpacing: '-1px',
            }}
          >
            Each level is a complete certification,
            <br />
            not a chapter.
          </h2>
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
            <span style={{ color: '#9CA3AF', letterSpacing: '-1px', fontSize: '14px' }}>
              ------
            </span>
            <p
              style={{
                color: '#9CA3AF',
                fontSize: '13px',
                margin: 0,
                maxWidth: '400px',
                lineHeight: '1.5',
              }}
            >
              You can stop after any level and hold a certificate that means
              <br />
              something on its own. Most people take one.
            </p>
          </div>
        </div>

        {/* Accordion Container */}
        <div
          style={{
            backgroundColor: '#FAFAFA',
            padding: '12px',
            borderRadius: '12px',
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
          }}
        >
          {levels.map((level, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: '8px',
                  border: '1px solid #F3F4F6',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.02)',
                  overflow: 'hidden',
                  transition: 'all 0.3s ease',
                }}
              >
                {/* Accordion Header */}
                <button
                  onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                  style={{
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '24px 32px',
                    backgroundColor: 'transparent',
                    border: 'none',
                    cursor: 'pointer',
                    textAlign: 'left',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                    {isOpen ? (
                      <ChevronUp size={24} color='#DE896A' />
                    ) : (
                      <ChevronDown size={24} color='#DE896A' />
                    )}
                    <span style={{ fontSize: '20px', fontWeight: 500, color: '#374151' }}>
                      {level.title}
                    </span>
                  </div>
                  <span style={{ fontSize: '15px', color: '#DE896A', fontWeight: 500 }}>
                    {level.meta}
                  </span>
                </button>

                {/* Accordion Content */}
                {isOpen && (
                  <div style={{ padding: '0 32px 32px 32px' }}>
                    <div
                      style={{
                        height: '1px',
                        backgroundColor: 'rgba(222, 137, 106, 0.3)',
                        marginBottom: '32px',
                      }}
                    />

                    {/* What you will learn */}
                    {level.learn.length > 0 && (
                      <div
                        style={{
                          border: '1px solid #F3F4F6',
                          borderRadius: '12px',
                          padding: '32px',
                          marginBottom: '24px',
                          backgroundColor: '#FFFFFF',
                          boxShadow: '0 2px 10px rgba(0,0,0,0.01)',
                        }}
                      >
                        <h4
                          style={{
                            margin: '0 0 24px 0',
                            fontSize: '18px',
                            fontWeight: 600,
                            color: '#1F2937',
                          }}
                        >
                          What you will learn
                        </h4>
                        <div
                          style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(3, 1fr)',
                            gap: '20px',
                          }}
                        >
                          {level.learn.map((item, i) => (
                            <div
                              key={i}
                              style={{
                                backgroundColor: '#FFFFFF',
                                border: '1px solid #F9FAFB',
                                borderRadius: '8px',
                                padding: '24px',
                                boxShadow: '0 4px 16px rgba(0,0,0,0.03)',
                              }}
                            >
                              <h5
                                style={{
                                  color: '#DE896A',
                                  fontSize: '15px',
                                  fontWeight: 600,
                                  margin: '0 0 12px 0',
                                }}
                              >
                                {item.title}
                              </h5>
                              <p
                                style={{
                                  color: '#4B5563',
                                  fontSize: '14px',
                                  margin: 0,
                                  lineHeight: '1.6',
                                  fontWeight: 400,
                                }}
                              >
                                {item.desc}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Domain Covered */}
                    {level.domains.length > 0 && (
                      <div
                        style={{
                          border: '1px solid #F3F4F6',
                          borderRadius: '12px',
                          padding: '32px',
                          backgroundColor: '#FFFFFF',
                          boxShadow: '0 2px 10px rgba(0,0,0,0.01)',
                        }}
                      >
                        <div
                          style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            marginBottom: '16px',
                          }}
                        >
                          <span style={{ fontSize: '16px', fontWeight: 600, color: '#1F2937' }}>
                            Domain Covered
                          </span>
                          <span style={{ fontSize: '16px', fontWeight: 600, color: '#1F2937' }}>
                            Weight
                          </span>
                        </div>
                        <div
                          style={{ height: '1px', backgroundColor: '#E5E7EB', marginBottom: '8px' }}
                        />

                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                          {level.domains.map((dom, i) => (
                            <div key={i}>
                              <div
                                style={{
                                  display: 'flex',
                                  justifyContent: 'space-between',
                                  padding: '16px 0',
                                  alignItems: 'center',
                                }}
                              >
                                <span
                                  style={{ color: '#4B5563', fontSize: '15px', fontWeight: 400 }}
                                >
                                  {dom.name}
                                </span>
                                <span
                                  style={{ color: '#DE896A', fontSize: '15px', fontWeight: 500 }}
                                >
                                  {dom.weight}
                                </span>
                              </div>
                              {i < level.domains.length - 1 && (
                                <div style={{ height: '1px', backgroundColor: '#F9FAFB' }} />
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Footer Note */}
        <div style={{ marginTop: '32px', textAlign: 'center' }}>
          <p
            style={{
              color: '#DE896A',
              fontSize: '13px',
              margin: 0,
              fontWeight: 400,
              lineHeight: '1.4',
            }}
          >
            ✻ Teqcertify will guide the candidate for the claude certification.
            <br />
            However the onus of completing and clearing the certification lies with the candidate.
          </p>
        </div>
      </div>
    </section>
  );
}
