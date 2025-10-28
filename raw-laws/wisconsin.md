---
state: "Wisconsin"
state_code: "WI"
jurisdiction_type: "U.S. State"
statute_citation: "Wis. Stat. § 134.98"
statute_title: "Wisconsin Data Breach Notification Law"
statute_url: "https://docs.legis.wisconsin.gov/statutes/statutes/134/98"

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
legislation_bill_1_number: "S.B. 164"
legislation_bill_1_signed_date: "2006-03-16"
legislation_bill_1_effective_date: "2006-03-31"

# ===================================================================
# :: BREACH DEFINITION
# ===================================================================
breach_definition_text: "An Entity knows that PI in its possession has been acquired by a person whom the Entity has not authorized to acquire the PI, or (for entities outside Wisconsin) when it knows that PI pertaining to a Wisconsin resident has been acquired by an unauthorized person."
breach_trigger: "unauthorized_acquisition"
breach_access_alone_triggers: false
breach_acquisition_alone_triggers: true

# ===================================================================
# :: ENCRYPTION SAFE HARBOR
# ===================================================================
exemption_encryption_safe_harbor: true
exemption_encryption_safe_harbor_negated_if_key_compromised: true
exemption_encryption_description: "Information that is encrypted, redacted, or altered to be unreadable"

# ===================================================================
# :: RISK OF HARM ANALYSIS
# ===================================================================
risk_of_harm_analysis_is_required: false
risk_of_harm_analysis_can_eliminate_notification: true
risk_of_harm_analysis_standard: "Acquisition does not create a material risk of identity theft or fraud to the subject"
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
individual_notification_timeline_description: "Within a reasonable time, not to exceed 45 days after Entity learns of acquisition"
individual_notification_extensions_available: false
individual_notification_extension_max_days: 0
individual_notification_extension_request_deadline_days: 0
individual_notification_contents:
  - "Indication that the Entity knows of the unauthorized acquisition of PI pertaining to the Wisconsin resident"
individual_notification_methods:
  - "Mail to the subject's address"
  - "A method the Entity has previously employed to communicate with the subject"

# ===================================================================
# :: SUBSTITUTE NOTIFICATION
# ===================================================================
substitute_notification_is_available: true
substitute_notification_cost_trigger: 0
substitute_notification_affected_count_trigger: 0
substitute_notification_insufficient_contact_info_trigger: false
substitute_notification_other_triggers:
  - "Cannot determine mailing address with reasonable diligence"
  - "Has not previously communicated with subject"
substitute_notification_methods:
  - "A method reasonably calculated to provide actual notice to the subject of the PI"

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
cra_notification_threshold_description: "If Entity required to notify 1,000 or more individuals as result of single incident"
cra_notification_timeline_days: 0
cra_notification_timeline_description: "Without unreasonable delay"
cra_notification_recipients: "Major consumer reporting agencies"
cra_notification_contents:
  - "Timing, distribution, and content of notices sent to individuals"

# ===================================================================
# :: VENDOR NOTIFICATION (Third-Party Data Processors)
# ===================================================================
vendor_notification_is_required: true
vendor_notification_timeline_days: 0
vendor_notification_timeline_description: "As soon as practicable"
owner_liability_for_vendor_failure: "Third-party must notify owner/licensor as soon as practicable if PI acquired by unauthorized person"
vendor_cooperation_required: false

# ===================================================================
# :: EXEMPTIONS
# ===================================================================
exemption_hipaa: true
exemption_hipaa_description: "Health plans and health care providers complying with 45 C.F.R. pt. 164"
exemption_glba: true
exemption_glba_description: "Entities subject to Title V of Gramm-Leach-Bliley Act with information security policy in effect"
exemption_primary_regulator: false
exemption_primary_regulator_description: null
exemption_own_notification_policy: false
exemption_own_notification_policy_description: null
exemption_other_description: null

# ===================================================================
# :: ENFORCEMENT
# ===================================================================
enforcement_private_right_of_action: false
enforcement_authority: "Attorney General"
enforcement_authority_is_exclusive: false
enforcement_type_damages_description: "Violation is not negligence per se but may be evidence of negligence or breach of legal duty"

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
enforcement_penalty_notes: "Violation is not negligence per se but may be evidence of negligence or breach of legal duty; specific penalty amounts not enumerated in statute"

# ===================================================================
# :: SPECIAL PROVISIONS
# ===================================================================
provision_law_enforcement_delay: true
provision_law_enforcement_delay_description: "Law enforcement agency may request Entity not provide notice for any period to protect investigation or homeland security. UNIQUE: Entity may NOT provide notice except as authorized by requesting agency (stronger restriction than most states)."
provision_government_entities_are_subject: true
provision_government_entities_notes: "Explicitly includes state government offices, departments, agencies, and local governments (cities, villages, towns, counties)"
provision_waiver_not_permitted: false
provision_notice_at_collection_required: false
provision_other_description: "Explicit 45-day deadline. NO ATTORNEY GENERAL NOTIFICATION REQUIRED (one of only 3 states: TN, WV, WI). MINIMAL content required in notice (just indication that breach occurred - least detailed in nation). Risk of harm analysis allowed. Unique substitute trigger: cannot determine address OR has not previously communicated with subject (no cost/count thresholds). CRA threshold of 1,000. Both HIPAA and GLBA exemptions. PII includes DNA profile and biometric data. Reasonableness factors specified in statute. Single legislative bill (2006, no amendments). Law enforcement may PROHIBIT notification (stronger than typical delay provisions)."

