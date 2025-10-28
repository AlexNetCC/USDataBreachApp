---
state: "Indiana"
state_code: "IN"
jurisdiction_type: "U.S. State"
statute_citation: "Ind. Code § 4-1-11 et seq.; § 24-4.9-1 et seq."
statute_title: "Indiana Database Security Breach Notification Act"
statute_url: "http://iga.in.gov/legislative/laws/2020/ic/titles/024"

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
legislation_bill_1_number: "S.B. 503"
legislation_bill_1_signed_date: "2005-04-26"
legislation_bill_1_effective_date: "2006-07-01"
legislation_bill_2_number: "H.E.A. 1197"
legislation_bill_2_signed_date: "2008-03-24"
legislation_bill_2_effective_date: "2008-03-24"
legislation_bill_3_number: "H.E.A. 1121"
legislation_bill_3_signed_date: "2009-05-12"
legislation_bill_3_effective_date: "2009-07-01"
legislation_bill_4_number: "H.E.A. 1341"
legislation_bill_4_signed_date: "2022-03-18"
legislation_bill_4_effective_date: "2022-03-18"
legislation_bill_5_number: "S.B. 17"
legislation_bill_5_signed_date: "2024-03-13"
legislation_bill_5_effective_date: "2024-07-01"

# ===================================================================
# :: BREACH DEFINITION
# ===================================================================
breach_definition_text: "An unauthorized acquisition of computerized data that compromises the security, confidentiality, or integrity of personal information maintained by an entity. Includes unauthorized acquisition of computerized data transferred to another medium, including paper, microfilm, or similar medium, even if data no longer in computerized format."
breach_trigger: "unauthorized_acquisition"
breach_access_alone_triggers: false
breach_acquisition_alone_triggers: true

# ===================================================================
# :: ENCRYPTION SAFE HARBOR
# ===================================================================
exemption_encryption_safe_harbor: true
exemption_encryption_safe_harbor_negated_if_key_compromised: true
exemption_encryption_description: "Unauthorized acquisition of portable electronic device on which personal information is stored does not constitute breach if all information protected by encryption and encryption key not compromised or disclosed and not in possession of unauthorized person"

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
individual_notification_timeline_days: 45
individual_notification_timeline_description: "The disclosure notification shall be made without unreasonable delay, but not more than 45 days after the discovery of the breach, and consistent with any measures necessary to determine the scope of the breach and restore the integrity of the system"
individual_notification_extensions_available: false
individual_notification_extension_max_days: 0
individual_notification_extension_request_deadline_days: 0
individual_notification_contents:
  - "Date or estimated date of breach"
  - "Description of information involved"
  - "Contact information for the entity"
individual_notification_methods:
  - "Mail"
  - "Telephone"
  - "Fax"
  - "Email, if the entity has the email address of the affected Indiana resident"

# ===================================================================
# :: SUBSTITUTE NOTIFICATION
# ===================================================================
substitute_notification_is_available: true
substitute_notification_cost_trigger: 250000
substitute_notification_affected_count_trigger: 500000
substitute_notification_insufficient_contact_info_trigger: true
substitute_notification_other_triggers: []
substitute_notification_methods:
  - "Conspicuous posting on entity website, if entity maintains one"
  - "Notice to major news reporting media in geographic area where affected residents reside"

# ===================================================================
# :: ATTORNEY GENERAL NOTIFICATION
# ===================================================================
ag_notification_is_required: true
ag_notification_threshold: 1
ag_notification_threshold_description: "Required when disclosure is made to affected residents"
ag_notification_timeline_days: 0
ag_notification_timeline_description: "If the entity makes disclosure to affected residents, the database owner shall also disclose the breach to the Attorney General"
ag_notification_recipients: null
ag_notification_contents:
  - "If disclosure is made to residents, notification to Attorney General is required"

# ===================================================================
# :: CONSUMER REPORTING AGENCY NOTIFICATION
# ===================================================================
cra_notification_is_required: true
cra_notification_threshold: 1000
cra_notification_threshold_description: "If entity required to disclose to more than 1,000 consumers"
cra_notification_timeline_days: 0
cra_notification_timeline_description: "An entity required to make a disclosure to more than 1,000 consumers shall also disclose to all nationwide consumer reporting agencies information necessary to assist in preventing fraud"
cra_notification_recipients: null
cra_notification_contents:
  - "Information necessary to assist consumer reporting agencies in preventing fraud"
  - "Personal information of affected Indiana residents"

# ===================================================================
# :: VENDOR NOTIFICATION (Third-Party Data Processors)
# ===================================================================
vendor_notification_is_required: true
vendor_notification_timeline_days: 0
vendor_notification_timeline_description: "An entity that maintains computerized data that includes personal information but does not own or license the personal information shall notify the owner of the personal information if the entity discovers that personal information was or may have been acquired by an unauthorized person"
owner_liability_for_vendor_failure: "Third-party agent must comply with notification requirement"
vendor_cooperation_required: false

