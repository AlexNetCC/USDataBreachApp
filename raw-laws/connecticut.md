---
# ===================================================================
# :: CORE INFORMATION
# ===================================================================
state: "Connecticut"
state_code: "CT"
jurisdiction_type: "U.S. State"
statute_citation: "Conn. Gen. Stat. § 36a-701b"
statute_title: "Connecticut Data Breach Notification Law"
statute_url: "https://www.cga.ct.gov/current/pub/chap_669.htm"

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
legislation_bill_1_number: "S.B. 650"
legislation_bill_1_signed_date: "2005-06-08"
legislation_bill_1_effective_date: "2006-01-01"
legislation_bill_2_number: "H.B. 6001"
legislation_bill_2_signed_date: "2012-06-15"
legislation_bill_2_effective_date: "2012-10-01"
legislation_bill_3_number: "S.B. 949"
legislation_bill_3_signed_date: "2015-06-11"
legislation_bill_3_effective_date: "2015-10-01"
legislation_bill_4_number: "S.B. 472"
legislation_bill_4_signed_date: "2018-06-04"
legislation_bill_4_effective_date: "2018-10-01"
legislation_bill_5_number: "H.B. 5310"
legislation_bill_5_signed_date: "2021-06-16"
legislation_bill_5_effective_date: "2021-10-01"
legislation_bill_6_number: "S.B. 1058"
legislation_bill_6_signed_date: "2023-06-26"
legislation_bill_6_effective_date: "2023-10-01"

# ===================================================================
# :: BREACH DEFINITION
# ===================================================================
breach_definition_text: "Unauthorized access to or acquisition of electronic files, media, databases, or computerized data containing PI when access to the PI has not been secured by encryption or by any other method or technology that renders the PI unreadable or unusable."
breach_trigger: "unauthorized_access_or_acquisition"
breach_access_alone_triggers: true
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
risk_of_harm_analysis_standard: "Notification is not required if, after an appropriate investigation, the Entity reasonably determines that the breach will not likely result in harm to the individuals whose PI has been acquired or accessed."
risk_of_harm_analysis_documentation_required: false
risk_of_harm_analysis_documentation_retention_years: 0
risk_of_harm_analysis_ag_notification_required: false
risk_of_harm_analysis_ag_notification_threshold: 0
risk_of_harm_analysis_ag_notification_timeline_days: 0

# ===================================================================
# :: INDIVIDUAL NOTIFICATION
# ===================================================================
individual_notification_is_required: true
individual_notification_timeline_days: 60
individual_notification_timeline_description: "Without unreasonable delay, but not later than 60 days after discovery of breach, unless shorter time required under federal law, consistent with measures to determine nature and scope of breach, identify affected individuals, or restore reasonable integrity of data system. Additional requirement: If additional residents identified more than 60 days after discovery, Entity shall notify as expediently as possible."
individual_notification_extensions_available: false
individual_notification_extension_max_days: 0
individual_notification_extension_request_deadline_days: 0
individual_notification_contents:
  - "Date or estimated date of breach"
  - "Description of information involved"
  - "Contact information for the entity"
  - "If Social Security number or taxpayer ID number compromised: information on how to enroll in required identity theft protection services and how to place a credit freeze"
individual_notification_methods:
  - "Written notice"
  - "Telephonic notice"
  - "Electronic notice, provided it is consistent with 15 U.S.C. § 7001 (E-Sign Act)"

# ===================================================================
# :: SUBSTITUTE NOTIFICATION
# ===================================================================
substitute_notification_is_available: true
substitute_notification_cost_trigger: 250000
substitute_notification_affected_count_trigger: 500000
substitute_notification_insufficient_contact_info_trigger: true
substitute_notification_other_triggers: []
substitute_notification_methods:
  - "Email notice when Entity has email addresses for affected persons"
  - "Conspicuous posting on Entity website"
  - "Notice published in or broadcast on major statewide media"

# ===================================================================
# :: ATTORNEY GENERAL NOTIFICATION
# ===================================================================
ag_notification_is_required: true
ag_notification_threshold: 1
ag_notification_threshold_description: "If Entity is required to notify any Connecticut residents of any breach of security"
ag_notification_timeline_days: 0
ag_notification_timeline_description: "Not later than the time notice is provided to residents"
ag_notification_recipients: null
ag_notification_contents:
  - "Notice required for ANY breach affecting Connecticut residents"
  - "Timing: not later than when notice provided to residents"
  - "Must include information about available identity theft protection services (if SSN/taxpayer ID affected)"

# ===================================================================
# :: CONSUMER REPORTING AGENCY NOTIFICATION
# ===================================================================
cra_notification_is_required: false
cra_notification_threshold: null
cra_notification_threshold_description: "No CRA notification requirement"
cra_notification_timeline_days: null
cra_notification_timeline_description: null
cra_notification_recipients: null
cra_notification_contents: []

