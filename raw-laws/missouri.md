---
# ===================================================================
# :: CORE INFORMATION
# ===================================================================
state: "Missouri"
state_code: "MO"
jurisdiction_type: "U.S. State"
statute_citation: "Mo. Rev. Stat. § 407.1500"
statute_title: "Missouri Data Breach Notification Law"
statute_url: "https://revisor.mo.gov/main/OneSection.aspx?section=407.1500"

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
legislation_bill_1_number: "H.B. 62"
legislation_bill_1_signed_date: "2009-08-28"
legislation_bill_1_effective_date: "2009-08-28"

# ===================================================================
# :: BREACH DEFINITION
# ===================================================================
breach_definition_text: "Unauthorized access to and unauthorized acquisition of personal information maintained in computerized form by an entity that compromises the security, confidentiality, or integrity of the personal information."
breach_trigger: "unauthorized_acquisition"
breach_access_alone_triggers: false
breach_acquisition_alone_triggers: true

# ===================================================================
# :: ENCRYPTION SAFE HARBOR
# ===================================================================
exemption_encryption_safe_harbor: true
exemption_encryption_safe_harbor_negated_if_key_compromised: true
exemption_encryption_description: "Data that is encrypted, redacted, or otherwise rendered unreadable or unusable"

# ===================================================================
# :: RISK OF HARM ANALYSIS
# ===================================================================
risk_of_harm_analysis_is_required: true
risk_of_harm_analysis_can_eliminate_notification: true
risk_of_harm_analysis_standard: "Risk of identity theft or other fraud not reasonably likely to occur"
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
individual_notification_timeline_description: "The disclosure notification shall be made without unreasonable delay and consistent with any measures necessary to determine sufficient contact information and to determine the scope of the breach and restore the reasonable integrity, security, and confidentiality of the data system"
individual_notification_extensions_available: false
individual_notification_extension_max_days: 0
individual_notification_extension_request_deadline_days: 0
individual_notification_contents:
  - "Description of the incident in general terms"
  - "The type of personal information that was obtained as a result of the breach"
  - "A telephone number that the affected consumer may call for further information and assistance, if one exists"
  - "Contact information for consumer reporting agencies"
  - "Advice that directs the affected consumer to remain vigilant by reviewing account statements and monitoring free credit reports"
individual_notification_methods:
  - "Written notice"
  - "Telephonic notice if made directly with affected consumers"
  - "Electronic notice for consumers with valid email addresses who agreed to receive communications electronically (E-Sign Act compliant)"

# ===================================================================
# :: SUBSTITUTE NOTIFICATION
# ===================================================================
substitute_notification_is_available: true
substitute_notification_cost_trigger: 100000
substitute_notification_affected_count_trigger: 150000
substitute_notification_insufficient_contact_info_trigger: true
substitute_notification_other_triggers:
  - "Unable to identify particular affected consumers"
substitute_notification_methods:
  - "Email notice when entity has email address for affected consumer"
  - "Conspicuous posting on entity website, if entity maintains one"
  - "Notification to major statewide media"

# ===================================================================
# :: ATTORNEY GENERAL NOTIFICATION
# ===================================================================
ag_notification_is_required: true
ag_notification_threshold: 1000
ag_notification_threshold_description: "If entity provides notice to more than 1,000 consumers at one time"
ag_notification_timeline_days: 0
ag_notification_timeline_description: "Entity shall notify, without unreasonable delay, the state Attorney General's office of the timing, distribution, and content of the notice"
ag_notification_recipients: "Attorney General's office"
ag_notification_contents:
  - "Timing of the notice"
  - "Distribution of the notice"
  - "Content of the notice"

# ===================================================================
# :: CONSUMER REPORTING AGENCY NOTIFICATION
# ===================================================================
cra_notification_is_required: true
cra_notification_threshold: 1000
cra_notification_threshold_description: "If entity notifies more than 1,000 consumers at one time"
cra_notification_timeline_days: 0
cra_notification_timeline_description: "Entity shall notify, without unreasonable delay, all nationwide consumer reporting agencies of the timing, distribution, and content of the notice"
cra_notification_recipients: "All nationwide consumer reporting agencies"
cra_notification_contents:
  - "Timing of the notice"
  - "Distribution of the notice"
  - "Content of the notice"

# ===================================================================
# :: VENDOR NOTIFICATION (Third-Party Data Processors)
# ===================================================================
vendor_notification_is_required: true
vendor_notification_timeline_days: 0
vendor_notification_timeline_description: "Any entity that maintains or possesses records or data containing personal information of residents of Missouri that the entity does not own or license shall notify the owner or licensee of the information of any breach of security immediately following discovery of the breach, consistent with legitimate needs of law enforcement"
owner_liability_for_vendor_failure: "Third-party must notify owner/licensee immediately after discovery of breach"
vendor_cooperation_required: false

