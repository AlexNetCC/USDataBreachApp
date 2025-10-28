---
# ===================================================================
# :: CORE INFORMATION
# ===================================================================
state: "Arizona"
state_code: "AZ"
jurisdiction_type: "U.S. State"
statute_citation: "Ariz. Rev. Stat. § 18-551 et seq."
statute_title: "Arizona Notification of Security System Breaches"
statute_url: "https://www.azleg.gov/viewdocument/?docName=https://www.azleg.gov/ars/18/00551.htm"

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
legislation_bill_1_number: "S.B. 1338"
legislation_bill_1_signed_date: "2006-04-26"
legislation_bill_1_effective_date: "2006-12-31"
legislation_bill_2_number: "H.B. 2154"
legislation_bill_2_signed_date: "2018-04-11"
legislation_bill_2_effective_date: "2018-08-03"
legislation_bill_3_number: "H.B. 2146"
legislation_bill_3_signed_date: "2022-03-29"
legislation_bill_3_effective_date: "2022-06-27"

# ===================================================================
# :: BREACH DEFINITION
# ===================================================================
breach_definition_text: "An unauthorized acquisition of and access that materially compromises the security or confidentiality of unencrypted and unredacted computerized PI maintained by an Entity as part of a database of PI regarding multiple individuals."
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
risk_of_harm_analysis_standard: "Entity is not required to disclose a breach if the Entity, an independent third-party forensic auditor, or a law enforcement agency, after a reasonable investigation, determines that a breach has not resulted in, or is not reasonably likely to result in, substantial economic loss to affected individuals."
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
individual_notification_timeline_description: "Within 45 days after the Entity's determination that there has been a security breach"
individual_notification_extensions_available: false
individual_notification_extension_max_days: 0
individual_notification_extension_request_deadline_days: 0
individual_notification_contents:
  - "The approximate date of the breach"
  - "Type of PI included in the breach"
  - "The toll-free telephone numbers and addresses of the three largest credit reporting agencies"
  - "The toll-free number, address, and website for the FTC or any federal agency that assists consumers with identity theft matters"
individual_notification_methods:
  - "Written notice"
  - "Telephonic notice, if made directly with the affected individuals and not through a pre-recorded message"
  - "Email notice, if the Entity has email addresses for the individuals subject to the notice"

# ===================================================================
# :: SUBSTITUTE NOTIFICATION
# ===================================================================
substitute_notification_is_available: true
substitute_notification_cost_trigger: 50000
substitute_notification_affected_count_trigger: 100000
substitute_notification_insufficient_contact_info_trigger: true
substitute_notification_other_triggers: []
substitute_notification_methods:
  - "Written letter to the Attorney General demonstrating facts necessary for substitute notice"
  - "Conspicuous posting on Entity website, if Entity maintains one"

# ===================================================================
# :: ATTORNEY GENERAL NOTIFICATION
# ===================================================================
ag_notification_is_required: true
ag_notification_threshold: 1000
ag_notification_threshold_description: "Required if 1,000 or more Arizona residents affected"
ag_notification_timeline_days: 45
ag_notification_timeline_description: "Within 45 days of the determination that a breach has occurred"
ag_notification_recipients: "Attorney General and Director of the Arizona Department of Homeland Security"
ag_notification_contents:
  - "In writing, in form prescribed by rule or order of the Attorney General"
  - "Or by providing a copy of the individual notification"

# ===================================================================
# :: CONSUMER REPORTING AGENCY NOTIFICATION
# ===================================================================
cra_notification_is_required: true
cra_notification_threshold: 1000
cra_notification_threshold_description: "Required if 1,000 or more Arizona residents affected"
cra_notification_timeline_days: 45
cra_notification_timeline_description: "Within 45 days"
cra_notification_recipients: "The three largest nationwide consumer reporting agencies"
cra_notification_contents:
  - "Timing, distribution, and content of the notices to Arizona residents"
  - "Approximate number of affected persons"

# ===================================================================
# :: VENDOR NOTIFICATION (Third-Party Data Processors)
# ===================================================================
vendor_notification_is_required: true
vendor_notification_timeline_days: 0
vendor_notification_timeline_description: "As soon as possible; must notify owner or licensee of information and cooperate with owner or licensee"
owner_liability_for_vendor_failure: "Entity that maintains data under agreement with owner or licensee is not required to provide notice to individual unless agreement stipulates otherwise"
vendor_cooperation_required: true

