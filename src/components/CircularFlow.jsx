import React, { useState } from 'react';
import './CircularFlow.css';

const sections = [
  {
    title: 'List of the tools used in the workflow',
    content: [
      'LinkedIn Sales Navigator - For lead generation, filtering by industry, company headcount, geography, and refining contact searches by title.',
      'Apollo.io - For extracting leads from Sales Navigator, importing leads, creating lists, and enriching leads with email addresses.',
      'Bouncer.ai - For email verification of exported leads.',
      'Instantly.ai - For uploading leads and scripts to initiate cold email sequences.',
      'Smartleads.ai - For uploading leads and scripts to initiate cold email sequences.',
      'Linked Helper - For LinkedIn outreach automation (auto-viewing profiles, liking posts, sending connection requests, and triggering follow-up messages).',
      'HubSpot CRM - For tracking positive responses and adding interested leads for follow-up and deal progression.',
      'Google, Microsoft, Maildoso: Email addresses for Email Marketing Campaigns.',
      'Spam-Checker Tools (unspecified) - For refining outreach scripts to avoid spam flags.',
      'GoTo: US phone calls.'
    ]
  },
  {
    title: 'Lead Generation via Sales Navigator (SN)',
    content: [
      'Manually apply filters in SN: Industry, company headcount, geography, etc.',
      'Create an Account List in SN.',
      'Use this Account List in SN to refine Contact search (filter by Title, etc.).'
    ]
  },
  {
    title: 'Lead Data Export',
    content: [
      'Use Apollo.io Chrome extension to extract leads from SN.',
      'Import leads into Apollo and create a list.'
    ]
  },
  {
    title: 'Email Discovery & Enrichment',
    content: [
      'Apollo enriches leads with email addresses.',
      'Export the enriched list.'
    ]
  },
  {
    title: 'Manual Qualification',
    content: [
      'Visit each company website to check if it’s working and cybersecurity-relevant.',
      'Manually check if lead titles and locations meet requirements.',
      'Update statuses accordingly in a spreadsheet.'
    ]
  },
  {
    title: 'Email Verification',
    content: [
      'Upload exported leads to Bouncer.ai.',
      'Manually verify emails and update spreadsheet.'
    ]
  },
  {
    title: 'Email Campaign Prep',
    content: [
      'Create a final list of valid emails.',
      'Draft scripts for outreach.',
      'Use spam-checker tools to refine scripts.'
    ]
  },
  {
    title: 'Campaign Launch',
    content: [
      'Upload leads and scripts to Instantly.ai and Smartleads.ai.',
      'Initiate cold email sequences.'
    ]
  },
  {
    title: 'LinkedIn Outreach',
    content: [
      'Use Linked Helper to:',
      'Auto-view profiles, Like recent posts, Send connection requests, Trigger follow-up messages'
    ]
  },
  {
    title: 'CRM Update',
    content: [
      'Manually track positive responses.',
      'Add interested leads to HubSpot CRM for follow-up and deal progression.'
    ]
  }
];

export default function CircularFlow() {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <div className="circle-container">
      <div className="center-title">Current Workflow (Manual-Driven)</div>
      {sections.map((section, index) => {
        const angle = (360 / sections.length) * index;
        return (
          <div
            key={index}
            className="circle-item"
            style={{
              transform: `rotate(${angle}deg) translate(24em) rotate(-${angle}deg)`
            }}
            onClick={() => setActiveIndex(index === activeIndex ? null : index)}
          >
            {section.title}
            {activeIndex === index && (
              <div className="details-box">
                <ul>
                  {section.content.map((item, i) => (
                    <li key={i}>• {item}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

