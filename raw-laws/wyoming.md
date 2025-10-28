---
# ===================================================================
# :: CORE INFORMATION
# ===================================================================
state: "Wyoming"
state_code: "WY"
jurisdiction_type: "U.S. State"
statute_citation: "Wyo. Stat. § 40-12-501 et seq."
statute_title: "Wyoming Data Breach Notification"
statute_url: "https://wyoleg.gov/NXT/gateway.dll?f=templates&fn=default.htm"

# ===================================================================
# :: METADATA
# ===================================================================
source_documentation: "State statute analysis and legislative materials"
last_verified: "2025-09-01"
verified_by: "Foley & Lardner LLP"
known_contradictions: false
known_contradictions_description: null
complexity_level: "high"

# ===================================================================
# :: LEGISLATIVE HISTORY
# ===================================================================
legislation_bill_1_number: "H.B. 42"
legislation_bill_1_signed_date: "2007-02-13"
legislation_bill_1_effective_date: "2007-07-01"
legislation_bill_2_number: "S.F. 0011"
legislation_bill_2_signed_date: "2021-02-18"
legislation_bill_2_effective_date: "2021-07-01"

# ===================================================================
# :: BREACH DEFINITION
# ===================================================================
breach_definition_text: "The unauthorized acquisition of computerized data that materially compromises the security, confidentiality, or integrity of PI maintained by the Entity, and causes, or the Entity reasonably believes has caused or will cause, loss or injury to any resident of WY."
breach_trigger: "unauthorized_acquisition"
breach_access_alone_triggers: false
breach_acquisition_alone_triggers: true

# ===================================================================
# :: ENCRYPTION SAFE HARBOR
# ===================================================================
exemption_encryption_safe_harbor: true
exemption_encryption_safe_harbor_negated_if_key_compromised: true
exemption_encryption_description: "Encrypted data is protected by safe harbor"

# ===================================================================
# :: RISK OF HARM ANALYSIS
# ===================================================================
risk_of_harm_analysis_is_required: false
risk_of_harm_analysis_can_eliminate_notification: false
risk_of_harm_analysis_standard: null
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
individual_notification_timeline_description: "In the most expedient time possible and without unreasonable delay, consistent with measures necessary to determine scope of breach and restore reasonable integrity of data system"
individual_notification_extensions_available: false
individual_notification_extension_max_days: 0
individual_notification_extension_request_deadline_days: 0
individual_notification_contents:
  - "A toll-free number that the resident may call for further information or assistance"
  - "The toll-free numbers and contact information for the major consumer credit reporting agencies"
  - "The types of PI that were or are reasonably believed to have been subject to the breach"
  - "A general description of the breach, if known to the entity"
  - "The approximate date or estimated date range of the breach, if known to the entity"
  - "The actions taken by the entity to protect against further breaches"
  - "Advice to the resident to review account statements and monitor free credit reports"
  - "Whether a law enforcement agency has determined that the notification has been delayed"
individual_notification_methods:
  - "In writing"
  - "Electronic notice (if primary method of communication or E-Sign Act compliant)"

# ===================================================================
# :: SUBSTITUTE NOTIFICATION
# ===================================================================
substitute_notification_is_available: true
substitute_notification_cost_trigger: 50000
substitute_notification_affected_count_trigger: 100000
substitute_notification_insufficient_contact_info_trigger: true
substitute_notification_other_triggers: []
substitute_notification_methods:
  - "Electronic mail notice when entity has email addresses for affected persons"
  - "Conspicuous posting on entity website if entity maintains one"
  - "Notification to major statewide media"

# ===================================================================
# :: ATTORNEY GENERAL NOTIFICATION
# ===================================================================
ag_notification_is_required: false
ag_notification_threshold: null
ag_notification_threshold_description: "No Attorney General notification required"
ag_notification_timeline_days: null
ag_notification_timeline_description: null
ag_notification_recipients: null
ag_notification_contents: []

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
vendor_notification_timeline_description: "As soon as practicable following discovery"
owner_liability_for_vendor_failure: "Third-party must notify owner/licensee as soon as practicable following discovery"
vendor_cooperation_required: false