# ===================================================================
# :: OBSIDIAN TAGS
# ===================================================================
tags:
  - DataBreachLaws/Breach/trigger/acquisition
  - DataBreachLaws/Exempts/glba
  - DataBreachLaws/Exempts/hipaa
  - DataBreachLaws/Notice/AG/not-required
  - DataBreachLaws/Notice/AG/Shame-Site
  - DataBreachLaws/Notice/CRA/required/threshold/1000
  - DataBreachLaws/Notice/Consumer/45days
  - DataBreachLaws/PII/biometric
  - DataBreachLaws/PII/genetic
  - DataBreachLaws/PII/financial-accounts
  - DataBreachLaws/PII/government-id
  - DataBreachLaws/RiskOfHarm/allowed
---

# Wisconsin Data Breach Notification Law

## Overview
- **Statutory Citation:** `Wis. Stat. § 134.98`
- **Statute Title:** [Wisconsin Data Breach Notification Law](https://docs.legis.wisconsin.gov/statutes/statutes/134/98)
- **Jurisdiction Type:** U.S. State
- **Legislative History:**
  - **Original Legislation:** S.B. 164 (signed March 16, 2006, effective March 31, 2006)
  - **Last Verified:** September 2025

## Application & Covered Entities
Any Entity that maintains or licenses PI in Wisconsin or that knows that PI pertaining to a Wisconsin resident has been acquired by a person whom the Entity has not authorized to acquire the PI.

**Entity includes:**
- The state of Wisconsin and any office, department, independent agency, authority, institution, association, society, or other body in state government
- A city, village, town, or county
- A person (other than an individual) that:
  - Conducts business in Wisconsin and maintains PI in the ordinary course of business
  - Licenses PI in Wisconsin
  - Maintains for a Wisconsin resident a depository account
  - Lends money to a Wisconsin resident

## Key Definitions

### Personal Information
An individual's last name and the individual's first name or first initial, in combination with and linked to any of the following elements, if the element is not publicly available information and is not encrypted, redacted, or altered to render it unreadable:
- Social Security number
- Driver's license number or state identification number
- Account number, credit card number, or debit card number, or any security code, access code, or password that would permit access to the individual's financial account
- DNA profile
- Unique biometric data (fingerprint, voice print, retina or iris image, or other unique physical representation)

### Exclusions
PI does not include:
- Publicly available information (reasonably believed to be lawfully made widely available through any media or lawfully made available from federal, state, or local government records)

### Breach of Security
When an Entity knows that PI in its possession has been acquired by a person whom the Entity has not authorized to acquire the PI, or (for entities outside Wisconsin) when it knows that PI pertaining to a Wisconsin resident has been acquired by an unauthorized person.

### Good-Faith Exception
Good-faith acquisition by an employee or agent of the Entity is not a breach, provided the PI is used for a lawful purpose of the Entity.

## Notification Requirements & Triggers

### Notification Obligation
Any Entity shall make reasonable efforts to notify each subject of PI when a breach occurs.

**Exception:** An Entity is not required to provide notice if:
- The acquisition of PI does not create a material risk of identity theft or fraud to the subject of the PI, OR
- The PI was acquired in good faith by an employee or agent of the Entity and used for a lawful purpose of the Entity

### Timing of Notification
**To Affected Individuals:** Within a reasonable time, not to exceed **45 days** after the Entity learns of the acquisition of PI.

**Reasonableness Standard:** Determination of reasonableness shall include consideration of:
- The number of notices the Entity must provide
- The methods of communication available to the Entity

### Notification Methods
Notice may be provided by one of the following:
- Mail
- A method the Entity has previously employed to communicate with the subject of the PI

### Content of Notice to Individuals
The notice shall indicate that the Entity knows of the unauthorized acquisition of PI pertaining to the Wisconsin resident who is the subject of the PI.

### Consumer Reporting Agency Notification
**Threshold:** If, as the result of a single incident, an Entity is required to notify **1,000 or more individuals**, the Entity shall notify all nationwide consumer reporting agencies.

**Timing:** Without unreasonable delay

**Content:** Timing, distribution, and content of the notices sent to individuals

### Substitute Notice Available
If an Entity cannot with reasonable diligence determine the mailing address of the subject of the PI, and if the Entity has not previously communicated with the subject of the PI, the Entity shall provide notice by a method reasonably calculated to provide actual notice to the subject of the PI.

### Third-Party Data Notification
If an Entity that stores PI pertaining to a Wisconsin resident (but does not own or license the PI) knows that the PI has been acquired by an unauthorized person and has not entered into a contract with the person that owns or licenses the PI, the Entity shall notify the owner or licensor of the acquisition as soon as practicable.

## Exemptions, Penalties, and Other Provisions

### Encryption Safe Harbor
The statute does not apply to information that is encrypted, redacted, or altered to be unreadable.

### GLBA Compliance
An Entity subject to and in compliance with the privacy and security requirements of Title V of the Gramm-Leach-Bliley Act, or a person with a contractual obligation to such an Entity, if the Entity or person has in effect a policy concerning breaches of information security.

### HIPAA Compliance
A health plan, health care clearinghouse, or health care provider who transmits any health information in electronic form, if the Entity complies with the requirements of 45 C.F.R. pt. 164.

### Liability and Private Right of Action
A violation itself is not negligence, but it may be evidence of negligence or a breach of a legal duty. The statute does not explicitly provide for a private right of action.

## Key Provisions

### Delay for Law Enforcement
A law enforcement agency may ask an Entity not to provide required notice for any period of time to protect an investigation or homeland security. If an Entity receives such a request, the Entity may not provide notice of or publicize an unauthorized acquisition of PI, except as authorized by the requesting law enforcement agency.

### Attorney General Enforcement
Attorney General enforcement is available.
