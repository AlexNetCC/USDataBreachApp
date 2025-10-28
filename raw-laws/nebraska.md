---
# ===================================================================
# :: CORE INFORMATION
# ===================================================================
state: "Nebraska"
state_code: "NE"
jurisdiction_type: "U.S. State"
statute_citation: "Neb. Rev. Stat. § 87-801 et seq."
statute_title: "Nebraska Data Privacy and Security Act"
statute_url: "https://nebraskalegislature.gov/laws/statutes.php?statute=87-801"

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
legislation_bill_1_number: "L.B. 876"
legislation_bill_1_signed_date: "2006-04-10"
legislation_bill_1_effective_date: "2006-07-14"
legislation_bill_2_number: "L.B. 835"
legislation_bill_2_signed_date: "2016-04-13"
legislation_bill_2_effective_date: "2016-07-20"

# ===================================================================
# :: BREACH DEFINITION
# ===================================================================
breach_definition_text: "Unauthorized acquisition of unencrypted computerized data that compromises the security, confidentiality, or integrity of personal information maintained by an Entity."
breach_trigger: "unauthorized_acquisition"
breach_access_alone_triggers: false
breach_acquisition_alone_triggers: true

# ===================================================================
# :: ENCRYPTION SAFE HARBOR
# ===================================================================
exemption_encryption_safe_harbor: true
exemption_encryption_safe_harbor_negated_if_key_compromised: true
exemption_encryption_description: "Encrypted or redacted data; not encrypted if confidential process or key was also acquired"

# ===================================================================
# :: RISK OF HARM ANALYSIS
# ===================================================================
risk_of_harm_analysis_is_required: true
risk_of_harm_analysis_can_eliminate_notification: true
risk_of_harm_analysis_standard: "Unlikely that personal information has been or will be used for an unauthorized purpose"
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
individual_notification_timeline_description: "As soon as possible and without unreasonable delay, consistent with measures necessary to determine breach scope and restore reasonable integrity of computerized data system"
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
  - "Electronic notice, if consistent with 15 U.S.C. § 7001 (E-Sign Act)"

# ===================================================================
# :: SUBSTITUTE NOTIFICATION
# ===================================================================
substitute_notification_is_available: true
substitute_notification_cost_trigger: 75000
substitute_notification_affected_count_trigger: 100000
substitute_notification_insufficient_contact_info_trigger: true
substitute_notification_other_triggers:
  - "Small entity (10 or fewer employees) with cost exceeding $10,000"
substitute_notification_methods:
  - "Email notice when Entity has email addresses"
  - "Conspicuous posting on Entity website"
  - "Notice to major statewide media"
  - "Small entity option: Paid advertisement in local newspaper (one-quarter page or larger, 3 consecutive weeks)"
  - "Small entity option: Notification to major media outlets in geographic area"

# ===================================================================
# :: ATTORNEY GENERAL NOTIFICATION
# ===================================================================
ag_notification_is_required: true
ag_notification_threshold: 1
ag_notification_threshold_description: "Required whenever individual resident notification is required (threshold of 1 affected Nebraska resident)"
ag_notification_timeline_days: 0
ag_notification_timeline_description: "Not later than the time when notice is provided to Nebraska resident (concurrent with individual notification)"
ag_notification_recipients: "Attorney General"
ag_notification_contents:
  - "Notice of breach of security of system"

# ===================================================================
# :: CONSUMER REPORTING AGENCY NOTIFICATION
# ===================================================================
cra_notification_is_required: false
cra_notification_threshold: null
cra_notification_threshold_description: "No CRA notification requirement in statute"
cra_notification_timeline_days: null
cra_notification_timeline_description: null
cra_notification_recipients: null
cra_notification_contents: []

# ===================================================================
# :: VENDOR NOTIFICATION (Third-Party Data Processors)
# ===================================================================
vendor_notification_is_required: true
vendor_notification_timeline_days: 0
vendor_notification_timeline_description: "Immediately when Entity becomes aware of breach, if unauthorized use occurred or is reasonably likely (applies if Entity maintains computerized data not owned or licensed by Entity)"
owner_liability_for_vendor_failure: "Third-party must cooperate with owner/licensee and share breach-related information (excluding proprietary information)"
vendor_cooperation_required: true

