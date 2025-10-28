---
state: "Maryland"
state_code: "MD"
jurisdiction_type: "U.S. State"
statute_citation: "Md. Code Com. Law § 14-3501 et seq."
statute_title: "Maryland Personal Information Protection Act"
statute_url: "https://mgaleg.maryland.gov/mgawebsite/laws/StatuteText?article=gcl&section=14-3504&enactments=False&archived=False"

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
legislation_bill_1_number: "H.B. 208"
legislation_bill_1_signed_date: "2007-04-03"
legislation_bill_1_effective_date: "2008-01-01"
legislation_bill_2_number: "H.B. 974"
legislation_bill_2_signed_date: "2017-05-04"
legislation_bill_2_effective_date: "2018-01-01"
legislation_bill_3_number: "H.B. 962"
legislation_bill_3_signed_date: "2022-05-29"
legislation_bill_3_effective_date: "2022-10-01"

# ===================================================================
# :: BREACH DEFINITION
# ===================================================================
breach_definition_text: "Unauthorized acquisition of computerized data that compromises the security, confidentiality, or integrity of the personal information maintained by an Entity."
breach_trigger: "unauthorized_acquisition"
breach_access_alone_triggers: false
breach_acquisition_alone_triggers: true

# ===================================================================
# :: ENCRYPTION SAFE HARBOR
# ===================================================================
exemption_encryption_safe_harbor: true
exemption_encryption_safe_harbor_negated_if_key_compromised: true
exemption_encryption_description: "Encryption, redaction, or protection rendering information unreadable/unusable"

# ===================================================================
# :: RISK OF HARM ANALYSIS
# ===================================================================
risk_of_harm_analysis_is_required: true
risk_of_harm_analysis_can_eliminate_notification: true
risk_of_harm_analysis_standard: "Personal information was not and will not be misused as a result of breach"
risk_of_harm_analysis_documentation_required: true
risk_of_harm_analysis_documentation_retention_years: 3
risk_of_harm_analysis_ag_notification_required: false
risk_of_harm_analysis_ag_notification_threshold: 0
risk_of_harm_analysis_ag_notification_timeline_days: 0

# ===================================================================
# :: INDIVIDUAL NOTIFICATION
# ===================================================================
individual_notification_is_required: true
individual_notification_timeline_days: 45
individual_notification_timeline_description: "As soon as reasonably practicable, but no later than 45 days after the business concludes the investigation, consistent with measures necessary to determine the scope of the breach of the security of a system, identify the individuals affected, or restore the integrity of the system"
individual_notification_extensions_available: false
individual_notification_extension_max_days: 0
individual_notification_extension_request_deadline_days: 0
individual_notification_contents:
  - "Description of the categories of information acquired, including which personal information elements"
  - "Contact information for the business (address, telephone, toll-free number if maintained)"
  - "Toll-free telephone numbers and addresses for major consumer reporting agencies"
  - "Toll-free telephone numbers, addresses, and website addresses for FTC and state Attorney General"
  - "Special provision: For email account credentials only, Entity may provide notice directing individual to change password/security question or take other steps to protect account"
individual_notification_methods:
  - "Written notice sent to most recent address"
  - "Telephonic notice to most recent telephone number"
  - "Email to most recent email address, if individual has expressly consented"

# ===================================================================
# :: SUBSTITUTE NOTIFICATION
# ===================================================================
substitute_notification_is_available: true
substitute_notification_cost_trigger: 0
substitute_notification_affected_count_trigger: 0
substitute_notification_insufficient_contact_info_trigger: true
substitute_notification_other_triggers: []
substitute_notification_methods:
  - "Email notice if business has email addresses"
  - "Conspicuous posting on business website, if business maintains website"
  - "Notification to major print/broadcast media in affected geographic areas"

# ===================================================================
# :: ATTORNEY GENERAL NOTIFICATION
# ===================================================================
ag_notification_is_required: true
ag_notification_threshold: 1
ag_notification_threshold_description: "Required for all breaches, prior to giving notification to individuals (threshold of 1 affected Maryland resident)"
ag_notification_timeline_days: 0
ag_notification_timeline_description: "Prior to giving the notification required under the statute"
ag_notification_recipients: "Attorney General"
ag_notification_contents:
  - "The number of affected individuals residing in the State"
  - "A description of the breach of the security of a system, including when and how it occurred"
  - "Any steps the business has taken or plans to take relating to the breach of the security of a system"
  - "The form of notice that will be sent to affected individuals and a sample notice"

