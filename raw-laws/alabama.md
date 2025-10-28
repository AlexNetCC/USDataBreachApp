---
# ===================================================================
# :: CORE INFORMATION
# ===================================================================
state: "Alabama"
state_code: "AL"
jurisdiction_type: "U.S. State"
statute_citation: "Ala. Code § 8-38-1 et seq."
statute_title: "Alabama Data Breach Notification Act"
statute_url: "http://alisondb.legislature.state.al.us/alison/CodeOfAlabama/1975/8-38-1.htm"

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
legislation_bill_1_number: "S.B. 318"
legislation_bill_1_signed_date: "2018-03-28"
legislation_bill_1_effective_date: "2018-06-01"

# ===================================================================
# :: BREACH DEFINITION
# ===================================================================
breach_definition_text: "The unauthorized acquisition of data in electronic form containing sensitive personally identifying information"
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
risk_of_harm_analysis_standard: "Reasonably likely to cause substantial harm"
risk_of_harm_analysis_documentation_required: true
risk_of_harm_analysis_documentation_retention_years: 5
risk_of_harm_analysis_ag_notification_required: true
risk_of_harm_analysis_ag_notification_threshold: 500
risk_of_harm_analysis_ag_notification_timeline_days: 10

# ===================================================================
# :: INDIVIDUAL NOTIFICATION
# ===================================================================
individual_notification_is_required: true
individual_notification_timeline_days: 45
individual_notification_timeline_description: "As expeditiously as possible and without unreasonable delay, taking into account the time necessary to conduct an investigation, and within 45 days of discovering that a breach has occurred and is reasonably likely to cause substantial harm to affected individuals"
individual_notification_extensions_available: false
individual_notification_extension_max_days: 0
individual_notification_extension_request_deadline_days: 0
individual_notification_contents:
  - "The date, estimated date, or estimated date range of the breach"
  - "A description of the PI that was acquired"
  - "A general description of the actions taken by the Entity to restore the security and confidentiality of the PI"
  - "A general description of the steps the affected individuals can take to protect themselves from identity theft"
  - "Contact information for the Entity where individuals can inquire about the breach"
individual_notification_methods:
  - "Written notice"
  - "Email notice"

# ===================================================================
# :: SUBSTITUTE NOTIFICATION
# ===================================================================
substitute_notification_is_available: true
substitute_notification_cost_trigger: 500000
substitute_notification_affected_count_trigger: 100000
substitute_notification_insufficient_contact_info_trigger: true
substitute_notification_other_triggers: []
substitute_notification_methods:
  - "Conspicuous posting on Entity website for 30 days"
  - "Notice to major print and broadcast media in affected areas"

# ===================================================================
# :: ATTORNEY GENERAL NOTIFICATION
# ===================================================================
ag_notification_is_required: true
ag_notification_threshold: 1000
ag_notification_threshold_description: "Required if 1,000 or more residents affected"
ag_notification_timeline_days: 45
ag_notification_timeline_description: "Within 45 days once it is determined that a breach has occurred and is reasonably likely to cause substantial harm to affected individuals"
ag_notification_recipients: null
ag_notification_contents:
  - "A synopsis of the events surrounding the breach"
  - "The number of affected individuals in Alabama"
  - "Any services related to the breach being offered or scheduled to be offered, without charge, by the Entity to individuals, and instructions as to how to use such services"
  - "The name, address, telephone number, and email address of the employee or agent of the Entity from whom additional information may be obtained about the breach"

# ===================================================================
# :: CONSUMER REPORTING AGENCY NOTIFICATION
# ===================================================================
cra_notification_is_required: true
cra_notification_threshold: 1000
cra_notification_threshold_description: "Required if 1,000 or more Alabama residents affected"
cra_notification_timeline_days: 0
cra_notification_timeline_description: "Without unreasonable delay"
cra_notification_recipients: null
cra_notification_contents:
  - "Timing, distribution, and content of the notices to Alabama residents"
  - "Approximate number of affected persons"

# ===================================================================
# :: VENDOR NOTIFICATION (Third-Party Data Processors)
# ===================================================================
vendor_notification_is_required: true
vendor_notification_timeline_days: 10
vendor_notification_timeline_description: "As soon as practicable, but no later than 10 days following the determination of the breach"
owner_liability_for_vendor_failure: "Third-party agent's failure to notify is deemed a violation against the data owner Entity"
vendor_cooperation_required: false

# ===================================================================
# :: EXEMPTIONS
# ===================================================================
exemption_hipaa: true
exemption_hipaa_description: "Must still notify Attorney General if threshold met"
exemption_glba: true
exemption_glba_description: "Must still notify Attorney General if threshold met"
exemption_primary_regulator: true
exemption_primary_regulator_description: "Entity subject to or regulated by federal/state laws with at least as thorough requirements, must still notify AG if 1,000+ residents affected"
exemption_own_notification_policy: false
exemption_own_notification_policy_description: null
exemption_other_description: null

