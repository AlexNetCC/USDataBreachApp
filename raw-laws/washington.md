---
state: "Washington"
state_code: "WA"
jurisdiction_type: "U.S. State"
statute_citation: "Wash. Rev. Code § 19.255.010"
statute_title: "Washington Data Breach Notification Law"
statute_url: "https://app.leg.wa.gov/rcw/default.aspx?cite=19.255"

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
legislation_bill_1_number: "S.B. 6043"
legislation_bill_1_signed_date: "2015-03-29"
legislation_bill_1_effective_date: "2015-07-24"
legislation_bill_2_number: "H.B. 2357"
legislation_bill_2_signed_date: "2019-04-03"
legislation_bill_2_effective_date: "2019-07-28"
legislation_bill_3_number: "H.B. 1071"
legislation_bill_3_signed_date: "2021-05-10"
legislation_bill_3_effective_date: "2021-07-25"

# ===================================================================
# :: BREACH DEFINITION
# ===================================================================
breach_definition_text: "Unauthorized acquisition of data in any form (physical or electronic) that compromises the security, confidentiality, or integrity of PI maintained by the Entity."
breach_trigger: "unauthorized_acquisition"
breach_access_alone_triggers: false
breach_acquisition_alone_triggers: true

# ===================================================================
# :: ENCRYPTION SAFE HARBOR
# ===================================================================
exemption_encryption_safe_harbor: true
exemption_encryption_safe_harbor_negated_if_key_compromised: true
exemption_encryption_description: "Data that is encrypted, redacted, or secured by any other method rendering it unreadable or unusable by unauthorized person"

# ===================================================================
# :: RISK OF HARM ANALYSIS
# ===================================================================
risk_of_harm_analysis_is_required: false
risk_of_harm_analysis_can_eliminate_notification: true
risk_of_harm_analysis_standard: "Breach is unlikely to result in harm to the affected consumers"
risk_of_harm_analysis_documentation_required: false
risk_of_harm_analysis_documentation_retention_years: 0
risk_of_harm_analysis_ag_notification_required: false
risk_of_harm_analysis_ag_notification_threshold: 0
risk_of_harm_analysis_ag_notification_timeline_days: 0

# ===================================================================
# :: INDIVIDUAL NOTIFICATION
# ===================================================================
individual_notification_is_required: true
individual_notification_timeline_days: 30
individual_notification_timeline_description: "Most expedient time possible, without unreasonable delay, no more than 30 calendar days after discovery of breach or notification to Entity of breach"
individual_notification_extensions_available: false
individual_notification_extension_max_days: 0
individual_notification_extension_request_deadline_days: 0
individual_notification_contents:
  - "The name and contact information of the reporting Entity"
  - "A list of the types of PI that were or are reasonably believed to have been the subject of a breach"
  - "The date or estimated date of the breach"
  - "Whether notification to consumers was delayed as a result of law enforcement investigation"
  - "A general description of the breach incident"
  - "The toll-free numbers and addresses for the major consumer reporting agencies"
  - "The toll-free numbers, addresses, and website addresses for the FTC and Office of the Attorney General"
individual_notification_methods:
  - "Written notice to postal address in records"
  - "Electronic notice (if E-Sign Act compliant)"

# ===================================================================
# :: SUBSTITUTE NOTIFICATION
# ===================================================================
substitute_notification_is_available: true
substitute_notification_cost_trigger: 250000
substitute_notification_affected_count_trigger: 500000
substitute_notification_insufficient_contact_info_trigger: true
substitute_notification_other_triggers: []
substitute_notification_methods:
  - "Conspicuous posting on Entity website if maintained"
  - "Notification to major statewide media"
  - "Notification via email when Entity has addresses"

# ===================================================================
# :: ATTORNEY GENERAL NOTIFICATION
# ===================================================================
ag_notification_is_required: true
ag_notification_threshold: 500
ag_notification_threshold_description: "If breach requires notification of more than 500 residents"
ag_notification_timeline_days: 0
ag_notification_timeline_description: "Without unreasonable delay (electronic submission required)"
ag_notification_recipients: "Attorney General"
ag_notification_contents:
  - "A sample copy of the notification provided to consumers"
  - "The date or estimated date of the breach"
  - "Whether notification to consumers was delayed as a result of law enforcement investigation"
  - "A general description of the breach incident"
  - "The name of the Entity that experienced the breach and its contact information"
  - "The number of consumers affected or reasonably believed affected by breach"
  - "The types of PI that were or are reasonably believed to have been subject of breach"

