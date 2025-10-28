---
# ===================================================================
# :: CORE INFORMATION
# ===================================================================
state: "Louisiana"
state_code: "LA"
jurisdiction_type: "U.S. State"
statute_citation: "La. Rev. Stat. § 51:3071 et seq.; La. Admin. Code tit. 16, pt. III, § 701"
statute_title: "Louisiana Database Security Breach Notification Law"
statute_url: "http://legis.la.gov/Legis/Law.aspx?d=322027"

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
legislation_bill_1_number: "S.B. 205"
legislation_bill_1_signed_date: "2005-07-12"
legislation_bill_1_effective_date: "2006-01-01"
legislation_bill_2_number: "S.B. 361"
legislation_bill_2_signed_date: "2018-05-16"
legislation_bill_2_effective_date: "2018-08-01"

# ===================================================================
# :: BREACH DEFINITION
# ===================================================================
breach_definition_text: "The compromise of the security, confidentiality, or integrity of computerized data that results in, or there is a reasonable basis to conclude has resulted in, the unauthorized acquisition of and access to personal information maintained by an entity."
breach_trigger: "unauthorized_acquisition"
breach_access_alone_triggers: false
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
risk_of_harm_analysis_is_required: false
risk_of_harm_analysis_can_eliminate_notification: true
risk_of_harm_analysis_standard: "Notification not required if after reasonable investigation entity determines that there is no reasonable likelihood of harm to Louisiana residents. Entity shall retain copy of written determination and supporting documentation for 5 years and provide copy to Attorney General upon request."
risk_of_harm_analysis_documentation_required: true
risk_of_harm_analysis_documentation_retention_years: 5
risk_of_harm_analysis_ag_notification_required: false
risk_of_harm_analysis_ag_notification_threshold: 0
risk_of_harm_analysis_ag_notification_timeline_days: 0

# ===================================================================
# :: INDIVIDUAL NOTIFICATION
# ===================================================================
individual_notification_is_required: true
individual_notification_timeline_days: 60
individual_notification_timeline_description: "Most expedient time possible and without unreasonable delay, but not later than 60 days from discovery of breach, consistent with measures to determine scope of breach, prevent further disclosures, and restore reasonable integrity of data system. When notification delayed by law enforcement request or due to measures needed, entity shall provide Attorney General written reasons within 60-day period."
individual_notification_extensions_available: true
individual_notification_extension_max_days: 0
individual_notification_extension_request_deadline_days: 60
individual_notification_contents:
  - "Date or estimated date of breach"
  - "Description of information involved"
  - "Contact information for the entity"
individual_notification_methods:
  - "Written notification"
  - "Electronic notification, if consistent with 15 U.S.C. § 7001 (E-Sign Act)"

# ===================================================================
# :: SUBSTITUTE NOTIFICATION
# ===================================================================
substitute_notification_is_available: true
substitute_notification_cost_trigger: 100000
substitute_notification_affected_count_trigger: 100000
substitute_notification_insufficient_contact_info_trigger: true
substitute_notification_other_triggers: []
substitute_notification_methods:
  - "Email notification when entity has email addresses for subject persons"
  - "Conspicuous posting on entity website, if entity maintains one"
  - "Notification to major statewide media"

# ===================================================================
# :: ATTORNEY GENERAL NOTIFICATION
# ===================================================================
ag_notification_is_required: true
ag_notification_threshold: 1
ag_notification_threshold_description: "Required when notice to Louisiana citizens is required by statute (threshold of 1 affected Louisiana resident)"
ag_notification_timeline_days: 10
ag_notification_timeline_description: "Written notice to Consumer Protection Section of Attorney General's Office. Notice must be received within 10 days of distribution of notice to Louisiana citizens. Each day notice not received is deemed separate violation."
ag_notification_recipients: "Consumer Protection Section of Attorney General's Office"
ag_notification_contents:
  - "Written notice detailing the breach of security"
  - "Names of all Louisiana citizens affected by breach"

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
vendor_notification_timeline_description: "Following discovery of breach if personal information was or is reasonably believed to have been acquired by unauthorized person"
owner_liability_for_vendor_failure: "Third-party agent must comply with notification requirement"
vendor_cooperation_required: false