# ===================================================================
# :: VENDOR NOTIFICATION (Third-Party Data Processors)
# ===================================================================
vendor_notification_is_required: true
vendor_notification_timeline_days: 0
vendor_notification_timeline_description: "Immediately following discovery if PI was or is reasonably believed to have been breached"
owner_liability_for_vendor_failure: "Third-party agent must comply with immediate notification requirement"
vendor_cooperation_required: false

# ===================================================================
# :: EXEMPTIONS
# ===================================================================
exemption_hipaa: true
exemption_hipaa_description: "Entities subject to and in compliance with HIPAA deemed compliant, provided they also notify Attorney General as required and offer required identity theft protection services"
exemption_glba: true
exemption_glba_description: "Entities maintaining procedures pursuant to GLBA deemed compliant, provided they also notify Attorney General as required"
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
enforcement_type_damages_description: "Unfair trade practice"

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
enforcement_penalty_notes: "Violation treated as unfair trade practice; specific penalty amounts not defined in data breach statute"

# ===================================================================
# :: SPECIAL PROVISIONS
# ===================================================================
provision_law_enforcement_delay: true
provision_law_enforcement_delay_description: "Notification may be delayed if law enforcement agency determines notification would impede criminal investigation"
provision_government_entities_are_subject: true
provision_government_entities_notes: null
provision_waiver_not_permitted: false
provision_notice_at_collection_required: false
provision_other_description: "Identity theft protection required (24 months at no cost) for breaches involving Social Security number or taxpayer identification number. Extended notification requirement: If additional residents identified more than 60 days after discovery, Entity shall notify as expediently as possible. For online account credentials, notice may be provided directing resident to change password/security question. For email account credentials, Entity shall not provide notice to breached email account if cannot reasonably verify receipt; must use another method or deliver clear notice when resident online and connected from customary IP address/location."

# ===================================================================
# :: OBSIDIAN TAGS
# ===================================================================
tags:
  - DataBreachLaws/Breach/trigger/access-or-acquisition
  - DataBreachLaws/Exempts/glba
  - DataBreachLaws/Exempts/hipaa
  - DataBreachLaws/Notice/AG/required/threshold/1
  - DataBreachLaws/Notice/AG/required/timing/concurrent
  - DataBreachLaws/Notice/CRA/not-required
  - DataBreachLaws/Notice/Consumer/60days
  - DataBreachLaws/PII/biometric
  - DataBreachLaws/PII/geolocation
  - DataBreachLaws/PII/health-info
  - DataBreachLaws/PII/taxpayer-id
  - DataBreachLaws/PII/government-id
  - DataBreachLaws/RiskOfHarm/allowed
  - DataBreachLaws/special-provision/credit-monitoring-required
---

# Connecticut Data Breach Notification Law

