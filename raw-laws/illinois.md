---
# ===================================================================
# :: CORE INFORMATION
# ===================================================================
state: "Illinois"
state_code: "IL"
jurisdiction_type: "U.S. State"
statute_citation: "815 Ill. Comp. Stat. 530/5, 530/10, 530/12, 530/15, 530/20, 530/25"
statute_title: "Illinois Personal Information Protection Act"
statute_url: "https://www.ilga.gov/legislation/ilcs/ilcs3.asp?ActID=2702&ChapterID=67"

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
legislation_bill_1_number: "H.B. 1633"
legislation_bill_1_signed_date: "2005-06-16"
legislation_bill_1_effective_date: "2006-06-27"
legislation_bill_2_number: "H.B. 3025"
legislation_bill_2_signed_date: "2011-08-22"
legislation_bill_2_effective_date: "2012-01-01"
legislation_bill_3_number: "H.B. 1260"
legislation_bill_3_signed_date: "2016-05-06"
legislation_bill_3_effective_date: "2017-01-01"
legislation_bill_4_number: "S.B. 1624"
legislation_bill_4_signed_date: "2019-08-09"
legislation_bill_4_effective_date: "2020-01-01"

# ===================================================================
# :: BREACH DEFINITION
# ===================================================================
breach_definition_text: "An unauthorized acquisition of computerized data that compromises the security, confidentiality, or integrity of personal information maintained by the entity."
breach_trigger: "unauthorized_acquisition"
breach_access_alone_triggers: false
breach_acquisition_alone_triggers: true

# ===================================================================
# :: ENCRYPTION SAFE HARBOR
# ===================================================================
exemption_encryption_safe_harbor: true
exemption_encryption_safe_harbor_negated_if_key_compromised: true
exemption_encryption_description: "Information that is encrypted or redacted where the keys to provide access to the information have not also been obtained"

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
individual_notification_timeline_description: "In the most expedient time possible and without unreasonable delay, but in no event later than when the data collector provides notice to consumers"
individual_notification_extensions_available: false
individual_notification_extension_max_days: 0
individual_notification_extension_request_deadline_days: 0
individual_notification_contents:
  - "The toll-free numbers and addresses for consumer reporting agencies"
  - "The toll-free number, address, and website address for the Federal Trade Commission"
  - "A statement that the individual can obtain information from these sources about fraud alerts and security freezes"
  - "For breaches of username/email and password/security question: notice directing resident to promptly change password and security question or take other steps to protect online accounts"
individual_notification_methods:
  - "Written notice"
  - "Electronic notice, if consistent with 15 U.S.C. § 7001 (E-Sign Act)"
  - "For breaches involving username/email and password/security questions only: electronic or other form"

# ===================================================================
# :: SUBSTITUTE NOTIFICATION
# ===================================================================
substitute_notification_is_available: true
substitute_notification_cost_trigger: 250000
substitute_notification_affected_count_trigger: 500000
substitute_notification_insufficient_contact_info_trigger: true
substitute_notification_other_triggers: []
substitute_notification_methods:
  - "Email notice if entity has email addresses for subject persons"
  - "Conspicuous posting on entity website, if entity maintains one"
  - "Notification to major statewide media or prominent local media if breach impacts one geographic area"

# ===================================================================
# :: ATTORNEY GENERAL NOTIFICATION
# ===================================================================
ag_notification_is_required: true
ag_notification_threshold: 500
ag_notification_threshold_description: "Any entity required to notify more than 500 Illinois residents"
ag_notification_timeline_days: 0
ag_notification_timeline_description: "Without unreasonable delay, but in no event later than when notice is provided to consumers"
ag_notification_recipients: null
ag_notification_contents:
  - "A description of the nature of the breach of security"
  - "The date of the breach"
  - "The number of Illinois residents affected by such incident at the time of notification"
  - "Any steps the entity has taken or plans to take relating to the incident"

# ===================================================================
# :: CONSUMER REPORTING AGENCY NOTIFICATION
# ===================================================================
cra_notification_is_required: false
cra_notification_threshold: null
cra_notification_threshold_description: "No CRA notification requirement"
cra_notification_timeline_days: null
cra_notification_timeline_description: null
cra_notification_recipients: null
cra_notification_contents: []

# ===================================================================
# :: VENDOR NOTIFICATION (Third-Party Data Processors)
# ===================================================================
vendor_notification_is_required: true
vendor_notification_timeline_days: 0
vendor_notification_timeline_description: "Any entity that maintains or stores computerized data that includes personal information not owned or licensed by the entity shall notify the owner or licensee immediately following discovery if personal information was acquired by unauthorized person"
owner_liability_for_vendor_failure: "Third-party agent must comply with immediate notification and cooperation requirements, including giving notice of approximate date and nature of breach and steps taken or planned"
vendor_cooperation_required: false

