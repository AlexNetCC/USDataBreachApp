---
# ===================================================================
# :: CORE INFORMATION
# ===================================================================
state: "West Virginia"
state_code: "WV"
jurisdiction_type: "U.S. State"
statute_citation: "W. Va. Code § 46A-2A-101 et seq."
statute_title: "West Virginia Consumer Credit and Protection Act"
statute_url: "http://www.wvlegislature.gov/wvcode/Code.cfm?chap=46a&art=2A"

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
legislation_bill_1_number: "S.B. 340"
legislation_bill_1_signed_date: "2008-03-27"
legislation_bill_1_effective_date: "2008-06-06"

# ===================================================================
# :: BREACH DEFINITION
# ===================================================================
breach_definition_text: "Unauthorized access and acquisition of unencrypted and unredacted computerized data that compromises the security or confidentiality of personal information maintained by an entity as part of a database of personal information regarding multiple individuals and that causes the entity to reasonably believe that the breach of security has caused or will cause identity theft or other fraud to any resident of West Virginia."
breach_trigger: "unauthorized_access_and_acquisition"
breach_access_alone_triggers: false
breach_acquisition_alone_triggers: true

# ===================================================================
# :: ENCRYPTION SAFE HARBOR
# ===================================================================
exemption_encryption_safe_harbor: true
exemption_encryption_safe_harbor_negated_if_key_compromised: true
exemption_encryption_description: "Personal information that is encrypted or redacted"

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
individual_notification_timeline_description: "Without unreasonable delay, except to take measures necessary to determine scope of breach and restore reasonable integrity of system"
individual_notification_extensions_available: false
individual_notification_extension_max_days: 0
individual_notification_extension_request_deadline_days: 0
individual_notification_contents:
  - "Description of the categories of information reasonably believed to have been accessed or acquired"
  - "Telephone number or website address to contact the entity for more information"
  - "Toll-free contact telephone numbers and addresses for major credit reporting agencies and information on fraud alerts and security freezes"
individual_notification_methods:
  - "Written notice to the postal address in the records of the entity"
  - "Telephonic notice"
  - "Electronic notice (if E-Sign Act compliant)"

# ===================================================================
# :: SUBSTITUTE NOTIFICATION
# ===================================================================
substitute_notification_is_available: true
substitute_notification_cost_trigger: 50000
substitute_notification_affected_count_trigger: 100000
substitute_notification_insufficient_contact_info_trigger: true
substitute_notification_other_triggers: []
substitute_notification_methods:
  - "Email notice if entity has email addresses for affected persons"
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
cra_notification_is_required: true
cra_notification_threshold: 1000
cra_notification_threshold_description: "If entity required to notify more than 1,000 persons at one time"
cra_notification_timeline_days: 0
cra_notification_timeline_description: "Without unreasonable delay"
cra_notification_recipients: "All nationwide consumer reporting agencies"
cra_notification_contents:
  - "Timing, distribution, and content of notices"

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
exemption_hipaa: false
exemption_hipaa_description: null
exemption_glba: false
exemption_glba_description: null
exemption_primary_regulator: true
exemption_primary_regulator_description: "Entities complying with primary or functional regulator requirements"
exemption_own_notification_policy: true
exemption_own_notification_policy_description: "Entity with own notification policy consistent with timing requirements"
exemption_other_description: "Federal Interagency Guidance: Financial institutions complying with Federal Interagency Guidance on Response Programs for Unauthorized Access to Customer Information and Customer Notice"

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
provision_law_enforcement_delay_description: "Notice may be delayed if law enforcement agency determines notification will impede criminal or civil investigation or jeopardize national or homeland security. Notice must be made without unreasonable delay after law enforcement determines notification will no longer impede investigation."
provision_government_entities_are_subject: true
provision_government_entities_notes: null
provision_waiver_not_permitted: false
provision_notice_at_collection_required: false
provision_other_description: "NO ATTORNEY GENERAL NOTIFICATION REQUIRED (one of only 2 states: Tennessee and West Virginia). Both access AND acquisition required. Breach definition includes reasonable belief that identity theft/fraud has occurred or will occur. Lower substitute thresholds: $50,000 cost OR 100,000 affected. CRA threshold of 1,000. NO HIPAA or GLBA exemptions (unusual). Federal Interagency Guidance exemption available. Encryption key compromise provision: notice required if encrypted data accessed in unencrypted form or breach involves person with encryption key access. Single legislative bill (2008, no amendments)."

# ===================================================================
# :: OBSIDIAN TAGS
# ===================================================================
tags:
  - DataBreachLaws/Breach/trigger/acquisition
  - DataBreachLaws/Exempts/federal-interagency-guidance
  - DataBreachLaws/Exempts/own-policy
  - DataBreachLaws/Exempts/primary-regulator
  - DataBreachLaws/Notice/AG/not-required
  - DataBreachLaws/Notice/CRA/required/threshold/1000
  - DataBreachLaws/Notice/Consumer/asap
  - DataBreachLaws/PII/financial-accounts
  - DataBreachLaws/PII/government-id
  - DataBreachLaws/RiskOfHarm/not-allowed
---

# West Virginia Data Breach Notification Law

