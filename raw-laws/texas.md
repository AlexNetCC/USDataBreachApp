---
state: "Texas"
state_code: "TX"
jurisdiction_type: "U.S. State"
statute_citation: "TEX. BUS. & COM. CODE §§ 521.002, 521.053"
statute_title: "Texas Identity Theft Enforcement and Protection Act"
statute_url: "https://statutes.capitol.texas.gov/Docs/BC/htm/BC.521.htm"

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
legislation_bill_1_number: "Acts 2007, 80th Leg., ch. 885, § 2.01"
legislation_bill_1_signed_date: "2007-06-18"
legislation_bill_1_effective_date: "2009-04-01"
legislation_bill_2_number: "Acts 2009, 81st Leg., ch. 419, § 3"
legislation_bill_2_signed_date: "2009-06-19"
legislation_bill_2_effective_date: "2009-09-01"
legislation_bill_3_number: "Acts 2011, 82nd Leg., ch. 1126, § 14"
legislation_bill_3_signed_date: "2011-06-17"
legislation_bill_3_effective_date: "2012-09-01"
legislation_bill_4_number: "S.B. 1610"
legislation_bill_4_signed_date: "2013-06-14"
legislation_bill_4_effective_date: "2013-06-14"
legislation_bill_5_number: "H.B. 4390"
legislation_bill_5_signed_date: "2019-06-14"
legislation_bill_5_effective_date: "2020-01-01"
legislation_bill_6_number: "H.B. 3529"
legislation_bill_6_signed_date: "2021-05-26"
legislation_bill_6_effective_date: "2021-09-01"
legislation_bill_7_number: "H.B. 3746"
legislation_bill_7_signed_date: "2021-06-14"
legislation_bill_7_effective_date: "2021-09-01"
legislation_bill_8_number: "S.B. 768"
legislation_bill_8_signed_date: "2023-05-27"
legislation_bill_8_effective_date: "2023-09-01"

# ===================================================================
# :: BREACH DEFINITION
# ===================================================================
breach_definition_text: "Unauthorized acquisition of computerized data that compromises the security, confidentiality, or integrity of sensitive PI maintained by an Entity, including data that is encrypted if the person accessing the data has the key required to decrypt the data."
breach_trigger: "unauthorized_acquisition"
breach_access_alone_triggers: false
breach_acquisition_alone_triggers: true

# ===================================================================
# :: ENCRYPTION SAFE HARBOR
# ===================================================================
exemption_encryption_safe_harbor: true
exemption_encryption_safe_harbor_negated_if_key_compromised: true
exemption_encryption_description: "Encrypted data (unless encryption key also compromised)"

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
individual_notification_timeline_days: 60
individual_notification_timeline_description: "As soon as practicable, not later than 60 days after discovery of breach, consistent with legitimate needs of law enforcement and measures necessary to determine scope of breach and restore reasonable integrity of system"
individual_notification_extensions_available: false
individual_notification_extension_max_days: 0
individual_notification_extension_request_deadline_days: 0
individual_notification_contents:
  - "Date or estimated date of breach"
  - "Description of information involved"
  - "Contact information for the entity"
individual_notification_methods:
  - "Written notice at last known address"
  - "Electronic notice (if E-Sign Act compliant)"

# ===================================================================
# :: SUBSTITUTE NOTIFICATION
# ===================================================================
substitute_notification_is_available: true
substitute_notification_cost_trigger: 250000
substitute_notification_affected_count_trigger: 500000
substitute_notification_insufficient_contact_info_trigger: true
substitute_notification_other_triggers: []
substitute_notification_methods:
  - "Email notice when Entity has email addresses"
  - "Conspicuous posting on Entity website"
  - "Notice published in or broadcast on major statewide media"

# ===================================================================
# :: ATTORNEY GENERAL NOTIFICATION
# ===================================================================
ag_notification_is_required: true
ag_notification_threshold: 250
ag_notification_threshold_description: "If required to provide notification to at least 250 Texas residents"
ag_notification_timeline_days: 30
ag_notification_timeline_description: "As soon as practicable and not later than 30 days after Entity determines breach occurred (SEPARATE from 60-day consumer timeline)"
ag_notification_recipients: "Attorney General"
ag_notification_contents:
  - "A detailed description of the nature and circumstances of the breach or use of sensitive personal information acquired as result of breach"
  - "The number of Texas residents affected by the breach at time of notification"
  - "The number of affected residents sent disclosure by mail or direct method of communication at time of notification"
  - "The measures taken by the Entity regarding the breach"
  - "Any measures the Entity intends to take regarding the breach after notification"
  - "Information regarding whether law enforcement is investigating the breach"