# ===================================================================
# :: CONSUMER REPORTING AGENCY NOTIFICATION
# ===================================================================
cra_notification_is_required: true
cra_notification_threshold: 500
cra_notification_threshold_description: "Same threshold as AG notification (more than 500 residents)"
cra_notification_timeline_days: 0
cra_notification_timeline_description: "Without unreasonable delay"
cra_notification_recipients: "Major consumer reporting agencies"
cra_notification_contents:
  - "Timing, distribution, and content of notices"

# ===================================================================
# :: VENDOR NOTIFICATION (Third-Party Data Processors)
# ===================================================================
vendor_notification_is_required: true
vendor_notification_timeline_days: 0
vendor_notification_timeline_description: "Immediately following discovery (if Entity maintains data on behalf of another Entity)"
owner_liability_for_vendor_failure: "Third-party must notify other Entity immediately following discovery if PI acquired by unauthorized person"
vendor_cooperation_required: false

# ===================================================================
# :: EXEMPTIONS
# ===================================================================
exemption_hipaa: true
exemption_hipaa_description: "Covered entities/business associates complying with HIPAA breach notification requirements exempt from consumer notification (but still subject to AG notification)"
exemption_glba: false
exemption_glba_description: null
exemption_primary_regulator: true
exemption_primary_regulator_description: "Financial institutions complying with Federal Interagency Guidance on Response Programs exempt from consumer notification (but still subject to AG notification)"
exemption_own_notification_policy: false
exemption_own_notification_policy_description: null
exemption_other_description: "HIPAA/Federal Interagency exemptions only apply to consumer notification - AG notification still required at 500+ threshold"

# ===================================================================
# :: ENFORCEMENT
# ===================================================================
enforcement_private_right_of_action: true
enforcement_authority: "Attorney General and Private Parties"
enforcement_authority_is_exclusive: false
enforcement_type_damages_description: "Attorney General may bring action in name of state or as parens patriae for damages, restitution, or injunctive relief. Civil penalty not to exceed actual costs incurred by state; if willful/knowing violation, up to 3 times actual damages. Private right of action for damages or injunctive relief; failure to notify AG does not provide basis for private action."

# ===================================================================
# :: PENALTIES
# ===================================================================
enforcement_penalty_per_day: 0
enforcement_penalty_per_individual: 0
enforcement_penalty_per_record: 0
enforcement_penalty_per_violation: 0
enforcement_penalty_flat_amount: 0
enforcement_penalty_maximum: 0
enforcement_penalty_basis: "Actual costs incurred by state in pursuing action; 3x multiplier for willful/knowing violations"
enforcement_penalty_notes: "Civil penalty not to exceed actual costs incurred by state; if willful/knowing violation, up to 3 times actual damages. Private right of action available but failure to notify AG does not provide basis for private action."

# ===================================================================
# :: SPECIAL PROVISIONS
# ===================================================================
provision_law_enforcement_delay: true
provision_law_enforcement_delay_description: "Entity may delay notification if law enforcement informs Entity that notification may impede criminal/civil investigation or homeland/national security. Notification must be made without unreasonable delay after law enforcement communicates determination that notification no longer impedes investigation or jeopardizes national/homeland security."
provision_government_entities_are_subject: true
provision_government_entities_notes: null
provision_waiver_not_permitted: true
provision_notice_at_collection_required: false
provision_other_description: "Explicit 30-day deadline. AG and CRA thresholds BOTH 500 (same threshold). AG notification by electronic submission required. Risk of harm analysis allowed after investigation/consultation with LE. Private right of action BUT failure to notify AG does not provide basis for private action. HIPAA exemption applies to consumer notification ONLY (AG notification still required). Waiver PROHIBITED. Broad PII definition includes DOB, private key, biometric, student/military/passport ID. Notice must be in plain language. Penalty up to 3x actual damages for willful/knowing violations."

