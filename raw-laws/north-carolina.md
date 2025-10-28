---
# ===================================================================
# :: CORE INFORMATION
# ===================================================================
state: "North Carolina"
state_code: "NC"
jurisdiction_type: "U.S. State"
statute_citation: "N.C. Gen. Stat. §§ 75-61, 75-65"
statute_title: "North Carolina Identity Theft Protection Act"
statute_url: "https://www.ncleg.net/EnactedLegislation/Statutes/HTML/ByArticle/Chapter_75/Article_2A.html"

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
legislation_bill_1_number: "S.B. 1048"
legislation_bill_1_signed_date: "2005-09-21"
legislation_bill_1_effective_date: "2005-12-01"
legislation_bill_2_number: "S.B. 1017"
legislation_bill_2_signed_date: "2009-07-27"
legislation_bill_2_effective_date: "2009-07-27"

# ===================================================================
# :: BREACH DEFINITION
# ===================================================================
breach_definition_text: "An incident of unauthorized access to and acquisition of unencrypted and unredacted records or data containing personal information where illegal use of the personal information has occurred or is reasonably likely to occur or that creates a material risk of harm to a consumer. Any incident of unauthorized access to and acquisition of encrypted records or data containing personal information along with the confidential process or key shall constitute a security breach."
breach_trigger: "unauthorized_access_and_acquisition"
breach_access_alone_triggers: false
breach_acquisition_alone_triggers: false

# ===================================================================
# :: ENCRYPTION SAFE HARBOR
# ===================================================================
exemption_encryption_safe_harbor: true
exemption_encryption_safe_harbor_negated_if_key_compromised: true
exemption_encryption_description: "Encrypted and redacted data; data not encrypted if confidential process or key was also acquired"

# ===================================================================
# :: RISK OF HARM ANALYSIS
# ===================================================================
risk_of_harm_analysis_is_required: true
risk_of_harm_analysis_can_eliminate_notification: true
risk_of_harm_analysis_standard: "Material risk of harm to consumer from illegal use; breach definition itself requires material risk or illegal use reasonably likely (risk of harm analysis is built into breach definition)"
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
individual_notification_timeline_description: "Without unreasonable delay, consistent with any measures necessary to determine sufficient contact information, determine the scope of the breach, and restore the reasonable integrity, security, and confidentiality of the data system"
individual_notification_extensions_available: false
individual_notification_extension_max_days: 0
individual_notification_extension_request_deadline_days: 0
individual_notification_contents:
  - "Description of the incident in general terms"
  - "Description of the type of personal information subject to unauthorized access and acquisition"
  - "Description of general acts of the business to protect personal information from further unauthorized access"
  - "Telephone number for the business for further information and assistance (if one exists)"
  - "Advice to remain vigilant by reviewing account statements and monitoring free credit reports"
  - "Toll-free numbers and addresses for the major consumer reporting agencies"
  - "Toll-free numbers, addresses, and website addresses for the Federal Trade Commission and state Attorney General's office"
individual_notification_methods:
  - "Written notice"
  - "Telephonic notice, provided that contact is made directly with affected persons"
  - "Electronic notice, for those with valid email address who agreed to receive communications electronically if consistent with 15 U.S.C. § 7001 (E-Sign Act)"

# ===================================================================
# :: SUBSTITUTE NOTIFICATION
# ===================================================================
substitute_notification_is_available: true
substitute_notification_cost_trigger: 250000
substitute_notification_affected_count_trigger: 500000
substitute_notification_insufficient_contact_info_trigger: true
substitute_notification_other_triggers: []
substitute_notification_methods:
  - "Email notice when entity has email addresses for affected persons"
  - "Conspicuous posting on entity website, if entity maintains one"
  - "Notification to major statewide media"

# ===================================================================
# :: ATTORNEY GENERAL NOTIFICATION
# ===================================================================
ag_notification_is_required: true
ag_notification_threshold: 1
ag_notification_threshold_description: "Required when business provides notice to affected person (threshold of 1 affected North Carolina resident)"
ag_notification_timeline_days: 0
ag_notification_timeline_description: "Without unreasonable delay"
ag_notification_recipients: "Attorney General"
ag_notification_contents:
  - "Nature of the breach"
  - "Number of consumers affected"
  - "Steps taken to investigate the breach"
  - "Steps taken to prevent a similar breach in the future"
  - "Timing, distribution, and content of the notice"

# ===================================================================
# :: CONSUMER REPORTING AGENCY NOTIFICATION
# ===================================================================
cra_notification_is_required: true
cra_notification_threshold: 1000
cra_notification_threshold_description: "If entity provides notice to more than 1,000 persons at one time"
cra_notification_timeline_days: 0
cra_notification_timeline_description: "Without unreasonable delay, all nationwide consumer reporting agencies"
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
vendor_notification_timeline_description: "Immediately following discovery"
owner_liability_for_vendor_failure: "Third-party must notify owner/licensee immediately following discovery"
vendor_cooperation_required: false