# ===================================================================
# :: EXEMPTIONS
# ===================================================================
exemption_hipaa: true
exemption_hipaa_description: "Covered entities, business associates, and charitable fundraising foundations/nonprofits supporting covered entities that comply with HIPAA are exempt"
exemption_glba: true
exemption_glba_description: "Entities subject to Title V of the Gramm-Leach-Bliley Act are exempt"
exemption_primary_regulator: true
exemption_primary_regulator_description: "Notification pursuant to laws, rules, regulations, guidance, or guidelines established by Entity's primary or functional state regulator is sufficient for compliance"
exemption_own_notification_policy: true
exemption_own_notification_policy_description: "Any Entity that maintains own notification procedures as part of an information security policy for treatment of PI and is otherwise consistent with timing requirements shall be deemed in compliance if it notifies affected persons in accordance with its policies"
exemption_other_description: null

# ===================================================================
# :: ENFORCEMENT
# ===================================================================
enforcement_private_right_of_action: false
enforcement_authority: "Attorney General (exclusive)"
enforcement_authority_is_exclusive: true
enforcement_type_damages_description: "Civil penalty not to exceed the lesser of $10,000 per affected individual or total amount of economic loss sustained by affected individuals"

# ===================================================================
# :: PENALTIES
# ===================================================================
enforcement_penalty_per_day: 0
enforcement_penalty_per_individual: 10000
enforcement_penalty_per_record: 0
enforcement_penalty_per_violation: 0
enforcement_penalty_flat_amount: 0
enforcement_penalty_maximum: 500000
enforcement_penalty_basis: "Per breach or series of related breaches"
enforcement_penalty_notes: null

# ===================================================================
# :: SPECIAL PROVISIONS
# ===================================================================
provision_law_enforcement_delay: true
provision_law_enforcement_delay_description: "Notice may be delayed if law enforcement agency determines that notice will impede a criminal investigation. Notice must be made within 45 days after law enforcement agency determines that notification will no longer impede the investigation."
provision_government_entities_are_subject: true
provision_government_entities_notes: null
provision_waiver_not_permitted: false
provision_notice_at_collection_required: false
provision_other_description: "Special rules for email credentials: Entity may comply by providing notification by another method or clear and conspicuous notification when individual connects to online account. For online account credentials only breaches: Entity may comply by directing individual to change password and security question."

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
  - DataBreachLaws/Notice/CRA/required/threshold/1000
  - DataBreachLaws/Notice/Consumer/45days
  - DataBreachLaws/PII/biometric
  - DataBreachLaws/PII/health-info
  - DataBreachLaws/PII/taxpayer-id
  - DataBreachLaws/PII/government-id
  - DataBreachLaws/RiskOfHarm/allowed
---

# Arizona Data Breach Notification Law

