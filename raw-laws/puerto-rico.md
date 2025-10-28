---
# ===================================================================
# :: CORE INFORMATION
# ===================================================================
state: "Puerto Rico"
state_code: "PR"
jurisdiction_type: "U.S. Territory"
statute_citation: "P.R. Laws Ann. tit. 10, § 4051 et seq."
statute_title: "Puerto Rico Data Bank Security Act"
statute_url: "https://advance.lexis.com/documentpage/?pdmfid=1000516&crid=d456db5b-d260-4bd4-b471-e1c8928f1f3c&pdistocdocslideraccess=true&config=00JABkODU1MGI4OC1hMmRkLTQ2MGYtOGY1NS03YjVjOWM4YjJlZjAKAFBvZENhdGFsb2d0HiKld62itjBDGzN8H7lV&pddocfullpath=%2Fshared%2Fdocument%2Fstatutes-legislation%2Furn%3AcontentItem%3A5D6S-8B41-66SD-80SR-00008-00&pdcomponentid=234193&pdtocnodeidentifier=AAMAADABGAAB&ecomp=qssdkkk&prid=f3248d28-550a-4bf4-8822-f9d67e07199b"

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
legislation_bill_1_number: "H.B. 1184"
legislation_bill_1_signed_date: "2005-09-07"
legislation_bill_1_effective_date: "2006-01-05"

# ===================================================================
# :: BREACH DEFINITION
# ===================================================================
breach_definition_text: "Unauthorized access to data files that compromises the security, confidentiality, or integrity of the information. This includes both electronic and physical access to the database system or physical access to recording media containing the information."
breach_trigger: "unauthorized_access"
breach_access_alone_triggers: true
breach_acquisition_alone_triggers: true

# ===================================================================
# :: ENCRYPTION SAFE HARBOR
# ===================================================================
exemption_encryption_safe_harbor: true
exemption_encryption_safe_harbor_negated_if_key_compromised: true
exemption_encryption_description: "Information protected by encrypted code (password-only protection is NOT sufficient - encrypted code specifically required)"

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
individual_notification_timeline_description: "As expeditiously as possible, taking into consideration need of law enforcement agencies to secure crime scenes/evidence and measures needed to restore system security"
individual_notification_extensions_available: false
individual_notification_extension_max_days: 0
individual_notification_extension_request_deadline_days: 0
individual_notification_contents:
  - "A description of the breach in general terms"
  - "A description of the type of sensitive information compromised"
  - "A toll-free number and website for more information"
individual_notification_methods:
  - "Written notice"
  - "Authenticated electronic notice (according to E-Sign Act)"

# ===================================================================
# :: SUBSTITUTE NOTIFICATION
# ===================================================================
substitute_notification_is_available: true
substitute_notification_cost_trigger: 100000
substitute_notification_affected_count_trigger: 100000
substitute_notification_insufficient_contact_info_trigger: true
substitute_notification_other_triggers: []
substitute_notification_methods:
  - "Prominent display of announcement at entity premises"
  - "Prominent display on entity website"
  - "Prominent display in informative materials"
  - "Communication to media with situation and contact information"

# ===================================================================
# :: ATTORNEY GENERAL NOTIFICATION
# ===================================================================
ag_notification_is_required: true
ag_notification_threshold: 1
ag_notification_threshold_description: "Required for all breaches (threshold of 1 affected Puerto Rico resident)"
ag_notification_timeline_days: 10
ag_notification_timeline_description: "Within non-extendable term of 10 days after breach is detected"
ag_notification_recipients: "Department of Consumer Affairs (DACO)"
ag_notification_contents:
  - "Notification to Department of Consumer Affairs (DACO)"

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
vendor_notification_timeline_description: "Without unreasonable delay following discovery (if entity resells or provides access to digital databases containing personal information)"
owner_liability_for_vendor_failure: "Third-party must notify proprietor/custodian/holder of information of security violation allowing access to unauthorized persons"
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
exemption_own_notification_policy_description: "Preexisting institutional security policies providing equal or better protection than statute requirements"
exemption_other_description: null

