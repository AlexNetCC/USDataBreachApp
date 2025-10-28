---
state: "Oklahoma"
state_code: "OK"
jurisdiction_type: "U.S. State"
statute_citation: "24 Okla. Stat. § 161 et seq., § 74-3113.1"
statute_title: "Oklahoma Security Breach Notification Act"
statute_url: "http://www.oklegislature.gov/osstatuestitle.html"

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
legislation_bill_1_number: "H.B. 2245"
legislation_bill_1_signed_date: "2008-04-28"
legislation_bill_1_effective_date: "2008-11-01"
legislation_bill_2_number: "S.B. 626"
legislation_bill_2_signed_date: "2025-05-28"
legislation_bill_2_effective_date: "2026-01-01"

# ===================================================================
# :: BREACH DEFINITION
# ===================================================================
breach_definition_text: "Unauthorized access and acquisition of unencrypted and unredacted computerized data that compromises the security or confidentiality of personal information maintained by an entity as part of a database of personal information regarding multiple individuals and that causes, or the entity reasonably believes has caused or will cause, identity theft or other fraud."
breach_trigger: "unauthorized_access_and_acquisition"
breach_access_alone_triggers: false
breach_acquisition_alone_triggers: false

# ===================================================================
# :: ENCRYPTION SAFE HARBOR
# ===================================================================
exemption_encryption_safe_harbor: true
exemption_encryption_safe_harbor_negated_if_key_compromised: true
exemption_encryption_description: "Encrypted and redacted data safe harbor unless key compromised and causes harm"

# ===================================================================
# :: RISK OF HARM ANALYSIS
# ===================================================================
risk_of_harm_analysis_is_required: true
risk_of_harm_analysis_can_eliminate_notification: true
risk_of_harm_analysis_standard: "Causes or reasonably believed to cause identity theft or other fraud (risk of harm built into breach definition)"
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
individual_notification_timeline_description: "Without unreasonable delay consistent with any measures necessary to determine the scope of the breach and to restore the reasonable integrity of the system"
individual_notification_extensions_available: false
individual_notification_extension_max_days: 0
individual_notification_extension_request_deadline_days: 0
individual_notification_contents:
  - "Date or estimated date of breach"
  - "Description of information involved"
  - "Contact information for the entity"
individual_notification_methods:
  - "Written notice to postal address in records"
  - "Telephonic notice"
  - "Electronic notice"

# ===================================================================
# :: SUBSTITUTE NOTIFICATION
# ===================================================================
substitute_notification_is_available: true
substitute_notification_cost_trigger: 50000
substitute_notification_affected_count_trigger: 100000
substitute_notification_insufficient_contact_info_trigger: true
substitute_notification_other_triggers:
  - "Lack of consent for electronic communication"
substitute_notification_methods:
  - "Any two of the following: Email notice (if entity has email addresses), Conspicuous posting on entity website, Notification to major statewide media"

# ===================================================================
# :: ATTORNEY GENERAL NOTIFICATION
# ===================================================================
ag_notification_is_required: true
ag_notification_threshold: 500
ag_notification_threshold_description: "Breach exceeding 500 individuals; 1,000 or more for credit bureaus (higher threshold for credit reporting agencies)"
ag_notification_timeline_days: 60
ag_notification_timeline_description: "Within 60 days after providing notice to impacted individuals"
ag_notification_recipients: "Attorney General"
ag_notification_contents:
  - "Notice of breach (kept confidential)"

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
vendor_notification_timeline_description: "As soon as practicable"
owner_liability_for_vendor_failure: "Third-party must notify owner/licensee as soon as practicable"
vendor_cooperation_required: false

# ===================================================================
# :: EXEMPTIONS
# ===================================================================
exemption_hipaa: true
exemption_hipaa_description: "Entities complying with HIPAA or Oklahoma Hospital Cybersecurity Protection Act"
exemption_glba: true
exemption_glba_description: "Financial institutions complying with GLBA and Federal Interagency Guidance"
exemption_primary_regulator: true
exemption_primary_regulator_description: "Entity complying with notification requirements of primary or functional federal regulator"
exemption_own_notification_policy: true
exemption_own_notification_policy_description: "Entity with own notification procedures consistent with timing requirements"
exemption_other_description: null

# ===================================================================
# :: ENFORCEMENT
# ===================================================================
enforcement_private_right_of_action: false
enforcement_authority: "Attorney General and District Attorneys"
enforcement_authority_is_exclusive: true
enforcement_type_damages_description: "Actual damages or civil penalty not to exceed $150,000 per breach; $75,000 if notice provided but no reasonable safeguards; no penalty if reasonable safeguards used and notice provided"

