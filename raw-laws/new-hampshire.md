---
state: "New Hampshire"
state_code: "NH"
jurisdiction_type: "U.S. State"
statute_citation: "N.H. Rev. Stat. § 359-C:19 et seq."
statute_title: "New Hampshire Security Breach Notification"
statute_url: "http://www.gencourt.state.nh.us/rsa/html/XXXI/359-C/359-C-20.htm"

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
legislation_bill_1_number: "H.B. 1660"
legislation_bill_1_signed_date: "2006-06-02"
legislation_bill_1_effective_date: "2007-01-01"

# ===================================================================
# :: BREACH DEFINITION
# ===================================================================
breach_definition_text: "An unauthorized acquisition of computerized data that compromises the security or confidentiality of personal information maintained by an entity doing business in New Hampshire."
breach_trigger: "unauthorized_acquisition"
breach_access_alone_triggers: false
breach_acquisition_alone_triggers: true

# ===================================================================
# :: ENCRYPTION SAFE HARBOR
# ===================================================================
exemption_encryption_safe_harbor: true
exemption_encryption_safe_harbor_negated_if_key_compromised: true
exemption_encryption_description: "Data that is encrypted; data not considered encrypted if key/code/password was also acquired"

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
individual_notification_timeline_description: "Without unreasonable delay; as soon as possible"
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
  - "Electronic notice, if primary means of communication"

# ===================================================================
# :: SUBSTITUTE NOTIFICATION
# ===================================================================
substitute_notification_is_available: true
substitute_notification_cost_trigger: 5000
substitute_notification_affected_count_trigger: 1000
substitute_notification_insufficient_contact_info_trigger: true
substitute_notification_other_triggers: []
substitute_notification_methods:
  - "Email notice when entity has email addresses for affected individuals"
  - "Conspicuous posting on entity website, if entity maintains one"
  - "Notification to major statewide media"

# ===================================================================
# :: ATTORNEY GENERAL NOTIFICATION
# ===================================================================
ag_notification_is_required: true
ag_notification_threshold: 1
ag_notification_threshold_description: "Required for all entities (threshold of 1 affected New Hampshire resident); regulated entities notify primary regulator instead of Attorney General"
ag_notification_timeline_days: 0
ag_notification_timeline_description: "Prior to or simultaneously with notification to individuals"
ag_notification_recipients: "Attorney General (or primary regulator for banking/securities/insurance entities)"
ag_notification_contents:
  - "Anticipated date of notice to individuals"
  - "Approximate number of New Hampshire residents to be notified"

# ===================================================================
# :: CONSUMER REPORTING AGENCY NOTIFICATION
# ===================================================================
cra_notification_is_required: true
cra_notification_threshold: 1000
cra_notification_threshold_description: "If entity required to notify more than 1,000 consumers"
cra_notification_timeline_days: 0
cra_notification_timeline_description: "Without unreasonable delay, all nationwide consumer reporting agencies"
cra_notification_recipients: "All nationwide consumer reporting agencies"
cra_notification_contents:
  - "Timing of the notice"
  - "Distribution of the notice"
  - "Content of the notice"

# ===================================================================
# :: VENDOR NOTIFICATION (Third-Party Data Processors)
# ===================================================================
vendor_notification_is_required: true
vendor_notification_timeline_days: 0
vendor_notification_timeline_description: "Immediately following discovery"
owner_liability_for_vendor_failure: "Third-party must notify owner/licensee immediately following discovery"
vendor_cooperation_required: false

# ===================================================================
# :: EXEMPTIONS
# ===================================================================
exemption_hipaa: false
exemption_hipaa_description: null
exemption_glba: true
exemption_glba_description: "Entities subject to Title V of Gramm-Leach-Bliley Act exempt from CRA notification"
exemption_primary_regulator: true
exemption_primary_regulator_description: "Entity subject to banking/securities/insurance regulation complying with regulator procedures; such entities notify primary regulator instead of Attorney General"
exemption_own_notification_policy: true
exemption_own_notification_policy_description: "Entity with own notification procedures maintained in information security policy"
exemption_other_description: null