# ===================================================================
# :: CONSUMER REPORTING AGENCY NOTIFICATION
# ===================================================================
cra_notification_is_required: true
cra_notification_threshold: 1000
cra_notification_threshold_description: "If Entity required to notify 1,000 or more individuals"
cra_notification_timeline_days: 0
cra_notification_timeline_description: "Without unreasonable delay"
cra_notification_recipients: "Consumer reporting agencies"
cra_notification_contents:
  - "Timing of the notices"
  - "Distribution of the notices"
  - "Content of the notices"

# ===================================================================
# :: VENDOR NOTIFICATION (Third-Party Data Processors)
# ===================================================================
vendor_notification_is_required: true
vendor_notification_timeline_days: 45
vendor_notification_timeline_description: "As soon as practicable but not later than 45 days after the Entity discovers or is notified of the breach, if it is likely that the breach has resulted or will result in the misuse of personal information"
owner_liability_for_vendor_failure: "Third-party Entity must share information relative to the breach with owner or licensee"
vendor_cooperation_required: false

# ===================================================================
# :: EXEMPTIONS
# ===================================================================
exemption_hipaa: true
exemption_hipaa_description: "Entity in compliance with HIPAA"
exemption_glba: true
exemption_glba_description: "Entity in compliance with GLBA and Interagency Guidelines"
exemption_primary_regulator: true
exemption_primary_regulator_description: "Entity complying with primary or functional federal/state regulator rules"
exemption_own_notification_policy: false
exemption_own_notification_policy_description: null
exemption_other_description: null

# ===================================================================
# :: ENFORCEMENT
# ===================================================================
enforcement_private_right_of_action: true
enforcement_authority: "Attorney General and Private Parties"
enforcement_authority_is_exclusive: false
enforcement_type_damages_description: "Private right of action under Title 13 (Unfair and Deceptive Trade Practices Act)"

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
enforcement_penalty_notes: "Private right of action available under Unfair and Deceptive Trade Practices Act; specific penalty amounts not defined in data breach statute"

# ===================================================================
# :: SPECIAL PROVISIONS
# ===================================================================
provision_law_enforcement_delay: true
provision_law_enforcement_delay_description: "Notice may be delayed if law enforcement determines notification will impede criminal investigation or jeopardize homeland/national security. Notification shall be given as soon as reasonably practicable but no later than 7 days after law enforcement determines it will not impede investigation and will not jeopardize homeland/national security if: (i) original 45-day period already elapsed, OR (ii) end of original 45-day period, OR (iii) 7 days after law enforcement determination."
provision_government_entities_are_subject: true
provision_government_entities_notes: null
provision_waiver_not_permitted: true
provision_notice_at_collection_required: false
provision_other_description: "AG notification required BEFORE individual notification (unusual requirement). 45-day hard deadline. Risk of harm analysis with 3-year documentation retention. Good-faith employee/agent exception. Special email credential breach notification option. Waiver provisions prohibited. Private right of action available under Unfair and Deceptive Trade Practices Act."

# ===================================================================
# :: OBSIDIAN TAGS
# ===================================================================
tags:
  - DataBreachLaws/Breach/trigger/acquisition
  - DataBreachLaws/Enforcement/private-right-of-action
  - DataBreachLaws/Exempts/federal-regulator
  - DataBreachLaws/Exempts/glba
  - DataBreachLaws/Exempts/hipaa
  - DataBreachLaws/Notice/AG/required/threshold/1
  - DataBreachLaws/Notice/AG/required/timing/before-consumer
  - DataBreachLaws/Notice/AG/Shame-Site
  - DataBreachLaws/Notice/CRA/required/threshold/1000
  - DataBreachLaws/Notice/Consumer/45days
  - DataBreachLaws/PII/biometric
  - DataBreachLaws/PII/financial-accounts
  - DataBreachLaws/PII/genetic
  - DataBreachLaws/PII/government-id
  - DataBreachLaws/PII/health-info
  - DataBreachLaws/PII/online-account-credentials
  - DataBreachLaws/PII/taxpayer-id
  - DataBreachLaws/RiskOfHarm/allowed
