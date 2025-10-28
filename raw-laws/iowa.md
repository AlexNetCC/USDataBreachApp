---
state: "Iowa"
state_code: "IA"
jurisdiction_type: "U.S. State"
statute_citation: "Iowa Code § 715C.1-2"
statute_title: "Iowa Personal Information Security Breach Protection Act"
statute_url: "https://www.legis.iowa.gov/docs/code/715C.pdf"

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
legislation_bill_1_number: "S.F. 2308"
legislation_bill_1_signed_date: "2008-05-09"
legislation_bill_1_effective_date: "2008-07-01"
legislation_bill_2_number: "S.F. 2259"
legislation_bill_2_signed_date: "2014-04-03"
legislation_bill_2_effective_date: "2014-07-01"
legislation_bill_3_number: "S.F. 2177"
legislation_bill_3_signed_date: "2018-04-10"
legislation_bill_3_effective_date: "2018-07-01"

# ===================================================================
# :: BREACH DEFINITION
# ===================================================================
breach_definition_text: "Unauthorized acquisition of personal information maintained in computerized form by an entity that compromises the security, confidentiality, or integrity of the personal information. Also includes unauthorized acquisition of personal information maintained by a person in any medium, including on paper, that was transferred by the person to that medium from computerized form and that compromises the security, confidentiality, or integrity of the personal information."
breach_trigger: "unauthorized_acquisition"
breach_access_alone_triggers: false
breach_acquisition_alone_triggers: true

# ===================================================================
# :: ENCRYPTION SAFE HARBOR
# ===================================================================
exemption_encryption_safe_harbor: true
exemption_encryption_safe_harbor_negated_if_key_compromised: true
exemption_encryption_description: "Information that is encrypted, redacted, or otherwise altered by any method or technology in such a manner that name or data elements are unreadable"

# ===================================================================
# :: RISK OF HARM ANALYSIS
# ===================================================================
risk_of_harm_analysis_is_required: true
risk_of_harm_analysis_can_eliminate_notification: true
risk_of_harm_analysis_standard: "Notification not required if after appropriate investigation or consultation with law enforcement entity determines no reasonable likelihood of financial harm to Iowa residents will result from breach. Determination must be documented in writing and maintained for 5 years."
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
individual_notification_timeline_description: "In the most expeditious manner possible and without unreasonable delay, consistent with any measures necessary to sufficiently determine contact information for affected Iowa residents, determine the scope of the breach, and restore the reasonable integrity, security, and confidentiality of the data"
individual_notification_extensions_available: false
individual_notification_extension_max_days: 0
individual_notification_extension_request_deadline_days: 0
individual_notification_contents:
  - "A description of the breach of security"
  - "The approximate date of the breach of security"
  - "The type of personal information obtained as a result of the breach of security"
  - "Contact information for consumer reporting agencies"
  - "Advice to the consumer to report suspected incidents of identity theft to local law enforcement or the attorney general"
individual_notification_methods:
  - "Written notice to the last available address the entity has in its records"
  - "Electronic notice, if entity's customary method of communication is electronic or consistent with 15 U.S.C. § 7001 (E-Sign Act)"

# ===================================================================
# :: SUBSTITUTE NOTIFICATION
# ===================================================================
substitute_notification_is_available: true
substitute_notification_cost_trigger: 250000
substitute_notification_affected_count_trigger: 350000
substitute_notification_insufficient_contact_info_trigger: true
substitute_notification_other_triggers: []
substitute_notification_methods:
  - "Email notice when entity has email addresses for affected Iowa residents"
  - "Conspicuous posting on entity website, if entity maintains one"
  - "Notification to major statewide media"

# ===================================================================
# :: ATTORNEY GENERAL NOTIFICATION
# ===================================================================
ag_notification_is_required: true
ag_notification_threshold: 500
ag_notification_threshold_description: "Entity required to notify more than 500 Iowa residents"
ag_notification_timeline_days: 5
ag_notification_timeline_description: "Written notice to director of consumer protection division of Attorney General's office. Notice or receipt of notice must be provided within 5 business days of giving notice to any consumer."
ag_notification_recipients: "Director of consumer protection division of Attorney General's office"
ag_notification_contents:
  - "Notification required if 500+ Iowa residents affected"
  - "Timing: within 5 business days of consumer notification"

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
vendor_notification_timeline_description: "Any entity that maintains or otherwise possesses personal information on behalf of another entity shall notify the owner or licensor of the information of any breach of security immediately following discovery of such breach if an Iowa resident's personal information was included in the information that was breached"
owner_liability_for_vendor_failure: "Third-party agent must comply with immediate notification requirement"
vendor_cooperation_required: false