## Overview
- **Statutory Citation:** `W. Va. Code § 46A-2A-101 et seq.`
- **Statute Title:** [West Virginia Consumer Credit and Protection Act](http://www.wvlegislature.gov/wvcode/Code.cfm?chap=46a&art=2A)
- **Jurisdiction Type:** U.S. State
- **Legislative History:**
  - **Original Legislation:** S.B. 340 (signed March 27, 2008, effective June 6, 2008)
  - **Last Verified:** September 2025

## Application & Covered Entities
Applies to any individual, government entity, or any other legal entity, whether for profit or not for profit, that owns or licenses computerized data that includes personal information. Includes both private and governmental entities.

## Key Definitions

### Personal Information
The first name or first initial and last name linked to any one or more of the following data elements that relate to a resident of West Virginia, when the data elements are neither encrypted nor redacted:
- Social Security number
- Driver's license number or state identification card number issued in lieu of a driver's license
- Account number, credit card number, or debit card number in combination with any required security code, access code, or password that would permit access to a resident's financial accounts

### Exclusions
Personal information does not include information that is lawfully obtained from publicly available information, or from federal, state, or local government records lawfully made available to the general public.

### Breach of Security
Unauthorized access and acquisition of unencrypted and unredacted computerized data that compromises the security or confidentiality of personal information maintained by an entity as part of a database of personal information regarding multiple individuals and that causes the entity to reasonably believe that the breach of security has caused or will cause identity theft or other fraud to any resident of West Virginia.

### Special Encryption Provision
An entity must give notice of the breach of the security of the system if encrypted information is accessed and acquired in an unencrypted form or if the security breach involves a person with access to the encryption key and the entity reasonably believes that such breach has caused or will cause identity theft or other fraud to any resident of the state.

### Good-Faith Exception
Good-faith acquisition of personal information by an employee or agent of an entity for the purposes of the entity is not a breach of the security of the system, provided that the personal information is not used for a purpose other than a lawful purpose of the entity or subject to further unauthorized disclosure.

## Notification Requirements & Triggers

### Notification Obligation
Any entity to which the statute applies shall give notice of any breach of the security of the system to any resident of West Virginia whose unencrypted and unredacted personal information was or is reasonably believed to have been accessed and acquired by an unauthorized person and that causes, or the individual or entity reasonably believes has caused or will cause, identity theft or other fraud to any resident of West Virginia.

### Timing of Notification
Except to take any measures necessary to determine the scope of the breach and to restore the reasonable integrity of the system, the notice shall be made without unreasonable delay.

### Notification Methods
Notice may be provided by one of the following methods:
- Written notice to the postal address in the records of the entity
- Telephonic notice
- Electronic notice, if the notice provided is consistent with the provisions regarding electronic records and signatures set forth in 15 U.S.C. § 7001 (E-Sign Act)

### Content of Notice to Individuals
- To the extent possible, a description of the categories of information that were reasonably believed to have been accessed or acquired
- A telephone number or website address that the individual may use to contact the entity or the agent of the entity and from whom the individual may learn what types of information the entity maintained about that individual
- The toll-free contact telephone numbers and addresses for the major credit reporting agencies and information on how to place a fraud alert or security freeze

### Consumer Reporting Agency Notification
If an entity is required to notify more than **1,000** persons of a breach of security, the entity shall also notify, without unreasonable delay, all nationwide consumer reporting agencies of the timing, distribution, and content of the notices.

Note: Nothing in this subsection shall be construed to require the entity to provide to the consumer reporting agency the names or other personal information of breach notice recipients.

### Substitute Notice Available
If an entity demonstrates that:
- The cost of providing notice will exceed **$50,000**, OR
- The affected class of residents to be notified exceeds **100,000** persons, OR
- The entity does not have sufficient contact information

Substitute notice consists of any two of the following:
- Email notice, if the entity has email addresses for the members of the affected class of residents
- Conspicuous posting of the notice on the entity's website, if the entity maintains one
- Notice to major statewide media

### Third-Party Data Notification
An entity that maintains computerized data that includes personal information that the entity does not own or license shall give notice to the owner or licensee of the information of any breach of the security of the system as soon as practicable following discovery, if the personal information was or the entity reasonably believes was accessed and acquired by an unauthorized person.

## Exemptions, Penalties, and Other Provisions

### Encryption Safe Harbor
Personal information does not include information that is encrypted or redacted.

### Own Notification Policy Exemption
An entity that maintains its own notification procedures as part of an information privacy or security policy for the treatment of personal information that are consistent with the timing requirements of the statute shall be deemed to be in compliance with the notification requirements if the entity notifies residents of West Virginia in accordance with its procedures in the event of a breach of security of the system.

### Federal Interagency Guidance Exemption
A financial institution that responds in accordance with the notification guidelines prescribed by the Federal Interagency Guidance on Response Programs for Unauthorized Access to Customer Information and Customer Notice is deemed to be in compliance with the statute.

### Primary Regulator Exemption
An entity that complies with the notification requirements or procedures pursuant to the rules, regulation, procedures, or guidelines established by the entity's primary or functional regulator shall be in compliance with the statute.

## Key Provisions

### Delay for Law Enforcement
Notice required by this section may be delayed if a law enforcement agency determines and advises the entity that the notice will impede a criminal or civil investigation or homeland or national security. Notice required by this section must be made without unreasonable delay after the law enforcement agency determines that notification will no longer impede the investigation or jeopardize national or homeland security.

### Attorney General Enforcement
Attorney General enforcement is available.
