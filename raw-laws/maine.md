---
state: "Maine"
state_code: "ME"
jurisdiction_type: "U.S. State"
statute_citation: "10 ME. REV. STAT. § 1346 et seq."
statute_title: "Maine Notice of Risk to Personal Data Act"
statute_url: "https://legislature.maine.gov/statutes/10/title10sec1346.html"

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
legislation_bill_1_number: "L.D. 1671"
legislation_bill_1_signed_date: "2005-06-10"
legislation_bill_1_effective_date: "2006-01-31"
legislation_bill_2_number: "H.P. 672"
legislation_bill_2_signed_date: "2009-05-19"
legislation_bill_2_effective_date: "2009-05-19"
legislation_bill_3_number: "L.D. 696"
legislation_bill_3_signed_date: "2019-06-28"
legislation_bill_3_effective_date: "2019-09-19"

# ===================================================================
# :: BREACH DEFINITION
# ===================================================================
breach_definition_text: "An unauthorized acquisition, release, or use of an individual's computerized data that includes personal information that compromises the security, confidentiality, or integrity of personal information of the individual maintained by an Entity."
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
risk_of_harm_analysis_is_required: true
risk_of_harm_analysis_can_eliminate_notification: true
risk_of_harm_analysis_standard: "Notification not required if after good-faith, reasonable, and prompt investigation entity determines that there is not a reasonable likelihood that personal information has been or will be misused"
risk_of_harm_analysis_documentation_required: false
risk_of_harm_analysis_documentation_retention_years: 0
risk_of_harm_analysis_ag_notification_required: false
risk_of_harm_analysis_ag_notification_threshold: 0
risk_of_harm_analysis_ag_notification_timeline_days: 0

# ===================================================================
# :: INDIVIDUAL NOTIFICATION
# ===================================================================
individual_notification_is_required: true
individual_notification_timeline_days: 30
individual_notification_timeline_description: "No more than 30 days after becoming aware of breach and identifying its scope. Notices must be made as expediently as possible and without unreasonable delay, consistent with legitimate needs of law enforcement or measures necessary to determine scope and restore reasonable integrity, security, and confidentiality of data system."
individual_notification_extensions_available: true
individual_notification_extension_max_days: 7
individual_notification_extension_request_deadline_days: 0
individual_notification_contents:
  - "Date or estimated date of breach"
  - "Description of information involved"
  - "Contact information for the entity"
individual_notification_methods:
  - "Written notice"
  - "Electronic notice, if consistent with 15 U.S.C. § 7001 (E-Sign Act)"

# ===================================================================
# :: SUBSTITUTE NOTIFICATION
# ===================================================================
substitute_notification_is_available: true
substitute_notification_cost_trigger: 5000
substitute_notification_affected_count_trigger: 1000
substitute_notification_insufficient_contact_info_trigger: true
substitute_notification_other_triggers: []
substitute_notification_methods:
  - "Email notice if entity has email addresses for individuals to be notified"
  - "Conspicuous posting on entity website, if entity maintains one"
  - "Notification to major statewide media"

# ===================================================================
# :: ATTORNEY GENERAL NOTIFICATION
# ===================================================================
ag_notification_is_required: true
ag_notification_threshold: 1
ag_notification_threshold_description: "Required when notice of breach is required by statute (threshold of 1 affected Maine resident)"
ag_notification_timeline_days: 0
ag_notification_timeline_description: "When notice of breach is required, entity shall notify appropriate state regulators within Department of Professional and Financial Regulation, or if entity not regulated by Department, state Attorney General"
ag_notification_recipients: "Department of Professional and Financial Regulation (for regulated entities) or Attorney General (for non-regulated entities)"
ag_notification_contents:
  - "Notice to appropriate state regulators within Department of Professional and Financial Regulation"
  - "Or notification to state Attorney General if not regulated by Department"

# ===================================================================
# :: CONSUMER REPORTING AGENCY NOTIFICATION
# ===================================================================
cra_notification_is_required: true
cra_notification_threshold: 1000
cra_notification_threshold_description: "If entity must notify more than 1,000 persons at single time"
cra_notification_timeline_days: 0
cra_notification_timeline_description: "Without unreasonable delay"
cra_notification_recipients: "Nationwide consumer reporting agencies"
cra_notification_contents:
  - "Date of the breach"
  - "Estimate of the number of persons affected by breach, if known"
  - "Actual or anticipated date that persons were or will be notified of breach"

