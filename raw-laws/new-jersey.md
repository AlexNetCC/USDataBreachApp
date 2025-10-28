---
state: "New Jersey"
state_code: "NJ"
jurisdiction_type: "U.S. State"
statute_citation: "N.J. Stat. § 56:8-161 et seq."
statute_title: "New Jersey Identity Theft Prevention Act"
statute_url: "https://lis.njleg.state.nj.us/nxt/gateway.dll?f=templates&fn=default.htm&vid=Publish:10.1048/Enu"

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
legislation_bill_1_number: "A. 4001"
legislation_bill_1_signed_date: "2005-09-22"
legislation_bill_1_effective_date: "2006-01-01"
legislation_bill_2_number: "Senate Bill No. 52"
legislation_bill_2_signed_date: "2019-05-10"
legislation_bill_2_effective_date: "2019-09-01"

# ===================================================================
# :: BREACH DEFINITION
# ===================================================================
breach_definition_text: "Unauthorized access to electronic files, media or data containing personal information that compromises the security, confidentiality, or integrity of personal information when access to the personal information has not been secured by encryption or by any other method or technology that renders the personal information unreadable or unusable."
breach_trigger: "unauthorized_access"
breach_access_alone_triggers: true
breach_acquisition_alone_triggers: true

# ===================================================================
# :: ENCRYPTION SAFE HARBOR
# ===================================================================
exemption_encryption_safe_harbor: true
exemption_encryption_safe_harbor_negated_if_key_compromised: true
exemption_encryption_description: "Data encrypted or otherwise rendered unreadable or unusable"

# ===================================================================
# :: RISK OF HARM ANALYSIS
# ===================================================================
risk_of_harm_analysis_is_required: true
risk_of_harm_analysis_can_eliminate_notification: true
risk_of_harm_analysis_standard: "Misuse of the information is not reasonably possible"
risk_of_harm_analysis_documentation_required: true
risk_of_harm_analysis_documentation_retention_years: 5
risk_of_harm_analysis_ag_notification_required: false
risk_of_harm_analysis_ag_notification_threshold: 0
risk_of_harm_analysis_ag_notification_timeline_days: 0

# ===================================================================
# :: INDIVIDUAL NOTIFICATION
# ===================================================================
individual_notification_is_required: true
individual_notification_timeline_days: 0
individual_notification_timeline_description: "Most expedient time possible and without unreasonable delay, consistent with any measures necessary to determine the scope of the breach and restore the reasonable integrity of the data system"
individual_notification_extensions_available: false
individual_notification_extension_max_days: 0
individual_notification_extension_request_deadline_days: 0
individual_notification_contents:
  - "Date or estimated date of breach"
  - "Description of information involved"
  - "Contact information for the entity"
individual_notification_methods:
  - "Written notice"
  - "Electronic notice, if consistent with 15 U.S.C. § 7001 (E-Sign Act)"
  - "For online credentials only: electronic or other form (email account credentials require written notice or online delivery)"

# ===================================================================
# :: SUBSTITUTE NOTIFICATION
# ===================================================================
substitute_notification_is_available: true
substitute_notification_cost_trigger: 250000
substitute_notification_affected_count_trigger: 500000
substitute_notification_insufficient_contact_info_trigger: true
substitute_notification_other_triggers: []
substitute_notification_methods:
  - "Email notice when entity has email addresses"
  - "Conspicuous posting on entity website, if entity maintains one"
  - "Notification to major statewide media"

# ===================================================================
# :: ATTORNEY GENERAL NOTIFICATION
# ===================================================================
ag_notification_is_required: true
ag_notification_threshold: 1
ag_notification_threshold_description: "Required for all breaches (threshold of 1 affected New Jersey resident); notification to Division of State Police in Department of Law and Public Safety"
ag_notification_timeline_days: 0
ag_notification_timeline_description: "Prior to disclosure to the customer, entity must report breach to Division of State Police for investigation or handling"
ag_notification_recipients: "Division of State Police in Department of Law and Public Safety"
ag_notification_contents:
  - "Notice of the breach of security"
  - "Information pertaining to the breach"

