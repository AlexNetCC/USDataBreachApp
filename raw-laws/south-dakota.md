---
# ===================================================================
# :: CORE INFORMATION
# ===================================================================
state: "South Dakota"
state_code: "SD"
jurisdiction_type: "U.S. State"
statute_citation: "S.D. CODE 22-40-20 et seq."
statute_title: "South Dakota Personal Information Security Breach Notice"
statute_url: "https://sdlegislature.gov/Statutes/Codified_Laws/2047702"

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
legislation_bill_1_number: "S.B. 62"
legislation_bill_1_signed_date: "2018-03-21"
legislation_bill_1_effective_date: "2018-07-01"

# ===================================================================
# :: BREACH DEFINITION
# ===================================================================
breach_definition_text: "Unauthorized acquisition of unencrypted computerized data or encrypted computerized data and the encryption key by any person that materially compromises the security, confidentiality, or integrity of personal or protected information."
breach_trigger: "unauthorized_acquisition"
breach_access_alone_triggers: false
breach_acquisition_alone_triggers: true

# ===================================================================
# :: ENCRYPTION SAFE HARBOR
# ===================================================================
exemption_encryption_safe_harbor: true
exemption_encryption_safe_harbor_negated_if_key_compromised: true
exemption_encryption_description: "Encrypted data (unless encryption key also compromised)"

# ===================================================================
# :: RISK OF HARM ANALYSIS
# ===================================================================
risk_of_harm_analysis_is_required: false
risk_of_harm_analysis_can_eliminate_notification: true
risk_of_harm_analysis_standard: "Will not likely result in harm to affected individuals"
risk_of_harm_analysis_documentation_required: true
risk_of_harm_analysis_documentation_retention_years: 3
risk_of_harm_analysis_ag_notification_required: true
risk_of_harm_analysis_ag_notification_threshold: 0
risk_of_harm_analysis_ag_notification_timeline_days: 0

# ===================================================================
# :: INDIVIDUAL NOTIFICATION
# ===================================================================
individual_notification_is_required: true
individual_notification_timeline_days: 60
individual_notification_timeline_description: "No later than 60 days from discovery of breach"
individual_notification_extensions_available: false
individual_notification_extension_max_days: 0
individual_notification_extension_request_deadline_days: 0
individual_notification_contents:
  - "Date or estimated date of breach"
  - "Description of information involved"
  - "Contact information for the entity"
individual_notification_methods:
  - "Written notice"
  - "Electronic notice (if E-Sign compliant or primary method of communication)"

# ===================================================================
# :: SUBSTITUTE NOTIFICATION
# ===================================================================
substitute_notification_is_available: true
substitute_notification_cost_trigger: 250000
substitute_notification_affected_count_trigger: 500000
substitute_notification_insufficient_contact_info_trigger: true
substitute_notification_other_triggers: []
substitute_notification_methods:
  - "Email notice if entity has affected individual's email address"
  - "Conspicuous posting on entity website, if entity maintains one"
  - "Notification to statewide media"

# ===================================================================
# :: ATTORNEY GENERAL NOTIFICATION
# ===================================================================
ag_notification_is_required: true
ag_notification_threshold: 250
ag_notification_threshold_description: "If number of affected individuals exceeds 250 residents; also required for risk of harm determination"
ag_notification_timeline_days: 60
ag_notification_timeline_description: "Same timing as individuals (60 days); notification also required for ROH determination"
ag_notification_recipients: "Attorney General"
ag_notification_contents:
  - "Notice of breach for Attorney General ROH determination"

# ===================================================================
# :: CONSUMER REPORTING AGENCY NOTIFICATION
# ===================================================================
cra_notification_is_required: true
cra_notification_threshold: 1
cra_notification_threshold_description: "All nationwide CRAs must be notified (no minimum threshold specified)"
cra_notification_timeline_days: 0
cra_notification_timeline_description: "Without unreasonable delay"
cra_notification_recipients: "All nationwide consumer reporting agencies"
cra_notification_contents:
  - "Timing, distribution, and content of notices"

