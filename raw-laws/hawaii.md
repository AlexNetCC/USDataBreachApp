---
state: "Hawaii"
state_code: "HI"
jurisdiction_type: "U.S. State"
statute_citation: "H.R.S. § 487N-1 et seq."
statute_title: "Hawaii Security Breach of Personal Information Law"
statute_url: "https://www.capitol.hawaii.gov/hrscurrent/vol11_ch0476-0490/HRS0487N/HRS_0487N-0001.htm"

# ===================================================================
# :: METADATA
# ===================================================================
source_documentation: "State statute analysis and legislative materials"
last_verified: "2025-09-01"
verified_by: "Foley & Lardner LLP"
known_contradictions: false
known_contradictions_description: null
complexity_level: "moderate"

# ===================================================================
# :: LEGISLATIVE HISTORY
# ===================================================================
legislation_bill_1_number: "S.B. 2290"
legislation_bill_1_signed_date: "2006-05-25"
legislation_bill_1_effective_date: "2007-01-01"
legislation_bill_2_number: "S.B. 2402"
legislation_bill_2_signed_date: "2008-04-17"
legislation_bill_2_effective_date: "2008-04-17"

# ===================================================================
# :: BREACH DEFINITION
# ===================================================================
breach_definition_text: "Any unauthorized access to and acquisition of unencrypted or un-redacted records or data containing personal information where illegal use of the personal information has occurred, or is reasonably likely to occur, where such unauthorized access and acquisition creates a risk of harm to a person. Any incident of unauthorized access to and acquisition of encrypted records or data containing personal information along with the confidential process or key constitutes a security breach."
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
risk_of_harm_analysis_is_required: false
risk_of_harm_analysis_can_eliminate_notification: false
risk_of_harm_analysis_standard: "Risk of harm is built into breach definition itself"
risk_of_harm_analysis_documentation_required: false
risk_of_harm_analysis_documentation_retention_years: 0
risk_of_harm_analysis_ag_notification_required: false
risk_of_harm_analysis_ag_notification_threshold: 0
risk_of_harm_analysis_ag_notification_timeline_days: 0

# ===================================================================
# :: INDIVIDUAL NOTIFICATION
# ===================================================================
individual_notification_is_required: true
individual_notification_timeline_days: 0
individual_notification_timeline_description: "Without unreasonable delay, consistent with measures necessary to determine sufficient contact information, determine scope of breach, and restore reasonable integrity, security, and confidentiality of data system"
individual_notification_extensions_available: false
individual_notification_extension_max_days: 0
individual_notification_extension_request_deadline_days: 0
individual_notification_contents:
  - "Date or estimated date of breach"
  - "Description of information involved"
  - "Contact information for the entity"
  - "The incident in general terms"
  - "Type of personal information subject to unauthorized access and acquisition"
  - "General acts of entity to protect personal information from further unauthorized access"
  - "Telephone number person may call for further information and assistance, if one exists"
  - "Advice directing person to remain vigilant by reviewing account statements and monitoring free credit reports"
individual_notification_methods:
  - "Written notice to the last available address the entity has on record"
  - "Telephonic notice, provided that contact is made directly with affected persons"
  - "Email notice, if valid email address exists and person has agreed to electronic communications consistent with 15 U.S.C. § 7001 (E-Sign Act)"

# ===================================================================
# :: SUBSTITUTE NOTIFICATION
# ===================================================================
substitute_notification_is_available: true
substitute_notification_cost_trigger: 100000
substitute_notification_affected_count_trigger: 200000
substitute_notification_insufficient_contact_info_trigger: true
substitute_notification_other_triggers:
  - "If entity is unable to identify particular affected persons"
substitute_notification_methods:
  - "Email notice when entity has email addresses for subject persons"
  - "Conspicuous posting on entity website, if entity maintains one"
  - "Notification to major statewide media"

# ===================================================================
# :: ATTORNEY GENERAL NOTIFICATION
# ===================================================================
ag_notification_is_required: true
ag_notification_threshold: 1000
ag_notification_threshold_description: "If more than 1,000 persons are notified at one time"
ag_notification_timeline_days: 0
ag_notification_timeline_description: "Business shall notify State of Hawaii's Office of Consumer Protection of timing, content, and distribution of notice"
ag_notification_recipients: "State of Hawaii Office of Consumer Protection"
ag_notification_contents:
  - "Timing, content, and distribution of notice"

# ===================================================================
# :: CONSUMER REPORTING AGENCY NOTIFICATION
# ===================================================================
cra_notification_is_required: true
cra_notification_threshold: 1000
cra_notification_threshold_description: "If more than 1,000 persons are notified at one time"
cra_notification_timeline_days: 0
cra_notification_timeline_description: "Without unreasonable delay"
cra_notification_recipients: "All consumer reporting agencies that compile and maintain files on consumers on nationwide basis"
cra_notification_contents:
  - "Timing, distribution, and content of the notices"

