---
# ===================================================================
# :: CORE INFORMATION
# ===================================================================
state: "Utah"
state_code: "UT"
jurisdiction_type: "U.S. State"
statute_citation: "Utah Code §§ 13-44-101 et seq."
statute_title: "Utah Data Breach Notification Act"
statute_url: "https://le.utah.gov/xcode/Title13/Chapter44/C13-44_1800010118000101.pdf"

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
legislation_bill_1_number: "S.B. 69"
legislation_bill_1_signed_date: "2006-03-20"
legislation_bill_1_effective_date: "2007-01-01"
legislation_bill_2_number: "S.B. 208"
legislation_bill_2_signed_date: "2009-03-30"
legislation_bill_2_effective_date: "2009-05-12"
legislation_bill_3_number: "S.B. 193"
legislation_bill_3_signed_date: "2019-03-26"
legislation_bill_3_effective_date: "2019-05-14"
legislation_bill_4_number: "S.B. 127"
legislation_bill_4_signed_date: "2023-03-23"
legislation_bill_4_effective_date: "2023-05-03"
legislation_bill_5_number: "S.B. 98"
legislation_bill_5_signed_date: "2024-03-19"
legislation_bill_5_effective_date: "2024-05-01"

# ===================================================================
# :: BREACH DEFINITION
# ===================================================================
breach_definition_text: "Unauthorized acquisition of computerized data maintained by an entity that compromises the security, confidentiality, or integrity of personal information."
breach_trigger: "unauthorized_acquisition"
breach_access_alone_triggers: false
breach_acquisition_alone_triggers: true

# ===================================================================
# :: ENCRYPTION SAFE HARBOR
# ===================================================================
exemption_encryption_safe_harbor: true
exemption_encryption_safe_harbor_negated_if_key_compromised: true
exemption_encryption_description: "Data protected by encryption or method rendering data unreadable unless key compromised"

# ===================================================================
# :: RISK OF HARM ANALYSIS
# ===================================================================
risk_of_harm_analysis_is_required: false
risk_of_harm_analysis_can_eliminate_notification: true
risk_of_harm_analysis_standard: "Misuse of personal information for identity theft or fraud has occurred or is reasonably likely to occur"
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
individual_notification_timeline_description: "Most expedient time possible without unreasonable delay, after determining scope of breach and restoring reasonable integrity of system"
individual_notification_extensions_available: false
individual_notification_extension_max_days: 0
individual_notification_extension_request_deadline_days: 0
individual_notification_contents:
  - "Date or estimated date of breach"
  - "Description of information involved"
  - "Contact information for the entity"
individual_notification_methods:
  - "Written notice by first-class mail to most recent address"
  - "Telephonic notice including automatic dialing technology"
  - "Electronic notice if primary method or E-Sign compliant"
  - "Newspaper notice of general circulation if other methods not feasible"

# ===================================================================
# :: SUBSTITUTE NOTIFICATION
# ===================================================================
substitute_notification_is_available: true
substitute_notification_cost_trigger: 0
substitute_notification_affected_count_trigger: 0
substitute_notification_insufficient_contact_info_trigger: false
substitute_notification_other_triggers:
  - "Notification in manner described above is not feasible"
substitute_notification_methods:
  - "Publishing notice in newspaper of general circulation complying with Utah Code § 45-1-101"

# ===================================================================
# :: ATTORNEY GENERAL NOTIFICATION
# ===================================================================
ag_notification_is_required: true
ag_notification_threshold: 500
ag_notification_threshold_description: "If entity must notify 500 or more Utah residents"
ag_notification_timeline_days: 0
ag_notification_timeline_description: "Same timing as individuals"
ag_notification_recipients: "Attorney General and Utah Cyber Center"
ag_notification_contents:
  - "Date breach of system security occurred"
  - "Date breach of system security was discovered"
  - "Total number of people affected by breach, including total number of Utah residents"
  - "Type of personal information involved in breach"
  - "Short description of breach that occurred"

# ===================================================================
# :: CONSUMER REPORTING AGENCY NOTIFICATION
# ===================================================================
cra_notification_is_required: true
cra_notification_threshold: 1000
cra_notification_threshold_description: "If entity must notify 1,000 or more Utah residents"
cra_notification_timeline_days: 0
cra_notification_timeline_description: "Without unreasonable delay"
cra_notification_recipients: "Major consumer reporting agencies"
cra_notification_contents:
  - "Timing and content of notices to residents"

# ===================================================================
# :: VENDOR NOTIFICATION (Third-Party Data Processors)
# ===================================================================
vendor_notification_is_required: true
vendor_notification_timeline_days: 0
vendor_notification_timeline_description: "Immediately following discovery"
owner_liability_for_vendor_failure: "Third-party must notify owner/licensee immediately following discovery and cooperate with owner/licensee"
vendor_cooperation_required: true