# ===================================================================
# :: VENDOR NOTIFICATION (Third-Party Data Processors)
# ===================================================================
vendor_notification_is_required: true
vendor_notification_timeline_days: 0
vendor_notification_timeline_description: "Immediately following discovery if personal information was or is reasonably believed to have been acquired by unauthorized person"
owner_liability_for_vendor_failure: "Third-party agent must comply with immediate notification requirement"
vendor_cooperation_required: false

# ===================================================================
# :: EXEMPTIONS
# ===================================================================
exemption_hipaa: false
exemption_hipaa_description: null
exemption_glba: false
exemption_glba_description: null
exemption_primary_regulator: true
exemption_primary_regulator_description: "Entity complying with security breach notification requirements of rules, regulations, procedures or guidelines established pursuant to Maine or federal law deemed in compliance if law, rules, regulations or guidelines provide notification procedures at least as protective"
exemption_own_notification_policy: false
exemption_own_notification_policy_description: null
exemption_other_description: null

# ===================================================================
# :: ENFORCEMENT
# ===================================================================
enforcement_private_right_of_action: false
enforcement_authority: "Attorney General and Department of Professional and Financial Regulation"
enforcement_authority_is_exclusive: false
enforcement_type_damages_description: "Civil penalties, equitable relief, or enjoinment from future violations"

# ===================================================================
# :: PENALTIES
# ===================================================================
enforcement_penalty_per_day: 2500
enforcement_penalty_per_individual: 0
enforcement_penalty_per_record: 0
enforcement_penalty_per_violation: 500
enforcement_penalty_flat_amount: 0
enforcement_penalty_maximum: 2500
enforcement_penalty_basis: "per_day"
enforcement_penalty_notes: "$500 per violation; $2,500 per day maximum"

# ===================================================================
# :: SPECIAL PROVISIONS
# ===================================================================
provision_law_enforcement_delay: true
provision_law_enforcement_delay_description: "If after investigation notification is required, notification may be delayed for no longer than 7 business days after law enforcement agency determines that notification will not compromise criminal investigation"
provision_government_entities_are_subject: true
provision_government_entities_notes: null
provision_waiver_not_permitted: false
provision_notice_at_collection_required: false
provision_other_description: "30-day hard deadline for consumer notification. Lowest substitute notification cost trigger in the nation: $5,000 (compared to typical $50,000-$250,000). AG notification required for ANY breach (threshold: 1). Dual enforcement authority: AG and Department of Professional and Financial Regulation. Risk of harm analysis required. 7-business-day law enforcement delay period."

# ===================================================================
# :: OBSIDIAN TAGS
# ===================================================================
tags:
  - DataBreachLaws/Breach/trigger/acquisition
  - DataBreachLaws/Exempts/federal-regulator
  - DataBreachLaws/Notice/AG/required/threshold/1
  - DataBreachLaws/Notice/AG/required/timing/asap
  - DataBreachLaws/Notice/AG/Shame-Site
  - DataBreachLaws/Notice/CRA/required/threshold/1000
  - DataBreachLaws/Notice/Consumer/30days
  - DataBreachLaws/PII/financial-accounts
  - DataBreachLaws/RiskOfHarm/allowed
---

# Maine Data Breach Notification Law