# ===================================================================
# :: ENFORCEMENT
# ===================================================================
enforcement_private_right_of_action: false
enforcement_authority: "Attorney General (exclusive)"
enforcement_authority_is_exclusive: true
enforcement_type_damages_description: "In a representative capacity on behalf of affected individuals (limited to actual damages, plus reasonable attorneys' fees and costs)"

# ===================================================================
# :: PENALTIES
# ===================================================================
enforcement_penalty_per_day: 5000
enforcement_penalty_per_individual: 0
enforcement_penalty_per_record: 0
enforcement_penalty_per_violation: 0
enforcement_penalty_flat_amount: 0
enforcement_penalty_maximum: 500000
enforcement_penalty_basis: "Per breach"
enforcement_penalty_notes: null

# ===================================================================
# :: SPECIAL PROVISIONS
# ===================================================================
provision_law_enforcement_delay: true
provision_law_enforcement_delay_description: "Notice may be delayed if a law enforcement agency determines that notice will impede a criminal investigation or national security"
provision_government_entities_are_subject: true
provision_government_entities_notes: null
provision_waiver_not_permitted: false
provision_notice_at_collection_required: true
provision_other_description: null

# ===================================================================
# :: OBSIDIAN TAGS
# ===================================================================
tags:
  - DataBreachLaws/Breach/trigger/acquisition
  - DataBreachLaws/Exempts/federal-regulator
  - DataBreachLaws/Exempts/glba
  - DataBreachLaws/Exempts/hipaa
  - DataBreachLaws/Notice/AG/required/threshold/1000
  - DataBreachLaws/Notice/AG/required/timing/45days
  - DataBreachLaws/Notice/CRA/required/threshold/1000
  - DataBreachLaws/Notice/Consumer/45days
  - DataBreachLaws/PII/health-info
  - DataBreachLaws/PII/taxpayer-id
  - DataBreachLaws/PII/government-id
  - DataBreachLaws/RiskOfHarm/allowed
---
# Alabama Data Breach Notification Law

