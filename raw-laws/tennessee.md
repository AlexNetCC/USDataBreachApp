---
# ===================================================================
# :: CORE INFORMATION
# ===================================================================
state: "Tennessee"
state_code: "TN"
jurisdiction_type: "U.S. State"
statute_citation: "Tenn. Code § 47-18-2107"
statute_title: "Tennessee Information Protection Act"
statute_url: "https://advance.lexis.com/documentpage/?pdmfid=1000516&crid=b6a47a63-7b0c-4de5-994f-e038ff1352ef&config=025054JABlOTJjNmIyNi0wYjI0LTRjZGEtYWE5ZC0zNGFhOWNhMjFlNDgKAFBvZENhdGFsb2cDFQ14bX2GfyBTaI9WcPX5&pddocfullpath=%2Fshared%2Fdocument%2Fstatutes-legislation%2Furn%3AcontentItem%3A4X8K-XB40-R03J-K1K5-00008-00&pddocid=urn%3AcontentItem%3A4X8K-XB40-R03J-K1K5-00008-00&pdcontentcomponentid=234179&pdteaserkey=sr0&pditab=allpods&ecomp=kgw7kkk&earg=sr0&prid=97640a05-f346-46be-80e0-3cb0f218dbe5"

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
legislation_bill_1_number: "H.B. 2170"
legislation_bill_1_signed_date: "2005-06-08"
legislation_bill_1_effective_date: "2005-07-01"
legislation_bill_2_number: "S.B. 2005"
legislation_bill_2_signed_date: "2016-03-24"
legislation_bill_2_effective_date: "2016-07-01"
legislation_bill_3_number: "S.B. 547"
legislation_bill_3_signed_date: "2017-04-04"
legislation_bill_3_effective_date: "2017-04-04"

# ===================================================================
# :: BREACH DEFINITION
# ===================================================================
breach_definition_text: "Acquisition of unencrypted computerized data or encrypted computerized data and the encryption key by an unauthorized person that materially compromises the security, confidentiality, or integrity of personal information maintained by the entity."
breach_trigger: "unauthorized_acquisition"
breach_access_alone_triggers: false
breach_acquisition_alone_triggers: true

# ===================================================================
# :: ENCRYPTION SAFE HARBOR
# ===================================================================
exemption_encryption_safe_harbor: true
exemption_encryption_safe_harbor_negated_if_key_compromised: true
exemption_encryption_description: "Encrypted data rendered unusable without decryption key per FIPS 140-2 standard"

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
individual_notification_timeline_days: 45
individual_notification_timeline_description: "Immediately, but no later than 45 days from discovery or notification of breach"
individual_notification_extensions_available: false
individual_notification_extension_max_days: 0
individual_notification_extension_request_deadline_days: 0
individual_notification_contents:
  - "Date or estimated date of breach"
  - "Description of information involved"
  - "Contact information for the entity"
individual_notification_methods:
  - "Written notice"
  - "Electronic notice (E-Sign compliant)"

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
cra_notification_recipients: "Major consumer reporting agencies"
cra_notification_contents:
  - "Timing, distribution, and content of notices"

# ===================================================================
# :: VENDOR NOTIFICATION (Third-Party Data Processors)
# ===================================================================
vendor_notification_is_required: true
vendor_notification_timeline_days: 45
vendor_notification_timeline_description: "No later than 45 days from discovery or notification of breach"
owner_liability_for_vendor_failure: "Third-party must notify owner/licensee within 45 days unless longer period required for law enforcement"
vendor_cooperation_required: false

# ===================================================================
# :: EXEMPTIONS
# ===================================================================
exemption_hipaa: true
exemption_hipaa_description: "Entities subject to HIPAA and HITECH Act"
exemption_glba: true
exemption_glba_description: "Entities subject to GLBA Title V"
exemption_primary_regulator: false
exemption_primary_regulator_description: null
exemption_own_notification_policy: true
exemption_own_notification_policy_description: "Entity with own notification procedures consistent with timing requirements"
exemption_other_description: null

