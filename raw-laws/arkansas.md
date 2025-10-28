---
# ===================================================================
# :: CORE INFORMATION
# ===================================================================
state: "Arkansas"
state_code: "AR"
jurisdiction_type: "U.S. State"
statute_citation: "Ark. Code Ann. § 4-110-101 et seq."
statute_title: "Arkansas Personal Information Protection Act"
statute_url: "https://law.justia.com/codes/arkansas/2010/title-4/subtitle-7/chapter-110/"

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
legislation_bill_1_number: "S.B. 1167"
legislation_bill_1_signed_date: "2005-03-31"
legislation_bill_1_effective_date: "2005-08-12"
legislation_bill_2_number: "H.B. 1943"
legislation_bill_2_signed_date: "2019-04-15"
legislation_bill_2_effective_date: "2019-07-23"

# ===================================================================
# :: BREACH DEFINITION
# ===================================================================
breach_definition_text: "An unauthorized acquisition of computerized data that compromises the security, confidentiality, or integrity of PI maintained by an Entity."
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
risk_of_harm_analysis_standard: "Notification is not required if after a reasonable investigation the Entity determines there is no reasonable likelihood of harm to consumers."
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
individual_notification_timeline_description: "Most expedient time and manner possible and without unreasonable delay, subject to measures necessary to determine scope of breach and restore reasonable integrity of data system"
individual_notification_extensions_available: false
individual_notification_extension_max_days: 0
individual_notification_extension_request_deadline_days: 0
individual_notification_contents:
  - "Date or estimated date of breach"
  - "Description of information involved"
  - "Contact information for the entity"
individual_notification_methods:
  - "Written notice"
  - "Email notice, if consistent with 15 U.S.C. § 7001 (E-Sign Act)"

# ===================================================================
# :: SUBSTITUTE NOTIFICATION
# ===================================================================
substitute_notification_is_available: true
substitute_notification_cost_trigger: 250000
substitute_notification_affected_count_trigger: 500000
substitute_notification_insufficient_contact_info_trigger: true
substitute_notification_other_triggers: []
substitute_notification_methods:
  - "Email notice if email addresses available"
  - "Conspicuous posting on entity website"
  - "Notification to statewide media"

# ===================================================================
# :: ATTORNEY GENERAL NOTIFICATION
# ===================================================================
ag_notification_is_required: true
ag_notification_threshold: 1000
ag_notification_threshold_description: "Required if 1,000 or more individuals affected"
ag_notification_timeline_days: 45
ag_notification_timeline_description: "At the same time the breach is disclosed to an affected individual or within 45 days after the person or business determines that there is a reasonable likelihood of harm to customers, whichever occurs first"
ag_notification_recipients: null
ag_notification_contents:
  - "Notice required if breach affects 1,000 or more individuals"
  - "Timing: At same time as individual notification or within 45 days after determining reasonable likelihood of harm, whichever is first"

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
vendor_notification_timeline_description: "Immediately following discovery if PI was, or is reasonably believed to have been, acquired by an unauthorized person"
owner_liability_for_vendor_failure: "Third-party agent failure to notify is governed by the contract between the parties"
vendor_cooperation_required: false

# ===================================================================
# :: EXEMPTIONS
# ===================================================================
exemption_hipaa: true
exemption_hipaa_description: "Entities regulated by state or federal law providing greater protection and with at least as thorough disclosure requirements are exempt (compliance with such law is deemed compliance with Arkansas statute)"
exemption_glba: true
exemption_glba_description: "Entities regulated by state or federal law providing greater protection and with at least as thorough disclosure requirements are exempt (compliance with such law is deemed compliance with Arkansas statute)"
exemption_primary_regulator: true
exemption_primary_regulator_description: "Entities regulated by state or federal law providing greater protection and with at least as thorough disclosure requirements are exempt (compliance with such law is deemed compliance with Arkansas statute)"
exemption_own_notification_policy: true
exemption_own_notification_policy_description: "Entities may comply through their own notification policies consistent with statute's timing requirements"
exemption_other_description: null

# ===================================================================
# :: ENFORCEMENT
# ===================================================================
enforcement_private_right_of_action: false
enforcement_authority: "Attorney General"
enforcement_authority_is_exclusive: false
enforcement_type_damages_description: "Violation considered unfair or deceptive trade practice"

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
enforcement_penalty_notes: "Violation considered unfair or deceptive trade practice; specific penalty amounts not defined in data breach statute"