## Overview
- **Statutory Citation:** `Conn. Gen. Stat. § 36a-701b`
- **Statute Title:** [Connecticut Data Breach Notification Law](https://www.cga.ct.gov/current/pub/chap_669.htm)
- **Jurisdiction Type:** U.S. State
- **Legislative History:**
  - **Original Legislation:** S.B. 650 (signed June 8, 2005, Public Act 05-148, effective January 1, 2006)
  - **Major Amendments:**
    - H.B. 6001 (signed June 15, 2012, Public Act 12-1, effective October 1, 2012)
    - S.B. 949 (signed June 11, 2015, effective October 1, 2015)
    - S.B. 472 (signed June 4, 2018, effective October 1, 2018)
    - H.B. 5310 (signed June 16, 2021, effective October 1, 2021)
    - S.B. 1058 (signed June 26, 2023, effective October 1, 2023)
  - **Last Verified:** September 2025

## Application & Covered Entities
Applies to any person that owns, licenses, or maintains computerized data that includes PI of Connecticut residents.

## Key Definitions

### Personal Information (Category 1)
An individual's first name or first initial and last name in combination with any one or more of the following data elements:
- Social Security number
- Driver's license number or state identification card number
- Credit card number, or debit card number
- Financial account number, in combination with any required security code, access code, or password that would permit access to such financial account
- Taxpayer identification number
- Identity protection personal identification number issued by the IRS
- Passport number, military identification number or other identification number issued by the government that is commonly used to verify identity
- Medical information regarding individual medical history, mental or physical condition, or medical treatment or diagnosis by a health care professional
- Health insurance policy number or subscriber identification number, or any unique identifier used by a health insurer to identify the individual
- Biometric information consisting of data generated by electronic measurements of an individual's unique physical characteristics used to authenticate or ascertain the individual's identity (e.g., fingerprint, voice print, retina or iris image)
- **[effective October 1, 2023]** Precise geolocation data

### Personal Information (Category 2)
Username or email address in combination with a password or security question and answer that would permit access to an online account (name not required).

### Exclusions
PI does not include publicly available information that is lawfully made available to the general public from federal, state, or local government records or widely distributed media.

### Breach of Security
Unauthorized access to or acquisition of electronic files, media, databases, or computerized data containing PI when access to the PI has not been secured by encryption or by any other method or technology that renders the PI unreadable or unusable.

## Notification Requirements & Triggers

### Risk of Harm Standard
Notification is not required if, after an appropriate investigation, the Entity reasonably determines that the breach will **not likely result in harm** to the individuals whose PI has been acquired or accessed.

### Timing of Notice to Individuals
The disclosure shall be made **without unreasonable delay, but not later than 60 days** after the discovery of such breach, unless a shorter time is required under federal law, consistent with any measures necessary to determine the nature and scope of the breach, to identify individuals affected, or to restore the reasonable integrity of the data system.

**Additional requirement:** If additional residents whose information has been breached or reasonably believed to be breached is identified more than 60 days after discovery, the Entity shall notify as expediently as possible.

### Content of Notice to Individuals
- Date or estimated date of breach
- Description of information involved
- Contact information for the entity
- If Social Security number or taxpayer ID number was compromised: information on how to enroll in required identity theft protection services and how to place a credit freeze

### Method of Notice to Individuals
Notice may be provided by one of the following methods:
- Written notice
- Telephonic notice
- Electronic notice, provided it is consistent with 15 U.S.C. § 7001 (E-Sign Act)

### Special Rules for Online Account Credentials
Notice may be provided in electronic or other form directing the resident to promptly change any password or security question or to take other appropriate steps to protect the affected online account and all other online accounts for which the resident uses the same username or email address and password or security question and answer.

### Special Rules for Email Account Credentials
An Entity that furnishes an email account shall not provide notice to the email account that was breached if the Entity cannot reasonably verify the affected person's receipt of that notification. In such event, notice should be provided by another method or clear and conspicuous notice delivered to the resident when they are online and connected to the account from an IP address or online location from which the person knows the resident customarily accesses the account.

### Identity Theft Protection Services
The Entity who owns or licenses the affected PI shall offer to each resident whose Social Security number or taxpayer identification number was breached or is reasonably believed to have been breached, appropriate identity theft prevention services and, if applicable, identity theft mitigation services.

Such service or services shall be provided at **no cost to such resident for a period of not less than 24 months**. Such person shall provide all information necessary for such resident to enroll in such service or services and shall include information on how such resident can place a credit freeze on such resident's credit file.

### Substitute Notice Available
If the Entity demonstrates in the notice to the AG that:
- The cost of providing notice would exceed **$250,000**, OR
- The affected class of subject persons to be notified exceeds **500,000** persons, OR
- The Entity does not have sufficient contact information

Substitute notice shall consist of all of the following:
- Email notice when the Entity has email addresses for the affected persons
- Conspicuous posting on the Entity's website
- Notice published in or broadcast on major statewide media

### Attorney General Notification
**Requirement:** Required if the Entity is required under the statute to notify **any** Connecticut residents of any breach of security.

**Timing:** Notice shall be provided to the Attorney General **not later than the time notice is provided to the residents**.

### Third-Party Data Notification
If an Entity maintains PI that the Entity does not own, the Entity shall notify the owner or licensee of the information of any breach of the security of the data **immediately following its discovery** if the PI was, or is reasonably believed to have been, breached.

## Exemptions, Penalties, and Other Provisions

### Encryption Safe Harbor
The law provides a safe harbor for data that is encrypted or otherwise rendered unreadable or unusable.

### Regulatory Exemptions
- **HIPAA:** Entities subject to and in compliance with HIPAA are deemed compliant, provided they also notify the Attorney General as required and offer the required identity theft protection services
- **GLBA:** Entities that maintain procedures pursuant to GLBA are deemed compliant, provided they also notify the Attorney General as required

### Penalties
Failure to comply is an unfair trade practice enforced by the Attorney General.

### Private Right of Action
The statute does not provide for a private right of action.

## Key Provisions

### Delay for Law Enforcement
Notification may be delayed if law enforcement agency determines that notification would impede a criminal investigation.

### Identity Theft Protection Services Requirement
Mandatory for breaches involving Social Security or taxpayer ID numbers, providing no-cost services for at least 24 months and credit freeze information.

### Extended Notification
If additional residents identified after 60-day window, notification must still be provided as expediently as possible.

### Geolocation Data Coverage
As of October 1, 2023, precise geolocation data is included as personal information covered by the statute.
