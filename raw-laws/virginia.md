---
state: "Virginia"
state_code: "VA"
jurisdiction_type: "U.S. State"
statute_citation: "Va. Code § 18.2-186.6"
statute_title: "Virginia Personal Information Privacy Act"
statute_url: "https://law.lis.virginia.gov/vacode/title18.2/chapter6/section18.2-186.6/"

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
legislation_bill_1_number: "H.B. 2125"
legislation_bill_1_signed_date: "2008-03-13"
legislation_bill_1_effective_date: "2008-07-01"
legislation_bill_2_number: "H.B. 1648"
legislation_bill_2_signed_date: "2015-03-28"
legislation_bill_2_effective_date: "2015-07-01"
legislation_bill_3_number: "H.B. 2059"
legislation_bill_3_signed_date: "2020-03-28"
legislation_bill_3_effective_date: "2020-07-01"
legislation_bill_4_number: "H.B. 5031"
legislation_bill_4_signed_date: "2020-11-09"
legislation_bill_4_effective_date: "2020-07-01"
legislation_bill_5_number: "H.B. 2206"
legislation_bill_5_signed_date: "2022-03-25"
legislation_bill_5_effective_date: "2022-07-01"

# ===================================================================
# :: BREACH DEFINITION
# ===================================================================
breach_definition_text: "Unauthorized access to and acquisition of unencrypted and unredacted computerized data that compromises the security or confidentiality of personal information maintained by an entity as part of a database of personal information regarding multiple individuals and that causes, or the entity reasonably believes has caused, or will cause, identity theft or another fraud."
breach_trigger: "unauthorized_access_and_acquisition"
breach_access_alone_triggers: false
breach_acquisition_alone_triggers: false

# ===================================================================
# :: ENCRYPTION SAFE HARBOR
# ===================================================================
exemption_encryption_safe_harbor: true
exemption_encryption_safe_harbor_negated_if_key_compromised: true
exemption_encryption_description: "Encrypted and redacted data"

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
individual_notification_timeline_description: "Without unreasonable delay and consistent with legitimate needs of law enforcement and measures necessary to determine scope of breach"
individual_notification_extensions_available: false
individual_notification_extension_max_days: 0
individual_notification_extension_request_deadline_days: 0
individual_notification_contents:
  - "Date or estimated date of breach"
  - "Description of information involved"
  - "Contact information for the entity"
individual_notification_methods:
  - "Written notice"
  - "Electronic notice (with express consent or E-Sign compliant)"

# ===================================================================
# :: SUBSTITUTE NOTIFICATION
# ===================================================================
substitute_notification_is_available: true
substitute_notification_cost_trigger: 50000
substitute_notification_affected_count_trigger: 100000
substitute_notification_insufficient_contact_info_trigger: true
substitute_notification_other_triggers: []
substitute_notification_methods:
  - "Email notice"
  - "Conspicuous posting on entity website"
  - "Notification to major media"

# ===================================================================
# :: ATTORNEY GENERAL NOTIFICATION
# ===================================================================
ag_notification_is_required: true
ag_notification_threshold: 1000
ag_notification_threshold_description: "If more than 1,000 residents to be notified; all breaches notified without unreasonable delay"
ag_notification_timeline_days: 0
ag_notification_timeline_description: "Without unreasonable delay following entity's discovery of breach"
ag_notification_recipients: "Attorney General"
ag_notification_contents:
  - "Nature of the breach"
  - "Types of personal information involved in breach"
  - "Approximate number of affected residents"
  - "Any offer of credit protection or monitoring services provided at no cost and length of time services offered"
  - "Contact information for the entity making notification"

# ===================================================================
# :: CONSUMER REPORTING AGENCY NOTIFICATION
# ===================================================================
cra_notification_is_required: true
cra_notification_threshold: 1000
cra_notification_threshold_description: "If entity required to notify more than 1,000 individuals at one time"
cra_notification_timeline_days: 0
cra_notification_timeline_description: "Without unreasonable delay"
cra_notification_recipients: "Major consumer reporting agencies"
cra_notification_contents:
  - "Timing, distribution, and content of notices"

# ===================================================================
# :: VENDOR NOTIFICATION (Third-Party Data Processors)
# ===================================================================
vendor_notification_is_required: true
vendor_notification_timeline_days: 0
vendor_notification_timeline_description: "Without unreasonable delay following discovery"
owner_liability_for_vendor_failure: "Third-party must notify owner/licensee without unreasonable delay"
vendor_cooperation_required: false

# ===================================================================
# :: EXEMPTIONS
# ===================================================================
exemption_hipaa: false
exemption_hipaa_description: null
exemption_glba: true
exemption_glba_description: "Entities subject to and in compliance with Title V of federal Gramm-Leach-Bliley Act"
exemption_primary_regulator: true
exemption_primary_regulator_description: "Entity maintaining notification procedures per primary or functional federal or state regulator rules, regulations, or guidance"
exemption_own_notification_policy: true
exemption_own_notification_policy_description: "Entity with own notification procedures consistent with statute requirements"
exemption_other_description: null

