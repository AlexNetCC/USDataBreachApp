---
# ===================================================================
# :: CORE INFORMATION
# ===================================================================
state: "Idaho"
state_code: "ID"
jurisdiction_type: "U.S. State"
statute_citation: "Idaho Code § 28-51-104 et seq."
statute_title: "Idaho Notification of Security Breaches"
statute_url: "https://legislature.idaho.gov/statutesrules/idstat/title28/t28ch51/"

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
legislation_bill_1_number: "S.B. 1374"
legislation_bill_1_signed_date: "2006-03-30"
legislation_bill_1_effective_date: "2006-07-01"
legislation_bill_2_number: "H.B. 566"
legislation_bill_2_signed_date: "2010-03-31"
legislation_bill_2_effective_date: "2010-07-01"

# ===================================================================
# :: BREACH DEFINITION
# ===================================================================
breach_definition_text: "An illegal acquisition of unencrypted computerized data that materially compromises the security, confidentiality, or integrity of personal information for one or more persons maintained by an entity."
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
individual_notification_timeline_description: "Most expedient time possible and without unreasonable delay, consistent with measures to determine scope of breach, identify affected individuals, and restore reasonable integrity of computerized data system"
individual_notification_extensions_available: false
individual_notification_extension_max_days: 0
individual_notification_extension_request_deadline_days: 0
individual_notification_contents:
  - "Date or estimated date of breach"
  - "Description of information involved"
  - "Contact information for the entity"
individual_notification_methods:
  - "Written notice to the most recent address in entity's records"
  - "Telephonic notice"
  - "Electronic notice consistent with 15 U.S.C. § 7001 (E-Sign Act)"

# ===================================================================
# :: SUBSTITUTE NOTIFICATION
# ===================================================================
substitute_notification_is_available: true
substitute_notification_cost_trigger: 25000
substitute_notification_affected_count_trigger: 50000
substitute_notification_insufficient_contact_info_trigger: true
substitute_notification_other_triggers: []
substitute_notification_methods:
  - "Email notice if entity has email addresses for affected Idaho residents"
  - "Conspicuous posting on entity website, if entity maintains one"
  - "Notice to major statewide media"

# ===================================================================
# :: ATTORNEY GENERAL NOTIFICATION
# ===================================================================
ag_notification_is_required: false
ag_notification_threshold: null
ag_notification_threshold_description: "No AG notification requirement"
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
vendor_notification_timeline_description: "Immediately following discovery of breach if misuse occurred or is reasonably likely"
owner_liability_for_vendor_failure: "Third-party agent must comply with immediate notification and cooperation requirements"
vendor_cooperation_required: true

# ===================================================================
# :: EXEMPTIONS
# ===================================================================
exemption_hipaa: false
exemption_hipaa_description: null
exemption_glba: false
exemption_glba_description: null
exemption_primary_regulator: true
exemption_primary_regulator_description: "Notification pursuant to laws, rules, regulations, guidance, or guidelines established by entity's primary or functional state regulator is sufficient for compliance"
exemption_own_notification_policy: true
exemption_own_notification_policy_description: "Any entity maintaining own notice procedures as part of information security policy, with procedures consistent with timing requirements, deemed in compliance if notifies affected Idaho residents in accordance with its policies"
exemption_other_description: null

# ===================================================================
# :: ENFORCEMENT
# ===================================================================
enforcement_private_right_of_action: false
enforcement_authority: "Attorney General and Primary State Regulator"
enforcement_authority_is_exclusive: false
enforcement_type_damages_description: "Civil action by primary state regulator to enforce compliance and enjoin from further violation"

# ===================================================================
# :: PENALTIES
# ===================================================================
enforcement_penalty_per_day: 0
enforcement_penalty_per_individual: 0
enforcement_penalty_per_record: 0
enforcement_penalty_per_violation: 25000
enforcement_penalty_flat_amount: 0
enforcement_penalty_maximum: 0
enforcement_penalty_basis: "Per breach"
enforcement_penalty_notes: "$25,000 per breach"

# ===================================================================
# :: SPECIAL PROVISIONS
# ===================================================================
provision_law_enforcement_delay: true
provision_law_enforcement_delay_description: "Notice may be delayed if law enforcement agency determines notice will impede criminal investigation. Notice required must be made as soon as possible after law enforcement determines notification will no longer impede investigation."
provision_government_entities_are_subject: true
provision_government_entities_notes: null
provision_waiver_not_permitted: false
provision_notice_at_collection_required: false
provision_other_description: "Primary state regulator enforcement: Primary state regulator may bring civil action to enforce compliance and enjoin from further violation. Vendor cooperation required: Third-party must cooperate with owner or licensee, including sharing information relevant to breach."

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

