---
state: "California"
state_code: "CA"
jurisdiction_type: "U.S. State"
statute_citation: "Cal. Civ. Code § 1798.82 et seq."
statute_title: "California Data Breach Notification Law"
statute_url: "https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?sectionNum=1798.82.&nodeTreePath=8.4.32&lawCode=CIV"

# ===================================================================
# :: METADATA
# ===================================================================
source_documentation: "State statute analysis and legislative materials"
last_verified: "2025-09-01"
verified_by: "Foley & Lardner LLP"
known_contradictions: false
known_contradictions_description: null
complexity_level: "complex"

# ===================================================================
# :: LEGISLATIVE HISTORY
# ===================================================================
legislation_bill_1_number: "S.B. 1386"
legislation_bill_1_signed_date: "2002-09-25"
legislation_bill_1_effective_date: "2003-07-01"
legislation_bill_2_number: "S.B. 24"
legislation_bill_2_signed_date: "2011-08-31"
legislation_bill_2_effective_date: "2012-01-01"
legislation_bill_3_number: "S.B. 46"
legislation_bill_3_signed_date: "2013-09-27"
legislation_bill_3_effective_date: "2014-01-01"
legislation_bill_4_number: "A.B. 1710"
legislation_bill_4_signed_date: "2014-09-30"
legislation_bill_4_effective_date: "2015-01-01"
legislation_bill_5_number: "A.B. 964, S.B. 570, S.B. 34"
legislation_bill_5_signed_date: "2015-10-06"
legislation_bill_5_effective_date: "2016-01-01"
legislation_bill_6_number: "A.B. 1130"
legislation_bill_6_signed_date: "2019-10-11"
legislation_bill_6_effective_date: "2020-01-01"
legislation_bill_7_number: "S.B. 446"
legislation_bill_7_signed_date: "2025-10-12"
legislation_bill_7_effective_date: "2026-01-01"

# ===================================================================
# :: BREACH DEFINITION
# ===================================================================
breach_definition_text: "Unauthorized acquisition of computerized data that compromises the security, confidentiality, or integrity of personal information maintained by the Entity."
breach_trigger: "unauthorized_acquisition"
breach_access_alone_triggers: false
breach_acquisition_alone_triggers: true

# ===================================================================
# :: ENCRYPTION SAFE HARBOR
# ===================================================================
exemption_encryption_safe_harbor: true
exemption_encryption_safe_harbor_negated_if_key_compromised: true
exemption_encryption_description: null

# ===================================================================
# :: RISK OF HARM ANALYSIS
# ===================================================================
risk_of_harm_analysis_is_required: true
risk_of_harm_analysis_can_eliminate_notification: true
risk_of_harm_analysis_standard: "None for general breach law; notification triggered by unauthorized acquisition itself. For medical information statute, notification not required if risk assessment shows low probability medical information compromised."
risk_of_harm_analysis_documentation_required: false
risk_of_harm_analysis_documentation_retention_years: 0
risk_of_harm_analysis_ag_notification_required: false
risk_of_harm_analysis_ag_notification_threshold: 0
risk_of_harm_analysis_ag_notification_timeline_days: 0

# ===================================================================
# :: INDIVIDUAL NOTIFICATION
# ===================================================================
individual_notification_is_required: true
individual_notification_timeline_days: 30
individual_notification_timeline_description: "Disclosure to affected individuals must be made within 30 calendar days of discovery or notification of the data breach. Entity may delay disclosure to accommodate legitimate needs of law enforcement or as necessary to determine scope of breach and restore reasonable integrity of data system."
individual_notification_extensions_available: false
individual_notification_extension_max_days: 0
individual_notification_extension_request_deadline_days: 0
individual_notification_contents:
  - "The date of the notice"
  - "Name and contact information of the reporting person or Entity"
  - "Type of personal information subject to the unauthorized access and acquisition"
  - "The date, estimated date, or date range during which the breach occurred, if it can be determined"
  - "Whether notification was delayed as a result of law enforcement investigation, if that can be determined"
  - "A general description of the breach incident, if that information is possible to determine at the time the notice is provided"
  - "The toll-free telephone numbers and addresses of the major credit reporting agencies if the breach exposed a Social Security number or a driver's license or state identification card number"
individual_notification_methods:
  - "Written notice"
  - "Electronic notice (if E-Sign Act compliant)"

# ===================================================================
# :: SUBSTITUTE NOTIFICATION
# ===================================================================
substitute_notification_is_available: true
substitute_notification_cost_trigger: 250000
substitute_notification_affected_count_trigger: 500000
substitute_notification_insufficient_contact_info_trigger: true
substitute_notification_other_triggers: []
substitute_notification_methods:
  - "Email notice when Entity has email addresses for subject persons"
  - "Conspicuous posting for at least 30 days on Entity website (link on home page in larger/contrasting type or set off by symbols)"
  - "Notification to major statewide media"