# ===================================================================
# :: ENFORCEMENT
# ===================================================================
enforcement_private_right_of_action: true
enforcement_authority: "Attorney General and private individuals"
enforcement_authority_is_exclusive: false
enforcement_type_damages_description: "Actual damages; 2-3x actual damages if willful or knowing; costs and attorney's fees available"

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
enforcement_penalty_notes: "Private right of action for actual damages; treble damages (2-3x) if willful or knowing violation; costs and attorney's fees available"

# ===================================================================
# :: SPECIAL PROVISIONS
# ===================================================================
provision_law_enforcement_delay: true
provision_law_enforcement_delay_description: "Notification may be delayed if law enforcement or national/homeland security agency determines notification will impede criminal investigation or jeopardize national or homeland security"
provision_government_entities_are_subject: true
provision_government_entities_notes: null
provision_waiver_not_permitted: true
provision_notice_at_collection_required: false
provision_other_description: "Exceptionally low substitute notification cost trigger: $5,000 (tied with Maine and Mississippi for lowest in nation). Private right of action with treble damages (2-3x) for willful/knowing violations. Regulated entities (banking/securities/insurance) notify primary regulator instead of Attorney General. AG notification must be prior to or simultaneous with consumer notification. Waiver provisions prohibited."

# ===================================================================
# :: OBSIDIAN TAGS
# ===================================================================
tags:
  - DataBreachLaws/Breach/trigger/acquisition
  - DataBreachLaws/Enforcement/private-right-of-action
  - DataBreachLaws/Enforcement/treble-damages
  - DataBreachLaws/Exempts/federal-regulator
  - DataBreachLaws/Exempts/glba
  - DataBreachLaws/Exempts/own-policy
  - DataBreachLaws/Notice/AG/required/threshold/1
  - DataBreachLaws/Notice/AG/required/timing/concurrent
  - DataBreachLaws/Notice/AG/Shame-Site
  - DataBreachLaws/Notice/CRA/required/threshold/1000
  - DataBreachLaws/Notice/Consumer/asap
  - DataBreachLaws/PII/financial-accounts
  - DataBreachLaws/PII/government-id
  - DataBreachLaws/RiskOfHarm/not-allowed
---

# New Hampshire Data Breach Notification Law

