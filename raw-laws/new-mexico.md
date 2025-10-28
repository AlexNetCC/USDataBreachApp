---
state: "New Mexico"
state_code: "NM"
jurisdiction_type: "U.S. State"
statute_citation: "N.M. Stat. § 57-12C-1 et seq."
statute_title: "New Mexico Data Breach Notification Act"
statute_url: "https://nmonesource.com/nmos/nmsa-historical/en/item/1946/index.do?zoupio-debug"

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
legislation_bill_1_number: "H.B. 15"
legislation_bill_1_signed_date: "2017-04-06"
legislation_bill_1_effective_date: "2017-06-16"

# ===================================================================
# :: BREACH DEFINITION
# ===================================================================
breach_definition_text: "Unauthorized acquisition of unencrypted computerized data, or of encrypted computerized data and the confidential process or key used to decrypt the encrypted computerized data, that compromises the security, confidentiality, or integrity of personal information maintained by a person."
breach_trigger: "unauthorized_acquisition"
breach_access_alone_triggers: false
breach_acquisition_alone_triggers: true

# ===================================================================
# :: ENCRYPTION SAFE HARBOR
# ===================================================================
exemption_encryption_safe_harbor: true
exemption_encryption_safe_harbor_negated_if_key_compromised: true
exemption_encryption_description: "Data encrypted or redacted or otherwise rendered unreadable or unusable"

# ===================================================================
# :: RISK OF HARM ANALYSIS
# ===================================================================
risk_of_harm_analysis_is_required: true
risk_of_harm_analysis_can_eliminate_notification: true
risk_of_harm_analysis_standard: "Security breach does not give rise to significant risk of identity theft or fraud"
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
individual_notification_timeline_description: "Notification shall be made in the most expedient time possible, but not later than 45 calendar days following discovery of the security breach. Notification may be delayed as necessary to determine the scope of the security breach and restore the integrity, security, and confidentiality of the data system"
individual_notification_extensions_available: false
individual_notification_extension_max_days: 0
individual_notification_extension_request_deadline_days: 0
individual_notification_contents:
  - "Name and contact information of the notifying person"
  - "List of types of personal information subject to breach"
  - "Date of breach or estimated date or range of dates"
  - "General description of the security breach incident"
  - "Toll-free telephone numbers and addresses of major consumer reporting agencies"
  - "Advice to review personal account statements and credit reports"
  - "Advice on rights pursuant to federal Fair Credit Reporting Act"
individual_notification_methods:
  - "United States mail"
  - "Electronic notification, if entity primarily communicates by electronic means or consistent with 15 U.S.C. § 7001 (E-Sign Act)"

# ===================================================================
# :: SUBSTITUTE NOTIFICATION
# ===================================================================
substitute_notification_is_available: true
substitute_notification_cost_trigger: 100000
substitute_notification_affected_count_trigger: 50000
substitute_notification_insufficient_contact_info_trigger: true
substitute_notification_other_triggers: []
substitute_notification_methods:
  - "Email notice if entity has email addresses for subject persons"
  - "Conspicuous posting on entity website, if entity maintains one"
  - "Notification to major statewide media and Attorney General"

# ===================================================================
# :: ATTORNEY GENERAL NOTIFICATION
# ===================================================================
ag_notification_is_required: true
ag_notification_threshold: 1000
ag_notification_threshold_description: "If more than 1,000 New Mexico residents are to be notified as a result of single breach"
ag_notification_timeline_days: 45
ag_notification_timeline_description: "If more than 1,000 New Mexico residents are to be notified as a result of a single breach, entity shall notify the Office of the Attorney General within 45 calendar days following discovery, except if delayed notification is permitted to determine the scope of the breach or for law enforcement investigation purposes"
ag_notification_recipients: "Office of the Attorney General"
ag_notification_contents:
  - "Number of New Mexico residents receiving notification"
  - "Copy of the notification sent to affected residents"

# ===================================================================
# :: CONSUMER REPORTING AGENCY NOTIFICATION
# ===================================================================
cra_notification_is_required: true
cra_notification_threshold: 1000
cra_notification_threshold_description: "If more than 1,000 New Mexico residents are to be notified as a result of single breach"
cra_notification_timeline_days: 45
cra_notification_timeline_description: "If more than 1,000 New Mexico residents are to be notified as a result of a single breach, entity shall notify major consumer reporting agencies in the most expedient time possible, and no later than 45 calendar days, except if delayed notification is permitted to determine the scope of the breach or for law enforcement investigation purposes"
cra_notification_recipients: "Major consumer reporting agencies"
cra_notification_contents:
  - "Notification of security breach"
  - "Timing of notification"

