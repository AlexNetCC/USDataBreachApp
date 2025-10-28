---
# ===================================================================
# :: CORE INFORMATION
# ===================================================================
state: "Florida"
state_code: "FL"
jurisdiction_type: "U.S. State"
statute_citation: "Fla. Stat. § 501.171"
statute_title: "Florida Information Protection Act"
statute_url: "http://www.leg.state.fl.us/Statutes/index.cfm?App_mode=Display_Statute&URL=0500-0599/0501/Sections/0501.171.html"

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
legislation_bill_1_number: "S.B. 1524"
legislation_bill_1_signed_date: "2014-06-20"
legislation_bill_1_effective_date: "2014-07-01"
legislation_bill_2_number: "S.B. 1526"
legislation_bill_2_signed_date: "2014-06-20"
legislation_bill_2_effective_date: "2014-07-01"
legislation_bill_3_number: "S.B. 262"
legislation_bill_3_signed_date: "2023-06-06"
legislation_bill_3_effective_date: "2024-07-01"

# ===================================================================
# :: BREACH DEFINITION
# ===================================================================
breach_definition_text: "The unauthorized access of data in electronic form containing personal information."
breach_trigger: "unauthorized_access"
breach_access_alone_triggers: true
breach_acquisition_alone_triggers: true

# ===================================================================
# :: ENCRYPTION SAFE HARBOR
# ===================================================================
exemption_encryption_safe_harbor: true
exemption_encryption_safe_harbor_negated_if_key_compromised: true
exemption_encryption_description: "Data that is encrypted, secured, or modified by any other method or technology that removes elements that personally identify an individual or that otherwise renders the information unusable"

# ===================================================================
# :: RISK OF HARM ANALYSIS
# ===================================================================
risk_of_harm_analysis_is_required: true
risk_of_harm_analysis_can_eliminate_notification: true
risk_of_harm_analysis_standard: "Notice is not required if, after an appropriate investigation and consultation with relevant federal, state, or local law enforcement agencies, the entity reasonably determines that the breach has not and will not likely result in identity theft or any other financial harm to the individuals whose personal information has been accessed. Such a determination must be documented in writing and maintained for at least 5 years."
risk_of_harm_analysis_documentation_required: true
risk_of_harm_analysis_documentation_retention_years: 5
risk_of_harm_analysis_ag_notification_required: false
risk_of_harm_analysis_ag_notification_threshold: 0
risk_of_harm_analysis_ag_notification_timeline_days: 0

# ===================================================================
# :: INDIVIDUAL NOTIFICATION
# ===================================================================
individual_notification_is_required: true
individual_notification_timeline_days: 30
individual_notification_timeline_description: "Notice must be made as expeditiously as practicable and without unreasonable delay, but no later than 30 days after the determination of a breach or reasons to believe a breach occurred, taking into account the time necessary to allow the entity to determine the scope of the breach of security, to identify individuals affected by the breach, and to restore the reasonable integrity of the data system that was breached."
individual_notification_extensions_available: true
individual_notification_extension_max_days: 15
individual_notification_extension_request_deadline_days: 30
individual_notification_contents:
  - "The date, estimated date, or estimated date range of the breach"
  - "A description of the personal information that was accessed or reasonably believed to have been accessed as a part of the breach"
  - "Information that the individual can use to contact the entity to inquire about the breach and the personal information that the entity maintained about the individual"
individual_notification_methods:
  - "Written notice sent to the mailing address of the individual in the records of the entity"
  - "Email notice sent to the individual's email address in the entity's records"

# ===================================================================
# :: SUBSTITUTE NOTIFICATION
# ===================================================================
substitute_notification_is_available: true
substitute_notification_cost_trigger: 250000
substitute_notification_affected_count_trigger: 500000
substitute_notification_insufficient_contact_info_trigger: true
substitute_notification_other_triggers: []
substitute_notification_methods:
  - "Conspicuous posting of the notice on the entity's website, if the entity maintains one"
  - "Notification in print and to broadcast media, including major media in urban and rural areas"

