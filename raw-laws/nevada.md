---
# ===================================================================
# :: CORE INFORMATION
# ===================================================================
state: "Nevada"
state_code: "NV"
jurisdiction_type: "U.S. State"
statute_citation: "Nev. Rev. Stat. § 603A.010 et seq., 242.183"
statute_title: "Nevada Security and Privacy of Personal Information"
statute_url: "https://www.leg.state.nv.us/nrs/nrs-603a.html"

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
legislation_bill_1_number: "S.B. 347"
legislation_bill_1_signed_date: "2005-06-17"
legislation_bill_1_effective_date: "2005-10-01"
legislation_bill_2_number: "S.B. 186"
legislation_bill_2_signed_date: "2011-06-15"
legislation_bill_2_effective_date: "2011-10-01"
legislation_bill_3_number: "A.B. 179"
legislation_bill_3_signed_date: "2015-05-13"
legislation_bill_3_effective_date: "2015-07-01"

# ===================================================================
# :: BREACH DEFINITION
# ===================================================================
breach_definition_text: "An unauthorized acquisition of computerized data that materially compromises the security, confidentiality, or integrity of personal information maintained by entity."
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
individual_notification_timeline_days: 0
individual_notification_timeline_description: "Without unreasonable delay, but as soon as practicable following discovery of breach, consistent with any measures necessary to determine the scope of the breach and restore the reasonable integrity of the system data"
individual_notification_extensions_available: false
individual_notification_extension_max_days: 0
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
substitute_notification_cost_trigger: 250000
substitute_notification_affected_count_trigger: 250000
substitute_notification_insufficient_contact_info_trigger: true
substitute_notification_other_triggers: []
substitute_notification_methods:
  - "Email notice when entity has email addresses for subject persons"
  - "Conspicuous posting on entity website, if entity maintains one"
  - "Notification to major statewide media"

# ===================================================================
# :: ATTORNEY GENERAL NOTIFICATION
# ===================================================================
ag_notification_is_required: false
ag_notification_threshold: null
ag_notification_threshold_description: "No specific Attorney General notification requirement"
ag_notification_timeline_days: null
ag_notification_timeline_description: null
ag_notification_recipients: null
ag_notification_contents: []

# ===================================================================
# :: CONSUMER REPORTING AGENCY NOTIFICATION
# ===================================================================
cra_notification_is_required: true
cra_notification_threshold: 1000
cra_notification_threshold_description: "If entity determines notification required to more than 1,000 persons at any one time"
cra_notification_timeline_days: 0
cra_notification_timeline_description: "Entity shall notify, without unreasonable delay, all nationwide consumer reporting agencies of the timing and content of the notice"
cra_notification_recipients: "All nationwide consumer reporting agencies"
cra_notification_contents:
  - "Timing of the notice"
  - "Content of the notice"

# ===================================================================
# :: VENDOR NOTIFICATION (Third-Party Data Processors)
# ===================================================================
vendor_notification_is_required: true
vendor_notification_timeline_days: 0
vendor_notification_timeline_description: "If entity maintains computerized data that includes personal information that entity does not own, entity must notify owner or licensee of that personal information of any breach of the security of the system data immediately following discovery"
owner_liability_for_vendor_failure: "Third-party must notify owner/licensee immediately after discovery"
vendor_cooperation_required: false

# ===================================================================
# :: EXEMPTIONS
# ===================================================================
exemption_hipaa: false
exemption_hipaa_description: null
exemption_glba: true
exemption_glba_description: "Entity subject to and complying with Gramm-Leach-Bliley Act privacy and security provisions"
exemption_primary_regulator: false
exemption_primary_regulator_description: null
exemption_own_notification_policy: true
exemption_own_notification_policy_description: "Entity maintaining own notification policies and procedures as part of information security policy consistent with timing requirements deemed in compliance if notifies subject persons in accordance with policies"
exemption_other_description: null

# ===================================================================
# :: ENFORCEMENT
# ===================================================================
enforcement_private_right_of_action: true
enforcement_authority: "Attorney General, District Attorneys, and Data Collectors"
enforcement_authority_is_exclusive: false
enforcement_type_damages_description: "Temporary or permanent injunction; data collector may commence action for damages against person who unlawfully obtained or benefited from personal information"

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
enforcement_penalty_notes: "Data collector may commence action for damages; specific penalty amounts not defined in data breach statute"

# ===================================================================
# :: SPECIAL PROVISIONS
# ===================================================================
provision_law_enforcement_delay: true
provision_law_enforcement_delay_description: "Notification may be delayed if law enforcement agency determines notification will impede criminal investigation. Notification must be made after law enforcement determines notification will not compromise investigation."
provision_government_entities_are_subject: true
provision_government_entities_notes: "Special notification obligations exist for government agencies and elected officers under Nev. Rev. Stat. § 242.181"
provision_waiver_not_permitted: true
provision_notice_at_collection_required: false
provision_other_description: "Data collector that provides requisite notice may commence action for damages against person that unlawfully obtained or benefited from personal information (unique offensive remedy). Special rules applicable to electronic health records under Nev. Rev. Stat. §§ 439, 603A.100. Waiver provisions prohibited. Multiple enforcement authorities including Attorney General, District Attorneys, and data collectors themselves."

