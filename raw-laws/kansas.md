---
# ===================================================================
# :: CORE INFORMATION
# ===================================================================
state: "Kansas"
state_code: "KS"
jurisdiction_type: "U.S. State"
statute_citation: "Kan. Stat. § 50-7a01 et seq."
statute_title: "Kansas Information Technology Security Act"
statute_url: "http://ksrevisor.org/statutes/chapters/ch50/050_007a_0001.html"

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
legislation_bill_1_number: "S.B. 196"
legislation_bill_1_signed_date: "2006-04-19"
legislation_bill_1_effective_date: "2007-01-01"

# ===================================================================
# :: BREACH DEFINITION
# ===================================================================
breach_definition_text: "Any unauthorized access to and acquisition of unencrypted or un-redacted computerized data that compromises the security, confidentiality, or integrity of personal information maintained by an entity and that causes, or such entity reasonably believes has caused or will cause, identity theft to any consumer."
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
risk_of_harm_analysis_can_eliminate_notification: true
risk_of_harm_analysis_standard: "Notification not required if after good-faith, reasonable, and prompt investigation entity determines that personal information has not been and will not be misused"
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
individual_notification_timeline_description: "Most expedient time possible and without unreasonable delay, consistent with measures necessary to determine scope of breach and restore reasonable integrity of computerized data system"
individual_notification_extensions_available: false
individual_notification_extension_max_days: 0
individual_notification_extension_request_deadline_days: 0
individual_notification_contents:
  - "Date or estimated date of breach"
  - "Description of information involved"
  - "Contact information for the entity"
individual_notification_methods:
  - "Written notice"
  - "Electronic notice, if consistent with 15 U.S.C. § 7001 (E-Sign Act)"

# ===================================================================
# :: SUBSTITUTE NOTIFICATION
# ===================================================================
substitute_notification_is_available: true
substitute_notification_cost_trigger: 100000
substitute_notification_affected_count_trigger: 5000
substitute_notification_insufficient_contact_info_trigger: true
substitute_notification_other_triggers: []
substitute_notification_methods:
  - "Email notice if entity has email addresses for affected class of consumers"
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
cra_notification_threshold: 1000
cra_notification_threshold_description: "If entity must notify more than 1,000 consumers at one time"
cra_notification_timeline_days: 0
cra_notification_timeline_description: "Without unreasonable delay"
cra_notification_recipients: "All nationwide consumer reporting agencies"
cra_notification_contents:
  - "Timing, distribution, and content of the notices"

# ===================================================================
# :: VENDOR NOTIFICATION (Third-Party Data Processors)
# ===================================================================
vendor_notification_is_required: true
vendor_notification_timeline_days: 0
vendor_notification_timeline_description: "Following discovery of breach if personal information was or is reasonably believed to have been accessed and acquired by unauthorized person"
owner_liability_for_vendor_failure: "Third-party agent must comply with notification requirement"
vendor_cooperation_required: false

# ===================================================================
# :: EXEMPTIONS
# ===================================================================
exemption_hipaa: false
exemption_hipaa_description: null
exemption_glba: false
exemption_glba_description: null
exemption_primary_regulator: true
exemption_primary_regulator_description: "Notification pursuant to laws, rules, regulations, guidance, or guidelines established by entity's primary or functional state or federal regulator is sufficient"
exemption_own_notification_policy: true
exemption_own_notification_policy_description: "Entity maintaining own notification procedures as part of information security policy, with procedures consistent with timing requirements, deemed in compliance if notifies affected consumers in accordance with its policies"
exemption_other_description: null

# ===================================================================
# :: ENFORCEMENT
# ===================================================================
enforcement_private_right_of_action: false
enforcement_authority: "Attorney General and Insurance Commissioner"
enforcement_authority_is_exclusive: false
enforcement_type_damages_description: "Enforce compliance and enjoin future violations"

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
enforcement_penalty_notes: "Attorney General and Insurance Commissioner may enforce compliance and enjoin future violations; specific penalty amounts not defined in data breach statute"

# ===================================================================
# :: SPECIAL PROVISIONS
# ===================================================================
provision_law_enforcement_delay: true
provision_law_enforcement_delay_description: "Notice may be delayed if law enforcement agency determines notice will impede criminal investigation. Notice shall be made in good faith, without unreasonable delay, and as soon as possible after law enforcement determines notification will no longer impede investigation."
provision_government_entities_are_subject: true
provision_government_entities_notes: null
provision_waiver_not_permitted: false
provision_notice_at_collection_required: false
provision_other_description: "Low substitute notification threshold: 5,000 affected individuals (one of the lowest thresholds in the nation). Dual enforcement authority: Attorney General and Insurance Commissioner both have authority to enforce compliance."