# ===================================================================
# :: ATTORNEY GENERAL NOTIFICATION
# ===================================================================
ag_notification_is_required: true
ag_notification_threshold: 500
ag_notification_threshold_description: "If Entity required to notify more than 500 California residents"
ag_notification_timeline_days: 15
ag_notification_timeline_description: "Entity shall electronically submit single sample copy of notification (excluding personally identifiable information) to Attorney General within 15 calendar days of notifying affected consumers"
ag_notification_recipients: "Attorney General; California Department of Public Health (for medical information breaches)"
ag_notification_contents:
  - "Single sample copy of the notification (excluding personally identifiable information)"
  - "Submission must be electronic and within 15 calendar days of notifying affected consumers"
  - "For medical information breaches, must also notify California Department of Public Health within 15 calendar days of discovery"

# ===================================================================
# :: CONSUMER REPORTING AGENCY NOTIFICATION
# ===================================================================
cra_notification_is_required: false
cra_notification_threshold: null
cra_notification_threshold_description: "No CRA notification required"
cra_notification_timeline_days: null
cra_notification_timeline_description: null
cra_notification_recipients: null
cra_notification_contents: []

# ===================================================================
# :: VENDOR NOTIFICATION (Third-Party Data Processors)
# ===================================================================
vendor_notification_is_required: true
vendor_notification_timeline_days: 0
vendor_notification_timeline_description: "Immediately following discovery if personal information was, or is reasonably believed to have been, acquired by unauthorized person"
owner_liability_for_vendor_failure: "Third-party agent must comply with notification requirements"
vendor_cooperation_required: false

# ===================================================================
# :: EXEMPTIONS
# ===================================================================
exemption_hipaa: true
exemption_hipaa_description: "Covered entities under HIPAA deemed compliant if complying with Section 13402(f) of HITECH Act; covered entities not otherwise exempt"
exemption_glba: false
exemption_glba_description: null
exemption_primary_regulator: false
exemption_primary_regulator_description: null
exemption_own_notification_policy: true
exemption_own_notification_policy_description: "Entity with own notification procedures consistent with timing requirements"
exemption_other_description: null

# ===================================================================
# :: ENFORCEMENT
# ===================================================================
enforcement_private_right_of_action: true
enforcement_authority: "Attorney General and private individuals"
enforcement_authority_is_exclusive: false
enforcement_type_damages_description: "Civil actions and injunctive relief. Private right of action allows recovery of damages. Business may be enjoined for violation, proposed violation, or past violation."

# ===================================================================
# :: PENALTIES
# ===================================================================
enforcement_penalty_per_day: 0
enforcement_penalty_per_individual: 0
enforcement_penalty_per_record: 0
enforcement_penalty_per_violation: 0
enforcement_penalty_flat_amount: 0
enforcement_penalty_maximum: 0
enforcement_penalty_basis: null
enforcement_penalty_notes: "Specific penalty amounts not defined in data breach statute; private right of action allows recovery of actual damages"

# ===================================================================
# :: SPECIAL PROVISIONS
# ===================================================================
provision_law_enforcement_delay: true
provision_law_enforcement_delay_description: "Notification may be delayed if law enforcement agency determines notification will impede criminal investigation. Notification shall be made promptly after law enforcement determines it will not compromise investigation."
provision_government_entities_are_subject: true
provision_government_entities_notes: "State agencies using substitute notice must notify California Office of Information Security within Department of Technology"
provision_waiver_not_permitted: true
provision_notice_at_collection_required: false
provision_other_description: "Credit monitoring required (12 months at no cost) if Entity was source of breach and breach exposed or may have exposed Social Security numbers or covered government identification. Notice must use title 'Notice of Data Breach' with specific headings in minimum 10-point font. For online account credentials, must direct residents to change password/security question. For email account credentials, notice may not be provided to breached email address. Medical information breaches must notify California Department of Public Health within 15 calendar days."

# ===================================================================
# :: OBSIDIAN TAGS
# ===================================================================
tags:
  - DataBreachLaws/Breach/trigger/acquisition
  - DataBreachLaws/Exempts/hipaa
  - DataBreachLaws/Exempts/own-policy
  - DataBreachLaws/Notice/AG/required/threshold/500
  - DataBreachLaws/Notice/AG/required/timing/after-consumer
  - DataBreachLaws/Notice/AG/Shame-Site
  - DataBreachLaws/Notice/CRA/not-required
  - DataBreachLaws/Notice/Consumer/30days
  - DataBreachLaws/PII/biometric
  - DataBreachLaws/PII/financial-accounts
  - DataBreachLaws/PII/genetic
  - DataBreachLaws/PII/government-id
  - DataBreachLaws/PII/health-info
  - DataBreachLaws/PII/license-plate-recognition
  - DataBreachLaws/PII/online-account-credentials
  - DataBreachLaws/PII/taxpayer-id
  
  - DataBreachLaws/RiskOfHarm/allowed/medical-only
  - DataBreachLaws/special-provision/credit-monitoring-required