# ===================================================================
# :: VENDOR NOTIFICATION (Third-Party Data Processors)
# ===================================================================
vendor_notification_is_required: true
vendor_notification_timeline_days: 10
vendor_notification_timeline_description: "As soon as practicable, not later than 10 days"
owner_liability_for_vendor_failure: "Third-party must notify owner/licensee within 10 days"
vendor_cooperation_required: false

# ===================================================================
# :: EXEMPTIONS
# ===================================================================
exemption_hipaa: true
exemption_hipaa_description: "Entities subject to federal laws including HIPAA"
exemption_glba: true
exemption_glba_description: "Entities subject to federal laws including GLBA"
exemption_primary_regulator: false
exemption_primary_regulator_description: null
exemption_own_notification_policy: true
exemption_own_notification_policy_description: "Entity with own notification procedure consistent with timing requirements"
exemption_other_description: null

# ===================================================================
# :: ENFORCEMENT
# ===================================================================
enforcement_private_right_of_action: false
enforcement_authority: "Attorney General"
enforcement_authority_is_exclusive: false
enforcement_type_damages_description: "Attorney General can bring action for civil penalties"

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
enforcement_penalty_notes: "Attorney General authorized to bring civil penalty actions; specific penalty amounts not enumerated in statute"

# ===================================================================
# :: SPECIAL PROVISIONS
# ===================================================================
provision_law_enforcement_delay: true
provision_law_enforcement_delay_description: "Notice may be delayed if law enforcement agency determines notification will impede criminal investigation. Information Holder must provide notice within 30 DAYS after law enforcement determines notice will no longer impede investigation (explicit maximum delay period)."
provision_government_entities_are_subject: true
provision_government_entities_notes: null
provision_waiver_not_permitted: false
provision_notice_at_collection_required: false
provision_other_description: "Explicit 60-day deadline from discovery. Acquisition-only trigger (not access). Risk of harm analysis allowed but REQUIRES Attorney General notification and 3-year written documentation retention. Vendor notification within explicit 10 days. Law enforcement delay has EXPLICIT 30-DAY MAXIMUM after LE clears notification. CRA notification required for ALL breaches (no minimum threshold). AG threshold of 250. High substitute thresholds: $250,000 OR 500,000 affected. Both HIPAA and GLBA exemptions."

# ===================================================================
# :: OBSIDIAN TAGS
# ===================================================================
tags:
  - DataBreachLaws/Breach/trigger/acquisition
  - DataBreachLaws/Exempts/glba
  - DataBreachLaws/Exempts/hipaa
  - DataBreachLaws/Exempts/own-policy
  - DataBreachLaws/Notice/AG/required/threshold/250
  - DataBreachLaws/Notice/AG/required/timing/concurrent
  - DataBreachLaws/Notice/CRA/required/no-threshold
  - DataBreachLaws/Notice/Consumer/60days
  - DataBreachLaws/Notice/Vendor/10-days
  - DataBreachLaws/PII/financial-accounts
  - DataBreachLaws/PII/government-id
  - DataBreachLaws/PII/health-info
  - DataBreachLaws/PII/online-account-credentials
  - DataBreachLaws/RiskOfHarm/allowed/documentation-req
---

# South Dakota Data Breach Notification Law

