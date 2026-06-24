// src/components/Blogs/sections/ComparisonTable.jsx
'use client';

export default function ComparisonTable({ tableData }) {
  if (!tableData) return null;

  return (
    <div className='w-full bg-[#F8F7F5] py-16 px-4 md:px-6 my-12'>
      <div className='max-w-7xl mx-auto'>
        {/* Section Heading */}
        <h2 className='text-2xl md:text-3xl font-medium text-[#404040] text-center mb-8 font-sans'>
          {tableData.title}
        </h2>

        {/* Responsive Table Wrapper */}
        <div className='overflow-x-auto rounded-xl border-2 border-[#ECEAE6] shadow-sm bg-[#FFFFFF]'>
          <table className='w-full min-w-[700px] border-collapse text-left text-sm md:text-base text-gray-700'>
            <thead>
              <tr
                style={{
                  background:
                    'linear-gradient(106.63deg, rgba(112, 48, 177, 0.12) 0%, rgba(181, 109, 211, 0.12) 100%), linear-gradient(0deg, rgba(255, 255, 255, 0.85), rgba(255, 255, 255, 0.85))',
                }}
                className='border-b border-[#ECEAE6]'
              >
                {tableData.headers.map((header, index) => (
                  <th
                    key={index}
                    className='px-6 py-4 font-semibold text-[#404040] font-sans border-r border-[#ECEAE6] last:border-r-0'
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {tableData.rows.map((row, index) => {
                const isEven = index % 2 === 1; // 0-indexed: index 1, 3 are even rows in table visually
                const rowBg = isEven ? '#F8F7F5' : '#FFFFFF';

                return (
                  <tr
                    key={index}
                    style={{ backgroundColor: rowBg }}
                    className='border-b border-[#ECEAE6] last:border-b-0 hover:opacity-95 transition-opacity duration-150'
                  >
                    {/* Dimension Column with Gradient-filled Text */}
                    <td className='px-6 py-4 font-bold border-r border-[#ECEAE6] w-[20%]'>
                      <span
                        style={{
                          background: 'linear-gradient(180deg, #7030B1 0%, #B56DD3 100%)',
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                          display: 'inline-block',
                        }}
                      >
                        {row.dimension}
                      </span>
                    </td>

                    {/* Traditional Automation Column */}
                    <td
                      className={`px-6 py-4 text-gray-600 leading-relaxed font-sans font-light border-r border-[#ECEAE6] ${tableData.headers.length > 3 ? 'w-[26%]' : 'w-[40%]'}`}
                    >
                      {row.traditional}
                    </td>

                    {/* Generative AI Column */}
                    {tableData.headers.length > 3 && (
                      <td className='px-6 py-4 text-gray-600 leading-relaxed font-sans font-light border-r border-[#ECEAE6] w-[26%]'>
                        {row.genai}
                      </td>
                    )}

                    {/* Agentic AI Column (Bold) */}
                    <td
                      className={`px-6 py-4 text-gray-900 leading-relaxed font-sans font-semibold ${tableData.headers.length > 3 ? 'w-[28%]' : 'w-[40%]'}`}
                    >
                      {row.agentic}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