## Overview
- **Statutory Citation:** `10 ME. REV. STAT. § 1346 et seq.`
- **Statute Title:** [Maine Notice of Risk to Personal Data Act](https://legislature.maine.gov/statutes/10/title10sec1346.html)
- **Jurisdiction Type:** U.S. State
- **Legislative History:**
  - **Original Legislation:** L.D. 1671 (signed into law June 10, 2005, Chapter 379, effective January 31, 2006)
  - **Major Amendments:**
    - H.P. 672 (signed into law May 19, 2009, Chapter 161, effective May 19, 2009)
    - L.D. 696 (signed into law June 28, 2019, Chapter 512, effective September 19, 2019)
  - **Last Verified:** September 2025

## Application & Covered Entities
Any individual, or other legal or government entity, or any information broker (a person who, for monetary fees or dues, engages in whole or in part in the business of collecting, assembling, evaluating, compiling, reporting, transmitting, transferring, or communicating information concerning individuals for the primary purpose of furnishing personal information to nonaffiliated third parties) that maintains computerized data that includes personal information.

## Key Definitions

### Personal Information
An individual's first name, or first initial, and last name in combination with any one or more of the following data elements, when either the name or the data elements are not encrypted or redacted:
- Social Security number
- Driver's license number or state identification card number
- Account number, credit card number, or debit card number if circumstances exist wherein such a number could be used without additional identifying information, access codes, or passwords
- Account passwords or personal information numbers or other access codes
- Any of the above data elements when not in connection with the individual's first name, or first initial, and last name, if the information compromised would be sufficient to permit a person to fraudulently assume or attempt to assume the identity of the person whose information was compromised

### Exclusions
Personal information does not include information from third-party claims databases maintained by property and casualty insurers or publicly available information that is lawfully made available to the general public from federal, state or local government records or widely distributed media.

### Breach of Security
An unauthorized acquisition, release, or use of an individual's computerized data that includes personal information that compromises the security, confidentiality, or integrity of personal information of the individual maintained by an Entity.

### Good-Faith Exception
Good-faith acquisition, release, or use of personal information by an employee or agent of an Entity on behalf of the Entity is not a breach of the security of the system if the personal information is not used for or subject to further unauthorized disclosure to another person.

## Notification Requirements & Triggers

### Notification Obligation
An Entity shall give notice of the breach to a resident of Maine whose personal information has been, or is reasonably believed to have been, acquired by an unauthorized person.

**Exception:** Notification is not required if after conducting a good-faith, reasonable, and prompt investigation, the Entity determines that there is not a reasonable likelihood that the personal information has been or will be misused.

### Timing of Notification
If notice is not delayed due to law enforcement, notification must be made no more than **30 days** after becoming aware of the breach and identifying its scope. The notices must be made as expediently as possible and without unreasonable delay, consistent with the legitimate needs of law enforcement or with measures necessary to determine the scope of the security breach and restore the reasonable integrity, security, and confidentiality of the data in the system.

**Law Enforcement Delay:** Notification may be delayed for no longer than **7 business days** after a law enforcement agency determines that the notification will not compromise a criminal investigation.

### Notification Methods
Notice may be provided by one of the following methods:
- Written notice
- Electronic notice, if the notice provided is consistent with 15 U.S.C. § 7001 (E-Sign Act)

### Content of Notice to Individuals
- Date or estimated date of breach
- Description of information involved
- Contact information for the entity

### Substitute Notice Available
If the Entity maintaining personal information demonstrates that:
- The cost of providing notice would exceed **$5,000**, OR
- The affected class of individuals to be notified exceeds **1,000**, OR
- The person maintaining personal information does not have sufficient contact information to provide written or electronic notice to those individuals

Substitute notice shall consist of all of the following:
- Email notice if the Entity has email addresses for the individuals to be notified
- Conspicuous posting of the notice on the Entity's website, if the Entity maintains one
- Notification to major statewide media

### Attorney General Notification
When notice of a breach of the security of the system is required, the Entity shall notify the appropriate state regulators within the Department of Professional and Financial Regulation, or if the Entity is not regulated by the Department, the state Attorney General.

### Consumer Reporting Agency Notification
If an Entity must notify more than **1,000** persons at a single time, the Entity shall also notify, without unreasonable delay, the nationwide consumer reporting agencies of the date of the breach, an estimate of the number of persons affected by the breach, if known, and the actual or anticipated date that persons were or will be notified of the breach.

### Third-Party Data Notification
A third party that maintains, on behalf of another Entity, computerized data that includes personal information that the third party does not own shall notify the owner of the personal information of a breach of the security of the system immediately following discovery if the personal information was, or is reasonably believed to have been, acquired by an unauthorized person.

## Exemptions, Penalties, and Other Provisions

### Encryption Safe Harbor
The law provides a safe harbor for data that is encrypted or redacted.

### Regulatory Exemptions
An entity that complies with the security breach notification requirements of rules, regulations, procedures or guidelines established pursuant to Maine or federal law is deemed to be in compliance with the requirements as long as the law, rules, regulations or guidelines provide for notification procedures at least as protective as the notification requirements outlined above.

### Penalties
Provides for civil penalties in the amount of **$500** per violation, up to a maximum of **$2,500** per day; equitable relief; or enjoinment from future violations.

### Private Right of Action
The statute does not provide for a private right of action.

## Key Provisions

### Law Enforcement Delay
If, after the completion of the required investigation, notification is required under this section, the notification required by this section may be delayed for no longer than **7 business days** after a law enforcement agency determines that the notification will not compromise a criminal investigation.

### Attorney General Enforcement
Enforced by state Attorney General and/or where applicable, the Department of Professional and Financial Regulation Office of Consumer Credit Regulation.

### Government Entities
Government entities are subject to the statute requirements.