# ===================================================================
# :: VENDOR NOTIFICATION (Third-Party Data Processors)
# ===================================================================
vendor_notification_is_required: true
vendor_notification_timeline_days: 0
vendor_notification_timeline_description: "Immediately following discovery of breach"
owner_liability_for_vendor_failure: "Third-party agent must comply with immediate notification requirement"
vendor_cooperation_required: false

# ===================================================================
# :: EXEMPTIONS
# ===================================================================
exemption_hipaa: true
exemption_hipaa_description: "Provider of health care, health care service plan, health insurer, or covered entity governed by HIPAA medical privacy and security rules deemed in compliance"
exemption_glba: false
exemption_glba_description: null
exemption_primary_regulator: true
exemption_primary_regulator_description: "Financial institution subject to and in compliance with Federal Interagency Guidance Response Programs for Unauthorized Access to Customer Information (issued March 7, 2005, by Federal Reserve, FDIC, OCC, OTS) and revisions deemed in compliance"
exemption_own_notification_policy: false
exemption_own_notification_policy_description: null
exemption_other_description: null

# ===================================================================
# :: ENFORCEMENT
# ===================================================================
enforcement_private_right_of_action: true
enforcement_authority: "Attorney General and private individuals"
enforcement_authority_is_exclusive: false
enforcement_type_damages_description: "Actual damages recoverable by injured party"

# ===================================================================
# :: PENALTIES
# ===================================================================
enforcement_penalty_per_day: 0
enforcement_penalty_per_individual: 0
enforcement_penalty_per_record: 0
enforcement_penalty_per_violation: 2500
enforcement_penalty_flat_amount: 0
enforcement_penalty_maximum: 0
enforcement_penalty_basis: null
enforcement_penalty_notes: "$2,500 per violation"

# ===================================================================
# :: SPECIAL PROVISIONS
# ===================================================================
provision_law_enforcement_delay: true
provision_law_enforcement_delay_description: "Notice may be delayed if law enforcement agency determines notice will impede criminal investigation or jeopardize national security and requests delay in writing or entity documents request contemporaneously including name of officer and agency. Notice provided without unreasonable delay after law enforcement determines it will no longer impede investigation."
provision_government_entities_are_subject: true
provision_government_entities_notes: "Government agency shall submit written report to legislature within 20 days after discovery of breach detailing: nature of breach, number of individuals affected, copy of breach notice, number of individuals notified, whether notice delayed due to law enforcement, and procedures to prevent recurrence"
provision_waiver_not_permitted: true
provision_notice_at_collection_required: false
provision_other_description: "Government agency reporting requirement: Government agency shall submit written report to legislature within 20 days after discovery of breach."

# ===================================================================
# :: OBSIDIAN TAGS
# ===================================================================
tags:
  - DataBreachLaws/Breach/trigger/acquisition
  - DataBreachLaws/Exempts/federal-regulator
  - DataBreachLaws/Exempts/hipaa
  - DataBreachLaws/Notice/AG/required/threshold/1000
  - DataBreachLaws/Notice/AG/required/timing/asap
  - DataBreachLaws/Notice/AG/Shame-Site
  - DataBreachLaws/Notice/CRA/required/threshold/1000
  - DataBreachLaws/Notice/Consumer/asap
  - DataBreachLaws/PII/financial-accounts
  - DataBreachLaws/RiskOfHarm/allowed
---

# Hawaii Data Breach Notification Law

