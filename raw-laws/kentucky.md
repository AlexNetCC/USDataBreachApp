---
# ===================================================================
# :: CORE INFORMATION
# ===================================================================
state: "Kentucky"
state_code: "KY"
jurisdiction_type: "U.S. State"
statute_citation: "Ky. Rev. Stat. § 365.732; § 61.931 et seq."
statute_title: "Kentucky Breach of Security Act"
statute_url: "https://apps.legislature.ky.gov/LAW/STATUTES/STATUTE.ASPX?ID=43326"

# ===================================================================
# :: METADATA
# ===================================================================
source_documentation: "State statute analysis and legislative materials"
last_verified: "2025-09-01"
verified_by: "Foley & Lardner LLP"
known_contradictions: false
known_contradictions_description: "Obligations for state agencies and private parties that receive, collect or maintain data from state agencies are different and more detailed. See Ky. Rev. Stat. § 61.931 et seq."
complexity_level: "moderate"

# ===================================================================
# :: LEGISLATIVE HISTORY
# ===================================================================
legislation_bill_1_number: "H.B. 232"
legislation_bill_1_signed_date: "2014-04-10"
legislation_bill_1_effective_date: "2014-07-15"
legislation_bill_2_number: "H.B. 5"
legislation_bill_2_signed_date: "2014-04-10"
legislation_bill_2_effective_date: "2015-01-01"

# ===================================================================
# :: BREACH DEFINITION
# ===================================================================
breach_definition_text: "The unauthorized acquisition of unencrypted, unredacted computerized data that compromises the security, confidentiality, or integrity of personal information maintained by the entity as part of a database regarding multiple individuals that actually causes or leads the entity to believe has caused or will cause, identity theft or fraud against any Kentucky resident."
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
individual_notification_timeline_description: "Without unreasonable delay in most expedient time possible, subject to legitimate needs of law enforcement and measures necessary to determine scope of breach and restore reasonable integrity of data system"
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
substitute_notification_cost_trigger: 250000
substitute_notification_affected_count_trigger: 500000
substitute_notification_insufficient_contact_info_trigger: true
substitute_notification_other_triggers: []
substitute_notification_methods:
  - "Email notice if entity has email addresses for affected persons"
  - "Conspicuous posting on entity website, if entity maintains one"
  - "Notification to major statewide media"

# ===================================================================
# :: ATTORNEY GENERAL NOTIFICATION
# ===================================================================
ag_notification_is_required: false
ag_notification_threshold: null
ag_notification_threshold_description: "No Attorney General notification required under general statute (Ky. Rev. Stat. § 365.732). Note: State agencies under § 61.931 et seq. have different requirements."
ag_notification_timeline_days: null
ag_notification_timeline_description: null
ag_notification_recipients: null
ag_notification_contents: []

# ===================================================================
# :: CONSUMER REPORTING AGENCY NOTIFICATION
# ===================================================================
cra_notification_is_required: true
cra_notification_threshold: 1000
cra_notification_threshold_description: "If entity required to notify more than 1,000 persons"
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
vendor_notification_timeline_description: "As soon as reasonably practicable following discovery if personal information was or is reasonably believed to have been acquired by unauthorized person. Special rule: For private companies contracting with state agencies, notification must occur within 72 hours of determining breach occurred."
owner_liability_for_vendor_failure: "Third-party agent must comply with notification requirements; state agency bears responsibility for notifying individuals and attorney general"
vendor_cooperation_required: false

# ===================================================================
# :: EXEMPTIONS
# ===================================================================
exemption_hipaa: true
exemption_hipaa_description: "Entities subject to federal Health Insurance Portability and Accountability Act of 1996 (HIPAA)"
exemption_glba: true
exemption_glba_description: "Entities subject to Title V of Gramm-Leach-Bliley Act"
exemption_primary_regulator: false
exemption_primary_regulator_description: null
exemption_own_notification_policy: true
exemption_own_notification_policy_description: "Entity with own notification procedures consistent with timing requirements"
exemption_other_description: "Kentucky agencies, Kentucky local governments, and political subdivisions are exempt from general statute but subject to separate provisions under Ky. Rev. Stat. § 61.931 et seq."

# ===================================================================
# :: ENFORCEMENT
# ===================================================================
enforcement_private_right_of_action: true
enforcement_authority: "Attorney General and private individuals"
enforcement_authority_is_exclusive: false
enforcement_type_damages_description: "Private right of action available under Ky. Rev. Stat. § 446.070 for persons injured by violation of statute"

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
enforcement_penalty_notes: "Private right of action available for persons injured by violation; specific penalty amounts not defined in data breach statute"

# ===================================================================
# :: SPECIAL PROVISIONS
# ===================================================================
provision_law_enforcement_delay: true
provision_law_enforcement_delay_description: "Notice may be delayed if law enforcement agency determines notification will impede criminal investigation. Notification shall be made promptly after law enforcement determines it will not compromise investigation."
provision_government_entities_are_subject: true
provision_government_entities_notes: "Kentucky agencies, local governments, and political subdivisions are exempt from general statute (§ 365.732) but subject to separate, more detailed provisions under Ky. Rev. Stat. § 61.931 et seq."
provision_waiver_not_permitted: false
provision_notice_at_collection_required: false
provision_other_description: "Dual statutory framework: § 365.732 applies to general entities; § 61.931 et seq. governs state agencies and their contractors. 72-hour notification requirement for private companies contracting with state agencies. Private right of action available under separate statute."

