// Case study detailed data - exact content from provided table
export const caseStudiesData = {
  'eliminating-downtime-centralized-maintenance': {
    industry: 'Manufacturing',
    title: 'Eliminating Downtime Through Centralized Digital Maintenance',
    image: '/images/Casestudy/img21.webp',
    problemStatement:
      'Manufacturing teams relied heavily on paper logs, Excel sheets, and disconnected systems to manage machine breakdowns, preventive maintenance, and AMC contracts. This resulted in delayed response times, missed AMC renewals, poor vendor accountability, and extended machine downtime, directly impacting production efficiency and costs.',
    solutionImplemented:
      'We designed a centralized digital maintenance platform that enabled operators and engineers to log breakdowns in real time, assign severity, and track resolution status. Automated AMC scheduling and vendor notifications ensured timely inspections and renewals, while dashboards provided visibility into downtime trends, vendor performance, and maintenance KPIs.',
    businessImpact: [
      'Reduced breakdown resolution time by ~30% through real-time alerts and tracking',
      'Achieved ~95% AMC compliance with automated reminders and workflows',
      'Lowered operational costs by reducing manual follow-ups and unplanned downtime',
    ],
    technologyUsed: ['Power Apps', 'Power Automate', 'SQL Server', 'Power BI'],
  },

  'quality-yield-intelligence': {
    industry: 'Manufacturing',
    title: 'Driving First Time Right Manufacturing Through Quality & Yield Intelligence',
    image: '/images/Casestudy/img22.webp',
    problemStatement:
      'Quality teams struggled to identify defect patterns and yield losses due to manual data collection and delayed reporting. Defects were discovered late, making root cause analysis slow and increasing scrap, rework, and production inefficiencies.',
    solutionImplemented:
      'We implemented automated quality dashboards that consolidated data from production lines, machines, operators, and shifts. Interactive drilldowns enabled teams to trace defects to specific stations or parameters, allowing early intervention and continuous quality improvement.',
    businessImpact: [
      'Early identification of defect patterns and yield drops',
      'Reduced scrap and rework through faster root cause analysis',
      'Improved overall production yield and throughput',
    ],
    technologyUsed: ['SQL Server', 'SSIS', 'Tableau/Power BI', 'Excel'],
  },

  'real-time-iot-visibility': {
    industry: 'Manufacturing',
    title: 'Transforming Manufacturing Operations with Real-Time IoT Visibility',
    image: '/images/Casestudy/img23.webp',
    problemStatement:
      'Manufacturing teams relied on manual logs and post-shift reports to track production and machine performance. This caused delayed issue detection, lack of real-time visibility into target vs actual output, unplanned downtime, and slow decision-making on the shop floor.',
    solutionImplemented:
      'We built an IoT-enabled real-time production monitoring system that captured machine telemetry live and streamed it to a centralized cloud platform. Supervisors gained instant visibility into machine status, shift performance, and production deviations through live dashboards and automated alerts.',
    businessImpact: [
      'Increased production productivity by 10–15% through faster intervention',
      'Reduced manual reporting effort by ~90% with automated data capture',
      'Cut issue response time from hours to minutes',
      'Improved on-time delivery through real-time production visibility',
    ],
    technologyUsed: [
      'Power Apps',
      'Power Automate',
      'SQL Server',
      'Power BI',
      'Mobile Integration',
    ],
  },

  'downtime-optimization-electronics': {
    industry: 'Manufacturing',
    title: 'Downtime Optimization & Maintenance Digitization',
    image: '/images/Casestudy/img24.webp',
    problemStatement:
      'An electronics manufacturing company relied on manual logs and spreadsheets to track equipment downtime and maintenance activities. Preventive maintenance schedules were frequently missed, breakdown response times were inconsistent, and there was limited visibility into downtime causes and maintenance costs.',
    solutionImplemented:
      'We implemented a digital Industrial Engineering (IE) maintenance application to manage the complete maintenance lifecycle. The solution enabled real-time downtime tracking, automated preventive maintenance scheduling, mobile-based work order execution, and centralized dashboards for maintenance KPIs and asset performance.',
    businessImpact: [
      'Reduced unplanned downtime by 35%',
      'Improved breakdown response time by 25%',
      'Increased spare part utilization efficiency by 20%',
      'Improved asset reliability through predictive maintenance planning',
    ],
    technologyUsed: [
      'Power Apps',
      'Power Automate',
      'SQL Server',
      'Power BI',
      'Mobile Integration',
    ],
  },

  'yield-visibility-throughput-growth': {
    industry: 'Manufacturing',
    title: 'Turning Yield Visibility into Throughput Growth',
    image: '/images/Casestudy/img25.webp',
    problemStatement:
      'An electronics manufacturing company faced inconsistent production tracking in packaging operations due to manual data entry and lack of real-time monitoring. Limited visibility into machine utilization, yield losses, and bottlenecks led to reduced throughput, higher scrap rates, and delayed decision-making.',
    solutionImplemented:
      'We implemented a real-time production and yield analytics solution that integrated shop-floor data from machines and PLCs into a centralized analytics platform. Live dashboards and predictive models provided visibility into throughput, yield trends, bottlenecks, and quality metrics, enabling proactive planning and performance optimization.',
    businessImpact: [
      'Increased production throughput by 30%',
      'Reduced scrap rate by 25%',
      'Enabled faster, real-time operational decision-making',
    ],
    technologyUsed: [
      'Power BI',
      'Power Automate',
      'SQL Server / Azure Data Lake',
      'Python',
      'DAX',
      'PLC / MES Integration',
    ],
  },

  'digitizing-tool-intelligence': {
    industry: 'Manufacturing',
    title: 'Digitizing Tool Intelligence for Manufacturing Performance',
    image: '/images/Casestudy/img26.webp',
    problemStatement:
      'Manufacturing teams managed tool data using manual registers, Excel sheets, and disconnected systems. This led to poor tool traceability, inaccurate maintenance tracking, delayed calibrations, unplanned downtime, and suboptimal utilization of tools across production lines.',
    solutionImplemented:
      'We built a centralized tool management solution using the Microsoft Power Platform to digitize the complete tool lifecycle. The system enabled real-time tool tracking, automated maintenance and calibration alerts, OCR-based tool identification, and dashboards for utilization and cost visibility.',
    businessImpact: [
      'Improved overall productivity by 30%',
      'Reduced downtime through proactive maintenance and alerts',
      'Enabled real-time operational visibility for better decision-making',
    ],
    technologyUsed: [
      'Power Apps',
      'Power Automate',
      'SQL Server',
      'Power BI',
      'OCR Technology',
      'SharePoint',
    ],
  },

  'sustainability-energy-competitive-advantage': {
    industry: 'Manufacturing',
    title: 'Turning Energy Consumption into a Measurable Competitive Advantage',
    image: '/images/Casestudy/img27.webp',
    problemStatement:
      'The manufacturing enterprise managed environmental data using manual registers and disconnected Excel sheets. This resulted in inaccurate reporting, high manual effort, limited visibility into energy, water, and waste metrics, and challenges in meeting regulatory and ISO 14001 compliance requirements.',
    solutionImplemented:
      'We implemented a centralized sustainability management platform using the Power Platform to digitally track energy, water, waste, and emissions data. The solution enabled AI-based lab report extraction, automated compliance alerts, and real-time dashboards to monitor sustainability KPIs and audit readiness.',
    businessImpact: [
      'Improved data accuracy using AI-driven extraction',
      'Enhanced audit readiness with instant access to documentation',
      'Reduced environmental risk through proactive threshold alerts',
    ],
    technologyUsed: [
      'Power Apps',
      'Power Automate',
      'AI Builder',
      'SQL Server',
      'Azure Data Factory',
      'Power BI',
      'SharePoint',
    ],
  },

  'predictive-maintenance-ai-iot': {
    industry: 'Manufacturing',
    title: 'Predictive Maintenance (AI & IoT)',
    image: '/images/Casestudy/img28.webp',
    problemStatement:
      'The manufacturing company followed a reactive maintenance approach with manual tracking and limited visibility into asset health. This resulted in frequent equipment breakdowns, high maintenance costs, poor workload forecasting, and inefficient technician utilization.',
    solutionImplemented:
      'We implemented an AI-driven predictive maintenance system that monitored equipment performance in real time and applied predictive analytics to forecast failures. Automated alerts, workload forecasting, and dashboards enabled proactive maintenance planning and improved asset visibility.',
    businessImpact: [
      'Reduced unplanned downtime by 40%',
      'Achieved 95% on-time preventive maintenance compliance',
      'Improved asset availability and technician productivity',
    ],
    technologyUsed: [
      'Power BI',
      'Power Automate',
      'SQL Server',
      'Azure Data Factory',
      'Python (Machine Learning)',
    ],
  },

  'ai-chatbot-knowledge-access': {
    industry: 'Manufacturing',
    title: 'AI Chatbot for Enterprise Knowledge Access',
    image: '/images/Casestudy/img29.webp',
    problemStatement:
      'The enterprise stored knowledge across thousands of documents in PDFs, Word, Excel, and image files. Information retrieval relied on keyword-based search, resulting in slow access, inconsistent answers, high manual effort, and delayed decision-making.',
    solutionImplemented:
      'We built an AI-powered enterprise chatbot using a Retrieval-Augmented Generation (RAG) architecture on Azure. The solution enabled semantic search across all document types, automated ingestion and indexing, and secure, role-based access to context-aware answers through a conversational interface.',
    businessImpact: [
      'Improved information retrieval speed by 70%',
      'Reduced manual document review effort by 50%',
      'Improved governance with centralized security and monitoring',
    ],
    technologyUsed: [
      'Azure OpenAI',
      'Azure AI Search',
      'LangChain',
      'Python (Fast API)',
      'React JS',
      'Docker',
      'AKS',
      'Unstructured.io',
      'Azure AD',
      'Azure Monitor',
    ],
  },

  'commonality-traceability-analytics': {
    industry: 'Manufacturing',
    title: 'Commonality & Traceability Analytics',
    image: '/images/Casestudy/img30.webp',
    problemStatement:
      'A mobile manufacturing company operated a multi-stage production process with fragmented quality data across machining, assembly, and testing systems. The lack of unified traceability made root-cause analysis slow, defect containment inefficient, and recurring quality issues difficult to control.',
    solutionImplemented:
      'We implemented an integrated traceability and commonality analytics solution that unified MES, IPQC, and inspection data into a single data model. Interactive dashboards enabled end-to-end part genealogy, cross-stage defect correlation, and real-time drill-down from finished goods to process-level root causes.',
    businessImpact: [
      'Accelerated root-cause analysis by 35%',
      'Achieved 100% traceability across all production stages',
      'Strengthening quality governance and audit readiness',
    ],
    technologyUsed: [
      'Power BI',
      'SQL Server / Data Lake',
      'MES & IPQC Systems',
      'Power Automate / APIs',
      'Python',
      'DAX',
    ],
  },

  'iot-based-machine-monitoring': {
    industry: 'Manufacturing',
    title: 'IoT-Based Machine Monitoring',
    image: '/images/Casestudy/img31.webp',
    problemStatement:
      'Many legacy machines lacked digital interfaces, forcing supervisors to depend on manual shift reports for machine utilization and downtime. This limited real-time visibility and delayed response to performance issues.',
    solutionImplemented:
      'IoT sensors were integrated with machines to capture runtime, downtime, and performance metrics. The data was streamed to dashboards that enabled real-time monitoring of machine health and utilization across the shop floor.',
    businessImpact: [
      'Real-time machine visibility',
      'Reduced manual reporting effort',
      'Improved shop-floor productivity',
    ],
    technologyUsed: ['IoT Core', 'Cloud Platform (Azure/GCP)', 'Python', 'Power BI'],
  },

  'scrap-analytics-quality-improvement': {
    industry: 'Manufacturing',
    title: 'Scrap Analytics for Quality Improvement',
    image: '/images/Casestudy/img32.webp',
    problemStatement:
      'A phone manufacturing company lacked centralized visibility into scrap generation across production lines. Manual data collection, inconsistent scrap classification, and delayed analysis made it difficult to correlate scrap trends with production output, leading to higher material waste and operational costs.',
    solutionImplemented:
      'We enabled the client to gain complete, real-time control over scrap and yield performance across production lines. By replacing manual reporting with an automated, centralized analytics layer, we eliminated data gaps and inconsistencies. Interactive dashboards empowered quality and operations teams to pinpoint scrap drivers by shift, line, and product. This helped the client reduce material waste, improve yield, and make faster, data-backed production decisions.',
    businessImpact: [
      'Reduced scrap rate by 25%',
      'Enabled real-time yield and scrap visibility',
      'Improved decision-making through shift-wise and product-level insights',
    ],
    technologyUsed: [
      'SQL Server',
      'SSIS',
      'Tableau',
      'MES & Trace Systems',
      'Power Automate',
      'Azure Cloud',
    ],
  },

  'maintenance-amc-management-plant': {
    industry: 'Manufacturing',
    title: 'Maintenance & AMC Management',
    image: '/images/Casestudy/img33.webp',
    problemStatement:
      'Maintenance activities in the manufacturing plant were largely managed through paper registers and Excel sheets maintained by individual teams. Machine breakdowns were reported informally, AMC inspections were tracked manually, and vendor follow-ups depended on personal coordination. As production scale increased, this approach resulted in delayed breakdown resolution, missed AMC inspections, and lack of accountability. Leadership had no consolidated view of downtime, maintenance effectiveness, or vendor performance.',
    solutionImplemented:
      'A centralized maintenance management solution was implemented to digitize the entire breakdown and AMC process. Operators could log breakdowns in real time with structured inputs, while AMC schedules and inspection timelines were automated. Approval workflows, alerts, and dashboards provided clear visibility into downtime trends, maintenance KPIs, and vendor performance, enabling proactive maintenance planning.',
    businessImpact: [
      '~30% faster breakdown resolution',
      '~95% AMC compliance',
      'Reduced downtime and manual follow-ups',
    ],
    technologyUsed: ['Power Apps', 'Power Automate', 'SQL Server', 'Power BI'],
  },

  'quality-defect-traceability-source': {
    industry: 'Manufacturing',
    title: 'Quality & Defect Traceability',
    image: '/images/Casestudy/img34.webp',
    problemStatement:
      'Quality data was captured manually across shifts and production lines, leading to delayed defect identification and inconsistent root cause analysis. This resulted in increased scrap, rework, and quality variations.',
    solutionImplemented:
      'Quality dashboards were implemented to consolidate defect data across machines, operators, and shifts. Drill-down analysis enabled quality teams to trace defects back to their source and take corrective actions early.',
    businessImpact: [
      'Faster corrective actions',
      'Reduced scrap and rework',
      'Improved production yield',
    ],
    technologyUsed: ['SQL Server', 'SSIS', 'Tableau'],
  },

  'breakdown-analytics-mttr-mtbf': {
    industry: 'Manufacturing',
    title: 'Breakdown Analytics (MTTR / MTBF)',
    image: '/images/Casestudy/img35.webp',
    problemStatement:
      'Frequent machine breakdowns impacted production schedules, but there was no structured data to analyze recurring failures. Maintenance teams lacked visibility into key reliability metrics such as MTTR and MTBF, making it difficult to improve equipment performance.',
    solutionImplemented:
      'An automated analytics layer was built on top of maintenance data to track MTTR, MTBF, downtime patterns, and root causes. Interactive dashboards enabled teams to identify recurring issues and take preventive actions instead of reacting to failures.',
    businessImpact: [
      'Improved equipment reliability',
      'Reduced unplanned downtime',
      'Data-driven maintenance decisions',
    ],
    technologyUsed: ['Power BI', 'SQL Server'],
  },

  'maintenance-efficiency-improvement-platform': {
    industry: 'Manufacturing',
    title: 'Maintenance Efficiency Improvement',
    image: '/images/Casestudy/img36.webp',
    problemStatement:
      'Manufacturing operations relied on manual and disconnected systems for breakdown management, preventive maintenance, spare parts, and AMC tracking. This led to frequent unplanned downtime, slow issue resolution, poor visibility in maintenance performance, and higher operational costs.',
    solutionImplemented:
      'We implemented a smart maintenance management solution using the Microsoft Power Platform to digitize breakdown handling, preventive scheduling, spare part management, and AMC tracking. Predictive analytics dashboards enabled real-time monitoring of maintenance KPIs and proactive identification of recurring failures.',
    businessImpact: [
      'Improved breakdown resolution time by 30%',
      'Optimized maintenance costs via better spare part planning',
      'Improved asset reliability and governance with audit-ready workflows',
    ],
    technologyUsed: [
      'Power Apps',
      'Power Automate',
      'SQL Server',
      'Azure Data Factory',
      'Power BI',
      'SharePoint',
    ],
  },

  'automobile-warranty-vehicle-health': {
    industry: 'Automobile',
    title: 'Warranty & Vehicle Health Analytics',
    image: '/images/Casestudy/img37.webp',
    problemStatement:
      'Engineering and after-sales teams lacked a unified view of vehicle health, warranty claims, and recurring quality issues. Data was scattered across diagnostic systems and service records, making it difficult to proactively address faults and control warranty costs.',
    solutionImplemented:
      'We built a real-time analytics platform that consolidated diagnostic trouble codes, performance metrics, and warranty data into a single dashboard. This enabled teams to identify recurring issues early and take corrective actions before problems escalated.',
    businessImpact: [
      'Faster identification of recurring vehicle issues',
      'Reduction in warranty claim costs through proactive actions',
      'Improved coordination between engineering and service teams',
    ],
    technologyUsed: ['Data Lake', 'Databricks', 'Apache Spark', 'Power BI'],
  },

  'banking-operational-performance-analytics': {
    industry: 'Banking',
    title: 'Operational Performance Analytics',
    image: '/images/Casestudy/img38.webp',
    problemStatement:
      'Banking operations teams lacked timely visibility into critical KPIs such as loan delinquencies, deposit trends, and teller performance. Manual reporting delayed decision-making and limited the ability to identify risks early.',
    solutionImplemented:
      'We developed interactive dashboards that provided real-time visibility into banking operations. Drill-down capabilities and automated KPI calculations enabled leadership to monitor trends, identify risk areas, and take data-driven actions.',
    businessImpact: [
      '~60% reduction in manual reporting effort',
      'Improved turnaround time for management reporting',
      'Better risk identification and operational decision-making',
    ],
    technologyUsed: ['Tableau', 'SQL', 'Salesforce Integration'],
  },

  'funnel-conversion-analytics': {
    industry: 'Marketing & Media',
    title: 'Funnel & Conversion Analytics',
    image: '/images/Casestudy/img39.webp',
    problemStatement:
      'Marketing teams were generating large volumes of leads across digital channels, but lacked visibility into how these leads progressed through the funnel. Data related to impressions, clicks, leads, and conversions existed in silos across platforms, making it difficult to identify where prospects dropped off. As a result, optimization decisions were based on assumptions rather than clear funnel insights, impacting conversion rates and marketing ROI.',
    solutionImplemented:
      'We provided leadership with a single, unified view of the entire marketing funnel, from impressions to final conversions. By eliminating fragmented reporting, decision-makers gained clear visibility into where prospects dropped off and why. This transparency enabled faster, more confident optimization of campaigns and budget allocation. As a result, the organization improved conversion performance and maximized marketing ROI through data-driven decisions.',
    businessImpact: [
      'Clear visibility into where leads drop in the funnel',
      'Better campaign optimization and higher conversions',
      'Improved marketing ROI through data-driven decisions',
    ],
    technologyUsed: [
      'Digital marketing platforms',
      'Python',
      'Cloud data warehouse (BigQuery)',
      'Dashboarding tool (Domo / Tableau)',
    ],
  },

  'cross-platform-campaign-analytics': {
    industry: 'Digital Marketing',
    title: 'Cross-Platform Campaign Analytics',
    image: '/images/Casestudy/img40.webp',
    problemStatement:
      'Marketing teams managed campaigns across multiple platforms but relied on manual reporting, leading to inconsistent metrics and delayed ROI insights. There was no single source of truth for campaign performance.',
    solutionImplemented:
      'We centralized data from multiple ad platforms into a unified analytics layer. Automated ETL pipelines cleaned and standardized data, while real-time dashboards enabled teams to monitor performance, optimize spending, and demonstrate ROI to stakeholders.',
    businessImpact: [
      'Eliminated up to 90% of manual reporting effort',
      'Improved data accuracy and consistency across platforms',
      'Faster optimization of marketing spend and ROI',
    ],
    technologyUsed: ['Domo', 'APIs', 'ETL Pipelines', 'SQL'],
  },

  'healthcare-operational-kpi-dashboards': {
    industry: 'Healthcare',
    title: 'Operational KPI Dashboards',
    image: '/images/Casestudy/img41.webp',
    problemStatement:
      "Healthcare operations teams relied on periodic, static reports to track admissions, appointments, bed occupancy, and resource utilization. These reports were often outdated by the time they were reviewed, limiting the team's ability to proactively manage capacity and respond to operational bottlenecks. This reactive approach impacted service efficiency, staff utilization, and overall patient experience.",
    solutionImplemented:
      'We developed interactive operational dashboards that provided near real-time visibility into key healthcare KPIs such as admissions, bed utilization, appointment throughput, wait times, and department-wise performance. The solution enabled operations teams to continuously monitor trends, identify bottlenecks early, and take timely corrective actions to optimize capacity and improve patient flow across departments.',
    businessImpact: [
      'Improved operational visibility and capacity planning',
      'Faster identification and resolution of bottlenecks',
      'Enhanced patient experience and service efficiency',
    ],
    technologyUsed: ['Domo / Power BI', 'SQL Server', 'Automated Data Pipelines'],
  },

  'healthcare-data-platform-modernization': {
    industry: 'Healthcare',
    title: 'Data Platform Modernization',
    image: '/images/Casestudy/img42.webp',
    problemStatement:
      'Healthcare organizations faced fragmented data pipelines and inconsistent reporting due to siloed systems and manual data handling. This limited scalability and compliance-ready analytics.',
    solutionImplemented:
      'We designed a scalable data platform using modern orchestration and transformation tools. Automated pipelines standardized data ingestion, ensured data quality, and enabled analytics-ready datasets for reporting and compliance use cases.',
    businessImpact: [
      'Improved data quality and auditability',
      'Faster onboarding of new data sources and partners',
      'Enabled scalable and standardized healthcare reporting',
    ],
    technologyUsed: ['Python', 'Dagster', 'dbt', 'Snowflake'],
  },

  'retail-demand-forecasting': {
    industry: 'Retail',
    title: 'Demand Forecasting & Replenishment Planning',
    image: '/images/Casestudy/img43.webp',
    problemStatement:
      'Inaccurate demand forecasting led to overstocking in some locations and frequent shortages in others, impacting revenue and customer satisfaction.',
    solutionImplemented:
      'Demand forecasting models were developed using historical sales and seasonality patterns. These insights were used to optimize replenishment planning and align inventory with expected demand.',
    businessImpact: [
      'Improved forecast accuracy',
      'Reduced inventory carrying costs',
      'Higher order fulfillment rates',
    ],
    technologyUsed: ['Power BI', 'Snowflake', 'Python'],
  },

  'retail-store-benchmarking': {
    industry: 'Retail',
    title: 'Store Performance Benchmarking',
    image: '/images/Casestudy/img44.webp',
    problemStatement:
      'Retail leadership lacked a consolidated view to compare performance across stores. Store-level KPIs were reviewed in isolation, making it difficult to identify best-performing and underperforming locations.',
    solutionImplemented:
      'Store performance dashboards were created to benchmark KPIs such as sales, conversion, and inventory turnover across locations. Drill-down views enabled leadership to take targeted actions.',
    businessImpact: [
      'Improved store-level accountability',
      'Faster identification of performance gaps',
      'Better decision-making at regional level',
    ],
    technologyUsed: ['Domo', 'SQL'],
  },

  'retail-sales-inventory-intelligence': {
    industry: 'Retail',
    title: 'Sales & Inventory Intelligence',
    image: '/images/Casestudy/img45.png',
    problemStatement:
      'Retail teams relied on Excel-based reporting, resulting in delayed insights into sales performance, inventory levels, and customer behavior. This affected replenishment decisions and revenue opportunities.',
    solutionImplemented:
      'We implemented automated dashboards that integrated POS, eCommerce, and inventory data into a centralized model. Real-time analytics enabled store-level and product-level performance tracking.',
    businessImpact: [
      'Real-time visibility into sales and inventory performance',
      'Improved demand forecasting and stock optimization',
      'Reduced dependency on manual Excel reporting',
    ],
    technologyUsed: ['Domo / Power BI', 'SQL', 'Snowflake'],
  },

  'retail-customer-segmentation': {
    industry: 'Retail',
    title: 'Customer Segmentation & Buying Behavior',
    image: '/images/Casestudy/img46.webp',
    problemStatement:
      'Retail organizations had access to large volumes of customer data across POS systems, loyalty programs, and digital channels, but this data was largely underutilized. Customer behavior was analyzed only at an aggregate level, making it difficult to understand purchasing patterns, preferences, repeat behavior, and category affinity. As a result, marketing campaigns were generic, promotions were poorly targeted, and customer engagement remained low.',
    solutionImplemented:
      'We consolidated customer data from multiple sources into a unified analytical layer and designed segmentation logic based on purchase frequency, recency, monetary value, category affinity, and behavioral trends. Interactive dashboards enabled business and marketing teams to explore customer segments, analyze buying behavior, and design targeted campaigns aligned to specific customer profiles. This shifted marketing efforts from mass outreach to data-driven personalization.',
    businessImpact: [
      'Improved customer targeting and personalization',
      'Higher campaign engagement and conversion rates',
      'Better customer retention and lifetime value',
    ],
    technologyUsed: ['Snowflake', 'SQL', 'Power BI / Domo', 'ETL Pipelines'],
  },

  'oil-gas-work-order-monitoring': {
    industry: 'Oil & Gas',
    title: 'Work Order & Asset Monitoring',
    image: '/images/Casestudy/img47.jpg',
    problemStatement:
      'Work order tracking spanned multiple departments and systems, causing delays, limited visibility, and increased manual follow-ups. This slowed maintenance and project execution.',
    solutionImplemented:
      'We built an integrated reporting solution that consolidated work order data and provided real-time status tracking. Dashboards enabled stakeholders to monitor progress and collaborate efficiently.',
    businessImpact: [
      'Near real-time visibility into work order status',
      'Reduced manual follow-ups by ~50%',
      'Faster maintenance and project execution',
    ],
    technologyUsed: ['Power BI', 'SQL Server', 'SharePoint', 'Python'],
  },
};

// Helper function to get case study by slug
export const getCaseStudyBySlug = slug => {
  return caseStudiesData[slug] || null;
};

// Helper function to get all slugs for static generation
export const getAllCaseStudySlugs = () => {
  return Object.keys(caseStudiesData);
};