# ===================================================================
# :: CONSUMER REPORTING AGENCY NOTIFICATION
# ===================================================================
cra_notification_is_required: true
cra_notification_threshold: 10000
cra_notification_threshold_description: "If required to notify more than 10,000 persons at one time (highest CRA threshold in nation)"
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
vendor_notification_timeline_description: "Immediately after discovering breach"
owner_liability_for_vendor_failure: "Third-party must notify owner/licensee immediately after discovery if sensitive PI acquired by unauthorized person"
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
exemption_own_notification_policy_description: "Entity with own notification procedures complying with statute's timing requirements"
exemption_other_description: null

# ===================================================================
# :: ENFORCEMENT
# ===================================================================
enforcement_private_right_of_action: false
enforcement_authority: "Attorney General"
enforcement_authority_is_exclusive: false
enforcement_type_damages_description: "Injunctive relief and civil penalties. For violations: $2,000 to $50,000 per violation. For failure to notify: up to $100 per person per day, not to exceed $250,000 per breach"

# ===================================================================
# :: PENALTIES
# ===================================================================
enforcement_penalty_per_day: 100
enforcement_penalty_per_individual: 0
enforcement_penalty_per_record: 0
enforcement_penalty_per_violation: 2000
enforcement_penalty_flat_amount: 0
enforcement_penalty_maximum: 250000
enforcement_penalty_basis: "Per violation: $2,000-$50,000. Notification failures: up to $100 per person per day, max $250,000 per breach"
enforcement_penalty_notes: "Dual penalty structure: (1) General violations $2,000-$50,000 per violation; (2) Notification failures up to $100 per person per day with $250,000 maximum per breach"

# ===================================================================
# :: SPECIAL PROVISIONS
# ===================================================================
provision_law_enforcement_delay: true
provision_law_enforcement_delay_description: "Entity may delay notice at request of law enforcement agency that determines notification will impede criminal investigation. Notification shall be made as soon as law enforcement determines notice will not compromise investigation."
provision_government_entities_are_subject: true
provision_government_entities_notes: null
provision_waiver_not_permitted: false
provision_notice_at_collection_required: false
provision_other_description: "Extensive legislative history: 8 amendments (2007-2023). AG notification deadline SEPARATE from consumer: 30 days vs. 60 days. Explicit electronic form submission to AG website required. AG publicly posts breach notifications on website within 30 days, removed after 1 year if no additional breaches. Highest CRA threshold in nation: 10,000 (vs typical 1,000). Interstate notification option: may use affected person's home state law. Dual penalty structure. NO HIPAA or GLBA exemptions (unlike most states). Nonresident notification required. High substitute thresholds."

# ===================================================================
# :: OBSIDIAN TAGS
# ===================================================================
tags:
  - DataBreachLaws/Breach/trigger/acquisition
  - DataBreachLaws/Exempts/own-policy
  - DataBreachLaws/Notice/AG/required/threshold/250
  - DataBreachLaws/Notice/AG/required/timing/30days
  - DataBreachLaws/Notice/AG/Shame-Site
  - DataBreachLaws/Notice/CRA/required/threshold/10000
  - DataBreachLaws/Notice/Consumer/60days
  - DataBreachLaws/PII/financial-accounts
  - DataBreachLaws/PII/government-id
  - DataBreachLaws/RiskOfHarm/not-allowed
---

# Texas Data Breach Notification Law

