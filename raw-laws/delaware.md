---
state: "Delaware"
state_code: "DE"
jurisdiction_type: "U.S. State"
statute_citation: "Del. Code Ann. tit. 6 § 12B-101 et seq."
statute_title: "Delaware Computer Security Breach Notification"
statute_url: "https://delcode.delaware.gov/title6/c012b/index.html"

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
legislation_bill_1_number: "H.B. 116"
legislation_bill_1_signed_date: "2005-06-28"
legislation_bill_1_effective_date: "2005-06-28"
legislation_bill_2_number: "H.B. 247"
legislation_bill_2_signed_date: "2010-06-10"
legislation_bill_2_effective_date: "2010-06-10"
legislation_bill_3_number: "House Substitute 1 for HB 180"
legislation_bill_3_signed_date: "2017-08-17"
legislation_bill_3_effective_date: "2018-04-14"

# ===================================================================
# :: BREACH DEFINITION
# ===================================================================
breach_definition_text: "The unauthorized acquisition of computerized data that compromises the security, confidentiality, or integrity of personal information. The unauthorized acquisition of encrypted data is not a breach unless the encryption key that could render the personal information readable or useable was also acquired."
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
risk_of_harm_analysis_standard: "Entity must provide notice of breach to Delaware residents. Notification not required if, after appropriate investigation, entity reasonably determines that breach is unlikely to result in any harm to individuals whose personal information has been breached."
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
individual_notification_timeline_description: "Without unreasonable delay but not later than 60 days after determination of breach. If entity cannot through reasonable diligence identify within 60 days that personal information of certain Delaware residents was included in breach, entity must provide notice as soon as practicable after determination that breach included personal information of such residents, unless substitute notice was provided."
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
  - "Electronic notice, if consistent with 15 U.S.C. § 7001 (E-Sign Act), or if primary means of communication is electronic"

# ===================================================================
# :: SUBSTITUTE NOTIFICATION
# ===================================================================
substitute_notification_is_available: true
substitute_notification_cost_trigger: 75000
substitute_notification_affected_count_trigger: 100000
substitute_notification_insufficient_contact_info_trigger: true
substitute_notification_other_triggers: []
substitute_notification_methods:
  - "Email notice, if entity has email addresses for affected class members"
  - "Conspicuous posting on entity website, if maintained"
  - "Notice to major statewide media, including newspapers, radio, television, and publications, on major social media platforms"

# ===================================================================
# :: ATTORNEY GENERAL NOTIFICATION
# ===================================================================
ag_notification_is_required: true
ag_notification_threshold: 500
ag_notification_threshold_description: "If number of Delaware residents to be notified exceeds 500 residents"
ag_notification_timeline_days: 0
ag_notification_timeline_description: "Not later than the time when notice is provided to residents"
ag_notification_recipients: null
ag_notification_contents:
  - "Notification required if 500+ Delaware residents affected"
  - "Timing: not later than when notice is provided to residents"

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
vendor_notification_timeline_description: "Immediately following determination of breach"
owner_liability_for_vendor_failure: "Third-party must comply with immediate notification and cooperation requirements"
vendor_cooperation_required: true

# ===================================================================
# :: EXEMPTIONS
# ===================================================================
exemption_hipaa: true
exemption_hipaa_description: "Entity is deemed in compliance if regulated by state or federal law (including HIPAA), maintains procedures for breach pursuant to primary or functional regulator requirements, and notifies affected Delaware residents in accordance with maintained procedures"
exemption_glba: true
exemption_glba_description: "Entity is deemed in compliance if regulated by state or federal law (including GLBA), maintains procedures for breach pursuant to primary or functional regulator requirements, and notifies affected Delaware residents in accordance with maintained procedures"
exemption_primary_regulator: true
exemption_primary_regulator_description: "Entity is deemed in compliance if regulated by state or federal law, maintains procedures for breach pursuant to primary or functional regulator requirements, and notifies affected Delaware residents in accordance with maintained procedures"
exemption_own_notification_policy: true
exemption_own_notification_policy_description: "Entity maintaining own notification procedures as part of information security policy, with procedures consistent with timing requirements, deemed in compliance if notifies affected Delaware residents in accordance with its policies"
exemption_other_description: null