## Overview
- **Statutory Citation:** `H.R.S. § 487N-1 et seq.`
- **Statute Title:** [Hawaii Security Breach of Personal Information Law](https://www.capitol.hawaii.gov/hrscurrent/vol11_ch0476-0490/HRS0487N/HRS_0487N-0001.htm)
- **Jurisdiction Type:** U.S. State
- **Legislative History:**
  - **Original Legislation:** S.B. 2290 (signed May 25, 2006 as Act 135, effective January 1, 2007)
  - **Major Amendments:**
    - S.B. 2402 (signed April 17, 2008 as Act 19, effective April 17, 2008)
  - **Last Verified:** September 2025

## Application & Covered Entities
Applies to any commercial or legal entity, or any government agency that collects personal information for specific government purposes that owns or licenses personal information of residents of Hawaii in any form (whether computerized, paper, or otherwise). Includes governmental agencies.

## Key Definitions

### Personal Information
An individual's first name or first initial and last name in combination with any one or more of the following data elements:
- Social Security number
- Driver's license number or state identification card number
- Account number, credit card number, debit card number, access code, or password that would permit access to an individual's financial account

### Exclusions
Personal information does not include publicly available information that is lawfully made available to the general public from federal, state, or local government records.

### Security Breach Definition
Any unauthorized access to and acquisition of unencrypted or un-redacted records or data containing personal information where illegal use of the personal information has occurred, or is reasonably likely to occur, where such unauthorized access and acquisition creates a risk of harm to a person.

**Encrypted Data Exception:** Any incident of unauthorized access to and acquisition of encrypted records or data containing personal information along with the confidential process or key constitutes a security breach.

### Good-Faith Exception
Good-faith acquisition of personal information by an employee or agent of an entity for a legitimate purpose is not a security breach, provided that the personal information is not used for a purpose other than a lawful purpose of the business and is not subject to further unauthorized disclosure.

## Notification Requirements & Triggers

### Notification Obligation
An entity shall provide notice to the affected person of a security breach following discovery or notification of the breach.

### Timing of Notification
Without unreasonable delay, consistent with any measures necessary to determine sufficient contact information, determine the scope of the breach, and restore the reasonable integrity, security, and confidentiality of the data system.

### Notification Methods
Notice may be provided by one of the following methods:
- Written notice to the last available address the entity has on record
- Telephonic notice, provided that contact is made directly with the affected persons
- Email notice, for those persons for whom an entity has a valid email address and who have agreed to receive communications electronically if the notice provided is consistent with 15 U.S.C. § 7001 (E-Sign Act)

### Notice Content
The notice shall be clear and conspicuous and shall include a description of the following:
- The incident in general terms
- Type of personal information subject to the unauthorized access and acquisition
- The general acts of the entity to protect the personal information from further unauthorized access
- A telephone number that the person may call for further information and assistance, if one exists
- Advice that directs the person to remain vigilant by reviewing account statements and monitoring free credit reports

### Attorney General/Agency Notification
If more than **1,000** persons are notified at one time, the business shall notify the State of Hawaii's Office of Consumer Protection of the timing, content, and distribution of the notice.

### Notification to Consumer Reporting Agencies
If more than **1,000** persons are notified at one time, the entity shall notify in writing, without unreasonable delay, all consumer reporting agencies that compile and maintain files on consumers on a nationwide basis of the timing, distribution, and content of the notice.

### Third-Party Data Notification
Any business located in Hawaii or any business that conducts business in Hawaii that maintains or possesses records or data containing personal information of residents of Hawaii that the business does not own or license shall notify the owner or licensee of the personal information of any security breach immediately following discovery of the breach.

### Substitute Notice Available
If the entity demonstrates that:
- The cost of providing notice would exceed **$100,000**, OR
- The affected class of persons to be notified exceeds **200,000**, OR
- The entity does not have sufficient contact information or consent (for only those affected persons without sufficient contact information or consent), OR
- The entity is unable to identify particular affected persons (for only those unidentifiable affected persons)

Substitute notice shall consist of all the following:
- Email notice when the entity has email addresses for the subject persons
- Conspicuous posting of the notice on the entity's website, if the entity maintains one
- Notification to major statewide media

## Exemptions, Penalties, and Other Provisions

### Encryption Safe Harbor
The law provides a safe harbor for encrypted or redacted data, unless the encryption key or confidential process was also acquired.

### Federal Interagency Guidance
A financial institution that is subject to and in compliance with the Federal Interagency Guidance Response Programs for Unauthorized Access to Customer Information and Customer Notice, issued on March 7, 2005, by the Board of Governors of the Federal Reserve System, the Federal Deposit Insurance Corporation, the Office of the Comptroller of the Currency, and the Office of Thrift Supervision, and any revisions, additions, or substitutions relating to said interagency guidance, shall be deemed to be in compliance.

### HIPAA-Covered Entities
A provider of health care, health care service plan, health insurer, or a covered entity governed by the medical privacy and security rules issued by the federal Department of Health and Human Services pursuant to the Health Insurance Portability and Accountability Act of 1996 (HIPAA) shall be deemed in compliance with this chapter.

### Penalties
Any entity that violates any provisions of the statute is subject to penalties of not more than **$2,500 for each violation**.

### Private Right of Action
Explicitly granted by the statute. An injured party may bring an action to recover actual damages.

## Key Provisions

### Delay for Law Enforcement
Notice may be delayed if a law enforcement agency determines that the notice will impede a criminal investigation or jeopardize national security and requests a delay; provided that such request is made in writing, or the entity documents the request contemporaneously in writing, including the name of the law enforcement officer making the request and the officer's law enforcement agency engaged in the investigation. The notice shall be provided without unreasonable delay after the law enforcement agency communicates to the entity its determination that notice will no longer impede the investigation or jeopardize national security.

### Government Agency Reporting
A government agency shall submit a written report to the legislature within **20 days** after discovery of a security breach at the government agency that details:
- Information relating to the nature of the breach
- The number of individuals affected by the breach
- A copy of the notice of security breach that was issued
- The number of individuals to whom the notice was sent
- Whether the notice was delayed due to law enforcement considerations
- Any procedures that have been implemented to prevent the breach from reoccurring

### Waiver Not Permitted
Entities cannot waive compliance with this statute.

### Private Right of Action
Hawaii is one of the few states that explicitly grants a private right of action, allowing injured parties to bring actions to recover actual damages.