# ===================================================================
# :: ENFORCEMENT
# ===================================================================
enforcement_private_right_of_action: true
enforcement_authority: "Attorney General and private individuals"
enforcement_authority_is_exclusive: false
enforcement_type_damages_description: "Private right of action available"

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
enforcement_penalty_notes: "Private right of action available; specific penalty amounts not enumerated in statute"

# ===================================================================
# :: SPECIAL PROVISIONS
# ===================================================================
provision_law_enforcement_delay: true
provision_law_enforcement_delay_description: "Notification may be delayed if law enforcement agency determines notification will impede criminal investigation. Notification must be made no later than 45 days after law enforcement determines it will not compromise investigation."
provision_government_entities_are_subject: true
provision_government_entities_notes: null
provision_waiver_not_permitted: false
provision_notice_at_collection_required: false
provision_other_description: "Explicit 45-day timeline. NO ATTORNEY GENERAL NOTIFICATION REQUIRED (one of the few states). Private right of action available. Acquisition-only trigger. FIPS 140-2 encryption standard explicitly required. Vendor notification within 45 days. CRA threshold of 1,000. High substitute thresholds: $250,000 OR 500,000 affected. Unauthorized person includes employees who intentionally use info for unlawful purposes. Both HIPAA and GLBA exemptions. Law enforcement delay extends 45-day deadline."

# ===================================================================
# :: OBSIDIAN TAGS
# ===================================================================
tags:
  - DataBreachLaws/Breach/trigger/acquisition
  - DataBreachLaws/Enforcement/private-right-of-action
  - DataBreachLaws/Exempts/glba
  - DataBreachLaws/Exempts/hipaa
  - DataBreachLaws/Exempts/own-policy
  - DataBreachLaws/Notice/AG/not-required
  - DataBreachLaws/Notice/CRA/required/threshold/1000
  - DataBreachLaws/Notice/Consumer/45days
  - DataBreachLaws/Notice/Vendor/45-days
  - DataBreachLaws/PII/financial-accounts
  - DataBreachLaws/PII/government-id
  - DataBreachLaws/RiskOfHarm/not-allowed
---

# Tennessee Data Breach Notification Law