# ===================================================================
# :: ENFORCEMENT
# ===================================================================
enforcement_private_right_of_action: true
enforcement_authority: "Attorney General and private individuals"
enforcement_authority_is_exclusive: false
enforcement_type_damages_description: "Attorney General may impose civil penalty up to $150,000 per breach; Private right of action for recovery of direct economic damages and attorney's fees for prevailing party"

# ===================================================================
# :: PENALTIES
# ===================================================================
enforcement_penalty_per_day: 0
enforcement_penalty_per_individual: 0
enforcement_penalty_per_record: 0
enforcement_penalty_per_violation: 0
enforcement_penalty_flat_amount: 0
enforcement_penalty_maximum: 150000
enforcement_penalty_basis: "Per breach"
enforcement_penalty_notes: "AG can impose up to $150,000 per breach. Private right of action available for direct economic damages plus attorney's fees for prevailing party."

# ===================================================================
# :: SPECIAL PROVISIONS
# ===================================================================
provision_law_enforcement_delay: true
provision_law_enforcement_delay_description: "Entity may delay notification if law enforcement agency determines and advises that notification will impede criminal investigation or jeopardize national or homeland security. Entity must notify individuals without unreasonable delay after law enforcement determines notification no longer impedes investigation."
provision_government_entities_are_subject: true
provision_government_entities_notes: null
provision_waiver_not_permitted: false
provision_notice_at_collection_required: false
provision_other_description: "Both access AND acquisition required. Breach definition includes reasonable belief that identity theft/fraud has occurred or will occur. Private right of action for direct economic damages. AG penalty up to $150,000 per breach. Lower substitute thresholds: $50,000 cost OR 100,000 affected (vs typical $100K-$250K OR 500K). NO HIPAA exemption (unusual). GLBA and own policy exemptions available. Broad PII definition includes biometric and genetic data. 5 legislative amendments (2008-2022)."

# ===================================================================
# :: OBSIDIAN TAGS
# ===================================================================
tags:
  - DataBreachLaws/Breach/trigger/access-and-acquisition
  - DataBreachLaws/Enforcement/private-right-of-action
  - DataBreachLaws/Exempts/glba
  - DataBreachLaws/Exempts/own-policy
  - DataBreachLaws/Exempts/primary-regulator
  - DataBreachLaws/Notice/AG/required/threshold/1000
  - DataBreachLaws/Notice/AG/required/timing/asap
  - DataBreachLaws/Notice/AG/Shame-Site
  - DataBreachLaws/Notice/CRA/required/threshold/1000
  - DataBreachLaws/Notice/Consumer/asap
  - DataBreachLaws/PII/biometric
  - DataBreachLaws/PII/financial-accounts
  - DataBreachLaws/PII/genetic
  - DataBreachLaws/PII/government-id
  - DataBreachLaws/RiskOfHarm/not-allowed
---

# Virginia Data Breach Notification Law

