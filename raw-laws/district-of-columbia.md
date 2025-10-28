---
# ===================================================================
# :: CORE INFORMATION
# ===================================================================
state: "District of Columbia"
state_code: "DC"
jurisdiction_type: "U.S. Territory"
statute_citation: "D.C. Code § 28-3851 et seq."
statute_title: "District of Columbia Security Breach Notification Law"
statute_url: "https://code.dccouncil.us/dc/council/code/sections/28-3851.html"

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
legislation_bill_1_number: "Council Bill 16-810"
legislation_bill_1_signed_date: "2007-03-08"
legislation_bill_1_effective_date: "2007-07-01"
legislation_bill_2_number: "Council Bill 23-0215"
legislation_bill_2_signed_date: "2020-03-26"
legislation_bill_2_effective_date: "2020-06-17"

# ===================================================================
# :: BREACH DEFINITION
# ===================================================================
breach_definition_text: "Unauthorized acquisition of computerized or other electronic data, or any equipment or device storing such data that compromises the security, confidentiality, or integrity of personal information maintained by the entity."
breach_trigger: "unauthorized_acquisition"
breach_access_alone_triggers: false
breach_acquisition_alone_triggers: true

# ===================================================================
# :: ENCRYPTION SAFE HARBOR
# ===================================================================
exemption_encryption_safe_harbor: true
exemption_encryption_safe_harbor_negated_if_key_compromised: true
exemption_encryption_description: "Data that is encrypted or otherwise rendered secure, so as to be unusable by unauthorized third party"

# ===================================================================
# :: RISK OF HARM ANALYSIS
# ===================================================================
risk_of_harm_analysis_is_required: true
risk_of_harm_analysis_can_eliminate_notification: true
risk_of_harm_analysis_standard: "Notification may be avoided if acquisition determined unlikely to result in harm after reasonable investigation and consultation with AG and federal law enforcement"
risk_of_harm_analysis_documentation_required: false
risk_of_harm_analysis_documentation_retention_years: 0


# ===================================================================
# :: INDIVIDUAL NOTIFICATION
# ===================================================================
individual_notification_is_required: true
individual_notification_timeline_days: 0
individual_notification_timeline_description: "Without unreasonable delay in most expedient time possible, consistent with measures necessary to determine scope of breach and restore reasonable integrity of data system"
individual_notification_extensions_available: false
individual_notification_extension_max_days: 0
individual_notification_extension_request_deadline_days: 0
individual_notification_contents:
  - "Categories of information accessed"
  - "Contact information for entity making notification"
  - "Contact information for consumer reporting agencies, the FTC, and Office of the Attorney General"
individual_notification_methods:
  - "Written notice"
  - "Electronic notice (if customer consented to electronic notice consistent with E-Sign Act)"

# ===================================================================
# :: SUBSTITUTE NOTIFICATION
# ===================================================================
substitute_notification_is_available: true
substitute_notification_cost_trigger: 50000
substitute_notification_affected_count_trigger: 100000
substitute_notification_insufficient_contact_info_trigger: true
substitute_notification_other_triggers: []
substitute_notification_methods:
  - "Email notice when entity has email addresses for subject persons"
  - "Conspicuous posting on entity website if entity maintains one"
  - "Notice to major local and, if applicable, national media"

# ===================================================================
# :: ATTORNEY GENERAL NOTIFICATION
# ===================================================================
ag_notification_is_required: true
ag_notification_threshold: 50
ag_notification_threshold_description: "If 50 or more District of Columbia residents affected"
ag_notification_timeline_days: 0
ag_notification_timeline_description: "As expeditiously as possible and without unreasonable delay, no later than when individual notice is sent"
ag_notification_recipients: null
ag_notification_contents:
  - "Name and contact information of the person or entity reporting the breach"
  - "Name and contact information of the person or entity that experienced the breach"
  - "The nature of the breach of the security of the system"
  - "Types of personal information compromised by the breach"
  - "Number of District residents affected by the breach"
  - "Cause of the breach and relationship to person responsible (if known)"
  - "Remedial action taken and steps to assist District residents"
  - "Date and time frame of the breach (if known)"
  - "Address and location of corporate headquarters (if outside District)"
  - "Any knowledge of foreign country involvement"
  - "Sample of the notice to be provided to District residents"

# ===================================================================
# :: CONSUMER REPORTING AGENCY NOTIFICATION
# ===================================================================
cra_notification_is_required: true
cra_notification_threshold: 1000
cra_notification_threshold_description: "If entity required to notify more than 1,000 persons at one time (requirement does not apply to entity required to notify CRAs pursuant to Title V of Gramm-Leach-Bliley Act)"
cra_notification_timeline_days: 0
cra_notification_timeline_description: "Without unreasonable delay"
cra_notification_recipients: null
cra_notification_contents:
  - "Timing, distribution, and content of notices"

# ===================================================================
# :: VENDOR NOTIFICATION (Third-Party Data Processors)
# ===================================================================
vendor_notification_is_required: true
vendor_notification_timeline_days: 0
vendor_notification_timeline_description: "In most expedient time possible following discovery"
owner_liability_for_vendor_failure: "Third-party must notify owner/licensee in most expedient time possible following discovery"
vendor_cooperation_required: false

