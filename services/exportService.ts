/**
 * Export service for generating PDFs, reports, and handling clipboard operations
 * Firm branding and client-ready outputs
 */

export interface FirmBranding {
  firmName: string;
  attorneyName: string;
  address: string;
  phone: string;
  email: string;
  logo?: string; // Base64 encoded image
}

export interface ExportOptions {
  includeBranding: boolean;
  includeConfidentialHeader: boolean;
  includeTimestamp: boolean;
  format: 'pdf' | 'html' | 'markdown';
}

export interface AssessmentReportData {
  clientName?: string;
  incidentDate?: string;
  assessmentData: any; // AssessmentData type
  results: any[]; // AssessmentResult type
  summaryNotes?: string;
}

const DEFAULT_BRANDING: FirmBranding = {
  firmName: 'Law Firm Name',
  attorneyName: 'Attorney Name',
  address: '123 Main Street, Suite 100, City, State 12345',
  phone: '(555) 123-4567',
  email: 'attorney@lawfirm.com'
};

/**
 * Generates HTML for client-ready assessment reports (Executive Summary format)
 */
export const generateAssessmentReport = (
  data: AssessmentReportData,
  branding: FirmBranding = DEFAULT_BRANDING,
  options: ExportOptions = {
    includeBranding: true,
    includeConfidentialHeader: true,
    includeTimestamp: true,
    format: 'html'
  }
): string => {
  const currentDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  const totalAffected = Object.values(data.assessmentData.affectedCounts).reduce((sum: number, count: any) => sum + count, 0);
  const affectedStates = Object.keys(data.assessmentData.affectedCounts).filter(code =>
    data.assessmentData.affectedCounts[code] > 0
  );

  // Calculate key metrics
  const requireIndividual = data.results.filter(r => r.individualNotification.required === 'Yes').length;
  const requireAG = data.results.filter(r => r.agNotification.required === 'Yes').length;
  const requireCRA = data.results.filter(r => r.craNotification.required === 'Yes').length;

  // Find earliest deadline
  const getDeadlineDays = (timeline: string): number => {
    const match = timeline.match(/(\d+)\s*days/);
    return match ? parseInt(match[1]) : 999;
  };

  const earliestIndividual = Math.min(...data.results
    .filter(r => r.individualNotification.required === 'Yes')
    .map(r => getDeadlineDays(r.individualNotification.timeline)));

  const earliestAG = Math.min(...data.results
    .filter(r => r.agNotification.required === 'Yes')
    .map(r => getDeadlineDays(r.agNotification.timeline)));

  return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Data Breach Assessment Report</title>
    <style>
        body {
            font-family: 'Calibri', 'Arial', sans-serif;
            line-height: 1.6;
            color: #1a1a1a;
            max-width: 8.5in;
            margin: 0 auto;
            padding: 0.5in;
            background: white;
        }
        .header {
            background: linear-gradient(135deg, #0891b2 0%, #06b6d4 100%);
            color: white;
            padding: 2rem;
            margin: -0.5in -0.5in 2rem -0.5in;
            text-align: center;
        }
        .confidential {
            background: #dc2626;
            color: white;
            font-weight: bold;
            font-size: 11px;
            text-align: center;
            padding: 0.5rem;
            margin: -0.5in -0.5in 0 -0.5in;
            letter-spacing: 2px;
        }
        .branding {
            background: #f8fafc;
            padding: 1rem;
            border-left: 4px solid #0891b2;
            margin-bottom: 1.5rem;
            font-size: 12px;
        }
        .branding h1 { margin: 0 0 0.5rem 0; font-size: 18px; color: #1e293b; }
        .branding p { margin: 0.1rem 0; color: #64748b; }
        .alert-critical {
            background: #fef2f2;
            border: 2px solid #dc2626;
            border-radius: 8px;
            padding: 1.5rem;
            margin-bottom: 2rem;
        }
        .alert-critical h3 {
            color: #dc2626;
            margin: 0 0 1rem 0;
            font-size: 18px;
            display: flex;
            align-items: center;
            gap: 0.5rem;
        }
        .metrics-grid {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 1rem;
            margin-bottom: 2rem;
        }
        .metric-card {
            background: #f1f5f9;
            padding: 1.25rem;
            border-radius: 8px;
            text-align: center;
            border-top: 4px solid #0891b2;
        }
        .metric-value {
            font-size: 28px;
            font-weight: bold;
            color: #0891b2;
            display: block;
            margin-bottom: 0.5rem;
        }
        .metric-label {
            font-size: 12px;
            color: #64748b;
            text-transform: uppercase;
            letter-spacing: 0.5px;
        }
        .requirements-summary {
            background: white;
            border: 1px solid #e2e8f0;
            border-radius: 8px;
            overflow: hidden;
            margin-bottom: 2rem;
        }
        .requirements-header {
            background: #1e293b;
            color: white;
            padding: 1rem;
            font-weight: bold;
            font-size: 16px;
        }
        .requirements-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 0;
        }
        .requirement-item {
            padding: 1.5rem;
            border-right: 1px solid #e2e8f0;
            border-bottom: 1px solid #e2e8f0;
            text-align: center;
        }
        .requirement-item:nth-child(3n) { border-right: none; }
        .requirement-count {
            font-size: 36px;
            font-weight: bold;
            color: #dc2626;
            display: block;
        }
        .requirement-label {
            font-size: 13px;
            color: #64748b;
            margin-top: 0.5rem;
        }
        .section {
            margin-bottom: 2rem;
        }
        .section h2 {
            color: #1e293b;
            font-size: 18px;
            margin-bottom: 1rem;
            padding-bottom: 0.5rem;
            border-bottom: 2px solid #0891b2;
        }
        .state-list {
            background: #f8fafc;
            border-radius: 8px;
            padding: 1.5rem;
        }
        .state-row {
            display: grid;
            grid-template-columns: 120px 1fr 1fr 1fr;
            gap: 1rem;
            padding: 1rem;
            border-bottom: 1px solid #e2e8f0;
            align-items: start;
        }
        .state-row:last-child { border-bottom: none; }
        .state-name {
            font-weight: bold;
            color: #1e293b;
        }
        .state-count {
            font-size: 11px;
            color: #64748b;
        }
        .requirement-box {
            font-size: 12px;
        }
        .requirement-box.yes {
            background: #dcfce7;
            color: #166534;
            padding: 0.5rem;
            border-radius: 4px;
            border-left: 3px solid #16a34a;
        }
        .requirement-box.no {
            background: #f1f5f9;
            color: #64748b;
            padding: 0.5rem;
            border-radius: 4px;
        }
        .timeline-text {
            font-weight: bold;
            color: #dc2626;
            font-size: 11px;
            display: block;
            margin-top: 0.25rem;
        }
        .footer {
            margin-top: 3rem;
            padding-top: 1.5rem;
            border-top: 2px solid #e2e8f0;
            font-size: 10px;
            color: #94a3b8;
            text-align: center;
        }
        @media print {
            body { margin: 0; padding: 0; }
            .header { margin: 0; }
            .confidential { margin: 0; }
            .no-print { display: none; }
            .metric-card, .requirement-item, .requirement-box {
                -webkit-print-color-adjust: exact !important;
                print-color-adjust: exact !important;
                color-adjust: exact !important;
            }
        }
    </style>
</head>
<body>
    ${options.includeConfidentialHeader ? '<div class="confidential">CONFIDENTIAL ATTORNEY-CLIENT COMMUNICATION</div>' : ''}

    <div class="header">
        <h1 style="margin: 0; font-size: 32px; font-weight: bold;">Data Breach Assessment</h1>
        <p style="margin: 0.5rem 0; font-size: 14px; opacity: 0.9;">Executive Summary</p>
        ${options.includeTimestamp ? `<p style="margin: 0; font-size: 12px; opacity: 0.8;">${currentDate}</p>` : ''}
    </div>

    ${options.includeBranding ? `
    <div class="branding">
        <h1>${branding.firmName}</h1>
        <p>Prepared by: ${branding.attorneyName} | ${branding.phone} | ${branding.email}</p>
    </div>
    ` : ''}

    ${earliestIndividual < 999 || earliestAG < 999 ? `
    <div class="alert-critical">
        <h3>⚠ URGENT ACTION REQUIRED</h3>
        <p style="margin: 0; font-size: 14px; line-height: 1.6;">
            <strong>Earliest Deadline:</strong>
            ${earliestIndividual < earliestAG ?
                `Individual notification required within <strong>${earliestIndividual} days</strong> in ${requireIndividual} jurisdiction(s).` :
                `Attorney General notification required within <strong>${earliestAG} days</strong> in ${requireAG} jurisdiction(s).`
            }
        </p>
    </div>
    ` : ''}

    <div class="metrics-grid">
        <div class="metric-card">
            <span class="metric-value">${totalAffected.toLocaleString()}</span>
            <span class="metric-label">Total Affected</span>
        </div>
        <div class="metric-card">
            <span class="metric-value">${affectedStates.length}</span>
            <span class="metric-label">Jurisdictions</span>
        </div>
        <div class="metric-card">
            <span class="metric-value">${data.assessmentData.dataTypes.length}</span>
            <span class="metric-label">Data Types</span>
        </div>
        <div class="metric-card">
            <span class="metric-value">${data.assessmentData.isEncrypted === 'yes' ? 'Yes' : 'No'}</span>
            <span class="metric-label">Encrypted</span>
        </div>
    </div>

    <div class="requirements-summary">
        <div class="requirements-header">Notification Requirements Summary</div>
        <div class="requirements-grid">
            <div class="requirement-item">
                <span class="requirement-count">${requireIndividual}</span>
                <div class="requirement-label">Individual Notification Required</div>
            </div>
            <div class="requirement-item">
                <span class="requirement-count">${requireAG}</span>
                <div class="requirement-label">AG Notification Required</div>
            </div>
            <div class="requirement-item">
                <span class="requirement-count">${requireCRA}</span>
                <div class="requirement-label">CRA Notification Required</div>
            </div>
        </div>
    </div>

    <div class="section">
        <h2>Jurisdiction Details</h2>
        <div class="state-list">
            ${data.results.filter(r => r.individualNotification.required === 'Yes' || r.agNotification.required === 'Yes').map(result => `
                <div class="state-row">
                    <div>
                        <div class="state-name">${result.law.state}</div>
                        <div class="state-count">${result.affectedCount.toLocaleString()} affected</div>
                    </div>
                    <div class="requirement-box ${result.individualNotification.required === 'Yes' ? 'yes' : 'no'}">
                        <div><strong>Individual:</strong> ${result.individualNotification.required}</div>
                        ${result.individualNotification.required === 'Yes' ? `<span class="timeline-text">${result.individualNotification.timeline}</span>` : ''}
                    </div>
                    <div class="requirement-box ${result.agNotification.required === 'Yes' ? 'yes' : 'no'}">
                        <div><strong>AG:</strong> ${result.agNotification.required}</div>
                        ${result.agNotification.required === 'Yes' ? `<span class="timeline-text">${result.agNotification.timeline}</span>` : ''}
                    </div>
                    <div class="requirement-box ${result.craNotification.required === 'Yes' ? 'yes' : 'no'}">
                        <div><strong>CRA:</strong> ${result.craNotification.required}</div>
                        ${result.craNotification.required === 'Yes' ? `<span class="timeline-text">${result.craNotification.timeline}</span>` : ''}
                    </div>
                </div>
            `).join('')}
        </div>
    </div>

    <div class="footer">
        <p><strong>DISCLAIMER:</strong> This report provides a preliminary assessment for informational purposes only and does not constitute legal advice.</p>
        <p>Statutory requirements are subject to change. Consult with qualified legal counsel for definitive guidance.</p>
        ${options.includeBranding ? `<p style="margin-top: 1rem;">© ${new Date().getFullYear()} ${branding.firmName}. All rights reserved.</p>` : ''}
    </div>
</body>
</html>
  `;
};

/**
 * Generates HTML for multi-state comparison export
 */
export const generateMultiStateComparisonReport = (
  laws: any[], // StateLaw[]
  selectedStates: string[],
  branding: FirmBranding = DEFAULT_BRANDING,
  options: ExportOptions = {
    includeBranding: true,
    includeConfidentialHeader: false,
    includeTimestamp: true,
    format: 'html'
  }
): string => {
  const currentDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  const filteredLaws = laws.filter(law => selectedStates.includes(law.stateCode));

  return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Multi-State Data Breach Law Comparison</title>
    <style>
        body {
            font-family: 'Calibri', 'Arial', sans-serif;
            line-height: 1.5;
            color: #1a1a1a;
            max-width: 11in;
            margin: 0 auto;
            padding: 0.5in;
            background: white;
        }
        .header {
            background: linear-gradient(135deg, #0891b2 0%, #06b6d4 100%);
            color: white;
            padding: 2rem;
            margin: -0.5in -0.5in 2rem -0.5in;
            text-align: center;
        }
        .confidential {
            background: #dc2626;
            color: white;
            font-weight: bold;
            font-size: 11px;
            text-align: center;
            padding: 0.5rem;
            margin: -0.5in -0.5in 0 -0.5in;
            letter-spacing: 2px;
        }
        .branding {
            background: #f8fafc;
            padding: 1rem;
            border-left: 4px solid #0891b2;
            margin-bottom: 1.5rem;
            font-size: 12px;
        }
        .branding h1 { margin: 0 0 0.5rem 0; font-size: 18px; color: #1e293b; }
        .branding p { margin: 0.1rem 0; color: #64748b; }
        .section {
            margin-bottom: 2rem;
        }
        .section h2 {
            color: #1e293b;
            font-size: 18px;
            margin-bottom: 1rem;
            padding-bottom: 0.5rem;
            border-bottom: 2px solid #0891b2;
        }
        .comparison-table {
            width: 100%;
            border-collapse: collapse;
            margin-bottom: 1.5rem;
            font-size: 11px;
            box-shadow: 0 1px 3px rgba(0,0,0,0.1);
        }
        .comparison-table th {
            background: #1e293b;
            color: white;
            padding: 0.75rem 0.5rem;
            text-align: left;
            font-weight: 600;
            font-size: 11px;
            border-right: 1px solid #475569;
        }
        .comparison-table th:last-child { border-right: none; }
        .comparison-table td {
            padding: 0.6rem 0.5rem;
            border-bottom: 1px solid #e2e8f0;
            border-right: 1px solid #f1f5f9;
            vertical-align: top;
        }
        .comparison-table td:last-child { border-right: none; }
        .comparison-table tr:nth-child(even) {
            background: #f8fafc;
        }
        .comparison-table tr:hover {
            background: #f1f5f9;
        }
        .state-name {
            font-weight: bold;
            color: #0891b2;
            font-size: 12px;
        }
        .requirement-yes {
            background: #dcfce7;
            color: #166534;
            padding: 0.25rem 0.5rem;
            border-radius: 4px;
            font-weight: 600;
            display: inline-block;
        }
        .requirement-no {
            background: #f1f5f9;
            color: #64748b;
            padding: 0.25rem 0.5rem;
            border-radius: 4px;
            display: inline-block;
        }
        .timeline {
            font-weight: bold;
            color: #dc2626;
        }
        .threshold {
            font-weight: 600;
            color: #0891b2;
        }
        .footer {
            margin-top: 3rem;
            padding-top: 1.5rem;
            border-top: 2px solid #e2e8f0;
            font-size: 10px;
            color: #94a3b8;
            text-align: center;
        }
        @media print {
            body { margin: 0; padding: 0.25in; }
            .header { margin: 0; }
            .confidential { margin: 0; }
            .no-print { display: none; }
            .comparison-table th, .requirement-yes, .requirement-no {
                -webkit-print-color-adjust: exact !important;
                print-color-adjust: exact !important;
                color-adjust: exact !important;
            }
        }
    </style>
</head>
<body>
    ${options.includeConfidentialHeader ? '<div class="confidential">CONFIDENTIAL ATTORNEY-CLIENT COMMUNICATION</div>' : ''}

    <div class="header">
        <h1 style="margin: 0; font-size: 32px; font-weight: bold;">Multi-State Comparison</h1>
        <p style="margin: 0.5rem 0; font-size: 14px; opacity: 0.9;">
            Comparing ${filteredLaws.length} jurisdictions: ${filteredLaws.map(l => l.state).join(', ')}
        </p>
        ${options.includeTimestamp ? `<p style="margin: 0; font-size: 12px; opacity: 0.8;">${currentDate}</p>` : ''}
    </div>

    ${options.includeBranding ? `
    <div class="branding">
        <h1>${branding.firmName}</h1>
        <p>Prepared by: ${branding.attorneyName} | ${branding.phone} | ${branding.email}</p>
    </div>
    ` : ''}

    <div class="section">
        <h2>Notification Timelines</h2>
        <table class="comparison-table">
            <thead>
                <tr>
                    <th>State</th>
                    <th>Individual Notification</th>
                    <th>AG Notification</th>
                    <th>AG Timeline Type</th>
                    <th>Vendor Notification</th>
                </tr>
            </thead>
            <tbody>
                ${filteredLaws.map(law => `
                    <tr>
                        <td><span class="state-name">${law.state}</span></td>
                        <td class="timeline">${law.individualNotificationTimelineDays > 0 ? `${law.individualNotificationTimelineDays} days` : 'ASAP'}</td>
                        <td class="timeline">${law.agNotificationTimelineDays !== null ? (law.agNotificationTimelineDays > 0 ? `${law.agNotificationTimelineDays} days` : 'Concurrent') : 'N/A'}</td>
                        <td>${law.agNotificationTimelineRelativeTo || 'Fixed'}</td>
                        <td class="timeline">${law.vendorNotificationTimelineDays > 0 ? `${law.vendorNotificationTimelineDays} days` : 'ASAP/Immediate'}</td>
                    </tr>
                `).join('')}
            </tbody>
        </table>
    </div>

    <div class="section">
        <h2>Reporting Thresholds</h2>
        <table class="comparison-table">
            <thead>
                <tr>
                    <th>State</th>
                    <th>AG Notification Threshold</th>
                    <th>CRA Notification Threshold</th>
                    <th>Substitute Notice - Cost</th>
                    <th>Substitute Notice - Count</th>
                </tr>
            </thead>
            <tbody>
                ${filteredLaws.map(law => `
                    <tr>
                        <td><span class="state-name">${law.state}</span></td>
                        <td class="threshold">${law.agNotificationThreshold?.toLocaleString() || 'N/A'}</td>
                        <td class="threshold">${law.craNotificationThreshold?.toLocaleString() || 'N/A'}</td>
                        <td class="threshold">${law.substituteNotificationCostTrigger > 0 ? `$${law.substituteNotificationCostTrigger.toLocaleString()}` : 'N/A'}</td>
                        <td class="threshold">${law.substituteNotificationAffectedCountTrigger > 0 ? law.substituteNotificationAffectedCountTrigger.toLocaleString() : 'N/A'}</td>
                    </tr>
                `).join('')}
            </tbody>
        </table>
    </div>

    <div class="section">
        <h2>Key Provisions & Exemptions</h2>
        <table class="comparison-table">
            <thead>
                <tr>
                    <th>State</th>
                    <th>Private Right of Action</th>
                    <th>Encryption Safe Harbor</th>
                    <th>Risk of Harm Analysis</th>
                    <th>HIPAA Exemption</th>
                    <th>GLBA Exemption</th>
                    <th>Max Penalty</th>
                </tr>
            </thead>
            <tbody>
                ${filteredLaws.map(law => `
                    <tr>
                        <td><span class="state-name">${law.state}</span></td>
                        <td><span class="requirement-${law.enforcementPrivateRightOfAction ? 'yes' : 'no'}">${law.enforcementPrivateRightOfAction ? 'Yes' : 'No'}</span></td>
                        <td><span class="requirement-${law.exemptionEncryptionSafeHarbor ? 'yes' : 'no'}">${law.exemptionEncryptionSafeHarbor ? 'Yes' : 'No'}</span></td>
                        <td><span class="requirement-${law.riskOfHarmAnalysisCanEliminateNotification ? 'yes' : 'no'}">${law.riskOfHarmAnalysisCanEliminateNotification ? 'Yes' : 'No'}</span></td>
                        <td><span class="requirement-${law.exemptionHipaa ? 'yes' : 'no'}">${law.exemptionHipaa ? 'Yes' : 'No'}</span></td>
                        <td><span class="requirement-${law.exemptionGlba ? 'yes' : 'no'}">${law.exemptionGlba ? 'Yes' : 'No'}</span></td>
                        <td class="threshold">${law.enforcementPenaltyMaximum > 0 ? `$${law.enforcementPenaltyMaximum.toLocaleString()}` : 'Not specified'}</td>
                    </tr>
                `).join('')}
            </tbody>
        </table>
    </div>

    <div class="section">
        <h2>Enforcement Authority</h2>
        <table class="comparison-table">
            <thead>
                <tr>
                    <th>State</th>
                    <th>Enforcement Authority</th>
                    <th>Exclusive Authority?</th>
                    <th>Damages Available</th>
                </tr>
            </thead>
            <tbody>
                ${filteredLaws.map(law => `
                    <tr>
                        <td><span class="state-name">${law.state}</span></td>
                        <td>${law.enforcementAuthority || 'Not specified'}</td>
                        <td><span class="requirement-${law.enforcementAuthorityIsExclusive ? 'yes' : 'no'}">${law.enforcementAuthorityIsExclusive ? 'Yes' : 'No'}</span></td>
                        <td>${law.enforcementTypeDamagesDescription || 'Not specified'}</td>
                    </tr>
                `).join('')}
            </tbody>
        </table>
    </div>

    <div class="footer">
        <p><strong>DISCLAIMER:</strong> This comparison is for informational purposes only and does not constitute legal advice.</p>
        <p>Statutory requirements are subject to change. Consult with qualified legal counsel for definitive guidance.</p>
        ${options.includeBranding ? `<p style="margin-top: 1rem;">© ${new Date().getFullYear()} ${branding.firmName}. All rights reserved.</p>` : ''}
    </div>
</body>
</html>
  `;
};

/**
 * Downloads HTML content as PDF using browser print functionality
 */
export const downloadAsPDF = (htmlContent: string, filename: string): void => {
  const printWindow = window.open('', '_blank');
  if (!printWindow) {
    throw new Error('Failed to open print window. Please allow popups for this site.');
  }

  // Add print styles to the content
  const printStyles = `
    <style>
      @media print {
        body { font-family: 'Times New Roman', serif; }
        .no-print { display: none !important; }
        table { page-break-inside: avoid; }
        tr { page-break-inside: avoid; page-break-after: auto; }
        .card, .bg-surface-light { page-break-inside: avoid; }
        h1, h2, h3 { page-break-after: avoid; }
      }
    </style>
  `;

  // Insert styles right after the opening head tag
  const styledContent = htmlContent.replace('<head>', '<head>' + printStyles);

  printWindow.document.write(styledContent);
  printWindow.document.close();

  printWindow.onload = () => {
    setTimeout(() => {
      printWindow.print();
      printWindow.close();
    }, 250);
  };
};

/**
 * Downloads HTML content as file
 */
export const downloadAsFile = (content: string, filename: string, mimeType: string = 'text/html'): void => {
  const blob = new Blob([content], { type: mimeType });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
};

/**
 * Copies text to clipboard with fallback for older browsers
 */
export const copyToClipboard = async (text: string): Promise<boolean> => {
  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text);
      return true;
    } else {
      // Fallback for older browsers
      const textArea = document.createElement('textarea');
      textArea.value = text;
      textArea.style.position = 'fixed';
      textArea.style.left = '-999999px';
      textArea.style.top = '-999999px';
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();

      const result = document.execCommand('copy');
      document.body.removeChild(textArea);
      return result;
    }
  } catch (error) {
    console.error('Failed to copy to clipboard:', error);
    return false;
  }
};

