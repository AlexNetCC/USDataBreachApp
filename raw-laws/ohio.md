---
# ===================================================================
# :: CORE INFORMATION
# ===================================================================
state: "Ohio"
state_code: "OH"
jurisdiction_type: "U.S. State"
statute_citation: "Ohio Rev. Code 1347.12, 1349.19"
statute_title: "Ohio Personal Information System Breach Notification"
statute_url: "http://codes.ohio.gov/orc/1349.19v1"

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
legislation_bill_1_number: "H.B. 104"
legislation_bill_1_signed_date: "2005-11-17"
legislation_bill_1_effective_date: "2006-02-17"
legislation_bill_2_number: "S.B. 126"
legislation_bill_2_signed_date: "2006-12-29"
legislation_bill_2_effective_date: "2007-03-30"

# ===================================================================
# :: BREACH DEFINITION
# ===================================================================
breach_definition_text: "Unauthorized access to and acquisition of computerized data that compromises the security or confidentiality of personal information owned or licensed by an entity and that causes, reasonably is believed to have caused, or reasonably is believed will cause a material risk of identity theft or other fraud."
breach_trigger: "unauthorized_access_and_acquisition"
breach_access_alone_triggers: false
breach_acquisition_alone_triggers: false

# ===================================================================
# :: ENCRYPTION SAFE HARBOR
# ===================================================================
exemption_encryption_safe_harbor: true
exemption_encryption_safe_harbor_negated_if_key_compromised: true
exemption_encryption_description: "Encrypted data safe harbor"

# ===================================================================
# :: RISK OF HARM ANALYSIS
# ===================================================================
risk_of_harm_analysis_is_required: true
risk_of_harm_analysis_can_eliminate_notification: true
risk_of_harm_analysis_standard: "Material risk of identity theft or other fraud (risk of harm analysis is built into breach definition)"
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
individual_notification_timeline_description: "Most expedient time possible but not later than 45 days following discovery or notification of the breach"
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
  - "Electronic notice (if primary method of communication)"

# ===================================================================
# :: SUBSTITUTE NOTIFICATION
# ===================================================================
substitute_notification_is_available: true
substitute_notification_cost_trigger: 250000
substitute_notification_affected_count_trigger: 500000
substitute_notification_insufficient_contact_info_trigger: true
substitute_notification_other_triggers:
  - "Small business exception: 10 employees or fewer and cost exceeds $10,000"
substitute_notification_methods:
  - "Email notice when entity has email address for resident"
  - "Conspicuous posting on entity website, if entity maintains one"
  - "Notification to major media outlets (75% of Ohio population coverage)"
  - "Small business: Paid advertisement in local newspaper (at least 1/4 page, published once weekly for 3 consecutive weeks)"

# ===================================================================
# :: ATTORNEY GENERAL NOTIFICATION
# ===================================================================
ag_notification_is_required: false
ag_notification_threshold: null
ag_notification_threshold_description: "No AG notification requirement"
ag_notification_timeline_days: null
ag_notification_timeline_description: null
ag_notification_recipients: null
ag_notification_contents: []

# ===================================================================
# :: CONSUMER REPORTING AGENCY NOTIFICATION
# ===================================================================
cra_notification_is_required: true
cra_notification_threshold: 1000
cra_notification_threshold_description: "If entity notifies more than 1,000 residents of Ohio"
cra_notification_timeline_days: 0
cra_notification_timeline_description: "Without unreasonable delay"
cra_notification_recipients: "Major consumer reporting agencies"
cra_notification_contents:
  - "Timing, distribution, and content of the notice"

# ===================================================================
# :: VENDOR NOTIFICATION (Third-Party Data Processors)
# ===================================================================
vendor_notification_is_required: true
vendor_notification_timeline_days: 0
vendor_notification_timeline_description: "In an expeditious manner"
owner_liability_for_vendor_failure: "Third-party must notify owner/licensee in expeditious manner"
vendor_cooperation_required: false

# ===================================================================
# :: EXEMPTIONS
# ===================================================================
exemption_hipaa: true
exemption_hipaa_description: "CRA notification requirement does not apply to HIPAA covered entities"
exemption_glba: true
exemption_glba_description: "Financial institutions complying with federal law and subject to regulatory examination are exempt from notification requirements"
exemption_primary_regulator: false
exemption_primary_regulator_description: null
exemption_own_notification_policy: false
exemption_own_notification_policy_description: null
exemption_other_description: "Warrant/subpoena exception: Acquisition pursuant to search warrant, subpoena, court order, or regulatory agency subpoena/order/duty is not a breach"