# ===================================================================
# :: EXEMPTIONS
# ===================================================================
exemption_hipaa: true
exemption_hipaa_description: "Entities regulated by state or federal law and maintaining procedures for breach notification"
exemption_glba: true
exemption_glba_description: "Financial institutions and entities subject to federal regulations with applicable procedures"
exemption_primary_regulator: true
exemption_primary_regulator_description: "Financial institutions and affiliates as defined in 15 U.S.C. § 6809"
exemption_own_notification_policy: true
exemption_own_notification_policy_description: "Entity with own notification procedures consistent with timing requirements"
exemption_other_description: null

# ===================================================================
# :: ENFORCEMENT
# ===================================================================
enforcement_private_right_of_action: false
enforcement_authority: "Attorney General"
enforcement_authority_is_exclusive: false
enforcement_type_damages_description: "Civil fine of no more than $2,500 per violation or series of violations concerning specific consumer; no more than $100,000 in aggregate for related violations concerning multiple consumers (exception: no cap if violations concern 10,000+ Utah residents and 10,000+ residents of other states, or if entity agrees to settle for greater amount)"

# ===================================================================
# :: PENALTIES
# ===================================================================
enforcement_penalty_per_day: 0
enforcement_penalty_per_individual: 0
enforcement_penalty_per_record: 0
enforcement_penalty_per_violation: 2500
enforcement_penalty_flat_amount: 0
enforcement_penalty_maximum: 100000
enforcement_penalty_basis: "Aggregate for related violations concerning more than one consumer (no cap if 10,000+ UT residents and 10,000+ other state residents, or settlement)"
enforcement_penalty_notes: "$2,500 per violation; $100,000 aggregate max (exceptions: no cap if 10,000+ UT + 10,000+ other states, or settlement)"

# ===================================================================
# :: SPECIAL PROVISIONS
# ===================================================================
provision_law_enforcement_delay: true
provision_law_enforcement_delay_description: "Entity may delay providing notification at request of law enforcement agency that determines notification may impede criminal investigation. Notification shall be provided in good faith, without unreasonable delay, and in most expedient time possible after law enforcement informs entity that notification will no longer impede investigation."
provision_government_entities_are_subject: true
provision_government_entities_notes: null
provision_waiver_not_permitted: true
provision_notice_at_collection_required: false
provision_other_description: "Recent amendment S.B. 98 (effective May 1, 2024). UTAH CYBER CENTER notification required at 500+ threshold (unique provision). Records reported to AG/Cyber Center are CONFIDENTIAL. Risk of harm analysis allowed. Waiver provisions PROHIBITED. Multiple exemptions: HIPAA, GLBA, federal regulator, own policy. Specific penalty cap: $2,500 per violation, $100,000 aggregate (no cap exception for 10,000+ UT + 10,000+ other states). Unique substitute threshold: when standard notification not feasible (no cost/count trigger). Vendor cooperation explicitly required."

# ===================================================================
# :: OBSIDIAN TAGS
# ===================================================================
tags:
  - DataBreachLaws/Breach/trigger/acquisition
  - DataBreachLaws/Exempts/federal-regulator
  - DataBreachLaws/Exempts/glba
  - DataBreachLaws/Exempts/hipaa
  - DataBreachLaws/Exempts/own-policy
  - DataBreachLaws/Notice/AG/required/threshold/500
  - DataBreachLaws/Notice/AG/required/timing/concurrent
  - DataBreachLaws/Notice/CRA/required/threshold/1000
  - DataBreachLaws/Notice/Consumer/asap
  - DataBreachLaws/PII/financial-accounts
  - DataBreachLaws/PII/government-id
  - DataBreachLaws/RiskOfHarm/allowed
---

# Utah Data Breach Notification Law