## Overview
- **Statutory Citation:** `Va. Code § 18.2-186.6`
- **Statute Title:** [Virginia Personal Information Privacy Act](https://law.lis.virginia.gov/vacode/title18.2/chapter6/section18.2-186.6/)
- **Jurisdiction Type:** U.S. State
- **Legislative History:**
  - **Original Legislation:** H.B. 2125 (signed March 13, 2008, effective July 1, 2008)
  - **Major Amendments:**
    - H.B. 1648 (signed March 28, 2015, effective July 1, 2015)
    - H.B. 2059 (signed March 28, 2020, effective July 1, 2020)
    - H.B. 5031 (signed November 9, 2020, effective July 1, 2020)
    - H.B. 2206 (signed March 25, 2022, effective July 1, 2022)
  - **Last Verified:** September 2025

## Application & Covered Entities
Any individual, corporation, partnership, trust, estate, cooperative, association, or other commercial or legal entity that acquires, owns, or licenses personal information about Virginia residents.

## Key Definitions

### Personal Information
The first name or first initial and last name in combination with and linked to any one or more of the following data elements that relate to a resident, when the data elements are neither encrypted nor redacted:
- Social Security number
- Driver's license number or state identification card number issued in lieu of a driver's license number
- Account number, credit card number, or debit card number in combination with any required security code, access code, or password that would permit access to a resident's financial account
- Passport number
- Military identification number
- Other identification number issued by the federal government
- Unique biometric data such as a fingerprint, voice print, or retina or iris image
- Unique genetic information

### Exclusions
Personal information does not include information that is lawfully obtained from publicly available information, or from federal, state, or local government records lawfully made available to the general public.

### Breach of Security
Unauthorized access to and acquisition of unencrypted and unredacted computerized data that compromises the security or confidentiality of personal information maintained by an Entity as part of a database of personal information regarding multiple individuals and that causes, or the Entity reasonably believes has caused, or will cause, identity theft or another fraud to any resident of Virginia.

### Good-Faith Exception
Unauthorized access to and acquisition of personal information that does not cause, and the Entity reasonably believes is not likely to cause, identity theft or other fraud to any resident. Also, good-faith acquisition of personal information by an employee or agent of the Entity for the purposes of the Entity, if the personal information is not used or subject to further unauthorized disclosure.

## Notification Requirements & Triggers

### Notification Obligation
An Entity that owns or licenses computerized data that includes personal information shall disclose any breach of the security of the system to any resident of Virginia whose unencrypted or unredacted personal information was accessed and acquired by an unauthorized person or is reasonably believed to have been accessed and acquired by an unauthorized person, when access and acquisition causes, or the Entity reasonably believes has caused or will cause, identity theft or other fraud.

### Timing of Notification
Disclosure shall be made without unreasonable delay and shall be consistent with the legitimate needs of law enforcement and consistent with any measures necessary to determine the scope of the breach, identify the individuals affected, and restore the reasonable integrity of the computerized data system.

### Notification Methods
Notice may be provided by one of the following methods:
- Written notice
- Electronic notice, if (i) the individual who is subject to the notice has expressly consented to receiving such notice electronically and a log of each such consent is retained by the Entity in accordance with federal and state law, or (ii) consistent with 15 U.S.C. § 7001 (E-Sign Act)
- Substitute notice, if the Entity demonstrates that the cost of providing notice will exceed **$50,000**, the affected class of individuals to be notified exceeds **100,000**, or the Entity does not have sufficient contact information to provide notice

### Content of Notice to Individuals
- Date or estimated date of breach
- Description of information involved
- Contact information for the entity

### Attorney General Notification
An Entity that has experienced a breach of the security of the system shall notify the Attorney General:
- Of any breach of the security of the system without unreasonable delay following the Entity's discovery of the breach
- If more than **1,000** residents are to be notified of the timing, distribution, and content of the notice

Notification to the Attorney General must include a description of:
- The nature of the breach
- The types of personal information involved in the breach
- The approximate number of affected residents
- Any offer of credit protection or monitoring services provided at no cost to the consumer and the length of time for which such services are offered
- Contact information for the Entity making the notification

### Consumer Reporting Agency Notification
If an Entity is required to notify more than **1,000** individuals at one time, the Entity shall also notify, without unreasonable delay, all consumer reporting agencies that compile and maintain files on consumers on a nationwide basis, as defined in 15 U.S.C. § 1681a(p), of the timing, distribution, and content of the notice.

### Third-Party Data Notification
An Entity that maintains computerized data that includes personal information that the Entity does not own or license shall notify the owner or licensee of the information without unreasonable delay following discovery of any breach of the security of the system, if the personal information was accessed and acquired by an unauthorized person or the Entity reasonably believes the personal information was accessed and acquired by an unauthorized person.

## Exemptions, Penalties, and Other Provisions

### Encryption Safe Harbor
The law provides a safe harbor for encrypted and redacted data.

### Own Notification Policy Exemption
An Entity that maintains notification procedures pursuant to the rules, regulations, procedures, guidance, or guidelines established by its primary or functional federal or state regulator is deemed to be in compliance with this section if it notifies affected individuals in accordance with the requirements of those rules, regulations, procedures, guidance, or guidelines in the event of a breach of the security of the system.

### Gramm-Leach-Bliley Act Exemption
An Entity that is subject to and in compliance with Title V of the federal Gramm-Leach-Bliley Act shall be deemed to be in compliance with this section if it notifies affected individuals in accordance with the provisions of Title V of that Act in the event of a breach of the security of the system.

### Penalties
The Attorney General may impose a civil penalty upon any Entity that fails to comply with any requirement imposed under this section, not to exceed **$150,000** per breach. The Attorney General may bring an action in the name of the Commonwealth to recover such penalty and shall pay any amount collected into the state treasury.

### Private Right of Action
Any individual whose personal information is accessed and acquired by an unauthorized person due to a violation of this section may bring a civil action against the Entity for recovery of direct economic damages as provided in this section. The prevailing party in such action shall be entitled to recover costs, including reasonable attorney fees.

## Key Provisions

### Delay for Law Enforcement
An Entity may delay notification if a law enforcement agency determines and advises the Entity that the notification will impede a criminal investigation or homeland or national security. The Entity shall notify individuals without unreasonable delay after the law enforcement agency determines that notification no longer impedes the investigation or jeopardizes national or homeland security.

### Attorney General Enforcement
The Attorney General has enforcement authority and may bring civil actions for violations.