# ===================================================================
# :: ENFORCEMENT
# ===================================================================
enforcement_private_right_of_action: true
enforcement_authority: "Secretary of Department of Consumer Affairs (DACO) and Private Parties"
enforcement_authority_is_exclusive: false
enforcement_type_damages_description: "Secretary may impose fines of $500 to $5,000 per violation. Private right of action allows consumers to initiate actions for damages in competent court. Private right not affected by administrative fines."

# ===================================================================
# :: PENALTIES
# ===================================================================
enforcement_penalty_per_day: 0
enforcement_penalty_per_individual: 0
enforcement_penalty_per_record: 0
enforcement_penalty_per_violation: 500
enforcement_penalty_flat_amount: 0
enforcement_penalty_maximum: 5000
enforcement_penalty_basis: "Per violation"
enforcement_penalty_notes: "$500 to $5,000 per violation. Private right of action available for consumers."

# ===================================================================
# :: SPECIAL PROVISIONS
# ===================================================================
provision_law_enforcement_delay: true
provision_law_enforcement_delay_description: "Timing of notification takes into consideration legitimate needs of law enforcement agencies to secure possible crime scenes and evidence"
provision_government_entities_are_subject: true
provision_government_entities_notes: null
provision_waiver_not_permitted: false
provision_notice_at_collection_required: false
provision_other_description: "U.S. TERRITORY (not a state). Notification to Department of Consumer Affairs (DACO) within non-extendable 10 days. DACO makes PUBLIC ANNOUNCEMENT within 24 hours after receiving notification (unique provision). Password-only protection is NOT sufficient for safe harbor - encrypted code specifically required (notification required if only password-protected). Private right of action available. Specific penalty range: $500-$5,000 per violation. Unauthorized access triggers breach. Unique substitute notification methods include prominent display at premises and in informative materials."

# ===================================================================
# :: OBSIDIAN TAGS
# ===================================================================
tags:
  - DataBreachLaws/Breach/trigger/access
  - DataBreachLaws/Enforcement/private-right-of-action
  - DataBreachLaws/Exempts/own-policy
  - DataBreachLaws/Notice/AG/required/threshold/1
  - DataBreachLaws/Notice/AG/required/timing/10days
  - DataBreachLaws/Notice/CRA/not-required
  - DataBreachLaws/Notice/Consumer/asap
  - DataBreachLaws/PII/financial-accounts
  - DataBreachLaws/PII/government-id
  - DataBreachLaws/PII/health-info
  - DataBreachLaws/PII/online-account-credentials
  - DataBreachLaws/PII/work-evaluations
  - DataBreachLaws/RiskOfHarm/not-allowed
---
# Puerto Rico Data Breach Notification Law

