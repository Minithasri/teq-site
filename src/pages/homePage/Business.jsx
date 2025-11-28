import { FaPhone } from 'react-icons/fa';

const Business = () => {
  return (
    <div className="bg-white px-4 mb-[100px]">
      <div className="mx-auto max-w-7xl container-wrapper">
        <div className="p-8 sm:p-12 md:p-16 lg:p-20 rounded-[20px] sm:rounded-[25px] border-[4px] sm:border-[6px] md:border-[8px] border-[#F2F2F2] bg-white text-center shadow-2xl">
          <h1 className="text-[32px] leading-[38px] font-semibold mb-4 md:mb-6 break-words">
            Ready to <span className="text-[#914DC1]">Activate Agentic AI</span>
          </h1>

          <h2 className="text-[24px] leading-[32px] sm:text-[28px] sm:leading-[38px] md:text-[32px] md:leading-[20px] font-normal mb-10 md:mb-14 break-words">
            in Your Business?
          </h2>

          <div className="flex flex-col sm:flex-row gap-6 md:gap-8 justify-center items-center max-w-2xl mx-auto">
            {/* Updated Explore button */}
            <div className="w-full sm:w-[230px] rounded-full p-[2px] bg-gradient-to-r from-[#7030B1] to-[#B56DD3] shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300">
              <button className="w-full h-[50px] px-6 md:px-8 text-[16px] font-semibold rounded-full bg-white text-[#6F2B8B]">
                Explore Use Cases
              </button>
            </div>

            <button className="w-full sm:w-[230px] h-[50px] px-6 md:px-8 text-[16px] font-semibold rounded-full bg-gradient-to-r from-[#7030B1] to-[#B56DD3] text-white flex items-center justify-center gap-3 transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105">
              <FaPhone className="text-lg" />
              Contact us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Business;