# ===================================================================
# :: ENFORCEMENT
# ===================================================================
enforcement_private_right_of_action: false
enforcement_authority: "Attorney General"
enforcement_authority_is_exclusive: false
enforcement_type_damages_description: "Direct economic damages"

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
enforcement_penalty_notes: "Attorney General may bring action to address violations and for other relief necessary to ensure compliance and recover direct economic damages; specific penalty amounts not defined in data breach statute"

# ===================================================================
# :: SPECIAL PROVISIONS
# ===================================================================
provision_law_enforcement_delay: true
provision_law_enforcement_delay_description: "Notice may be delayed if law enforcement agency determines that notice will impede criminal investigation. Notice required by statute must be made without unreasonable delay and as soon as possible after law enforcement determines notification will no longer impede investigation."
provision_government_entities_are_subject: true
provision_government_entities_notes: null
provision_waiver_not_permitted: false
provision_notice_at_collection_required: false
provision_other_description: "Credit monitoring required (12 months at no cost) if breach includes Social Security numbers; must provide information necessary to enroll and how to place credit freeze. For breaches of login credentials for email account furnished by entity, notice may not be provided to breached email address, but may be provided via other permitted methods, or by clear and conspicuous notice delivered when resident online and connected to account from customary IP address or location. If entity cannot identify within 60 days that personal information of certain Delaware residents was included in breach, entity must notify as soon as practicable after determination, unless substitute notice was provided."

# ===================================================================
# :: OBSIDIAN TAGS
# ===================================================================
tags:
  - DataBreachLaws/Breach/trigger/acquisition
  - DataBreachLaws/Exempts/federal-regulator
  - DataBreachLaws/Exempts/glba
  - DataBreachLaws/Exempts/hipaa
  - DataBreachLaws/Exempts/own-policy
  - DataBreachLaws/Notice/AG/required/threshold/500
  - DataBreachLaws/Notice/AG/required/timing/concurrent
  - DataBreachLaws/Notice/AG/Shame-Site
  - DataBreachLaws/Notice/CRA/not-required
  - DataBreachLaws/Notice/Consumer/60days
  - DataBreachLaws/PII/biometric
  - DataBreachLaws/PII/health-info
  - DataBreachLaws/PII/taxpayer-id
  - DataBreachLaws/PII/government-id
  - DataBreachLaws/RiskOfHarm/allowed
  - DataBreachLaws/special-provision/credit-monitoring-required
---

# Delaware Data Breach Notification Law