/**
 * Formats key legal provisions for easy copying
 */
export const formatProvisionForCopy = (
  law: any, // StateLaw
  provisionType: 'timeline' | 'threshold' | 'exemption' | 'enforcement'
): string => {
  switch (provisionType) {
    case 'timeline':
      return `${law.state} Data Breach Notification Timelines:
• Individual Notification: ${law.individualNotificationTimelineDays > 0 ? `${law.individualNotificationTimelineDays} days` : 'ASAP'}
${law.individualNotificationTimelineDescription ? `• Description: ${law.individualNotificationTimelineDescription}` : ''}
• AG Notification: ${law.agNotificationTimelineDays !== null ? (law.agNotificationTimelineDays > 0 ? `${law.agNotificationTimelineDays} days` : 'Concurrent') : 'N/A'}
${law.agNotificationTimelineDescription ? `• AG Timeline Details: ${law.agNotificationTimelineDescription}` : ''}
• Vendor to Owner: ${law.vendorNotificationTimelineDays > 0 ? `${law.vendorNotificationTimelineDays} days` : 'ASAP/Immediate'}

`;

    case 'threshold':
      return `${law.state} Reporting Thresholds:
• AG Notification Threshold: ${law.agNotificationThreshold?.toLocaleString() || 'N/A'}
${law.agNotificationThresholdDescription ? `• Description: ${law.agNotificationThresholdDescription}` : ''}
• CRA Notification Threshold: ${law.craNotificationThreshold?.toLocaleString() || 'N/A'}
${law.craNotificationThresholdDescription ? `• Description: ${law.craNotificationThresholdDescription}` : ''}
• Substitute Notice Cost Trigger: ${law.substituteNotificationCostTrigger > 0 ? `$${law.substituteNotificationCostTrigger.toLocaleString()}` : 'N/A'}
• Substitute Notice Count Trigger: ${law.substituteNotificationAffectedCountTrigger > 0 ? law.substituteNotificationAffectedCountTrigger.toLocaleString() : 'N/A'}

`;

    case 'exemption':
      return `${law.state} Key Exemptions:
• Encryption Safe Harbor: ${law.exemptionEncryptionSafeHarbor ? 'Available' : 'Not Available'}${law.exemptionEncryptionSafeHarborNegatedIfKeyCompromised ? ' (negated if key compromised)' : ''}
${law.exemptionEncryptionDescription ? `• Details: ${law.exemptionEncryptionDescription}` : ''}
• Risk of Harm Analysis: ${law.riskOfHarmAnalysisCanEliminateNotification ? 'Can eliminate notification requirement' : 'Required but does not eliminate notification'}
${law.riskOfHarmAnalysisStandard ? `• Standard: ${law.riskOfHarmAnalysisStandard}` : ''}
• HIPAA Exemption: ${law.exemptionHipaa ? 'Available' : 'Not Available'}
${law.exemptionHipaaDescription ? `• Details: ${law.exemptionHipaaDescription}` : ''}
• GLBA Exemption: ${law.exemptionGlba ? 'Available' : 'Not Available'}
${law.exemptionGlbaDescription ? `• Details: ${law.exemptionGlbaDescription}` : ''}

`;

    case 'enforcement':
      return `${law.state} Enforcement Information:
• Private Right of Action: ${law.enforcementPrivateRightOfAction ? 'Available' : 'Not Available'}
• Enforcement Authority: ${law.enforcementAuthority || 'Not specified'}
• Exclusive Authority: ${law.enforcementAuthorityIsExclusive ? 'Yes' : 'No'}
• Maximum Penalty: ${law.enforcementPenaltyMaximum > 0 ? `$${law.enforcementPenaltyMaximum.toLocaleString()}` : 'Not specified'}
${law.enforcementTypeDamagesDescription ? `• Damages: ${law.enforcementTypeDamagesDescription}` : ''}
${law.enforcementPenaltyBasis ? `• Penalty Basis: ${law.enforcementPenaltyBasis}` : ''}

`;

    default:
      return '';
  }
};