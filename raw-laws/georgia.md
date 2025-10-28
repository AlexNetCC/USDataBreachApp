---
# ===================================================================
# :: CORE INFORMATION
# ===================================================================
state: "Georgia"
state_code: "GA"
jurisdiction_type: "U.S. State"
statute_citation: "Ga. Code § 10-1-910 et seq."
statute_title: "Georgia Personal Identity Protection Act"
statute_url: "http://ga.elaws.us/law/10-1%7C34"

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
legislation_bill_1_number: "S.B. 230"
legislation_bill_1_signed_date: "2005-05-05"
legislation_bill_1_effective_date: "2005-05-05"
legislation_bill_2_number: "S.B. 236"
legislation_bill_2_signed_date: "2007-05-24"
legislation_bill_2_effective_date: "2007-05-24"

# ===================================================================
# :: BREACH DEFINITION
# ===================================================================
breach_definition_text: "An unauthorized acquisition of an individual's electronic data that compromises the security, confidentiality, or integrity of personal information of such individual maintained by an entity."
breach_trigger: "unauthorized_acquisition"
breach_access_alone_triggers: false
breach_acquisition_alone_triggers: true

# ===================================================================
# :: ENCRYPTION SAFE HARBOR
# ===================================================================
exemption_encryption_safe_harbor: true
exemption_encryption_safe_harbor_negated_if_key_compromised: true
exemption_encryption_description: "Encrypted or redacted data"

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
individual_notification_timeline_description: "In the most expedient time possible and without unreasonable delay, consistent with any measures necessary to determine the scope of the breach and restore the reasonable integrity, security, and confidentiality of the data system"
individual_notification_extensions_available: false
individual_notification_extension_max_days: 0
individual_notification_extension_request_deadline_days: 0
individual_notification_contents:
  - "Date or estimated date of breach"
  - "Description of information involved"
  - "Contact information for the entity"
individual_notification_methods:
  - "Written notice"
  - "Telephone notice"
  - "Electronic notice consistent with 15 U.S.C. § 7001 (E-Sign Act)"

# ===================================================================
# :: SUBSTITUTE NOTIFICATION
# ===================================================================
substitute_notification_is_available: true
substitute_notification_cost_trigger: 50000
substitute_notification_affected_count_trigger: 100000
substitute_notification_insufficient_contact_info_trigger: true
substitute_notification_other_triggers: []
substitute_notification_methods:
  - "Email notice if entity has email addresses for individuals to be notified"
  - "Conspicuous posting on entity website, if entity maintains one"
  - "Notification to major statewide media"

# ===================================================================
# :: ATTORNEY GENERAL NOTIFICATION
# ===================================================================
ag_notification_is_required: false
ag_notification_threshold: null
ag_notification_threshold_description: "No Attorney General notification requirement"
ag_notification_timeline_days: null
ag_notification_timeline_description: null
ag_notification_recipients: null
ag_notification_contents: []

# ===================================================================
# :: CONSUMER REPORTING AGENCY NOTIFICATION
# ===================================================================
cra_notification_is_required: true
cra_notification_threshold: 10000
cra_notification_threshold_description: "If more than 10,000 residents of Georgia are notified at one time"
cra_notification_timeline_days: 0
cra_notification_timeline_description: "Entity shall notify all nationwide consumer reporting agencies without unreasonable delay of timing, distribution, and content of notices"
cra_notification_recipients: null
cra_notification_contents:
  - "Timing, distribution, and content of the notices"

# ===================================================================
# :: VENDOR NOTIFICATION (Third-Party Data Processors)
# ===================================================================
vendor_notification_is_required: true
vendor_notification_timeline_days: 1
vendor_notification_timeline_description: "Any person or business that maintains computerized data on behalf of an entity must notify the other entity of any breach within 24 hours following discovery if personal information was acquired by an unauthorized person"
owner_liability_for_vendor_failure: "Third-party agent failure to notify may result in liability"
vendor_cooperation_required: false

# ===================================================================
# :: EXEMPTIONS
# ===================================================================
exemption_hipaa: false
exemption_hipaa_description: null
exemption_glba: true
exemption_glba_description: "Statute does not apply to entities subject to GLBA"
exemption_primary_regulator: false
exemption_primary_regulator_description: null
exemption_own_notification_policy: true
exemption_own_notification_policy_description: "Entity maintaining own notification procedures as part of information security policy and consistent with timing requirements deemed in compliance if notifies individuals in accordance with policies"
exemption_other_description: null

# ===================================================================
# :: ENFORCEMENT
# ===================================================================
enforcement_private_right_of_action: false
enforcement_authority: "Attorney General"
enforcement_authority_is_exclusive: false
enforcement_type_damages_description: "Unfair or deceptive trade practice"

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
enforcement_penalty_notes: "Violation treated as unfair or deceptive trade practice; specific penalty amounts not defined in data breach statute"

# ===================================================================
# :: SPECIAL PROVISIONS
# ===================================================================
provision_law_enforcement_delay: true
provision_law_enforcement_delay_description: "Notice may be delayed if a law enforcement agency determines that the notice will impede a criminal investigation. Notice required by the statute must be made without unreasonable delay and as soon as possible after the law enforcement agency determines that notification will no longer impede the investigation."
provision_government_entities_are_subject: true
provision_government_entities_notes: "Applies specifically to information brokers and certain government entities (excludes agencies whose records maintained primarily for traffic safety, law enforcement, licensing, or public access to court/property records)"
provision_waiver_not_permitted: false
provision_notice_at_collection_required: false
provision_other_description: "Narrow scope application: Statute applies specifically to information brokers and certain government entities (excludes agencies whose records maintained primarily for traffic safety, law enforcement, licensing, or public access to court/property records)"