## Overview
- **Statutory Citations:** `TEX. BUS. & COM. CODE §§ 521.002, 521.053`
- **Statute Title:** [Texas Identity Theft Enforcement and Protection Act](https://statutes.capitol.texas.gov/Docs/BC/htm/BC.521.htm)
- **Jurisdiction Type:** U.S. State
- **Legislative History:**
  - **Original Legislation:** Acts 2007, 80th Leg., ch. 885, § 2.01 (signed June 18, 2007, effective April 1, 2009)
  - **Major Amendments:**
    - Acts 2009, 81st Leg., ch. 419, § 3 (effective September 1, 2009)
    - Acts 2011, 82nd Leg., ch. 1126, § 14 (effective September 1, 2012)
    - S.B. 1610 (signed June 14, 2013, effective June 14, 2013)
    - H.B. 4390 (signed June 14, 2019, effective January 1, 2020)
    - H.B. 3529 (signed May 26, 2021, effective September 1, 2021)
    - H.B. 3746 (signed June 14, 2021, effective September 1, 2021)
    - S.B. 768 (signed May 27, 2023, effective September 1, 2023)
  - **Last Verified:** September 2025

## Application & Covered Entities
A person (Entity) that conducts business in Texas and owns or licenses computerized data that includes sensitive personal information.

## Key Definitions

### Sensitive Personal Information
An individual's first name or first initial and last name in combination with any one or more of the following items, if the name and the items are not encrypted:
- Social Security number
- Driver's license number or government-issued ID number
- Account number, credit card number, or debit card number in combination with any required security code, access code, or password that would permit access to an individual's financial account

**Sensitive PI also includes:** Information that identifies an individual and relates to:
- The physical or mental health or condition of the individual
- The provision of health care to the individual
- Payment for the provision of health care to the individual

### Exclusions
Sensitive PI does not include publicly available information that is lawfully made available to the general public from the federal government or a state or local government.

### Breach of Security
Unauthorized acquisition of computerized data that compromises the security, confidentiality, or integrity of sensitive PI maintained by an Entity, including data that is encrypted if the person accessing the data has the key required to decrypt the data.

### Good-Faith Exception
Good-faith acquisition of sensitive PI by an employee or agent of the Entity for the purposes of the Entity is not a breach of system security unless the sensitive PI is used or disclosed by the person in an unauthorized manner.

## Notification Requirements & Triggers

### Notification Obligation
An Entity to which the statute applies shall disclose any breach of system security to any person, including nonresidents, whose sensitive PI was, or is reasonably believed to have been, acquired by an unauthorized person.

### Timing of Notification to Individuals
Notice to individuals shall be made:
- **As soon as practicable**, and
- **Not later than the 60th day** after the date on which the person determines that the breach occurred
- Consistent with legitimate needs of law enforcement, or as necessary to determine the scope of the breach and restore the reasonable integrity of the data system

### Notification Methods
Notice may be provided by one of the following methods:
- Written notice at the last known address of the individual
- Electronic notice, if the notice is consistent with the provisions regarding electronic records and signatures set forth in 15 U.S.C. § 7001 (E-Sign Act)

**Interstate Notification Note:** If the affected person is a resident of a state that has its own breach notification requirement, the Entity may provide notice under that state's law or under Texas's law.

### Content of Notice to Individuals
- Date or estimated date of breach
- Description of information involved
- Contact information for the entity

### Substitute Notice Available
If the Entity demonstrates that:
- The cost of providing notice would exceed **$250,000**, OR
- The number of affected persons exceeds **500,000**, OR
- The Entity does not have sufficient contact information

The notice may be given by any of the following:
- Email notice when the Entity has email addresses for the affected persons
- Conspicuous posting of the notice on the Entity's website
- Notice published in or broadcast on major statewide media

### Attorney General Notification
**Requirement:** Any Entity that is required to provide notification of a security breach to at least **250** Texas residents.

**Timing:** As soon as practicable and not later than **30 days** after the Entity determines that a breach has occurred.

**Required Information:** The notification must include:
- A detailed description of the nature and circumstances of the breach or the use of sensitive personal information acquired as a result of the breach
- The number of Texas residents affected by the breach at the time of notification
- The number of affected residents that have been sent a disclosure of the breach by mail or other direct method of communication at the time of notification
- The measures taken by the Entity regarding the breach
- Any measures the Entity intends to take regarding the breach after notification
- Information regarding whether law enforcement is investigating the breach

**Submission Method:** Businesses must submit a detailed description of the breach in addition to other required information using an electronic form accessed through the attorney general's website.

### Consumer Reporting Agency Notification
If an Entity is required by this section to notify at one time **more than 10,000** persons of a breach of system security, the Entity shall also notify, without unreasonable delay, all nationwide consumer reporting agencies of the timing, distribution, and content of the notices.

### Third-Party Data Notification
Any Entity that maintains computerized data that includes sensitive PI that the Entity does not own shall notify the owner or license holder of the information of any breach of system security **immediately after discovering the breach**, if the sensitive PI was, or is reasonably believed to have been, acquired by an unauthorized person.

## Exemptions, Penalties, and Other Provisions

### Encryption Safe Harbor
The law provides a safe harbor for encrypted data.

### Own Notification Policy Exemption
An Entity that maintains its own notification procedures as part of an information security policy for the treatment of sensitive PI that complies with the timing requirements for notice under this section complies with this section if the Entity notifies affected persons in accordance with that policy.

### Penalties
Remedies include:
- **Injunctive relief**
- **Civil penalties** for violations: at least **$2,000** but not more than **$50,000** for each violation
- **Civil penalties for failure to notify**: up to **$100 per person** to whom notification is due, per day, **not to exceed $250,000 per breach**

### Private Right of Action
The statute does not provide for a private right of action.

## Key Provisions

### Delay for Law Enforcement
An Entity may delay providing notice as required at the request of a law enforcement agency that determines that the notification will impede a criminal investigation. The required notification shall be made as soon as the law enforcement agency determines that the required notice will not compromise the investigation.

### Attorney General Website Posting
The attorney general will post on its publicly accessible website a listing of the notifications it receives under the statute of any system security breach. Such notices will be posted **no later than thirty days** after the attorney general receives the notification.

The listing of the notice will be removed **no later than the first anniversary** of its posting if the person who provided the notification has not notified the attorney general of any additional breaches during that period.

### Attorney General Enforcement
Attorney General enforcement is available for violations of this statute.