# ===================================================================
# :: EXEMPTIONS
# ===================================================================
exemption_hipaa: false
exemption_hipaa_description: null
exemption_glba: false
exemption_glba_description: null
exemption_primary_regulator: true
exemption_primary_regulator_description: "Financial institutions in compliance with Federal Interagency Guidance Response Programs for Unauthorized Access to Consumer Information and Customer Notice (issued March 7, 2005, by Federal Reserve, FDIC, OCC, OTS) and revisions deemed in compliance"
exemption_own_notification_policy: true
exemption_own_notification_policy_description: "Entity maintaining notification procedures as part of information security policy, consistent with timing requirements, deemed in compliance if notifies subject persons in accordance with policy"
exemption_other_description: null

# ===================================================================
# :: ENFORCEMENT
# ===================================================================
enforcement_private_right_of_action: true
enforcement_authority: "Attorney General and Private Parties"
enforcement_authority_is_exclusive: false
enforcement_type_damages_description: "Actual damages resulting from failure to disclose timely that breach resulted in disclosure of personal information"

# ===================================================================
# :: PENALTIES
# ===================================================================
enforcement_penalty_per_day: 5000
enforcement_penalty_per_individual: 0
enforcement_penalty_per_record: 0
enforcement_penalty_per_violation: 5000
enforcement_penalty_flat_amount: 0
enforcement_penalty_maximum: 0
enforcement_penalty_basis: "per_violation"
enforcement_penalty_notes: "$5,000 per violation; each day notice not received by Attorney General is deemed separate violation. Private right of action available for actual damages."

# ===================================================================
# :: SPECIAL PROVISIONS
# ===================================================================
provision_law_enforcement_delay: true
provision_law_enforcement_delay_description: "Notice may be delayed if law enforcement agency determines notice will impede criminal investigation. Notice required must be made without unreasonable delay and as soon as possible after law enforcement determines notification will no longer impede investigation."
provision_government_entities_are_subject: true
provision_government_entities_notes: null
provision_waiver_not_permitted: false
provision_notice_at_collection_required: false
provision_other_description: "60-day hard deadline for consumer notification from discovery of breach. AG notification required for ANY breach affecting Louisiana residents (threshold: 1) within 10 days of consumer notification. Extension available at AG's discretion upon written request. Per-day penalty structure creates significant compliance pressure."

# ===================================================================
# :: OBSIDIAN TAGS
# ===================================================================
tags:
  - DataBreachLaws/Breach/trigger/acquisition
  - DataBreachLaws/Enforcement/private-right-of-action
  - DataBreachLaws/Exempts/federal-regulator
  - DataBreachLaws/Exempts/own-policy
  - DataBreachLaws/Notice/AG/required/threshold/1
  - DataBreachLaws/Notice/AG/required/timing/after-consumer
  - DataBreachLaws/Notice/CRA/not-required
  - DataBreachLaws/Notice/Consumer/60days
  - DataBreachLaws/PII/biometric
  - DataBreachLaws/PII/government-id
  - DataBreachLaws/RiskOfHarm/allowed
---

# Louisiana Data Breach Notification Law