# ===================================================================
# :: EXEMPTIONS
# ===================================================================
exemption_hipaa: true
exemption_hipaa_description: "Entity maintaining data security procedures under HIPAA deemed in compliance if entity's privacy, security policy, or compliance plan requires reasonable procedures to protect personal information"
exemption_glba: true
exemption_glba_description: "Entity maintaining data security procedures under Gramm-Leach-Bliley Act deemed in compliance if entity's privacy, security policy, or compliance plan requires reasonable procedures to protect personal information"
exemption_primary_regulator: false
exemption_primary_regulator_description: null
exemption_own_notification_policy: true
exemption_own_notification_policy_description: "Entity maintaining own disclosure procedures as part of information privacy policy or security policy not required to make separate disclosure if policy at least as stringent as statute requirements"
exemption_other_description: "Entity maintaining security procedures under USA Patriot Act, Executive Order 13224, Driver Privacy Protection Act, or Fair Credit Reporting Act deemed in compliance if entity complies with its privacy, security policy, or compliance plan"

# ===================================================================
# :: ENFORCEMENT
# ===================================================================
enforcement_private_right_of_action: false
enforcement_authority: "Attorney General"
enforcement_authority_is_exclusive: true
enforcement_type_damages_description: "Injunctive relief and civil penalties"

# ===================================================================
# :: PENALTIES
# ===================================================================
enforcement_penalty_per_day: 0
enforcement_penalty_per_individual: 0
enforcement_penalty_per_record: 0
enforcement_penalty_per_violation: 150000
enforcement_penalty_flat_amount: 0
enforcement_penalty_maximum: 0
enforcement_penalty_basis: "Per violation (knowingly or intentionally fails to comply)"
enforcement_penalty_notes: "$150,000 per violation for knowingly or intentionally failing to comply"

# ===================================================================
# :: SPECIAL PROVISIONS
# ===================================================================
provision_law_enforcement_delay: true
provision_law_enforcement_delay_description: "Notice may be delayed if law enforcement agency determines notification will impede criminal investigation (timing not specified in statute)"
provision_government_entities_are_subject: true
provision_government_entities_notes: "State agencies covered by § 4-1-11 with similar notification requirements"
provision_waiver_not_permitted: false
provision_notice_at_collection_required: false
provision_other_description: "Portable device encryption exception: Unauthorized acquisition of portable electronic device with encrypted personal information does not constitute breach if encryption key not compromised or disclosed. Multiple federal law compliance exemptions available (USA Patriot Act, Executive Order 13224, Driver Privacy Protection Act, Fair Credit Reporting Act)."

# ===================================================================
# :: OBSIDIAN TAGS
# ===================================================================
tags:
  - DataBreachLaws/Breach/trigger/acquisition
  - DataBreachLaws/Exempts/glba
  - DataBreachLaws/Exempts/hipaa
  - DataBreachLaws/Exempts/own-policy
  - DataBreachLaws/Exempts/state-specific
  - DataBreachLaws/Notice/AG/required/threshold/1
  - DataBreachLaws/Notice/AG/required/timing/concurrent
  - DataBreachLaws/Notice/AG/Shame-Site
  - DataBreachLaws/Notice/CRA/required/threshold/1000
  - DataBreachLaws/Notice/Consumer/45days
  - DataBreachLaws/PII/financial-accounts
  - DataBreachLaws/RiskOfHarm/not-allowed
---
# Indiana Data Breach Notification Law