## Overview
- **Statutory Citation:** `Utah Code §§ 13-44-101 et seq.`
- **Statute Title:** [Utah Data Breach Notification Act](https://le.utah.gov/xcode/Title13/Chapter44/C13-44_1800010118000101.pdf)
- **Jurisdiction Type:** U.S. State
- **Legislative History:**
  - **Original Legislation:** S.B. 69 (signed March 20, 2006, effective January 1, 2007)
  - **Major Amendments:**
    - S.B. 208 (signed March 30, 2009, effective May 12, 2009)
    - S.B. 193 (signed March 26, 2019, effective May 14, 2019)
    - S.B. 127 (signed March 23, 2023, effective May 3, 2023)
    - S.B. 98 (signed March 19, 2024, effective May 1, 2024)
  - **Last Verified:** September 2025

## Application & Covered Entities
Any Entity who owns or licenses computerized data that includes personal information concerning a Utah resident.

## Key Definitions

### Personal Information
A person's first name or first initial and last name, combined with any one or more of the following data elements relating to that person, when either the name or data element is unencrypted or not protected by another method that renders the data unreadable or unusable:
- Social Security number
- Driver's license number or state identification card number
- Account number, credit card number, or debit card number in combination with any required security code, access code, or password that would permit access to the person's account

### Exclusions
Personal information does not include information regardless of its source, contained in federal, state, or local government records or in widely distributed media that are lawfully made available to the general public.

### Breach of Security
Unauthorized acquisition of computerized data maintained by an Entity that compromises the security, confidentiality, or integrity of personal information.

### Good-Faith Exception
Does not include the acquisition of personal information by an employee or agent of the Entity possessing unencrypted computerized data unless the personal information is used for an unlawful purpose or disclosed in an unauthorized manner.

## Notification Requirements & Triggers

### Notification Obligation
If investigation reveals that the misuse of personal information for identity theft or fraud has occurred, or is reasonably likely to occur, the person shall provide notification to each affected Utah resident.

**Exception:** Notification is not required if after a good-faith, reasonable, and prompt investigation the Entity determines that it is unlikely that personal information has been or will be misused for identity theft or fraud.

### Timing of Notification
Notification shall be provided in the most expedient time possible without unreasonable delay, after determining the scope of the breach of system security and after restoring the reasonable integrity of the system.

### Notification Methods
Notice may be provided by one of the following methods:
- In writing by first-class mail to the most recent address the Entity has for the resident
- By telephone, including through the use of automatic dialing technology not prohibited by other law
- Electronically, if the Entity's primary method of communication with the resident is by electronic means, or if provided consistent with 15 U.S.C. § 7001 (E-Sign Act)

### Content of Notice to Individuals
- Date or estimated date of breach
- Description of information involved
- Contact information for the entity

### Attorney General and Utah Cyber Center Notification
If an Entity must notify **500** or more Utah residents, it must also notify the Office of the Attorney General, and the Utah Cyber Center. Notice shall include:
- The date the breach of system security occurred
- The date the breach of system security was discovered
- The total number of people affected by the breach of system security, including the total number of Utah residents affected
- The type of personal information involved in the breach of system security
- A short description of the breach of system security that occurred

### Consumer Reporting Agency Notification
If an Entity must notify **1,000** or more Utah residents, the Entity must also notify each nationwide consumer reporting agency.

### Substitute Notice
If notification in the manner described above is not feasible, by publishing notice of the breach of system security in a newspaper of general circulation. Such notice must comply with Utah Code § 45-1-101.

### Third-Party Data Notification
An Entity that maintains computerized data that includes personal information that the Entity does not own or license shall notify and cooperate with the owner or licensee of the personal information of any breach of system security immediately following the Entity's discovery of the breach if misuse of the personal information occurs or is reasonably likely to occur.

## Exemptions, Penalties, and Other Provisions

### Encryption Safe Harbor
The law provides a safe harbor for encrypted or otherwise protected data.

### Own Notification Policy Exemption
If an Entity maintains its own notification procedures as part of an information security policy for the treatment of personal information, the Entity is considered to be in compliance with this chapter's notification requirements if the procedures are otherwise consistent with this chapter's timing requirements and the Entity notifies each affected Utah resident in accordance with the Entity's information security policy in the event of a breach.

### Regulatory Compliance Exemption
An Entity who is regulated by state or federal law and maintains procedures for a breach of system security under applicable law established by the primary state or federal regulator is considered to be in compliance with this part if the Entity notifies each affected Utah resident in accordance with the other applicable law in the event of a breach.

### Financial Institution Exemption
This chapter does not apply to a financial institution or affiliate of a financial institution, as defined in 15 U.S.C. § 6809.

### Penalties
Violators are subject to a civil fine of no more than **$2,500** for a violation or series of violations concerning a specific consumer and no more than **$100,000** in the aggregate for related violations concerning more than one consumer. The latter limitation does not apply if:
- The violations concern more than 10,000 Utah residents and more than 10,000 residents of other states, OR
- The Entity agrees to settle for a greater amount

### Waiver Not Permitted
Waiver is not permitted.

### Confidentiality
Records reported to the Attorney General or Utah Cyber Center are confidential.

## Key Provisions

### Delay for Law Enforcement
An Entity may delay providing notification at the request of a law enforcement agency that determines that notification may impede a criminal investigation. Notification shall be provided in good faith, without unreasonable delay, and in the most expedient time possible after the law enforcement agency informs the person that notification will no longer impede the criminal investigation.

### Attorney General Enforcement
Attorney General enforcement is available.