---
# California Data Breach Notification Law

## Overview
- **Statutory Citations:** `Cal. Civ. Code § 1798.82 et seq.` (General Breach); `Cal. Civ. Code § 1798.29` (Privacy statute); `Cal. Health & Safety Code § 1280.15` (Medical Information)
- **Statute Title:** [California Data Breach Notification Law](https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?sectionNum=1798.82.&nodeTreePath=8.4.32&lawCode=CIV)
- **Jurisdiction Type:** U.S. State
- **Legislative History:**
  - **Original Legislation:** S.B. 1386 (signed September 25, 2002, effective July 1, 2003)
  - **Major Amendments:**
    - S.B. 24 (signed August 31, 2011, effective January 1, 2012)
    - S.B. 46 (signed September 27, 2013, effective January 1, 2014)
    - A.B. 1710 (signed September 30, 2014, effective January 1, 2015)
    - A.B. 964, S.B. 570, S.B. 34 (signed October 6, 2015, effective January 1, 2016)
    - A.B. 1130 (signed October 11, 2019, effective January 1, 2020)
    - S.B. 446 (signed October 12, 2025, effective January 1, 2026)
  - **Last Verified:** September 2025

## Application & Covered Entities
Applies to any person, business, or state agency that does business in California and owns or licenses computerized data that contains personal information.

## Key Definitions