# ===================================================================
# :: ENFORCEMENT
# ===================================================================
enforcement_private_right_of_action: false
enforcement_authority: "Attorney General"
enforcement_authority_is_exclusive: false
enforcement_type_damages_description: "Ability to conduct investigation and bring civil action for alleged failure to comply"

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
enforcement_penalty_notes: "Attorney General may investigate and bring civil action; specific penalty amounts not enumerated in data breach statute"

# ===================================================================
# :: SPECIAL PROVISIONS
# ===================================================================
provision_law_enforcement_delay: true
provision_law_enforcement_delay_description: "Entity may delay disclosure if law enforcement agency determines that disclosure will impede criminal investigation or jeopardize homeland or national security. Entity must make disclosure after law enforcement determines it will not compromise investigation."
provision_government_entities_are_subject: true
provision_government_entities_notes: null
provision_waiver_not_permitted: false
provision_notice_at_collection_required: false
provision_other_description: "Explicit 45-day timeline. Both access AND acquisition required for breach trigger (like NC). Risk of harm built into breach definition (material risk required). NO AG notification requirement. Small business exception: entities with 10 or fewer employees have alternative substitute notice if cost exceeds $10,000 (paid newspaper ad 1/4 page for 3 weeks). Warrant/subpoena exception: acquisition pursuant to legal process is not a breach. Contract exception for preexisting contracts. Both HIPAA and GLBA exemptions."

# ===================================================================
# :: OBSIDIAN TAGS
# ===================================================================
tags:
  - DataBreachLaws/Breach/trigger/access-and-acquisition
  - DataBreachLaws/Exempts/glba
  - DataBreachLaws/Exempts/hipaa
  - DataBreachLaws/Notice/AG/not-required
  - DataBreachLaws/Notice/CRA/required/threshold/1000
  - DataBreachLaws/Notice/Consumer/45days
  - DataBreachLaws/PII/financial-accounts
  - DataBreachLaws/PII/government-id
  - DataBreachLaws/RiskOfHarm/allowed
---

# Ohio Data Breach Notification Law