# ===================================================================
# :: SPECIAL PROVISIONS
# ===================================================================
provision_law_enforcement_delay: true
provision_law_enforcement_delay_description: "Notification may be delayed if necessary for law enforcement investigation"
provision_government_entities_are_subject: true
provision_government_entities_notes: null
provision_waiver_not_permitted: false
provision_notice_at_collection_required: false
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
  - DataBreachLaws/Notice/CRA/not-required
  - DataBreachLaws/Notice/Consumer/asap
  - DataBreachLaws/PII/biometric
  - DataBreachLaws/PII/health-info
  - DataBreachLaws/RiskOfHarm/allowed
---

# Arkansas Data Breach Notification Law

## Overview
- **Statutory Citation:** `Ark. Code Ann. § 4-110-101 et seq.`
- **Statute Title:** [Arkansas Personal Information Protection Act](https://law.justia.com/codes/arkansas/2010/title-4/subtitle-7/chapter-110/)
- **Jurisdiction Type:** U.S. State
- **Legislative History:**
  - **Original Legislation:** S.B. 1167 (signed March 31, 2005, effective August 12, 2005)
  - **Amendment:** H.B. 1943 (signed April 15, 2019, effective July 23, 2019)
  - **Last Verified:** September 2025

## Application & Covered Entities
Applies to any person, business or state agency that acquires, owns, or licenses computerized data that includes personal information.

## Key Definitions

### Personal Information
An individual's first name, or first initial and last name, in combination with any one or more of the following data elements when either the name or the data element is not encrypted or redacted:
- Social Security number
- Driver's license number or state identification card number
- Account number, credit card number, or debit card number in combination with any required security code, access code, or password that would permit access to an individual's financial account
- Medical information (any individually identifiable information, in electronic or physical form, regarding the individual's medical history or medical treatment or diagnosis by a health care professional)
- Biometric data (data generated by automatic measurements of an individual's biological characteristics) and any other unique biological characteristics of an individual if used to uniquely authenticate the individual's identity for access to a system or account

### Breach of Security
An unauthorized acquisition of computerized data that compromises the security, confidentiality, or integrity of PI maintained by an Entity.

### Exceptions to Breach Definition
Good-faith acquisition of PI by an employee or agent of the Entity for the legitimate purposes of the Entity is not a breach if the PI is not otherwise used or subject to further unauthorized disclosure.

## Notification Requirements & Triggers

### Risk of Harm Standard
Notification is not required if after a reasonable investigation the Entity determines there is **no reasonable likelihood of harm** to consumers.

### Timing of Notice to Individuals
The disclosure shall be made in the **most expedient time and manner possible and without unreasonable delay**, subject to any measures necessary to determine the scope of the breach and to restore the reasonable integrity of the data system.

### Content of Notice to Individuals
No specific content is mandated by the statute; however, notifications typically include:
- Date or estimated date of breach
- Description of information involved
- Contact information for the entity

### Method of Notice to Individuals
Notice may be provided by one of the following methods:
- Written notice
- Email notice, if the notice is consistent with 15 U.S.C. § 7001 (E-Sign Act)

### Substitute Notice Available
If the Entity demonstrates that:
- The cost of providing notice would exceed **$250,000**, OR
- The affected class of persons to be notified exceeds **500,000**, OR
- The Entity does not have sufficient contact information

Substitute notice requires:
- Email notice if email addresses are available
- Conspicuous posting on the entity's website
- Notification to statewide media

### Attorney General Notification
**Requirement:** Required if the breach affects **1,000** or more individuals.

**Timing:** Notice must be provided to the Attorney General "at the same time the breach is disclosed to an affected individual or within 45 days after the person or business determines that there is a reasonable likelihood of harm to customers, whichever occurs first."

### Third-Party Data Notification
If an Entity maintains computerized data that includes PI that the Entity does not own, that Entity shall notify the owner or licensee of the information of any breach immediately following discovery if the PI was, or is reasonably believed to have been, acquired by an unauthorized person.

## Exemptions, Penalties, and Other Provisions

### Encryption Safe Harbor
The law provides a safe harbor for encrypted or redacted data.

### Regulatory Exemptions
Exempts entities regulated by a state or federal law that provides greater protection to personal information and has at least as thorough disclosure requirements. Compliance with such a law (e.g., HIPAA, GLBA) is explicitly deemed compliance with the Arkansas statute.

### Own Notification Policy
Entities may comply through their own notification policies consistent with the statute's timing requirements.

### Penalties
A violation is considered an unfair or deceptive trade practice.

### Private Right of Action
The statute does not provide for a private right of action.

## Key Provisions

### Delay for Law Enforcement
Notification may be delayed if necessary for law enforcement investigation.

### Government Entities
State agencies are subject to the statute requirements.
