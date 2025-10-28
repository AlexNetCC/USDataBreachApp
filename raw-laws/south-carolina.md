---
# ===================================================================
# :: CORE INFORMATION
# ===================================================================
state: "South Carolina"
state_code: "SC"
jurisdiction_type: "U.S. State"
statute_citation: "S.C. Code § 39-1-90"
statute_title: "South Carolina Insurance Data Security Act"
statute_url: "https://www.scstatehouse.gov/code/t39c001.php"

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
legislation_bill_1_number: "S.B. 453"
legislation_bill_1_signed_date: "2008-04-02"
legislation_bill_1_effective_date: "2008-07-01"
legislation_bill_2_number: "H.B. 3248"
legislation_bill_2_signed_date: "2013-04-23"
legislation_bill_2_effective_date: "2013-04-23"

# ===================================================================
# :: BREACH DEFINITION
# ===================================================================
breach_definition_text: "Unauthorized access to and acquisition of computerized data that was not rendered unusable through encryption, redaction, or other methods that compromises the security, confidentiality, or integrity of personal information maintained by the entity, when illegal use of the information has occurred or is reasonably likely to occur or use of the information creates a material risk of harm."
breach_trigger: "unauthorized_access_and_acquisition"
breach_access_alone_triggers: false
breach_acquisition_alone_triggers: false

# ===================================================================
# :: ENCRYPTION SAFE HARBOR
# ===================================================================
exemption_encryption_safe_harbor: true
exemption_encryption_safe_harbor_negated_if_key_compromised: true
exemption_encryption_description: "Data rendered unusable through encryption, redaction, or other methods"

# ===================================================================
# :: RISK OF HARM ANALYSIS
# ===================================================================
risk_of_harm_analysis_is_required: true
risk_of_harm_analysis_can_eliminate_notification: true
risk_of_harm_analysis_standard: "Illegal use of the information has occurred or is reasonably likely to occur or use creates a material risk of harm"
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
individual_notification_timeline_description: "Most expedient time possible and without unreasonable delay, consistent with measures necessary to determine the scope of the breach and restore the reasonable integrity of the data system"
individual_notification_extensions_available: false
individual_notification_extension_max_days: 0
individual_notification_extension_request_deadline_days: 0
individual_notification_contents:
  - "Date or estimated date of breach"
  - "Description of information involved"
  - "Contact information for the entity"
  - "General description of actions taken to restore security and confidentiality"
  - "Description of steps affected individuals can take to protect themselves from identity theft"
individual_notification_methods:
  - "Written notice"
  - "Telephonic notice"
  - "Electronic notice (if primary method of communication or E-Sign compliant)"

# ===================================================================
# :: SUBSTITUTE NOTIFICATION
# ===================================================================
substitute_notification_is_available: true
substitute_notification_cost_trigger: 250000
substitute_notification_affected_count_trigger: 500000
substitute_notification_insufficient_contact_info_trigger: true
substitute_notification_other_triggers: []
substitute_notification_methods:
  - "Email notice when entity has email addresses for affected persons"
  - "Conspicuous posting on entity website, if entity maintains one"
  - "Notification to major statewide media"

# ===================================================================
# :: ATTORNEY GENERAL NOTIFICATION
# ===================================================================
ag_notification_is_required: true
ag_notification_threshold: 1000
ag_notification_threshold_description: "If entity provides notice to more than 1,000 South Carolina residents"
ag_notification_timeline_days: 0
ag_notification_timeline_description: "Without unreasonable delay"
ag_notification_recipients: "Consumer Protection Division of the Department of Consumer Affairs"
ag_notification_contents:
  - "Timing, distribution, and content of notices to residents"

# ===================================================================
# :: CONSUMER REPORTING AGENCY NOTIFICATION
# ===================================================================
cra_notification_is_required: true
cra_notification_threshold: 1000
cra_notification_threshold_description: "If entity provides notice to more than 1,000 persons at one time"
cra_notification_timeline_days: 0
cra_notification_timeline_description: "Without unreasonable delay"
cra_notification_recipients: "All nationwide consumer reporting agencies"
cra_notification_contents:
  - "Timing, distribution, and content of notices to residents"

# ===================================================================
# :: VENDOR NOTIFICATION (Third-Party Data Processors)
# ===================================================================
vendor_notification_is_required: true
vendor_notification_timeline_days: 0
vendor_notification_timeline_description: "Immediately following discovery"
owner_liability_for_vendor_failure: "Third-party must notify owner/licensee immediately following discovery"
vendor_cooperation_required: false