# ===================================================================
# :: OBSIDIAN TAGS
# ===================================================================
tags:
  - DataBreachLaws/Breach/trigger/acquisition
  - DataBreachLaws/Exempts/glba
  - DataBreachLaws/Exempts/own-policy
  - DataBreachLaws/Notice/AG/not-required
  - DataBreachLaws/Notice/CRA/required/threshold/10000
  - DataBreachLaws/Notice/Consumer/asap
  - DataBreachLaws/PII/financial-accounts
  - DataBreachLaws/RiskOfHarm/not-allowed
---

# Georgia Data Breach Notification Law

## Overview
- **Statutory Citation:** `Ga. Code § 10-1-910 et seq.`
- **Statute Title:** [Georgia Personal Identity Protection Act](http://ga.elaws.us/law/10-1%7C34)
- **Jurisdiction Type:** U.S. State
- **Legislative History:**
  - **Original Legislation:** S.B. 230 (signed May 5, 2005, effective May 5, 2005)
  - **Major Amendments:**
    - S.B. 236 (signed May 24, 2007, effective May 24, 2007)
  - **Last Verified:** September 2025

## Application & Covered Entities
Applies to any person or entity that:
- For monetary fees or dues, engages in whole or in part in the business of collecting, assembling, evaluating, compiling, reporting, transmitting, transferring, or communicating information concerning individuals for the primary purpose of furnishing personal information to nonaffiliated third parties (information brokers), OR
- Is any state or local agency or subdivision thereof including any department, bureau, authority, public university or college, academy, commission, or other government entity that maintains computerized data that includes personal information of individuals

**Exception:** The statute shall not apply to any governmental agency whose records are maintained primarily for traffic safety, law enforcement, or licensing purposes or for purposes of providing public access to court records or to real or personal property information.

**Note:** The statute has a narrow scope and applies specifically to information brokers and certain government entities.

## Key Definitions

### Personal Information
An individual's first name or first initial and last name in combination with any one or more of the following data elements, when either the name or the data elements are not encrypted or redacted:
- Social Security number
- Driver's license or state identification card number
- Account number, credit card number, debit card number if circumstances exist wherein such a number could be used without additional identifying information, access codes, or passwords
- Account passwords or personal identification numbers or other access codes
- Any of the above items when not in connection with the individual's first name or first initial and last name, if the information compromised would be sufficient to perform or attempt to perform identity theft against the person whose information was compromised

### Exclusions
Personal information does not include publicly available information that is lawfully made available to the general public from federal, state, or local government records.

### Security Breach Definition
An unauthorized acquisition of an individual's electronic data that compromises the security, confidentiality, or integrity of personal information of such individual maintained by an entity.

### Good-Faith Exception
Good-faith acquisition or use of personal information by an employee or agent of an entity for the purposes of such entity is not a breach of the security of the system, provided that the personal information is not used or subject to further unauthorized disclosure.

## Notification Requirements & Triggers

### Notification Obligation
Any entity that maintains computerized data that includes personal information of individuals shall give notice of any breach of the security of the system following discovery or notification of the breach to any resident of Georgia whose unencrypted personal information was, or is reasonably believed to have been, acquired by an unauthorized person.

### Timing of Notification
In the most expedient time possible and without unreasonable delay, consistent with any measures necessary to determine the scope of the breach and restore the reasonable integrity, security, and confidentiality of the data system.

### Notification Methods
Notice may be provided by one of the following methods:
- Written notice
- Telephone notice
- Electronic notice, if the notice provided is consistent with 15 U.S.C. § 7001 (E-Sign Act)

### Content of Notice to Individuals
- Date or estimated date of breach
- Description of information involved
- Contact information for the entity

### Third-Party Data Notification
Any person or business that maintains computerized data on behalf of an entity that includes personal information that the entity does not own shall notify the other entity of any breach of the security of the system within **24 hours** following discovery if the personal information was, or is reasonably believed to have been, acquired by an unauthorized person.

### Notification to Consumer Reporting Agencies
In the event an entity discovers circumstances requiring notification of more than **10,000** residents of Georgia at one time, the entity shall also notify, without unreasonable delay, all nationwide consumer reporting agencies of the timing, distribution, and content of the notices.

### Substitute Notice Available
If an entity demonstrates that:
- The cost of providing notice would exceed **$50,000**, OR
- The affected class of individuals to be notified exceeds **100,000**, OR
- The entity does not have sufficient contact information

Substitute notice shall consist of all of the following:
- Email notice, if the entity has email addresses for the individuals to be notified
- Conspicuous posting of the notice on the entity's website, if the entity maintains one
- Notification to major statewide media

### Own Notification Policy Exception
Any entity that maintains its own notification procedures as part of an information security policy for the treatment of personal information and whose procedures are otherwise consistent with the timing requirements of the statute shall be deemed to be in compliance with the notification requirements of the statute if it notifies the individuals who are the subjects of the notice in accordance with its policies in the event of a breach of the security of the system.

## Exemptions, Penalties, and Other Provisions

### Encryption Safe Harbor
The law provides a safe harbor for encrypted or redacted data.

### Regulatory Exemptions
The statute does not apply to entities subject to GLBA or other federal regulatory exemptions.

### Penalties
A violation is considered an unfair or deceptive trade practice.

### Private Right of Action
The statute does not provide for a private right of action.

## Key Provisions

### Delay for Law Enforcement
Notice may be delayed if a law enforcement agency determines that the notice will impede a criminal investigation. Notice required by the statute must be made without unreasonable delay and as soon as possible after the law enforcement agency determines that notification will no longer impede the investigation.

### Attorney General Notice
No requirement to notify the Georgia Attorney General.