---
# Maryland Data Breach Notification Law

## Overview
- **Statutory Citation:** `Md. Code Com. Law § 14-3501 et seq.`
- **Statute Title:** [Maryland Personal Information Protection Act](https://mgaleg.maryland.gov/mgawebsite/laws/StatuteText?article=gcl&section=14-3504&enactments=False&archived=False)
- **Jurisdiction Type:** U.S. State
- **Legislative History:**
  - **Original Legislation:** H.B. 208 (signed April 3, 2007, effective January 1, 2008)
  - **Major Amendments:**
    - H.B. 974 (signed May 4, 2017, effective January 1, 2018)
    - H.B. 962 (signed May 29, 2022, effective October 1, 2022)
  - **Last Verified:** September 2025

## Application & Covered Entities
Any business entity, whether or not organized to operate at a profit, that owns, maintains, or licenses computerized data that includes personal information of an individual residing in Maryland.

## Key Definitions

### Personal Information (Category 1)
An individual's first name or first initial and last name in combination with any one or more of the following data elements, when the data elements are not encrypted, redacted, or otherwise protected by another method that renders the information unreadable or unusable:
- Social Security number, individual taxpayer identification number, passport number, or other identification number issued by the federal government
- Driver's license number or state identification card number
- Account number, credit card number, or debit card number, in combination with any required security code, access code, or password, that permits access to an individual's financial account
- Health information, including information about an individual's mental health
- Health insurance policy or certificate number or health insurance subscriber identification number, in combination with a unique identifier used by an insurer or an employer that is self-insured, that permits access to an individual's health information
- Biometric data of an individual generated by automatic measurements of an individual's biological characteristics such as a fingerprint, voice print, genetic print, retina or iris image, or other unique biological characteristic, that can be used to uniquely authenticate the individual's identity when the individual accesses a system or account
- Genetic information of an individual

### Personal Information (Category 2)
A username or email address in combination with a password or security question and answer that permits access to an individual's email account.

### Encrypted
The protection of data in electronic or optical form using an encryption technology that renders the data indecipherable without an associated cryptographic key necessary to enable decryption of the data.

### Exclusions
Personal information does not include:
- Publicly available information that is lawfully made available to the general public from federal, state, or local government records
- Information that an individual has consented to have publicly disseminated or listed
- Information that is disseminated or listed in accordance with HIPAA

### Breach of Security
Unauthorized acquisition of computerized data that compromises the security, confidentiality, or integrity of the personal information maintained by an Entity.

### Good-Faith Exception
A good-faith acquisition of personal information by an employee or agent of an Entity for the purposes of the business, provided that the personal information is not used or subject to further unauthorized disclosure, does not constitute a security breach.

## Notification Requirements & Triggers

### Notification Obligation
An Entity that discovers or is notified of a breach of the security of the system shall notify the individual of the breach.

**Exception:** Notification is not required if after a good-faith, reasonable, and prompt investigation the Entity determines that the personal information of the individual was not and will not be misused as a result of the breach. If the Entity determines that notification is not required, the Entity shall maintain records that reflect its determination for **3 years** after the determination is made. If, after the investigation is concluded, the Entity determines that the breach of the security of the system creates a likelihood that personal information has been or will be misused, the business shall notify the individual of the breach.

### Timing of Notification
As soon as reasonably practicable, but no later than **45 days** after the business concludes the investigation, consistent with measures necessary to determine the scope of the breach of the security of a system, identify the individuals affected, or restore the integrity of the system.

### Notification Methods
Notice may be provided by one of the following methods:
- Written notice sent to the most recent address of the individual in the records of the business
- Telephonic notice, to the most recent telephone number of the individual in the records of the business
- Email to the most recent email address of the individual in the records of the business, if the individual has expressly consented to receive email notice

### Content of Notice to Individuals (General)
Except for breaches involving loss of information that permits access to an email account only, notification shall include:
- To the extent possible, a description of the categories of information that were, or are reasonably believed to have been, acquired by an unauthorized person, including which of the elements of personal information were, or are reasonably believed to have been acquired
- Contact information for the business making the notification, including the business's address, telephone number, and toll-free telephone number if one is maintained
- The toll-free telephone numbers and addresses for the major consumer reporting agencies
- The toll-free telephone numbers, addresses, and website addresses for the Federal Trade Commission and the state Attorney General, along with a statement that the individual can obtain information from these sources about steps the individual can take to avoid identity theft

### Content of Notice for Email Account Credentials Only
The Entity may provide notice in electronic or other form that directs the individual whose personal information has been breached promptly to:
- Change the individual's password and security question or answer, as applicable; or
- Take other steps appropriate to protect the email account with the business and all other online accounts for which the individual uses the same username or email and password or security question or answer

The notification may be given by a clear and conspicuous notice delivered to the individual online while the individual is connected to the affected email account from an IP address or online location from which the business knows the individual customarily accesses the account, but otherwise may not be given to the individual by sending notification by email to the email account affected by the breach.

### Attorney General Notification
Prior to giving the notification required under the statute, an Entity shall provide notice of a breach of the security of a system to the state Office of the Attorney General, and the notice shall include, at a minimum:
- The number of affected individuals residing in the State
- A description of the breach of the security of a system, including when and how it occurred
- Any steps the business has taken or plans to take relating to the breach of the security of a system
- The form of notice that will be sent to affected individuals and a sample notice

### Consumer Reporting Agency Notification
If an Entity must notify **1,000** or more individuals, the Entity also shall notify, without unreasonable delay, each consumer reporting agency that compiles and maintains files on consumers on a nationwide basis of the timing, distribution, and content of the notices.

### Substitute Notice Available
If the Entity demonstrates that the Entity does not have sufficient contact information to give notice, substitute notice shall consist of **all** of the following:
- Email notice to an individual entitled to notification, if the business has an email address for the individual to be notified
- Conspicuous posting of the notice on the Entity's website, if the Entity maintains a website
- Notification to major print or broadcast media in geographic areas where the individuals affected by the breach likely reside

### Third-Party Data Notification
An Entity that maintains personal information of Maryland residents that the Entity does not own or license shall notify the owner or licensee of the personal information of a breach of the security of the system if it is likely that the breach has resulted or will result in the misuse of personal information of an individual residing in Maryland.

Notification required by a third-party Entity shall be given as soon as practicable but not later than **45 days** after the Entity discovers or is notified of the breach of the security of a system.

A third-party Entity shall share with the owner or licensee information relative to the breach.

## Exemptions, Penalties, and Other Provisions

### Encryption Safe Harbor
The law provides a safe harbor for data that is encrypted, redacted, or otherwise protected by another method that renders the information unreadable or unusable.

### Primary Regulator Exemption
An Entity that complies with the requirements for notification procedures under the rules, regulations, procedures, or guidelines established by the primary or functional federal or state regulator of the Entity shall be deemed to be in compliance with the statute.

### Gramm-Leach-Bliley Act Exemption
An Entity or the affiliate of an Entity that is subject to and in compliance with the Gramm-Leach-Bliley Act, the federal Interagency Guidelines Establishing Information Security Standards, and the federal Interagency Guidance on Response Programs for Unauthorized Access to Customer Information and Customer Notice, and any revisions, additions, or substitutions, shall be deemed to be in compliance with this subtitle.

### HIPAA Exemption
An Entity or affiliate of the Entity that is in compliance with the federal Health Insurance Portability and Accountability Act of 1996 (HIPAA) shall be deemed to be in compliance.

### Private Right of Action
Consumers may bring actions under Title 13 of the Maryland Code, the Unfair and Deceptive Trade Practices Act.

### Waiver Not Permitted
Waiver of any provision is not permitted.

## Key Provisions

### Delay for Law Enforcement
Notice may be delayed if a law enforcement agency determines that the notice will impede a criminal investigation or jeopardize homeland or national security. Notification shall be given as soon as reasonably practicable but no later than 7 days after the law enforcement agency determines that it will not impede a criminal investigation and will not jeopardize homeland or national security if:
- The original 45 day period has already elapsed, OR
- The end of the original 45 day period, OR
- 7 days after the law enforcement agency determines that it will not impede a criminal investigation and will not jeopardize homeland or national security

### Attorney General Enforcement
Attorney General enforces this statute.