# ===================================================================
# :: CONSUMER REPORTING AGENCY NOTIFICATION
# ===================================================================
cra_notification_is_required: true
cra_notification_threshold: 1000
cra_notification_threshold_description: "If entity discovers circumstances requiring notification of more than 1,000 persons at one time"
cra_notification_timeline_days: 0
cra_notification_timeline_description: "Without unreasonable delay, all nationwide consumer reporting agencies"
cra_notification_recipients: "All nationwide consumer reporting agencies"
cra_notification_contents:
  - "Timing of the notices"
  - "Distribution of the notices"
  - "Content of the notices"

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
exemption_glba: false
exemption_glba_description: null
exemption_primary_regulator: false
exemption_primary_regulator_description: null
exemption_own_notification_policy: true
exemption_own_notification_policy_description: "Entity with own notification procedures consistent with statute requirements and information security policy"
exemption_other_description: null

# ===================================================================
# :: ENFORCEMENT
# ===================================================================
enforcement_private_right_of_action: false
enforcement_authority: "Attorney General"
enforcement_authority_is_exclusive: false
enforcement_type_damages_description: "Willful, knowing, or reckless violation is an unlawful practice under consumer protection laws"

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
enforcement_penalty_notes: "Willful, knowing, or reckless violations subject to consumer protection law penalties (not specifically enumerated in data breach statute)"

# ===================================================================
# :: SPECIAL PROVISIONS
# ===================================================================
provision_law_enforcement_delay: true
provision_law_enforcement_delay_description: "Notification may be delayed if law enforcement agency determines notification will impede criminal or civil investigation and that agency has made a request that the notification be delayed"
provision_government_entities_are_subject: true
provision_government_entities_notes: null
provision_waiver_not_permitted: false
provision_notice_at_collection_required: false
provision_other_description: "Risk of harm analysis REQUIRED and can eliminate notification requirement (standard: misuse not reasonably possible). Documentation of risk determination must be retained for 5 years. Notification to Division of State Police (not Attorney General) required PRIOR to consumer notification. Dissociated data provision: data that if linked would constitute PI is treated as PI if the linking means were accessed. Special notification rules for online account credentials. No GLBA or HIPAA exemptions."

# ===================================================================
# :: OBSIDIAN TAGS
# ===================================================================
tags:
  - DataBreachLaws/Breach/trigger/access
  - DataBreachLaws/Exempts/own-policy
  - DataBreachLaws/Notice/AG/required/threshold/1
  - DataBreachLaws/Notice/AG/required/timing/before-consumer
  - DataBreachLaws/Notice/AG/Shame-Site
  - DataBreachLaws/Notice/CRA/required/threshold/1000
  - DataBreachLaws/Notice/Consumer/asap
  - DataBreachLaws/PII/financial-accounts
  - DataBreachLaws/PII/government-id
  - DataBreachLaws/PII/online-account-credentials

  - DataBreachLaws/RiskOfHarm/allowed/documentation-req
---

# New Jersey Data Breach Notification Law