# ===================================================================
# :: ATTORNEY GENERAL NOTIFICATION
# ===================================================================
ag_notification_is_required: true
ag_notification_threshold: 500
ag_notification_threshold_description: "If breach affects 500 or more individuals in Florida"
ag_notification_timeline_days: 30
ag_notification_timeline_description: "Entity must provide notice to the Department of Legal Affairs as expeditiously as practicable, but no later than 30 days after the determination of the breach or reason to believe a breach occurred."
ag_notification_recipients: null
ag_notification_contents:
  - "A synopsis of the events surrounding the breach at the time notice is provided"
  - "The number of individuals in Florida who were or potentially have been affected by the breach"
  - "Any services related to the breach being offered or scheduled to be offered, without charge, by the entity to individuals, and instructions as to how to use such services"
  - "A copy of the notice required to affected individuals or an explanation of the other actions taken to give notice to affected individuals"
  - "The name, address, telephone number, and email address of the employee or agent of the entity from whom additional information may be obtained about the breach"

# ===================================================================
# :: CONSUMER REPORTING AGENCY NOTIFICATION
# ===================================================================
cra_notification_is_required: true
cra_notification_threshold: 1000
cra_notification_threshold_description: "If notice is required to more than 1,000 Florida residents"
cra_notification_timeline_days: 0
cra_notification_timeline_description: "Without unreasonable delay, the entity shall notify all nationwide consumer reporting agencies of the timing, distribution, and content of the notices"
cra_notification_recipients: null
cra_notification_contents:
  - "Timing, distribution, and content of the notices"

# ===================================================================
# :: VENDOR NOTIFICATION (Third-Party Data Processors)
# ===================================================================
vendor_notification_is_required: true
vendor_notification_timeline_days: 10
vendor_notification_timeline_description: "Any third-party agent shall disclose to the entity for which the information is maintained any breach of the security of the system as soon as practicable, but no later than 10 days following the determination of the breach or reason to believe the breach occurred"
owner_liability_for_vendor_failure: "A third-party agent's failure to provide proper notice shall be deemed a violation against the entity (not the third-party agent)"
vendor_cooperation_required: false

# ===================================================================
# :: EXEMPTIONS
# ===================================================================
exemption_hipaa: false
exemption_hipaa_description: null
exemption_glba: false
exemption_glba_description: null
exemption_primary_regulator: true
exemption_primary_regulator_description: "Notification pursuant to laws, rules, regulations, guidance, or guidelines established by entity's primary or functional state regulator is sufficient for compliance"
exemption_own_notification_policy: false
exemption_own_notification_policy_description: null
exemption_other_description: null

# ===================================================================
# :: ENFORCEMENT
# ===================================================================
enforcement_private_right_of_action: false
enforcement_authority: "Attorney General"
enforcement_authority_is_exclusive: false
enforcement_type_damages_description: "Administrative fines - treated as unfair or deceptive trade practice"

# ===================================================================
# :: PENALTIES
# ===================================================================
enforcement_penalty_per_day: 1000
enforcement_penalty_per_individual: 0
enforcement_penalty_per_record: 0
enforcement_penalty_per_violation: 0
enforcement_penalty_flat_amount: 0
enforcement_penalty_maximum: 500000
enforcement_penalty_basis: "Per breach (not per individual), up to 180 days"
enforcement_penalty_notes: "$1,000 per day for first 30 days, then $50,000 per 30-day period up to 180 days; maximum $500,000 per breach"

# ===================================================================
# :: SPECIAL PROVISIONS
# ===================================================================
provision_law_enforcement_delay: true
provision_law_enforcement_delay_description: "Notice to individuals may be delayed for a specified period that the law enforcement agency determines is reasonably necessary in a written request if a law enforcement agency determines that the notice will impede a criminal investigation. A law enforcement agency may, by a subsequent written request, revoke such delay as of a specified date or extend the period specified in the original request."
provision_government_entities_are_subject: true
provision_government_entities_notes: null
provision_waiver_not_permitted: false
provision_notice_at_collection_required: false
provision_other_description: "Credit monitoring required if breach involves Social Security numbers; entity must offer complimentary credit monitoring services. Public records exemption: All information received by the Department is confidential and exempt from public records requirements. Extensions available: Entity may receive 15 additional days to provide notice to affected individuals if good cause for delay is provided in writing to the Department within 30 days after determination."

