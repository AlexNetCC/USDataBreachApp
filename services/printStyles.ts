/**
 * Print-specific styles for exported documents
 */

export const getPrintCSS = (): string => `
<style>
  /* Print-specific styles for exported documents */

  @media print {
    /* General print styles */
    body {
      font-family: 'Times New Roman', serif;
      line-height: 1.6;
      color: #333;
      max-width: 8.5in;
      margin: 0 auto;
      padding: 0.5in;
      background: white;
      -webkit-print-color-adjust: exact;
      print-color-adjust: exact;
    }

    /* Hide non-printable elements */
    .no-print {
      display: none !important;
    }

    /* Ensure headers and footers */
    header, .header {
      page-break-inside: avoid;
      margin-bottom: 1rem;
    }

    /* Tables */
    table {
      width: 100%;
      border-collapse: collapse;
      margin-bottom: 1rem;
      page-break-inside: avoid;
    }

    th, td {
      border: 1px solid #333;
      padding: 0.5rem;
      text-align: left;
      vertical-align: top;
    }

    th {
      background: #f0f0f0 !important;
      font-weight: bold;
    }

    /* Avoid breaking table rows */
    tr {
      page-break-inside: avoid;
      page-break-after: auto;
    }

    /* Cards and containers */
    .card, .bg-surface-light, .info-card {
      border: 1px solid #ccc;
      margin-bottom: 1rem;
      page-break-inside: avoid;
      background: white !important;
    }

    /* Links */
    a {
      color: #333;
      text-decoration: none;
    }

    a[href]:after {
      content: " (" attr(href) ")";
      font-size: 0.8em;
      color: #666;
    }

    /* Status indicators */
    .requirement-yes, .status-required {
      background: #d4edda !important;
      color: #155724 !important;
      border: 1px solid #c3e6cb;
    }

    .requirement-no, .status-not-required {
      background: #f8d7da !important;
      color: #721c24 !important;
      border: 1px solid #f5c6cb;
    }

    .requirement-conditional, .status-conditional {
      background: #fff3cd !important;
      color: #856404 !important;
      border: 1px solid #ffeaa7;
    }

    /* Headers */
    h1, h2, h3, h4, h5, h6 {
      page-break-after: avoid;
      margin-top: 1rem;
      margin-bottom: 0.5rem;
    }

    h1 { font-size: 24pt; }
    h2 { font-size: 18pt; }
    h3 { font-size: 14pt; }

    /* Paragraphs */
    p {
      margin-bottom: 0.5rem;
      orphans: 3;
      widows: 3;
    }

    /* Lists */
    ul, ol {
      margin-bottom: 0.5rem;
    }

    /* Blockquotes */
    blockquote {
      border-left: 3px solid #333;
      padding-left: 1rem;
      margin: 1rem 0;
      font-style: italic;
    }

    /* Code blocks */
    pre, code {
      font-family: 'Courier New', monospace;
      background: #f5f5f5;
      padding: 0.25rem;
      border-radius: 2px;
    }

    /* Page breaks */
    .page-break {
      page-break-before: always;
    }

    .avoid-break {
      page-break-inside: avoid;
    }

    /* Assessment specific styles */
    .assessment-summary {
      background: #f8f9fa;
      border: 2px solid #333;
      padding: 1rem;
      margin-bottom: 1rem;
    }

    .state-card {
      border: 1px solid #333;
      margin-bottom: 1rem;
      page-break-inside: avoid;
    }

    .state-header {
      background: #333;
      color: white;
      padding: 0.5rem;
      font-weight: bold;
    }

    .requirement {
      margin: 0.5rem 0;
      padding: 0.5rem;
      border-left: 4px solid #333;
    }

    /* Matrix specific styles */
    .matrix-table {
      font-size: 8pt;
    }

    .matrix-table th,
    .matrix-table td {
      padding: 0.25rem;
      border: 1px solid #333;
    }

    .color-coded {
      -webkit-print-color-adjust: exact;
      print-color-adjust: exact;
    }

    /* Ensure colors print correctly */
    .bg-accent, .text-accent {
      background: #007bff !important;
      color: white !important;
    }

    .bg-green-100, .text-green-700 {
      background: #d4edda !important;
      color: #155724 !important;
    }

    .bg-red-100, .text-red-700 {
      background: #f8d7da !important;
      color: #721c24 !important;
    }

    .bg-yellow-100, .text-yellow-700 {
      background: #fff3cd !important;
      color: #856404 !important;
    }

    /* Footer information */
    .print-footer {
      position: fixed;
      bottom: 0;
      left: 0;
      right: 0;
      text-align: center;
      font-size: 8pt;
      color: #666;
      border-top: 1px solid #ccc;
      padding: 0.25rem 0;
    }

    /* Remove shadows and rounded corners for print */
    * {
      box-shadow: none !important;
      border-radius: 0 !important;
    }

    /* Ensure proper spacing */
    .section {
      margin-bottom: 2rem;
      page-break-inside: avoid;
    }

    /* Comparison table improvements */
    .comparison-table {
      font-size: 9pt;
    }

    .comparison-table th {
      background: #333 !important;
      color: white !important;
    }

    .comparison-table tr:nth-child(even) {
      background: #f8f9fa !important;
    }

    /* Timeline displays */
    .timeline {
      font-weight: bold;
      background: #e3f2fd;
      padding: 0.25rem;
      border-radius: 2px;
    }

    /* Threshold displays */
    .threshold {
      font-weight: bold;
      background: #f3e5f5;
      padding: 0.25rem;
      border-radius: 2px;
    }
  }

  /* Screen-only styles */
  @media screen {
    .screen-only {
      display: block;
    }
  }

  /* Print-only styles */
  @media print {
    .screen-only {
      display: none !important;
    }
  }
</style>
`;

/**
 * Injects print-specific CSS into the document head
 */
export const injectPrintStyles = (): void => {
  const existingStyles = document.getElementById('print-styles');
  if (existingStyles) {
    existingStyles.remove();
  }

  const styleElement = document.createElement('div');
  styleElement.id = 'print-styles';
  styleElement.innerHTML = getPrintCSS();
  document.head.appendChild(styleElement);
};

/**
 * Removes print-specific CSS from the document
 */
export const removePrintStyles = (): void => {
  const existingStyles = document.getElementById('print-styles');
  if (existingStyles) {
    existingStyles.remove();
  }
};

/**
 * Prepares document for printing with optimal styles
 */
export const prepareForPrint = (): void => {
  injectPrintStyles();

  // Add a small delay to ensure styles are applied
  setTimeout(() => {
    window.print();
  }, 100);
};

/**
 * Generates a print-optimized HTML document
 */
export const createPrintDocument = (content: string, title: string = 'Document'): string => {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${title}</title>
    ${getPrintCSS()}
</head>
<body>
    ${content}
</body>
</html>
  `;
};