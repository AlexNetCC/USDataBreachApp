---
# ===================================================================
# :: CORE INFORMATION
# ===================================================================
state: "New York"
state_code: "NY"
jurisdiction_type: "U.S. State"
statute_citation: "N.Y. Gen. Bus. Law § 899-aa; N.Y. State Tech. Law § 208"
statute_title: "New York Stop Hacks and Improve Electronic Data Security Act (SHIELD Act)"
statute_url: "https://www.nysenate.gov/legislation/laws/GBS/899-AA"

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
legislation_bill_1_number: "A.B. 4254"
legislation_bill_1_signed_date: "2005-08-10"
legislation_bill_1_effective_date: "2005-12-07"
legislation_bill_2_number: "S. 2605-D"
legislation_bill_2_signed_date: "2013-03-28"
legislation_bill_2_effective_date: "2013-03-28"
legislation_bill_3_number: "S. 5575B (SHIELD Act)"
legislation_bill_3_signed_date: "2019-07-25"
legislation_bill_3_effective_date: "2019-10-23"
legislation_bill_4_number: "S. 02659"
legislation_bill_4_signed_date: "2024-12-21"
legislation_bill_4_effective_date: "2024-12-21"
legislation_bill_5_number: "S. 00804"
legislation_bill_5_signed_date: "2025-02-14"
legislation_bill_5_effective_date: "2025-02-14"

# ===================================================================
# :: BREACH DEFINITION
# ===================================================================
breach_definition_text: "Unauthorized access to or acquisition of, or access to or acquisition without valid authorization, of computerized data that compromises the security, confidentiality, or integrity of private information maintained by a business."
breach_trigger: "unauthorized_access_or_acquisition"
breach_access_alone_triggers: true
breach_acquisition_alone_triggers: true

# ===================================================================
# :: ENCRYPTION SAFE HARBOR
# ===================================================================
exemption_encryption_safe_harbor: true
exemption_encryption_safe_harbor_negated_if_key_compromised: true
exemption_encryption_description: "Data encrypted unless encryption key also acquired; if notice under HIPAA/HITECH, GLBA, or NY DFS Regulation, no separate individual notice required but regulatory notices still required"

# ===================================================================
# :: RISK OF HARM ANALYSIS
# ===================================================================
risk_of_harm_analysis_is_required: true
risk_of_harm_analysis_can_eliminate_notification: true
risk_of_harm_analysis_standard: "Inadvertent disclosure by authorized persons that will not likely result in misuse of information, financial harm, or emotional harm from unknown disclosure of online credentials"
risk_of_harm_analysis_documentation_required: true
risk_of_harm_analysis_documentation_retention_years: 5
risk_of_harm_analysis_ag_notification_required: true
risk_of_harm_analysis_ag_notification_threshold: 500
risk_of_harm_analysis_ag_notification_timeline_days: 10

# ===================================================================
# :: INDIVIDUAL NOTIFICATION
# ===================================================================
individual_notification_is_required: true
individual_notification_timeline_days: 30
individual_notification_timeline_description: "Most expedient time possible and without unreasonable delay, provided notification shall be made within 30 days after breach discovered, consistent with measures to determine scope of breach and restore reasonable integrity of system"
individual_notification_extensions_available: false
individual_notification_extension_max_days: 0
individual_notification_extension_request_deadline_days: 0
individual_notification_contents:
  - "Contact information for the Entity making the notification"
  - "The telephone numbers and websites of relevant state and federal agencies that provide information regarding security breach response and identity theft prevention and protection information"
  - "A description of the categories of information that were, or are reasonably believed to have been, accessed or acquired by a person without valid authorization, including specification of which elements of personal information and private information were, or are reasonably believed to have been, accessed or acquired"
individual_notification_methods:
  - "Written notice"
  - "Telephonic notice (provided log of each notification is kept)"
  - "Electronic notice (if expressly consented and log of notification is kept; not permitted as condition of business relationship)"

# ===================================================================
# :: SUBSTITUTE NOTIFICATION
# ===================================================================
substitute_notification_is_available: true
substitute_notification_cost_trigger: 250000
substitute_notification_affected_count_trigger: 500000
substitute_notification_insufficient_contact_info_trigger: true
substitute_notification_other_triggers: []
substitute_notification_methods:
  - "Email notice when Entity has email addresses (except if breached info includes email+password/security question, then provide notice online when connected to account)"
  - "Conspicuous posting on Entity website if Entity maintains one"
  - "Notification to major statewide media"