# ===================================================================
# :: VENDOR NOTIFICATION (Third-Party Data Processors)
# ===================================================================
vendor_notification_is_required: true
vendor_notification_timeline_days: 45
vendor_notification_timeline_description: "Any business maintaining computerized data of another must notify owner or licensee in the most expedient time possible, but not later than 45 calendar days following discovery of breach, except if delayed notification is permitted or ROH analysis determines significant risk of identity theft or fraud does not exist"
owner_liability_for_vendor_failure: "Third-party must notify owner/licensee within 45 days unless ROH exception applies"
vendor_cooperation_required: false

# ===================================================================
# :: EXEMPTIONS
# ===================================================================
exemption_hipaa: true
exemption_hipaa_description: "Entities subject to federal HIPAA (Health Insurance Portability and Accountability Act of 1996)"
exemption_glba: true
exemption_glba_description: "Entities subject to federal Gramm-Leach-Bliley Act"
exemption_primary_regulator: false
exemption_primary_regulator_description: null
exemption_own_notification_policy: true
exemption_own_notification_policy_description: "Entity with own notification procedures consistent with timing requirements of statute deemed in compliance if notifies affected consumers in accordance with policies"
exemption_other_description: null

# ===================================================================
# :: ENFORCEMENT
# ===================================================================
enforcement_private_right_of_action: false
enforcement_authority: "Attorney General"
enforcement_authority_is_exclusive: false
enforcement_type_damages_description: "Injunction and damages"

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
enforcement_penalty_notes: "Injunctive relief and damages available; specific penalty amounts not enumerated in data breach statute"

# ===================================================================
# :: SPECIAL PROVISIONS
# ===================================================================
provision_law_enforcement_delay: true
provision_law_enforcement_delay_description: "Notification may be delayed if a law enforcement agency determines that the notification will impede a criminal investigation"
provision_government_entities_are_subject: true
provision_government_entities_notes: null
provision_waiver_not_permitted: false
provision_notice_at_collection_required: false
provision_other_description: "Explicit 45-day notification timeline (one of few states with specific deadline). Risk of harm analysis allowed and can eliminate notification requirement (standard: breach does not give rise to significant risk of identity theft or fraud). Biometric data explicitly included in PII definition. Both HIPAA and GLBA exemptions available. AG, CRA, and vendor notification all within 45 days when thresholds met."

# ===================================================================
# :: OBSIDIAN TAGS
# ===================================================================
tags:
  - DataBreachLaws/Breach/trigger/acquisition
  - DataBreachLaws/Exempts/glba
  - DataBreachLaws/Exempts/hipaa
  - DataBreachLaws/Exempts/own-policy
  - DataBreachLaws/Notice/AG/required/threshold/1000
  - DataBreachLaws/Notice/AG/required/timing/45days
  - DataBreachLaws/Notice/CRA/required/threshold/1000
  - DataBreachLaws/Notice/CRA/required/timing/45days
  - DataBreachLaws/Notice/Consumer/45days
  - DataBreachLaws/PII/biometric
  - DataBreachLaws/PII/financial-accounts
  - DataBreachLaws/PII/government-id
  - DataBreachLaws/RiskOfHarm/allowed
---

# New Mexico Data Breach Notification Law