## Overview
- **Statutory Citation:** `P.R. Laws Ann. tit. 10, § 4051 et seq.`
- **Statute Title:** [Puerto Rico Data Bank Security Act](https://advance.lexis.com/documentpage/?pdmfid=1000516&crid=d456db5b-d260-4bd4-b471-e1c8928f1f3c&pdistocdocslideraccess=true&config=00JABkODU1MGI4OC1hMmRkLTQ2MGYtOGY1NS03YjVjOWM4YjJlZjAKAFBvZENhdGFsb2d0HiKld62itjBDGzN8H7lV&pddocfullpath=%2Fshared%2Fdocument%2Fstatutes-legislation%2Furn%3AcontentItem%3A5D6S-8B41-66SD-80SR-00008-00&pdcomponentid=234193&pdtocnodeidentifier=AAMAADABGAAB&ecomp=qssdkkk&prid=f3248d28-550a-4bf4-8822-f9d67e07199b)
- **Jurisdiction Type:** U.S. Territory
- **Legislative History:**
  - **Original Legislation:** H.B. 1184 (signed September 7, 2005, effective January 5, 2006)
  - **Last Verified:** September 2025

## Application & Covered Entities
Any entity that is the owner or custodian of a database that includes personal information of residents of Puerto Rico.

## Key Definitions

### Personal Information
An individual's first name or initial and last name, in combination with:
- Social Security number
- Driver's license number or other government-issued ID number
- Financial account, credit, or debit card number
- Tax information
- Medical information
- Work-related evaluations
- Usernames and passwords for online services

### Exclusions
Personal information does not include:
- Mailing addresses or residential addresses
- Information that is in a public document and available to citizens in general

### Breach of Security
Unauthorized access to data files that compromises the security, confidentiality, or integrity of the information. This includes:
- Electronic access to the database system, OR
- Physical access to the database system, OR
- Physical access to recording media containing the information

### Notification Trigger - Critical Distinction
**Notification is required only if:** The breached database contains, in whole or in part, personal information files **not protected by encrypted code but only by a password**.

This means password-only protection does **not** provide a safe harbor; encrypted code is specifically required.

## Notification Requirements & Triggers

### Notification Obligation
Any entity must notify citizens of any breach of the security system when the breached database contains personal information files not protected by encrypted code but only by a password.

### Timing of Notification
**To Affected Individuals:** As expeditiously as possible, taking into consideration:
- The need of law enforcement agencies to secure possible crime scenes and evidence
- The application of measures needed to restore the system's security

### Notification Methods
Notice may be provided by one of the following:
- Written notice
- Authenticated electronic notice (according to 15 U.S.C. § 7001, E-Sign Act)

### Content of Notice to Individuals
The notice must be clear and conspicuous and include:
- A description of the breach in general terms
- A description of the type of sensitive information compromised
- A toll-free number and website for more information

### Attorney General/Department Notification
**Requirement:** Yes, **within a non-extendable term of 10 days** after the breach is detected.

**Notification Recipient:** Department of Consumer Affairs (DACO).

**Critical Public Announcement Requirement:** DACO will make a **public announcement within 24 hours** after receiving the notification.

### Substitute Notice Available
Available if:
- The cost of notifying all affected parties is excessively onerous or exceeds **$100,000**, OR
- The number of affected persons exceeds **100,000**, OR
- The entity does not have sufficient contact information

Substitute notice shall consist of:
- Prominent display of an announcement at the entity's premises
- Prominent display on entity website
- Prominent display in informative materials
- Communication to media informing them of the situation and providing contact information for follow-up

### Third-Party Data Notification
Any entity that resells or provides access to digital databases containing personal information files must notify the proprietor, custodian, or holder of the information of any violation of the system's security that has allowed access to unauthorized persons.

## Exemptions, Penalties, and Other Provisions

### Encryption Safe Harbor
The statute provides a safe harbor for information **protected by encrypted code**. However, password-only protection does **not** qualify for this safe harbor.

The notification requirement applies specifically to information "not protected by encrypted code but only by a password."

### Institutional Security Policy Exemption
Institutions may maintain preexisting institutional security policies that provide protection equal to or better than the statute's requirements.

### Penalties
The Secretary of the Department of Consumer Affairs may impose fines of **$500 to $5,000** for each violation.

**Important:** These fines do not affect the rights of consumers to initiate actions or claims for damages before a competent court.

### Private Right of Action
Explicitly granted by the statute. Consumers have the right to initiate actions for damages. The private right of action exists independently of and is not limited by any administrative penalties.

## Key Provisions

### Law Enforcement Delay Consideration
The timing of notification takes into consideration the legitimate needs of law enforcement agencies to secure possible crime scenes and evidence.

### DACO Public Announcement Requirement
This statute includes a unique requirement that the Department of Consumer Affairs makes a public announcement within 24 hours of receiving breach notification, ensuring rapid public awareness.

### Enforcement
Enforcement is available through both administrative fines and private civil actions.