# ===================================================================
# :: OBSIDIAN TAGS
# ===================================================================
tags:
  - DataBreachLaws/Breach/trigger/acquisition
  - DataBreachLaws/Enforcement/private-right-of-action
  - DataBreachLaws/Exempts/federal-interagency-guidance
  - DataBreachLaws/Exempts/hipaa
  - DataBreachLaws/Notice/AG/required/threshold/500
  - DataBreachLaws/Notice/AG/required/timing/asap
  - DataBreachLaws/Notice/AG/Shame-Site
  - DataBreachLaws/Notice/CRA/required/threshold/500
  - DataBreachLaws/Notice/Consumer/30days
  - DataBreachLaws/PII/biometric
  - DataBreachLaws/PII/dob
  - DataBreachLaws/PII/financial-accounts
  - DataBreachLaws/PII/government-id
  - DataBreachLaws/PII/health-info
  - DataBreachLaws/PII/online-account-credentials
  - DataBreachLaws/PII/private-key
  - DataBreachLaws/RiskOfHarm/allowed
---

# Washington Data Breach Notification Law

## Overview
- **Statutory Citation:** `Wash. Rev. Code § 19.255.010`
- **Statute Title:** [Washington Data Breach Notification Law](https://app.leg.wa.gov/rcw/default.aspx?cite=19.255)
- **Jurisdiction Type:** U.S. State
- **Legislative History:**
  - **Original Legislation:** S.B. 6043 (signed March 29, 2015, effective July 24, 2015)
  - **Major Amendments:**
    - H.B. 2357 (signed April 3, 2019, effective July 28, 2019)
    - H.B. 1071 (signed May 10, 2021, effective July 25, 2021)
  - **Last Verified:** September 2025

## Application & Covered Entities
Any person or entity that conducts business in Washington, and that owns or licenses data that includes personal information.

## Key Definitions

### Personal Information
An individual's first name or first initial and last name in combination with any one or more of the following data elements, when either the name or the data elements are not encrypted, redacted, or secured by any other method rendering them unreadable or unusable by unauthorized persons:
- Social Security number
- Driver's license number or state identification card number
- Account number or credit or debit card number, in combination with any required security code, access code, or password that would permit access to an individual's financial account
- Full date of birth
- Private key that is unique to an individual and that is used to authenticate or sign an electronic record
- Student, military, or passport identification number
- A health insurance policy number or subscriber identification number in combination with any other unique identifier that a health insurer uses to identify the individual
- Any information about an individual's medical history, mental or physical condition, or medical treatment or diagnosis by a health care professional
- An individual's biometric data
- A username or email address, in combination with a password or security question and answer that would permit access to an online account

### Exclusions
Personal information does not include information that is lawfully made available to the general public from federal, state, or local government records.

### Breach of Security
Unauthorized acquisition of data in any form (physical or electronic) that compromises the security, confidentiality, or integrity of personal information maintained by the Entity.

### Good-Faith Exception
Does not include good-faith acquisition of PI by an employee or agent of the Entity for the purposes of the Entity, if the PI is not used or subject to further unauthorized disclosure.

## Notification Requirements & Triggers

### Notification Obligation
Any Entity that owns or licenses data that includes PI shall disclose any breach of the security of the data to any resident of Washington whose unencrypted PI was, or is reasonably believed to have been, acquired by an unauthorized person.

**Exception:** An Entity is **not required** to provide notification if, after an appropriate investigation or after consultation with relevant federal, state, or local law enforcement agencies, the Entity reasonably determines that the breach is unlikely to result in harm to the affected consumers.

### Timing of Notification
Any Entity required to provide notification shall do so:
- In the **most expedient time possible** and
- **Without unreasonable delay**, but
- **No more than 30 calendar days** after the Entity's discovery of the breach or notification to the Entity of the breach

### Notification Methods
Notice may be provided by one of the following methods:
- Written notice to the postal address in the records of the Entity
- Electronic notice, if the notice provided is consistent with the provisions regarding electronic records and signatures set forth in 15 U.S.C. § 7001 (E-Sign Act)

### Content of Notice to Individuals
Notice must be written in plain language and at a minimum include:
- The name and contact information of the reporting Entity
- A list of the types of PI that were or are reasonably believed to have been the subject of a breach
- The date or estimated date of the breach
- Whether notification to consumers was delayed as a result of a law enforcement investigation, if that information is possible to obtain at the time the notice is provided
- A general description of the breach incident, if that information is possible to obtain at the time the notice is provided
- The toll-free numbers and addresses for the major consumer reporting agencies if the breach exposed PI (Social Security number, driver's license number, etc.)
- The toll-free numbers, addresses, and website addresses for the Federal Trade Commission and the Office of the Attorney General, and a statement that the individual can obtain information from these sources about preventing identity theft

### Substitute Notice Available
If the Entity required to provide notification demonstrates that:
- The cost of providing notice would exceed **$250,000**, OR
- The affected class of subject persons to be notified exceeds **500,000**, OR
- The Entity does not have sufficient contact information

Substitute notice shall consist of **all** of the following:
- Conspicuous posting of the notice on the Entity's website if the Entity maintains one
- Notification to major statewide media
- Notification via electronic mail when the Entity has electronic mail addresses for the members of the affected class

### Attorney General Notification
If a single breach requires notification of more than **500** residents of Washington, the Entity shall also notify, **without unreasonable delay**, the Attorney General of the breach.

**Submission Method:** The notification must be **electronically submitted** and must include:
- A sample copy of the notification provided to consumers
- The date or estimated date of the breach
- Whether notification to consumers was delayed as a result of law enforcement investigation
- A general description of the breach incident
- The name of the Entity that experienced the breach and its contact information
- The number of consumers affected or reasonably believed to be affected by the breach
- The types of PI that were or are reasonably believed to have been the subject of the breach

### Consumer Reporting Agency Notification
If a breach requires notification of more than **500** residents, Entities shall also notify, without unreasonable delay, consumer reporting agencies of the timing, distribution, and content of the notices.

### Third-Party Data Notification
Any Entity that maintains data that includes PI on behalf of another Entity shall notify the other Entity **immediately following discovery** of any breach of the security of the data if the PI was acquired by an unauthorized person or is reasonably believed to have been acquired by an unauthorized person.

## Exemptions, Penalties, and Other Provisions

### Encryption Safe Harbor
The law provides a safe harbor for data that is encrypted, redacted, or secured by any other method rendering it unreadable or unusable by an unauthorized person.

### HIPAA Exemption
A covered entity or business associate as defined in HIPAA that complies with the breach notification requirements of HIPAA shall be deemed to have complied with the consumer notification requirements of this chapter with respect to information governed by such regulations.

**Important:** Such entities remain **subject to the attorney general notification requirements** in the statute.

### Federal Interagency Guidance Exemption
A financial institution as defined in 15 U.S.C. § 6809(3)(A) that is in compliance with the Federal Interagency Guidance on Response Programs for Unauthorized Access to Customer Information and Customer Notice is deemed to be in compliance with the consumer notification requirements of this chapter.

**Important:** Such entities remain **subject to the attorney general notification requirements** in the statute.

### Private Right of Action
Any customer injured by a violation of this chapter may institute a civil action to recover damages, or seek an injunction, or both.

**Limitation:** Failure to comply with the attorney general notification requirement does **not** provide a basis for a private right of action.

### Waiver Not Permitted
Any waiver of the provisions of this chapter is contrary to public policy, and is void and unenforceable.

## Key Provisions

### Delay for Law Enforcement
An Entity may delay notification if a law enforcement agency informs the Entity that notification may impede a criminal or civil investigation, or homeland or national security.

Notification must be made without unreasonable delay after the law enforcement agency communicates to the Entity its determination that notification no longer impedes the investigation or jeopardizes national or homeland security.

### Attorney General Enforcement
The attorney general may bring an action in the name of the state, or as parens patriae on behalf of persons residing in the state, to enforce this chapter.

The attorney general may bring actions seeking:
- **Damages**
- **Restitution**
- **Injunctive relief**

The state may recover a civil penalty in the amount **not to exceed the actual costs incurred by the state** in pursuing the action. If the court finds a **willful or knowing violation**, it may increase the civil penalty to an amount **not to exceed three times the actual damages sustained**.
