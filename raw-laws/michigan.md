---
# ===================================================================
# :: CORE INFORMATION
# ===================================================================
state: "Michigan"
state_code: "MI"
jurisdiction_type: "U.S. State"
statute_citation: "Mich. Comp. Laws § 445.63, 72 et seq."
statute_title: "Michigan Data Security Breach Notification Act"
statute_url: "http://www.legislature.mi.gov/(S(coogkoj4auhryicmiduwiqyr))/mileg.aspx?page=getObject&objectName=mcl-Act-452-of-2004"

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
legislation_bill_1_number: "S.B. 309"
legislation_bill_1_signed_date: "2006-12-30"
legislation_bill_1_effective_date: "2007-07-02"
legislation_bill_2_number: "S.B. 223"
legislation_bill_2_signed_date: "2010-12-21"
legislation_bill_2_effective_date: "2011-04-01"
legislation_bill_3_number: "H.B. 6406"
legislation_bill_3_signed_date: "2018-12-28"
legislation_bill_3_effective_date: "2020-01-20"

# ===================================================================
# :: BREACH DEFINITION
# ===================================================================
breach_definition_text: "The unauthorized access and acquisition of data that compromises the security or confidentiality of personal information maintained by an Entity as part of a database of personal information regarding multiple individuals."
breach_trigger: "unauthorized_acquisition"
breach_access_alone_triggers: false
breach_acquisition_alone_triggers: true

# ===================================================================
# :: ENCRYPTION SAFE HARBOR
# ===================================================================
exemption_encryption_safe_harbor: true
exemption_encryption_safe_harbor_negated_if_key_compromised: true
exemption_encryption_description: "Data that is encrypted"

# ===================================================================
# :: RISK OF HARM ANALYSIS
# ===================================================================
risk_of_harm_analysis_is_required: true
risk_of_harm_analysis_can_eliminate_notification: true
risk_of_harm_analysis_standard: "Notification not required if Entity determines that security breach has not or is not likely to cause substantial loss or injury to, or result in identity theft with respect to, one or more residents of Michigan"
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
individual_notification_timeline_description: "Without unreasonable delay following discovery of the breach, consistent with measures necessary to determine the scope of the breach of the security of a system or restore the integrity of the system"
individual_notification_extensions_available: false
individual_notification_extension_max_days: 0
individual_notification_extension_request_deadline_days: 0
individual_notification_contents:
  - "Written in clear and conspicuous manner"
  - "Description of the security breach in general terms"
  - "Description of the type of personal information that is subject of unauthorized access or use"
  - "Generally describe what the agency/person has done to protect data from further breaches"
  - "Telephone number where recipient may obtain assistance or additional information"
  - "Reminder of need to remain vigilant for fraud and identity theft incidents"
individual_notification_methods:
  - "Written notice sent to postal address in records"
  - "Telephonic notice by individual (not recorded message; requires express consent or live conversation within 3 business days)"
  - "Electronic notice, if express consent, existing business relationship with email, or conducts business primarily on Internet"

# ===================================================================
# :: SUBSTITUTE NOTIFICATION
# ===================================================================
substitute_notification_is_available: true
substitute_notification_cost_trigger: 250000
substitute_notification_affected_count_trigger: 500000
substitute_notification_insufficient_contact_info_trigger: true
substitute_notification_other_triggers: []
substitute_notification_methods:
  - "Email notice if entity has email addresses for residents"
  - "Conspicuous posting on entity website, if entity maintains one"
  - "Notification to major statewide media including telephone number or website address for additional assistance"

# ===================================================================
# :: ATTORNEY GENERAL NOTIFICATION
# ===================================================================
ag_notification_is_required: false
ag_notification_threshold: null
ag_notification_threshold_description: "No specific notification requirement; Attorney General has enforcement authority but no notification obligation"
ag_notification_timeline_days: null
ag_notification_timeline_description: null
ag_notification_recipients: null
ag_notification_contents: []