# ===================================================================
# :: EXEMPTIONS
# ===================================================================
exemption_hipaa: false
exemption_hipaa_description: null
exemption_glba: true
exemption_glba_description: "Financial institutions subject to Federal Interagency Guidance or NCUA regulations or GLBA Title V"
exemption_primary_regulator: true
exemption_primary_regulator_description: "Entity regulated by state or federal law and complying with regulator procedures deemed in compliance"
exemption_own_notification_policy: true
exemption_own_notification_policy_description: "Entity with own notice procedures consistent with timing requirements deemed in compliance if notifies affected consumers in accordance with policies"
exemption_other_description: null

# ===================================================================
# :: ENFORCEMENT
# ===================================================================
enforcement_private_right_of_action: false
enforcement_authority: "Attorney General"
enforcement_authority_is_exclusive: true
enforcement_type_damages_description: "Civil penalty for willful and knowing violations; exclusive Attorney General enforcement authority"

# ===================================================================
# :: PENALTIES
# ===================================================================
enforcement_penalty_per_day: 0
enforcement_penalty_per_individual: 0
enforcement_penalty_per_record: 0
enforcement_penalty_per_violation: 0
enforcement_penalty_flat_amount: 0
enforcement_penalty_maximum: 150000
enforcement_penalty_basis: "per_breach_or_series"
enforcement_penalty_notes: "Maximum $150,000 per breach or series of similar breaches discovered in single investigation; civil penalty for willful and knowing violations only; exclusive Attorney General enforcement authority"

# ===================================================================
# :: SPECIAL PROVISIONS
# ===================================================================
provision_law_enforcement_delay: true
provision_law_enforcement_delay_description: "Notice may be delayed if law enforcement agency informs entity that notification may impede criminal investigation or jeopardize national or homeland security. Law enforcement must request in writing or entity documents request contemporaneously including officer name and agency. Notice provided without unreasonable delay after law enforcement determines notice will no longer impede investigation."
provision_government_entities_are_subject: true
provision_government_entities_notes: null
provision_waiver_not_permitted: false
provision_notice_at_collection_required: false
provision_other_description: "Exclusive Attorney General enforcement authority. Risk of harm analysis with 5-year documentation retention. Unique substitute notification trigger: 'unable to identify particular affected consumers.' Law enforcement delay requires written request or contemporaneous documentation."

# ===================================================================
# :: OBSIDIAN TAGS
# ===================================================================
tags:
  - DataBreachLaws/Breach/trigger/acquisition
  - DataBreachLaws/Exempts/glba
  - DataBreachLaws/Exempts/own-policy
  - DataBreachLaws/Exempts/state-specific
  - DataBreachLaws/Notice/AG/required/threshold/1000
  - DataBreachLaws/Notice/AG/required/timing/asap
  - DataBreachLaws/Notice/CRA/required/threshold/1000
  - DataBreachLaws/Notice/Consumer/asap
  - DataBreachLaws/PII/financial-accounts
  - DataBreachLaws/PII/health-info
  - DataBreachLaws/RiskOfHarm/allowed
---

# Missouri Data Breach Notification Law

