---
# ===================================================================
# :: CORE INFORMATION
# ===================================================================
state: "Rhode Island"
state_code: "RI"
jurisdiction_type: "U.S. State"
statute_citation: "R.I. Gen. Laws § 11-49.3-4 et seq."
statute_title: "Rhode Island Identity Theft Protection Act"
statute_url: "http://webserver.rilin.state.ri.us/Statutes/TITLE11/11-49.3/INDEX.HTM"

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
legislation_bill_1_number: "H.B. 5684"
legislation_bill_1_signed_date: "2023-06-27"
legislation_bill_1_effective_date: "2023-06-27"

# ===================================================================
# :: BREACH DEFINITION
# ===================================================================
breach_definition_text: "Unauthorized access or acquisition of unencrypted computerized data that compromises the security, confidentiality, or integrity of personal information maintained by the entity. Includes unauthorized access OR acquisition (both trigger requirement)."
breach_trigger: "unauthorized_access_or_acquisition"
breach_access_alone_triggers: true
breach_acquisition_alone_triggers: true

# ===================================================================
# :: ENCRYPTION SAFE HARBOR
# ===================================================================
exemption_encryption_safe_harbor: true
exemption_encryption_safe_harbor_negated_if_key_compromised: true
exemption_encryption_description: "Data encrypted using 128-bit or higher algorithmic process"

# ===================================================================
# :: RISK OF HARM ANALYSIS
# ===================================================================
risk_of_harm_analysis_is_required: true
risk_of_harm_analysis_can_eliminate_notification: true
risk_of_harm_analysis_standard: "Poses a significant risk of identity theft"
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
individual_notification_timeline_description: "Most expedient time possible but no later than 45 calendar days after confirmation of the breach. For state and municipal entities, notice must be given no later than 30 calendar days."
individual_notification_extensions_available: false
individual_notification_extension_max_days: 0
individual_notification_extension_request_deadline_days: 0
individual_notification_contents:
  - "A general and brief description of the incident, including how the security breach occurred and the number of affected individuals"
  - "The type of information that was subject to the breach"
  - "The date of breach, estimated date of breach, or the date range within which the breach occurred"
  - "The date that the breach was discovered"
  - "A clear and concise description of any remediation services offered to affected individuals including toll free numbers and websites to contact credit reporting agencies, remediation service providers, and the Attorney General"
  - "A clear and concise description of the consumer's ability to file or obtain a police report, how to request a security freeze, and any fees that may be required"
individual_notification_methods:
  - "Written notice"
  - "Electronic notice, if consistent with 15 U.S.C. § 7001 (E-Sign Act)"

# ===================================================================
# :: SUBSTITUTE NOTIFICATION
# ===================================================================
substitute_notification_is_available: true
substitute_notification_cost_trigger: 25000
substitute_notification_affected_count_trigger: 50000
substitute_notification_insufficient_contact_info_trigger: true
substitute_notification_other_triggers: []
substitute_notification_methods:
  - "Email notice if entity has email addresses for subject persons"
  - "Conspicuous posting on entity website, if entity maintains one"
  - "Notification to major statewide media"

# ===================================================================
# :: ATTORNEY GENERAL NOTIFICATION
# ===================================================================
ag_notification_is_required: true
ag_notification_threshold: 500
ag_notification_threshold_description: "If more than 500 RI residents are to be notified"
ag_notification_timeline_days: 45
ag_notification_timeline_description: "Same timing as to consumers (45 days for general entities, 30 days for state/municipal entities)"
ag_notification_recipients: "Attorney General"
ag_notification_contents:
  - "Timing, content, and distribution of the notices"
  - "Approximate number of affected individuals"

# ===================================================================
# :: CONSUMER REPORTING AGENCY NOTIFICATION
# ===================================================================
cra_notification_is_required: true
cra_notification_threshold: 500
cra_notification_threshold_description: "In the event that more than 500 RI residents are to be notified"
cra_notification_timeline_days: 45
cra_notification_timeline_description: "Same timing as to consumers (45 days for general entities, 30 days for state/municipal entities)"
cra_notification_recipients: "Major consumer reporting agencies"
cra_notification_contents:
  - "Timing, content, and distribution of the notices"
  - "Approximate number of affected individuals"