# ===================================================================
# :: CONSUMER REPORTING AGENCY NOTIFICATION
# ===================================================================
cra_notification_is_required: true
cra_notification_threshold: 1000
cra_notification_threshold_description: "If entity notifies 1,000 or more Michigan residents"
cra_notification_timeline_days: 0
cra_notification_timeline_description: "After notifying residents, entity shall notify each nationwide consumer reporting agency without unreasonable delay. Does not apply if subject to GLBA Title V."
cra_notification_recipients: "Each nationwide consumer reporting agency"
cra_notification_contents:
  - "Number of notices provided to residents"
  - "Timing of notices provided to residents"

# ===================================================================
# :: VENDOR NOTIFICATION (Third-Party Data Processors)
# ===================================================================
vendor_notification_is_required: true
vendor_notification_timeline_days: 0
vendor_notification_timeline_description: "Entity that maintains database including data not owned or licensed that discovers breach shall provide notice to owner or licensor, unless entity determines breach has not or is not likely to cause substantial loss or injury or result in identity theft"
owner_liability_for_vendor_failure: "Third-party must notify owner or licensor unless breach determined not to cause substantial loss, injury, or identity theft risk"
vendor_cooperation_required: false

# ===================================================================
# :: EXEMPTIONS
# ===================================================================
exemption_hipaa: true
exemption_hipaa_description: "HIPAA-covered entities and health care providers regulated by federal rules"
exemption_glba: true
exemption_glba_description: "Financial institutions subject to GLBA Title V and Federal Interagency Guidance"
exemption_primary_regulator: true
exemption_primary_regulator_description: "Financial institution subject to Federal Interagency Guidance issued March 7, 2005"
exemption_own_notification_policy: false
exemption_own_notification_policy_description: null
exemption_other_description: "Insurers regulated under Michigan insurance code governed by H.B. 6491/Public Act 690 (effective January 20, 2021)"

# ===================================================================
# :: ENFORCEMENT
# ===================================================================
enforcement_private_right_of_action: false
enforcement_authority: "Attorney General"
enforcement_authority_is_exclusive: false
enforcement_type_damages_description: "Civil and criminal penalties"

# ===================================================================
# :: PENALTIES
# ===================================================================
enforcement_penalty_per_day: 0
enforcement_penalty_per_individual: 0
enforcement_penalty_per_record: 0
enforcement_penalty_per_violation: 250
enforcement_penalty_flat_amount: 0
enforcement_penalty_maximum: 750000
enforcement_penalty_basis: "per_security_breach"
enforcement_penalty_notes: "$250 per violation; maximum $750,000 per security breach for failures to provide notice. Criminal penalties also available: for fraudulent notices (up to 30 days imprisonment or $250 per violation, escalating for repeat violations) and for misrepresenting breach has occurred (up to 93 days or $1,000 per violation, escalating)"

# ===================================================================
# :: SPECIAL PROVISIONS
# ===================================================================
provision_law_enforcement_delay: true
provision_law_enforcement_delay_description: "Notice may be delayed if law enforcement agency determines notification will impede criminal investigation or jeopardize homeland or national security. Notification given as soon as reasonably practicable after law enforcement determines it will not impede investigation."
provision_government_entities_are_subject: true
provision_government_entities_notes: null
provision_waiver_not_permitted: false
provision_notice_at_collection_required: false
provision_other_description: "Criminal penalties available for fraudulent notices and misrepresenting breaches. Public utilities sending monthly billing may provide notice through email, media notice, website posting, and written notice with billing statement. Entities may deliver notice through agreement with another entity if agreement does not conflict with Michigan law. Insurance exemption for insurers regulated under Michigan insurance code. Telephonic notice has special requirements."

# ===================================================================
# :: OBSIDIAN TAGS
# ===================================================================
tags:
  - DataBreachLaws/Breach/trigger/acquisition
  - DataBreachLaws/Exempts/federal-regulator
  - DataBreachLaws/Exempts/glba
  - DataBreachLaws/Exempts/hipaa
  - DataBreachLaws/Exempts/insurance
  - DataBreachLaws/Notice/AG/not-required
  - DataBreachLaws/Notice/CRA/required/threshold/1000
  - DataBreachLaws/Notice/Consumer/asap
  - DataBreachLaws/PII/financial-accounts
  - DataBreachLaws/RiskOfHarm/allowed
---

# Michigan Data Breach Notification Law