# Idaho Data Breach Notification Law

## Overview
- **Statutory Citation:** `Idaho Code § 28-51-104 et seq.`
- **Statute Title:** [Idaho Notification of Security Breaches](https://legislature.idaho.gov/statutesrules/idstat/title28/t28ch51/)
- **Jurisdiction Type:** U.S. State
- **Legislative History:**
  - **Original Legislation:** S.B. 1374 (signed March 30, 2006 as Chapter 258, effective July 1, 2006)
  - **Major Amendments:**
    - H.B. 566 (signed March 31, 2010, effective July 1, 2010)
  - **Last Verified:** September 2025

## Application & Covered Entities
Applies to any agency, individual or commercial entity that conducts business in Idaho and that owns or licenses computerized data that includes personal information about a resident of Idaho. Includes governmental entities and private entities.

## Key Definitions

### Personal Information
An Idaho resident's first name or first initial and last name in combination with any one or more of the following data elements that relate to the resident, when either the name or the data elements are not encrypted:
- Social Security number
- Driver's license number or state identification card number
- Account number or credit card number in combination with any required security code, access code, or password that would permit access to a resident's financial account

### Exclusions
Personal information does not include publicly available information that is lawfully made available to the general public from federal, state, or local government records or widely distributed media.

### Security Breach Definition
An illegal acquisition of unencrypted computerized data that materially compromises the security, confidentiality, or integrity of personal information for one or more persons maintained by an entity.

### Good-Faith Exception
Good-faith acquisition of personal information by an employee or agent of an entity for the purposes of the entity is not a breach of the security of the system, provided that the personal information is not used or subject to further unauthorized disclosure.

## Notification Requirements & Triggers

### Notification Obligation
An entity to which the statute applies shall give notice as soon as possible to the affected Idaho resident.

**Exception:** Notification is not required if after a good-faith, reasonable, and prompt investigation the entity determines that the personal information has not been and will not be misused.

### Timing of Notification
Notice must be made in the most expedient time possible and without unreasonable delay, consistent with any measures necessary to determine the scope of the breach, to identify the individuals affected, and to restore the reasonable integrity of the computerized data system.

### Notification Methods
Notice may be provided by one of the following methods:
- Written notice to the most recent address the entity has in its records
- Telephonic notice
- Electronic notice, if the notice provided is consistent with 15 U.S.C. § 7001 (E-Sign Act)

### Content of Notice to Individuals
- Date or estimated date of breach
- Description of information involved
- Contact information for the entity

### Third-Party Data Notification
An entity that maintains computerized data that includes personal information that the entity does not own or license shall give notice to and cooperate with the owner or licensee of the information of any breach of the security of the system immediately following discovery of the breach, if misuse of personal information about an Idaho resident occurred or is reasonably likely to occur. Cooperation includes sharing with the owner or licensee information relevant to the breach.

### Substitute Notice Available
If the entity required to provide notice demonstrates that:
- The cost of providing notice would exceed **$25,000**, OR
- The number of Idaho residents to be notified exceeds **50,000**, OR
- The entity does not have sufficient contact information to provide notice

Substitute notice consists of all of the following:
- Email notice, if the entity has email addresses for the affected Idaho residents
- Conspicuous posting of the notice on the website of the entity, if the entity maintains one
- Notice to major statewide media

### Own Notification Policy Exception
Any entity that maintains its own notice procedures as part of an information security policy for the treatment of personal information, and whose procedures are otherwise consistent with the timing requirements of the statute is deemed to be in compliance with the notice requirements if the entity notifies affected Idaho residents in accordance with its policies in the event of a breach of the security of the system.

## Exemptions, Penalties, and Other Provisions

### Encryption Safe Harbor
The law provides a safe harbor for encrypted data.

### Primary Regulator Exemption
Notification pursuant to laws, rules, regulations, guidance, or guidelines established by an entity's primary or functional state regulator is sufficient for compliance.

### Penalties
Any entity that intentionally fails to give notice in accordance with the statute shall be subject to a fine of not more than **$25,000 per breach** of the security of the system.

### Private Right of Action
The statute does not provide for a private right of action.

## Key Provisions

### Delay for Law Enforcement
Notice may be delayed if a law enforcement agency determines that the notice will impede a criminal investigation. Notice required by the statute must be made as soon as possible after the law enforcement agency determines that notification will no longer impede the investigation.

### Primary State Regulator Enforcement
Authorizes the primary state regulator to bring a civil action against an entity that it believes to have violated the statute by failing to give notice to enforce compliance with the statute and enjoin the entity from further violation.