# ===================================================================
# :: PENALTIES
# ===================================================================
enforcement_penalty_per_day: 0
enforcement_penalty_per_individual: 0
enforcement_penalty_per_record: 0
enforcement_penalty_per_violation: 0
enforcement_penalty_flat_amount: 0
enforcement_penalty_maximum: 150000
enforcement_penalty_basis: "Per breach or series of related breaches; based on magnitude of breach, extent of entity's contribution, and any failure to provide notice"
enforcement_penalty_notes: "Up to $150,000 per breach (or $75,000 if notice provided but no reasonable safeguards). Safe harbor: NO penalty if reasonable safeguards used AND notice provided."

# ===================================================================
# :: SPECIAL PROVISIONS
# ===================================================================
provision_law_enforcement_delay: true
provision_law_enforcement_delay_description: "Notice may be delayed if law enforcement agency determines and advises that notice will impede criminal or civil investigation or jeopardize national or homeland security. Notice must be made without unreasonable delay after law enforcement determines notification will no longer impede investigation."
provision_government_entities_are_subject: true
provision_government_entities_notes: null
provision_waiver_not_permitted: false
provision_notice_at_collection_required: false
provision_other_description: "Recent amendment S.B. 626 (signed May 28, 2025, effective January 1, 2026). Both access AND acquisition required. Risk of harm built into breach definition. AG notification within 60 days AFTER individual notification (unusual - most states require before or concurrent). NO CRA notification. Unique substitute thresholds: $50,000 cost OR 100,000 affected. Credit bureaus have higher AG threshold: 1,000 vs 500. Civil penalty safe harbor: entities using reasonable safeguards and providing notice exempt from penalties. Exclusive enforcement by AG and District Attorneys. Multiple exemptions: HIPAA, GLBA, federal regulator, own policy."

# ===================================================================
# :: OBSIDIAN TAGS
# ===================================================================
tags:
  - DataBreachLaws/Breach/trigger/access-and-acquisition
  - DataBreachLaws/Exempts/federal-regulator
  - DataBreachLaws/Exempts/glba
  - DataBreachLaws/Exempts/hipaa
  - DataBreachLaws/Exempts/own-policy
  - DataBreachLaws/Notice/AG/required/threshold/500
  - DataBreachLaws/Notice/AG/required/timing/after-consumer
  - DataBreachLaws/Notice/AG/Shame-Site
  - DataBreachLaws/Notice/CRA/not-required
  - DataBreachLaws/Notice/Consumer/asap
  - DataBreachLaws/PII/biometric
  - DataBreachLaws/PII/financial-accounts
  - DataBreachLaws/PII/government-id
  - DataBreachLaws/RiskOfHarm/allowed
---

# Oklahoma Data Breach Notification Law

