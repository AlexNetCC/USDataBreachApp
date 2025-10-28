---
state: "Vermont"
state_code: "VT"
jurisdiction_type: "U.S. State"
statute_citation: "9 Vt. Stat. Ann. § 2430 et seq."
statute_title: "Vermont Security Breach Notice Act"
statute_url: "https://legislature.vermont.gov/statutes/section/09/062/02435"

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
legislation_bill_1_number: "H.B. 62"
legislation_bill_1_signed_date: "2006-05-03"
legislation_bill_1_effective_date: "2007-01-01"
legislation_bill_2_number: "S.B. 59"
legislation_bill_2_signed_date: "2019-05-28"
legislation_bill_2_effective_date: "2019-07-01"
legislation_bill_3_number: "H.B. 711"
legislation_bill_3_signed_date: "2024-05-06"
legislation_bill_3_effective_date: "2024-07-01"

# ===================================================================
# :: BREACH DEFINITION
# ===================================================================
breach_definition_text: "Unauthorized acquisition or a reasonable belief of an unauthorized acquisition of electronic personal information maintained by a data collector or a third-party data collector that compromises the security, confidentiality, or integrity of the personal information."
breach_trigger: "unauthorized_acquisition"
breach_access_alone_triggers: false
breach_acquisition_alone_triggers: true

# ===================================================================
# :: ENCRYPTION SAFE HARBOR
# ===================================================================
exemption_encryption_safe_harbor: true
exemption_encryption_safe_harbor_negated_if_key_compromised: true
exemption_encryption_description: "Data encrypted, redacted, or protected by other methods rendering it unreadable or unusable"

# ===================================================================
# :: RISK OF HARM ANALYSIS
# ===================================================================
risk_of_harm_analysis_is_required: false
risk_of_harm_analysis_can_eliminate_notification: true
risk_of_harm_analysis_standard: "Breach is unlikely to result in harm to the consumers"
risk_of_harm_analysis_documentation_required: true
risk_of_harm_analysis_documentation_retention_years: 0
risk_of_harm_analysis_ag_notification_required: true
risk_of_harm_analysis_ag_notification_threshold: 0
risk_of_harm_analysis_ag_notification_timeline_days: 14

# ===================================================================
# :: INDIVIDUAL NOTIFICATION
# ===================================================================
individual_notification_is_required: true
individual_notification_timeline_days: 45
individual_notification_timeline_description: "Most expedient time possible and without unreasonable delay, but not later than 45 days after discovery or notification of breach"
individual_notification_extensions_available: false
individual_notification_extension_max_days: 0
individual_notification_extension_request_deadline_days: 0
individual_notification_contents:
  - "Description of the incident in general terms"
  - "Type of personal information subject to unauthorized access and acquisition"
  - "General acts of the data collector to protect personal information from further unauthorized access"
  - "Telephone number that the consumer may call for further information and assistance"
  - "Advice that directs the resident to remain vigilant by reviewing account statements and monitoring free credit reports"
  - "Approximate date or date range of the breach of security"
individual_notification_methods:
  - "Written notice to the consumer's residence"
  - "Telephonic notice"
  - "Electronic notice (if primary method or E-Sign compliant)"

# ===================================================================
# :: SUBSTITUTE NOTIFICATION
# ===================================================================
substitute_notification_is_available: true
substitute_notification_cost_trigger: 5000
substitute_notification_affected_count_trigger: 1000
substitute_notification_insufficient_contact_info_trigger: true
substitute_notification_other_triggers: []
substitute_notification_methods:
  - "Email notice when data collector has email address for subject persons"
  - "Conspicuous posting on data collector website if data collector maintains one"
  - "Notification to major statewide media"

# ===================================================================
# :: ATTORNEY GENERAL NOTIFICATION
# ===================================================================
ag_notification_is_required: true
ag_notification_threshold: 1
ag_notification_threshold_description: "Required for all breaches (threshold of 1 affected Vermont resident)"
ag_notification_timeline_days: 14
ag_notification_timeline_description: "As soon as possible or within 14 business days of discovery, whichever is sooner; when data collector provides notice to consumers, whichever is sooner"
ag_notification_recipients: "Attorney General"
ag_notification_contents:
  - "Notice of breach for Attorney General review"

# ===================================================================
# :: CONSUMER REPORTING AGENCY NOTIFICATION
# ===================================================================
cra_notification_is_required: true
cra_notification_threshold: 1000
cra_notification_threshold_description: "If data collector required to notify more than 1,000 persons at one time"
cra_notification_timeline_days: 0
cra_notification_timeline_description: "Without unreasonable delay"
cra_notification_recipients: "Major consumer reporting agencies"
cra_notification_contents:
  - "Timing, distribution, and content of notices"