# ===================================================================
# :: EXEMPTIONS
# ===================================================================
exemption_hipaa: false
exemption_hipaa_description: null
exemption_glba: false
exemption_glba_description: null
exemption_primary_regulator: true
exemption_primary_regulator_description: "Financial institutions subject to Federal Interagency Guidance Response Programs for Unauthorized Access"
exemption_own_notification_policy: false
exemption_own_notification_policy_description: null
exemption_other_description: null

# ===================================================================
# :: ENFORCEMENT
# ===================================================================
enforcement_private_right_of_action: true
enforcement_authority: "Attorney General and private individuals"
enforcement_authority_is_exclusive: false
enforcement_type_damages_description: "Civil and criminal penalties; private right of action for individuals injured"

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
enforcement_penalty_notes: "Civil and criminal penalties available; private right of action for injured individuals; specific penalty amounts not enumerated in data breach statute"

# ===================================================================
# :: SPECIAL PROVISIONS
# ===================================================================
provision_law_enforcement_delay: true
provision_law_enforcement_delay_description: "Notice may be delayed if law enforcement agency informs business that notification may impede a criminal investigation or jeopardize national or homeland security, provided that request is made in writing or business documents request contemporaneously including name of officer and agency. Notice must be provided without unreasonable delay after law enforcement determines notice will no longer impede investigation."
provision_government_entities_are_subject: false
provision_government_entities_notes: "Government entities and governmental subdivisions or agencies expressly EXCLUDED from coverage"
provision_waiver_not_permitted: true
provision_notice_at_collection_required: false
provision_other_description: "Unique breach trigger: requires BOTH unauthorized access AND acquisition (not just one or the other). Risk of harm analysis is built into the breach definition itself (material risk of harm required for breach to exist). Biometric data and fingerprints explicitly included in PI definition. Private right of action for injured individuals. Comprehensive notification contents required (7 specific elements). Government entities expressly excluded from coverage. Waiver provisions prohibited. Federal Interagency Guidance exemption for financial institutions."

# ===================================================================
# :: OBSIDIAN TAGS
# ===================================================================
tags:
  - DataBreachLaws/Breach/trigger/access-and-acquisition
  - DataBreachLaws/Enforcement/private-right-of-action
  - DataBreachLaws/Exempts/federal-regulator
  - DataBreachLaws/Notice/AG/required/threshold/1
  - DataBreachLaws/Notice/AG/required/timing/asap
  - DataBreachLaws/Notice/CRA/required/threshold/1000
  - DataBreachLaws/Notice/Consumer/asap
  - DataBreachLaws/PII/biometric
  - DataBreachLaws/PII/financial-accounts
  - DataBreachLaws/PII/government-id
  - DataBreachLaws/PII/taxpayer-id
  - DataBreachLaws/PII/digital-signature
  - DataBreachLaws/RiskOfHarm/allowed
---
# North Carolina Data Breach Notification Law