## Overview
- **Statutory Citation:** `N.J. Stat. § 56:8-161 et seq.`
- **Statute Title:** [New Jersey Identity Theft Prevention Act](https://lis.njleg.state.nj.us/nxt/gateway.dll?f=templates&fn=default.htm&vid=Publish:10.1048/Enu)
- **Jurisdiction Type:** U.S. State
- **Legislative History:**
  - **Original Legislation:** A. 4001 (signed September 22, 2005, effective January 1, 2006)
  - **Major Amendments:** Senate Bill No. 52 (signed May 10, 2019, effective September 1, 2019)
  - **Last Verified:** September 2025

## Application & Covered Entities
Any government, or other entity, however organized and whether or not organized to operate at a profit, that conducts business in New Jersey (collectively, Entity) and that compiles or maintains computerized records that include personal information.

## Key Definitions

### Personal Information
An individual's first name or first initial and last name linked with any one or more of the following data elements:
- Social Security number
- Driver's license number or state identification card number
- Account number, credit card number, or debit card number in combination with any required security code, access code, or password that would permit access to an individual's financial account
- Username, email address, or any other account holder identifying information, in combination with any password or security question and answer that would permit access to an online account

### Dissociated Data
Dissociated data that, if linked, would constitute personal information is personal information if the means to link the dissociated data were accessed in connection with access to the dissociated data.

### Exclusions
Personal information shall not include publicly available information that is lawfully made available to the general public from federal, state, or local government records, or widely distributed media.

### Breach of Security
Unauthorized access to electronic files, media or data containing personal information that compromises the security, confidentiality, or integrity of personal information when access to the personal information has not been secured by encryption or by any other method or technology that renders the personal information unreadable or unusable.

### Good-Faith Exception
Good-faith acquisition of personal information by an employee or agent of the Entity for a legitimate business purpose is not a breach of security, provided that the personal information is not used for a purpose unrelated to the business or subject to further unauthorized disclosure.

## Notification Requirements & Triggers

### Notification Obligation
An Entity to which the statute applies shall disclose any breach of security of computerized records following discovery or notification of the breach to any customer who is a resident of New Jersey whose personal information was, or is reasonably believed to have been, accessed by an unauthorized person.

**Exception:** Disclosure of a breach of security to a customer shall not be required if the Entity establishes that misuse of the information is not reasonably possible. Any determination shall be documented in writing and retained for **5 years**.

### Timing of Notification
The disclosure to a customer shall be made in the most expedient time possible and without unreasonable delay, consistent with any measures necessary to determine the scope of the breach and restore the reasonable integrity of the data system.

### Notification Methods
Notice may be provided by one of the following methods:
- Written notice
- Electronic notice, if the notice provided is consistent with 15 U.S.C. § 7001 (E-Sign Act)
- For breaches involving online account credentials only, in "electronic or other form" (except for breaches involving credentials for an email account, which must be provided via written notice or via online delivery when the customer is connected to the online account from an IP address or online location from which the business or public entity knows the customer customarily accesses the account)

### Content of Notice to Individuals
Notice shall include at a minimum:
- Date or estimated date of breach
- Description of information involved
- Contact information for the entity

### Attorney General/Police Notification
Any Entity required under this section to disclose a breach of security of a customer's personal information shall, prior to disclosure to the customer, report the breach of security and any information pertaining to the breach to the Division of State Police in the Department of Law and Public Safety for investigation or handling, which may include dissemination or referral to other appropriate law enforcement entities.

### Consumer Reporting Agency Notification
If an Entity discovers circumstances requiring notification of more than **1,000** persons at one time, the Entity shall also notify, without unreasonable delay, all nationwide consumer reporting agencies of the timing, distribution, and content of the notices.

### Substitute Notice Available
If the Entity demonstrates that:
- The cost of providing notice would exceed **$250,000**, OR
- The affected class of subject individuals to be notified exceeds **500,000**, OR
- The Entity does not have sufficient contact information

Substitute notice shall consist of all of the following:
- Email notice when the Entity has email addresses
- Conspicuous posting of the notice on the Entity's website, if the Entity maintains one
- Notification to major statewide media

### Third-Party Data Notification
An Entity that compiles or maintains computerized records that include personal information on behalf of another Entity shall notify that Entity of any breach of security of the computerized records immediately following discovery, if the personal information was, or is reasonably believed to have been, accessed by an unauthorized person.

## Exemptions, Penalties, and Other Provisions

### Encryption Safe Harbor
The law provides a safe harbor for data that is encrypted or otherwise rendered unreadable or unusable.

### Own Notification Policy Exemption
An Entity that maintains its own notification procedures as part of an information security policy for the treatment of personal information and is otherwise consistent with the requirements of the statute shall be deemed in compliance with the notification requirements if it notifies subject customers in accordance with its policies in the event of a breach of security of the system.

### Penalties
A willful, knowing, or reckless violation is an unlawful practice under the state's consumer protection laws.

## Key Provisions

### Delay for Law Enforcement
The notification required by this section shall be delayed if a law enforcement agency determines that the notification will impede a criminal or civil investigation and that agency has made a request that the notification be delayed.

### Attorney General Enforcement
The Attorney General has enforcement authority over this statute.