# ===================================================================
# :: EXEMPTIONS
# ===================================================================
exemption_hipaa: true
exemption_hipaa_description: "Entity subject to and complying with HIPAA and HITECH regulations"
exemption_glba: true
exemption_glba_description: "Entity subject to and complying with regulations under Gramm-Leach-Bliley Act"
exemption_primary_regulator: true
exemption_primary_regulator_description: "Entity complying with notification requirements or breach procedures under primary or functional federal regulator that provide greater protection"
exemption_own_notification_policy: false
exemption_own_notification_policy_description: null
exemption_other_description: "Entity complying with state or federal law providing greater protection or more thorough disclosure for breach"

# ===================================================================
# :: ENFORCEMENT
# ===================================================================
enforcement_private_right_of_action: false
enforcement_authority: "Attorney General"
enforcement_authority_is_exclusive: false
enforcement_type_damages_description: "Unlawful practice"

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
enforcement_penalty_notes: "Violation treated as unlawful practice; specific penalty amounts not defined in data breach statute"

# ===================================================================
# :: SPECIAL PROVISIONS
# ===================================================================
provision_law_enforcement_delay: true
provision_law_enforcement_delay_description: "Consumer notification requirements may be delayed if law enforcement agency determines notification will impede criminal investigation and agency makes written request for delay. Notification must be made after law enforcement determines notification will not compromise investigation and notifies entity in writing."
provision_government_entities_are_subject: true
provision_government_entities_notes: null
provision_waiver_not_permitted: false
provision_notice_at_collection_required: false
provision_other_description: "Risk of harm analysis with 5-year documentation retention required. Short AG notification timeline: within 5 business days of consumer notification (one of the shortest AG timelines among all states)."

# ===================================================================
# :: OBSIDIAN TAGS
# ===================================================================
tags:
  - DataBreachLaws/Breach/trigger/acquisition
  - DataBreachLaws/Exempts/federal-regulator
  - DataBreachLaws/Exempts/glba
  - DataBreachLaws/Exempts/hipaa
  - DataBreachLaws/Notice/AG/required/threshold/500
  - DataBreachLaws/Notice/AG/required/timing/after-consumer
  - DataBreachLaws/Notice/AG/Shame-Site
  - DataBreachLaws/Notice/CRA/not-required
  - DataBreachLaws/Notice/Consumer/asap
  - DataBreachLaws/PII/biometric
  - DataBreachLaws/PII/financial-accounts
  - DataBreachLaws/RiskOfHarm/allowed
---

# Iowa Data Breach Notification Law