## Overview
- **Statutory Citation:** `Ohio Rev. Code 1347.12, 1349.19`
- **Statute Title:** [Ohio Personal Information System Breach Notification](http://codes.ohio.gov/orc/1349.19v1)
- **Jurisdiction Type:** U.S. State
- **Legislative History:**
  - **Original Legislation:** H.B. 104 (signed November 17, 2005, effective February 17, 2006)
  - **Amendment:** S.B. 126 (signed December 29, 2006, effective March 30, 2007)
  - **Last Verified:** September 2025

## Application & Covered Entities
Any individual, corporation, business trust, estate, trust, partnership, or association (collectively, Entity) that conducts business in Ohio and owns or licenses computerized data that includes personal information.

## Key Definitions

### Personal Information
An individual's first name or first initial and last name of a person in combination with and linked to any one or more of the following data elements, if the name and the items are not encrypted:
- Social Security number
- Driver's license number or state identification card number
- Account number, credit card number, or debit card number in combination with any required security code, access code, or password that would permit access to an individual's financial account

### Exclusions
Personal information does not include publicly available information that is lawfully made available to the general public from federal, state, or local government records or any of the following that are widely distributed:
- Any news, editorial, or advertising statement published in any bona fide newspaper, journal, or magazine, or broadcast over radio or television, or any type of media similar in nature
- Any gathering or furnishing of information or news by any bona fide reporter, correspondent, or news bureau to any bona fide newspaper, journal, magazine, radio or television news media, or any types of media similar in nature
- Any publication designed for and distributed to members of any bona fide association or charitable or fraternal nonprofit corporation, or any type of media similar in nature

### Breach of Security
Unauthorized access to and acquisition of computerized data that compromises the security or confidentiality of personal information owned or licensed by an Entity and that causes, reasonably is believed to have caused, or reasonably is believed will cause a material risk of identity theft or other fraud to the person or property of Ohio.

### Good-Faith Exception
Good faith acquisition of personal information by an employee or agent of the Entity for the purposes of the Entity is not a breach, provided that the personal information is not used for an unlawful purpose or subject to further unauthorized disclosure. Acquisition of personal information pursuant to a search warrant, subpoena, or other court order, or pursuant to a subpoena, order, or duty of a regulatory state agency, is not a breach.

## Notification Requirements & Triggers

### Notification Obligation
Any Entity to which the statute applies shall disclose any breach of the security of the system to any individual whose principal mailing address as reflected in the records of the Entity is in Ohio and whose personal information was, or reasonably is believed to have been, accessed and acquired by an unauthorized person if the access and acquisition by the unauthorized person causes or reasonably is believed will cause a material risk of identity theft or other fraud to the resident.

### Timing of Notification
In the most expedient time possible but not later than **45 days** following discovery or notification of the breach in the security of the system, consistent with any measures necessary to determine the scope of the breach, including which residents' personal information was accessed and acquired, and to restore the reasonable integrity of the data system.

### Notification Methods
Notice may be provided by any of the following methods:
- Written notice
- Telephonic notice
- Electronic notice, if the Entity's primary method of communication with the resident to whom the disclosure must be made is by electronic means

### Content of Notice to Individuals
- Date or estimated date of breach
- Description of information involved
- Contact information for the entity

### Consumer Reporting Agency Notification
If an Entity notifies more than **1,000** residents of Ohio, the Entity shall notify, without unreasonable delay, all nationwide consumer reporting agencies of the timing, distribution, and content of the notice. This requirement does not apply to HIPAA covered entities.

### Substitute Notice Available
If the Entity demonstrates that:
- The cost of providing notice would exceed **$250,000**, OR
- The affected class of subject residents to whom notification is required exceeds **500,000** persons, OR
- It does not have sufficient contact information

Substitute notice shall consist of all of the following:
- Email notice, if the Entity has an email address for the resident
- Conspicuous posting of the notice on the Entity's website, if the Entity maintains one
- Notification to major media outlets, to the extent that the cumulative total of the readership, viewing audience, or listening audience of all of the outlets so notified equals or exceeds 75% of the population of Ohio

### Small Business Exception
If the Entity demonstrates it has **10 employees or fewer** and that the cost of providing notice will exceed **$10,000**, substitute notice shall consist of all of the following:
- Notification by a paid advertisement in a local newspaper that is distributed in the geographic area in which the Entity is located, which advertisement shall be of sufficient size that it covers at least one-quarter of a page in the newspaper and shall be published in the newspaper at least once a week for 3 consecutive weeks
- Conspicuous posting of the disclosure or notice on the Entity's website if the Entity maintains one
- Notification to major media outlets in the geographic area in which the Entity is located

### Third-Party Data Notification
Any Entity that, on behalf of or at the direction of another Entity or on behalf of or at the direction of any governmental entity, is the custodian of or stores computerized data that includes personal information shall notify that other Entity or governmental entity of any breach of the security of the system in an expeditious manner, if the personal information was, or reasonably is believed to have been, accessed and acquired by an unauthorized person and if the access and acquisition by the unauthorized person causes or reasonably is believed will cause a material risk of identity theft or other fraud to a resident of Ohio.

## Exemptions, Penalties, and Other Provisions

### Encryption Safe Harbor
The law provides a safe harbor for encrypted data.

### Financial Institution Exemption
A financial institution, trust company, or credit union or any affiliate thereof that is required by federal law, including, but not limited to, any federal statute, regulation, regulatory guidance, or other regulatory action, to notify its customers of an information security breach with respect to information about those customers and that is subject to examination by its functional government regulatory agency for compliance with the applicable federal law, is exempt from the requirements of the statute.

### HIPAA Exemption
The CRA notification requirement does not apply to HIPAA covered entities.

### Preexisting Contract Exception
Disclosure may be made pursuant to any provision of a contract entered into by the Entity with another Entity prior to the date the breach of the security of the system occurred if that contract does not conflict with any provision of this section and does not waive any provision of this section.

## Key Provisions

### Delay for Law Enforcement
The Entity may delay the disclosure if a law enforcement agency determines that the disclosure or notification will impede a criminal investigation or jeopardize homeland or national security, in which case, the Entity shall make the disclosure or notification after the law enforcement agency determines that disclosure or notification will not compromise the investigation or jeopardize homeland or national security.

### Attorney General Enforcement
The Attorney General may conduct an investigation and bring a civil action upon an alleged failure by an Entity to comply with this statute.