# ===================================================================
# :: OBSIDIAN TAGS
# ===================================================================
tags:
  - DataBreachLaws/Breach/trigger/access
  - DataBreachLaws/Exempts/federal-regulator
  - DataBreachLaws/Notice/AG/required/threshold/500
  - DataBreachLaws/Notice/AG/required/timing/30days
  - DataBreachLaws/Notice/CRA/required/threshold/1000
  - DataBreachLaws/Notice/Consumer/30days
  - DataBreachLaws/PII/biometric
  - DataBreachLaws/PII/geolocation
  - DataBreachLaws/PII/health-info
  - DataBreachLaws/PII/government-id
  - DataBreachLaws/RiskOfHarm/allowed
---
# Florida Data Breach Notification Law

## Overview
- **Statutory Citation:** `Fla. Stat. § 501.171`
- **Statute Title:** [Florida Information Protection Act](http://www.leg.state.fl.us/Statutes/index.cfm?App_mode=Display_Statute&URL=0500-0599/0501/Sections/0501.171.html)
- **Jurisdiction Type:** U.S. State
- **Legislative History:**
  - **Original Legislation:** S.B. 1524 (signed June 20, 2014, effective July 1, 2014)
  - **Major Amendments:**
    - S.B. 1526 (signed June 20, 2014, effective July 1, 2014)
    - S.B. 262 (signed June 6, 2023, effective July 1, 2024)
  - **Last Verified:** September 2025

## Application & Covered Entities
Applies to a sole proprietorship, partnership, corporation, trust, estate, cooperative, association, or other commercial entity that acquires, maintains, stores, or uses personal information. For notice requirements, entity includes governmental entities. An entity that has been contracted to maintain, store, or process personal information on behalf of an entity or governmental entity is a "Third-Party Agent."

## Key Definitions

### Personal Information
An individual's first name or first initial and last name in combination with any one or more of the following data elements for that individual:
- Social Security number
- Driver's license or state identification card number, passport number, military identification number, or other similar number issued on a government document used to verify identity
- Financial account number or credit or debit card number in combination with any required security code, access code, or password that is necessary to permit access to an individual's financial account
- Information regarding an individual's medical history, mental or physical condition, or medical treatment or diagnosis by a health care professional
- Health insurance policy number or subscriber identification number and any unique identifier used by a health insurer to identify the individual
- **(As of July 1, 2024)** An individual's biometric information or genetic information
- **(As of July 1, 2024)** Any information regarding an individual's geolocation
- A username or email address, in combination with a password or security question and answer that would permit access to an online account

### Exclusions
Personal information does not include publicly available information that is made publicly available by a federal, state, or local governmental entity. The term also does not include information that is encrypted, secured, or modified by any other method or technology that removes elements that personally identify an individual or that otherwise renders the information unusable.

### Breach of Security
The unauthorized access of data in electronic form containing personal information.

### Good-Faith Exception
Good-faith access of personal information by an employee or agent of the entity is not a breach of the security of the system, provided the information is not used for a purpose unrelated to the business or subject to further unauthorized use.

## Notification Requirements & Triggers

### Notification Obligation
An entity must give notice to each individual in Florida whose personal information was, or the entity reasonably believes to have been, accessed as a result of the breach.

**Exception:** Notice is not required if, after an appropriate investigation and consultation with relevant federal, state, or local law enforcement agencies, the entity reasonably determines that the breach has not and will not likely result in identity theft or any other financial harm to the individuals whose personal information has been accessed. Such a determination must be documented in writing and maintained for at least 5 years.

### Timing of Notification
Notice must be made as expeditiously as practicable and without unreasonable delay, but no later than **30 days** after the determination of a breach or reasons to believe a breach occurred, taking into account the time necessary to allow the entity to determine the scope of the breach of security, to identify individuals affected by the breach, and to restore the reasonable integrity of the data system that was breached.

**Extension:** The entity may receive **15 additional days** to provide notice to affected individuals if good cause for delay is provided in writing to the Department within 30 days after determination.

### Notification Methods
Notice may be provided by one of the following methods:
- Written notice sent to the mailing address of the individual in the records of the entity
- Email notice sent to the individual's email address in the entity's records

### Content of Notice to Individuals
Notice must contain, at a minimum:
- The date, estimated date, or estimated date range of the breach
- A description of the personal information that was accessed or reasonably believed to have been accessed as a part of the breach
- Information that the individual can use to contact the entity to inquire about the breach and the personal information that the entity maintained about the individual

### Attorney General Notification
Entity must provide notice to the Department of Legal Affairs of any breach of security affecting **500** or more individuals in Florida.

**Timing:** Notice must be provided as expeditiously as practicable, but no later than 30 days after the determination of the breach or reason to believe a breach occurred.

**Required Information:** Written notice must include:
- A synopsis of the events surrounding the breach at the time notice is provided
- The number of individuals in Florida who were or potentially have been affected by the breach
- Any services related to the breach being offered or scheduled to be offered, without charge, by the entity to individuals, and instructions as to how to use such services
- A copy of the notice required to affected individuals or an explanation of the other actions taken to give notice to affected individuals
- The name, address, telephone number, and email address of the employee or agent of the entity from whom additional information may be obtained about the breach

**Upon Department Request:** Upon the Department's request, the entity must provide:
- A police report, incident report, or computer forensics report
- A copy of the policies in place regarding breaches
- Steps that have been taken to rectify the breach

### Consumer Reporting Agency Notification
If notice is required to more than **1,000** Florida residents, the entity shall also notify, without unreasonable delay, all nationwide consumer reporting agencies of the timing, distribution, and content of the notices.

### Substitute Notice Available
If the entity demonstrates that:
- The cost of providing notice would exceed **$250,000**, OR
- The affected class of subject persons to be notified exceeds **500,000**, OR
- The entity does not have sufficient contact information

Substitute notice shall consist of both of the following:
- Conspicuous posting of the notice on the entity's website, if the entity maintains one
- Notification in print and to broadcast media, including major media in urban and rural areas where the affected individuals reside

### Third-Party Data Notification
Any third-party agent shall disclose to the entity for which the information is maintained any breach of the security of the system as soon as practicable, but no later than **10 days** following the determination of the breach or reason to believe the breach occurred.

Upon receiving notice from a third-party agent, the entity for which the information is maintained shall provide notices to the Department and affected individuals. A third-party agent must provide the entity with all information that the entity needs to comply with notice requirements.

**Important:** A third-party agent may provide notice to the Department or affected individuals on behalf of the entity; however, a third-party agent's failure to provide proper notice shall be deemed a violation against the entity.

## Exemptions, Penalties, and Other Provisions

### Encryption Safe Harbor
The law provides a safe harbor for encrypted data or data modified to remove identifying elements.

### Primary Regulator Exemption
Notification pursuant to laws, rules, regulations, guidance, or guidelines established by an entity's primary or functional state regulator is sufficient for compliance.

### Credit Monitoring Services
If the breach involves Social Security numbers, the entity must offer complimentary credit monitoring services to affected individuals. Duration of credit monitoring services is not statutorily specified but various breach notifications indicate offerings of 12-24 months.

### Penalties
An entity that violates the statute is subject to the following administrative fines:
- A violation of this section shall be treated as an unfair or deceptive trade practice in any action brought by the Department against an entity or third-party agent
- An entity that fails to notify the Department or affected individuals shall be liable for a civil penalty not to exceed **$500,000** in the amount of **$1,000 for each day** the breach goes undisclosed for up to 30 days and, thereafter, **$50,000 for each 30-day period** or portion therefor for up to 180 days; or if the violation continues for more than 180 days, in an amount not to exceed **$500,000**. The civil penalties apply per breach, not per individual affected by the breach.

### Private Right of Action
There is no private cause of action.

## Key Provisions

### Delay for Law Enforcement
Notice to individuals may be delayed for a specified period that the law enforcement agency determines is reasonably necessary in a written request if a law enforcement agency determines that the notice will impede a criminal investigation. A law enforcement agency may, by a subsequent written request, revoke such delay as of a specified date or extend the period specified in the original request made to a specified date if further delay is necessary.

### Public Records Exemption
All information received by the Department pursuant to the notification requirements or pursuant to a law enforcement or Department investigation is confidential and exempt from the Public Records requirement under the State Constitution and statutes.

### Attorney General Enforcement
The Attorney General may bring an action to address violations of this statute.
