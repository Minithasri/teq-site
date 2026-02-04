import React, { useState } from 'react';

const dummy = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const tabs = [
    'Data Classification & Sensitivity',
    'Data Quality Management',
    'Data Lineage',
    'Data Access & Authorization',
    'Data Privacy Compliance',
    'Data Governance Policies',
    'Metadata Management',
    'Training & Awareness',
    'Data Risk Management',
    'Audit & Monitoring',
  ];

  const cards = [
    { id: 1, color: '#e63946' },
    { id: 2, color: '#f1c40f' },
    { id: 3, color: '#2a9d8f' },
    { id: 4, color: '#457b9d' },
  ];

  const styles = `
    :root {
      --card-top-offset: 5rem;
      --numcards: 4;
      --overlap-amount: -20px;
    }

    #cards {
      list-style: none;
      padding-bottom: calc(var(--numcards) * var(--card-top-offset));
      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: repeat(var(--numcards), calc(70svh + calc(var(--overlap-amount) * -1)));
      gap: var(--overlap-amount);
      max-width: 1280px;
      margin: 0 auto;
    }

    .card {
      position: sticky;
      top: 5rem;
      padding-top: calc(var(--index) * var(--card-top-offset));
    }

    .card__content {
      min-height: 70svh;
      transform-origin: 50% 0%;
      will-change: transform;
      box-shadow: 0 0.2em 1em rgba(0, 0, 0, 0.1), 0 1em 2em rgba(0, 0, 0, 0.1);
      border-radius: 1em;
      overflow: hidden;
    }

    @supports (animation-timeline: view()) {
      .card {
        --index0: calc(var(--index) - 1);
        --reverse-index: calc(var(--numcards) - var(--index0));
        --reverse-index0: calc(var(--reverse-index) - 1);
      }

      @keyframes scale {
        to {
          transform: scale(calc(1.1 - calc(0.1 * var(--reverse-index))));
        }
      }

      #cards {
        view-timeline-name: --cards-element-scrolls-in-body;
        view-timeline-inset: 0%;
      }

      .card__content {
        --start-range: calc(var(--index0) / var(--numcards) * 80%);
        --end-range: calc((var(--index)) / var(--numcards) * 100%);
        animation: linear scale forwards;
        animation-timeline: --cards-element-scrolls-in-body;
        animation-range: exit-crossing var(--start-range) exit-crossing var(--end-range);
      }
    }
  `;

  return (
    <>
      <style>{styles}</style>

      {/* TABS */}
      <div className='max-w-7xl mx-auto flex flex-wrap justify-center gap-3 mb-16 pt-8 px-4'>
        {tabs.map((tab, idx) => (
          <button
            key={tab}
            onClick={() => setActiveIndex(idx)}
            className={`px-5 py-2 rounded-full border text-sm transition-all duration-200
              ${
                idx === activeIndex
                  ? 'border-purple-600 text-purple-700 font-medium bg-purple-50'
                  : 'border-gray-300 text-gray-600 hover:border-gray-400 hover:text-gray-800'
              }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className='cards-container'>
        <ul className='cards' id='cards'>
          {cards.map(card => (
            <li
              key={card.id}
              className='card'
              id={`card_${card.id}`}
              style={{ '--index': card.id }}
            >
              <div className='card__content' style={{ backgroundColor: card.color }}>
                {/* add the actual structure here */}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default dummy;