## Overview
- **Statutory Citation:** `Mo. Rev. Stat. § 407.1500`
- **Statute Title:** [Missouri Data Breach Notification Law](https://revisor.mo.gov/main/OneSection.aspx?section=407.1500)
- **Jurisdiction Type:** U.S. State
- **Legislative History:**
  - **Original Legislation:** H.B. 62 (signed August 28, 2009, effective August 28, 2009)
  - **Last Verified:** September 2025

## Application & Covered Entities
Any individual, legal or commercial or government entity that owns or licenses personal information of residents of Missouri.

## Key Definitions

### Personal Information
An individual's first name or first initial and last name in combination with any one or more of the following data elements that relate to the individual, if any of the data elements are not encrypted, redacted, or otherwise altered by any method or technology in such a manner that the name or data elements are unreadable or unusable:
- Social Security number
- Driver's license number or other unique identification number created or collected by a government body
- Account number, credit card number, or debit card number in combination with any required security code, access code, or password that would permit access to an individual's financial account
- Unique electronic identifier or routing code, in combination with any required security code, access code, or password that would permit access to an individual's financial account
- Medical information (information regarding an individual's medical history, mental or physical condition, or medical treatment or diagnosis by a health care professional)
- Health insurance information (an individual's health insurance policy number, subscriber identification number, or any unique identifier used by a health insurer to identify the individual)

### Exclusions
Personal information does not include information that is lawfully obtained from publicly available sources, or from federal, state, or local government records lawfully made available to the general public.

### Breach of Security
Unauthorized access to and unauthorized acquisition of personal information maintained in computerized form by an entity that compromises the security, confidentiality, or integrity of the personal information.

### Good-Faith Exception
Good-faith acquisition of personal information by an entity or that entity's employee or agent for a legitimate purpose of that entity is not a breach of security, provided that the personal information is not used in violation of applicable law or in a manner that harms or poses an actual threat to the security, confidentiality, or integrity of the personal information.

## Notification Requirements & Triggers

### Notification Obligation
Any entity to which the statute applies shall provide notice to the affected consumer that there has been a breach of security.

**Exception:** Notification is not required if, after an appropriate investigation by the entity or after consultation with the relevant federal, state, or local agencies responsible for law enforcement, the entity determines that a risk of identity theft or other fraud to any consumer is not reasonably likely to occur as a result of the breach. Such a determination shall be documented in writing and the documentation shall be maintained for **5 years**.

### Timing of Notification
The disclosure notification shall be made without unreasonable delay and consistent with any measures necessary to determine sufficient contact information and to determine the scope of the breach and restore the reasonable integrity, security, and confidentiality of the data system.

### Notification Methods
Notice may be provided by one of the following methods:
- Written notice
- Telephonic notice, if such contact is made directly with the affected consumers
- Electronic notice for those consumers for whom the person has a valid email address and who have agreed to receive communications electronically, if the notice provided is consistent with 15 U.S.C. § 7001 (E-Sign Act)

### Content of Notice to Individuals
The notice shall at minimum include a description of the following:
- The incident in general terms
- The type of personal information that was obtained as a result of the breach of security
- A telephone number that the affected consumer may call for further information and assistance, if one exists
- Contact information for consumer reporting agencies
- Advice that directs the affected consumer to remain vigilant by reviewing account statements and monitoring free credit reports

### Attorney General Notification
In the event an entity provides notice to more than **1,000** consumers at one time, the entity shall notify, without unreasonable delay, the state Attorney General's office of the timing, distribution, and content of the notice.

### Consumer Reporting Agency Notification
In the event an entity notifies more than **1,000** consumers at one time, the entity shall notify, without unreasonable delay, all nationwide consumer reporting agencies of the timing, distribution, and content of the notice.

### Substitute Notice Available
If the entity demonstrates that:
- The cost of providing notice would exceed **$100,000**, OR
- The class of affected consumers to be notified exceeds **150,000**, OR
- The entity does not have sufficient contact information or consent (for only those without sufficient contact information or consent), OR
- The entity is unable to identify particular affected consumers (for only those unidentifiable consumers)

Substitute notice shall consist of all the following:
- Email notice when the entity has an email address for the affected consumer
- Conspicuous posting of the notice or a link to the notice on the entity's website, if the entity maintains one
- Notification to major statewide media

### Third-Party Data Notification
Any entity that maintains or possesses records or data containing personal information of residents of Missouri that the entity does not own or license shall notify the owner or licensee of the information of any breach of security immediately following discovery of the breach, consistent with the legitimate needs of law enforcement.

## Exemptions, Penalties, and Other Provisions

### Encryption Safe Harbor
The law provides a safe harbor for data that is encrypted, redacted, or otherwise rendered unreadable or unusable.

### Own Notification Policy Exemption
An entity that maintains its own notice procedures as part of an information security policy for the treatment of personal information, and whose procedures are otherwise consistent with the timing requirements of this section, is deemed to be in compliance with the notice requirements of this section if the entity notifies affected consumers in accordance with its policies in the event of a breach of security of the system.

### Regulated Entity Exemption
An entity that is regulated by state or federal law and that maintains procedures for a breach of the security of the system pursuant to the laws, rules, regulations, guidance, or guidelines established by its primary or functional state or federal regulator is deemed to be in compliance with this section if the entity notifies affected consumers in accordance with the maintained procedures when a breach occurs.

### Financial Institution Exemption
A financial institution that is (i) subject to and in compliance with the Federal Interagency Guidance Response Programs for Unauthorized Access to Customer Information and Customer Notice, issued March 29, 2005, by the board of governors of the Federal Reserve System, the Federal Deposit Insurance Corporation, the Office of the Comptroller of the Currency, and the Office of Thrift Supervision, and any revisions; or (ii) subject to and in compliance with the National Credit Union Administration regulations in 12 C.F.R. Part 748; or (iii) subject to and in compliance with Title V of the Gramm-Leach-Bliley Act shall be deemed to be in compliance with this section.

### Penalties and Enforcement
The state Attorney General shall have exclusive authority to bring an action to obtain actual damages for a willful and knowing violation of this section and may seek a civil penalty not to exceed **$150,000** per breach of the security of the system or series of breaches of a similar nature that are discovered in a single investigation.

### Private Right of Action
The statute does not provide for a private right of action.

## Key Provisions

### Delay for Law Enforcement
The notice required by this section may be delayed if a law enforcement agency informs the entity that notification may impede a criminal investigation or jeopardize national or homeland security, provided that such request by law enforcement is made in writing or the entity documents such request contemporaneously in writing, including the name of the law enforcement officer making the request and the officer's law enforcement agency engaged in the investigation. The notice required by this section shall be provided without unreasonable delay after the law enforcement agency communicates to the entity its determination that notice will no longer impede the investigation or jeopardize national or homeland security.