## Overview
- **Statutory Citation:** `S.D. CODE 22-40-20 et seq.`
- **Statute Title:** [South Dakota Personal Information Security Breach Notice](https://sdlegislature.gov/Statutes/Codified_Laws/2047702)
- **Jurisdiction Type:** U.S. State
- **Legislative History:**
  - **Original Legislation:** S.B. 62 (signed March 21, 2018, effective July 1, 2018)
  - **Last Verified:** September 2025

## Application & Covered Entities
Any person or business that conducts business in South Dakota, and that owns or licenses computerized personal or protected information of residents of South Dakota.

## Key Definitions

### Personal Information
A person's first name or first initial and last name, in combination with any one or more of the following data elements:
- Social Security number
- Driver's license number or any other unique identification number created or collected by a government body
- Account number, credit card number, or debit card number in combination with any required security code, access code, password, routing number, PIN, or any additional information that is necessary to access the financial account
- Health information as defined in 45 CFR 160.103 (HIPAA)
- An identification number assigned to a person by the person's employer in combination with any required security code, access code, password, or biometric data generated from measurements or analysis of human body characteristics for authentication purposes

### Protected Information
Protected information includes:
- A username or email address, in combination with a password, security question answer, or other information that permits access to an online account
- Account number or credit and debit card number, in combination with any required security code, access code, or password that permits access to a person's financial account

### Exclusions
The term does not include information that is lawfully made available to the general public from federal, state, or local government records or information that has been redacted, or otherwise made unusable.

### Breach of Security
The unauthorized acquisition of unencrypted computerized data or encrypted computerized data and the encryption key by any person that materially compromises the security, confidentiality, or integrity of personal or protected information.

### Good-Faith Exception
Good-faith acquisition of personal or protected information by an employee or agent of an Information Holder is not a security breach, provided that the information is not used for a purpose unrelated to the business or subject to further unauthorized use.

## Notification Requirements & Triggers

### Notification Obligation
Any Entity that discovers or is notified of a breach of system security must notify affected individuals.

**Exception:** Notice is not required if, following appropriate investigation and notification to the Attorney General, the Entity reasonably believes the incident will not result in harm to affected individuals. The Information Holder shall document this determination in writing and keep record of this documentation for **3 years**.

### Timing of Notification
Notice must be given no later than **60 days** from when the Entity discovers or is notified of a breach.

### Notification Methods
Notice may be provided by one of the following methods:
- Written notice
- Electronic notice, if the electronic notice is consistent with the requirements for electronic records and signatures set forth in 15 U.S.C. § 7001 (E-Sign Act), or if the information holder's primary method of communication with the South Dakota resident has been by electronic means

### Content of Notice to Individuals
- Date or estimated date of breach
- Description of information involved
- Contact information for the entity

### Attorney General Notification
If the number of affected individuals exceeds **250** residents, the Entity must notify the Attorney General.

### Consumer Reporting Agency Notification
The Entity must notify, without unreasonable delay, all nationwide consumer reporting agencies of the breach.

### Substitute Notice Available
Substitute notice is acceptable if:
- Notification will exceed **$250,000**, OR
- The affected class of persons to be notified exceeds **500,000** persons, OR
- The Entity does not have sufficient contact information

Substitute notice consists of each of the following:
- Email notice, if the Entity has the affected individual's email address
- Conspicuous posting of the notice on the website of the Entity, if it has a website
- Notification to statewide media

### Third-Party Data Notification
An Entity that maintains or otherwise possesses personal information on behalf of another person shall notify the other person of any breach of security as soon as practicable, but not later than **10 days** after discovering the breach of security or having a reason to believe that the breach of security occurred.

## Exemptions, Penalties, and Other Provisions

### Encryption Safe Harbor
The law provides a safe harbor for encrypted data (when encryption key is not compromised).

### Own Notification Policy Exemption
An Entity that maintains its own notification procedure as part of its information security policy, and the policy is consistent with the timing requirements of the Act, is considered in compliance with the notification requirements if it notifies affected persons in accordance with its internal policy.

### Federal Law Exemption
An Entity subject to or regulated by federal laws, rules, regulations, procedures, or guidance (including the Gramm-Leach-Bliley Act and HIPAA) is considered in compliance with the Act as long as the Entity maintains procedures pursuant to the federal law requirements and provides notice to consumers pursuant to those requirements.

## Key Provisions

### Delay for Law Enforcement
Notice may be delayed if a law enforcement agency determines that the notice will impede a criminal investigation. The Information Holder must provide notice within **30 days** after the law enforcement agency determines notice will no longer impede a criminal investigation.

### Attorney General Enforcement
The Attorney General can bring an action for civil penalties under the Act.
