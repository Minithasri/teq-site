'use client';

import { questions } from '@/data/aiReadinessQuestions';
import { AlertCircle, ArrowLeft, ArrowRight, Check, Download, Loader2, Lock } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Fragment, useEffect, useRef, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const features = [
  {
    icon: '/images/HomePage/ai solution/clock.svg',
    title: 'AI Readiness Score',
    description: 'Benchmark your organization against AI maturity indicators',
  },
  {
    icon: '/images/HomePage/ai solution/protected.svg',
    title: 'Personalized Roadmap',
    description: 'Prioritized next steps mapped to your specific gaps',
  },
  {
    icon: '/images/HomePage/ai solution/barGraph.svg',
    title: 'Expert Consultation',
    description: 'A complimentary 30 min session with a GWC AI specialist',
  },
];

const dimensionLabels = {
  Q1: 'Company Context',
  Q2: 'Current State',
  Q3: 'Urgency / Intent',
  Q4: 'Data Readiness',
  Q5: 'Current Tooling',
  Q6: 'AI/ML Adoption',
  Q7: 'Leadership & Strategy',
  Q8: 'Technical Talent',
  Q9: 'Data Governance',
  Q10: 'Budget Intent',
  1: 'Company Context',
  2: 'Data Foundation',
  3: 'Current Tooling',
  4: 'Process Automation',
  5: 'AI Adoption',
  6: 'Change Readiness',
  7: 'Team Bandwidth',
  8: 'Leadership & Strategy',
  9: 'Urgency',
  10: 'Investment Timeline',
};

const bands = {
  unaware: {
    pct: [25, 38],
    label: 'AI Unaware',
    badgeCls: 'badge-unaware',
    tagColor: '#2563EB',
    tagBg: '#DBEAFE',
    accentColor: '#2563EB',
    headline:
      "You're early in your AI journey, with a clear runway to build the right foundations.",
    desc: 'Your data, processes, and AI strategy are still developing, which is where most organizations begin. Once the right foundations are in place, AI and agentic AI can move quickly. GWC can help you build them.',
    solutions: ['pill-1', 'pill-2'],
    solutionLabels: ['Data Strategy & Engineering', 'BI Foundations (Domo / Power BI)'],
    actions: [
      {
        badge: 'call',
        label: 'Recommended Next Step',
        text: "<strong>Get on a call with our AI team:</strong> we'll walk through your data and process gaps together and map out the fastest path to your first AI win.",
      },
    ],
    strengths: [
      "You've taken the initiative to assess where you stand",
      "You've clearly identified your biggest operational challenges",
    ],
    gaps: [
      "Data isn't yet centralized or easily accessible",
      'Core processes could benefit from clearer documentation',
      "An AI strategy hasn't been formalized yet",
    ],
  },
  exploring: {
    pct: [39, 60],
    label: 'AI Exploring',
    badgeCls: 'badge-exploring',
    tagColor: '#059669',
    tagBg: '#D1FAE5',
    accentColor: '#059669',
    headline: "You're making progress, with several strong building blocks already in place.",
    desc: 'You have real intent and some of the right pieces already working. Strengthening data quality, automation coverage, and strategic funding is what helps AI initiatives take hold rather than stall. GWC can help you close those gaps and move into real AI and agentic AI work.',
    solutions: ['pill-1', 'pill-2', 'pill-3'],
    solutionLabels: [
      'BI & Analytics (Domo / Power BI)',
      'Process Automation (Power Automate, Boomi)',
      'AI Strategy Consulting',
    ],
    actions: [
      {
        badge: 'call',
        label: 'Recommended Next Step',
        text: "<strong>Get on a call with our AI team:</strong> We'll help you close your governance and scale gaps so your AI pilots make it to production",
      },
    ],
    strengths: [
      'Leadership interest in AI is clear',
      'You already have automation or data infrastructure in place',
    ],
    gaps: [
      'Data quality and access could be strengthened',
      'Automation coverage is still limited in some areas',
      'AI strategy funding is still being finalized',
    ],
  },
  experimenting: {
    pct: [61, 83],
    label: 'AI Experimenting',
    badgeCls: 'badge-experimenting',
    tagColor: '#D97706',
    tagBg: '#FEF3C7',
    accentColor: '#D97706',
    headline:
      "You've built strong foundations, with a few focused improvements ahead of full scale.",
    desc: "You have good data, automation already running, and leadership that's aligned, which puts you ahead of most organizations. Strengthening governance and scaling talent are the next steps that help AI move from pilots into production. GWC works with organizations at your stage to do exactly that.",
    solutions: ['pill-1', 'pill-2', 'pill-3'],
    solutionLabels: [
      'Advanced Analytics',
      'Azure OpenAI / AI-ML POCs',
      'Agentic AI Implementation',
    ],
    actions: [
      {
        badge: 'call',
        label: 'Recommended Next Step',
        text: "<strong>Get on a call with our AI team:</strong> We'll help you close your governance and scale gaps so your AI pilots make it to production.",
      },
    ],
    strengths: [
      'Your data foundations are strong',
      'Leadership is aligned and an AI strategy exists',
      'You already have AI pilots or automation underway',
    ],
    gaps: [
      'Governance and compliance frameworks are still maturing',
      "Automation hasn't yet scaled across the organization",
      'Some AI initiatives are still moving toward production',
    ],
  },
  transforming: {
    pct: [84, 100],
    label: 'AI Transforming',
    badgeCls: 'badge-transforming',
    tagColor: '#7030B1',
    tagBg: '#EDE9FE',
    accentColor: '#7030B1',
    headline: "You're genuinely AI-ready, with a strong opportunity to scale agentic AI.",
    desc: 'You have the infrastructure, strategy, and talent to move fast. The next step is building autonomous AI agents that handle complex work across procurement, operations, HR, or customer support. GWC works with organizations at your level to design and deploy exactly that.',
    solutions: ['pill-1', 'pill-2', 'pill-3'],
    solutionLabels: [
      'Enterprise Agentic AI',
      'AI Agent Deployment',
      'Autonomous Workflow Automation',
    ],
    actions: [
      {
        badge: 'call',
        label: 'Recommended Next Step',
        text: "<strong>Get on a call with our AI team:</strong> We'll help you design and prioritize your next wave of agentic AI agents.",
      },
    ],
    strengths: [
      'Strong data infrastructure and governance are already in place',
      'Your AI strategy is funded and has board-level support',
      'You already have the technical talent and AI experience',
    ],
    gaps: [
      'Agentic AI is not yet deployed at enterprise scale',
      'There is room to expand autonomous workflow coverage further',
    ],
  },
};

const maturityBands = [
  {
    min: 9,
    max: 14,
    ...bands.unaware,
    level: bands.unaware.label,
    description: bands.unaware.desc,
    solution: bands.unaware.solutionLabels.join(', '),
  },
  {
    min: 15,
    max: 22,
    ...bands.exploring,
    level: bands.exploring.label,
    description: bands.exploring.desc,
    solution: bands.exploring.solutionLabels.join(', '),
  },
  {
    min: 23,
    max: 29,
    ...bands.experimenting,
    level: bands.experimenting.label,
    description: bands.experimenting.desc,
    solution: bands.experimenting.solutionLabels.join(', '),
  },
  {
    min: 30,
    max: 36,
    ...bands.transforming,
    level: bands.transforming.label,
    description: bands.transforming.desc,
    solution: bands.transforming.solutionLabels.join(', '),
  },
];

function getMaturity(score) {
  return maturityBands.find(b => score >= b.min && score <= b.max) || maturityBands[0];
}