# ===================================================================
# :: EXEMPTIONS
# ===================================================================
exemption_hipaa: false
exemption_hipaa_description: null
exemption_glba: false
exemption_glba_description: null
exemption_primary_regulator: true
exemption_primary_regulator_description: "Entity regulated by state/federal law and complying with regulator procedures"
exemption_own_notification_policy: true
exemption_own_notification_policy_description: "Entity with own notice procedures consistent with timing requirements"
exemption_other_description: null

# ===================================================================
# :: ENFORCEMENT
# ===================================================================
enforcement_private_right_of_action: false
enforcement_authority: "Attorney General"
enforcement_authority_is_exclusive: false
enforcement_type_damages_description: "Attorney General may issue subpoenas and seek direct economic damages for each affected Nebraska resident"

# ===================================================================
# :: PENALTIES
# ===================================================================
enforcement_penalty_per_day: 0
enforcement_penalty_per_individual: 0
enforcement_penalty_per_record: 0
enforcement_penalty_per_violation: 0
enforcement_penalty_flat_amount: 0
enforcement_penalty_maximum: 0
enforcement_penalty_basis: "per_affected_resident"
enforcement_penalty_notes: "Attorney General may seek direct economic damages for each affected Nebraska resident; specific maximum amounts not defined in statute"

# ===================================================================
# :: SPECIAL PROVISIONS
# ===================================================================
provision_law_enforcement_delay: true
provision_law_enforcement_delay_description: "Notice may be delayed if law enforcement determines notification will impede criminal investigation. Notice must be made in good faith, without unreasonable delay, and as soon as possible after law enforcement determines notification will no longer impede investigation."
provision_government_entities_are_subject: true
provision_government_entities_notes: null
provision_waiver_not_permitted: true
provision_notice_at_collection_required: false
provision_other_description: "AG notification concurrent with consumer notification. Unique small entity substitute notification provisions: entities with 10 or fewer employees can use substitute notice if cost exceeds $10,000. Good-faith acquisition by employee/agent not a breach if not further disclosed. Acquisition pursuant to search warrant, subpoena, court order, or state agency order not a breach. Vendor cooperation required. Waiver provisions prohibited."

# ===================================================================
# :: OBSIDIAN TAGS
# ===================================================================
tags:
  - DataBreachLaws/Breach/trigger/acquisition
  - DataBreachLaws/Exempts/federal-regulator
  - DataBreachLaws/Exempts/own-policy
  - DataBreachLaws/Notice/AG/required/threshold/1
  - DataBreachLaws/Notice/AG/required/timing/concurrent
  - DataBreachLaws/Notice/CRA/not-required
  - DataBreachLaws/Notice/Consumer/asap
  - DataBreachLaws/PII/biometric
  - DataBreachLaws/PII/financial-accounts
  - DataBreachLaws/PII/government-id
  - DataBreachLaws/PII/online-account-credentials
  - DataBreachLaws/RiskOfHarm/allowed
---

# Nebraska Data Breach Notification Law