# ===================================================================
# :: ATTORNEY GENERAL NOTIFICATION
# ===================================================================
ag_notification_is_required: true
ag_notification_threshold: 1
ag_notification_threshold_description: "Required if any New York residents are to be notified (threshold of 1). HIPAA Covered Entities notifying HHS Secretary must notify Attorney General within 5 days."
ag_notification_timeline_days: 30
ag_notification_timeline_description: "Required when notice provided to New York residents within 30 days; state Attorney General form must be used. HIPAA entities: 5 days when notifying HHS."
ag_notification_recipients: "State Attorney General, Department of State consumer protection board, Division of State Police; Department of Financial Services for DFS-regulated entities"
ag_notification_contents:
  - "Timing of the notices"
  - "Content and distribution of the notices"
  - "Approximate number of affected persons"
  - "Copy of template notice sent to affected persons"

# ===================================================================
# :: CONSUMER REPORTING AGENCY NOTIFICATION
# ===================================================================
cra_notification_is_required: true
cra_notification_threshold: 5000
cra_notification_threshold_description: "If more than 5,000 New York residents are to be notified at one time"
cra_notification_timeline_days: 0
cra_notification_timeline_description: "Upon meeting threshold"
cra_notification_recipients: "Major consumer reporting agencies"
cra_notification_contents:
  - "Timing of the notices"
  - "Content and distribution of the notices"
  - "Approximate number of affected persons"

# ===================================================================
# :: VENDOR NOTIFICATION (Third-Party Data Processors)
# ===================================================================
vendor_notification_is_required: true
vendor_notification_timeline_days: 30
vendor_notification_timeline_description: "Immediately, provided notification made within 30 days following discovery if private information accessed or acquired by person without valid authorization"
owner_liability_for_vendor_failure: "Third-party must notify owner/licensee within 30 days of discovery of breach"
vendor_cooperation_required: false

# ===================================================================
# :: EXEMPTIONS
# ===================================================================
exemption_hipaa: true
exemption_hipaa_description: "Entities subject to HIPAA/HITECH complying with those regulations exempt from separate individual notification (but still must notify AG within 5 days when notifying HHS Secretary)"
exemption_glba: true
exemption_glba_description: "Entities subject to GLBA Title V complying with those regulations exempt from separate individual notification (but regulatory notices still required)"
exemption_primary_regulator: false
exemption_primary_regulator_description: null
exemption_own_notification_policy: true
exemption_own_notification_policy_description: "Entity with own notification procedures and timelines consistent with statute may use those"
exemption_other_description: "NY DFS Cybersecurity Regulation (Part 500 of Title 23): Compliance with DFS regulation sufficient with AG notification for DFS-regulated entities"

# ===================================================================
# :: ENFORCEMENT
# ===================================================================
enforcement_private_right_of_action: false
enforcement_authority: "Attorney General"
enforcement_authority_is_exclusive: false
enforcement_type_damages_description: "Attorney General may enjoin and restrain violations. For knowing or willful violations: $5,000 or up to $20 per failed notification (whichever greater), capped at $250,000"

# ===================================================================
# :: PENALTIES
# ===================================================================
enforcement_penalty_per_day: 0
enforcement_penalty_per_individual: 20
enforcement_penalty_per_record: 0
enforcement_penalty_per_violation: 5000
enforcement_penalty_flat_amount: 0
enforcement_penalty_maximum: 250000
enforcement_penalty_basis: "For knowing or willful violations; whichever is greater ($5,000 or $20 per failed notification)"
enforcement_penalty_notes: "For knowing or willful violations: $5,000 OR $20 per failed individual notification, whichever is greater, with maximum cap of $250,000"

# ===================================================================
# :: SPECIAL PROVISIONS
# ===================================================================
provision_law_enforcement_delay: true
provision_law_enforcement_delay_description: "Notification may be delayed if law enforcement determines notification impedes criminal investigation. Notification shall be made after law enforcement determines notification does not compromise investigation."
provision_government_entities_are_subject: true
provision_government_entities_notes: "Government entities subject EXCEPT judiciary, cities, counties, municipalities, villages, towns, and other local agencies"
provision_waiver_not_permitted: false
provision_notice_at_collection_required: false
provision_other_description: "SHIELD Act (comprehensive reform 2019). Both access and acquisition trigger breach. Explicit 30-day timeline. Risk of harm AG notification at 500+ threshold within 10 days. Documentation retained 5 years. Multiple agencies: AG, Dept of State, State Police, DFS for regulated entities. Online credentials special handling: provide notice online when connected to account. Good-faith employee exception. Access/acquisition determination factors provided. DFS-regulated entities subject to Part 500 cybersecurity requirements. Recent amendments in 2024 and 2025. Biometric data included in PII."