## Overview
- **Statutory Citation:** `N.C. Gen. Stat. §§ 75-61, 75-65`
- **Statute Title:** [North Carolina Identity Theft Protection Act](https://www.ncleg.net/EnactedLegislation/Statutes/HTML/ByArticle/Chapter_75/Article_2A.html)
- **Jurisdiction Type:** U.S. State
- **Legislative History:**
  - **Original Legislation:** S.B. 1048 (signed September 21, 2005, effective December 1, 2005)
  - **Major Amendment:** S.B. 1017 (signed July 27, 2009, effective July 27, 2009)
  - **Last Verified:** September 2025

## Application & Covered Entities
Any legal entity, however organized and whether or not organized to operate at a profit, but not including any government or governmental subdivision or agency (collectively, Entity), that owns or licenses personal information of residents of North Carolina or that conducts business in North Carolina and owns or licenses personal information in any form (computerized, paper, or otherwise).

## Key Definitions

### Personal Information
A person's first name or first initial and last name in combination with any of the following identifying information:
- Social Security number or employer taxpayer identification numbers
- Driver's license, state identification card, or passport numbers
- Checking account numbers
- Savings account numbers
- Credit card numbers
- Debit card numbers
- Personal identification numbers
- Digital signatures
- Any other numbers or information that can be used to access a person's financial resources
- Biometric data
- Fingerprints
- Additionally, if (but only if) any of the following information "would permit access to a person's financial account or resources," it is considered personal information when taken in conjunction with a person's first name, or first initial and last name:
  - Electronic identification numbers
  - Email names or addresses
  - Internet account numbers
  - Internet identification names
  - Parent's legal surname prior to marriage
  - Passwords

### Exclusions
Personal information does not include publicly available directories containing information an individual has voluntarily consented to have publicly disseminated or listed, including name, address, and telephone number, and does not include information made lawfully available to the general public from federal, state, or local government records.

### Breach of Security
An incident of unauthorized access to and acquisition of unencrypted and unredacted records or data containing personal information where illegal use of the personal information has occurred or is reasonably likely to occur or that creates a material risk of harm to a consumer. Any incident of unauthorized access to and acquisition of encrypted records or data containing personal information along with the confidential process or key shall constitute a security breach.

### Good-Faith Exception
Good-faith acquisition of personal information by an employee or agent of the Entity for a legitimate purpose is not a security breach, provided that the personal information is not used for a purpose other than a lawful purpose of the Entity and is not subject to further unauthorized disclosure.

## Notification Requirements & Triggers

### Notification Obligation
Any Entity to which the statute applies shall provide notice to the affected person that there has been a security breach following discovery or notification of the breach.

### Timing of Notification
The disclosure shall be made without unreasonable delay, consistent with any measures necessary to determine sufficient contact information, determine the scope of the breach, and restore the reasonable integrity, security, and confidentiality of the data system.

### Notification Methods
Notice may be provided by one of the following methods:
- Written notice
- Telephonic notice, provided that contact is made directly with the affected persons
- Electronic notice, for those persons for whom it has a valid email address and who have agreed to receive communications electronically if the notice provided is consistent with 15 U.S.C. § 7001 (E-Sign Act)

### Content of Notice to Individuals
Notice must be clear, conspicuous, and shall include all of the following:
- A description of the incident in general terms
- A description of the type of personal information that was subject to the unauthorized access and acquisition
- A description of the general acts of the business to protect the personal information from further unauthorized access
- A telephone number for the business that the person may call for further information and assistance, if one exists
- Advice that directs the person to remain vigilant by reviewing account statements and monitoring free credit reports
- The toll-free numbers and addresses for the major consumer reporting agencies
- The toll-free numbers, addresses, and website addresses for the Federal Trade Commission and the state Attorney General's office, along with a statement that the individual can obtain information from these sources about preventing identity theft

### Attorney General Notification
In the event a business provides notice to an affected person, the business shall notify without unreasonable delay the Consumer Protection Division of the state Attorney General's office of:
- The nature of the breach
- The number of consumers affected by the breach
- Steps taken to investigate the breach
- Steps taken to prevent a similar breach in the future
- Information regarding the timing, distribution, and content of the notice

### Consumer Reporting Agency Notification
If an Entity provides notice to more than **1,000** persons at one time, the Entity shall notify, without unreasonable delay, all nationwide consumer reporting agencies of the timing, distribution, and content of the notice.

### Substitute Notice Available
If the business demonstrates that:
- The cost of providing notice would exceed **$250,000**, OR
- The affected class of subject persons to be notified exceeds **500,000**, OR
- The business does not have sufficient contact information or consent, OR
- The business is unable to identify particular affected persons

Substitute notice shall consist of all of the following:
- Email notice when the Entity has email addresses for the subject persons
- Conspicuous posting of the notice on the Entity's website, if the Entity maintains one
- Notification to major statewide media

### Third-Party Data Notification
Any business that possesses records containing personal information of residents of North Carolina that the business does not own or license, or conducts business in North Carolina that possesses records containing personal information that the business does not own or license, shall notify the owner or licensee of the personal information of any security breach immediately following discovery of the breach.

## Exemptions, Penalties, and Other Provisions

### Encryption Safe Harbor
The law provides a safe harbor for encrypted and redacted data. Data shall not be considered encrypted if the confidential process or key was also acquired.

### Federal Interagency Guidance Exemption
A financial institution that is subject to and in compliance with the Federal Interagency Guidance Response Programs for Unauthorized Access to Consumer Information and Customer Notice shall be deemed to be in compliance.

### Penalties
Civil and criminal penalties are available.

### Private Right of Action
An individual injured as a result of a violation of this section may institute a civil action.

## Key Provisions

### Delay for Law Enforcement
The notice required by this section shall be delayed if a law enforcement agency informs the business that notification may impede a criminal investigation or jeopardize national or homeland security, provided that such request is made in writing or the business documents such request contemporaneously in writing, including the name of the law enforcement officer making the request and the officer's law enforcement agency engaged in the investigation. The notice required shall be provided without unreasonable delay after the law enforcement agency communicates to the business its determination that notice will no longer impede the investigation or jeopardize national or homeland security.

### Attorney General Enforcement
Attorney General enforcement authority is available.

### Waiver Not Permitted
Waiver of any provision is not permitted.