## Overview
- **Statutory Citation:** `Neb. Rev. Stat. § 87-801 et seq.`
- **Statute Title:** [Nebraska Data Privacy and Security Act](https://nebraskalegislature.gov/laws/statutes.php?statute=87-801)
- **Jurisdiction Type:** U.S. State
- **Legislative History:**
  - **Original Legislation:** L.B. 876 (signed April 10, 2006, effective July 14, 2006)
  - **Major Amendments:**
    - L.B. 835 (signed April 13, 2016, effective July 20, 2016)
  - **Last Verified:** September 2025

## Application & Covered Entities
Any individual, government agency, or other legal entity, whether for profit or not for profit, that conducts business in Nebraska and that owns or licenses computerized data that includes personal information about a resident of Nebraska.

## Key Definitions

### Personal Information - Category 1
A Nebraska resident's first name or first initial and last name in combination with any one or more of the following data elements that relate to the resident, if either the name or the data elements are not encrypted, redacted, or otherwise altered by any method or technology rendering them unreadable:
- Social Security number
- Driver's license number or state identification card number
- Account number, credit card number, or debit card number in combination with any required security code, access code, or password that would permit access to a resident's financial account
- Unique electronic ID number or routing code, in combination with any required security code, access code, or password
- Unique biometric data, such as fingerprint, voice print, or retina/iris image, or other unique physical representation

### Personal Information - Category 2
A username or email address, in combination with a password or security question and answer, that would permit access to an online account.

### Encryption Note
Data shall not be considered encrypted if the confidential process or key was or is reasonably believed to have been acquired as a result of the breach of the security of the system.

### Exclusions
Personal information does not include publicly available information that is lawfully made available to the general public from federal, state, or local government records.

### Breach of Security
Unauthorized acquisition of unencrypted computerized data that compromises the security, confidentiality, or integrity of personal information maintained by an Entity.

### Good-Faith Exception
Good-faith acquisition of personal information by an employee or agent of an Entity for the purposes of the Entity is not a breach of the security of the system if the personal information is not used or subject to further unauthorized disclosure.

Acquisition of personal information pursuant to a search warrant, subpoena, court order, or state agency order is not a breach of the security of the system.

## Notification Requirements & Triggers

### Notification Obligation
Any Entity to which the statute applies shall, when it determines that the use of information about a Nebraska resident for an unauthorized purpose has occurred or is reasonably likely to occur, give notice to the affected Nebraska resident.

**Exception:** Notification is not required if, after a good-faith, reasonable, and prompt investigation, the Entity determines that it is unlikely that personal information has been or will be used for an unauthorized purpose.

### Timing of Notification
Notice shall be made **as soon as possible and without unreasonable delay**, consistent with any measures necessary to determine the scope of the breach and to restore the reasonable integrity of the computerized data system.

### Notification Methods
Notice may be provided by one of the following methods:
- Written notice
- Telephonic notice
- Electronic notice, if the notice is consistent with 15 U.S.C. § 7001 (E-Sign Act)

### Content of Notice to Individuals
- Date or estimated date of breach
- Description of information involved
- Contact information for the entity

### Substitute Notice Available
If the Entity demonstrates that:
- The cost of providing notice will exceed **$75,000**, OR
- The affected class of Nebraska residents to be notified exceeds **100,000** residents, OR
- The Entity does not have sufficient contact information

Substitute notice shall consist of **all** of the following:
- Email notice, if the Entity has email addresses for the members of the affected class
- Conspicuous posting of the notice on the Entity's website, if it maintains one
- Notice to major statewide media

### Substitute Notice Exception for Small Entities
If the Entity has **10 employees or fewer** and demonstrates that the cost of providing notice will exceed **$10,000**, substitute notice shall consist of **all** of the following:
- Email notice, if the Entity has email addresses for the members of the affected class
- Paid advertisement in a local newspaper distributed in the geographic area where the Entity is located (advertisement must cover at least one-quarter of a page and be published at least once a week for 3 consecutive weeks)
- Conspicuous posting of the notice on the Entity's website, if it maintains one
- Notification to major media outlets in the geographic area where the Entity is located

### Attorney General Notification
If notice of a security breach to Nebraska residents is required, the Entity shall also, **not later than the time when notice is provided to the Nebraska resident**, provide notice of the breach of security of the system to the Attorney General.

### Third-Party Data Notification
Any Entity that maintains computerized data that includes personal information that the Entity does not own or license shall give notice to and cooperate with the owner or licensee of the information of any breach of the security of the system when it becomes aware of a breach **if use of personal information about a Nebraska resident for an unauthorized purpose occurred or is reasonably likely to occur**.

Cooperation includes, but is not limited to, sharing with the owner or licensee information relevant to the breach, not including information proprietary to the Entity.

## Exemptions, Penalties, and Other Provisions

### Encryption Safe Harbor
The law provides a safe harbor for encrypted or redacted data. Data shall not be considered encrypted if the confidential process or key was also acquired.

### Own Notification Policy Exemption
An Entity that maintains its own notice procedures which are part of an information security policy for the treatment of personal information and which are consistent with the timing requirements of the statute is deemed to be in compliance with the notice requirements if the Entity notifies affected Nebraska residents and the Attorney General in accordance with its notice procedures in the event of a breach.

### Primary Regulator Exemption
An Entity that is regulated by state or federal law and that maintains procedures for a breach of the security of the system pursuant to the laws, rules, regulations, guidance, or guidelines established by its primary or functional state or federal regulator is deemed to be in compliance with the notice requirements if the Entity notifies affected Nebraska residents and the Attorney General in accordance with the maintained procedures.

### Private Right of Action
The statute does **not** provide for a private right of action.

### Waiver Not Permitted
Individuals cannot waive their rights under this statute.

## Key Provisions

### Delay for Law Enforcement
Notice may be delayed if a law enforcement agency determines that the notice will impede a criminal investigation. Notice shall be made in good faith, without unreasonable delay, and as soon as possible after the law enforcement agency determines that notification will no longer impede the investigation.

### Attorney General Enforcement
The Attorney General may issue subpoenas and seek and recover direct economic damages for each affected Nebraska resident injured by a violation of the statute.