## Overview
- **Statutory Citation:** `Mich. Comp. Laws § 445.63, 72 et seq.`)/mileg.aspx?page=getObject&objectName=mcl-Act-452-of-2004)
- **Statute Title:** [Michigan Data Security Breach Notification Act](http://www.legislature.mi.gov/(S(coogkoj4auhryicmiduwiqyr))/mileg.aspx?page=getObject&objectName=mcl-Act-452-of-2004)
- **Jurisdiction Type:** U.S. State
- **Legislative History:**
  - **Original Legislation:** S.B. 309 (signed December 30, 2006, Public Act 566, effective July 2, 2007)
  - **Major Amendments:**
    - S.B. 223 (signed December 21, 2010, effective April 1, 2011)
    - H.B. 6406 (signed December 28, 2018, effective January 20, 2020)
  - **Last Verified:** September 2025

## Application & Covered Entities
Any individual, partnership, corporation, limited liability company, association, or other legal entity, or any department, board, commission, office, agency, authority, or other unit of state government of Michigan that owns or licenses data including personal information of a Michigan resident.

## Key Definitions

### Personal Information
The first name or first initial and last name linked to one or more of the following data elements of a resident of Michigan:
- Social Security number
- Driver's license number or state personal identification card number
- Demand deposit or other financial account number, or credit card or debit card number, in combination with any required security code, access code, or password that would permit access to any of the resident's financial accounts

### Breach of Security
The unauthorized access and acquisition of data that compromises the security or confidentiality of personal information maintained by an Entity as part of a database of personal information regarding multiple individuals.

### Good-Faith Exception
A good-faith but unauthorized acquisition of personal information by an employee or other individual, where the access was related to the activities of the Entity, is not a breach of security unless the personal information is misused or disclosed to an unauthorized person. In making this determination, an Entity shall act with the care an ordinarily prudent Entity in a like position would exercise under similar circumstances.

## Notification Requirements & Triggers

### Notification Obligation
An Entity that owns or licenses data including Michigan residents shall provide notice of the breach to each resident of Michigan if (i) the resident's unencrypted and unredacted personal information was accessed and acquired by an unauthorized person or (ii) the resident's personal information was accessed and acquired in encrypted form by a person with unauthorized access to the encryption key.

**Exception:** Notification is not required if the Entity determines that the security breach has not or is not likely to cause substantial loss or injury to, or result in identity theft with respect to, one or more residents of Michigan. This section does not apply to the access or acquisition by a person or agency of federal, state, or local government records or documents lawfully made available to the general public.

### Timing of Notification
The notification shall be given without unreasonable delay following discovery of the breach, consistent with measures necessary to determine the scope of the breach of the security of a system or restore the integrity of the system.

### Notification Methods
Notice may be provided by one of the following methods:
- Written notice sent to the recipient at the recipient's postal address in the records of the Entity
- Telephonic notice given by an individual who represents the Entity if (i) the notice is not given in whole or in part by use of a recorded message, (ii) the recipient has expressly consented to receive notice by telephone, or if the recipient has not expressly consented to receive notice by telephone, the Entity also provides notice pursuant to the above methods if the notice by telephone does not result in a live conversation between the individual representing the Entity and the recipient within 3 business days after the initial attempt to provide telephonic notice
- Written notice sent electronically to the recipient if (i) the recipient has expressly consented to receive electronic notice, (ii) the Entity has an existing business relationship with the recipient that includes periodic email communications and based on those communications the Entity reasonably believes that it has the recipient's current email address, or (iii) the Entity conducts its business primarily through Internet account transactions or on the Internet

### Content of Notice to Individuals
A notice under the statute shall:
- Be written in a clear and conspicuous manner, and shall clearly communicate the content required
- Describe the security breach in general terms
- Describe the type of personal information that is the subject of the unauthorized access or use
- If applicable, generally describe what the agency or person providing the notice has done to protect data from further security breaches
- Include a telephone number where a notice recipient may obtain assistance or additional information
- Remind notice recipients of the need to remain vigilant for incidents of fraud and identity theft

### Consumer Reporting Agency Notification
If an Entity notifies **1,000** or more Michigan residents, the Entity shall, after notifying those residents, notify each nationwide consumer reporting agency without unreasonable delay of the number and timing of notices that the person or agency provided to residents of the state. This subsection does not apply if the person or agency is subject to Title V of the Gramm-Leach-Bliley Act.

### Substitute Notice Available
If the Entity demonstrates that:
- The cost of providing notice would exceed **$250,000**, OR
- The Entity has to provide notice to more than **500,000** residents of Michigan, OR
- The Entity does not have sufficient contact information

Substitute notice shall consist of all of the following:
- Email notice, if the Entity has email addresses for any of the residents of Michigan who are entitled to receive notice
- Conspicuous posting on the Entity's website, if the Entity maintains one
- Notification to major statewide media, which notice shall include a telephone number or website address that a person may use to obtain additional assistance and information

### Public Utility Notice
A public utility that sends monthly billing or account statements to its customers may provide notice of a security breach to its customers as provided under the statute or by providing all of the following:
- As applicable, email notice in accordance with the statute
- Notice to the media reasonably calculated to inform the utility's customers of the breach
- Conspicuous posting of notice of the security breach on the website of the utility
- Written notice sent in conjunction with the billing or account statement sent to the customer at his or her postal address in the utility's records

### Third-Party Data Notification
An Entity that maintains a database that includes data that the Entity does not own or license that discovers a breach of the security of the database shall provide notice to the owner or licensor of the information of the security breach, unless the Entity determines that the security breach has not or is not likely to cause substantial loss or injury to, or result in identity theft with respect to one or more residents of Michigan.

## Exemptions, Penalties, and Other Provisions

### Encryption Safe Harbor
The law provides a safe harbor for encrypted data.

### Federal Interagency Guidance
A financial institution that is subject to and in compliance with the Federal Interagency Guidance Response Programs for Unauthorized Access to Consumer Information and Customer Notice, issued on March 7, 2005, by the Board of Governors of the Federal Reserve System, the Federal Deposit Insurance Corporation, the Office of the Comptroller of the Currency, and the Office of Thrift Supervision, and any revisions, additions, or substitutions relating to said interagency guidance, shall be deemed to be in compliance.

### HIPAA-Covered Entities
A provider of health care, health care service plan, health insurer, or a covered entity governed by the medical privacy and security rules issued by the federal Department of Health and Human Services pursuant to the Health Insurance Portability and Accountability Act of 1996 (HIPAA) shall be deemed in compliance with this chapter.

### Insurers
Entities subject to, or regulated under Michigan's insurance code are exempt from the state's data breach notification statute and instead will be governed by H.B. 6491/Public Act 690 of 2018, which goes into effect January 20, 2021.

### Penalties
**Criminal Penalties:** Provides for criminal penalties for notice of a security breach that has not occurred, where such notice is given with the intent to defraud. The offense is a misdemeanor, punishable by imprisonment for not more than 30 days or a fine of not more than **$250** per violation (or both). The penalty is the same for second and third violations, except that the fine increases to **$500** per violation and **$750** per violation, respectively.

Similarly, Entities who distribute an advertisement or make any other solicitation that misrepresents to the recipient that a security breach has occurred that may affect the recipient are punishable by imprisonment for not more than 93 days or a fine of not more than **$1,000** per violation (or both). The penalty is the same for second and third violations, except that the fine increases to **$2,000** per violation and **$3,000** per violation, respectively.

**Civil Penalties:** Entities who fail to provide notice may be ordered to pay a civil fine of not more than **$250** for each failure to provide notice, capped at **$750,000** per security breach. These penalties do not affect the availability of civil remedies under state or federal law.

### Private Right of Action
The statute does not include a private right of action but notes that other legal remedies are not eliminated.

## Key Provisions

### Delay for Law Enforcement
Notice may be delayed if a law enforcement agency determines that the notice will impede a criminal investigation or jeopardize homeland or national security. Notification shall be given as soon as reasonably practicable after the law enforcement agency determines that it will not impede a criminal investigation and will not jeopardize homeland or national security.

### Attorney General Enforcement
The Attorney General has authority to enforce this statute.

### Third-Party Delivery
Entities may deliver notice pursuant to an agreement with another Entity, if the agreement does not conflict with Michigan law.