# ===================================================================
# :: EXEMPTIONS
# ===================================================================
exemption_hipaa: true
exemption_hipaa_description: "Any entity subject to and in compliance with HIPAA and HITECH with notification to Secretary of HHS within 5 business days must also notify Attorney General"
exemption_glba: false
exemption_glba_description: null
exemption_primary_regulator: false
exemption_primary_regulator_description: null
exemption_own_notification_policy: true
exemption_own_notification_policy_description: "Entity maintaining own notification procedures as part of information security policy and consistent with timing requirements deemed in compliance if notifies subject persons in accordance with policies"
exemption_other_description: null

# ===================================================================
# :: ENFORCEMENT
# ===================================================================
enforcement_private_right_of_action: false
enforcement_authority: "Attorney General"
enforcement_authority_is_exclusive: false
enforcement_type_damages_description: "Unlawful practice under Illinois Consumer Fraud and Deceptive Business Practices Act"

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
enforcement_penalty_notes: "Violation treated as unlawful practice under Illinois Consumer Fraud and Deceptive Business Practices Act; specific penalty amounts not defined in data breach statute"

# ===================================================================
# :: SPECIAL PROVISIONS
# ===================================================================
provision_law_enforcement_delay: true
provision_law_enforcement_delay_description: "Notice may be delayed if a law enforcement agency determines that the notice will impede a criminal investigation and provides the entity with a written request of delay. Notice required must be made without unreasonable delay and as soon as possible after law enforcement determines notification will no longer impede investigation."
provision_government_entities_are_subject: true
provision_government_entities_notes: null
provision_waiver_not_permitted: true
provision_notice_at_collection_required: false
provision_other_description: "Notice shall not include the number of Illinois residents affected by the breach (unless they are an online account credentials breach). For breaches of username/email and password/security question: notice directing resident to promptly change password and security question or take other steps to protect online accounts."

# ===================================================================
# :: OBSIDIAN TAGS
# ===================================================================
tags:
  - DataBreachLaws/Breach/trigger/acquisition
  - DataBreachLaws/Exempts/hipaa
  - DataBreachLaws/Exempts/own-policy
  - DataBreachLaws/Notice/AG/required/threshold/500
  - DataBreachLaws/Notice/AG/required/timing/concurrent
  - DataBreachLaws/Notice/CRA/not-required
  - DataBreachLaws/Notice/Consumer/asap
  - DataBreachLaws/PII/biometric
  - DataBreachLaws/PII/health-info
  - DataBreachLaws/RiskOfHarm/not-allowed
---
# Illinois Data Breach Notification Law