## Overview
- **Statutory Citation:** `Ala. Code § 8-38-1 et seq.`
- **Statute Title:** [Alabama Data Breach Notification Act](http://alisondb.legislature.state.al.us/alison/CodeOfAlabama/1975/8-38-1.htm)
- **Jurisdiction Type:** U.S. State
- **Legislative History:**
  - **Original Legislation:** Alabama S.B. 318 (signed into law March 28, 2018)
  - **Effective Date:** June 1, 2018
  - **Last Verified:** September 2025

## Application & Covered Entities
Applies to any person or commercial entity that acquires or uses sensitive personally identifying information, including both private and governmental entities.

## Key Definitions

### Personal Information
An individual's first name or first initial and last name in combination with one or more of the following data elements, **when not encrypted or redacted**:
- Social Security number
- Tax identification number
- Driver's license number or other state-issued identification card number
- Passport number
- Military identification number, or other unique identification number issued on a government document used to verify the identity of a specific individual
- Financial account number, credit card number, or debit card number in combination with any required security code, access code, PIN, or password that would permit access to an individual's financial account
- Username or email address in combination with a password or security question and answer that would permit access to an online account affiliated with the Entity that is reasonably likely to contain or is used to obtain sensitive personally identifying information
- Any information regarding an individual's medical history, mental or physical condition, or medical treatment or diagnosis by a health care professional
- An individual's health insurance policy number or subscriber identification number and any unique identifier used by a health insurer to identify the individual

### Exclusions from Personal Information
- Information lawfully made public by a federal, state, or local government record or widely distributed media
- Information that is truncated, encrypted, or otherwise rendered unusable, unless the encryption key or other credential necessary to render the information usable has also been compromised

### Breach of Security
The unauthorized acquisition of data in electronic form containing sensitive personally identifying information. Factors to consider in determining if an acquisition has occurred include:
- Indications that the information is in the physical possession and control of an unauthorized person (e.g., a lost or stolen computer or other device)
- Indications that the information has been downloaded or copied
- Indications that the information was used by an unauthorized person (e.g., fraudulent accounts opened or instances of identity theft reported)
- Whether the information has been made public

### Exceptions to Breach Definition
- Good-faith acquisition of sensitive personally identifying information by an employee or agent of an Entity is not a security breach, provided that the information is not used for a purpose unrelated to the business or subject to further unauthorized use
- The release of a public record not otherwise subject to confidentiality or nondisclosure requirements is not a breach
- Lawful, investigative, protective, or intelligence activity of a law enforcement or intelligence agency is not a breach

## Notification Requirements & Triggers

### Risk of Harm Standard
Notice is required to affected Alabama residents if the Entity determines that, as a result of a breach of security, personal information has been acquired by an unauthorized person and is **reasonably likely to cause substantial harm** to the affected individuals.

### Timing of Notice to Individuals
As expeditiously as possible and without unreasonable delay, taking into account the time necessary to conduct an investigation, and **within 45 days** of discovering that a breach has occurred and is reasonably likely to cause substantial harm to affected individuals.

### Content of Notice to Individuals
Notice must contain, at a minimum:
- The date, estimated date, or estimated date range of the breach
- A description of the PI that was acquired
- A general description of the actions taken by the Entity to restore the security and confidentiality of the PI
- A general description of the steps the affected individuals can take to protect themselves from identity theft
- Contact information for the Entity where individuals can inquire about the breach

### Method of Notice to Individuals
Notice may be provided by one of the following methods:
- Written notice
- Email notice

### Substitute Notice Available
Substitute notice is available if the Entity demonstrates:
- Excessive cost (greater than $500,000 or excessive relative to the Entity's resources), OR
- More than 100,000 persons are affected, OR
- The Entity does not have sufficient contact information

Substitute notice shall include:
- Conspicuous posting of the notice on the website of the Entity if the Entity maintains one, for a period of 30 days
- Notice to major print and broadcast media, including major media in urban and rural areas where the affected individuals reside

### Attorney General Notification
**Requirement:** Required if the number of individuals requiring notice exceeds **1,000**

**Timing:** Notice must be provided as expeditiously as possible and without unreasonable delay, and **within 45 days** once it is determined that a breach has occurred and is reasonably likely to cause substantial harm to affected individuals

**Required Information:**
- A synopsis of the events surrounding the breach
- The number of affected individuals in Alabama
- Any services related to the breach being offered or scheduled to be offered, without charge, by the Entity to individuals, and instructions as to how to use such services
- The name, address, telephone number, and email address of the employee or agent of the Entity from whom additional information may be obtained about the breach

### Consumer Reporting Agency Notice
- Required if an Entity is required to notify more than **1,000** Alabama residents of a breach
- The Entity shall notify without unreasonable delay all nationwide consumer credit reporting agencies of the timing, distribution, and content of the notices to Alabama residents

### Third-Party Data Notification
- Any third-party agent shall disclose to the Entity for which the information is maintained any breach of the security of the system **as soon as practicable, but no later than 10 days** following the determination of the breach or reason to believe the breach occurred
- Upon receiving notice from a third-party agent, the Entity shall provide notices to the Attorney General and affected individuals
- A third-party agent must provide the Entity with all information that the Entity needs to comply with notice requirements
- A third-party agent may contract with the Entity whereby the third-party agent agrees to handle required notifications

## Exemptions, Penalties, and Other Provisions

### Encryption Safe Harbor
The law provides a safe harbor for data that is encrypted or redacted, provided the encryption key was not also accessed or acquired.

### Regulatory Exemptions
- An Entity is exempt if it is subject to or regulated by (a) federal laws, rules, regulations, procedures, or guidance or (b) state laws, rules, regulations, procedures, or guidance that are at least as thorough as the notice requirements in this law; maintains procedures pursuant to those requirements; provides notice to consumers pursuant to those requirements; and timely provides notice to the Attorney General when the number of affected individuals exceeds 1,000
- Entities subject to and in compliance with HIPAA are deemed compliant, provided they timely provide a copy of the HIPAA notice to the Attorney General if more than 1,000 individuals are notified
- Entities subject to and in compliance with GLBA are deemed compliant, provided they timely provide a copy of the GLBA notice to the Attorney General if more than 1,000 individuals are notified

### Penalties
The Attorney General has exclusive authority to bring an action for civil penalties under the Act. Remedies include:
- Damages in a representative capacity on behalf of affected individuals (limited to actual damages, plus reasonable attorneys' fees and costs)
- Civil penalties assessed up to **$5,000 per day** for failure to comply with the notice provisions, capped at **$500,000 per breach**

### Private Right of Action
The statute does not provide for a private right of action.

## Key Provisions

### Delay for Law Enforcement
Notice may be delayed if a law enforcement agency determines that the notice will impede a criminal investigation or national security, and the law enforcement agency has submitted a written request for the delay. The law enforcement agency may revoke the delay as of a specified date or extend the delay, if necessary.

### Government Entities
Government entities are subject to the Act as well and must provide notice in line with the provisions of the law.

### Attorney General Enforcement
The Attorney General has exclusive authority to bring an action for civil penalties under the Act.