## Overview
- **Statutory Citation:** `La. Rev. Stat. § 51:3071 et seq.; La. Admin. Code tit. 16, pt. III, § 701`
- **Statute Title:** [Louisiana Database Security Breach Notification Law](http://legis.la.gov/Legis/Law.aspx?d=322027)
- **Jurisdiction Type:** U.S. State
- **Legislative History:**
  - **Original Legislation:** S.B. 205 (signed July 12, 2005 as Act 499, effective January 1, 2006)
  - **Major Amendments:**
    - S.B. 361 (signed May 16, 2018 as Act 382, effective August 1, 2018)
  - **Last Verified:** September 2025

## Application & Covered Entities
Applies to any individual, any legal entity that conducts business in Louisiana, or any agency that owns or licenses computerized data that includes personal information. Includes both private and governmental entities.

## Key Definitions

### Personal Information
The first name or first initial and last name of a Louisiana resident in combination with any one or more of the following data elements, when the name or the data element is not encrypted or redacted:
- Social Security number
- Driver's license number or state identification card number
- Account number, credit card number, or debit card number in combination with any required security code, access code, or password that would permit access to an individual's financial account
- Passport number
- Biometric data (data generated by automatic measurements of an individual's biological characteristics, such as fingerprints, voice print, eye retina or iris, or other unique biological characteristic that is used by the owner or licensee to uniquely authenticate an individual's identity when the individual accesses a system or account)

### Exclusions
Personal information shall not include publicly available information that is lawfully made available to the general public from federal, state, or local government records.

### Security Breach Definition
The compromise of the security, confidentiality, or integrity of computerized data that results in, or there is a reasonable basis to conclude has resulted in, the unauthorized acquisition of and access to personal information maintained by an entity.

### Good-Faith Exception
Good-faith acquisition of personal information by an employee of the entity for the purposes of the entity is not a breach of the security of the system, provided that the personal information is not used for, or is not subject to, unauthorized disclosure.

## Notification Requirements & Triggers

### Notification Obligation
An entity shall notify any resident of the state whose personal information was, or is reasonably believed to have been, acquired by an unauthorized person.

**Exception:** Notification is not required if after a reasonable investigation the entity determines that there is no reasonable likelihood of harm to Louisiana residents. The entity shall retain a copy of the written determination and supporting documentation for 5 years and provide a copy to the Attorney General upon request.

### Timing of Notification
In the most expedient time possible and without unreasonable delay, but not later than **60 days** from discovery of the breach, consistent with any measures necessary to determine the scope of the breach, prevent further disclosures, and restore the reasonable integrity of the data system.

**Extensions:** When notification is delayed by law enforcement request or due to a determination by the entity that measures are necessary to determine the scope of the breach, prevent further disclosures, and restore the reasonable integrity of the data system, the entity shall provide the Attorney General the reasons for the delay in writing within the 60-day notification period. Upon receipt of the written reasons, the Attorney General shall allow a reasonable extension of time to provide the consumer notification.

### Notification Methods
Notice may be provided by one of the following methods:
- Written notification
- Electronic notification, if the notification provided is consistent with 15 U.S.C. § 7001 (E-Sign Act)

### Content of Notice to Individuals
- Date or estimated date of breach
- Description of information involved
- Contact information for the entity

### Attorney General Notification
When notice to Louisiana citizens is required by the statute, the entity shall provide written notice detailing the breach of the security of the system to the Consumer Protection Section of the Attorney General's Office.

**Timing:** Notice must include the names of all Louisiana citizens affected by the breach. Notice to the state Attorney General shall be timely if received within **10 days** of distribution of notice to Louisiana citizens. Each day that notice is not received by the state Attorney General shall be deemed a separate violation.

### Third-Party Data Notification
Any individual, corporation, partnership, sole proprietorship, joint stock company, joint venture, or any other legal entity that maintains computerized data that includes personal information that the agency or person does not own shall notify the owner or licensee of the information if the personal information was, or is reasonably believed to have been, acquired by an unauthorized person through a breach of security of the system containing such data, following discovery by the agency or person of a breach of the security system.

### Substitute Notice Available
If an entity demonstrates that:
- The cost of providing notification would exceed **$100,000**, OR
- The affected class of persons to be notified exceeds **100,000**, OR
- The entity does not have sufficient contact information

Substitute notice shall consist of all of the following:
- Email notification when the entity has email addresses for the subject persons
- Conspicuous posting of the notification on the entity's website, if the entity maintains one
- Notification to major statewide media

## Exemptions, Penalties, and Other Provisions

### Encryption Safe Harbor
The law provides a safe harbor for encrypted or redacted data.

### Own Notification Policy Exemption
Any entity that maintains notification procedures as part of its information security policy for the treatment of personal information that are otherwise consistent with the timing requirements of the statute shall be deemed to be in compliance with the notification requirements of the statute if the entity notifies the subject persons in accordance with the policy and procedures in the event of a breach of security of the system.

### Federal Interagency Guidance
A financial institution that is subject to and in compliance with the Federal Interagency Guidance Response Programs for Unauthorized Access to Consumer Information and Customer Notice, issued on March 7, 2005, by the Board of Governors of the Federal Reserve System, the Federal Deposit Insurance Corporation, the Office of the Comptroller of the Currency, and the Office of Thrift Supervision, and any revisions, additions, or substitutions relating to said interagency guidance, shall be deemed to be in compliance.

### Penalties
A civil action may be instituted to recover actual damages resulting from the failure to disclose in a timely manner to a person that there has been a breach of the security system resulting in the disclosure of a person's personal information. Failure to provide timely notice may be punishable by a fine not to exceed **$5,000 per violation**. Notice to the state Attorney General shall be timely if received within 10 days of distribution of notice to Louisiana citizens. Each day that notice is not received by the state Attorney General shall be deemed a separate violation.

### Private Right of Action
A civil action may be instituted to recover actual damages resulting from the failure to disclose in a timely manner to a person that there has been a breach of the security system resulting in the disclosure of a person's personal information.

## Key Provisions

### Delay for Law Enforcement
Notice may be delayed if a law enforcement agency determines that the notice will impede a criminal investigation. Notice required by the statute must be made without unreasonable delay and as soon as possible after the law enforcement agency determines that notification will no longer impede the investigation.