# ===================================================================
# :: OBSIDIAN TAGS
# ===================================================================
tags:
  - DataBreachLaws/Breach/trigger/acquisition
  - DataBreachLaws/Exempts/federal-regulator
  - DataBreachLaws/Exempts/own-policy
  - DataBreachLaws/Notice/AG/not-required
  - DataBreachLaws/Notice/CRA/required/threshold/1000
  - DataBreachLaws/Notice/Consumer/asap
  - DataBreachLaws/PII/financial-accounts
  - DataBreachLaws/RiskOfHarm/allowed
---

# Kansas Data Breach Notification Law

## Overview
- **Statutory Citation:** `Kan. Stat. § 50-7a01 et seq.`
- **Statute Title:** [Kansas Information Technology Security Act](http://ksrevisor.org/statutes/chapters/ch50/050_007a_0001.html)
- **Jurisdiction Type:** U.S. State
- **Legislative History:**
  - **Original Legislation:** S.B. 196 (signed April 19, 2006, effective January 1, 2007)
  - **Last Verified:** September 2025

## Application & Covered Entities
Applies to any individual, legal or government entity that conducts business in Kansas and that owns or licenses computerized data that includes personal information. Includes both private and governmental entities.

## Key Definitions

### Personal Information
A consumer's first name or first initial and last name linked to any one or more of the following data elements that relate to the consumer, when the data elements are neither encrypted nor redacted:
- Social Security number
- Driver's license number or state identification card number
- Account number, credit card number, or debit card number, alone or in combination with any required security code, access code, or password that would permit access to a consumer's financial account

### Exclusions
Personal information does not include publicly available information that is lawfully made available to the general public from federal, state, or local government records.

### Security Breach Definition
Any unauthorized access to and acquisition of unencrypted or un-redacted computerized data that compromises the security, confidentiality, or integrity of personal information maintained by an entity and that causes, or such entity reasonably believes has caused or will cause, identity theft to any consumer.

### Good-Faith Exception
Good-faith acquisition of personal information by an employee or agent of an entity for the purposes of the entity is not a breach of the security of the system, provided that the personal information is not used for or is not subject to further unauthorized disclosure.

## Notification Requirements & Triggers

### Notification Obligation
An entity to which the statute applies shall, when it becomes aware of any breach of the security of the system, give notice as soon as possible to the affected Kansas resident.

**Exception:** Notification is not required if after a good-faith, reasonable, and prompt investigation the entity determines that the personal information has not been and will not be misused.

### Timing of Notification
Notice must be made in the most expedient time possible and without unreasonable delay, consistent with any measures necessary to determine the scope of the breach and to restore the reasonable integrity of the computerized data system.

### Notification Methods
Notice may be provided by one of the following methods:
- Written notice
- Electronic notice, if the notice provided is consistent with 15 U.S.C. § 7001 (E-Sign Act)

### Content of Notice to Individuals
- Date or estimated date of breach
- Description of information involved
- Contact information for the entity

### Notification to Consumer Reporting Agencies
In the event that an entity must notify more than **1,000** consumers at one time, the entity shall also notify, without unreasonable delay, all nationwide consumer reporting agencies of the timing, distribution, and content of the notices.

### Third-Party Data Notification
An entity that maintains computerized data that includes personal information that the entity does not own or license shall give notice to the owner or licensee of the information of any breach of the security of the data following discovery of a breach, if the personal information was, or is reasonably believed to have been, accessed and acquired by an unauthorized person.

### Substitute Notice Available
If the entity required to provide notice demonstrates that:
- The cost of providing notice will exceed **$100,000**, OR
- The affected class of consumers to be notified exceeds **5,000**, OR
- The entity does not have sufficient contact information to provide notice

Substitute notice shall consist of all of the following:
- Email notice, if the entity has email addresses for the affected class of consumers
- Conspicuous posting of the notice on the entity's website, if the entity maintains one
- Notification to major statewide media

## Exemptions, Penalties, and Other Provisions

### Encryption Safe Harbor
The law provides a safe harbor for encrypted or redacted data.

### Primary Regulator Exemption
Notification pursuant to laws, rules, regulations, guidance, or guidelines established by an entity's primary or functional state or federal regulator is sufficient.

### Own Notification Policy Exemption
An entity that maintains its own notification procedures as part of an information security policy for the treatment of personal information, and whose procedures are otherwise consistent with the timing requirements of the statute, is deemed to be in compliance with the notice requirements of the statute if the entity notifies affected consumers in accordance with its policies.

### Private Right of Action
The statute does not provide for a private right of action.

## Key Provisions

### Delay for Law Enforcement
Notice may be delayed if a law enforcement agency determines that the notice will impede a criminal investigation. Notice shall be made in good faith, without unreasonable delay, and as soon as possible after the law enforcement agency determines that notification will no longer impede the investigation.

### Attorney General and Insurance Commissioner Enforcement
The state Attorney General (or Insurance Commissioner in the case of an insurance company) may bring actions at law or equity to enforce compliance and enjoin future violations.