## Overview
- **Statutory Citation:** `Ind. Code § 4-1-11 et seq.; § 24-4.9-1 et seq.`
- **Statute Title:** [Indiana Database Security Breach Notification Act](http://iga.in.gov/legislative/laws/2020/ic/titles/024)
- **Jurisdiction Type:** U.S. State
- **Legislative History:**
  - **Original Legislation:** S.B. 503 (signed April 26, 2005, effective July 1, 2006)
  - **Major Amendments:**
    - H.E.A. 1197 (signed March 24, 2008)
    - H.E.A. 1121 (signed May 12, 2009, effective July 1, 2009)
    - H.E.A. 1341 (signed March 18, 2022)
    - S.B. 17 (signed March 13, 2024, effective July 1, 2024)
  - **Last Verified:** September 2025

## Application & Covered Entities
Applies to any individual or legal entity that owns or licenses computerized data that includes personal information. State agencies are separately covered by § 4-1-11, which has similar individual notification requirements. Includes both private and governmental entities.

## Key Definitions

### Personal Information
(1) A Social Security number that is not encrypted or redacted, (2) an individual's first and last names, or first initial and last name, and one or more of the following data elements that are not encrypted or redacted:
- A driver's license number or state identification card number
- A credit card number
- A financial account number or debit card number in combination with a security code, password, or access code that would permit access to the person's account

OR (3) information collected by an adult oriented website operator, or their designee, under IC 24-4-23

### Exclusions
Personal information does not include information that is lawfully obtained from publicly available information or from federal, state, or local government records lawfully made available to the general public.

### Security Breach Definition
An unauthorized acquisition of computerized data that compromises the security, confidentiality, or integrity of personal information maintained by an entity. The term includes the unauthorized acquisition of computerized data that has been transferred to another medium, including paper, microfilm, or a similar medium, even if the transferred data are no longer in a computerized format.

### Encryption Exception
Unauthorized acquisition of a portable electronic device on which personal information is stored does not constitute a security breach if all personal information on the device is protected by encryption and the encryption key (i) has not been compromised or disclosed, and (ii) is not in the possession of or known to the person who, without authorization, acquired or has access to the portable electronic device.

### Good-Faith Exception
Good-faith acquisition of personal information by an employee or agent of the entity for lawful purposes of the entity does not constitute a security breach if the personal information is not used or subject to further unauthorized disclosure.

## Notification Requirements & Triggers

### Notification Obligation
An entity shall disclose the breach to affected Indiana residents if the entity knows, or should know, or should have known that the unauthorized acquisition constituting the breach has resulted in or could result in identity deception, identity theft, or fraud affecting the Indiana resident.

Notice must be provided to those whose unencrypted personal information was or may have been acquired by an unauthorized person and those whose encrypted personal information was or may have been acquired by an unauthorized person with access to the encryption key.

### Timing of Notification
The disclosure notification shall be made without unreasonable delay, but not more than **45 days** after the discovery of the breach, and consistent with any measures necessary to determine the scope of the breach and restore the integrity of the system.

### Notification Methods
Notice may be provided by one of the following methods:
- Mail
- Telephone
- Fax
- Email, if the entity has the email address of the affected Indiana resident

**Note:** State agencies are subject to slightly different notice requirements.

### Content of Notice to Individuals
- Date or estimated date of breach
- Description of information involved
- Contact information for the entity

### Attorney General Notification
If the entity makes such a disclosure to affected residents, the database owner shall also disclose the breach to the Attorney General.

### Notification to Consumer Reporting Agencies
An entity required to make a disclosure to more than **1,000** consumers shall also disclose to all nationwide consumer reporting agencies that compile and maintain files on consumers on a nationwide basis information necessary to assist the consumer reporting agency in preventing fraud, including personal information of an Indiana resident affected by the breach of the security of a system.

### Third-Party Data Notification
An entity that maintains computerized data that includes personal information but that does not own or license the personal information shall notify the owner of the personal information if the entity discovers that personal information was or may have been acquired by an unauthorized person.

### Substitute Notice Available
If an entity demonstrates that:
- The cost of the disclosure exceeds **$250,000**, OR
- The affected class of subject persons to be notified exceeds **500,000**, OR
- The entity does not have sufficient contact information

Substitute notice shall consist of all of the following:
- Conspicuous posting of the notice on the website of the entity, if the entity maintains one
- Notice to major news reporting media in the geographic area where Indiana residents affected by the breach of the security of a system reside

## Exemptions, Penalties, and Other Provisions

### Encryption Safe Harbor
The law provides a safe harbor for encrypted or redacted data.

### Own Notification Policy Exemption
Any entity that maintains its own disclosure procedures as part of an information privacy policy or a security policy is not required to make a separate disclosure under the statute if the entity's information privacy policy or security policy is at least as stringent as the disclosure requirements under the statute.

### Federal Laws Compliance
This section does not apply to an entity that maintains its own data security procedures as part of an information privacy, security policy, or compliance plan under:
- The Gramm-Leach-Bliley Act
- The Health Insurance Portability and Accountability Act of 1996 (HIPAA)
- The USA Patriot Act (P.L. 107-56)
- Executive Order 13224
- The Driver Privacy Protection Act (18 U.S.C. § 2781 et seq.)
- The Fair Credit Reporting Act (15 U.S.C. § 1681 et seq.)

If the entity's information privacy, security policy, or compliance plan requires the entity to maintain reasonable procedures to protect and safeguard from unlawful use or disclosure personal information of Indiana residents that is collected or maintained by the entity and the entity complies with the entity's information privacy, security policy, or compliance plan.

### Penalties
A person that knowingly or intentionally fails to comply with the database maintenance obligations commits a deceptive act that is actionable only by the state Attorney General. Penalties include:
- Injunctive relief
- A civil penalty of not more than **$150,000 per violation**
- Reasonable costs

### Private Right of Action
The statute does not provide for a private right of action.

## Key Provisions

### Attorney General Enforcement
A person that knowingly or intentionally fails to comply with the database maintenance obligations commits a deceptive act that is actionable only by the state Attorney General. Penalties include injunctive relief, a civil penalty of not more than $150,000 per violation, and reasonable costs.