# ===================================================================
# :: EXEMPTIONS
# ===================================================================
exemption_hipaa: true
exemption_hipaa_description: "Entities complying with HIPAA and primary/functional regulator requirements"
exemption_glba: true
exemption_glba_description: "Entities complying with Gramm-Leach-Bliley Act requirements"
exemption_primary_regulator: false
exemption_primary_regulator_description: null
exemption_own_notification_policy: true
exemption_own_notification_policy_description: "Entities maintaining own notification procedures compliant with timing requirements"
exemption_other_description: null

# ===================================================================
# :: ENFORCEMENT
# ===================================================================
enforcement_private_right_of_action: false
enforcement_authority: "Attorney General"
enforcement_authority_is_exclusive: false
enforcement_type_damages_description: "Attorney General enforcement available"

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
enforcement_penalty_notes: "Attorney General enforcement available; specific penalty amounts not enumerated in statute"

# ===================================================================
# :: SPECIAL PROVISIONS
# ===================================================================
provision_law_enforcement_delay: true
provision_law_enforcement_delay_description: "Notification may be delayed if law enforcement agency determines notification will impede criminal investigation. Entity shall provide notification as soon as law enforcement determines notification will not compromise investigation."
provision_government_entities_are_subject: true
provision_government_entities_notes: null
provision_waiver_not_permitted: false
provision_notice_at_collection_required: false
provision_other_description: "NO ATTORNEY GENERAL NOTIFICATION REQUIRED. NO CRA NOTIFICATION REQUIRED (one of the very few states with neither AG nor CRA notification). Acquisition-only trigger. Breach definition includes 'causes or will cause loss or injury.' Lower substitute thresholds: $50,000 cost OR 100,000 affected. Detailed content requirements (8 items) including LE delay disclosure. Notice must be 'clear and conspicuous.' Both HIPAA and GLBA exemptions. 2 legislative bills (2007, 2021 amendment). Comprehensive content requirements among most detailed in nation."

# ===================================================================
# :: OBSIDIAN TAGS
# ===================================================================
tags:
  - DataBreachLaws/Breach/trigger/acquisition
  - DataBreachLaws/Exempts/glba
  - DataBreachLaws/Exempts/hipaa
  - DataBreachLaws/Exempts/own-policy
  - DataBreachLaws/Notice/AG/not-required
  - DataBreachLaws/Notice/CRA/not-required
  - DataBreachLaws/Notice/Consumer/asap
  - DataBreachLaws/PII/biometric
  - DataBreachLaws/PII/financial-accounts
  - DataBreachLaws/PII/government-id
  - DataBreachLaws/PII/health-info
  - DataBreachLaws/PII/taxpayer-id
  - DataBreachLaws/RiskOfHarm/not-allowed
---

# Wyoming Data Breach Notification Law

