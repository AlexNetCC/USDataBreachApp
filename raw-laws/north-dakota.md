---
state: "North Dakota"
state_code: "ND"
jurisdiction_type: "U.S. State"
statute_citation: "N.D. Cent. Code § 51-30-01 et seq."
statute_title: "North Dakota Data Breach Notification"
statute_url: "https://www.legis.nd.gov/cencode/t51c30.html"

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
legislation_bill_1_number: "S.B. 2251"
legislation_bill_1_signed_date: "2005-04-22"
legislation_bill_1_effective_date: "2005-06-01"
legislation_bill_2_number: "H.B. 1435"
legislation_bill_2_signed_date: "2013-04-18"
legislation_bill_2_effective_date: "2013-04-18"
legislation_bill_3_number: "S.B. 2214"
legislation_bill_3_signed_date: "2015-04-13"
legislation_bill_3_effective_date: "2015-08-01"

# ===================================================================
# :: BREACH DEFINITION
# ===================================================================
breach_definition_text: "Unauthorized acquisition of computerized data when access to personal information has not been secured by encryption or by any other method or technology that renders the electronic files, media, or databases unreadable or unusable."
breach_trigger: "unauthorized_acquisition"
breach_access_alone_triggers: false
breach_acquisition_alone_triggers: true

# ===================================================================
# :: ENCRYPTION SAFE HARBOR
# ===================================================================
exemption_encryption_safe_harbor: true
exemption_encryption_safe_harbor_negated_if_key_compromised: true
exemption_encryption_description: "Data rendered unreadable or unusable"

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
individual_notification_timeline_description: "Most expedient time possible and without unreasonable delay, consistent with any measures necessary to determine the scope of the breach and to restore the integrity of the data system"
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
  - "Email notice when entity has email addresses for subject persons"
  - "Conspicuous posting on entity website, if entity maintains one"
  - "Notification to major statewide media"

# ===================================================================
# :: ATTORNEY GENERAL NOTIFICATION
# ===================================================================
ag_notification_is_required: true
ag_notification_threshold: 250
ag_notification_threshold_description: "Breach exceeding 250 individuals (unique threshold)"
ag_notification_timeline_days: 0
ag_notification_timeline_description: "With individual notification; by mail or email"
ag_notification_recipients: "Attorney General"
ag_notification_contents:
  - "Notice of breach to Attorney General by mail or email"

# ===================================================================
# :: CONSUMER REPORTING AGENCY NOTIFICATION
# ===================================================================
cra_notification_is_required: false
cra_notification_threshold: null
cra_notification_threshold_description: "No CRA notification required"
cra_notification_timeline_days: null
cra_notification_timeline_description: null
cra_notification_recipients: null
cra_notification_contents: []

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
exemption_hipaa: true
exemption_hipaa_description: "Covered entities, business associates, or subcontractors complying with 45 CFR 164 Subpart D"
exemption_glba: true
exemption_glba_description: "Financial institutions complying with Federal Interagency Guidance on Response Programs"
exemption_primary_regulator: false
exemption_primary_regulator_description: null
exemption_own_notification_policy: true
exemption_own_notification_policy_description: "Entity with own notification procedures as part of information security policy consistent with timing requirements"
exemption_other_description: null

# ===================================================================
# :: ENFORCEMENT
# ===================================================================
enforcement_private_right_of_action: false
enforcement_authority: "Attorney General"
enforcement_authority_is_exclusive: false
enforcement_type_damages_description: null

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
enforcement_penalty_notes: "Enforcement details not specifically enumerated in data breach statute"

# ===================================================================
# :: SPECIAL PROVISIONS
# ===================================================================
provision_law_enforcement_delay: true
provision_law_enforcement_delay_description: "Notification may be delayed if law enforcement agency determines that notification will impede criminal investigation. Notification must be made after law enforcement determines it will not compromise investigation."
provision_government_entities_are_subject: true
provision_government_entities_notes: null
provision_waiver_not_permitted: false
provision_notice_at_collection_required: false
provision_other_description: "Unique AG notification threshold of 250 individuals (most states use 1, 500, or 1000). NO CRA notification requirement at all (one of few states without CRA notification). Expansive PI definition includes: mother's maiden name, date of birth, medical information, health insurance information, employer-assigned ID numbers, digital signatures. Both HIPAA and GLBA exemptions available."

# ===================================================================
# :: OBSIDIAN TAGS
# ===================================================================
tags:
  - DataBreachLaws/Breach/trigger/acquisition
  - DataBreachLaws/Exempts/glba
  - DataBreachLaws/Exempts/hipaa
  - DataBreachLaws/Exempts/own-policy
  - DataBreachLaws/Notice/AG/required/threshold/250
  - DataBreachLaws/Notice/AG/required/timing/concurrent
  - DataBreachLaws/Notice/AG/Shame-Site
  - DataBreachLaws/Notice/CRA/not-required
  - DataBreachLaws/Notice/Consumer/asap
  - DataBreachLaws/PII/dob
  - DataBreachLaws/PII/digital-signature
  - DataBreachLaws/PII/employer-id
  - DataBreachLaws/PII/financial-accounts
  - DataBreachLaws/PII/government-id
  - DataBreachLaws/PII/health-info
  - DataBreachLaws/PII/maiden-name
  - DataBreachLaws/RiskOfHarm/not-allowed