## Overview
- **Statutory Citation:** `815 Ill. Comp. Stat. 530/5, 530/10, 530/12, 530/15, 530/20, 530/25`
- **Statute Title:** [Illinois Personal Information Protection Act](https://www.ilga.gov/legislation/ilcs/ilcs3.asp?ActID=2702&ChapterID=67)
- **Jurisdiction Type:** U.S. State
- **Legislative History:**
  - **Original Legislation:** H.B. 1633 (signed June 16, 2005, effective June 27, 2006)
  - **Major Amendments:**
    - H.B. 3025 (signed August 22, 2011, effective January 1, 2012)
    - H.B. 1260 (signed May 6, 2016, effective January 1, 2017)
    - S.B. 1624 (signed August 9, 2019, effective January 1, 2020)
  - **Last Verified:** September 2025

## Application & Covered Entities
Applies to any entity that, for any purpose, handles, collects, disseminates, or otherwise deals with nonpublic personal information that owns or licenses personal information concerning an Illinois resident. Includes both private and governmental entities.

## Key Definitions

### Personal Information
**Category 1:** An individual's first name or first initial and last name in combination with any one or more of the following data elements:
- Social Security number
- Driver's license number or state identification card number
- Account number, credit card number, or debit card number, or an account number or credit card number in combination with any required security code, access code, or password that would permit access to an individual's financial account
- Medical information (any information regarding an individual's medical history, mental or physical condition, or medical treatment or diagnosis by a healthcare professional, including such information provided to a website or mobile application)
- Health insurance information (health insurance policy number or subscriber identification number, any unique identifier used by a health insurer to identify the individual, or any medical information in an individual's health insurance application and claims history, including any appeals records)
- Unique biometric data generated from measurements or technical analysis of human body characteristics used by the owner or licensee to authenticate an individual, such as a fingerprint, retina or iris image, or other unique physical representation or digital representation of biometric data

**Category 2:** Username or email address, in combination with a password or security question and answer that would permit access to an online account.

### Exclusions
Personal information does not include publicly available information that is lawfully made available to the general public from federal, state, or local government records. Personal information does not include information that is encrypted or redacted where the keys to provide access to the information have not also been obtained.

### Breach of Security
An unauthorized acquisition of computerized data that compromises the security, confidentiality, or integrity of personal information maintained by the entity.

### Good-Faith Exception
Good-faith acquisition of personal information by an employee or agent of the entity for a legitimate purpose of the entity does not constitute a security breach, provided that the personal information is not used for a purpose unrelated to the entity's business or subject to further unauthorized disclosure.

## Notification Requirements & Triggers

### Notification Obligation
Any entity to which the statute applies shall notify the resident at no charge that there has been a breach following discovery or notification of the breach.

### Timing of Notification
In the most expedient time possible and without unreasonable delay, but in no event later than when the data collector provides notice to consumers pursuant to this section.

### Notification Methods
Notice may be provided by one of the following methods:
- Written notice
- Electronic notice, if consistent with 15 U.S.C. § 7001 (E-Sign Act)
- For breaches involving username/email and password/security questions only, in "electronic or other form"

### Content of Notice to Individuals
**Generally:** For a breach of personal information other than username/email and password/security question, the notice shall include:
- The toll-free numbers and addresses for consumer reporting agencies
- The toll-free number, address, and website address for the Federal Trade Commission
- A statement that the individual can obtain information from these sources about fraud alerts and security freezes

**Note:** The notice shall NOT include the number of Illinois residents affected by the breach.

**Online Account Credentials Only:** Notice may be provided in electronic or other form directing the Illinois resident whose personal information has been breached to promptly change his or her username or password and security question or answer, as applicable, or to take other steps appropriate to protect all online accounts for which the resident uses the same username or email address and password or security question and answer.

### Attorney General Notification
**Requirement:** Any entity required to notify more than **500** Illinois residents must provide notice to the Attorney General of the breach.

**Timing:** Notice must be provided without unreasonable delay, but in no event later than when the data collector provides notice to consumers.

**Required Information:** Notice to the Attorney General must include:
- A description of the nature of the breach of security
- The date of the breach
- The number of Illinois residents affected by such incident at the time of notification
- Any steps the entity has taken or plans to take relating to the incident

**Late Notification:** If the date of the breach is unknown at the time the notice is sent to the Attorney General, the entity shall send the Attorney General the date of the breach as soon as possible.

### Third-Party Data Notification
Any entity that maintains or stores computerized data that includes personal information that the entity does not own or license shall notify the owner or licensee of the information of any breach of the security of the data immediately following discovery, if the personal information was, or is reasonably believed to have been, acquired by an unauthorized person. Such entities shall cooperate with the data owner or licensee in matters relating to the breach, including:
- Giving notice of the (approximate) date and nature of the breach
- Informing the owner or licensee of steps taken or planned relating to the breach

### Substitute Notice Available
If the entity demonstrates that:
- The cost of providing notice would exceed **$250,000**, OR
- The affected class of subject persons to be notified exceeds **500,000**, OR
- The entity does not have sufficient contact information

Substitute notice shall consist of all of the following:
- Email notice, if the entity has email addresses for the subject persons
- Conspicuous posting of the notice on the entity's website, if the entity maintains one
- Notification to major statewide media or, if the breach impacts residents in one geographic area, to prominent local media in areas where affected individuals are likely to reside if such notice is reasonably calculated to give actual notice to persons whom notice is required

## Exemptions, Penalties, and Other Provisions

### Encryption Safe Harbor
The law provides a safe harbor for encrypted data, unless the key or access mechanism was also obtained.

### Own Notification Policy Exemption
An entity that maintains its own notification procedures as part of an information security policy for the treatment of personal information and is otherwise consistent with the timing requirements of the statute shall be deemed in compliance with the notification requirements of the statute if the entity notifies subject persons in accordance with its policies in the event of a breach of the security of the system data.

### HIPAA Compliance
Any entity that is subject to and in compliance with the privacy and security standards under the Health Insurance Portability and Accountability Act of 1996 and the Health Information Technology for Economic and Clinical Health Act (HITECH) shall be deemed to be in compliance, provided that any entity required to provide notification of a breach to the Secretary of Health and Human Services pursuant to HITECH also provides such notification to the Attorney General within **5 business days** of notifying the Secretary.

### Penalties
Violation of the statute constitutes an unlawful practice under the Illinois Consumer Fraud and Deceptive Business Practices Act.

### Private Right of Action
No explicit private right of action is provided in the statute itself; however, violations are actionable under the state's consumer protection laws.

## Key Provisions

### Delay for Law Enforcement
Notice may be delayed if a law enforcement agency determines that the notice will impede a criminal investigation and provides the entity with a written request of delay. Notice required by the statute must be made without unreasonable delay and as soon as possible after the law enforcement agency determines that notification will no longer impede the investigation.

### Waiver Not Permitted
Individuals cannot waive their rights under this statute.

### Enforcement
Violation of the statute constitutes an unlawful practice under the Illinois Consumer Fraud and Deceptive Business Practices Act.