# ===================================================================
# :: VENDOR NOTIFICATION (Third-Party Data Processors)
# ===================================================================
vendor_notification_is_required: true
vendor_notification_timeline_days: 14
vendor_notification_timeline_description: "No later than 14 days after discovery or when third-party data collector provides notice to consumers, whichever is sooner"
owner_liability_for_vendor_failure: "Third-party must notify owner/licensee within 14 days of discovery or when providing notice to consumers"
vendor_cooperation_required: false

# ===================================================================
# :: EXEMPTIONS
# ===================================================================
exemption_hipaa: true
exemption_hipaa_description: "HIPAA-covered entities and business associates complying with HIPAA rules"
exemption_glba: true
exemption_glba_description: "Financial institutions complying with Federal Interagency Guidance"
exemption_primary_regulator: false
exemption_primary_regulator_description: null
exemption_own_notification_policy: true
exemption_own_notification_policy_description: "Data collector with own notification procedures consistent with timing requirements"
exemption_other_description: null

# ===================================================================
# :: ENFORCEMENT
# ===================================================================
enforcement_private_right_of_action: false
enforcement_authority: "Attorney General or State's Attorney"
enforcement_authority_is_exclusive: false
enforcement_type_damages_description: "Appropriate relief including actual damages, restitution, or injunctive relief"

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
enforcement_penalty_notes: "Enforcement authority can seek actual damages, restitution, or injunctive relief; specific penalty amounts not enumerated in statute"

# ===================================================================
# :: SPECIAL PROVISIONS
# ===================================================================
provision_law_enforcement_delay: true
provision_law_enforcement_delay_description: "Notification may be delayed if law enforcement agency determines it will impede a criminal investigation or jeopardize national or homeland security. Notification shall be made in good faith, without unreasonable delay, and as soon as possible after law enforcement determines and advises data collector that notification no longer impedes investigation."
provision_government_entities_are_subject: true
provision_government_entities_notes: null
provision_waiver_not_permitted: true
provision_notice_at_collection_required: false
provision_other_description: "Recent amendment H.B. 711 (effective July 1, 2024). Explicit 45-day timeline. LOWEST substitute cost threshold in nation: $5,000 (vs typical $100K-$250K). AG notification required for ALL breaches (threshold of 1). Explicit 14-day AG/vendor notification timelines. Risk of harm analysis allowed but requires: (1) appropriate investigation, (2) consultation with law enforcement, (3) written documentation to AG. Waiver provisions PROHIBITED. Broad PII definition includes biometric and genetic data. Both HIPAA and GLBA exemptions. Enforcement by AG or State's Attorney."

# ===================================================================
# :: OBSIDIAN TAGS
# ===================================================================
tags:
  - DataBreachLaws/Breach/trigger/acquisition
  - DataBreachLaws/Exempts/glba
  - DataBreachLaws/Exempts/hipaa
  - DataBreachLaws/Exempts/own-policy
  - DataBreachLaws/Notice/AG/required/threshold/1
  - DataBreachLaws/Notice/AG/required/timing/14days
  - DataBreachLaws/Notice/AG/Shame-Site
  - DataBreachLaws/Notice/CRA/required/threshold/1000
  - DataBreachLaws/Notice/Consumer/45days
  - DataBreachLaws/Notice/Vendor/14-days
  - DataBreachLaws/PII/biometric
  - DataBreachLaws/PII/financial-accounts
  - DataBreachLaws/PII/genetic
  - DataBreachLaws/PII/government-id
  - DataBreachLaws/PII/health-info

  - DataBreachLaws/RiskOfHarm/allowed/documentation-req
---
# Vermont Data Breach Notification Law