---

# North Dakota Data Breach Notification Law

## Overview
- **Statutory Citation:** `N.D. Cent. Code § 51-30-01 et seq.`
- **Statute Title:** [North Dakota Data Breach Notification](https://www.legis.nd.gov/cencode/t51c30.html)
- **Jurisdiction Type:** U.S. State
- **Legislative History:**
  - **Original Legislation:** S.B. 2251 (signed April 22, 2005, effective June 1, 2005)
  - **Major Amendments:**
    - H.B. 1435 (signed April 18, 2013, effective April 18, 2013)
    - S.B. 2214 (signed April 13, 2015, effective August 1, 2015)
  - **Last Verified:** September 2025

## Application & Covered Entities
Any Entity that conducts business in North Dakota and that owns or licenses computerized data that includes personal information.

## Key Definitions

### Personal Information
An individual's first name or first initial and last name in combination with any of the following data elements, when the name and the data elements are not encrypted:
- Social Security number
- The operator's license number assigned to an individual by the Department of Transportation
- A non-driver color photo identification card number assigned to the individual by the Department of Transportation
- An account number, credit card number, or debit card number in combination with any required security code, access code, or password that would permit access to an individual's financial accounts
- The individual's date of birth
- The maiden name of the individual's mother
- Medical information
- Health insurance information
- An identification number assigned to the individual by the individual's employer in combination with any required security code, access code, or password
- The individual's digitized or other electronic signature

### Exclusions
Personal information does not include publicly available information that is lawfully made available to the general public from federal, state, or local government records.

### Breach of Security
Unauthorized acquisition of computerized data when access to personal information has not been secured by encryption or by any other method or technology that renders the electronic files, media, or databases unreadable or unusable.

### Good-Faith Exception
Good-faith acquisition of personal information by an employee or agent of the Entity is not a breach of the security of the system if the personal information is not used or subject to further unauthorized disclosure.

## Notification Requirements & Triggers

### Notification Obligation
Any Entity to which the statute applies shall disclose any breach of the security of the system following discovery or notification of the breach in the security of the data to any resident of North Dakota whose unencrypted personal information was, or is reasonably believed to have been, acquired by an unauthorized person.

### Timing of Notification
In the most expedient time possible and without unreasonable delay, consistent with any measures necessary to determine the scope of the breach and to restore the integrity of the data system.

### Notification Methods
Notice may be provided by one of the following methods:
- Written notice
- Electronic notice, if the notice provided is consistent with 15 U.S.C. § 7001 (E-Sign Act)

### Content of Notice to Individuals
- Date or estimated date of breach
- Description of information involved
- Contact information for the entity

### Attorney General Notification
Any person that experiences a breach of the security system shall disclose to the Attorney General by mail or email any breach of the security system that exceeds **250** individuals.

### Substitute Notice Available
If the Entity demonstrates that:
- The cost of providing notice would exceed **$250,000**, OR
- The affected class of subject individuals to be notified exceeds **500,000**, OR
- The Entity does not have sufficient contact information

Substitute notice shall consist of all of the following:
- Email notice when the Entity has email addresses for the subject persons
- Conspicuous posting of the notice on the Entity's website, if the Entity maintains one
- Notification to major statewide media

### Third-Party Data Notification
Any person that maintains computerized data that includes personal information that the person does not own shall notify the owner or licensee of the information of the breach of the security of the data immediately following the discovery if the personal information was, or is reasonably believed to have been, acquired by an unauthorized person.

## Exemptions, Penalties, and Other Provisions

### Encryption Safe Harbor
The law provides a safe harbor for encrypted data or data rendered unreadable or unusable.

### Own Notification Policy Exemption
An Entity that maintains its own notification procedures as part of an information security policy for the treatment of personal information and is otherwise consistent with the timing requirements of this chapter is deemed to be in compliance with the notification requirements if the Entity notifies subject individuals in accordance with its policies in the event of a breach of security of the system.

### Federal Interagency Guidance Exemption
A financial institution, trust company, or credit union that is subject to, examined for, and in compliance with the Federal Interagency Guidance on Response Programs for Unauthorized Access to Customer Information and Customer Notice is deemed to be in compliance with this chapter.

### HIPAA Exemption
A covered entity, business associate, or subcontractor that is subject to the breach notification requirements of 45 CFR 164 Subpart D is considered to be in compliance with this chapter.

## Key Provisions

### Delay for Law Enforcement
The notification required by this chapter may be delayed if a law enforcement agency determines that the notification will impede a criminal investigation. The required notification must be made after the law enforcement agency determines that the notification will not compromise the investigation.

### Attorney General Enforcement
The Attorney General enforces this statute.
