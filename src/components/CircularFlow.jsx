import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const sections = [
  {
    title: 'List of the tools used in the workflow',
    content: [
      'LinkedIn Sales Navigator - For lead generation...',
      'Apollo.io - For extracting leads...',
      'Bouncer.ai - For email verification...',
      'Instantly.ai - For uploading leads...',
      'Smartleads.ai - For uploading leads...',
      'Linked Helper - For LinkedIn outreach...',
      'HubSpot CRM - For tracking responses...',
      'Google, Microsoft, Maildoso - Email campaigns...',
      'Spam-Checker Tools - For refining scripts...',
      'GoTo - US phone calls.'
    ]
  },
  {
    title: 'Lead Generation via Sales Navigator (SN)',
    content: [
      'Manually apply filters in SN...',
      'Create an Account List in SN...',
      'Use this Account List to refine Contact search...'
    ]
  },
  {
    title: 'Lead Data Export',
    content: [
      'Use Apollo.io Chrome extension...',
      'Import leads into Apollo and create a list.'
    ]
  },
  {
    title: 'Email Discovery & Enrichment',
    content: [
      'Apollo enriches leads with email addresses...',
      'Export the enriched list.'
    ]
  },
  {
    title: 'Manual Qualification',
    content: [
      'Visit each company website...',
      'Check if lead titles and locations meet requirements...',
      'Update statuses in a spreadsheet.'
    ]
  },
  {
    title: 'Email Verification',
    content: [
      'Upload exported leads to Bouncer.ai...',
      'Manually verify emails and update spreadsheet.'
    ]
  },
  {
    title: 'Email Campaign Prep',
    content: [
      'Create a final list of valid emails...',
      'Draft scripts for outreach...',
      'Use spam-checker tools to refine scripts.'
    ]
  },
  {
    title: 'Campaign Launch',
    content: [
      'Upload leads and scripts to Instantly.ai and Smartleads.ai...',
      'Initiate cold email sequences.'
    ]
  },
  {
    title: 'LinkedIn Outreach',
    content: [
      'Use Linked Helper to auto-view profiles...',
      'Like posts, send connection requests, trigger follow-ups.'
    ]
  },
  {
    title: 'CRM Update',
    content: [
      'Manually track positive responses...',
      'Add interested leads to HubSpot CRM.'
    ]
  }
];

export default function CircularFlow() {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 text-center">
      <h1 className="text-3xl font-bold mb-8">Current Workflow (Manual-Driven)</h1>
      <div className="relative flex flex-wrap justify-center gap-6 max-w-4xl">
        {sections.map((section, index) => (
          <div key={index} className="w-64">
            <button
              onClick={() => setActiveIndex(index === activeIndex ? null : index)}
              className="bg-blue-600 text-white px-4 py-2 rounded-full shadow hover:bg-blue-700 transition"
            >
              {section.title}
            </button>
            <AnimatePresence>
              {activeIndex === index && (
                <motion.ul
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mt-2 text-left bg-white p-4 rounded shadow"
                >
                  {section.content.map((item, i) => (
                    <li key={i} className="mb-2 text-sm">• {item}</li>
                  ))}
                </motion.ul>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
}

