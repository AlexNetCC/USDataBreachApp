---
# ===================================================================
# :: CORE INFORMATION
# ===================================================================
state: "Mississippi"
state_code: "MS"
jurisdiction_type: "U.S. State"
statute_citation: "Miss. Code § 75-24-29"
statute_title: "Mississippi Notification of Breaches of Security"
statute_url: "https://law.justia.com/codes/mississippi/2013/title-75/chapter-24/general-provisions/section-75-24-29/"

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
legislation_bill_1_number: "H.B. 582"
legislation_bill_1_signed_date: "2010-04-07"
legislation_bill_1_effective_date: "2011-07-01"

# ===================================================================
# :: BREACH DEFINITION
# ===================================================================
breach_definition_text: "An unauthorized acquisition of electronic files, media, databases, or computerized data containing personal information of any Mississippi resident when access to the personal information has not been secured by encryption or by any other method of technology that renders the personal information unreadable or unusable."
breach_trigger: "unauthorized_acquisition"
breach_access_alone_triggers: false
breach_acquisition_alone_triggers: true

# ===================================================================
# :: ENCRYPTION SAFE HARBOR
# ===================================================================
exemption_encryption_safe_harbor: true
exemption_encryption_safe_harbor_negated_if_key_compromised: true
exemption_encryption_description: "Information encrypted or rendered unreadable or unusable"

# ===================================================================
# :: RISK OF HARM ANALYSIS
# ===================================================================
risk_of_harm_analysis_is_required: true
risk_of_harm_analysis_can_eliminate_notification: true
risk_of_harm_analysis_standard: "Notification not required if after appropriate investigation the person reasonably determines that the breach will not likely result in harm to affected individuals"
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
individual_notification_timeline_description: "Notice shall be provided without unreasonable delay subject to the completion of an investigation by the person to determine the nature and scope of the incident, to identify the affected individuals, or to restore the reasonable integrity of the system"
individual_notification_extensions_available: false
individual_notification_extension_max_days: 0
individual_notification_extension_request_deadline_days: 0
individual_notification_contents:
  - "Date or estimated date of breach"
  - "Description of information involved"
  - "Contact information for the entity"
individual_notification_methods:
  - "Written notice"
  - "Telephonic notice"
  - "Electronic notice if primary method of communication or consistent with 15 U.S.C. § 7001 (E-Sign Act)"

# ===================================================================
# :: SUBSTITUTE NOTIFICATION
# ===================================================================
substitute_notification_is_available: true
substitute_notification_cost_trigger: 5000
substitute_notification_affected_count_trigger: 5000
substitute_notification_insufficient_contact_info_trigger: true
substitute_notification_other_triggers: []
substitute_notification_methods:
  - "Email notice if entity has email addresses for subject persons"
  - "Conspicuous posting on entity website, if entity maintains one"
  - "Notification to major statewide media"

# ===================================================================
# :: ATTORNEY GENERAL NOTIFICATION
# ===================================================================
ag_notification_is_required: false
ag_notification_threshold: null
ag_notification_threshold_description: "No specific AG notification requirement; failure to comply constitutes unfair trade practice enforceable by Attorney General"
ag_notification_timeline_days: null
ag_notification_timeline_description: null
ag_notification_recipients: null
ag_notification_contents: []

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
vendor_notification_timeline_description: "A person who maintains computerized data that includes personal information that the person does not own or license shall notify the owner or licensee of the information of any breach of security as soon as practical following its discovery, if the personal information was, or is reasonably believed to have been, acquired by an unauthorized person for fraudulent purposes"
owner_liability_for_vendor_failure: "Third-party must notify owner or licensee as soon as practical after discovery"
vendor_cooperation_required: false

# ===================================================================
# :: EXEMPTIONS
# ===================================================================
exemption_hipaa: false
exemption_hipaa_description: null
exemption_glba: false
exemption_glba_description: null
exemption_primary_regulator: true
exemption_primary_regulator_description: "Entity complying with primary federal regulator rules and notifying affected individuals deemed in compliance"
exemption_own_notification_policy: true
exemption_own_notification_policy_description: "Entity with own notification procedures consistent with timing requirements deemed in compliance if notifies subject persons in accordance with policies"
exemption_other_description: null

# ===================================================================
# :: ENFORCEMENT
# ===================================================================
enforcement_private_right_of_action: false
enforcement_authority: "Attorney General"
enforcement_authority_is_exclusive: false
enforcement_type_damages_description: "Failure to comply is an unfair trade practice enforceable by Attorney General"

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
enforcement_penalty_notes: "Failure to comply constitutes unfair trade practice enforceable by Attorney General; specific penalty amounts not defined in data breach statute"

# ===================================================================
# :: SPECIAL PROVISIONS
# ===================================================================
provision_law_enforcement_delay: true
provision_law_enforcement_delay_description: "Any notification shall be delayed for a reasonable period of time if a law enforcement agency determines that the notification will impede a criminal investigation or national security and the law enforcement agency has made a request that the notification be delayed. Any such delayed notification shall be made after the law enforcement agency determines that notification will not compromise the criminal investigation or national security."
provision_government_entities_are_subject: true
provision_government_entities_notes: null
provision_waiver_not_permitted: false
provision_notice_at_collection_required: false
provision_other_description: "Exceptionally low substitute notification thresholds: $5,000 cost (lowest in the nation) and 5,000 affected individuals (among the lowest). No AG or CRA notification requirements. Risk of harm analysis can eliminate notification. Enforcement via unfair trade practice."