### Personal Information (Category 1)
An individual's first name or first initial and last name in combination with any one or more of the following data elements, **when either the name or the data elements are not encrypted** (meaning rendered unusable, unreadable, or indecipherable to an unauthorized person through a security technology or methodology generally accepted in the field of information security):
- Social Security number
- Driver's license number or California state identification card number, tax identification number, passport number, military identification number, or other unique identification number issued on a government document commonly used to verify the identity of a specific individual
- Account number, credit card number, or debit card number in combination with any required security code, access code, or password that would permit access to an individual's financial account
- Medical information (any information regarding an individual's medical history, mental or physical condition, or medical treatment or diagnosis by a health care professional)
- Health insurance information (an individual's health insurance policy number or subscriber identification number, any unique identifier used by a health insurer to identify the individual, or any information in an individual's application and claims history, including any appeals records)
- Information or data collected through the use or operation of an automated license plate recognition system (a searchable computerized database resulting from the operation of one or more mobile or fixed cameras combined with computer algorithms)
- Biometric data (generated from measurements or technical analysis of human body characteristics, e.g., fingerprint, retina, or iris image)
- Genetic data (data that results from the analysis of a biological sample of an individual, or from another source enabling equivalent information to be obtained, concerning genetic material)

### Personal Information (Category 2)
A username or email address in combination with a password or security question and answer that would permit access to an online account.

### Exclusions
Personal information does not include publicly available information that is lawfully made available to the general public from federal, state, or local government records.

### Breach of Security
Unauthorized acquisition of computerized data that compromises the security, confidentiality, or integrity of personal information maintained by the Entity.

### Good-Faith Exception
Good-faith acquisition of personal information by an employee or agent of the Entity for the purposes of the Entity is not a breach of the security of the system, provided that the personal information is not used or subject to further unauthorized disclosure.

## Notification Requirements & Triggers

### Risk of Harm Standard
**For General Breach:** None. Notification is triggered by the unauthorized acquisition itself.

**For Medical Information:** Notification is not required if a risk assessment shows a low probability that medical information has been compromised.

### Timing of Notification to Individuals
Disclosure to affected individuals must be made **within 30 calendar days** of discovery or notification of the data breach. The Entity may delay the disclosure to accommodate the legitimate needs of law enforcement, or as necessary to determine the scope of the breach and restore the reasonable integrity of the data system.

### Notification Methods
Notice may be provided by one of the following methods:
- Written notice
- Electronic notice, if the notice provided is consistent with the provisions regarding electronic records and signatures set forth in 15 U.S.C. § 7001 (E-Sign Act)

### Content of Notice to Individuals
The notice shall be written in plain language and shall include a description of:
- The date of the notice
- Name and contact information of the reporting person or Entity
- Type of personal information subject to the unauthorized access and acquisition
- The date, estimated date, or date range during which the breach occurred, if it can be determined
- Whether notification was delayed as a result of law enforcement investigation, if that can be determined
- A general description of the breach incident, if that information is possible to determine at the time the notice is provided
- The toll-free telephone numbers and addresses of the major credit reporting agencies if the breach exposed a Social Security number or a driver's license or state identification card number

### Optional Content
At the Entity's discretion, the notice may also include:
- Information about what the Entity has done to protect individuals whose information has been breached
- Advice on steps that the person whose information was breached may take to protect themselves

### Notice Format and Display
The notice shall be titled **"Notice of Data Breach,"** and shall provide the information above under the headings:
- "What Happened"
- "What Information Was Involved"
- "What We Are Doing"
- "What You Can Do"
- "More Information"

The notice shall be formatted to call attention to the nature and significance of the information it contains, shall **clearly and conspicuously display the title and headings**, and shall **not contain text smaller than 10-point type**. (A model security breach notification form is provided in the statute.)

### Special Notice Requirements for Account Credentials
**For Online Account Credentials:** Notice may be provided in electronic or other form and should direct California residents to:
- Promptly change their password, security question or answer, or
- Take other appropriate steps to protect the online account with the Entity and all other online accounts with the same username or email address and password or security question or answer

**For Email Account Credentials:** For breaches of login credentials for an email account furnished by the Entity, notice may not be provided to the breached email address, but may be provided via methods otherwise permitted, or via clear and conspicuous notice delivered to the California resident online when the California resident is connected to the online account from an IP address or online location from which the Entity knows the California resident customarily accesses the account.

### Credit Monitoring Services
If the person or business offers credit monitoring or identity theft prevention and mitigation services, the services must be provided at **no cost to the affected person for not less than 12 months**, and all information necessary to take advantage of the offer must be provided in the notice.

**Applies only if:**
- The person providing notice was the source of the breach, AND
- The breach exposed or may have exposed personal information involving Social Security numbers or covered forms of government identification (driver's license, state identification card numbers, tax identification number, passport number, military identification number, or other unique identification number issued on a government document commonly used to verify the identity of a specific individual)

### Substitute Notice Available
If the Entity demonstrates that:
- The cost of providing notice would exceed **$250,000**, OR
- The affected class of subject persons to be notified exceeds **500,000**, OR
- The Entity does not have sufficient contact information

Substitute notice shall consist of **all** of the following:
- Email notice when the Entity has email addresses for the subject persons
- Conspicuous posting for at least **30 days** of the notice on the Entity's website, if the Entity maintains one (meaning providing a link to the notice on the home page or first significant page after entering the website that is in larger type than the surrounding text, or in contrasting type, font, or color to the surrounding text of the same size, or set off from the surrounding text of the same size by symbols or other marks that call attention to the link)
- Notification to major statewide media

**State Agency Note:** State agencies using substitute notice must also notify the California Office of Information Security within the Department of Technology.

### Attorney General Notification
**Requirement:** Required if an Entity is required to notify more than **500** California residents.

**Method & Timing:** The Entity shall electronically submit a single sample copy of the notification, excluding any personally identifiable information, to the Attorney General. Submission of the sample copy of the notification to the Attorney General must be made **within 15 calendar days** of notifying affected consumers of the security breach.

**Medical Information:** For breaches of medical information, notice must be sent to the California Department of Public Health within **15 calendar days** of discovery.

### Third-Party Data Notification
If an Entity maintains computerized data that includes personal information that the Entity does not own, the Entity must notify the owner or licensee of the information of any breach of the security of the data **immediately** following discovery if the personal information was, or is reasonably believed to have been, acquired by an unauthorized person.

## Exemptions, Penalties, and Other Provisions

### Encryption Safe Harbor
The law provides a safe harbor for encrypted data, unless the encryption key was also acquired.

### Own Notification Policy Exemption
An Entity that maintains its own notification procedures as part of an information security policy for the treatment of personal information and is otherwise consistent with the timing requirements of the statute shall be deemed in compliance with the notification requirements if it notifies subject persons in accordance with its policies.

### HIPAA Exemption
A covered entity under HIPAA will be deemed to have complied with the individual notice content requirements in this state law if it has complied with the individual notice content requirements in Section 13402(f) of the HITECH Act. Covered entities are not otherwise exempt from the statute's requirements.

### Penalties and Private Right of Action
Violations may result in civil actions and injunctive relief. Private right of action is explicitly granted by the statute. Any customer injured by a violation may institute a civil action to recover damages. In addition, any business that violates, proposes to violate, or has violated this title may be enjoined.

### Waiver Not Permitted
The statute provides explicit provisions that waiver of notification rights is not permitted.

## Key Provisions

### Delay for Law Enforcement
Notification may be delayed if the law enforcement agency determines that the notice will impede a criminal investigation. The notification required by the statute shall be made promptly after the law enforcement agency determines that it will not compromise the investigation.

### Attorney General Enforcement
Attorney General enforcement is available.