## Overview
- **Statutory Citation:** `Tenn. Code § 47-18-2107`
- **Statute Title:** [Tennessee Information Protection Act](https://advance.lexis.com/documentpage/?pdmfid=1000516&crid=b6a47a63-7b0c-4de5-994f-e038ff1352ef&config=025054JABlOTJjNmIyNi0wYjI0LTRjZGEtYWE5ZC0zNGFhOWNhMjFlNDgKAFBvZENhdGFsb2cDFQ14bX2GfyBTaI9WcPX5&pddocfullpath=%2Fshared%2Fdocument%2Fstatutes-legislation%2Furn%3AcontentItem%3A4X8K-XB40-R03J-K1K5-00008-00&pddocid=urn%3AcontentItem%3A4X8K-XB40-R03J-K1K5-00008-00&pdcontentcomponentid=234179&pdteaserkey=sr0&pditab=allpods&ecomp=kgw7kkk&earg=sr0&prid=97640a05-f346-46be-80e0-3cb0f218dbe5)
- **Jurisdiction Type:** U.S. State
- **Legislative History:**
  - **Original Legislation:** H.B. 2170 (signed June 8, 2005, effective July 1, 2005)
  - **Major Amendments:**
    - S.B. 2005 (signed March 24, 2016, effective July 1, 2016)
    - S.B. 547 (signed April 4, 2017, effective April 4, 2017)
  - **Last Verified:** September 2025

## Application & Covered Entities
Any person or business that conducts business in Tennessee, or any agency of Tennessee or any of its political subdivisions, that owns or licenses computerized data that includes personal information.

## Key Definitions

### Personal Information
An individual's first name or first initial and last name, in combination with any one or more of the following data elements:
- Social Security number
- Driver's license number
- Account number, credit card number, or debit card number in combination with any required security code, access code, or password that would permit access to an individual's financial account

### Encrypted
"Encrypted" means computerized data that is rendered unusable, unreadable, or indecipherable without the use of a decryption process or key and in accordance with the current version of the Federal Information Processing Standard (FIPS) 140-2.

### Exclusions
Personal information does not include information that is lawfully made available to the general public from federal, state, or local government records or information that has been redacted or otherwise made unusable.

### Breach of Security
Acquisition of: (i) unencrypted computerized data; or (ii) encrypted computerized data and the encryption key by an unauthorized person that materially compromises the security, confidentiality, or integrity of personal information maintained by the Entity.

### Good-Faith Exception
Good-faith acquisition of personal information by an employee or agent of the Entity for the purposes of the Entity is not a breach of the security of the system, provided that the personal information is not used or subject to further unauthorized disclosure.

### Unauthorized Person
Includes an employee of the Entity who is discovered by the Entity to have obtained personal information and intentionally used it for an unlawful purpose.

## Notification Requirements & Triggers

### Notification Obligation
Any Entity to which the statute applies shall disclose any breach of the security of the system to any resident of Tennessee whose personal information was, or is reasonably believed to have been, acquired by an unauthorized person.

### Timing of Notification
The disclosure shall be made immediately, but no later than **45 days** from the discovery or notification of the breach, unless a longer period of time is required due to the legitimate needs of law enforcement.

### Notification Methods
Notice may be provided by one of the following methods:
- Written notice
- Electronic notice, if the notice provided is consistent with 15 U.S.C. § 7001 (E-Sign Act)

### Content of Notice to Individuals
- Date or estimated date of breach
- Description of information involved
- Contact information for the entity

### Consumer Reporting Agency Notification
If an Entity is required to notify more than **1,000** persons at one time, the person shall also notify, without unreasonable delay, all consumer reporting agencies and credit bureaus that compile and maintain files on consumers on a nationwide basis of the timing, distribution, and content of the notices.

### Substitute Notice Available
If the Entity demonstrates that:
- The cost of providing notice would exceed **$250,000**, OR
- The affected class of subject persons to be notified exceeds **500,000**, OR
- The Entity does not have sufficient contact information

Substitute notice shall consist of all of the following:
- Email notice when the Entity has email addresses for the subject persons
- Conspicuous posting of the notice on the Entity's website if the Entity maintains one
- Notification to major statewide media

### Third-Party Data Notification
Any Entity that maintains computerized data that includes personal information that the Entity does not own shall notify the owner or licensee of the information of any breach of the security of the data if the personal information was, or is reasonably believed to have been, acquired by an unauthorized person. The disclosure must be made no later than **45 days** from the discovery or notification of the breach, unless a longer period of time is required due to the legitimate needs of law enforcement.

## Exemptions, Penalties, and Other Provisions

### Encryption Safe Harbor
The law provides a safe harbor for encrypted data (where encryption complies with FIPS 140-2).

### Own Notification Policy Exemption
An Entity that maintains its own notification procedures as part of an information security policy for the treatment of personal information and is otherwise consistent with the timing requirements of the statute shall be deemed to be in compliance with the notification requirements if it notifies subject persons in accordance with its policies in the event of a breach of security of the system.

### Gramm-Leach-Bliley Act Exemption
The provisions of this statute shall not apply to any Entity that is subject to the provisions of Title V of the Gramm-Leach-Bliley Act.

### HIPAA Exemption
The provisions of this statute shall not apply to any Entity that is subject to the Health Insurance Portability and Accountability Act of 1996 (HIPAA) (42 U.S.C. § 1320d), as expanded by the Health Information Technology for Clinical and Economic Health Act.

### Private Right of Action
Private right of action is available to individuals injured by violations.

## Key Provisions

### Delay for Law Enforcement
The notification required may be delayed if a law enforcement agency determines that the notification will impede a criminal investigation. The notification required by this section shall be made no later than **45 days** after the law enforcement agency determines that it will not compromise the investigation.

### Attorney General Enforcement
The Attorney General has enforcement authority under the statute.