## Overview
- **Statutory Citation:** `N.M. Stat. § 57-12C-1 et seq.`
- **Statute Title:** [New Mexico Data Breach Notification Act](https://nmonesource.com/nmos/nmsa-historical/en/item/1946/index.do?zoupio-debug)
- **Jurisdiction Type:** U.S. State
- **Legislative History:**
  - **Original Legislation:** H.B. 15 (signed into law April 6, 2017, effective June 16, 2017)
  - **Last Verified:** September 2025

## Application & Covered Entities
Any person that owns or licenses elements that include personal information of a New Mexico resident.

## Key Definitions

### Personal Information
An individual's first name or first initial and last name in combination with one or more of the following data elements that relate to the individual, when the data elements are not protected through encryption or redaction or otherwise rendered unreadable or unusable:
- Social Security number
- Driver's license number
- Government-issued identification number
- Account number, credit card number, or debit card number in combination with any required security code, access code, or password that would permit access to a person's financial account
- Biometric data

### Exclusions
Personal information does not include information lawfully obtained from publicly available sources or from federal, state or local government records lawfully made available to the general public.

### Breach of Security
Unauthorized acquisition of unencrypted computerized data, or of encrypted computerized data and the confidential process or key used to decrypt the encrypted computerized data, that compromises the security, confidentiality, or integrity of personal information maintained by a person.

### Good-Faith Exception
Good-faith acquisition of personal information by an employee or agent of a person for a legitimate business purpose of the person is not a security breach, provided that the personal information is not subject to further unauthorized disclosure.

## Notification Requirements & Triggers

### Notification Obligation
An Entity to which the statute applies shall notify each New Mexico resident whose personal information is reasonably believed to have been subject to a security breach.

**Exception:** Notification to New Mexico residents is not required if, after an appropriate investigation, the Entity determines that the security breach does not give rise to a significant risk of identity theft or fraud.

### Timing of Notification
Notification shall be made in the most expedient time possible, but not later than **45 calendar days** following discovery of the security breach. Notification may be delayed as necessary to determine the scope of the security breach and restore the integrity, security, and confidentiality of the data system.

### Notification Methods
Notice may be provided by one of the following methods:
- United States mail
- Electronic notification, if the Entity primarily communicates with the New Mexico resident by electronic means or if the notice provided is consistent with 15 U.S.C. § 7001 (E-Sign Act)

### Content of Notice to Individuals
- The name and contact information of the notifying person
- A list of the types of personal information that are reasonably believed to have been the subject of a security breach, if known
- The date of the security breach, the estimated date of the breach, or the range of dates within which the security breach occurred, if known
- A general description of the security breach incident
- The toll-free telephone numbers and addresses of the major consumer reporting agencies
- Advice that directs the recipient to review personal account statements and credit reports to detect errors resulting from the security breach
- Advice that informs the recipient of the recipient's rights pursuant to the federal Fair Credit Reporting Act

### Attorney General Notification
If more than **1,000** New Mexico residents are to be notified as a result of a single security breach, the Entity shall notify the Office of the Attorney General of the number of New Mexico residents that received notification and shall provide a copy of the notification that was sent to affected residents within **45 calendar days** following discovery of the security breach, except if delayed notification is permitted to determine the scope of the breach or for law enforcement investigation purposes.

### Consumer Reporting Agency Notification
If more than **1,000** New Mexico residents are to be notified as a result of a single security breach, the Entity shall notify major consumer reporting agencies in the most expedient time possible, and no later than **45 calendar days**, except if delayed notification is permitted to determine the scope of the breach or for law enforcement investigation purposes.

### Substitute Notice Available
If the Entity demonstrates that:
- The cost of providing notification would exceed **$100,000**, OR
- The number of residents to be notified exceeds **50,000**, OR
- The Entity does not have sufficient contact information

Substitute notice shall consist of all of the following:
- Sending electronic notification to the email address of those residents for whom the Entity has a valid email address
- Posting notification of the security breach in a conspicuous location on the website of the Entity, if the Entity maintains one
- Sending written notification to the Office of the Attorney General and major media outlets in New Mexico

### Third-Party Data Notification
Any business that is licensed to maintain or possess computerized data containing personal information of a New Mexico resident that the business does not own or license shall notify the owner or licensee of the security breach in the most expedient time possible, but not later than **45 calendar days** following discovery of the breach, except if delayed notification is permitted to determine the scope of the breach or for law enforcement investigation purposes. However, notification to the owner or licensee is not required if, after an appropriate investigation, the business determines that the security breach does not give rise to a significant risk of identity theft or fraud.

## Exemptions, Penalties, and Other Provisions

### Encryption Safe Harbor
The law provides a safe harbor for encrypted or redacted data.

### Own Notification Policy Exemption
An Entity that maintains its own notice procedures as part of an information security policy for the treatment of personal information and whose procedures are otherwise consistent with the timing requirements of the statute is deemed to be in compliance if the Entity notifies affected consumers in accordance with its policies in the event of a security breach.

### Gramm-Leach-Bliley Act and HIPAA Exemptions
This statute does not apply to an Entity subject to the federal Gramm-Leach-Bliley Act or the federal Health Insurance Portability and Accountability Act of 1996.

### Private Right of Action
The statute does not provide for a private right of action.

## Key Provisions

### Delay for Law Enforcement
Notification may be delayed if a law enforcement agency determines that the notification will impede a criminal investigation.

### Attorney General Enforcement
The Attorney General may bring an action for an injunction and damages.
