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
 * Generates HTML for client-ready assessment reports
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

  return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Data Breach Assessment Report</title>
    <style>
        body {
            font-family: 'Times New Roman', serif;
            line-height: 1.6;
            color: #333;
            max-width: 8.5in;
            margin: 0 auto;
            padding: 0.5in;
            background: white;
        }
        .header {
            text-align: center;
            margin-bottom: 2rem;
            border-bottom: 2px solid #2c3e50;
            padding-bottom: 1rem;
        }
        .confidential {
            color: #e74c3c;
            font-weight: bold;
            font-size: 14px;
            text-align: center;
            margin-bottom: 1rem;
        }
        .branding {
            margin-bottom: 2rem;
        }
        .branding h1 { margin: 0; font-size: 24px; color: #2c3e50; }
        .branding p { margin: 0.25rem 0; font-size: 14px; }
        .section {
            margin-bottom: 2rem;
        }
        .section h2 {
            color: #2c3e50;
            border-bottom: 1px solid #bdc3c7;
            padding-bottom: 0.5rem;
            margin-bottom: 1rem;
        }
        .summary-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 1rem;
            margin-bottom: 1.5rem;
        }
        .summary-item {
            padding: 0.75rem;
            background: #f8f9fa;
            border-left: 4px solid #3498db;
        }
        .summary-item strong { display: block; margin-bottom: 0.25rem; }
        .state-results {
            margin-bottom: 1.5rem;
        }
        .state-card {
            border: 1px solid #ddd;
            border-radius: 8px;
            margin-bottom: 1rem;
            overflow: hidden;
        }
        .state-header {
            background: #34495e;
            color: white;
            padding: 1rem;
            font-weight: bold;
        }
        .state-content {
            padding: 1rem;
        }
        .requirement {
            margin-bottom: 1rem;
            padding: 0.75rem;
            border-radius: 4px;
        }
        .requirement.required {
            background: #d4edda;
            border-left: 4px solid #28a745;
        }
        .requirement.conditional {
            background: #fff3cd;
            border-left: 4px solid #ffc107;
        }
        .requirement.not-required {
            background: #f8d7da;
            border-left: 4px solid #dc3545;
        }
        .requirement strong { display: block; margin-bottom: 0.25rem; }
        .timeline {
            font-weight: bold;
            color: #2c3e50;
        }
        .notes {
            background: #f8f9fa;
            padding: 1rem;
            border-radius: 4px;
            border-left: 4px solid #6c757d;
        }
        .footer {
            margin-top: 3rem;
            padding-top: 1rem;
            border-top: 1px solid #bdc3c7;
            font-size: 12px;
            color: #6c757d;
            text-align: center;
        }
        @media print {
            body { margin: 0; padding: 0.25in; }
            .no-print { display: none; }
        }
    </style>
