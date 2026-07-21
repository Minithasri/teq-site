// src/components/Blogs/sections/BlogTable.jsx
'use client';

export default function BlogTable({ tableData }) {
  if (!tableData) return null;

  const isFourColumn = tableData.headers && tableData.headers.length === 4;

  return (
    <div className='w-full my-12 bg-[#FFFFFF]'>
      {/* Table Heading */}
      <h2 className='text-2xl md:text-3xl font-medium text-[#404040] mb-8 font-sans'>
        {tableData.title}
      </h2>

      {/* Styled Responsive Table container with 2px border */}
      <div className='overflow-x-auto rounded-xl border-2 border-gray-100 shadow-sm'>
        <table className='w-full min-w-[700px] border-collapse text-left text-sm md:text-base text-gray-700'>
          <thead>
            <tr
              style={{
                background:
                  'linear-gradient(106.63deg, rgba(112, 48, 177, 0.12) 0%, rgba(181, 109, 211, 0.12) 100%), linear-gradient(0deg, rgba(255, 255, 255, 0.85), rgba(255, 255, 255, 0.85))',
              }}
              className='border-b border-gray-200'
            >
              {tableData.headers.map((header, index) => (
                <th key={index} className='px-6 py-4 font-semibold text-[#404040] font-sans'>
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className='divide-y divide-gray-100 bg-[#FFFFFF]'>
            {tableData.rows.map((row, index) => (
              <tr key={index} className='hover:bg-gray-50/50 transition-colors duration-150'>
                {/* Column 1: Step / Phase */}
                <td className='px-6 py-4 font-sans'>
                  <span
                    style={{
                      background: 'linear-gradient(180deg, #7030B1 0%, #B56DD3 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      display: 'inline',
                    }}
                    className='font-bold'
                  >
                    {row.step}
                  </span>
                  {!isFourColumn && row.stepSuffix && (
                    <span className='font-normal text-gray-600 font-sans ml-1'>
                      {row.stepSuffix}
                    </span>
                  )}
                </td>

                {/* Column 2: Duration (if 4-col table) */}
                {isFourColumn && (
                  <td className='px-6 py-4 text-gray-600 font-sans font-medium whitespace-nowrap'>
                    {row.duration || row.stepSuffix}
                  </td>
                )}

                {/* Column 3: Description / What Happens */}
                <td
                  className={`px-6 py-4 text-gray-600 leading-relaxed font-sans font-light ${
                    !isFourColumn && tableData.headers.length === 2 ? 'w-[60%]' : ''
                  }`}
                >
                  {row.description}
                </td>

                {/* Column 4: Example / Exit Criteria */}
                {tableData.headers.length > 2 && (
                  <td className='px-6 py-4 text-gray-500 italic leading-relaxed font-sans font-light'>
                    {row.exitCriteria || row.example}
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
