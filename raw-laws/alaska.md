---
# ===================================================================
# :: CORE INFORMATION
# ===================================================================
state: "Alaska"
state_code: "AK"
jurisdiction_type: "U.S. State"
statute_citation: "Alaska Stat. § 45.48.010 et seq."
statute_title: "Alaska Personal Information Protection Act"
statute_url: "http://www.akleg.gov/basis/statutes.asp"

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
legislation_bill_1_number: "H.B. 65"
legislation_bill_1_signed_date: "2008-06-13"
legislation_bill_1_effective_date: "2009-07-01"

# ===================================================================
# :: BREACH DEFINITION
# ===================================================================
breach_definition_text: "An unauthorized acquisition or reasonable belief of unauthorized acquisition of personal information that compromises the security, confidentiality, or integrity of the PI maintained by the Entity. Acquisition includes acquisition by photocopying, facsimile, or other paper-based method; a device, including a computer, that can read, write, or store information that is represented in numerical form; or a method not identified in these paragraphs."
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
risk_of_harm_analysis_standard: "Notification is not required if, after an appropriate investigation and after written notification to the state Attorney General, the Entity determines that there is not a reasonable likelihood that harm has resulted or will result from the breach."
risk_of_harm_analysis_documentation_required: true
risk_of_harm_analysis_documentation_retention_years: 5
risk_of_harm_analysis_ag_notification_required: false
risk_of_harm_analysis_ag_notification_threshold: 0
risk_of_harm_analysis_ag_notification_timeline_days: 0

# ===================================================================
# :: INDIVIDUAL NOTIFICATION
# ===================================================================
individual_notification_is_required: true
individual_notification_timeline_days: 0
individual_notification_timeline_description: "Most expeditious time possible and without unreasonable delay, consistent with measures necessary to determine scope of breach and restore reasonable integrity of information system"
individual_notification_extensions_available: false
individual_notification_extension_max_days: 0
individual_notification_extension_request_deadline_days: 0
individual_notification_contents:
  - "Date or estimated date of breach"
  - "Description of information involved"
  - "Contact information for the entity"
individual_notification_methods:
  - "Written notice to the most recent address the Entity has"
  - "Telephonic notice"
  - "Electronic notice, if the Entity's primary method of communication with the Alaska resident is by electronic means or is consistent with the E-Sign Act (15 U.S.C. § 7001)"

# ===================================================================
# :: SUBSTITUTE NOTIFICATION
# ===================================================================
substitute_notification_is_available: true
substitute_notification_cost_trigger: 150000
substitute_notification_affected_count_trigger: 300000
substitute_notification_insufficient_contact_info_trigger: true
substitute_notification_other_triggers: []
substitute_notification_methods:
  - "Email notice, if the Entity has email addresses for the state resident"
  - "Conspicuous posting on Entity website, if Entity maintains one"
  - "Notification to major statewide media"

# ===================================================================
# :: ATTORNEY GENERAL NOTIFICATION
# ===================================================================
ag_notification_is_required: false
ag_notification_threshold: null
ag_notification_threshold_description: "No general requirement to notify the Attorney General for typical breaches; written notification required only to invoke the no reasonable likelihood of harm exception"
ag_notification_timeline_days: null
ag_notification_timeline_description: null
ag_notification_recipients: null
ag_notification_contents: []

# ===================================================================
# :: CONSUMER REPORTING AGENCY NOTIFICATION
# ===================================================================
cra_notification_is_required: true
cra_notification_threshold: 1000
cra_notification_threshold_description: "Required if 1,000 or more Alaska residents affected"
cra_notification_timeline_days: 0
cra_notification_timeline_description: "Without unreasonable delay"
cra_notification_recipients: null
cra_notification_contents:
  - "Timing, distribution, and content of the notices to Alaska residents"
  - "Approximate number of affected persons"