## Overview
- **Statutory Citation:** `Del. Code Ann. tit. 6 § 12B-101 et seq.`
- **Statute Title:** [Delaware Computer Security Breach Notification](https://delcode.delaware.gov/title6/c012b/index.html)
- **Jurisdiction Type:** U.S. State
- **Legislative History:**
  - **Original Legislation:** H.B. 116 (signed June 28, 2005, effective June 28, 2005)
  - **Major Amendments:**
    - H.B. 247 (signed June 10, 2010, effective June 10, 2010)
    - House Substitute 1 for HB 180 (signed August 17, 2017, effective April 14, 2018)
  - **Last Verified:** September 2025

## Application & Covered Entities
Applies to any person, legal or commercial entity, or government agency that conducts business in Delaware and owns or licenses computerized data that includes personal information. Includes both private and governmental entities.

## Key Definitions

### Personal Information
A Delaware resident's first name or first initial and last name, in combination with any one or more of the following data elements:
- Social Security number
- Driver's license number or state or federal identification card number
- Account number, credit card number, or debit card number in combination with any required security code, access code, or password that would permit access to a resident's financial account
- Passport number
- Username or email address, in combination with a password or security question and answer that would permit access to an online account
- Medical history, medical treatment by a healthcare professional, diagnosis of mental or physical condition by a health care professional, or deoxyribonucleic acid (DNA) profile
- Health insurance policy number, subscriber identification number, or any other unique identifier used by a health insurer to identify the person
- Unique biometric data generated from measurements or analysis of human body characteristics for authentication purposes
- An individual taxpayer identification number

### Exclusions
Personal information does not include publicly available information that is lawfully made available to the general public from federal, state, or local government records or widely-distributed media.

### Security Breach Definition
The unauthorized acquisition of computerized data that compromises the security, confidentiality, or integrity of personal information.

### Good-Faith Exception
Good-faith acquisition of personal information by an employee or agent of an entity for the purposes of the entity is not a breach of the security of the system, provided that the personal information is not used for an unauthorized purpose or subject to further unauthorized disclosure.

## Notification Requirements & Triggers

### Risk of Harm Standard
An entity must provide notice of a breach to Delaware residents whose personal information was breached. Notification is not required if, after an appropriate investigation, the entity reasonably determines that the breach of security is unlikely to result in any harm to the individuals whose personal information has been breached.

### Timing of Notification to Affected Individuals
Without unreasonable delay but not later than **60 days** after determination of the breach of security.

**Additional Timing Provision:** If the entity cannot, through reasonable diligence, identify within 60 days that the personal information of certain Delaware residents was included in a breach of security, the entity must provide notice as soon as practicable after the determination that the breach included the personal information of such residents, unless substitute notice was provided.

### Notification Methods
Notice may be provided by one of the following methods:
- Written notice
- Telephonic notice
- Electronic notice, if the notice provided is consistent with 15 U.S.C. § 7001 (E-Sign Act), or if the person's primary means of communication with the resident is by electronic means

### Special Rules for Email Credentials
For breaches of login credentials for an email account furnished by the entity, notice may not be provided to the breached email address, but may be provided via methods otherwise permitted, or by clear and conspicuous notice delivered to the resident online when the resident is connected to the online account from an IP address or online location from which the person knows the resident customarily accesses the account.

### Credit Monitoring Services
**Trigger:** If the breach of security includes Social Security numbers, the entity must offer to each resident whose Social Security number was affected, credit monitoring services at no cost to such resident.

**Duration:** Credit monitoring services must be offered for a period of **1 year**.

**Additional Information:** The entity must provide all information necessary for such resident to enroll in such services and must include information on how such resident can place a credit freeze on his or her credit file.

### Substitute Notice Available
If the entity demonstrates that:
- The cost of providing notice will exceed **$75,000**, OR
- The number of Delaware residents to be notified exceeds **100,000**, OR
- The entity does not have sufficient contact information

**Substitute Notice Content:** Substitute notice shall consist of all of the following:
- Email notice, if the entity has email addresses for the members of the affected class of Delaware residents
- Conspicuous posting of the notice on the website of the entity, if the entity maintains one
- Notice to major statewide media, including newspapers, radio, television, and publications, on the major social media platforms of the person providing notice

### Own Notification Policy Exception
An entity that maintains its own notification procedures as part of an information security policy for the treatment of personal information, and whose procedures are otherwise consistent with the timing requirements of the statute, is deemed to be in compliance with the notice requirements of the statute if the entity notifies affected Delaware residents in accordance with its policies in the event of a breach of the security of the system.

### Attorney General Notification
**Requirement:** If the number of Delaware residents to be notified exceeds **500** residents, the entity must notify the Attorney General.

**Timing:** Notice must be provided no later than the time when notice is provided to the resident.

### Third-Party/Vendor Obligations
An entity that maintains computerized data that includes personal information that the entity does not own or license must give notice to and cooperate with the owner or licensee of the information immediately following determination of the breach. Cooperation includes sharing information relevant to the breach.

## Exemptions, Penalties, and Other Provisions

### Encryption Safe Harbor
The law provides a safe harbor for data that is encrypted or redacted, provided the encryption key or credential necessary to render the information useable was not also acquired.

### Regulatory Exemptions
An entity is deemed in compliance with this chapter if:
- It is regulated by state or federal law, including HIPAA or GLBA
- It maintains procedures for a breach of security pursuant to requirements established by its primary or functional state or federal regulator
- It notifies affected Delaware residents in accordance with the maintained procedures

### Penalties
The Attorney General may bring an action to address violations of this chapter and for other relief that may be necessary to ensure compliance and recover direct economic damages.

### Private Right of Action
The statute does not provide for a private right of action.

## Key Provisions

### Delay for Law Enforcement
Notice may be delayed if a law enforcement agency determines that the notice will impede a criminal investigation. Notice required by the statute must be made without unreasonable delay and as soon as possible after the law enforcement agency determines that notification will no longer impede the investigation.

### Attorney General Enforcement
The Attorney General may bring an action to address violations of this chapter and for other relief that may be necessary to ensure compliance and recover direct economic damages.