# ===================================================================
# :: EXEMPTIONS
# ===================================================================
exemption_hipaa: true
exemption_hipaa_description: "Entities complying with HIPAA/HITECH notification procedures"
exemption_glba: true
exemption_glba_description: "Entities complying with Title V of Gramm-Leach-Bliley Act"
exemption_primary_regulator: false
exemption_primary_regulator_description: null
exemption_own_notification_policy: false
exemption_own_notification_policy_description: null
exemption_other_description: "Risk of harm exemption: Acquisition determined unlikely to result in harm after reasonable investigation and consultation with AG and federal law enforcement"

# ===================================================================
# :: ENFORCEMENT
# ===================================================================
enforcement_private_right_of_action: true
enforcement_authority: "Attorney General and private individuals"
enforcement_authority_is_exclusive: false
enforcement_type_damages_description: "Attorney General may seek direct damages and injunctive relief. Private right of action for actual damages, costs of action, and reasonable attorney fees. Actual damages do not include dignitary damages or pain and suffering."

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
enforcement_penalty_notes: "Specific penalty amounts not defined in data breach statute; private right of action allows recovery of actual damages (excluding dignitary damages or pain and suffering), costs, and reasonable attorney fees"

# ===================================================================
# :: SPECIAL PROVISIONS
# ===================================================================
provision_law_enforcement_delay: true
provision_law_enforcement_delay_description: "Notice may be delayed if law enforcement agency determines notification will impede criminal investigation. Notice shall be made without unreasonable delay and as soon as possible after law enforcement determines notification will no longer impede investigation."
provision_government_entities_are_subject: true
provision_government_entities_notes: null
provision_waiver_not_permitted: true
provision_notice_at_collection_required: false
provision_other_description: "Credit monitoring required (18 months at no cost) if breach reasonably believed to include Social Security number or taxpayer identification number. Good faith exception: Acquisition by employee/agent for entity purposes not a breach if information not used improperly or subject to further unauthorized disclosure."

# ===================================================================
# :: OBSIDIAN TAGS
# ===================================================================
tags:
  - DataBreachLaws/Breach/trigger/acquisition
  - DataBreachLaws/Exempts/glba
  - DataBreachLaws/Exempts/hipaa
  - DataBreachLaws/Notice/AG/required/threshold/50
  - DataBreachLaws/Notice/AG/required/timing/concurrent
  - DataBreachLaws/Notice/CRA/required/threshold/1000
  - DataBreachLaws/Notice/Consumer/asap
  - DataBreachLaws/PII/biometric
  - DataBreachLaws/PII/financial-accounts
  - DataBreachLaws/PII/genetic
  - DataBreachLaws/PII/government-id
  - DataBreachLaws/PII/health-info
  - DataBreachLaws/PII/online-account-credentials
  - DataBreachLaws/PII/taxpayer-id
  - DataBreachLaws/RiskOfHarm/allowed/ag-consult-req
  - DataBreachLaws/special-provision/credit-monitoring-required
---

# District of Columbia Data Breach Notification Law