# ===================================================================
# :: OBSIDIAN TAGS
# ===================================================================
tags:
  - DataBreachLaws/Breach/trigger/acquisition
  - DataBreachLaws/Exempts/federal-regulator
  - DataBreachLaws/Exempts/own-policy
  - DataBreachLaws/Notice/AG/not-required
  - DataBreachLaws/Notice/CRA/not-required
  - DataBreachLaws/Notice/Consumer/asap
  - DataBreachLaws/PII/financial-accounts
  - DataBreachLaws/RiskOfHarm/allowed
---

# Mississippi Data Breach Notification Law

## Overview
- **Statutory Citation:** `Miss. Code § 75-24-29`
- **Statute Title:** [Mississippi Notification of Breaches of Security](https://law.justia.com/codes/mississippi/2013/title-75/chapter-24/general-provisions/section-75-24-29/)
- **Jurisdiction Type:** U.S. State
- **Legislative History:**
  - **Original Legislation:** H.B. 582 (signed into law April 7, 2010, effective July 1, 2011)
  - **Last Verified:** September 2025

## Application & Covered Entities
Any person who conducts business in Mississippi and who, in the ordinary course of the person's business functions, owns, licenses, or maintains the personal information of any Mississippi resident.

## Key Definitions

### Personal Information
An individual's first name or first initial and last name in combination with any one or more of the following data elements, when the data element is not secured by encryption or another method of technology that makes electronic data unreadable or unusable:
- Social Security number
- Driver's license number or state identification card number
- Account number, credit card number, or debit card number in combination with any required security code, access code, or password that would permit access to an individual's financial account

### Exclusions
Personal information does not include publicly available information that is lawfully made available to the general public from federal, state, or local government records.

### Breach of Security
An unauthorized acquisition of electronic files, media, databases, or computerized data containing personal information of any Mississippi resident when access to the personal information has not been secured by encryption or by any other method of technology that renders the personal information unreadable or unusable.

### Good-Faith Exception
Good-faith acquisition by an employee or agent of an entity for legitimate purposes of the entity is not a breach, provided that the personal information is not used for or is not subject to further unauthorized disclosure.

## Notification Requirements & Triggers

### Notification Obligation
A person who conducts business in Mississippi shall disclose any breach of security to all affected individuals.

**Exception:** Notification is not required if, after an appropriate investigation, the person reasonably determines that the breach will not likely result in harm to the affected individuals.

### Timing of Notification
Notice shall be provided without unreasonable delay subject to the completion of an investigation by the person to determine the nature and scope of the incident, to identify the affected individuals, or to restore the reasonable integrity of the system.

### Notification Methods
Notice may be provided by one of the following methods:
- Written notice
- Telephonic notice
- Electronic notice, if the Entity's primary method of communication with the individual is by electronic means, or if the notice provided is consistent with 15 U.S.C. § 7001 (E-Sign Act)

### Content of Notice to Individuals
- Date or estimated date of breach
- Description of information involved
- Contact information for the entity

### Substitute Notice Available
If the Entity demonstrates that:
- The cost of providing notice would exceed **$5,000**, OR
- The affected class of persons to be notified exceeds **5,000**, OR
- The Entity does not have sufficient contact information

Substitute notice shall consist of all of the following:
- Email notice, if the Entity has email addresses for subject persons
- Conspicuous posting of the notice on the Entity's website, if the Entity maintains one
- Notification to major statewide media

### Third-Party Data Notification
A person who maintains computerized data that includes personal information that the person does not own or license shall notify the owner or licensee of the information of any breach of security as soon as practical following its discovery, if the personal information was, or is reasonably believed to have been, acquired by an unauthorized person for fraudulent purposes.

## Exemptions, Penalties, and Other Provisions

### Encryption Safe Harbor
The law provides a safe harbor for information that is encrypted or otherwise rendered unreadable or unusable.

### Own Notification Policy Exemption
An Entity that maintains its own notification procedures as part of an information security policy for the treatment of personal information and whose procedures are otherwise consistent with the timing requirements of the statute shall be deemed to be in compliance with the notification requirements of the statute if the Entity notifies subject persons in accordance with its policies in the event of a breach of security.

### Compliance with Federal Regulations
Any person that maintains a security breach procedure pursuant to the rules, regulations, or guidelines established by the primary federal functional regulator shall be deemed to be in compliance with this section, provided the person notifies affected individuals in accordance with the policies or the rules, regulations, procedures, or guidelines.

### Private Right of Action
The statute explicitly states it does not create a private right of action.

## Key Provisions

### Delay for Law Enforcement
Any notification shall be delayed for a reasonable period of time if a law enforcement agency determines that the notification will impede a criminal investigation or national security and the law enforcement agency has made a request that the notification be delayed. Any such delayed notification shall be made after the law enforcement agency determines that notification will not compromise the criminal investigation or national security and so notifies the person of that determination.

### Attorney General Enforcement
Failure to comply with the requirements of the act shall constitute an unfair trade practice and shall be enforced by the Attorney General.