# ===================================================================
# :: OBSIDIAN TAGS
# ===================================================================
tags:
  - DataBreachLaws/Breach/trigger/acquisition
  - DataBreachLaws/Enforcement/data-collector-damages
  - DataBreachLaws/Exempts/glba
  - DataBreachLaws/Exempts/own-policy
  - DataBreachLaws/Notice/AG/not-required
  - DataBreachLaws/Notice/CRA/required/threshold/1000
  - DataBreachLaws/Notice/Consumer/asap
  - DataBreachLaws/PII/financial-accounts
  - DataBreachLaws/PII/health-info
  - DataBreachLaws/PII/online-account-credentials
  - DataBreachLaws/RiskOfHarm/not-allowed
---

# Nevada Data Breach Notification Law

## Overview
- **Statutory Citation:** `Nev. Rev. Stat. § 603A.010 et seq., 242.183`
- **Statute Title:** [Nevada Security and Privacy of Personal Information](https://www.leg.state.nv.us/nrs/nrs-603a.html)
- **Jurisdiction Type:** U.S. State
- **Legislative History:**
  - **Original Legislation:** S.B. 347 (signed June 17, 2005, effective October 1, 2005)
  - **Major Amendments:**
    - S.B. 186 (signed June 15, 2011, effective October 1, 2011)
    - A.B. 179 (signed May 13, 2015, effective July 1, 2015)
  - **Last Verified:** September 2025

## Application & Covered Entities
Any governmental agency, institution of higher education, corporation, financial institution or retail operator, or any other type of business entity or association that owns or licenses computerized data that includes personal information.

## Key Definitions

### Personal Information
An individual's first name or first initial and last name in combination with any one or more of the following data elements, when the name and data elements are not encrypted:
- Social Security number
- Driver's license number, driver authorization card number or identification card number
- Account number, credit card number, or debit card number in combination with any required security code, access code, or password that would permit access to an individual's financial account
- A medical identification number or a health insurance identification number
- A username, unique identifier, or email address in combination with a password, access code, or security question and answer that would permit access to an online account

### Exclusions
Personal information does not include the last four digits of a Social Security number, the last four digits of a driver's license or driver authorization card number, or the last four digits of an identification card number or publicly available information that is lawfully made available to the general public from federal, state, or local governmental records.

### Breach of Security
An unauthorized acquisition of computerized data that materially compromises the security, confidentiality, or integrity of personal information maintained by entity.

### Good-Faith Exception
Good-faith acquisition of personal information by an employee or agent of the entity for the legitimate purposes of the entity is not a breach of the security of the system if the personal information is not otherwise used or subject to further unauthorized disclosure.

## Notification Requirements & Triggers

### Notification Obligation
An entity to which the statute applies shall disclose any breach of the security of the system data to any resident of Nevada whose unencrypted personal information was, or is reasonably believed to have been, acquired by an unauthorized person.

### Timing of Notification
The disclosure shall be made in the most expedient time possible and without unreasonable delay, consistent with any measures necessary to determine the scope of the breach and restore the reasonable integrity of the system data.

### Notification Methods
Notice may be provided by one of the following methods:
- Written notice
- Electronic notice, if the notice provided is consistent with 15 U.S.C. § 7001 (E-Sign Act)

### Content of Notice to Individuals
- Date or estimated date of breach
- Description of information involved
- Contact information for the entity

### Consumer Reporting Agency Notification
If an entity determines that notification is required to be given to more than **1,000** persons at any one time, the entity shall also notify, without unreasonable delay, all nationwide consumer reporting agencies of the timing and content of the notice.

### Substitute Notice Available
If the entity demonstrates that:
- The cost of providing notice would exceed **$250,000**, OR
- The affected class of subject persons to be notified exceeds **250,000**, OR
- The entity does not have sufficient contact information

Substitute notice shall consist of all of the following:
- Email notice when the entity has email addresses for the subject persons
- Conspicuous posting of the notice on the entity's website if the entity maintains one
- Notification to major statewide media

### Third-Party Data Notification
If an entity maintains computerized data that includes personal information that the entity does not own, the entity must notify the owner or licensee of that personal information of any breach of the security of the system data immediately following discovery if the personal information was, or is reasonably believed to have been, acquired by an unauthorized person.

## Exemptions, Penalties, and Other Provisions

### Encryption Safe Harbor
The law provides a safe harbor for encrypted data.

### Own Notification Policy Exemption
An entity that maintains its own notification policies and procedures as part of an information security policy for the treatment of personal information that is otherwise consistent with the timing requirements of the statute shall be deemed in compliance with the notification requirements of the statute if it notifies subject persons in accordance with its policies and procedures in the event of a security breach.

### Gramm-Leach-Bliley Act Exemption
An entity that is subject to and complies with the privacy and security provisions of the Gramm-Leach-Bliley Act shall be deemed to be in compliance with the notification requirements.

### Waiver Not Permitted
Individuals cannot waive their rights under this statute.

## Key Provisions

### Delay for Law Enforcement
The notification required by the statute may be delayed if a law enforcement agency determines that the notification will impede a criminal investigation. The notification must be made after the law enforcement agency determines that the notification will not compromise the investigation.

### Attorney General Enforcement
If the state Attorney General or a district attorney of any county has reason to believe that any person is violating, proposes to violate, or has violated the provisions of the statute, he or she may bring an action against that person to obtain a temporary or permanent injunction against the violation.

### Right of Action for Data Collector
A data collector that provides the requisite notice may commence an action for damages against a person that unlawfully obtained or benefited from personal information obtained from records maintained by the data collector.

### Special Notification Obligations
Special notification obligations exist for government agencies and elected officers. See Nev. Rev. Stat. § 242.181.

### Special Rules for Electronic Health Records
Special rules are applicable to electronic health records. See Nev. Rev. Stat. §§ 439, 603A.100.