## Overview
- **Statutory Citation:** `N.H. Rev. Stat. § 359-C:19 et seq.`
- **Statute Title:** [New Hampshire Security Breach Notification](http://www.gencourt.state.nh.us/rsa/html/XXXI/359-C/359-C-20.htm)
- **Jurisdiction Type:** U.S. State
- **Legislative History:**
  - **Original Legislation:** H.B. 1660 (signed June 2, 2006, effective January 1, 2007)
  - **Last Verified:** September 2025

## Application & Covered Entities
Any individual, or any form of entity or government agency (collectively, Entity) doing business in New Hampshire that owns or licenses computerized data that includes personal information.

## Key Definitions

### Personal Information
An individual's first name or first initial and last name linked to any one or more of the following data elements, when either the name or the data elements are not encrypted:
- Social Security number
- Driver's license number or other government identification number
- Account number, credit card number, or debit card number in combination with any required security code, access code, or password that would permit access to an individual's financial account

### Encryption Note
Data shall not be considered to be encrypted if it is acquired in combination with any required key, security code, access code, or password that would permit access to the encrypted data.

### Exclusions
Personal information shall not include information that is lawfully made available to the general public from federal, state, or local government records.

### Breach of Security
An unauthorized acquisition of computerized data that compromises the security or confidentiality of personal information maintained by an Entity doing business in New Hampshire.

### Good-Faith Exception
Good-faith acquisition of personal information by an employee or agent of an Entity for the purposes of the Entity's business shall not be considered a security breach, provided that the personal information is not used or subject to further unauthorized disclosure.

## Notification Requirements & Triggers

### Notification Obligation
Any Entity to which the statute applies, when it determines that misuse of personal information has occurred or is reasonably likely to occur, or if a determination cannot be made, shall notify the affected individuals.

**Exception:** Notification is not required if it is determined that misuse of the personal information has not occurred and is not reasonably likely to occur.

### Timing of Notification
The Entity shall notify the affected individuals as soon as possible and without unreasonable delay.

### Notification Methods
Notice shall be provided by one of the following methods:
- Written notice
- Telephonic notice, provided that a log of each such notification is kept
- Electronic notice, if the Entity's primary means of communication with affected individuals is by electronic means
- Notice pursuant to the Entity's internal notification procedures maintained as part of an information security policy for the treatment of personal information

### Content of Notice to Individuals
Notice shall include at a minimum:
- A description of the incident in general terms
- The approximate date of the breach
- The type of personal information obtained as a result of the security breach
- The telephonic contact information of the Entity

### Attorney General/Regulator Notification
An Entity engaged in trade or commerce that is subject to N.H. Rev. Stat. § 358-A:3(I) (trade or commerce that is subject to the jurisdiction of the Bank Commissioner, the Director of Securities Regulation, the Insurance Commissioner, the Public Utilities Commission, the financial institutions and insurance regulators of other states, or federal banking or securities regulators) shall notify the regulator that has primary regulatory authority. All other Entities shall notify the state Attorney General prior to or simultaneously with notification to individuals.

The notice shall include:
- The anticipated date of the notice to the individuals
- The approximate number of individuals in New Hampshire who will be notified

### Consumer Reporting Agency Notification
If an Entity is required to notify more than **1,000** consumers, the Entity shall also notify, without unreasonable delay, all nationwide consumer reporting agencies of the timing, distribution, and content of the notice. This obligation does not apply to entities subject to Title V of the Gramm-Leach-Bliley Act.

### Substitute Notice Available
If the Entity demonstrates that:
- The cost of providing notice would exceed **$5,000**, OR
- The affected class of subject individuals to be notified exceeds **1,000**, OR
- The Entity does not have sufficient contact information or consent

Substitute notice shall consist of all of the following:
- Email notice when the Entity has email addresses for the affected individuals
- Conspicuous posting of the notice on the Entity's website, if the Entity maintains one
- Notification to major statewide media

### Third-Party Data Notification
If an Entity maintains computerized data that includes personal information that the Entity does not own, the Entity shall notify and cooperate with the owner or licensee of the personal information of any breach of the security of the data immediately following discovery if the personal information was acquired by an unauthorized person. Cooperation includes sharing information relevant to the breach, except that such cooperation shall not require disclosure of confidential or business information or trade secrets.

## Exemptions, Penalties, and Other Provisions

### Encryption Safe Harbor
The law provides a safe harbor for encrypted data. Data shall not be considered encrypted if the key, security code, access code, or password was also acquired.

### Primary Regulator Exemption
An Entity engaged in trade or commerce that maintains procedures for security breach notification pursuant to laws, rules, regulations, guidance, or guidelines issued by a state or federal regulator shall be deemed to be in compliance with this subdivision if it acts in accordance with such laws, rules, regulations, guidance or guidelines.

### Own Notification Policy Exemption
An entity maintaining its own notification procedures as part of an information security policy for the treatment of personal information shall be deemed in compliance if it notifies affected individuals according to its policies.

### Financial Institution Exemption
Entities subject to Title V of the Gramm-Leach-Bliley Act are exempt from CRA notification requirements.

### Private Right of Action
Any person injured by any violation may bring a civil action. If the court finds for the plaintiff, recovery shall be in the amount of actual damages. If the court finds that the act or practice was willful or knowing, it shall award as much as three times but not less than two times, such amount. In addition, a prevailing plaintiff shall be awarded the costs of the suit and attorney's fees, as determined by the court. Injunctive relief shall be available to private individuals without bond, subject to the discretion of the court.

## Key Provisions

### Delay for Law Enforcement
The notification may be delayed if a law enforcement agency or national or homeland security agency determines that the notification will impede a criminal investigation or jeopardize national or homeland security.

### Attorney General Enforcement
The Attorney General has enforcement authority over this statute.

### Waiver Not Permitted
Individuals cannot waive their rights under this statute.