## Overview
- **Statutory Citation:** `24 Okla. Stat. § 161 et seq., § 74-3113.1`
- **Statute Title:** [Oklahoma Security Breach Notification Act](http://www.oklegislature.gov/osstatuestitle.html)
- **Jurisdiction Type:** U.S. State
- **Legislative History:**
  - **Original Legislation:** H.B. 2245 (signed April 28, 2008, effective November 1, 2008)
  - **Recent Amendment:** S.B. 626 (signed May 28, 2025, effective January 1, 2026)
  - **Last Verified:** September 2025

## Application & Covered Entities
Any corporations, or any other legal or government entity, whether for profit or not-for-profit (collectively, Entity), that owns or licenses computerized data that includes personal information of Oklahoma residents.

## Key Definitions

### Personal Information
The first name or first initial and last name of an individual in combination with and linked to any one or more of the following data elements that relate to a resident of Oklahoma, when the data elements are neither encrypted nor redacted:
- Social Security number
- Driver's license or other unique identification number created or collected by a government entity
- Account number, credit card number, or debit card number, unique electronic identifier, or routing code in combination with any required expiration date, security code, access code, or password that would permit access to financial accounts
- Biometric data such as fingerprint, retina, iris image, or other unique physical or digital biometric data

### Exclusions
Personal information shall not include information that is lawfully obtained from publicly available information, or from federal, state, or local government records lawfully made available to the general public.

### Breach of Security
Unauthorized access and acquisition of unencrypted and unredacted computerized data that compromises the security or confidentiality of personal information maintained by an Entity as part of a database of personal information regarding multiple individuals and that causes, or the Entity reasonably believes has caused or will cause, identity theft or other fraud to any resident of Oklahoma.

### Good-Faith Exception
Good-faith acquisition of personal information by an employee or agent of an Entity for the purposes of the Entity is not a breach of the security of the system, provided that the personal information is not used for a purpose other than a lawful purpose of the Entity or subject to further unauthorized disclosure.

## Notification Requirements & Triggers

### Notification Obligation
Any Entity to which the statute applies shall disclose any breach of the security of the system to any resident of Oklahoma whose unencrypted and unredacted personal information was or is reasonably believed to have been accessed and acquired by an unauthorized person and that causes, or the individual or entity reasonably believes has caused or will cause, identity theft or other fraud to any resident of Oklahoma.

An Entity must disclose the breach if encrypted information is accessed and acquired in an unencrypted form or if the security breach involves a person with access to the encryption key and the individual or entity reasonably believes that such breach has caused or will cause identity theft or other fraud to any resident of Oklahoma.

### Timing of Notification
Without unreasonable delay consistent with any measures necessary to determine the scope of the breach and to restore the reasonable integrity of the system.

### Notification Methods
Notice means one of the following methods:
- Written notice to the postal address in the records of the Entity
- Telephonic notice
- Electronic notice

### Content of Notice to Individuals
- Date or estimated date of breach
- Description of information involved
- Contact information for the entity

### Attorney General Notification
Any Entity that experiences a breach of the security system shall disclose to the Attorney General within **60 days** after providing notice to impacted individuals for any breach of the security system that exceeds **500** individuals. (Entities that are credit bureaus have a higher threshold of **1,000** or more residents.) Notice will be kept confidential.

### Substitute Notice Available
If an Entity demonstrates that:
- The cost of providing notice would exceed **$50,000**, OR
- The affected class of residents to be notified exceeds **100,000**, OR
- The Entity does not have sufficient contact information or consent

Substitute notice consists of **any two** of the following:
- Email notice, if the Entity has email addresses for the members of the affected class of residents
- Conspicuous posting of the notice on the Entity's website if the Entity maintains one
- Notification to major statewide media

### Third-Party Data Notification
An Entity that maintains computerized data that includes personal information that the Entity does not own or license shall notify the owner or licensee of the information of any breach of the security of the system as soon as practicable following discovery, if the personal information was or if the Entity reasonably believes was accessed and acquired by an unauthorized person.

## Exemptions, Penalties, and Other Provisions

### Encryption Safe Harbor
The law provides a safe harbor for encrypted and redacted data.

### Own Notification Policy Exemption
An entity that maintains its own notification procedures as part of an information privacy or security policy for the treatment of personal information and that are consistent with the timing requirements of the statute shall be deemed to be in compliance with the statute if it notifies residents of Oklahoma in accordance with its procedures in the event of a breach of security of the system.

### Federal Interagency Guidance Exemption
A financial institution that complies with the notification requirements prescribed by the Gramm-Leach-Bliley Act and the Federal Interagency Guidance on Response Programs for Unauthorized Access to Customer Information and Customer Notice is deemed to be in compliance with the statute.

### HIPAA Exemption
An entity that complies with the notification requirements prescribed by the Oklahoma Hospital Cybersecurity Protection Act of 2023 or the Health Insurance Portability and Accountability Act of 1996 (HIPAA) is deemed to be in compliance.

### Primary Regulator Exemption
An Entity that complies with the notification requirements or procedures pursuant to the rules, regulation, procedures, or guidelines established by the primary or functional federal regulator of the Entity is deemed to be in compliance.

### Penalties
The state Attorney General or a district attorney shall have exclusive authority to bring an action and may obtain either actual damages for a violation of the statute or a civil penalty not to exceed **$150,000** per breach of the security of the system or series of breaches of a similar nature that are discovered in a single investigation. Civil penalties shall be based upon:
- The magnitude of the breach
- The extent to which the behavior of the individual or entity contributed to the breach
- Any failure to provide the notice as required by this section

**Safe Harbor:** Entities that use reasonable safeguards and provide notice are exempted from civil penalties.

**Reduced Penalty:** An entity that provides notice but does not use reasonable safeguards is not subject to additional civil penalties but is liable for actual damages and a **$75,000** civil penalty.

## Key Provisions

### Delay for Law Enforcement
Notice required may be delayed if a law enforcement agency determines and advises the Entity that the notice will impede a criminal or civil investigation or homeland or national security. Notice required must be made without unreasonable delay after the law enforcement agency determines that notification will no longer impede the investigation or jeopardize national or homeland security.

### Attorney General Enforcement
The state Attorney General or a district attorney has exclusive enforcement authority over this statute.
