// src/data/blogsData.js

export const blogsData = [
  {
    slug: 'agentic-ecosystem',
    title: 'What is Agentic AI? A Plain-Language Guide for Enterprise Decision-Makers',
    breadcrumbTitle: 'What is Agentic AI?',
    subtitle:
      'Understand how autonomous AI systems set goals, execute multi-step workflows, and transform enterprise operations.',
    description:
      'Explore how coordinated multi-agent ecosystems are redefining autonomous operations, startup assessments, and complex workflows across industries.',
    image: '/images/blogs/blog2.png',
    category: 'Agentic AI',
    author: 'GWC DATA.AI',
    date: 'June 11, 2026',
    readTime: '12 min read',
    executiveSummary: [
      {
        label: 'What it is',
        text: 'Agentic AI refers to AI systems that autonomously set goals, reason across multi-step plans, and take action inside enterprise systems with minimal human intervention.',
      },
      {
        label: 'Why it matters',
        text: 'Closes the loop between data and execution without a human in the middle of every step, at machine speed and enterprise scale.',
      },
      {
        label: 'Business implication',
        text: 'Gartner projects 40% of enterprise apps will include AI agents by end of 2026. Organizations in production report average ROI of 171%.',
      },
      {
        label: 'Risk implication',
        text: 'Over 40% of agentic AI projects are at risk of cancellation by 2027 due to poor governance and unclear ROI.',
      },
      {
        label: 'Recommended action',
        text: 'Identify one high-value, high-data-quality process where an agent can close a decision-execution loop. Start there. Build governance from day one.',
      },
    ],
    analysisSection: {
      title: 'The Question Every Executive is Asking',
      description:
        "Is agentic AI just another buzzword? In late 2025, 'agents' replaced 'copilots' as the dominant vernacular in the enterprise AI space. But beneath the surface, there is a fundamental technological shift happening. We are moving from AI that advises humans to AI that acts on their behalf. Every modern executive is now grappling with the transition from knowledge retrieval to autonomous execution.",
      cardTitle: 'What Agentic AI is Not',
      cardItems: [
        {
          label: 'Not a chatbot',
          text: 'Chatbots are conversational interfaces. They wait for a prompt and return text. Agents are objective-oriented; they take a goal and execute until the result is achieved.',
        },
        {
          label: 'Not generative AI',
          text: 'While agents often use LLMs for reasoning, agentic AI is about orchestration and action, not just generating synthetic content.',
        },
        {
          label: 'Not traditional automation',
          text: "RPA and legacy automation follow rigid 'if-this-then-that' scripts. Agents navigate ambiguity and reason through obstacles without pre-defined paths.",
        },
      ],
    },
    tableSection: {
      title: '5-Step Agent Cycle',
      headers: ['Step', 'What Happens', 'Example'],
      rows: [
        {
          step: 'Observe',
          description: 'Gathers real-time data from disparate systems.',
          example: 'Monitoring stock levels across 500 locations.',
        },
        {
          step: 'Reason',
          description: 'Identifies patterns, anomalies, or opportunities.',
          example: 'Detecting a regional surge in demand due to weather.',
        },
        {
          step: 'Decide',
          description: 'Evaluates scenarios and selects best path.',
          example: 'Determining optimal reorder quantities for 12 SKU types.',
        },
        {
          step: 'Approve',
          description: 'Requests human sign-off (if threshold exceeded).',
          example: 'Triggering a Slack alert for any order >$50k.',
        },
        {
          step: 'Execute',
          description: 'Triggers API calls to finalize actions.',
          example: 'Updating ERP system and notifying supplier via EDI.',
        },
      ],
    },
    additionalImage: '/images/blogs/blog3.png',
    comparisonTableSection: {
      title: 'Agentic AI vs the Alternatives',
      headers: ['Dimension', 'Traditional Automation', 'Generative AI', 'Agentic AI'],
      rows: [
        {
          dimension: 'What it does',
          traditional: 'Follows hard-coded rules',
          genai: 'Predicts next likely word/pixel',
          agentic: 'Pursues dynamic goals',
        },
        {
          dimension: 'Human involvement',
          traditional: 'Humans build the rules',
          genai: 'Humans provide prompts',
          agentic: 'Humans set constraints/guardrails',
        },
        {
          dimension: 'Adaptability',
          traditional: 'Zero. Static workflows.',
          genai: 'High (within context window)',
          agentic: 'Self-correcting reasoning loops',
        },
        {
          dimension: 'System integration',
          traditional: 'Single connector',
          genai: 'API-only (text in/out)',
          agentic: 'Multi-tool native orchestration',
        },
        {
          dimension: 'Business impact',
          traditional: 'Incremental efficiency',
          genai: 'Creativity / Knowledge access',
          agentic: 'Autonomous operations at scale',
        },
      ],
    },
    deploymentCardsSection: {
      title: 'Where Enterprises are Deploying It',
      cards: [
        {
          icon: '/images/blogs/blog4.svg',
          title: 'Supply Chain & Inventory',
          statText: 'Average lead time reduced by 22%',
        },
        {
          icon: '/images/blogs/blog5.svg',
          title: 'Finance & Accounts Payable',
          statText: 'Hired at 1/10th the manual cost',
        },
        {
          icon: '/images/blogs/blog6.svg',
          title: 'Customer Service',
          statText: '92% resolution rate without human tier-2',
        },
        {
          icon: '/images/blogs/blog7.svg',
          title: 'Retail Operations',
          statText: '34% improvement in gross margin',
        },
      ],
    },
    enterpriseScenarioSection: {
      title: 'ENTERPRISE SCENARIO',
      cards: [
        {
          type: 'challenge',
          title: 'The Challenge',
          text: 'A global consumer electronics brand struggled with high-volume, low-value inventory decisions, leading to persistent overstock and 8.3% stock-out rates on key SKUs.',
        },
        {
          type: 'solution',
          title: 'The Solution',
          text: 'Deployed GWC Orchestrator Agents to ingest sales velocity and ERP data, autonomously executing 12,000 weekly stock transfers across 3 regions.',
        },
        {
          type: 'outcome',
          title: 'The Outcome',
          bullets: [
            { text: 'Stock-out rate ', highlight: '8.3% → 2.1%' },
            { text: 'Overstocking down ', highlight: '34%' },
            { text: '', highlight: '87%', suffix: ' of orders agent-generated' },
            { text: 'Team shifted to ', highlight: 'exception management' },
          ],
        },
      ],
      quote:
        '"The technology did not replace the team. It replaced the low-value, high-volume work consuming their time."',
    },
    governanceSection: {
      title: 'The Governance Imperative',
      description:
        "With Gartner projecting 40% of projects at risk by 2027, the difference between success and failure is rarely technical. It's governance. Currently, only 21% of organizations have a mature AI governance framework in production.",
      cards: [
        {
          number: '1',
          title: 'Define the ceiling before you build',
          description:
            'Establish the maximum financial or operational authority an agent has without human intervention.',
        },
        {
          number: '2',
          title: 'Audit every action',
          description:
            "Ensure every agentic decision is logged with the 'reasoning path' it used to get there, ready for review.",
        },
        {
          number: '3',
          title: 'Design human oversight in, not on',
          description:
            "Human-in-the-loop shouldn't be a friction point; it should be a native escalation path for agents.",
        },
      ],
    },
    readinessChecklist: {
      title: 'Before You Deploy: A Readiness Checklist',
      items: [
        {
          label: 'Data Quality',
          text: 'Are your underlying APIs and data lakes clean enough for machine consumption?',
        },
        {
          label: 'Governance',
          text: "Have you defined a 'kill switch' and audit logging requirements?",
        },
        {
          label: 'ROI Definition',
          text: "Have you quantified the value of 'closed loop' execution vs knowledge retrieval?",
        },
        {
          label: 'Stack Readiness',
          text: 'Do you have a platform (like Snowflake or Domo) to serve as a single source of truth?',
        },
        {
          label: 'Escalation',
          text: 'Is there a clear protocol for when an agent encounters ambiguity?',
        },
        {
          label: 'Security',
          text: "Have you implemented role-based access for your AI agent's credentials?",
        },
      ],
    },
    gwcPerspective: {
      tagline: 'GWC PERSPECTIVE',
      title: 'Moving from visibility to autonomous execution.',
      description:
        "At GWC DATA.AI, we've moved past the 'chatbot' era. We are currently managing 50-plus production agents across global supply chains and financial systems. Our platform stack leverages the analytical power of Domo and Snowflake, integrated with the reasoning capabilities of Claude AI, to deliver agentic workflows that actually drive bottom-line results.",
      card: {
        title: 'Ready to Deploy?',
        subtitle: 'Schedule a feasibility workshop with our engineering team.',
        email: 'hello@gwcdata.ai',
        buttonText: 'Contact Us',
      },
    },
    keyTakeawaysSection: {
      title: 'Key Takeaways',
      items: [
        {
          num: '1.',
          text: 'Agentic AI is about closure—finishing the loop from data insight to system action.',
        },
        {
          num: '2.',
          text: 'Governance is the bottleneck, not the technology. Secure audit trails are non-negotiable.',
        },
        {
          num: '3.',
          text: 'The most successful pilots target low-value, high-volume process exceptions.',
        },
        {
          num: '4.',
          text: 'ROI is driven by machine speed and operational scale, not just headcount reduction.',
        },
        {
          num: '5.',
          text: "2026 is the year of the 'production agent'. Organizations that wait risk significant operational lag.",
        },
      ],
    },
    aboutSection: {
      tagline: 'ABOUT GWC DATA.AI',
      text: 'GWC DATA.AI is a premier enterprise AI implementation firm specializing in closing the loop between data visibility and autonomous execution. Our team of engineers and strategists help Fortune 500 companies deploy robust, governed agentic systems that scale across the global supply chain, finance, and operations.',
    },
  },
];