# ===================================================================
# :: VENDOR NOTIFICATION (Third-Party Data Processors)
# ===================================================================
vendor_notification_is_required: true
vendor_notification_timeline_days: 0
vendor_notification_timeline_description: "As soon as practicable; must notify Entity that owns or licensed the PI about the breach and cooperate as necessary"
owner_liability_for_vendor_failure: "Third-party agent must cooperate with owner/licensee to comply with statute"
vendor_cooperation_required: true

# ===================================================================
# :: EXEMPTIONS
# ===================================================================
exemption_hipaa: false
exemption_hipaa_description: null
exemption_glba: true
exemption_glba_description: "Gramm-Leach-Bliley Act entities exempt; also exempt from CRA notification requirement"
exemption_primary_regulator: false
exemption_primary_regulator_description: null
exemption_own_notification_policy: false
exemption_own_notification_policy_description: null
exemption_other_description: null

# ===================================================================
# :: ENFORCEMENT
# ===================================================================
enforcement_private_right_of_action: true
enforcement_authority: "Attorney General and private individuals"
enforcement_authority_is_exclusive: false
enforcement_type_damages_description: "Person injured by breach may bring action against non-governmental Entity"

# ===================================================================
# :: PENALTIES
# ===================================================================
enforcement_penalty_per_day: 0
enforcement_penalty_per_individual: 500
enforcement_penalty_per_record: 0
enforcement_penalty_per_violation: 0
enforcement_penalty_flat_amount: 0
enforcement_penalty_maximum: 50000
enforcement_penalty_basis: "Per breach"
enforcement_penalty_notes: null

# ===================================================================
# :: SPECIAL PROVISIONS
# ===================================================================
provision_law_enforcement_delay: true
provision_law_enforcement_delay_description: "Notice may be delayed if law enforcement agency determines that notice will impede a criminal investigation"
provision_government_entities_are_subject: true
provision_government_entities_notes: "Excepting the judicial branch"
provision_waiver_not_permitted: true
provision_notice_at_collection_required: false
provision_other_description: null

# ===================================================================
# :: OBSIDIAN TAGS
# ===================================================================
tags:
  - DataBreachLaws/Breach/trigger/acquisition
  - DataBreachLaws/Exempts/glba
  - DataBreachLaws/Notice/AG/not-required
  - DataBreachLaws/Notice/CRA/required/threshold/1000
  - DataBreachLaws/Notice/Consumer/asap
  - DataBreachLaws/PII/financial-accounts
  - DataBreachLaws/RiskOfHarm/allowed
---

# Alaska Data Breach Notification Law