## Overview
- **Statutory Citation:** `Iowa Code § 715C.1-2`
- **Statute Title:** [Iowa Personal Information Security Breach Protection Act](https://www.legis.iowa.gov/docs/code/715C.pdf)
- **Jurisdiction Type:** U.S. State
- **Legislative History:**
  - **Original Legislation:** S.F. 2308 (signed May 9, 2008, effective July 1, 2008)
  - **Major Amendments:**
    - S.F. 2259 (signed April 3, 2014, effective July 1, 2014)
    - S.F. 2177 (signed April 10, 2018, effective July 1, 2018)
  - **Last Verified:** September 2025

## Application & Covered Entities
Applies to any individual, government, legal or commercial entity that owns or licenses computerized data that includes an Iowa resident's personal information that is used in the course of the entity's business, vocation, occupation, or volunteer activities and that was subject to a breach of security. Includes both private and governmental entities.

## Key Definitions

### Personal Information
An individual's first name or first initial and last name in combination with any one or more of the following data elements that relate to the individual if any of the data elements are not encrypted, redacted, or otherwise altered by any method or technology in such a manner that the name or data elements are unreadable or are encrypted, redacted, or otherwise altered by any method or technology but the keys to unencrypt, un-redact, or otherwise read the data elements have also been obtained through the breach of security:
- Social Security number
- Driver's license number or other unique identification number created or collected by a government body
- Account number, credit card number, or debit card number in combination with any required security code, access code, or password that would permit access to an individual's financial account
- Account number or credit card number or debit card number in combination with any required expiration date, security code, access code, or password that would permit access to an individual's financial account
- Unique electronic identifier or routing code, in combination with any required security code, access code, or password that would permit access to an individual's financial account
- Unique biometric data, such as a fingerprint, retina or iris image, or other unique physical representation or digital representation of biometric data

### Exclusions
Personal information does not include information that is lawfully obtained from publicly available sources, or from federal, state, or local government records lawfully made available to the general public.

### Breach of Security
Unauthorized acquisition of personal information maintained in computerized form by an entity that compromises the security, confidentiality, or integrity of the personal information. Also, unauthorized acquisition of personal information maintained by a person in any medium, including on paper, that was transferred by the person to that medium from computerized form and that compromises the security, confidentiality, or integrity of the personal information.

### Good-Faith Exception
Good-faith acquisition of personal information by an entity or that entity's employee or agent for a legitimate purpose of that entity is not a breach of security, provided that the personal information is not used in violation of applicable law or in a manner that harms or poses an actual threat to the security, confidentiality, or integrity of the personal information.

## Notification Requirements & Triggers

### Notification Obligation
An entity to which the statute applies shall give notice of the breach of security following discovery, or receipt of notification of such breach, to any Iowa resident whose personal information was included in the information that was breached.

**Exception:** Notification is not required if, after an appropriate investigation or after consultation with the relevant federal, state, or local agencies responsible for law enforcement, the entity determines that no reasonable likelihood of financial harm to the Iowa residents whose personal information has been acquired has resulted or will result from the breach. Such a determination must be documented in writing and the documentation must be maintained for 5 years.

### Timing of Notification
The notification shall be made in the most expeditious manner possible and without unreasonable delay, consistent with any measures necessary to sufficiently determine contact information for the affected Iowa residents, determine the scope of the breach, and restore the reasonable integrity, security, and confidentiality of the data.

### Notification Methods
Notification may be provided by one of the following methods:
- Written notice to the last available address the entity has in the entity's records
- Electronic notice, if the entity's customary method of communication with the resident is by electronic means or is consistent with 15 U.S.C. § 7001 (E-Sign Act)

### Content of Notice to Individuals
Notice shall include, at a minimum, all of the following:
- A description of the breach of security
- The approximate date of the breach of security
- The type of personal information obtained as a result of the breach of security
- Contact information for consumer reporting agencies
- Advice to the consumer to report suspected incidents of identity theft to local law enforcement or the attorney general

### Attorney General Notification
An entity required to notify more than **500** Iowa residents must give written notice to the director of the consumer protection division of the Attorney General's office.

**Timing:** Notice or receipt of notice must be provided within **5 business days** of giving notice to any consumer.

### Third-Party Data Notification
Any entity that maintains or otherwise possesses personal information on behalf of another entity shall notify the owner or licensor of the information of any breach of security immediately following discovery of such breach if an Iowa resident's personal information was included in the information that was breached.

### Substitute Notice Available
If the entity demonstrates that:
- The cost of providing notice would exceed **$250,000**, OR
- The affected class of Iowa residents to be notified exceeds **350,000** persons, OR
- The entity does not have sufficient contact information

Substitute notice shall consist of the following:
- Email notice when the entity has email addresses for the affected Iowa residents
- Conspicuous posting of the notice or a link to the notice on the entity's website, if the entity maintains one
- Notification to major statewide media

## Exemptions, Penalties, and Other Provisions

### Encryption Safe Harbor
The law provides a safe harbor for encrypted, redacted, or otherwise altered data.

### Federal Regulator Exemption
This statute does not apply to an entity that complies with notification requirements or breach of security procedures that provide greater protection to personal information and at least as thorough disclosure requirements than that provided by this section pursuant to the rules, regulations, procedures, guidance, or guidelines established by the entity's primary or functional federal regulator.

### More Protective Law Exemption
This statute does not apply to an entity that complies with a state or federal law that provides greater protection to personal information and at least as thorough disclosure requirements for a breach of security or personal information than that provided by the statute.

### GLBA Compliance
This statute does not apply to an entity that is subject to and complies with regulations promulgated pursuant to Title V of the Gramm-Leach-Bliley Act.

### HIPAA/HITECH Compliance
This statute does not apply to an entity that is subject to and complies with the regulations promulgated pursuant to Title II, Subtitle F of the Health Insurance Portability and Accountability Act (HIPAA) and Title XIII, Subtitle D of the Health Information Technology for Economic and Clinical Health Act (HITECH).

### Penalties
A violation is an unlawful practice. The Attorney General has enforcement authority over this statute.

### Private Right of Action
No explicit private right of action is provided.

## Key Provisions

### Delay for Law Enforcement
The consumer notification requirements of this section may be delayed if a law enforcement agency determines that the notification will impede a criminal investigation and the agency has made a written request that the notification be delayed. The notification required by this section shall be made after the law enforcement agency determines that the notification will not compromise the investigation and notifies the entity required to give notice in writing.

### Attorney General Enforcement
The Attorney General has enforcement authority over this statute.