# ===================================================================
# :: EXEMPTIONS
# ===================================================================
exemption_hipaa: false
exemption_hipaa_description: null
exemption_glba: true
exemption_glba_description: "Financial institutions subject to and complying with GLBA privacy and security provisions"
exemption_primary_regulator: true
exemption_primary_regulator_description: "Financial institutions subject to and in compliance with Federal Interagency Guidance Response Programs for Unauthorized Access"
exemption_own_notification_policy: true
exemption_own_notification_policy_description: "Entity with own notification procedures as part of information security policy consistent with timing requirements"
exemption_other_description: null

# ===================================================================
# :: ENFORCEMENT
# ===================================================================
enforcement_private_right_of_action: true
enforcement_authority: "Department of Consumer Affairs and private individuals"
enforcement_authority_is_exclusive: false
enforcement_type_damages_description: "$1,000 per SC resident administrative fine for knowing and willful violations; Private right of action for willful knowing violation (actual damages), negligent violation (actual damages only), injunctive relief, and attorney's fees/court costs"

# ===================================================================
# :: PENALTIES
# ===================================================================
enforcement_penalty_per_day: 0
enforcement_penalty_per_individual: 1000
enforcement_penalty_per_record: 0
enforcement_penalty_per_violation: 0
enforcement_penalty_flat_amount: 0
enforcement_penalty_maximum: 0
enforcement_penalty_basis: "Per SC resident whose information was accessible (for knowing and willful violations); amount decided by Department of Consumer Affairs"
enforcement_penalty_notes: "$1,000 per SC resident for knowing and willful violations. Private right of action available for: willful knowing violations (actual damages), negligent violations (actual damages only), injunctive relief, attorney's fees and court costs."

# ===================================================================
# :: SPECIAL PROVISIONS
# ===================================================================
provision_law_enforcement_delay: true
provision_law_enforcement_delay_description: "Notification may be delayed if law enforcement agency determines that notification impedes criminal investigation. Notification must be made after law enforcement determines it no longer compromises investigation."
provision_government_entities_are_subject: true
provision_government_entities_notes: null
provision_waiver_not_permitted: false
provision_notice_at_collection_required: false
provision_other_description: "Both access AND acquisition required. Risk of harm analysis required and built into breach definition: illegal use occurred/is reasonably likely OR creates material risk of harm. Private right of action for both willful knowing violations (actual damages) and negligent violations (actual damages only), plus injunctive relief and attorney's fees. Department of Consumer Affairs enforces. High substitute thresholds: $250,000 OR 500,000 affected. AG/CRA notification threshold of 1,000 (higher than most states). GLBA exemption but NO HIPAA exemption. Federal Interagency Guidance exemption available."

# ===================================================================
# :: OBSIDIAN TAGS
# ===================================================================
tags:
  - DataBreachLaws/Breach/trigger/access-and-acquisition
  - DataBreachLaws/Enforcement/private-right-of-action
  - DataBreachLaws/Exempts/federal-interagency-guidance
  - DataBreachLaws/Exempts/glba
  - DataBreachLaws/Exempts/own-policy
  - DataBreachLaws/Notice/AG/required/threshold/1000
  - DataBreachLaws/Notice/AG/required/timing/asap
  - DataBreachLaws/Notice/CRA/required/threshold/1000
  - DataBreachLaws/Notice/Consumer/asap
  - DataBreachLaws/PII/financial-accounts
  - DataBreachLaws/PII/government-id
  - DataBreachLaws/RiskOfHarm/allowed
---

# South Carolina Data Breach Notification Law