## Overview
- **Statutory Citation:** `Alaska Stat. § 45.48.010 et seq.`
- **Statute Title:** [Alaska Personal Information Protection Act](http://www.akleg.gov/basis/statutes.asp)
- **Jurisdiction Type:** U.S. State
- **Legislative History:**
  - **Original Legislation:** H.B. 65 (signed into law June 13, 2008)
  - **Effective Date:** July 1, 2009
  - **Last Verified:** September 2025

## Application & Covered Entities
Applies to any person doing business, governmental agency (excepting the judicial branch), or person with more than 10 employees that owns or licenses personal information in any form that includes PI of an Alaska resident.

## Key Definitions

### Personal Information
Information in any form on an individual that is not encrypted or redacted, or is encrypted and the encryption key has been accessed or acquired, and that consists of a combination of an individual's first name or first initial and last name in combination with any one or more of the following data elements:
- Social Security number
- Driver's license number or state identification card number
- Account number, credit card number, or debit card number (except if these can only be accessed with a personal code, then the account, credit card, or debit card number in combination with any required security code, access code, or password)
- Passwords, personal identification numbers, or other access codes for financial accounts

### Breach of Security
An unauthorized acquisition or reasonable belief of unauthorized acquisition of personal information that compromises the security, confidentiality, or integrity of the PI maintained by the Entity. Acquisition includes acquisition by photocopying, facsimile, or other paper-based method; a device, including a computer, that can read, write, or store information that is represented in numerical form; or a method not identified in these paragraphs.

### Exceptions to Breach Definition
- Good-faith acquisition of PI by an employee or agent of the Entity for a legitimate purpose of the Entity is not a breach if the employee or agent does not use the PI for a purpose unrelated to a legitimate purpose of the Entity and does not make further unauthorized disclosure of the PI

## Notification Requirements & Triggers

### Risk of Harm Standard
Notification is not required if, after an appropriate investigation and after written notification to the state Attorney General, the Entity determines that there is **not a reasonable likelihood that harm has resulted or will result from the breach**. The determination shall be documented in writing and the documentation shall be maintained for **5 years**.

### Timing of Notice to Individuals
Notification shall be made in the **most expeditious time possible and without unreasonable delay** consistent with any measures necessary to determine the scope of the breach and to restore the reasonable integrity of the information system.

### Content of Notice to Individuals
The notice must include:
- Date or estimated date of breach
- Description of information involved
- Contact information for the entity

### Method of Notice to Individuals
Notice may be provided by one of the following methods:
- Written notice to the most recent address the Entity has
- Telephonic notice
- Electronic notice, if the Entity's primary method of communication with the Alaska resident is by electronic means or is consistent with the E-Sign Act (15 U.S.C. § 7001)

### Substitute Notice Available
If the Entity can demonstrate that:
- The cost of providing notice will exceed **$150,000**, OR
- The affected class of persons to be notified exceeds **300,000**, OR
- The Entity does not have sufficient contact information to provide notice

Substitute notice shall consist of all of the following:
- Email notice, if the Entity has email addresses for the state resident subject to the notice
- Conspicuous posting of the notice on the website of the Entity, if the Entity maintains one
- Notification to major statewide media

### Attorney General Notification
**Requirement:** No general requirement to notify the Attorney General, but **written notification is required** to invoke the "no reasonable likelihood of harm" exception.

### Consumer Reporting Agency Notice
- Required if an Entity is required to notify **more than 1,000** Alaska residents of a breach
- The Entity shall notify without unreasonable delay all nationwide consumer credit reporting agencies of the timing, distribution, and content of the notices to Alaska residents
- **Exception:** Entities subject to the Gramm-Leach-Bliley Act are exempt from this requirement

### Third-Party Data Notification
- If an Entity experiences a breach of the security of PI on an Alaska resident that the Entity does not own or license, the Entity shall notify the Entity that owns or licensed the use of the PI about the breach and cooperate as necessary to allow compliance with the statute

## Exemptions, Penalties, and Other Provisions

### Encryption Safe Harbor
The law provides a safe harbor for data that is encrypted or redacted, provided the encryption key was not also acquired.

### Regulatory Exemptions
- The statute does not apply to an entity that is subject to the Gramm-Leach-Bliley Act (GLBA)

### Penalties
Violations are considered an unfair trade practice. Entities have specific civil penalty liability:
- Governmental agencies are liable to the state for a civil penalty of up to **$500 for each state resident who was not notified** (the total penalty may not exceed **$50,000**) and may be enjoined from further violations
- Non-governmental entities are liable to the state for a civil penalty of up to **$500 for each state resident who was not notified** (the total civil penalty may not exceed **$50,000**)

### Private Right of Action
Explicitly granted by the statute. A person injured by a breach may bring an action against a non-governmental Entity.

## Key Provisions

### Delay for Law Enforcement
Notice may be delayed if a law enforcement agency determines that the notice will impede a criminal investigation. Notice required by the statute must be made after the law enforcement agency determines that notification will no longer impede the investigation.

### Waiver Not Permitted
The statute includes provisions that waiver of notification rights is not permitted.

### Government Entities
Governmental agencies (excepting the judicial branch) are subject to the statute requirements.