## Overview
- **Statutory Citation:** `Ariz. Rev. Stat. § 18-551 et seq.`
- **Statute Title:** [Arizona Notification of Security System Breaches](https://www.azleg.gov/viewdocument/?docName=https://www.azleg.gov/ars/18/00551.htm)
- **Jurisdiction Type:** U.S. State
- **Legislative History:**
  - **Original Legislation:** S.B. 1338 (signed April 26, 2006, effective December 31, 2006)
  - **Major Amendments:**
    - H.B. 2154 (signed April 11, 2018, effective August 3, 2018)
    - H.B. 2146 (signed March 29, 2022, effective June 27, 2022)
  - **Last Verified:** September 2025

## Application & Covered Entities
Applies to any person or entity that conducts business in Arizona and that owns, maintains, or licenses unencrypted and unredacted computerized personal information.

## Key Definitions

### Personal Information (Category 1)
An individual's first name or first initial and last name in combination with any one or more of the following data elements:
- Social Security number
- Number on a driver's license issued pursuant to A.R.S. § 28-3166 or number on a nonoperating identification license issued pursuant to A.R.S. § 28-3165
- Financial account number or credit number or debit card number in combination with any required security code, access code, or password that would permit access to the individual's financial account
- A private key that is unique to an individual and that is used to authenticate or sign an electronic record
- An individual's health insurance identification number
- Information about an individual's medical or mental health treatment or diagnosis by a health care professional
- Passport number
- Individual's taxpayer identification number or an identity protection personal identification number issued by the IRS
- Unique biometric data generated from a measurement or analysis of human body characteristics to authenticate an individual when the individual accesses an online account

### Personal Information (Category 2)
An individual's username or email address, in combination with a password or security question and answer, that allows access to an online account.

### Exclusions
PI does not include publicly available information that is lawfully made available to the general public from federal, state, or local government records or widely distributed media.

### Breach of Security
An unauthorized acquisition of and access that materially compromises the security or confidentiality of unencrypted and unredacted computerized PI maintained by an Entity as part of a database of PI regarding multiple individuals.

### Exceptions to Breach Definition
Good-faith acquisition of PI by an employee or agent of the Entity for the purposes of the Entity is not a breach if the PI is not used for a purpose unrelated to the Entity or subject to further unauthorized disclosure.

## Notification Requirements & Triggers

### Risk of Harm Standard
An Entity is **not required** to disclose a breach if the Entity, an independent third-party forensic auditor, or a law enforcement agency, after a reasonable investigation, determines that a breach has **not resulted in, or is not reasonably likely to result in, substantial economic loss** to affected individuals.

### Timing of Notice to Individuals
Within **45 days** after the Entity's determination that there has been a security breach.

### Content of Notice to Individuals
The notice shall include at least the following:
- The approximate date of the breach
- Type of PI included in the breach
- The toll-free telephone numbers and addresses of the three largest credit reporting agencies
- The toll-free number, address, and website for the FTC or any federal agency that assists consumers with identity theft matters

### Special Rules for Online Account Credentials
If the breach involves only online account credentials and no other PI, the Entity may comply by providing notification in an electronic or other form that directs the individual to promptly change their password and security question or answer, or to take other steps appropriate to protect the online account and all other online accounts for which the individual uses the same username and email address and password or security question or answer.

### Special Rules for Email Account Credentials
For the breach of credentials to an email account furnished by the Entity, the Entity may comply by providing notification by another method or by providing clear and conspicuous notification delivered to the individual online when connected to the online account from an IP address or online location from which the Entity knows the individual customarily accesses the account. The Entity satisfies the notification requirement by requiring the individual to reset their password or security question and answer for that account, if the Entity also notifies the individual to change the same password or security question and answer for all other online accounts for which the individual uses the same username or email address and password or security question or answer.

### Method of Notice to Individuals
Notice may be provided by one of the following methods:
- Written notice
- Telephonic notice, if made directly with the affected individuals and not through a pre-recorded message
- Email notice, if the Entity has email addresses for the individuals subject to the notice

### Substitute Notice Available
If the Entity can demonstrate that:
- The cost of providing notice will exceed **$50,000**, OR
- The affected class of persons to be notified exceeds **100,000**, OR
- The Entity does not have sufficient contact information

Substitute notice shall consist of all of the following:
- A written letter to the Attorney General that demonstrates the facts necessary for substitute notice
- Conspicuous posting of the notice on the website of the Entity, if the Entity maintains one

### Attorney General Notification
**Requirement:** Required if an Entity is required to notify **more than 1,000** Arizona residents.

**Who to Notify:** The Entity shall notify the Attorney General and the Director of the Arizona Department of Homeland Security, in writing, in a form prescribed by rule or order of the Attorney General, or by providing a copy of the individual notification.

**Timing:** Within **45 days** of the determination that a breach has occurred.

### Consumer Reporting Agency Notice
- Required if an Entity is required to notify **more than 1,000** Arizona residents
- The Entity shall notify the three largest nationwide consumer reporting agencies within **45 days**
- Required content: Timing, distribution, and content of the notices to Arizona residents; Approximate number of affected persons

### Third-Party Data Notification
- If an Entity maintains unencrypted and unredacted computerized PI that the Entity does not own or license, the Entity shall notify, as soon as possible, the owner or licensee of the information, and cooperate with the owner or the licensee of the information
- Cooperation shall include sharing information relevant to the breach
- The Entity that maintains the data under an agreement with the owner or licensee is not required to provide notice to the individual unless the agreement stipulates otherwise

## Exemptions, Penalties, and Other Provisions

### Encryption Safe Harbor
The law provides a safe harbor for encrypted or redacted data.

### Regulatory Exemptions
- **Primary Regulator:** Notification pursuant to laws, rules, regulations, guidance, or guidelines established by an Entity's primary or functional state regulator is sufficient for compliance
- **HIPAA:** The statute does not apply to a covered entity or business associate as defined under HIPAA or a charitable fundraising foundation or nonprofit corporation whose primary purpose is to support a specified covered entity, if they comply with applicable provisions of HIPAA
- **GLBA:** Entities subject to Title V of the Gramm-Leach-Bliley Act are exempt from this statute
- **Own Notification Policy:** Any Entity that maintains its own notification procedures as part of an information security policy for the treatment of PI and is otherwise consistent with the timing requirements shall be deemed in compliance if the Entity notifies affected persons in accordance with its policies

### Penalties
A knowing and willful violation is an unlawful practice. The Attorney General may impose a civil penalty not to exceed the lesser of **$10,000 per affected individual** or the total amount of economic loss sustained by affected individuals, but the maximum civil penalty from a breach or series of related breaches may not exceed **$500,000**.

### Private Right of Action
The statute does not provide for a private right of action.

## Key Provisions

### Delay for Law Enforcement
Notice may be delayed if a law enforcement agency determines that the notice will impede a criminal investigation. Notice must be made within 45 days after the law enforcement agency determines that notification will no longer impede the investigation.

### Attorney General Enforcement
A knowing and willful violation is an unlawful practice, enforced exclusively by the Attorney General.