# ===================================================================
# :: OBSIDIAN TAGS
# ===================================================================
tags:
  - DataBreachLaws/Breach/trigger/access-or-acquisition
  - DataBreachLaws/Exempts/glba
  - DataBreachLaws/Exempts/hipaa
  - DataBreachLaws/Exempts/ny-dfs-regulation
  - DataBreachLaws/Exempts/own-policy
  - DataBreachLaws/Notice/AG/required/threshold/1
  - DataBreachLaws/Notice/AG/required/timing/30days
  - DataBreachLaws/Notice/CRA/required/threshold/5000
  - DataBreachLaws/Notice/Consumer/30days
  - DataBreachLaws/PII/biometric
  - DataBreachLaws/PII/financial-accounts
  - DataBreachLaws/PII/government-id
  - DataBreachLaws/PII/online-account-credentials
  - DataBreachLaws/RiskOfHarm/allowed/documentation-req
---

# New York Data Breach Notification Law

## Overview
- **Statutory Citations:** `N.Y. Gen. Bus. Law § 899-aa`; `N.Y. State Tech. Law § 208`
- **Statute Title:** [New York Stop Hacks and Improve Electronic Data Security Act (SHIELD Act)](https://www.nysenate.gov/legislation/laws/GBS/899-AA)
- **Jurisdiction Type:** U.S. State
- **Legislative History:**
  - **Original Legislation:** A.B. 4254 (signed August 10, 2005, effective December 7, 2005)
  - **Major Amendments:**
    - S. 2605-D (signed March 28, 2013, effective March 28, 2013)
    - S. 5575B (signed July 25, 2019, effective October 23, 2019) - SHIELD Act major expansion
    - S. 02659 (signed December 21, 2024)
    - S. 00804 (signed February 14, 2025)
  - **Last Verified:** September 2025

## Application & Covered Entities
Applies to any person, business, or state entity (excepting the judiciary, cities, counties, municipalities, villages, towns, and other local agencies) that conducts business in New York State and that owns or licenses computerized data that includes private information.

## Key Definitions

### Personal Information
Information concerning a natural person that, because of name, number, personal mark, or other identifier, can be used to identify such natural person.

### Private Information (Category 1)
Any information in combination with any one or more of the following data elements, **when either the data element or the combination of personal information plus the data element is not encrypted, or is encrypted with an encryption key that has also been accessed or acquired**:
- Social Security number
- Driver's license number or non-driver identification card number
- Account number, credit or debit card number, if circumstances exist wherein such number could be used to access an individual's financial account without additional identifying information, security code, access code, or password
- Biometric information (meaning data generated by electronic measurements of an individual's unique physical characteristics, such as fingerprint, voice print, retina or iris image, or other unique physical representation or digital representation of biometric data which are used to authenticate or ascertain the individual's identity)

### Private Information (Category 2)
A username or email address in combination with a password or security question and answer that would permit access to an online account.

### Exclusions
Private information does not include publicly available information which is lawfully made available to the general public from federal, state, or local government records.

### Breach of Security
Unauthorized access to or acquisition of, or access to or acquisition without valid authorization, of computerized data that compromises the security, confidentiality, or integrity of private information maintained by a business.

### Determining Access or Acquisition
In determining whether information has been accessed or acquired by an unauthorized person, Entities may consider among other factors:
- Indications that the information is in the physical possession and control of an unauthorized person, such as a lost or stolen computer or other device containing information
- Indications that the information has been downloaded or copied
- Indications that the information was used by an unauthorized person, such as fraudulent accounts opened or instances of identity theft reported

### Good-Faith Exception
Good-faith access to or acquisition of private information by an employee or agent of the Entity for the purposes of the Entity is not a breach of the security of the system, provided that the private information is not used or subject to unauthorized disclosure.

## Notification Requirements & Triggers

### Notification Obligation
Any Entity to which the statute applies shall disclose any breach of the security within **30 days** of discovery or notification of the breach in the security of the system to any resident of New York whose private information was, or is reasonably believed to have been, accessed or acquired by a person without valid authorization.

### Risk of Harm Standard
Notice to affected persons is **not required** if the exposure of private information was an inadvertent disclosure by persons authorized to access private information, and the Entity reasonably determines such exposure will not likely result in:
- Misuse of such information, OR
- Financial harm to the affected persons, OR
- Emotional harm in the case of unknown disclosure of online credentials

This determination must be **documented in writing and maintained for at least 5 years**. If more than **500** New York residents are affected, the Entity shall provide the written determination to the state Attorney General **within ten days** after the determination.

### Timing of Notification
The disclosure shall be made in the **most expedient time possible and without unreasonable delay**, provided that such notification shall be made **within 30 days** after the breach has been discovered, consistent with any measures necessary to determine the scope of the breach and restore the reasonable integrity of the system.

### Notification Methods
The notice required shall be directly provided to the affected persons by one of the following methods:
- Written notice
- Telephonic notice, provided that a log of each such notification is kept by the Entity
- Electronic notice, provided that the person to whom notice is required has expressly consented to receiving said notice in electronic form and a log of each such notification is kept by the Entity who notifies affected persons in such form. Provided further, that in no case shall any Entity require a person to consent to accepting said notice in said form as a condition of establishing any business relationship or engaging in any transaction

### Content of Notice to Individuals
- Contact information for the Entity making the notification
- The telephone numbers and websites of the relevant state and federal agencies that provide information regarding security breach response and identity theft prevention and protection information
- A description of the categories of information that were, or are reasonably believed to have been, accessed or acquired by a person without valid authorization, including specification of which of the elements of personal information and private information were, or are reasonably believed to have been, accessed or acquired

### Substitute Notice Available
If the Entity demonstrates to the state Attorney General that:
- The cost of providing notice would exceed **$250,000**, OR
- The affected class of subject persons to be notified exceeds **500,000**, OR
- The Entity does not have sufficient contact information

Substitute notice shall consist of **all** of the following:
- Email notice when the Entity has email addresses for the subject persons, **except** if the breached information includes an email address in combination with a password or security question and answer that would permit access to the online account, in which case the Entity shall instead provide clear and conspicuous notice delivered to the consumer online when the consumer is connected to the online account from an internet protocol address or from an online location which the Entity knows the consumer customarily uses to access the online account
- Conspicuous posting of the notice on the Entity's website, if the Entity maintains one
- Notification to major statewide media

### Attorney General Notification
**Requirement:** Required if **any** New York residents are to be notified.

**Who to Notify:**
- State Attorney General
- Department of State consumer protection board
- Division of State Police

**Special:** Entities regulated by the Department of Financial Services must also notify that department.

**Information Required:** Notice must detail timing, content and distribution of the notices and approximate number of affected persons, and shall provide a copy of the template notice sent to affected persons. The state Attorney General's website has a form to be used for notifications.

**HIPAA Covered Entities:** Any Covered Entity required to provide notification of a breach, including breach of information that is not "private information" as defined herein, to the Secretary of Health and Human Services pursuant to HIPAA or the HITECH Act, shall provide such notification to the state Attorney General **within 5 days** of notifying the Secretary.

### Consumer Reporting Agency Notification
Required if **more than 5,000** New York residents are to be notified at one time.

The Entity shall notify consumer reporting agencies as to the timing, content, and distribution of the notices and the approximate number of affected persons.

### Third-Party Data Notification
Any Entity that maintains computerized data that includes private information that the Entity does not own shall notify the owner or licensee of the information of any breach of the security of the system immediately, provided that such notification shall be made **within 30 days** following discovery, if the private information was, or is reasonably believed to have been, acquired by a person without valid authorization.

## Exemptions, Penalties, and Other Provisions

### Encryption Safe Harbor
The law provides a safe harbor for encrypted data, unless the encryption key was also acquired.

### Regulatory Compliance Exemptions
If notice of the breach of the security of the system is made pursuant to any of the following laws, nothing in this statute shall require separate notice to affected individuals, but notice must still be provided to the regulators noted above and the consumer reporting agencies:
- Regulations promulgated pursuant to Title V of the federal Gramm-Leach-Bliley Act (GLBA)
- Regulations implementing the Health Insurance Portability and Accountability Action of 1996 (HIPAA) and the Health Information Technology for Economic and Clinical Health Act (HITECH)
- Part 500 of Title 23 of the Code of the State of New York (NY DFS Cybersecurity Regulation)
- Any other data security rules and regulations of, and the statutes administered by, any official department, division, commission, or agency of the federal or New York state government

### Penalties
The Attorney General may bring an action to enjoin and restrain the continuation of such violation. For knowing or willful violations, civil penalties are the greater of:
- **$5,000**, OR
- Up to **$20 per failed notification**

Capped at **$250,000**.

### Private Right of Action
The statute does not provide for a private right of action.

## Key Provisions

### Delay for Law Enforcement
The notification required by this section may be delayed if a law enforcement agency determines that such notification impedes a criminal investigation. The required notification shall be made after such law enforcement agency determines that such notification does not compromise such investigation.

### Attorney General Enforcement
The Attorney General may bring an action to enjoin and restrain the continuation of such violation.

### NY DFS Regulation
Entities regulated by the Department of Financial Services must comply with Part 500 of Title 23 (NY DFS Cybersecurity Regulation) in addition to this statute.