</head>
<body>
    ${options.includeConfidentialHeader ? '<div class="confidential">CONFIDENTIAL ATTORNEY-CLIENT COMMUNICATION</div>' : ''}

    <div class="header">
        ${options.includeBranding ? `
        <div class="branding">
            <h1>${branding.firmName}</h1>
            <p>Prepared by: ${branding.attorneyName}</p>
            <p>${branding.address}</p>
            <p>${branding.phone} | ${branding.email}</p>
        </div>
        ` : ''}

        <h1 style="margin: 0; font-size: 28px; color: #2c3e50;">Data Breach Notification Assessment</h1>
        ${data.clientName ? `<p style="margin: 0.5rem 0; font-size: 16px;"><strong>Client:</strong> ${data.clientName}</p>` : ''}
        ${data.incidentDate ? `<p style="margin: 0.5rem 0; font-size: 16px;"><strong>Incident Date:</strong> ${data.incidentDate}</p>` : ''}
        ${options.includeTimestamp ? `<p style="margin: 0.5rem 0; font-size: 14px; color: #6c757d;"><strong>Report Generated:</strong> ${currentDate}</p>` : ''}
    </div>

    <div class="section">
        <h2>Executive Summary</h2>
        <div class="summary-grid">
            <div class="summary-item">
                <strong>Total Affected Individuals</strong>
                ${totalAffected.toLocaleString()}
            </div>
            <div class="summary-item">
                <strong>States Impacted</strong>
                ${affectedStates.length} jurisdictions
            </div>
            <div class="summary-item">
                <strong>Data Types Involved</strong>
                ${data.assessmentData.dataTypes.join(', ') || 'Not specified'}
            </div>
            <div class="summary-item">
                <strong>Encryption Status</strong>
                ${data.assessmentData.isEncrypted === 'yes' ? 'Encrypted' : data.assessmentData.isEncrypted === 'no' ? 'Not Encrypted' : 'Unknown'}
            </div>
        </div>

        <div class="summary-item" style="grid-column: 1 / -1; background: #e3f2fd; border-left-color: #2196f3;">
            <strong>Regulatory Analysis</strong>
            This analysis examines notification requirements across ${affectedStates.length} jurisdiction(s) affecting approximately ${totalAffected.toLocaleString()} individuals.
            ${data.results.filter(r => r.individualNotification.required === 'Yes').length} jurisdiction(s) require individual notification,
            ${data.results.filter(r => r.agNotification.required === 'Yes').length} require attorney general notification, and
            ${data.results.filter(r => r.craNotification.required === 'Yes').length} require consumer reporting agency notification.
        </div>
    </div>

    <div class="section">
        <h2>Jurisdiction-Specific Requirements</h2>
        <div class="state-results">
            ${data.results.map(result => `
                <div class="state-card">
                    <div class="state-header">
                        ${result.law.state} (${result.stateCode})
                        <span style="float: right; font-weight: normal; font-size: 14px;">
                            ${result.affectedCount.toLocaleString()} affected
                        </span>
                    </div>
                    <div class="state-content">
                        <div class="requirement ${result.individualNotification.required.toLowerCase().replace(' ', '-')}">
                            <strong>Individual Notification:</strong>
                            <span class="status">${result.individualNotification.required}</span>
                            <span class="timeline">${result.individualNotification.timeline}</span>
                            <p style="margin: 0.5rem 0; font-size: 14px;">${result.individualNotification.reason}</p>
                        </div>

                        ${result.agNotification.required !== 'No' ? `
                        <div class="requirement ${result.agNotification.required.toLowerCase().replace(' ', '-')}">
                            <strong>Attorney General Notification:</strong>
                            <span class="status">${result.agNotification.required}</span>
                            <span class="timeline">${result.agNotification.timeline}</span>
                            <p style="margin: 0.5rem 0; font-size: 14px;">${result.agNotification.reason}</p>
                        </div>
                        ` : ''}

                        ${result.craNotification.required !== 'No' ? `
                        <div class="requirement ${result.craNotification.required.toLowerCase().replace(' ', '-')}">
                            <strong>CRA Notification:</strong>
                            <span class="status">${result.craNotification.required}</span>
                            <span class="timeline">${result.craNotification.timeline}</span>
                            <p style="margin: 0.5rem 0; font-size: 14px;">${result.craNotification.reason}</p>
                        </div>
                        ` : ''}
                    </div>
                </div>
            `).join('')}
        </div>
    </div>

    ${data.summaryNotes ? `
    <div class="section">
        <h2>Attorney Notes</h2>
        <div class="notes">
            ${data.summaryNotes.replace(/\n/g, '<br>')}
        </div>
    </div>
    ` : ''}

    <div class="footer">
        <p>This report is for informational purposes and does not constitute legal advice.</p>
        <p>Statutory requirements may have changed since this analysis was generated.</p>
        <p>© ${new Date().getFullYear()} ${branding.firmName}. All rights reserved.</p>
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
            font-family: 'Times New Roman', serif;
            line-height: 1.6;
            color: #333;
            max-width: 8.5in;
            margin: 0 auto;
            padding: 0.5in;
            background: white;
        }
        .header {
            text-align: center;
            margin-bottom: 2rem;
            border-bottom: 2px solid #2c3e50;
            padding-bottom: 1rem;
        }
        .confidential {
            color: #e74c3c;
            font-weight: bold;
            font-size: 14px;
            text-align: center;
            margin-bottom: 1rem;
        }
        .branding {
            margin-bottom: 2rem;
        }
        .branding h1 { margin: 0; font-size: 24px; color: #2c3e50; }
        .branding p { margin: 0.25rem 0; font-size: 14px; }
        .comparison-table {
            width: 100%;
            border-collapse: collapse;
            margin-bottom: 2rem;
            font-size: 12px;
        }
        .comparison-table th,
        .comparison-table td {
            border: 1px solid #ddd;
            padding: 0.5rem;
            text-align: left;
            vertical-align: top;
        }
        .comparison-table th {
            background: #34495e;
            color: white;
            font-weight: bold;
        }
        .comparison-table tr:nth-child(even) {
            background: #f8f9fa;
        }
        .state-header {
            background: #34495e;
            color: white;
            font-weight: bold;
            text-align: center;
        }
        .requirement-yes { background: #d4edda; color: #155724; }
        .requirement-no { background: #f8d7da; color: #721c24; }
        .requirement-conditional { background: #fff3cd; color: #856404; }
        .timeline { font-weight: bold; color: #2c3e50; }
        .threshold { font-weight: bold; color: #3498db; }
        .section {
            margin-bottom: 2rem;
        }
        .section h2 {
            color: #2c3e50;
            border-bottom: 1px solid #bdc3c7;
            padding-bottom: 0.5rem;
            margin-bottom: 1rem;
        }
        .footer {
            margin-top: 3rem;
            padding-top: 1rem;
            border-top: 1px solid #bdc3c7;
            font-size: 12px;
            color: #6c757d;
            text-align: center;
        }
        @media print {
            body { margin: 0; padding: 0.25in; }
            .no-print { display: none; }
        }
    </style>
</head>
<body>
    ${options.includeConfidentialHeader ? '<div class="confidential">CONFIDENTIAL ATTORNEY-CLIENT COMMUNICATION</div>' : ''}

    <div class="header">
        ${options.includeBranding ? `
        <div class="branding">
            <h1>${branding.firmName}</h1>
            <p>Prepared by: ${branding.attorneyName}</p>
            <p>${branding.address}</p>
            <p>${branding.phone} | ${branding.email}</p>
        </div>
        ` : ''}

        <h1 style="margin: 0; font-size: 28px; color: #2c3e50;">Multi-State Data Breach Law Comparison</h1>
        <p style="margin: 0.5rem 0; font-size: 16px;">
            Comparing ${filteredLaws.length} jurisdictions: ${filteredLaws.map(l => l.state).join(', ')}
        </p>
        ${options.includeTimestamp ? `<p style="margin: 0.5rem 0; font-size: 14px; color: #6c757d;"><strong>Analysis Date:</strong> ${currentDate}</p>` : ''}
    </div>

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
                        <td><strong>${law.state}</strong></td>
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
                        <td><strong>${law.state}</strong></td>
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
                        <td><strong>${law.state}</strong></td>
                        <td class="requirement-${law.enforcementPrivateRightOfAction ? 'yes' : 'no'}">${law.enforcementPrivateRightOfAction ? 'Yes' : 'No'}</td>
                        <td class="requirement-${law.exemptionEncryptionSafeHarbor ? 'yes' : 'no'}">${law.exemptionEncryptionSafeHarbor ? 'Yes' : 'No'}</td>
                        <td class="requirement-${law.riskOfHarmAnalysisCanEliminateNotification ? 'yes' : 'no'}">${law.riskOfHarmAnalysisCanEliminateNotification ? 'Yes' : 'No'}</td>
                        <td class="requirement-${law.exemptionHipaa ? 'yes' : 'no'}">${law.exemptionHipaa ? 'Yes' : 'No'}</td>
                        <td class="requirement-${law.exemptionGlba ? 'yes' : 'no'}">${law.exemptionGlba ? 'Yes' : 'No'}</td>
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
                        <td><strong>${law.state}</strong></td>
                        <td>${law.enforcementAuthority || 'Not specified'}</td>
                        <td class="requirement-${law.enforcementAuthorityIsExclusive ? 'yes' : 'no'}">${law.enforcementAuthorityIsExclusive ? 'Yes' : 'No'}</td>
                        <td>${law.enforcementTypeDamagesDescription || 'Not specified'}</td>
                    </tr>
                `).join('')}
            </tbody>
        </table>
    </div>

    <div class="footer">
        <p>This comparison is for informational purposes and does not constitute legal advice.</p>
        <p>Statutory requirements may have changed since this analysis was generated.</p>
        <p>© ${new Date().getFullYear()} ${branding.firmName}. All rights reserved.</p>
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