## Overview
- **Statutory Citation:** `9 Vt. Stat. Ann. § 2430 et seq.`
- **Statute Title:** [Vermont Security Breach Notice Act](https://legislature.vermont.gov/statutes/section/09/062/02435)
- **Jurisdiction Type:** U.S. State
- **Legislative History:**
  - **Original Legislation:** H.B. 62 (signed May 3, 2006, effective January 1, 2007)
  - **Major Amendments:**
    - S.B. 59 (signed May 28, 2019, effective July 1, 2019)
    - H.B. 711 (signed May 6, 2024, effective July 1, 2024)
  - **Last Verified:** September 2025

## Application & Covered Entities
Data collectors, which includes any person who, for any purpose, whether by automated collection or otherwise, handles, collects, disseminates, or otherwise deals with personally identifiable information.

## Key Definitions

### Personally Identifiable Information
A Vermont resident's first name or first initial and last name in combination with any one or more of the following digital data elements, when the data elements are not encrypted, redacted, or protected by another method that renders them unreadable or unusable by unauthorized persons:
- Social Security number
- Driver's license or state ID number
- Alien registration number, passport number, military ID number, or other unique identification number issued on a government document used to verify identity
- A non-truncated account number, credit card number, debit card number, or any security code, access code, personal identification number, or password that would permit access to a person's financial account
- Biometric data
- Genetic information
- Health records or records of a wellness program or health plan, including health insurance policy number or subscriber identification number, or any unique identifier used by a health insurer to identify the person that permits access to an individual's health and medical information
- Unique account identifier or user name in combination with any password or security question and answer that would permit access to an individual's account

### Exclusions
Publicly available information that is lawfully made available to the general public from federal, state, or local government records.

### Breach of Security
Unauthorized acquisition or a reasonable belief of an unauthorized acquisition of electronic personally identifiable information maintained by a data collector or a third-party data collector that compromises the security, confidentiality, or integrity of the personal information.

### Good-Faith Exception
Good-faith acquisition of personal information by an employee or agent of the data collector for a legitimate business purpose is not a breach if the personal information is not used for a purpose unrelated to the business or subject to further unauthorized disclosure.

## Notification Requirements & Triggers

### Notification Obligation
A data collector shall notify the Attorney General and affected individuals without unreasonable delay if it knows or has reason to know that personal information of a resident of Vermont has been subject to a breach of security.

**Exception:** The duty to notify shall not apply if the data collector, after an appropriate investigation and consultation with relevant federal, state, and local agencies responsible for law enforcement, reasonably determines that a breach is unlikely to result in harm to the consumers whose personally identifiable information was breached. The data collector must document this decision in writing and provide it to the Attorney General or Department of Financial Regulation.

### Timing of Notification
Notice must be made in the most expedient time possible and without unreasonable delay, but not later than **45 days** after the discovery or notification of a breach, consistent with legitimate needs of law enforcement and the measures necessary to determine the scope of the breach and to restore the integrity of the data system.

### Notification Methods
Notice may be provided by one of the following methods:
- Written notice to the consumer's residence
- Telephone notice
- Electronic notice, if that is the data collector's primary method of communication, or if consistent with 15 U.S.C. § 7001 (E-Sign Act)

### Content of Notice to Individuals
The notice must be clear and conspicuous and include:
- A description of the incident in general terms
- The type of personal information that was subject to the unauthorized access and acquisition
- The general acts of the data collector to protect the personal information from further unauthorized access
- A telephone number that the consumer may call for further information and assistance, if one exists
- Advice that directs the resident to remain vigilant by reviewing account statements and monitoring free credit reports
- The approximate date or date range of the breach of security

### Attorney General Notification
The data collector shall disclose any breach to the Attorney General **as soon as possible** or **within 14 business days** of the data collector's discovery or when the data collector provides notice to consumers pursuant to this section, whichever is sooner. If it is likely that more than 1,000 consumers are affected, the data collector must also notify consumer reporting agencies.

### Consumer Reporting Agency Notification
If the data collector is required to notify more than **1,000** persons at one time, the data collector shall notify, without unreasonable delay, all nationwide consumer reporting agencies of the timing, distribution, and content of the notice.

### Substitute Notice Available
If the data collector demonstrates that:
- The cost of providing written notice would exceed **$5,000**, OR
- The affected class exceeds **1,000** persons, OR
- The data collector does not have sufficient contact information to provide written notice

Substitute notice shall consist of all of the following:
- Email notice when the data collector has an email address for the subject persons
- Conspicuous posting of the notice on the website of the data collector if the data collector maintains one
- Notification to major statewide media

### Third-Party Data Notification
A third-party data collector that maintains, stores, or processes personal information on behalf of a data collector shall notify the data collector of any breach of the security of the data no later than **14 days** after discovery or when the third-party data collector provides notice to consumers pursuant to this section, whichever is sooner.

## Exemptions, Penalties, and Other Provisions

### Encryption Safe Harbor
The law provides a safe harbor for encrypted, redacted, or otherwise protected data.

### Own Notification Policy Exemption
A data collector that maintains its own notification procedures as part of an information security policy for the treatment of personal information and that is otherwise consistent with the timing requirements of the statute shall be deemed to be in compliance with the notification requirements if the data collector provides notice in accordance with its procedures in the event of a breach.

### Federal Interagency Guidance Exemption
A financial institution that is subject to and in compliance with the Federal Interagency Guidance on Response Programs for Unauthorized Access to Customer Information and Customer Notice is deemed to be in compliance with the statute.

### HIPAA Exemption
A covered entity or business associate that is governed by the privacy, security, and breach notification rules promulgated under HIPAA is deemed to be in compliance with the requirements of this statute, including notification to the Attorney General, with respect to any information governed by those rules.

### Penalties
The Attorney General or a State's Attorney may bring an action in Superior Court for appropriate relief, including actual damages, restitution, or injunctive relief.

### Waiver Not Permitted
Any waiver of the provisions of the statute shall be deemed contrary to public policy and shall be void and unenforceable.

## Key Provisions

### Delay for Law Enforcement
The notification required may be delayed if a law enforcement agency determines that it will impede a criminal investigation or jeopardize national or homeland security. Notification shall be made in good faith, without unreasonable delay, and as soon as possible after the law enforcement agency determines and advises the data collector that notification no longer impedes such investigation or jeopardizes national or homeland security.

### Attorney General Enforcement
Attorney General or State's Attorney enforcement is available.