# ===================================================================
# :: OBSIDIAN TAGS
# ===================================================================
tags:
  - DataBreachLaws/Breach/trigger/acquisition
  - DataBreachLaws/Enforcement/private-right-of-action
  - DataBreachLaws/Exempts/glba
  - DataBreachLaws/Exempts/hipaa
  - DataBreachLaws/Exempts/own-policy
  - DataBreachLaws/Exempts/state-specific
  - DataBreachLaws/Notice/AG/not-required
  - DataBreachLaws/Notice/CRA/required/threshold/1000
  - DataBreachLaws/Notice/Consumer/asap
  - DataBreachLaws/PII/financial-accounts
  - DataBreachLaws/RiskOfHarm/not-allowed
---

# Kentucky Data Breach Notification Law

## Overview
- **Statutory Citations:** `Ky. Rev. Stat. § 365.732` (General); `Ky. Rev. Stat. § 61.931 et seq.` (State Agencies)
- **Statute Title:** [Kentucky Breach of Security Act](https://apps.legislature.ky.gov/LAW/STATUTES/STATUTE.ASPX?ID=43326)
- **Jurisdiction Type:** U.S. State
- **Legislative History:**
  - **Original Legislation:** H.B. 232 (signed April 10, 2014, effective July 15, 2014)
  - **Major Amendments:**
    - H.B. 5 (signed April 10, 2014, effective January 1, 2015)
  - **Last Verified:** September 2025

**Special Note:** Obligations for state agencies and private parties that receive, collect or maintain data from state agencies are different and more detailed. See Ky. Rev. Stat. § 61.931 et seq.

## Application & Covered Entities
Applies to "Information Holder," defined as any person or business entity that conducts business in Kentucky. Includes both private and governmental entities.

## Key Definitions

### Personal Information
An individual's first name or first initial and last name in combination with one or more of the following data elements when the name or data element is not redacted:
- Social Security number
- Driver's license number
- Account number, credit card number, or debit card number in combination with any required security code, access code, or password that would permit access to an individual's financial account

### Exclusions
Obligations under these statutes apply only to unencrypted, unredacted computerized data.

### Breach of Security
The unauthorized acquisition of unencrypted, unredacted computerized data that compromises the security, confidentiality, or integrity of personal information maintained by the entity as part of a database regarding multiple individuals that actually causes or leads the entity to believe has caused or will cause, identity theft or fraud against any Kentucky resident.

### Good-Faith Exception
Good-faith acquisition of personal information by an employee or agent of the entity for the purposes of the entity is not a breach of the security of the system if the personal information is not used or subject to further unauthorized disclosures.

## Notification Requirements & Triggers

### Notification Obligation
An entity to which the statute applies must, upon discovery or notification of breach in the security system, notify any Kentucky resident whose unencrypted information was or is reasonably believed to have been acquired by an unauthorized person.

### Timing of Notification
Notice should occur in the most expedient time possible and without unreasonable delay, subject to the legitimate needs of law enforcement or any measures necessary to determine the scope of the breach and restore the reasonable integrity of the data system.

### Notification Methods
Notice may be provided by one of the following methods:
- Written notice
- Electronic notice, if the notice is provided consistent with the provisions regarding electronic records and signatures set forth in 15 U.S.C. § 7001 (E-Sign Act)

### Content of Notice to Individuals
- Date or estimated date of breach
- Description of information involved
- Contact information for the entity

### Notification to Consumer Reporting Agencies
If an entity is required by this section to notify more than **1,000** persons, the entity shall also notify, without unreasonable delay, all nationwide consumer reporting agencies of the timing, distribution, and content of the notices.

### Substitute Notice Available
If the entity can demonstrate that:
- The cost of providing notice would exceed **$250,000**, OR
- The number of individuals to be notified exceeds **500,000**, OR
- The entity does not have sufficient contact information

Substitute notice shall consist of **all** of the following:
- Email notification if the entity has email addresses for the affected individuals
- Conspicuous posting regarding the incident on the entity's website, if the entity maintains a website
- Notification to major statewide media

### Third-Party Data Notification
An entity that maintains computerized data that includes personal information that the entity does not own shall notify the owner or licensee of the information of any breach of the security of the data as soon as reasonably practicable following discovery, if the personal information was or is reasonably believed to have been acquired by an unauthorized person.

**Special Note - State Agency Contracts:** Under the state agency provisions in Ky. Rev. Stat. § 61.932-.933, a private company contracting with a state agency must notify its contracting agency or institution in the most expedient time possible and without unreasonable delay, within **72 hours** of determining that a breach occurred. The contracting agency or institution bears the responsibility of notifying any affected individuals and the state attorney general.

## Exemptions, Penalties, and Other Provisions

### Encryption Safe Harbor
The law provides a safe harbor for encrypted or redacted data.

### Own Notification Policy Exemption
An entity that maintains its own notification procedures as part of an information security policy for the treatment of personal information and is otherwise consistent with the timing requirements of this section shall be deemed to be in compliance with the notification requirements if it notifies subject persons in accordance with its policies in the event of a breach of security of the system.

### Federal Laws Exemption
The provisions of this statute do not apply to any entity subject to:
- Title V of the Gramm-Leach-Bliley Act, OR
- The federal Health Insurance Portability and Accountability Act of 1996 (HIPAA)

### State Agencies Exemption
This statute does not apply to any Kentucky agency, or any Kentucky local governments or political subdivisions. (But see Ky. Rev. Stat. § 61.931 et seq.)

### Private Right of Action
A private right of action is available under a separate statute (Ky. Rev. Stat. § 446.070), which allows a person injured by the violation of any statute to recover damages.

## Key Provisions

### Delay for Law Enforcement
An entity's notice may be delayed if a law enforcement agency determines that the notification will impede a criminal investigation. The notification required by this section shall be made promptly after the law enforcement agency determines that it will not compromise the investigation.

### Attorney General Enforcement
Attorney General enforcement is available.
