---
state: "Montana"
state_code: "MT"
jurisdiction_type: "U.S. State"
statute_citation: "Mont. Code § 2-6-1501 et seq., 30-14-1701 et seq., 33-19-321"
statute_title: "Montana Breach Notification Security Act"
statute_url: "https://leg.mt.gov/bills/mca/title_0300/chapter_0140/part_0170/sections_index.html"

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
legislation_bill_1_number: "H.B. 732"
legislation_bill_1_signed_date: "2005-04-28"
legislation_bill_1_effective_date: "2006-03-01"
legislation_bill_2_number: "H.B. 74"
legislation_bill_2_signed_date: "2015-02-27"
legislation_bill_2_effective_date: "2015-10-01"
legislation_bill_3_number: "S.B. 50"
legislation_bill_3_signed_date: "2023-04-24"
legislation_bill_3_effective_date: "2023-10-01"

# ===================================================================
# :: BREACH DEFINITION
# ===================================================================
breach_definition_text: "Any unauthorized acquisition of computerized data that materially compromises the security, confidentiality, or integrity of personal information maintained by the entity and causes or is reasonably believed to cause loss or injury to a Montana resident."
breach_trigger: "unauthorized_acquisition"
breach_access_alone_triggers: false
breach_acquisition_alone_triggers: true

# ===================================================================
# :: ENCRYPTION SAFE HARBOR
# ===================================================================
exemption_encryption_safe_harbor: true
exemption_encryption_safe_harbor_negated_if_key_compromised: true
exemption_encryption_description: "Data that is encrypted"

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
individual_notification_timeline_description: "Disclosure is to be made without unreasonable delay, consistent with any measures necessary to determine the scope of the breach and restore the reasonable integrity of the data system"
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
  - "Notification to applicable local or statewide media"

# ===================================================================
# :: ATTORNEY GENERAL NOTIFICATION
# ===================================================================
ag_notification_is_required: true
ag_notification_threshold: 1
ag_notification_threshold_description: "Required when notification is issued to residents (threshold of 1 affected Montana resident)"
ag_notification_timeline_days: 0
ag_notification_timeline_description: "Entity shall simultaneously submit notification with consumer notification (concurrent timing)"
ag_notification_recipients: "Attorney General's Consumer Protection office"
ag_notification_contents:
  - "Electronic copy of the notification"
  - "Statement providing the date of distribution"
  - "Statement providing the method of distribution"

# ===================================================================
# :: CONSUMER REPORTING AGENCY NOTIFICATION
# ===================================================================
cra_notification_is_required: true
cra_notification_threshold: 0
cra_notification_threshold_description: "Required if business suggests, indicates, or implies individual may obtain credit report (conditional requirement)"
cra_notification_timeline_days: 0
cra_notification_timeline_description: "Coordinate with CRA as to timing, content and distribution of notice; coordination may not unreasonably delay disclosure"
cra_notification_recipients: "Consumer reporting agencies"
cra_notification_contents: []

# ===================================================================
# :: VENDOR NOTIFICATION (Third-Party Data Processors)
# ===================================================================
vendor_notification_is_required: true
vendor_notification_timeline_days: 0
vendor_notification_timeline_description: "Any entity that maintains computerized data that includes personal information that the entity does not own shall notify the owner or licensee of the information of any breach of the security of the data system immediately following discovery if personal information was or is reasonably believed to have been acquired by an unauthorized person"
owner_liability_for_vendor_failure: "Third-party must notify owner/licensee immediately after discovery of breach"
vendor_cooperation_required: false

# ===================================================================
# :: EXEMPTIONS
# ===================================================================
exemption_hipaa: false
exemption_hipaa_description: null
exemption_glba: false
exemption_glba_description: null
exemption_primary_regulator: false
exemption_primary_regulator_description: null
exemption_own_notification_policy: true
exemption_own_notification_policy_description: "Entity with own notification procedures that does not unreasonably delay notice deemed in compliance if notifies subject persons in accordance with policies"
exemption_other_description: null

# ===================================================================
# :: ENFORCEMENT
# ===================================================================
enforcement_private_right_of_action: false
enforcement_authority: "Attorney General"
enforcement_authority_is_exclusive: false
enforcement_type_damages_description: "Violation is violation of law"

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
enforcement_penalty_notes: "Violation constitutes violation of law; specific penalty amounts not defined in data breach statute"

# ===================================================================
# :: SPECIAL PROVISIONS
# ===================================================================
provision_law_enforcement_delay: true
provision_law_enforcement_delay_description: "Notice may be delayed if law enforcement agency determines that it will impede criminal investigation and requests delay. Notification must be made after law enforcement agency determines that it will not compromise investigation."
provision_government_entities_are_subject: true
provision_government_entities_notes: null
provision_waiver_not_permitted: false
provision_notice_at_collection_required: false
provision_other_description: "AG notification must be simultaneous with consumer notification (concurrent). Insurance entities and support organizations must submit notification information to Montana Insurance Commissioner (Mont. Code § 33-19-321). CRA notification required if business suggests individual may obtain credit report. CRA coordination required but may not unreasonably delay disclosure."