# ===================================================================
# :: VENDOR NOTIFICATION (Third-Party Data Processors)
# ===================================================================
vendor_notification_is_required: true
vendor_notification_timeline_days: 0
vendor_notification_timeline_description: "Following discovery of breach"
owner_liability_for_vendor_failure: "Third-party must comply with notification requirements"
vendor_cooperation_required: false

# ===================================================================
# :: EXEMPTIONS
# ===================================================================
exemption_hipaa: true
exemption_hipaa_description: "HIPAA-covered entities governed by medical privacy and security rules under HIPAA"
exemption_glba: true
exemption_glba_description: "Entities subject to Federal Interagency Guidance on Response Programs for Unauthorized Access to Customer Information and Customer Notice"
exemption_primary_regulator: true
exemption_primary_regulator_description: "Entity maintaining security breach procedure pursuant to rules, regulations, procedures, or guidelines established by primary or functional regulator deemed in compliance if notifies subject persons in accordance with regulator's policies"
exemption_own_notification_policy: true
exemption_own_notification_policy_description: "Entity maintaining own security breach procedures as part of information security policy and otherwise complying with timing requirements deemed in compliance if notifies subject persons in accordance with policies"
exemption_other_description: null

# ===================================================================
# :: ENFORCEMENT
# ===================================================================
enforcement_private_right_of_action: false
enforcement_authority: "Attorney General"
enforcement_authority_is_exclusive: false
enforcement_type_damages_description: "Civil penalties per record: Reckless violation $100 per record; Knowing and willful violation $200 per record"

# ===================================================================
# :: PENALTIES
# ===================================================================
enforcement_penalty_per_day: 0
enforcement_penalty_per_individual: 0
enforcement_penalty_per_record: 100
enforcement_penalty_per_violation: 0
enforcement_penalty_flat_amount: 0
enforcement_penalty_maximum: 0
enforcement_penalty_basis: "Per record basis: $100 for reckless violations; $200 for knowing and willful violations"
enforcement_penalty_notes: "Unique per-record penalty structure: $100 per record for reckless violations, $200 per record for knowing and willful violations"

# ===================================================================
# :: SPECIAL PROVISIONS
# ===================================================================
provision_law_enforcement_delay: true
provision_law_enforcement_delay_description: "Notification may be delayed if federal, state, or local law enforcement agency determines that notification will impede criminal investigation. Law enforcement must notify entity of delay request. Once law enforcement determines notification no longer poses risk, notice shall be provided as soon as practicable. Entity must cooperate with law enforcement investigation."
provision_government_entities_are_subject: true
provision_government_entities_notes: "State/municipal entities have REDUCED timeline (30 days vs. 45 days), must provide credit monitoring services for 5 years (adults 18+) or 2+ years (minors), must notify collective bargaining agents, and must report to RI State Police within 24 hours"
provision_waiver_not_permitted: true
provision_notice_at_collection_required: false
provision_other_description: "Comprehensive reform enacted 2023. Explicit 45-day timeline (30 days for government entities). Both access OR acquisition trigger breach. Very low substitute thresholds: $25,000 cost OR 50,000 affected (among lowest in nation). Risk of harm analysis allowed. Unique per-record civil penalties: $100 reckless, $200 knowing/willful. 128-bit+ encryption required. Government entities must provide 5-year credit monitoring for adults. Government entities must notify State Police within 24 hours. Waiver provisions prohibited. Multiple exemptions: HIPAA, GLBA, federal regulator, own policy."

