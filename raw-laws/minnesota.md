---
# ===================================================================
# :: CORE INFORMATION
# ===================================================================
state: "Minnesota"
state_code: "MN"
jurisdiction_type: "U.S. State"
statute_citation: "Minn. Stat. § 325E.61 and 325E.64"
statute_title: "Minnesota Data Breach Notice Law"
statute_url: "https://www.revisor.mn.gov/statutes/cite/325E.61"

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
legislation_bill_1_number: "H.F. 2121"
legislation_bill_1_signed_date: "2005-06-02"
legislation_bill_1_effective_date: "2006-01-01"

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
exemption_encryption_description: "Data that is encrypted or otherwise unreadable or unusable, unless encryption key or other means necessary for reading was also acquired"

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
individual_notification_timeline_description: "The disclosure must be made in the most expedient time possible and without unreasonable delay, consistent with any measures necessary to determine the scope of the breach, identify the individuals affected, and restore the reasonable integrity of the data system"
individual_notification_extensions_available: false
individual_notification_extension_max_days: 0
individual_notification_extension_request_deadline_days: 0
individual_notification_contents:
  - "Date or estimated date of breach"
  - "Description of information involved"
  - "Contact information for the entity"
individual_notification_methods:
  - "Written notice to most recent available address"
  - "Electronic notice if primary method of communication is electronic or consistent with 15 U.S.C. § 7001 (E-Sign Act)"

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
  - "Notification to major statewide media"

# ===================================================================
# :: ATTORNEY GENERAL NOTIFICATION
# ===================================================================
ag_notification_is_required: false
ag_notification_threshold: null
ag_notification_threshold_description: "No specific notification requirement; Attorney General has enforcement authority but no notification obligation"
ag_notification_timeline_days: null
ag_notification_timeline_description: null
ag_notification_recipients: null
ag_notification_contents: []

# ===================================================================
# :: CONSUMER REPORTING AGENCY NOTIFICATION
# ===================================================================
cra_notification_is_required: true
cra_notification_threshold: 500
cra_notification_threshold_description: "If entity notifies more than 500 persons at one time (one of the lowest CRA thresholds in the nation)"
cra_notification_timeline_days: 0
cra_notification_timeline_description: "Within 48 hours after consumer notification (not from discovery)"
cra_notification_recipients: "All nationwide consumer reporting agencies"
cra_notification_contents:
  - "Timing of the notices"
  - "Distribution of the notices"
  - "Content of the notices"

# ===================================================================
# :: VENDOR NOTIFICATION (Third-Party Data Processors)
# ===================================================================
vendor_notification_is_required: true
vendor_notification_timeline_days: 0
vendor_notification_timeline_description: "Any entity that maintains data that includes personal information that the entity does not own shall notify the owner or licensee of the information of any breach of the security of the data immediately following discovery, if the personal information was, or is reasonably believed to have been, acquired by an unauthorized person"
owner_liability_for_vendor_failure: "Third-party must comply with immediate notification requirement"
vendor_cooperation_required: false

# ===================================================================
# :: EXEMPTIONS
# ===================================================================
exemption_hipaa: false
exemption_hipaa_description: null
exemption_glba: false
exemption_glba_description: null
exemption_primary_regulator: true
exemption_primary_regulator_description: "Does not apply to any financial institution as defined by 15 U.S.C. § 6809(3)"
exemption_own_notification_policy: true
exemption_own_notification_policy_description: "Entity maintaining own notification procedures as part of information security policy and consistent with timing requirements deemed in compliance if notifies subject persons in accordance with policies"
exemption_other_description: null

# ===================================================================
# :: ENFORCEMENT
# ===================================================================
enforcement_private_right_of_action: true
enforcement_authority: "Attorney General and Private Parties"
enforcement_authority_is_exclusive: false
enforcement_type_damages_description: "Affected individuals have private right of action for violations"

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
enforcement_penalty_notes: "Private right of action available for affected individuals; specific penalty amounts not defined in data breach statute"

# ===================================================================
# :: SPECIAL PROVISIONS
# ===================================================================
provision_law_enforcement_delay: true
provision_law_enforcement_delay_description: "Notice may be delayed to a date certain if law enforcement agency determines notification will impede criminal investigation"
provision_government_entities_are_subject: true
provision_government_entities_notes: null
provision_waiver_not_permitted: true
provision_notice_at_collection_required: false
provision_other_description: "Private right of action available for affected individuals. CRA notification threshold of 500 (one of the lowest in the nation). CRA notification must be within 48 hours AFTER consumer notification. Waiver provisions prohibited. Financial institution exemption per 15 U.S.C. § 6809(3)."