## Overview
- **Statutory Citation:** `S.C. Code § 39-1-90`
- **Statute Title:** [South Carolina Insurance Data Security Act](https://www.scstatehouse.gov/code/t39c001.php)
- **Jurisdiction Type:** U.S. State
- **Legislative History:**
  - **Original Legislation:** S.B. 453 (signed April 2, 2008, effective July 1, 2008)
  - **Amendment:** H.B. 3248 (signed April 23, 2013, effective April 23, 2013)
  - **Last Verified:** September 2025

## Application & Covered Entities
A natural person, commercial or legal entity, government or governmental subdivision or agency conducting business in South Carolina, and owning or licensing data that includes personal information.

## Key Definitions

### Personal Information
The first name or first initial and last name in combination with and linked to any one or more of the following data elements that relate to a resident of South Carolina, when the data elements are neither encrypted nor redacted:
- Social Security number
- Driver's license number or state identification card number issued instead of a driver license
- Financial account number, credit card number, or debit card number in combination with any required security code, access code, or password that would permit access to a resident's financial account
- Other numbers or information that may be used to access a person's financial accounts or numbers or information issued by a governmental or regulatory entity that uniquely will identify an individual

### Exclusions
Personal information does not include information that is lawfully obtained from publicly available information, or from federal, state, or local government records lawfully made available to the general public.

### Breach of Security
Unauthorized access to and acquisition of computerized data that was not rendered unusable through encryption, redaction, or other methods that compromises the security, confidentiality, or integrity of personal information maintained by the Entity, when illegal use of the information has occurred or is reasonably likely to occur or use of the information creates a material risk of harm to a resident.

### Good-Faith Exception
Good-faith acquisition of personal information by an employee or agent of the Entity for the purposes of its business is not a breach of the security of the system if the personal information is not used or subject to further unauthorized disclosure.

## Notification Requirements & Triggers

### Notification Obligation
Any Entity to which the statute applies shall disclose a breach of the security of the system to a resident of South Carolina whose unencrypted and unredacted personal information was, or is reasonably believed to have been, acquired by an unauthorized person when the illegal use of the information has occurred or is reasonably likely to occur or use of the information creates a material risk of harm to the resident.

### Timing of Notification
The disclosure must be made in the most expedient time possible and without unreasonable delay, consistent with measures necessary to determine the scope of the breach and restore the reasonable integrity of the data system.

### Notification Methods
Notice may be provided by one of the following methods:
- Written notice
- Telephonic notice
- Electronic notice, if the person's primary method of communication with the individual is by electronic means or is consistent with 15 U.S.C. § 7001 (E-Sign Act)

### Content of Notice to Individuals
- Date or estimated date of breach
- Description of information involved
- Contact information for the entity
- General description of actions taken to restore security and confidentiality
- Description of steps affected individuals can take to protect themselves from identity theft

### Attorney General Notification
If an Entity provides notice to more than **1,000** South Carolina residents, the Entity shall notify, without unreasonable delay, the Consumer Protection Division of the Department of Consumer Affairs of the timing, distribution, and content of the notice.

### Consumer Reporting Agency Notification
If an Entity provides notice to more than **1,000** persons at one time, the Entity shall notify, without unreasonable delay, all nationwide consumer reporting agencies of the timing, distribution, and content of the notice.

### Substitute Notice Available
If the Entity demonstrates that:
- The cost of providing notice exceeds **$250,000**, OR
- The affected class of subject persons to be notified exceeds **500,000**, OR
- The person has insufficient contact information

Substitute notice consists of:
- Email notice when the Entity has email addresses for the subject persons
- Conspicuous posting of the notice on the Entity's website, if the Entity maintains one
- Notification to major statewide media

### Third-Party Data Notification
An Entity conducting business in South Carolina and maintaining computerized data or other data that includes personal information that the Entity does not own shall notify the owner or licensee of the information of a breach of the security of the data immediately following discovery, if the personal information was, or is reasonably believed to have been, acquired by an unauthorized person.

## Exemptions, Penalties, and Other Provisions

### Encryption Safe Harbor
The law provides a safe harbor for data rendered unusable through encryption, redaction, or other methods.

### Own Notification Policy Exemption
An Entity that maintains its own notification procedures as part of an information security policy for the treatment of personal information and is otherwise consistent with the timing requirements of the statute shall be deemed to be in compliance with the notification requirements if it notifies subject persons in accordance with its policies in the event of a breach of security of the system.

### Gramm-Leach-Bliley Act Exemption
This section does not apply to a bank or financial institution that is subject to and in compliance with the privacy and security provisions of the Gramm-Leach-Bliley Act.

### Federal Interagency Guidance Exemption
A financial institution that is subject to and in compliance with the federal Interagency Guidance Response Programs for Unauthorized Access to Consumer Information and Customer Notice, issued March 7, 2005, by the Board of Governors of the Federal Reserve System, the Federal Deposit Insurance Corporation, the Office of the Comptroller of the Currency, and the Office of Thrift Supervision, as amended, is considered to be in compliance with this section.

### Penalties
A person who knowingly and willfully violates this section is subject to an administrative fine of **$1,000** for each South Carolina resident whose information was accessible by reason of the breach, the amount to be decided by the Department of Consumer Affairs.

### Private Right of Action
A resident of South Carolina who is injured by a violation of this section, in addition to and cumulative of all other rights and remedies available at law, may:
- Institute a civil action to recover damages in case of a willful and knowing violation
- Institute a civil action to recover only actual damages resulting from a violation in case of a negligent violation
- Seek an injunction to enforce compliance
- Recover attorney's fees and court costs, if successful

## Key Provisions

### Delay for Law Enforcement
The notification required by the statute may be delayed if a law enforcement agency determines that the notification impedes a criminal investigation. The notification required by the statute must be made after the law enforcement agency determines that it no longer compromises the investigation.

### Attorney General/Consumer Protection Enforcement
The Department of Consumer Affairs Consumer Protection Division enforces this statute.