## Overview
- **Statutory Citation:** `Wyo. Stat. § 40-12-501 et seq.`
- **Statute Title:** [Wyoming Data Breach Notification](https://wyoleg.gov/NXT/gateway.dll?f=templates&fn=default.htm)
- **Jurisdiction Type:** U.S. State
- **Legislative History:**
  - **Original Legislation:** H.B. 42 (signed February 13, 2007, effective July 1, 2007)
  - **Amendments:** S.F. 0011 (signed February 18, 2021, effective July 1, 2021)
  - **Last Verified:** September 2025

## Application & Covered Entities
Any individual or commercial entity that conducts business in Wyoming and owns or licenses computerized data that includes personal information.

## Key Definitions

### Personal Information
An individual's first name or first initial and last name, in combination with any one or more of the following data elements, when the data elements are not redacted:
- Social Security number, individual taxpayer identification number, or tribal identification number
- Driver's license number or Wyoming identification card number
- Account number, credit card number, or debit card number in combination with any required security code, access code, or password
- Shared secrets or security tokens that are used with a username or email address, to gain access to a consumer account (e.g., data used as a form of multifactor or two-factor authentication)
- Username or email address, in combination with a password or security question and answer, that would permit access to an online account
- Birth certificate number or marriage certificate number
- Medical information or health insurance information
- Unique biometric data

### Exclusions
Personal information does not include publicly available information that is lawfully made available to the general public from federal, state, or local government records.

### Breach of Security
The unauthorized acquisition of computerized data that materially compromises the security, confidentiality, or integrity of personal information maintained by the Entity, and causes, or the Entity reasonably believes has caused or will cause, loss or injury to any resident of Wyoming.

### Good-Faith Exception
Good-faith acquisition of personal information by an employee or agent of the Entity for a legitimate purpose of the Entity is not a breach, provided the information is not used for a purpose unrelated to the Entity's business or subject to further unauthorized disclosure.

## Notification Requirements & Triggers

### Notification Obligation
Any Entity that owns or licenses computerized data that includes personal information of a resident shall disclose any breach of the security of the system to any resident of Wyoming whose unencrypted and unredacted personal information was, or is reasonably believed to have been, acquired by an unauthorized person.

### Timing of Notification
The disclosure shall be made in the most expedient time possible and without unreasonable delay, consistent with any measures necessary to determine the scope of the breach, identify the individuals affected, and restore the reasonable integrity of the data system.

### Notification Methods
Notice may be provided by one of the following methods:
- In writing
- Electronic notice, if the entity's primary method of communication with the resident is by electronic means or is consistent with the provisions regarding electronic records and signatures set forth in 15 U.S.C. § 7001 (E-Sign Act)

### Content of Notice to Individuals
Notice must be clear and conspicuous, and shall include at a minimum:
- A toll-free number that the resident may call for further information or assistance
- The toll-free numbers and contact information for the major consumer credit reporting agencies
- The types of personal information that were or are reasonably believed to have been subject to the breach
- A general description of the breach, if known to the entity
- The approximate date or estimated date range of the breach, if known to the entity
- The actions taken by the entity to protect against further breaches
- Advice to the resident to review account statements and monitor free credit reports and remain vigilant
- Whether a law enforcement agency has determined that the notification of the breach has been delayed and, if so, a statement that the notification was delayed

### Substitute Notice Available
If the entity demonstrates that:
- The cost of providing notice would exceed **$50,000**, OR
- The affected class of subject individuals to be notified exceeds **100,000** persons, OR
- The entity does not have sufficient contact information

Substitute notice shall consist of each of the following:
- Notification by electronic mail when the entity has electronic mail addresses for the members of the affected class
- Conspicuous posting of the notice on the entity's website if the entity maintains one
- Notification to major statewide media

### Third-Party Data Notification
Any entity that maintains computerized data that includes personal information that the entity does not own shall notify the owner or licensee of the information of any breach as soon as practicable following discovery, if the personal information was, or is reasonably believed to have been, acquired by an unauthorized person.

## Exemptions, Penalties, and Other Provisions

### Encryption Safe Harbor
The law provides a safe harbor for encrypted data.

### Own Notification Policy Exemption
An entity that maintains its own notification procedures as part of a data security policy for the treatment of personal information and otherwise complies with the timing requirements of the statute is deemed to be in compliance with the notification requirements if the entity notifies subject individuals in accordance with its policies in the event of a breach.

### HIPAA and Primary Regulator Exemption
An entity that complies with the notification requirements or procedures pursuant to the rules, regulations, procedures, or guidelines established by the entity's primary or functional state or federal regulator, including HIPAA, is deemed to be in compliance with the statute.

### Gramm-Leach-Bliley Act Exemption
An entity that complies with the notification requirements or procedures pursuant to the Gramm-Leach-Bliley Act is deemed to be in compliance with the statute.

### Private Right of Action
The statute does not provide for a private right of action.

## Key Provisions

### Delay for Law Enforcement
The notification required may be delayed if a law enforcement agency determines and advises the entity that the notification will impede a criminal investigation. The entity shall provide notification as soon as the law enforcement agency determines that the notification will not compromise the investigation.

### Attorney General Enforcement
Attorney General enforcement is available.