# ===================================================================
# :: OBSIDIAN TAGS
# ===================================================================
tags:
  - DataBreachLaws/Breach/trigger/acquisition
  - DataBreachLaws/Enforcement/private-right-of-action
  - DataBreachLaws/Exempts/federal-regulator
  - DataBreachLaws/Exempts/own-policy
  - DataBreachLaws/Notice/AG/not-required
  - DataBreachLaws/Notice/CRA/required/threshold/500
  - DataBreachLaws/Notice/CRA/required/timing/after-consumer
  - DataBreachLaws/Notice/Consumer/asap
  - DataBreachLaws/PII/financial-accounts
  - DataBreachLaws/RiskOfHarm/not-allowed
---

# Minnesota Data Breach Notification Law

## Overview
- **Statutory Citation:** `Minn. Stat. § 325E.61 and 325E.64`
- **Statute Title:** [Minnesota Data Breach Notice Law](https://www.revisor.mn.gov/statutes/cite/325E.61)
- **Jurisdiction Type:** U.S. State
- **Legislative History:**
  - **Original Legislation:** H.F. 2121 (signed June 2, 2005, effective January 1, 2006)
  - **Last Verified:** September 2025

## Application & Covered Entities
Any person or business that conducts business in Minnesota and that owns or licenses data that includes personal information.

## Key Definitions

### Personal Information
An individual's first name or first initial and last name in combination with any one or more of the following data elements, when the data element is not secured by encryption or another method of technology that makes electronic data unreadable or unusable, or was secured and the encryption key, password, or other means necessary for reading or using the data was also acquired:
- Social Security number
- Driver's license number or state identification card number
- Account number, credit card number, or debit card number, in combination with any required security code, access code, or password that would permit access to an individual's financial account

### Exclusions
Personal information does not include publicly available information that is lawfully made available to the general public from federal, state, or local government records.

### Breach of Security
An unauthorized acquisition of computerized data that compromises the security, confidentiality, or integrity of personal information maintained by the entity.

### Good-Faith Exception
Good-faith acquisition of personal information by an employee or agent of the entity for the purposes of the entity is not a breach of the security of the system, provided that the personal information is not used or subject to further unauthorized disclosure.

## Notification Requirements & Triggers

### Notification Obligation
An entity to which the statute applies shall disclose any breach of the security of the system following discovery or notification of the breach in the security of the data to any resident of Minnesota whose unencrypted personal information was, or is reasonably believed to have been, acquired by an unauthorized person.

### Timing of Notification
The disclosure must be made in the most expedient time possible and without unreasonable delay, consistent with any measures necessary to determine the scope of the breach, identify the individuals affected, and restore the reasonable integrity of the data system.

### Notification Methods
Notice may be provided by one of the following methods:
- Written notice to the most recent available address the entity has in its records
- Electronic notice, if the entity's primary method of communication with the individual is by electronic means, or if the notice provided is consistent with 15 U.S.C. § 7001 (E-Sign Act)

### Content of Notice to Individuals
- Date or estimated date of breach
- Description of information involved
- Contact information for the entity

### Consumer Reporting Agency Notification
If an entity notifies more than **500** persons at one time, the entity shall also notify, within **48 hours**, all nationwide consumer reporting agencies of the timing, distribution, and content of the notices.

### Substitute Notice Available
If the entity demonstrates that:
- The cost of providing notice would exceed **$250,000**, OR
- The entity has to provide notice to more than **500,000** residents, OR
- The entity does not have sufficient contact information

Substitute notice shall consist of all of the following:
- Email notice, if the entity has email addresses for the subject persons
- Conspicuous posting of the notice on the entity's website, if the entity maintains one
- Notification to major statewide media

### Third-Party Data Notification
Any entity that maintains data that includes personal information that the entity does not own shall notify the owner or licensee of the information of any breach of the security of the data immediately following discovery, if the personal information was, or is reasonably believed to have been, acquired by an unauthorized person.

## Exemptions, Penalties, and Other Provisions

### Encryption Safe Harbor
The law provides a safe harbor for data that is encrypted or otherwise unreadable or unusable.

### Own Notification Policy Exemption
An entity that maintains its own notification procedures as part of an information security policy for the treatment of personal information and whose procedures are otherwise consistent with the timing requirements of the statute shall be deemed to be in compliance with the notification requirements of the statute if the entity notifies subject persons in accordance with its policies in the event of a breach of security of the system.

### Financial Institution Exemption
This statute does not apply to any "financial institution," as defined by 15 U.S.C. § 6809(3).

### Private Right of Action
Affected individuals have a private right of action for violations of this statute.

## Key Provisions

### Delay for Law Enforcement
Notice may be delayed to a date certain if a law enforcement agency determines that the notice will impede a criminal investigation.

### Attorney General Enforcement
The Attorney General has enforcement authority over this statute.

### Waiver Not Permitted
Individuals cannot waive their rights under this statute.