## Overview
- **Statutory Citation:** `D.C. Code § 28-3851 et seq.`
- **Statute Title:** [District of Columbia Security Breach Notification Law](https://code.dccouncil.us/dc/council/code/sections/28-3851.html)
- **Jurisdiction Type:** U.S. Territory
- **Legislative History:**
  - **Original Legislation:** Council Bill 16-810 (signed March 8, 2007, effective July 1, 2007)
  - **Major Amendments:**
    - Council Bill 23-0215 (signed March 26, 2020, effective June 17, 2020)
  - **Last Verified:** September 2025

## Application & Covered Entities
Applies to any person or entity that conducts business in the District of Columbia and that, in the course of such business, owns or licenses computerized or other electronic data that includes personal information. Includes both private and governmental entities.

## Key Definitions

### Personal Information (Category i)
An individual's first name, first initial and last name, or any other personal identifier, which, in combination with any of the following data elements, can be used to identify a person or the person's information:
- Social security number, Individual Taxpayer Identification Number, passport number, driver's license number, District of Columbia identification card number, military identification number, or other unique identification number issued on a government document commonly used to verify the identity of a specific individual
- Account number, credit card number or debit card number, or any other number or code or combination of numbers or codes, such as an identification number, security code, access code, or password, that allows access to or use of an individual's financial or credit account
- Medical information
- Genetic information and deoxyribonucleic acid profile
- Health insurance information, including a policy number, subscriber information number, or any unique identifier used by a health insurer to identify the person that permits access to an individual's health and billing information
- Biometric data of an individual generated by automatic measurements of an individual's biological characteristics, such as a fingerprint, voice print, genetic print, retina or iris image, or other unique biological characteristic, that is used to uniquely authenticate the individual's identity when the individual accesses a system or account
- Any combination of data elements included in the above bullet points that would enable a person to commit identity theft without reference to a person's first name or first initial and last name or other independent personal identifier

### Personal Information (Category ii)
Username or email address in combination with a password, security question and answer, or other means of authentication, or any combination of data elements that permits access to an individual's email account.

### Exclusions
Personal information shall not include information that is lawfully made available to the general public from federal, state, or local government records.

### Breach of Security
Unauthorized acquisition of computerized or other electronic data, or any equipment or device storing such data that compromises the security, confidentiality, or integrity of personal information maintained by the entity.

### Exceptions to Breach
- Acquisition of data that has been rendered secure, so as to be unusable by an unauthorized third party, shall not be deemed to be a breach of the security of the system
- Good-faith acquisition of personal information by an employee or agent of the entity for the purposes of the entity is not a breach if the personal information is not used improperly or subject to further unauthorized disclosure
- Acquisition of personal information of an individual that the entity reasonably determines, after a reasonable investigation and consultation with the Office of the Attorney General and federal law enforcement agencies, will likely not result in harm to the individual, is not a breach

## Notification Requirements & Triggers

### Notification Obligation
An entity to which the statute applies, and that discovers a breach of the security system, shall promptly notify any District of Columbia resident whose personal information was included in the breach.

### Timing of Notification
In the most expedient time possible and without unreasonable delay, consistent with any measures necessary to determine the scope of the breach and restore the reasonable integrity of the data system.

### Notification Methods
Notice may be provided by one of the following methods:
- Written notice
- Electronic notice, if the customer has consented to receipt of electronic notice consistent with the provisions regarding electronic records and signatures set forth in 15 U.S.C. § 7001 (E-Sign Act)

### Content of Notice to Individuals
Notice shall include:
- Categories of information accessed
- Contact information for entity making notification
- Contact information for consumer reporting agencies, the FTC, and Office of the Attorney General

### Attorney General Notification
**Requirement:** If 50 or more District of Columbia residents are affected, the entity must notify the Attorney General.

**Timing:** As expeditiously as possible and without unreasonable delay, and no later than when individual notice is sent.

**Required Information:** Written notice must include:
- Name and contact information of the person or entity reporting the breach
- Name and contact information of the person or entity that experienced the breach
- The nature of the breach of the security of the system
- Types of personal information compromised by the breach
- Number of District residents affected by the breach
- Cause of the breach, including the relationship between the person or entity that experienced the breach and the person responsible for the breach, if known
- Remedial action taken, to include steps taken to assist District residents affected by the breach
- Date and time frame of the breach, if known
- Address and location of corporate headquarters, if outside of the District
- Any knowledge of foreign country involvement
- Sample of the notice to be provided to District residents

### Notification to Consumer Reporting Agencies
If any entity is required to notify more than **1,000** persons of a breach of security, the entity shall also notify, without unreasonable delay, all nationwide consumer reporting agencies of the timing, distribution, and content of the notices.

**Exception:** This requirement shall not apply to an entity that is required to notify consumer reporting agencies of a breach pursuant to Title V of the Gramm-Leach-Bliley Act.

### Credit Monitoring Services
**Trigger:** When the breach is reasonably believed to include a social security number or taxpayer identification number, the entity shall offer to each resident whose social security number or tax identification number was released identity theft protection services.

**Duration:** Services must be provided at no cost to such resident for at least **18 months**.

### Substitute Notice Available
Substitute notice is available if the entity demonstrates that:
- The cost of providing notice to persons would exceed **$50,000**, OR
- The number of persons to receive notice under the statute exceeds **100,000**, OR
- The entity does not have sufficient contact information

**Substitute Notice Content:** Substitute notice shall consist of **all** of the following:
- Email notice when the entity has email addresses for the subject persons
- Conspicuous posting of the notice on the website of the entity, if the entity maintains one
- Notice to major local and, if applicable, national media

### Third-Party Data Notification
Any entity that maintains, handles, or otherwise possesses computerized or other electronic data that includes personal information that the entity does not own shall notify the owner or licensee of the information of any breach of the security of the system in the most expedient time possible following discovery.

## Exemptions, Penalties, and Other Provisions

### Encryption Safe Harbor
The law provides a safe harbor for data that is encrypted or otherwise rendered secure, so as to be unusable by an unauthorized third party.

### Regulatory Exemptions
An entity that maintains procedures for a breach notification system under the GLBA, HIPAA, or HITECH, and provides notice in accordance with such Acts, and any rules, regulations, guidance and guidelines thereto, to each affected resident in the event of a breach, shall be deemed to be in compliance with the law with respect to the notification of affected individuals. The entity shall, in all cases, provide written notice of the breach of the security of the system to the Office of the Attorney General.

### Private Right of Action
Explicitly granted by the statute. Any District of Columbia resident injured by a violation may institute a civil action to recover actual damages, the costs of the action, and reasonable attorney's fees. Actual damages shall not include dignitary damages, including pain and suffering.

### Waiver Not Permitted
Any waiver of compliance with this section is not permitted.

## Key Provisions

### Delay for Law Enforcement
Notice may be delayed if a law enforcement agency determines that the notice will impede a criminal investigation. Notice required by the statute must be made without unreasonable delay and as soon as possible after the law enforcement agency determines that notification will no longer impede the investigation.

### Attorney General Enforcement
The Attorney General may seek direct damages and injunctive relief.
