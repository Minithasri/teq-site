'use client';

const DomoMatter = () => {
  const items = [
    {
      title: "From Dashboards to Decisions",
      desc:
        "Eliminate bottlenecks with instant, intelligent responses that keep your business moving at the speed of data and innovation.",
      icon: "/images/Lighting.svg",
    },
    {
      title: "No Manual Delays",
      desc: "Automate actions so teams never wait on repetitive operational steps.",
      icon: "/images/Clock.svg",
    },
    {
      title: "Consistent, Rules-Based Execution",
      desc: "Ensure every workflow follows policy perfectly, every time.",
      icon: "/images/Shield.svg",
    },
    {
      title: "Always-On, Always-Adaptive",
      desc: "Respond continuously to live data conditions with zero downtime.",
      icon: "/images/Mind.svg",
    },
  ];

  return (
    <div className="w-full py-10">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-[30%_70%] gap-10 items-start">

          {/* LEFT COLUMN */}
          <div className="space-y-4 sm:space-y-6 self-start">
            <h1 className="font-medium text-[24px] sm:text-[32px] leading-tight">
              <span className="text-[#404040]">Why </span>
              <span className="bg-gradient-to-r from-[#7030B1] to-[#B56DD3] bg-clip-text text-transparent">
                it matters
              </span>
              <span className="text-[#404040]"> for your Business</span>
            </h1>

            <p className="text-[#737373] text-[14px] sm:text-[18px] leading-[24px] sm:leading-[38px] font-medium">
              Our Development Philosophy We build reliable, scalable AI that delivers real impact.
            </p>
          </div>

          {/* RIGHT COLUMN */}
          <div className="space-y-6 text-[#404040]">

            {items.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-3 sm:gap-4 group flex-nowrap"
              >

                {/* ICON */}
                <div
                  className="rounded-full flex items-center justify-center shrink-0 transition-all duration-500 ease-in-out group-hover:scale-110"
                  style={{
                    width: "109px",
                    height: "109px",
                    backgroundColor: "#EDE4F5",
                  }}
                >
                  <img
                    src={item.icon}
                    alt=""
                    className="w-[46px] h-[46px] transition-all duration-500 ease-in-out group-hover:scale-110"
                  />
                </div>

                {/* PILL STACK */}
                <div
                  className="relative overflow-hidden"
                  style={{
                    width: "620px",
                    height: "109px",
                  }}
                >

                  {/* TITLE PILL */}
                  <div
                    className="
                      absolute inset-0 flex items-center px-3 sm:px-6
                      transition-all duration-700 ease-out
                      group-hover:-translate-y-full
                      text-[14px] sm:text-[20px] font-semibold
                    "
                    style={{
                      borderRadius: "70px",
                      border: "1px solid transparent",
                      background:
                        "linear-gradient(#FFFFFF, #FFFFFF) padding-box, linear-gradient(to right, #C4A3E5, #E5E5E5) border-box",
                    }}
                  >
                    {item.title}
                  </div>

                  {/* DESC PILL */}
                  <div
                    className="
                      absolute inset-0 flex items-center px-3 sm:px-6
                      translate-y-full
                      transition-all duration-700 ease-out
                      group-hover:translate-y-0
                      text-[11px] sm:text-[14px] font-medium
                      leading-tight sm:leading-[22px]
                    "
                    style={{
                      borderRadius: "70px",
                      border: "1px solid transparent",
                      background:
                        "linear-gradient(#FFFFFF, #FFFFFF) padding-box, linear-gradient(to right, #C4A3E5, #E5E5E5) border-box",
                    }}
                  >
                    {item.desc}
                  </div>

                </div>

              </div>
            ))}

          </div>

        </div>
      </div>
    </div>
  );
};

export default DomoMatter;