# ===================================================================
# :: OBSIDIAN TAGS
# ===================================================================
tags:
  - DataBreachLaws/Breach/trigger/access-or-acquisition
  - DataBreachLaws/Exempts/federal-regulator
  - DataBreachLaws/Exempts/glba
  - DataBreachLaws/Exempts/hipaa
  - DataBreachLaws/Exempts/own-policy
  - DataBreachLaws/Notice/AG/required/threshold/500
  - DataBreachLaws/Notice/AG/required/timing/concurrent
  - DataBreachLaws/Notice/CRA/required/threshold/500
  - DataBreachLaws/Notice/Consumer/45days
  - DataBreachLaws/PII/financial-accounts
  - DataBreachLaws/PII/government-id
  - DataBreachLaws/PII/online-account-credentials
  - DataBreachLaws/RiskOfHarm/allowed
---

# Rhode Island Data Breach Notification Law

## Overview
- **Statutory Citation:** `R.I. Gen. Laws § 11-49.3-4 et seq.`
- **Statute Title:** [Rhode Island Identity Theft Protection Act](http://webserver.rilin.state.ri.us/Statutes/TITLE11/11-49.3/INDEX.HTM)
- **Jurisdiction Type:** U.S. State
- **Legislative History:**
  - **Original Legislation:** H.B. 5684 (signed into law June 27, 2023, effective June 27, 2023)
  - **Last Verified:** September 2025

## Application & Covered Entities
A municipal agency, state agency, individual, business or legal entity that stores, owns, collects, processes, maintains, acquires, uses, or licenses data that includes personal information.

## Key Definitions

### Personal Information
An individual's first name or first initial and last name in combination with any one or more of the following data elements, when either the name or the data elements are not encrypted or are in hard copy paper format:
- Social Security number
- Driver's license number, state identification card number, or tribal identification number
- Account number, credit card number, or debit card number in combination with any required security code, access code, password, or personal identification number that would permit access to an individual's financial account
- Medical or health insurance information
- Email address with any required security code, access code, or password that would permit access to an individual's personal, medical, insurance, or financial account

### Encryption Definition
"Encrypted" means the transformation of data through the use of a 128-bit or higher algorithmic process into a form in which there is a low probability of assigning meaning without use of a confidential process or key. Data shall not be considered encrypted if it is acquired in combination with any key, security code, or password that would permit access to the encrypted data.

### Exclusions
Personal information does not include publicly available information that is lawfully made available to the general public from federal, state, or local government records.

### Breach of Security
Unauthorized access or acquisition of unencrypted computerized data that compromises the security, confidentiality, or integrity of personal information maintained by the entity.

### Good-Faith Exception
Good-faith acquisition of personal information by an employee or agent of the entity for the purposes of the entity is not a breach of the security of the system, provided that the personal information is not used or subject to further unauthorized disclosure.

**Note:** The notification obligation applies to a breach of security of the system OR any disclosure of personal information.

## Notification Requirements & Triggers

### Notification Obligation
Any Entity shall provide notification of (i) any disclosure of personal information OR (ii) any breach of the security of the system, that poses a significant risk of identity theft to any resident of Rhode Island whose unencrypted personal information was, or is reasonably believed to have been, acquired by an unauthorized person or entity.

**Additional requirement:** Where affected employees are represented by a labor union through a collective bargaining agreement, a state or municipal agency employer shall also notify the collective bargaining agent of the breach.

### Timing of Notification
The notification shall be made in the most expedient time possible but no later than **45 calendar days** after confirmation of the breach and the ability to ascertain the information required to fulfill the notice requirements and shall be consistent with the legitimate needs of law enforcement.

**For state and municipal entities:** Notice must be given no later than **30 calendar days**.

### Notification Methods
Notice may be provided by one of the following methods:
- Written notice
- Electronic notice, if the notice provided is consistent with 15 U.S.C. § 7001 (E-Sign Act)

### Content of Notice to Individuals
To the extent known, the notification to individuals must include:
- A general and brief description of the incident, including how the security breach occurred and the number of affected individuals
- The type of information that was subject to the breach
- The date of breach, estimated date of breach, or the date range within which the breach occurred
- The date that the breach was discovered
- A clear and concise description of any remediation services offered to affected individuals including toll free numbers and websites to contact credit reporting agencies, remediation service providers, and the Attorney General
- A clear and concise description of the consumer's ability to file or obtain a police report, how the consumer can request a security freeze and the necessary information to be provided when requesting the security freeze, and any fees that may be required

### Attorney General Notification
If more than **500** Rhode Island residents are to be notified, the Entity shall notify the Attorney General as to the timing, content, and distribution of the notices and the approximate number of affected individuals.

**Additional requirement:** State and municipal agencies must also report cybersecurity incidents to the Rhode Island state police within **24 hours**.

### Consumer Reporting Agency Notification
In the event that more than **500** Rhode Island residents are to be notified, the Entity shall notify the major credit reporting agencies as to the timing, content, and distribution of the notices and the approximate number of affected individuals.

### Substitute Notice Available
If the Entity demonstrates that:
- The cost of providing notice would exceed **$25,000**, OR
- The affected class of subject persons to be notified exceeds **50,000**, OR
- The Entity does not have sufficient contact information

Substitute notice shall consist of all of the following:
- Email notice when the Entity has email addresses for the subject persons
- Conspicuous posting of the notice on the Entity's website if the Entity maintains one
- Notification to major statewide media

### Third-Party Data Notification
Any business that maintains computerized data including personal information that the business does not own or license shall notify the owner or licensee of the personal information of any security breach following discovery of the breach.

### Credit Monitoring Services
State and municipal Entities must provide remediation services for **five years** for adults 18 years and older, and not less than **two years** for those under 18.

## Exemptions, Penalties, and Other Provisions

### Encryption Safe Harbor
The law provides a safe harbor for encrypted data (128-bit or higher algorithmic process).

### Own Notification Policy Exemption
Any Entity that maintains its own security breach procedures as part of an information security policy for the treatment of personal information and otherwise complies with the timing requirements of the statute shall be deemed to be in compliance with the security breach notification requirements, provided such Entity notifies subject persons in accordance with such Entity's policies in the event of a breach of security.

### Compliance with Primary Regulator Exemption
Any Entity that maintains a security breach procedure pursuant to the rules, regulations, procedures, or guidelines established by the primary or functional regulator shall be deemed to be in compliance with the security breach notification requirements, provided such Entity notifies subject persons in accordance with the policies or the rules, regulations, procedures, or guidelines established by the primary or functional regulator in the event of a breach of security.

### Federal Interagency Guidance Exemption
A financial institution, trust company, credit union, or its affiliates that is subject to and examined for and found in compliance with the Federal Interagency Guidelines on Response Programs for Unauthorized Access to Customer Information and Customer Notice shall be deemed in compliance.

### HIPAA-Covered Entities Exemption
A provider of health care, health care service plan, health insurer, or a covered entity governed by the medical privacy and security rules issued by the federal Department of Health and Human Services pursuant to HIPAA shall be deemed in compliance.

### Penalties
Each reckless violation is a civil violation for which a penalty of not more than **$100 per record** may be adjudged. Each knowing and willful violation is a civil violation for which a penalty of not more than **$200 per record** may be adjudged. The Attorney General may bring an action in the name of the state against any business or person in violation.

### Private Right of Action
The statute does not provide for a private right of action.

### Waiver Not Permitted
Waiver of compliance is not permitted.

## Key Provisions

### Delay for Law Enforcement
The notification required may be delayed if a federal, state, or local law enforcement agency determines that the notification will impede a criminal investigation. The law enforcement agency must notify the Entity of the request to delay notification without unreasonable delay. If notice is delayed due to such determination, then as soon as the law enforcement agency determines and informs the Entity that notification no longer poses a risk of impeding an investigation, notice shall be provided as soon as practicable. The Entity shall cooperate with law enforcement in its investigation of any breach, which shall include the sharing of information relevant to the incident; provided, however, that such disclosure shall not require the disclosure of confidential business information or trade secrets.