# ===================================================================
# :: OBSIDIAN TAGS
# ===================================================================
tags:
  - DataBreachLaws/Breach/trigger/acquisition
  - DataBreachLaws/Exempts/own-policy
  - DataBreachLaws/Notice/AG/required/threshold/1
  - DataBreachLaws/Notice/AG/required/timing/concurrent
  - DataBreachLaws/Notice/AG/Shame-Site
  - DataBreachLaws/Notice/CRA/required/conditional
  - DataBreachLaws/Notice/Consumer/asap
  - DataBreachLaws/PII/financial-accounts
  - DataBreachLaws/PII/health-info
  - DataBreachLaws/PII/taxpayer-id
  - DataBreachLaws/RiskOfHarm/not-allowed
---

# Montana Data Breach Notification Law

## Overview
- **Statutory Citation:** `Mont. Code § 2-6-1501 et seq., 30-14-1701 et seq., 33-19-321`
- **Statute Title:** [Montana Breach Notification Security Act](https://leg.mt.gov/bills/mca/title_0300/chapter_0140/part_0170/sections_index.html)
- **Jurisdiction Type:** U.S. State
- **Legislative History:**
  - **Original Legislation:** H.B. 732 (signed April 28, 2005, effective March 1, 2006)
  - **Major Amendments:**
    - H.B. 74 (signed February 27, 2015, effective October 1, 2015)
    - S.B. 50 (signed April 24, 2023, effective October 1, 2023)
  - **Last Verified:** September 2025

## Application & Covered Entities
Any person or business that conducts business in Montana, or state agency, that owns or licenses computerized data that includes personal information.

## Key Definitions

### Personal Information
An individual's first name or first initial and last name in combination with any one or more of the following data elements, when either the name or the data elements are not encrypted:
- Social Security number
- Driver's license number, state identification card number, or tribal identification card number
- Account number or credit or debit card number, in combination with any required security code, access code, or password that would permit access to an individual's financial account
- Medical record information as defined in § 33-19-104 (personal information that (a) relates to an individual's physical or mental condition, medical history, medical claims history, or medical treatment; and (b) is obtained from a medical professional or medical care institution, from the individual, or from the individual's spouse, parent, or legal guardian)
- Taxpayer identification number
- An identity protection personal identification number issued by the U.S. Internal Revenue Service

### Exclusions
Personal information does not include publicly available information that is lawfully made available to the general public from federal, state, or local government records.

### Breach of Security
Any unauthorized acquisition of computerized data that materially compromises the security, confidentiality, or integrity of personal information maintained by the entity and causes or is reasonably believed to cause loss or injury to a Montana resident.

### Good-Faith Exception
Good-faith acquisition of personal information by an employee or agent of the entity for the purpose of the entity is not a breach of the security of the data system, provided that the personal information is not used or subject to further unauthorized disclosure.

## Notification Requirements & Triggers

### Notification Obligation
An entity to which the statute applies shall disclose any breach of the security of the data system following discovery or notification of the breach to any resident of Montana whose unencrypted personal information was or is reasonably believed to have been acquired by an unauthorized person.

### Timing of Notification
Disclosure is to be made without unreasonable delay, consistent with any measures necessary to determine the scope of the breach and restore the reasonable integrity of the data system.

### Notification Methods
Notice may be provided by one of the following methods:
- Written notice
- Telephonic notice
- Electronic notice, if the notice provided is consistent with 15 U.S.C. § 7001 (E-Sign Act)

### Content of Notice to Individuals
- Date or estimated date of breach
- Description of information involved
- Contact information for the entity

### Attorney General/Insurance Commissioner Notification
Any entity that is required to issue a notification shall simultaneously submit an electronic copy of the notification and a statement providing the date and method of distribution of the notification to the Attorney General's Consumer Protection office.

Insurance entities and support organizations must submit the above information to the Montana Insurance Commissioner (Mont. Code § 33-19-321).

### Consumer Reporting Agency Notification
If a business notifies an individual of a breach and suggests, indicates, or implies that the individual may obtain a credit report, the business must coordinate with the credit reporting agency as to the timing, content and distribution of notice to the individual. This coordination may not unreasonably delay disclosure of the breach.

### Substitute Notice Available
If the entity demonstrates that:
- The cost of providing notice would exceed **$250,000**, OR
- The affected class of subject persons to be notified exceeds **500,000**, OR
- The entity does not have sufficient contact information

Substitute notice shall consist of email notice when the entity has email addresses for the subject persons and one of the following:
- Conspicuous posting of the notice on the entity's website, if the entity maintains one
- Notification to applicable local or statewide media

### Third-Party Data Notification
Any entity that maintains computerized data that includes personal information that the entity does not own shall notify the owner or licensee of the information of any breach of the security of the data system immediately following discovery if the personal information was or is reasonably believed to have been acquired by an unauthorized person.

## Exemptions, Penalties, and Other Provisions

### Encryption Safe Harbor
The law provides a safe harbor for encrypted data.

### Own Notification Policy Exemption
An entity that maintains its own notification procedures as part of an information security policy for the treatment of personal information and that does not unreasonably delay notice is considered to be in compliance with the notification requirements of the statute if the entity notifies subject persons in accordance with its policies in the event of a breach of security of the data system.

## Key Provisions

### Delay for Law Enforcement
Notice may be delayed if a law enforcement agency determines that it will impede a criminal investigation and requests a delay in notification. The notification must be made after the law enforcement agency determines that it will not compromise the investigation.