function downloadAssessmentResults({
  answers,
  totalScore,
  maturity,
  dimensionScores,
  strengths,
  gaps,
  formData,
}) {
  const maxScore = 36;
  const pct = Math.round((totalScore / maxScore) * 100);

  const dimRows = Object.entries(dimensionScores)
    .map(([, dim]) => {
      const barPct = Math.round((dim.points / dim.max) * 100);
      return `
      <tr>
        <td style="padding:6px 0;font-size:13px;color:#374151;width:200px">${dim.label}</td>
        <td style="padding:6px 0">
          <div style="background:#F3F4F6;border-radius:999px;height:8px;width:100%;overflow:hidden">
            <div style="background:linear-gradient(90deg,#7030B1,#B56DD3);height:8px;width:${barPct}%;border-radius:999px"></div>
          </div>
        </td>
        <td style="padding:6px 0 6px 12px;font-size:13px;color:#7030B1;font-weight:700;white-space:nowrap">${dim.points}/${dim.max}</td>
      </tr>`;
    })
    .join('');

  const qaRows = questions
    .map(q => {
      const ans = answers[q.id];
      if (ans === undefined) return '';
      const ansStr = Array.isArray(ans) ? ans.join(', ') : ans;
      const qLabel =
        typeof q.id === 'number' || (typeof q.id === 'string' && !q.id.startsWith('Q'))
          ? `Q${q.id}`
          : q.id;
      return `
      <div style="margin-bottom:14px;padding:14px;background:#FAFAFA;border-radius:10px;border-left:3px solid #7030B1">
        <div style="font-size:13px;font-weight:700;color:#111827;margin-bottom:4px">${qLabel}. ${q.text}</div>
        <div style="font-size:13px;color:#374151">${ansStr}</div>
      </div>`;
    })
    .join('');

  const strengthList = maturity.strengths || strengths.map(([, dim]) => dim.label);
  const strengthItems = strengthList
    .map(
      item =>
        `<li style="margin-bottom:6px;color:#059669;font-size:13px">✔ ${typeof item === 'string' ? item : item.label}</li>`
    )
    .join('');

  const gapList = maturity.gaps || gaps.map(([, dim]) => dim.label);
  const gapItems = gapList
    .map(
      item =>
        `<li style="margin-bottom:6px;color:#D97706;font-size:13px">⚠ ${typeof item === 'string' ? item : item.label}</li>`
    )
    .join('');

  const name = formData?.fullName
    ? `<p style="margin:2px 0;font-size:14px;color:#677085">Prepared for: <strong>${formData.fullName}</strong>${formData.companyName ? ` · ${formData.companyName}` : ''}</p>`
    : '';
  const dateStr = new Date().toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8"/>
  <title>GWC AI Readiness Assessment Report</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&display=swap');
    *{box-sizing:border-box;margin:0;padding:0}
    body{font-family:'Inter',sans-serif;background:#fff;color:#111827;-webkit-print-color-adjust:exact;print-color-adjust:exact}
    @media print{body{margin:0}.no-print{display:none!important}}
  </style>
</head>
<body>
  <!-- Print button (hidden on print) -->
  <div class="no-print" style="position:fixed;top:16px;right:16px;z-index:999">
    <button onclick="window.print()" style="background:linear-gradient(180deg,#7030B1,#B56DD3);color:#fff;border:none;border-radius:999px;padding:10px 22px;font-size:14px;font-weight:700;cursor:pointer;display:inline-flex;align-items:center;gap:8px;font-family:Inter,sans-serif">
      ⬇ Save as PDF
    </button>
  </div>

  <div style="max-width:800px;margin:0 auto;padding:40px 32px">

    <!-- Header -->
    <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:32px;padding-bottom:20px;border-bottom:2px solid #F3F4F6">
      <div>
        <div style="font-size:11px;font-weight:700;letter-spacing:2px;color:#7030B1;text-transform:uppercase;margin-bottom:6px">GWC Data.AI</div>
        <h1 style="font-size:26px;font-weight:800;color:#111827;line-height:1.2">AI Readiness Assessment<br/>Report</h1>
        ${name}
        <p style="margin-top:4px;font-size:12px;color:#9CA3AF">${dateStr}</p>
      </div>
      <!-- Score circle -->
      <div style="text-align:center;background:linear-gradient(135deg,#FAF6FE,#F3E8FF);border-radius:16px;padding:20px 24px;min-width:140px">
        <div style="font-size:11px;font-weight:700;letter-spacing:1px;color:#7030B1;text-transform:uppercase;margin-bottom:8px">Your Score</div>
        <div style="font-size:52px;font-weight:800;line-height:1;background:linear-gradient(180deg,#7030B1,#B56DD3);-webkit-background-clip:text;-webkit-text-fill-color:transparent">${totalScore}</div>
        <div style="font-size:14px;color:#677085;margin-top:2px">out of 36</div>
        <!-- Progress bar -->
        <div style="margin-top:10px;background:#E9D5FF;border-radius:999px;height:6px;overflow:hidden">
          <div style="background:linear-gradient(90deg,#7030B1,#B56DD3);height:6px;width:${pct}%;border-radius:999px"></div>
        </div>
      </div>
    </div>

    <!-- Maturity band -->
    <div style="background:${maturity.tagBg};border-radius:14px;padding:20px 24px;margin-bottom:28px">
      <span style="display:inline-block;background:${maturity.tagColor};color:#fff;font-size:11px;font-weight:700;border-radius:999px;padding:3px 12px;letter-spacing:1px;text-transform:uppercase;margin-bottom:10px">${maturity.level}</span>
      <p style="font-size:16px;font-weight:700;color:#111827;margin-bottom:6px">${maturity.headline}</p>
      <p style="font-size:13px;color:#374151;line-height:1.6">${maturity.description}</p>
      <p style="font-size:12px;color:${maturity.tagColor};font-weight:600;margin-top:8px">Recommended: ${maturity.solution}</p>
    </div>

    <!-- Dimensions -->
    <div style="background:#fff;border:1px solid #F3F4F6;border-radius:14px;padding:20px 24px;margin-bottom:28px">
      <h2 style="font-size:14px;font-weight:700;color:#111827;margin-bottom:16px;letter-spacing:0.5px;text-transform:uppercase">Dimension Breakdown</h2>
      <table style="width:100%;border-collapse:collapse">${dimRows}</table>
    </div>

    <!-- Strengths & Gaps side by side -->
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;margin-bottom:28px">
      <div style="background:#F0FDF4;border-radius:14px;padding:18px 20px">
        <h3 style="font-size:13px;font-weight:700;color:#059669;margin-bottom:12px;text-transform:uppercase;letter-spacing:0.5px">Top Strengths</h3>
        <ul style="list-style:none">${strengthItems}</ul>
      </div>
      <div style="background:#FFFBEB;border-radius:14px;padding:18px 20px">
        <h3 style="font-size:13px;font-weight:700;color:#D97706;margin-bottom:12px;text-transform:uppercase;letter-spacing:0.5px">Priority Gaps</h3>
        <ul style="list-style:none">${gapItems}</ul>
      </div>
    </div>

    ${
      maturity.actions
        ? `
    <!-- Roadmap Actions -->
    <div style="background:#FAF6FE;border:1px solid #E9D5FF;border-radius:14px;padding:20px 24px;margin-bottom:28px">
      <h2 style="font-size:14px;font-weight:700;color:#111827;margin-bottom:16px;letter-spacing:0.5px;text-transform:uppercase">Your 180-Day Action Plan</h2>
      ${maturity.actions
        .map(
          act => `
        <div style="margin-bottom:12px">
          <span style="display:inline-block;background:linear-gradient(90deg,#7030B1,#B56DD3);color:#fff;font-size:10px;font-weight:800;border-radius:999px;padding:2px 10px;text-transform:uppercase;margin-bottom:4px">${act.label}</span>
          <p style="font-size:13px;color:#374151;line-height:1.5">${act.text}</p>
        </div>
      `
        )
        .join('')}
    </div>`
        : ''
    }

    <!-- All Q&A -->
    <div style="margin-bottom:32px">
      <h2 style="font-size:14px;font-weight:700;color:#111827;margin-bottom:16px;letter-spacing:0.5px;text-transform:uppercase">All Responses</h2>
      ${qaRows}
    </div>

    <!-- Footer -->
    <div style="border-top:2px solid #F3F4F6;padding-top:20px;text-align:center">
      <p style="font-size:12px;color:#9CA3AF">Generated by GWC Data.AI · gwcdata.ai · indiahr@gwcdata.ai</p>
      <p style="font-size:12px;color:#9CA3AF;margin-top:4px">© ${new Date().getFullYear()} Global We Connect Technologies Pvt Ltd. All rights reserved.</p>
    </div>

  </div>

  <script>
    // Auto-open print dialog after fonts load
    window.addEventListener('load', function() {
      setTimeout(function() { window.print(); }, 600);
    });
  </script>
</body>
</html>`;

  const win = window.open('', '_blank');
  if (win) {
    win.document.write(html);
    win.document.close();
  }
}

// ─── PROGRESS HEADER ─────────────────────────────────────────────────────────

function ProgressHeader({ current, total, sectionLabel }) {
  const pct = (current / total) * 100;
  return (
    <div className='flex flex-col sm:flex-row items-center sm:items-center justify-between gap-3 sm:gap-0 w-full max-w-6xl mx-auto mb-6 px-1'>
      {/* Section Label */}
      <div
        className='px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-[11px] sm:text-[13px] font-semibold truncate max-w-[90%] sm:max-w-none'
        style={{ background: 'rgba(112,48,177,0.10)', color: '#7030B1' }}
      >
        {sectionLabel}
      </div>

      {/* Progress */}
      <div className='flex items-center gap-2 sm:gap-3'>
        <span className='text-[11px] sm:text-[13px] text-[#677085] font-medium whitespace-nowrap'>
          Question {current} of {total}
        </span>
        <div className='w-20 sm:w-28 h-[5px] sm:h-[6px] rounded-full bg-[#E5E7EB] overflow-hidden'>
          <div
            className='h-full rounded-full transition-all duration-500'
            style={{
              width: `${pct}%`,
              background: 'linear-gradient(90deg, #7030B1, #A64BCE)',
            }}
          />
        </div>
      </div>
    </div>
  );
}

// ─── QUESTION CARD ───────────────────────────────────────────────────────────

function QuestionCard({
  question,
  index,
  answer,
  subAnswer,
  onChange,
  onSubChange,
  onContinue,
  onBack,
  isLast,
}) {
  const qNum = index + 1;
  const isMulti = question.type === 'multi';
  const selected = answer !== undefined && answer !== null ? answer : isMulti ? [] : null;

  const handleSingle = label => onChange(label);

  const selectedOpt = question.options.find(
    o => o.label === selected || (typeof o === 'string' && o === selected)
  );
  const isTriggered =
    question.subQuestion &&
    (selected === question.subQuestion.triggerLabel ||
      (selectedOpt &&
        selectedOpt.points !== undefined &&
        selectedOpt.points === question.subQuestion.triggerPts) ||
      (selectedOpt &&
        selectedOpt.pts !== undefined &&
        selectedOpt.pts === question.subQuestion.triggerPts) ||
      selected === question.subQuestion.triggerPts);

  const hasAnswer = isMulti
    ? Array.isArray(selected) && selected.length > 0
    : selected !== null &&
      (!isTriggered || (subAnswer !== undefined && subAnswer !== null && subAnswer !== ''));

  return (
    <div className='w-full max-w-6xl min-h-[430px] mx-auto flex flex-col gap-6 md:gap-[40px] bg-white rounded-[16px] md:rounded-[24px] p-5 sm:p-8 md:p-[48px] shadow-[0px_16px_32px_0px_rgba(0,0,0,0.03)]'>
      <div className='flex flex-col gap-1.5'>
        <h2 className='text-[18px] sm:text-[20px] md:text-[26px] font-bold text-[#111827] leading-snug'>
          Q{qNum}. {question.text}
        </h2>
        {question.hint && (
          <p className='text-[13px] sm:text-[14px] text-[#677085] font-medium'>{question.hint}</p>
        )}
      </div>

      <div className='flex flex-col gap-2 md:gap-3 flex-1'>
        {question.options.map(rawOpt => {
          const opt = typeof rawOpt === 'string' ? { label: rawOpt } : rawOpt;
          const isOther =
            typeof opt.label === 'string' && opt.label.toLowerCase().startsWith('other');
          let isSelected = false;
          let otherVal = '';

          if (isMulti) {
            const cur = Array.isArray(selected) ? selected : [];
            const foundOther = cur.find(
              s => s === opt.label || (isOther && typeof s === 'string' && s.startsWith('Other:'))
            );
            if (isOther && foundOther) {
              isSelected = true;
              otherVal = foundOther.startsWith('Other: ')
                ? foundOther.substring(7)
                : foundOther.startsWith('Other:')
                  ? foundOther.substring(6)
                  : '';
            } else if (!isOther && cur.includes(opt.label)) {
              isSelected = true;
            }
          } else {
            if (
              isOther &&
              typeof selected === 'string' &&
              (selected === opt.label || selected.startsWith('Other:'))
            ) {
              isSelected = true;
              otherVal = selected.startsWith('Other: ')
                ? selected.substring(7)
                : selected.startsWith('Other:')
                  ? selected.substring(6)
                  : '';
            } else if (!isOther && selected === opt.label) {
              isSelected = true;
            }
          }

          const isOptionTrigger =
            question.subQuestion &&
            (opt.label === question.subQuestion.triggerLabel ||
              opt.pts === question.subQuestion.triggerPts ||
              opt.points === question.subQuestion.triggerPts);

          return (
            <Fragment key={opt.label}>
              <div
                onClick={() => {
                  if (isMulti) {
                    const cur = Array.isArray(selected) ? selected : [];
                    if (isOther) {
                      const foundOther = cur.find(s => s === opt.label || s.startsWith('Other:'));
                      if (foundOther) {
                        onChange(cur.filter(s => s !== foundOther));
                      } else if (cur.length < (question.maxSelect || 99)) {
                        onChange([...cur, 'Other: ']);
                      }
                    } else {
                      if (cur.includes(opt.label)) {
                        onChange(cur.filter(l => l !== opt.label));
                      } else if (cur.length < (question.maxSelect || 99)) {
                        onChange([...cur, opt.label]);
                      }
                    }
                  } else {
                    if (isOther) {
                      if (!isSelected) onChange('Other: ');
                    } else {
                      handleSingle(opt.label);
                    }
                  }
                }}
                className='relative flex flex-col gap-2 w-full text-left rounded-[10px] md:rounded-[14px] border px-3 sm:px-4 md:px-5 py-3 md:py-4 transition-all duration-200 cursor-pointer hover:-translate-y-[1px]'
                style={{
                  borderColor: isSelected ? '#7030B1' : '#E5E7EB',
                  background: isSelected ? 'rgba(112,48,177,0.06)' : '#FAFAFA',
                  boxShadow: isSelected
                    ? '0 0 0 1px rgba(112,48,177,0.28), 0 8px 20px rgba(112,48,177,0.14)'
                    : '0 0 0 0 rgba(112,48,177,0)',
                }}
                onMouseEnter={e => {
                  if (!isSelected) e.currentTarget.style.borderColor = 'rgba(112,48,177,0.4)';
                }}
                onMouseLeave={e => {
                  if (!isSelected) e.currentTarget.style.borderColor = '#E5E7EB';
                }}
              >
                <div className='flex items-start gap-3'>
                  <div
                    className={`flex-shrink-0 w-4 h-4 md:w-5 md:h-5 border-2 flex items-center justify-center transition-all duration-200 mt-0.5 ${isMulti ? 'rounded-[4px]' : 'rounded-full'}`}
                    style={{
                      borderColor: isSelected ? '#7030B1' : '#D1D5DB',
                      background: isSelected ? '#7030B1' : 'white',
                    }}
                  >
                    {isSelected &&
                      (isMulti ? (
                        <Check className='w-3 h-3 md:w-3.5 md:h-3.5 text-white stroke-[3]' />
                      ) : (
                        <div className='w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-white' />
                      ))}
                  </div>
                  <div className='flex flex-col gap-0.5'>
                    <span
                      className='text-[13px] sm:text-[14px] md:text-[15px] font-semibold leading-snug'
                      style={{ color: isSelected ? '#7030B1' : '#111827' }}
                    >
                      {opt.label}
                    </span>
                    {opt.sub && (
                      <span
                        className='text-[12px] sm:text-[13px] leading-snug'
                        style={{ color: isSelected ? '#8B5CF6' : '#9CA3AF' }}
                      >
                        {opt.sub}
                      </span>
                    )}
                  </div>
                </div>

                {isOther && isSelected && (
                  <div className='ml-7 md:ml-8 mt-1'>
                    <input
                      type='text'
                      placeholder='Please specify...'
                      value={otherVal}
                      onChange={e => {
                        const text = e.target.value;
                        if (isMulti) {
                          const cur = Array.isArray(selected) ? selected : [];
                          const filtered = cur.filter(
                            s => !(s === opt.label || s.startsWith('Other:'))
                          );
                          onChange([...filtered, `Other: ${text}`]);
                        } else {
                          onChange(`Other: ${text}`);
                        }
                      }}
                      onClick={e => e.stopPropagation()}
                      className='w-full rounded-[8px] border border-[#D1D5DB] px-3 py-2 text-[13px] sm:text-[14px] text-[#111827] outline-none focus:border-[#7030B1] transition-colors bg-white'
                    />
                  </div>
                )}
              </div>

              {isTriggered && question.subQuestion && isOptionTrigger && (
                <div className='w-full mt-2 mb-3 p-4 md:p-6 rounded-[10px] md:rounded-[14px] bg-[#F5F3FF] border border-[#DDD6FE] flex flex-col gap-3 transition-all duration-300 animate-fadeIn'>
                  <div className='flex flex-col gap-1'>
                    <span className='text-[12px] font-bold tracking-wider uppercase text-[#7030B1]'>
                      Follow-up Question
                    </span>
                    <h3 className='text-[14px] sm:text-[15px] md:text-[16px] font-bold text-[#111827]'>
                      {question.subQuestion.text}
                    </h3>
                    {question.subQuestion.hint && (
                      <p className='text-[12px] sm:text-[13px] text-[#6B7280]'>
                        {question.subQuestion.hint}
                      </p>
                    )}
                  </div>
                  <div className='flex flex-col gap-2 mt-1'>
                    {question.subQuestion.options.map(subOpt => {
                      const isSubSelected = subAnswer === subOpt;
                      return (
                        <div
                          key={subOpt}
                          onClick={e => {
                            e.stopPropagation();
                            onSubChange && onSubChange(subOpt);
                          }}
                          className='flex items-center gap-3 rounded-[8px] md:rounded-[10px] border px-3 sm:px-4 py-2.5 sm:py-3 transition-all cursor-pointer bg-white hover:-translate-y-[1px]'
                          style={{
                            borderColor: isSubSelected ? '#7030B1' : '#E5E7EB',
                            background: isSubSelected ? 'rgba(112,48,177,0.06)' : 'white',
                            boxShadow: isSubSelected ? '0 0 0 1px rgba(112,48,177,0.28)' : 'none',
                          }}
                        >
                          <div
                            className='w-4 h-4 rounded-full border-2 flex items-center justify-center transition-all flex-shrink-0'
                            style={{
                              borderColor: isSubSelected ? '#7030B1' : '#D1D5DB',
                              background: isSubSelected ? '#7030B1' : 'white',
                            }}
                          >
                            {isSubSelected && <div className='w-1.5 h-1.5 rounded-full bg-white' />}
                          </div>
                          <span
                            className='text-[13px] sm:text-[14px] font-medium'
                            style={{ color: isSubSelected ? '#7030B1' : '#111827' }}
                          >
                            {subOpt}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </Fragment>
          );
        })}
      </div>

      <div className={`flex items-center ${index > 0 ? 'justify-between' : 'justify-end'}`}>
        {index > 0 && (
          <button
            onClick={onBack}
            className='w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full px-6 md:px-8 py-3 text-[14px] md:text-[15px] font-semibold text-[#6E2B8B] bg-white border border-[#E5E7EB] hover:bg-gray-50 transition-all duration-200'
          >
            <ArrowLeft className='w-4 h-4' />
            Back
          </button>
        )}
        <button
          onClick={onContinue}
          disabled={!hasAnswer}
          className='w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full px-6 md:px-8 py-3 text-[14px] md:text-[15px] font-semibold text-white transition-all duration-200'
          style={{
            background: hasAnswer ? 'linear-gradient(180deg, #7030B1, #B56DD3)' : '#D1D5DB',
            cursor: hasAnswer ? 'pointer' : 'not-allowed',
            boxShadow: hasAnswer ? '0px 10px 30px rgba(125,61,215,0.25)' : 'none',
          }}
        >
          {isLast ? 'See My Score' : 'Continue'}
          <ArrowRight className='w-4 h-4' />
        </button>
      </div>
    </div>
  );
}

// ─── LEAD CAPTURE ────────────────────────────────────────────────────────────

function Field({ label, placeholder, type = 'text', readOnly = false, value, onChange, error }) {
  return (
    <div className='flex flex-col gap-1'>
      <label className='text-[13px] font-semibold'>{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        readOnly={readOnly}
        onChange={onChange}
        className='rounded-[10px] border border-[#E5E7EB] px-4 py-3 text-[14px] text-[#111827] outline-none focus:border-[#7030B1] transition-colors'
        style={{ background: readOnly ? '#F3F4F6' : '#FAFAFA' }}
      />
      {error && <span className='text-[12px] text-red-500'>{error}</span>}
    </div>
  );
}

function SelectField({ label, placeholder = 'Select an option', value, onChange, options, error }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handler = e => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const selected = value || '';

  return (
    <div className='flex flex-col gap-1' ref={ref}>
      <label className='text-[13px] font-semibold'>{label}</label>
      <div className='relative'>
        {/* Trigger button */}
        <button
          type='button'
          onClick={() => setOpen(o => !o)}
          className='w-full flex items-center justify-between rounded-[10px] border px-4 py-3 text-[14px] outline-none transition-all bg-[#FAFAFA]'
          style={{
            borderColor: open ? '#7030B1' : '#E5E7EB',
            boxShadow: open ? '0 0 0 3px rgba(112,48,177,0.12)' : 'none',
            color: selected ? '#111827' : '#9CA3AF',
          }}
        >
          <span>{selected || placeholder}</span>
          <svg
            className='w-4 h-4 flex-shrink-0 transition-transform duration-200'
            style={{
              transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
              color: open ? '#7030B1' : '#9CA3AF',
            }}
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            viewBox='0 0 24 24'
          >
            <path strokeLinecap='round' strokeLinejoin='round' d='M19 9l-7 7-7-7' />
          </svg>
        </button>

        {/* Dropdown list — 4 options visible, scrollable */}
        {open && (
          <div className='absolute z-50 left-0 right-0 mt-1 rounded-[10px] border border-[#7030B1] bg-white shadow-[0px_8px_24px_rgba(112,48,177,0.15)] overflow-hidden'>
            <div className='overflow-y-auto' style={{ maxHeight: '172px' }}>
              {options.map(opt => {
                const isActive = opt === selected;
                return (
                  <div
                    key={opt}
                    onMouseDown={() => {
                      onChange({ target: { value: opt } });
                      setOpen(false);
                    }}
                    className='px-4 py-[11px] text-[14px] cursor-pointer transition-colors'
                    style={{
                      background: isActive
                        ? 'linear-gradient(90deg, rgba(112,48,177,0.10), rgba(181,109,211,0.08))'
                        : 'white',
                      color: isActive ? '#7030B1' : '#374151',
                      fontWeight: isActive ? '600' : '400',
                      borderLeft: isActive ? '3px solid #7030B1' : '3px solid transparent',
                    }}
                    onMouseEnter={e => {
                      if (!isActive) {
                        e.currentTarget.style.background = '#F5F0FA';
                        e.currentTarget.style.color = '#7030B1';
                      }
                    }}
                    onMouseLeave={e => {
                      if (!isActive) {
                        e.currentTarget.style.background = 'white';
                        e.currentTarget.style.color = '#374151';
                      }
                    }}
                  >
                    {opt}
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
      {error && <span className='text-[12px] text-red-500'>{error}</span>}
    </div>
  );
}

function LeadCaptureScreen({ answers, onSubmit }) {
  const [form, setForm] = useState({
    fullName: '',
    businessEmail: '',
    companyName: '',
    role: '',
    customRole: '',
    industry: '',
    customIndustry: '',
    companySize: '',
  });
  const [errors, setErrors] = useState({});
  const [isSending, setIsSending] = useState(false);

  const validate = () => {
    const e = {};
    if (!form.fullName.trim()) e.fullName = 'Required';
    if (!form.businessEmail.trim() || !form.businessEmail.includes('@'))
      e.businessEmail = 'Required';
    if (!form.companyName.trim()) e.companyName = 'Required';
    if (!form.role.trim()) e.role = 'Required';
    if (form.role === 'Other' && !form.customRole?.trim()) e.customRole = 'Required';
    if (form.industry === 'Other' && !form.customIndustry?.trim()) e.customIndustry = 'Required';
    return e;
  };

  const handleSubmit = async () => {
    const e = validate();
    if (Object.keys(e).length) {
      setErrors(e);
      return;
    }

    setIsSending(true);
    const formattedAnswers = Object.entries(answers)
      .map(([qId, ans]) => `${qId}: ${Array.isArray(ans) ? ans.join(', ') : ans}`)
      .join('\n');

    // Calculate score
    let totalScore = 0;
    questions.forEach(q => {
      if (q.scored && answers[q.id]) {
        const chosen = q.options.find(o => {
          const label = typeof o === 'string' ? o : o.label;
          return label === answers[q.id];
        });
        if (chosen && typeof chosen !== 'string') {
          totalScore += chosen.points !== undefined ? chosen.points : chosen.pts || 0;
        }
      }
    });

    const finalRole = form.role === 'Other' ? form.customRole?.trim() || 'Other' : form.role;
    const finalIndustry =
      form.industry === 'Other' ? form.customIndustry?.trim() || 'Other' : form.industry;

    const sheetData = {
      fullName: form.fullName,
      businessEmail: form.businessEmail,
      companyName: form.companyName,
      role: finalRole,
      jobTitle: finalRole,
      industry: finalIndustry,
      companySize: form.companySize,
      score: totalScore,
      answers: formattedAnswers,
    };

    try {
      // Send to Google Sheets (Apps Script Web App)
      const SCRIPT_URL =
        'https://script.google.com/macros/s/AKfycbyBazKmEkOXNMsPrNogTz9UTV8mgbaoUDgVmsIIgKz8mP1yH-ULvaHDcRrv9--AqRET/exec';

      if (SCRIPT_URL !== 'YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL_HERE') {
        await fetch(SCRIPT_URL, {
          method: 'POST',
          mode: 'no-cors',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(sheetData),
        });
      }

      toast.success('Your details have been submitted successfully!', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: 'light',
      });
      setIsSending(false);
      const submittedForm = {
        ...form,
        role: finalRole,
        jobTitle: finalRole,
        industry: finalIndustry,
      };
      onSubmit(submittedForm);
    } catch (err) {
      console.error('Submission Error:', err);
      toast.error(
        'There was a network issue. Please check your internet connection and try again.'
      );
      setIsSending(false);
    }
  };

  return (
    <div className='w-full max-w-6xl mx-auto flex flex-col gap-4'>
      {/* Gate banner */}
      <div
        className='rounded-[16px] flex flex-col items-center py-5 px-6 gap-2'
        style={{ background: '#BA77FD1A' }}
      >
        <div className='w-12 h-12 rounded-full bg-gradient-to-b from-[#7030B1] to-[#B56DD3] flex items-center justify-center'>
          <Lock className='w-5 h-5 text-white' />
        </div>
        <p className='text-[14px] text-[#64748B] font-medium text-center'>
          Complete the form below to reveal your score
        </p>
      </div>

      {/* Form card */}
      <div className='bg-white rounded-[24px] p-8 md:p-10 shadow-[0px_20px_60px_rgba(0,0,0,0.08)]'>
        <h2 className='text-[28px] font-bold text-[#111827] text-center mb-2'>
          You&apos;re almost there
        </h2>
        <p className='text-[17px] text-[#677085] text-center mb-8'>
          Enter your details below to reveal your personalised score and action plan — delivered
          instantly, no spam.
        </p>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          <Field
            label='Full Name'
            placeholder='e.g. Jane Doe'
            value={form.fullName}
            onChange={e => setForm({ ...form, fullName: e.target.value })}
            error={errors.fullName}
          />
          <Field
            label='Business Email'
            placeholder='jane@company.com'
            type='email'
            value={form.businessEmail}
            onChange={e => setForm({ ...form, businessEmail: e.target.value })}
            error={errors.businessEmail}
          />

          <SelectField
            label='Your Role'
            placeholder='Select your role'
            value={form.role}
            onChange={e => setForm({ ...form, role: e.target.value })}
            options={[
              'C-Suite / Executive Leadership',
              'VP / Director',
              'Manager / Team Lead',
              'Analyst / Individual Contributor',
              'Other',
            ]}
            error={errors.role}
          />
          {form.role === 'Other' && (
            <Field
              label='Specify Your Role'
              placeholder='Please specify...'
              value={form.customRole || ''}
              onChange={e => setForm({ ...form, customRole: e.target.value })}
              error={errors.customRole}
            />
          )}
          <SelectField
            label='Industry'
            value={form.industry}
            onChange={e => setForm({ ...form, industry: e.target.value })}
            options={[
              'Manufacturing',
              'Retail & Consumer Goods',
              'Financial Services & Insurance',
              'Healthcare & Life Sciences',
              'Logistics & Supply Chain',
              'Energy & Utilities',
              'Professional Services',
              'Technology & Software',
              'Education',
              'Real Estate & Construction',
              'Media & Entertainment',
              'Government & Public Sector',
              'Other',
            ]}
            error={errors.industry}
          />
          {form.industry === 'Other' && (
            <Field
              label='Specify Your Industry'
              placeholder='Please specify...'
              value={form.customIndustry || ''}
              onChange={e => setForm({ ...form, customIndustry: e.target.value })}
              error={errors.customIndustry}
            />
          )}
          <Field
            label='Company Name'
            placeholder='Acme Inc'
            value={form.companyName}
            onChange={e => setForm({ ...form, companyName: e.target.value })}
            error={errors.companyName}
          />
          <SelectField
            label='Company Size'
            value={form.companySize}
            onChange={e => setForm({ ...form, companySize: e.target.value })}
            options={[
              '1 – 50 Employees',
              '51 – 100 Employees',
              '101 – 300 Employees',
              '301 – 500 Employees',
              '501 – 1,000 Employees',
              '1,001 – 5,000 Employees',
              '5,000+ Employees',
            ]}
            error={errors.companySize}
          />
        </div>

        <button
          onClick={handleSubmit}
          disabled={isSending}
          className='mt-8 w-full bg-gradient-to-b from-[#7030B1] to-[#B56DD3] inline-flex items-center justify-center gap-2 rounded-full py-4 text-[16px] font-semibold text-white transition-all disabled:opacity-70 disabled:cursor-not-allowed'
        >
          {isSending ? (
            <>
              Sending... <Loader2 className='w-4 h-4 animate-spin' />
            </>
          ) : (
            <>
              Continue <ArrowRight className='w-4 h-4' />
            </>
          )}
        </button>
        <p className='text-center text-[12px] text-[#9CA3AF] mt-3'>
          We respect your data. View our{' '}
          <span className='underline cursor-pointer text-[#7030B1]'>Privacy Policy</span>
        </p>
      </div>
    </div>
  );
}

// ─── SCORE GAUGE ─────────────────────────────────────────────────────────────

function ScoreGauge({ score, maxScore }) {
  const finalPct = Math.round((score / maxScore) * 100);
  const [animatedPct, setAnimatedPct] = useState(0);
  const [animatedDash, setAnimatedDash] = useState(0);

  const r = 90;
  const circ = 2 * Math.PI * r;

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedDash((finalPct / 100) * circ);
    }, 150);

    const duration = 1400; // 1.4 seconds
    const startTime = performance.now();

    const animateNumber = currentTime => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      const currentVal = Math.round(finalPct * easeProgress);
      setAnimatedPct(currentVal);

      if (progress < 1) {
        requestAnimationFrame(animateNumber);
      }
    };

    requestAnimationFrame(animateNumber);

    return () => clearTimeout(timer);
  }, [finalPct, circ]);

  return (
    <div className='relative w-[180px] h-[180px] sm:w-[220px] sm:h-[220px] md:w-[250px] md:h-[250px] flex-shrink-0 flex items-center justify-center'>
      <svg className='w-full h-full' viewBox='0 0 220 220'>
        <defs>
          <linearGradient id='scoreGradient' x1='0%' y1='0%' x2='100%' y2='100%'>
            <stop offset='0%' stopColor='#2E94DB' />
            <stop offset='100%' stopColor='#7030B1' />
          </linearGradient>
        </defs>

        {/* Background Circle */}
        <circle cx='110' cy='110' r={r} fill='none' stroke='#E5E7EB' strokeWidth='18' />

        {/* Progress Circle */}
        <circle
          cx='110'
          cy='110'
          r={r}
          fill='none'
          stroke='url(#scoreGradient)'
          strokeWidth='18'
          strokeDasharray={`${animatedDash} ${circ}`}
          strokeLinecap='round'
          transform='rotate(-90 110 110)'
          style={{ transition: 'stroke-dasharray 1.4s cubic-bezier(0.4, 0, 0.2, 1)' }}
        />
      </svg>
      <div className='absolute inset-0 flex flex-col items-center justify-center pt-1'>
        <span className='text-[36px] sm:text-[44px] md:text-[50px] font-bold text-[#111827] leading-none'>
          {animatedPct}%
        </span>
        <span className='text-[12px] sm:text-[13px] font-semibold text-[#7030B1] uppercase tracking-wider mt-1.5'>
          Overall Score
        </span>
      </div>
    </div>
  );
}

// ─── RESULTS ─────────────────────────────────────────────────────────────────

function ResultsScreen({ answers, onRetake, formData }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 150);
    return () => clearTimeout(timer);
  }, []);

  let totalScore = 0;
  const dimensionScores = {};

  questions.forEach(q => {
    if (q.scored && answers[q.id]) {
      const chosen = q.options.find(o => {
        const label = typeof o === 'string' ? o : o.label;
        return label === answers[q.id];
      });
      if (chosen && typeof chosen !== 'string') {
        const pts = chosen.points !== undefined ? chosen.points : chosen.pts || 0;
        totalScore += pts;
        const dimLabel =
          q.dimension ||
          dimensionLabels[q.id] ||
          dimensionLabels['Q' + q.id] ||
          `Dimension ${q.id}`;
        dimensionScores[q.id] = { points: pts, max: 4, label: dimLabel };
      }
    }
  });

  const maturity = getMaturity(totalScore);
  const maxScore = 36;

  const sorted = Object.entries(dimensionScores).sort((a, b) => b[1].points - a[1].points);
  const strengths = sorted.slice(0, 2);
  const gaps = [...sorted].reverse().slice(0, 2);

  return (
    <div className='w-full max-w-6xl mx-auto flex flex-col gap-6'>
      {/* Header CTA */}
      <div className='text-center px-4'>
        <h1 className='text-[32px] sm:text-[40px] md:text-[48px] lg:text-[56px] font-bold text-[#111827] leading-tight'>
          Take the Next Step
        </h1>
        <h2 className='text-[32px] sm:text-[40px] md:text-[48px] lg:text-[56px] font-bold leading-tight bg-gradient-to-r from-[#2E94DB] to-[#7030B1] bg-clip-text text-transparent'>
          With a GWC AI Expert
        </h2>
        <p className='text-[14px] sm:text-[15px] md:text-[16px] text-[#677085] mt-3 mx-auto leading-relaxed max-w-[90%] sm:max-w-[80%] md:max-w-[600px]'>
          Book a complimentary 30-minute AI readiness consultation. We&apos;ll walk through your
          results, identify your highest-impact opportunities, and outline a clear path forward.
        </p>

        <div className='flex flex-col sm:flex-row flex-wrap items-center justify-center gap-3 mt-7'>
          <Link
            href='/contact'
            className='w-full sm:w-auto inline-flex items-center justify-center bg-gradient-to-b from-[#7030B1] to-[#B56DD3] gap-2 rounded-full px-6 py-3 text-[14px] font-semibold text-white hover:opacity-90 transition-opacity'
          >
            Book My Free Consultation →
          </Link>
          <button
            onClick={() =>
              downloadAssessmentResults({
                answers,
                totalScore,
                maturity,
                dimensionScores,
                strengths,
                gaps,
                formData,
              })
            }
            className='w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full border border-[#7030B1] px-6 py-3 text-[14px] font-semibold text-[#6E2B8B] bg-white hover:bg-gray-50'
          >
            <Download className='h-4 w-4' />
            Download Results
          </button>
          <button
            onClick={onRetake}
            className='w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full border border-[#7030B1] px-6 py-3 text-[14px] font-semibold text-[#6E2B8B] bg-white hover:bg-gray-50'
          >
            Retake Assessment
          </button>
        </div>
      </div>

      {/* Score card */}
      <div className='bg-white rounded-[24px] shadow-[0px_20px_60px_rgba(0,0,0,0.08)] overflow-hidden p-8'>
        {/* Overview row */}
        <div className='rounded-[24px] bg-[#FAF6FE] p-6 sm:p-8 md:p-10 flex flex-col md:flex-row items-center gap-6 sm:gap-8 md:gap-12'>
          <ScoreGauge score={totalScore} maxScore={maxScore} />
          <div className='flex-1 text-center md:text-left'>
            <div
              className='inline-block px-3 py-2 rounded-xl text-[11px] font-bold uppercase tracking-widest mb-3'
              style={{ background: maturity.tagBg, color: maturity.tagColor }}
            >
              {maturity.level}
            </div>
            <h3 className='text-[24px] md:text-[32px] font-bold text-[#111827] leading-snug mb-2'>
              {maturity.headline}
            </h3>
            <p className='text-[16px] text-[#677085] leading-relaxed mb-2'>
              {maturity.description}
            </p>
          </div>
        </div>

        {/* Dimension scores */}
        <div className='px-6 md:px-8 py-6'>
          <h4 className='text-[15px] font-bold text-[#111827] mb-4'>Dimension Scores</h4>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4'>
            {Object.entries(dimensionScores).map(([qid, dim]) => {
              const pct = (dim.points / dim.max) * 100;
              const barColor = pct >= 75 ? '#059669' : pct >= 50 ? '#D97706' : '#DC2626';
              return (
                <div key={qid}>
                  <div className='flex justify-between mb-1'>
                    <span className='text-[13px] font-medium text-[#374151]'>{dim.label}</span>
                  </div>
                  <div className='h-[6px] rounded-full bg-[#E5E7EB] overflow-hidden'>
                    <div
                      className='h-full rounded-full'
                      style={{
                        width: mounted ? `${pct}%` : '0%',
                        background: barColor,
                        transition: 'width 1.2s cubic-bezier(0.4, 0, 0.2, 1)',
                      }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Strengths & Gaps */}
        <div className='grid grid-cols-1 gap-6 px-6 py-6 md:grid-cols-2 md:px-8'>
          {/* Strengths Card */}
          <div className='rounded-2xl bg-white p-5 shadow-[0px_20px_40px_rgba(0,0,0,0.08)]'>
            <h4 className='text-[14px] font-bold text-[#111827]'>Your Top Strengths</h4>

            {/* Divider */}
            <div className='mx-auto mt-3 mb-5 h-[1px] bg-[#E5E7EB]' />

            <div className='flex flex-col gap-3'>
              {(maturity.strengths || strengths.map(([, dim]) => dim.label)).map((item, idx) => (
                <div key={idx} className='flex items-start gap-2'>
                  <Check className='mt-0.5 h-4 w-4 flex-shrink-0 text-[#059669]' />
                  <span className='text-[13px] leading-6 text-[#374151]'>
                    {typeof item === 'string' ? item : item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Gaps Card */}
          <div className='rounded-2xl bg-white p-5 shadow-[0px_20px_40px_rgba(0,0,0,0.08)]'>
            <h4 className='text-[14px] font-bold text-[#111827]'>Priority Gaps</h4>

            {/* Divider */}
            <div className='mx-auto mt-3 mb-5 h-[1px] bg-[#E5E7EB]' />

            <div className='flex flex-col gap-3'>
              {(maturity.gaps || gaps.map(([, dim]) => dim.label)).map((item, idx) => (
                <div key={idx} className='flex items-start gap-2'>
                  <AlertCircle className='mt-0.5 h-4 w-4 flex-shrink-0 text-[#D97706]' />
                  <span className='text-[13px] leading-6 text-[#374151]'>
                    {typeof item === 'string' ? item : item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Recommended Next Step / Actions Dark Banner */}
      {maturity.actions && maturity.actions.length > 0 && (
        <div className='w-full border-[10px] border-[#fff] rounded-[40px]'>
          {maturity.actions.map((act, idx) => {
            const parts = act.text.split('</strong>');
            let title = 'Get on a call with our AI team';
            let desc = act.text;
            if (parts.length > 1) {
              title = parts[0]
                .replace(/<[^>]*>/g, '')
                .replace(/:$/, '')
                .trim();
              desc = parts[1].replace(/^[:\s—]+/, '').trim();
            } else {
              const colonParts = act.text.split(':');
              if (colonParts.length > 1) {
                title = colonParts[0].replace(/<[^>]*>/g, '').trim();
                desc = colonParts
                  .slice(1)
                  .join(':')
                  .replace(/^[:\s—]+/, '')
                  .replace(/<[^>]*>/g, '')
                  .trim();
              }
            }
            return (
              <div
                key={idx}
                className='relative w-full rounded-[28px] sm:rounded-[32px] overflow-hidden p-8 sm:p-12 md:p-14 flex flex-col items-center text-center'
                style={{
                  background: 'linear-gradient(180deg, #342640 0%, #F2A5FC 100%)',
                  boxShadow: '0px 0px 0px 1px rgba(0, 0, 0, 0.05)',
                }}
              >
                {/* Decorative wireframe SVG background from Figma */}
                <img
                  src='/images/HomePage/ai solution/cta.svg'
                  alt='Decorative background'
                  className='absolute pointer-events-none'
                  style={{
                    width: '890.07px',
                    height: '986.14px',
                    top: '175px',
                    left: '50%',
                    transform: 'translateX(-50%) rotate(0.99deg)',
                    opacity: 1,
                  }}
                />

                {/* Pill badge */}
                <span className='relative z-10 inline-block px-4 py-1.5 rounded-full text-[12px] sm:text-[13px] font-medium text-white/90 bg-white/15 backdrop-blur-md border border-white/20 mb-6 shadow-sm'>
                  {act.label || 'Recommended Next Step'}
                </span>

                {/* Title */}
                <h3 className='relative z-10 text-[24px] sm:text-[30px] md:text-[36px] font-bold text-white mb-3 sm:mb-4 tracking-tight'>
                  {title}
                </h3>

                {/* Subtitle / desc */}
                <p className='relative z-10 text-[14px] sm:text-[16px] md:text-[17px] text-white/85 max-w-2xl mx-auto leading-relaxed mb-8'>
                  {desc}
                </p>

                {/* Button */}
                <Link
                  href='/contact'
                  className='relative z-10 inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-white text-[#7030B1] font-bold text-[15px] sm:text-[16px] shadow-xl hover:bg-gray-100 hover:scale-[1.02] transition-all duration-200'
                >
                  Talk to our expert
                </Link>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default function AIReadinessAssessmentPage() {
  const [showAssessment, setShowAssessment] = useState(false);

  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [leadData, setLeadData] = useState(null);

  useEffect(() => {
    if (showAssessment) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [step, showAssessment]);

  const isQuestionStep = step < questions.length;
  const isLeadStep = step === questions.length;
  const isDone = step > questions.length;
  const currentQ = isQuestionStep ? questions[step] : null;

  const handleAnswer = (value, qId = currentQ?.id) => {
    if (!qId) return;
    setAnswers(prev => ({ ...prev, [qId]: value }));
  };
  const handleContinue = () => setStep(s => s + 1);
  const handleBack = () => setStep(s => (s > 0 ? s - 1 : s));
  const handleLeadSubmit = data => {
    setLeadData(data);
    setStep(questions.length + 1);
  };
  const handleRetake = () => {
    setStep(0);
    setAnswers({});
    setLeadData(null);
  };

  if (showAssessment) {
    return (
      <>
        <ToastContainer />
        <section className='relative overflow-hidden bg-[#FBFBFE]'>
          <div
            className='relative mx-auto max-w-9xl min-h-[942px] px-6 pt-28 pb-8'
            style={{
              background:
                'linear-gradient(259.49deg, rgba(229, 170, 102, 0.3) -44.78%, rgba(255, 165, 129, 0.3) -44.78%, rgba(108, 163, 221, 0.3) -2.47%, rgba(255, 255, 255, 0.65) 44.67%, rgba(246, 185, 228, 0.3) 87.24%, rgba(112, 48, 177, 0.3) 132.49%), linear-gradient(181.44deg, rgba(255, 255, 255, 0) -8.93%, rgba(255, 255, 255, 0.61) 52.63%, rgba(255, 255, 255, 0) 100.51%)',
            }}
          >
            <div
              className='absolute inset-0 pointer-events-none'
              style={{
                backgroundImage: "url('/images/HomePage/ai solution/grid.png')",
                backgroundSize: '180px 180px',
                backgroundRepeat: 'repeat',
                backgroundPosition: 'center',
                opacity: 0.26,
                maskImage:
                  'radial-gradient(ellipse 100% 100% at 52% 46%, transparent 30%, rgba(0,0,0,0.3) 55%, rgba(0,0,0,0.7) 75%, black 100%)',
                WebkitMaskImage:
                  'radial-gradient(ellipse 100% 100% at 52% 46%, transparent 30%, rgba(0,0,0,0.3) 55%, rgba(0,0,0,0.7) 75%, black 100%)',
              }}
            />
            <div className='relative z-10 flex flex-col items-center px-4 py-4'>
              {isQuestionStep && currentQ && (
                <>
                  <ProgressHeader
                    current={step + 1}
                    total={questions.length}
                    sectionLabel={currentQ.sectionLabel}
                  />
                  <QuestionCard
                    question={currentQ}
                    index={step}
                    answer={answers[currentQ.id] ?? null}
                    subAnswer={
                      currentQ.subQuestion ? (answers[currentQ.subQuestion.id] ?? null) : null
                    }
                    onChange={val => handleAnswer(val, currentQ.id)}
                    onSubChange={val =>
                      currentQ.subQuestion && handleAnswer(val, currentQ.subQuestion.id)
                    }
                    onContinue={handleContinue}
                    onBack={handleBack}
                    isLast={step === questions.length - 1}
                  />
                </>
              )}
              {isLeadStep && <LeadCaptureScreen answers={answers} onSubmit={handleLeadSubmit} />}
              {isDone && (
                <ResultsScreen answers={answers} onRetake={handleRetake} formData={leadData} />
              )}
            </div>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <ToastContainer />
      <section className='relative overflow-hidden bg-[#FBFBFE]'>
        <div
          className='relative mx-auto max-w-9xl min-h-[942px] px-6 pt-28 pb-8'
          style={{
            background:
              'linear-gradient(259.49deg, rgba(229, 170, 102, 0.3) -44.78%, rgba(255, 165, 129, 0.3) -44.78%, rgba(108, 163, 221, 0.3) -2.47%, rgba(255, 255, 255, 0.65) 44.67%, rgba(246, 185, 228, 0.3) 87.24%, rgba(112, 48, 177, 0.3) 132.49%), linear-gradient(181.44deg, rgba(255, 255, 255, 0) -8.93%, rgba(255, 255, 255, 0.61) 52.63%, rgba(255, 255, 255, 0) 100.51%)',
          }}
        >
          {/* Grid Background */}
          <div
            className='absolute inset-0 pointer-events-none'
            style={{
              backgroundImage: "url('/images/HomePage/ai solution/grid.png')",
              backgroundSize: '180px 180px',
              backgroundRepeat: 'repeat',
              backgroundPosition: 'center',
              opacity: 0.26,
              maskImage:
                'radial-gradient(ellipse 100% 100% at 52% 46%, transparent 30%, rgba(0,0,0,0.3) 55%, rgba(0,0,0,0.7) 75%, black 100%)',
              WebkitMaskImage:
                'radial-gradient(ellipse 100% 100% at 52% 46%, transparent 30%, rgba(0,0,0,0.3) 55%, rgba(0,0,0,0.7) 75%, black 100%)',
            }}
          />

          {/* HERO */}
          <div className='mx-auto flex max-w-6xl flex-col items-center text-center'>
            {/* TOP BADGE */}

            {/* TITLE */}
            <h1 className='mt-10 text-[42px] font-bold leading-[1.05] tracking-[-2px] text-[#111827] md:text-[78px]'>
              Discover Your
              <br />
              <span className='bg-gradient-to-r from-[#2697F2] via-[#5068E7] to-[#7A2FD6] bg-clip-text text-transparent'>
                AI Readiness Score
              </span>
            </h1>

            {/* DESCRIPTION */}
            <p className='mt-8 max-w-3xl text-[18px] leading-[1.9] text-[#677085] md:text-[23px]'>
              Answer 10 questions in under 5 minutes. Get a personalized AI readiness score and an
              action plan benchmarked to your industry.
            </p>

            {/* STATS */}
            <div className='mt-12 flex flex-col items-center gap-8 md:flex-row'>
              <div className='text-center'>
                <h3 className='text-[42px] font-bold text-[#7030B1]'>10</h3>
                <p className='mt-1 text-[16px] font-medium text-[#111827]'>Questions</p>
              </div>
              <div className='hidden h-[2px] w-14 bg-gradient-to-r from-[#6F2B8B] to-[#ED7200] md:block' />
              <div className='text-center'>
                <h3 className='text-[42px] font-bold text-[#7030B1]'>5 mins</h3>
                <p className='mt-1 text-[16px] font-medium text-[#111827]'>To complete</p>
              </div>
              <div className='hidden h-[2px] w-14 bg-gradient-to-r from-[#6F2B8B] to-[#ED7200] md:block' />
              <div className='text-center'>
                <h3 className='text-[42px] font-bold text-[#7030B1]'>Free</h3>
                <p className='mt-1 text-[16px] font-medium text-[#111827]'>Assessment</p>
              </div>
            </div>

            {/* BUTTON */}
            <button
              onClick={() => setShowAssessment(true)}
              className='mt-12 inline-flex items-center gap-2 rounded-full bg-gradient-to-b from-[#7D3DD7] to-[#A64BCE] px-5 py-3 md:px-10 md:py-5 text-[18px] font-semibold text-white shadow-[0px_18px_40px_rgba(125,61,215,0.30)] transition hover:scale-105'
            >
              Start Free Assessment
              <ArrowRight className='h-5 w-5' />
            </button>

            {/* FEATURE CARDS */}
            <div className='mt-20 grid grid-cols-1 gap-3 md:grid-cols-3'>
              {features.map((item, index) => (
                <div
                  key={index}
                  className='mx-auto flex w-full max-w-[260px] flex-col gap-[12px] rounded-[16px] border border-[#F0F0F0] bg-white p-[24px] text-left shadow-[0px_18px_40px_rgba(0,0,0,0.05)]'
                >
                  <div className='flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#EFF6FF]'>
                    <Image
                      src={item.icon}
                      alt={item.title}
                      width={24}
                      height={24}
                      className='h-6 w-6 object-contain'
                    />
                  </div>
                  <h3 className='text-[16px] font-semibold text-[#111827] leading-tight'>
                    {item.title}
                  </h3>
                  <p className='text-[14px] text-[#6B7280] leading-snug'>{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
