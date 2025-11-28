import React, { useState } from 'react';

const accordionItems = [
  {
    sno: "01",
    title: "Smart Retail Activation",
    subtitle: "Fashion, Lifestyle, General Retail",
    content: "Automate lead nurturing, deal tracking, and customer relationships with AI-driven workflows.",
    image: "/images/retail-icon.svg"
  },
  {
    sno: "02",
    title: "Manufacturing Intelligence",
    subtitle: "Factory Operations, Maintenance, Procurement Teams",
    content: "Screen resumes, schedule interviews, and automate onboarding with zero manual effort.",
    image: "/images/manufacturing-icon.svg"
  },
  {
    sno: "03",
    title: "Digital Growth & Marketing Optimizer",
    subtitle: "Digital Marketing, CRM, Growth Teams",
    content: "Resolve tickets, automate troubleshooting, and boost support response time using intelligent agents.",
    image: "/images/marketing-icon.svg"
  },
  {
    sno: "04",
    title: "Smart Frontline Sales Enablement",
    subtitle: "SDRs, Sales Teams, Pre-Sales Operations",
    content: "AI-powered bookkeeping, invoice processing, and expense reconciliation at scale.",
    image: "/images/sales-icon.svg"
  },
  {
    sno: "05",
    title: "Food & Beverage SmartOps",
    subtitle: "QSRs, Restaurant Chains, Food Service Ops",
    content: "Personalized outreach, campaign optimization, and automated content generation across channels.",
    image: "/images/food-icon.svg"
  },
  {
    sno: "06",
    title: "Logistics & Supply Chain Optimizer",
    subtitle: "Logistics Teams, Delivery Managers, Warehouse Ops",
    content: "Streamline workflows, eliminate bottlenecks, and enhance operational productivity end-to-end.",
    image: "/images/logistics-icon.svg"
  },
  {
    sno: "07",
    title: "IT Services & Enterprise Support",
    subtitle: "Enterprise IT, HR Operations, Support Teams",
    content: "Provide 24/7 support with AI agents that understand customer issues and resolve them instantly.",
    image: "/images/it-icon.svg"
  },
  {
    sno: "08",
    title: "Real Estate Intelligence",
    subtitle: "Property Managers, Leasing Teams",
    content: "Automate inventory, product recommendations, and customer engagement across storefronts.",
    image: "/images/realestate-icon.svg"
  }
];

const bgColors = [
  "#6E2B8BF2",
  "#8835AB",
  "#9E44C5",
  "#DBB9E9",
  "#E7C5F5",
  "#FDDBFF",
  "#FCF7FC",
  "#FFFFFF",
];

const AgentBundle = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const toggleAccordion = (index) => setOpenIndex(openIndex === index ? null : index);

  return (
    <div className="w-full bg-white">
      <div className="pt-[100px] flex justify-center">
        <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-[32px] leading-[55px] font-medium bg-gradient-to-r from-[#7030B1] to-[#B56DD3] text-transparent bg-clip-text">
            Agent Bundles
          </h1>
          <p className="mt-5 text-[16px] font-medium text-[#404040] max-w-2xl mx-auto mb-[60px]">
            Pre-configured AI agent packages designed for specific industries and use
            cases. Deploy intelligent automation across your entire organization with
            just one click.
          </p>
        </div>
      </div>

      {accordionItems.map((item, index) => {
        const isOpened = openIndex === index;

        let textColor = index < 3 ? "#FFFFFF" : "#404040";
        let subtitleColor = index < 4 ? "#E5E5E5" : index === 4 ? "#262626" : "#525252";

        // special 4th accordion rule (index = 3)
        if (index === 3) {
          textColor = isOpened ? "#404040" : "#FFFFFF";
        }

        return (
          <div
            key={index}
            className="w-full border-b border-gray-200"
            style={{ backgroundColor: bgColors[index] }}
          >
            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full py-5 flex justify-between items-center text-left"
              >
                <div className="flex flex-col items-start">
                  {/* Custom tile div with dynamic width */}
                  <div
                    className="flex items-center bg-transparent border border-[#804599] rounded-[12px] mb-2"
                    style={{
                      height: "45px",
                    }}
                  >
                    {/* SNO column */}
                    <div
                      className="flex items-center justify-center h-full px-3 rounded-l-[12px]"
                    >
                      <span
                        className="text-[14px] font-medium whitespace-nowrap"
                        style={{ color: textColor }}
                      >
                        {item.sno}
                      </span>
                    </div>

                    {/* Title column - dynamic width */}
                    <div className="flex items-center px-3 rounded-r-[12px]">
                      <span
                        className="text-[14px] font-medium whitespace-nowrap"
                        style={{ color: textColor }}
                      >
                        {item.title}
                      </span>
                    </div>
                  </div>

                  {/* Subtitle */}
                  <span
                    className="text-[12px] font-normal"
                    style={{ color: subtitleColor }}
                  >
                    {item.subtitle}
                  </span>
                </div>

                <span className="text-[24px] font-bold" style={{ color: textColor }}>
                  {isOpened ? "−" : "+"}
                </span>
              </button>

              {isOpened && (
                <div className="pb-5 flex items-start gap-6">
                  {/* Image on the left */}
                  <div className="flex-shrink-0">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-16 h-16 object-contain"
                    />
                  </div>

                  {/* Content on the right */}
                  <div className="flex-1">
                    <div className="text-[16px]" style={{ color: textColor }}>
                      {item.content}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AgentBundle;
