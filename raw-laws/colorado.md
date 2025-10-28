---
# ===================================================================
# :: CORE INFORMATION
# ===================================================================
state: "Colorado"
state_code: "CO"
jurisdiction_type: "U.S. State"
statute_citation: "Colo. Rev. Stat. § 6-1-716"
statute_title: "Colorado Protections for Consumer Data Privacy"
statute_url: "https://coag.gov/resources/data-protection-laws/"

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
legislation_bill_1_number: "H.B. 1119"
legislation_bill_1_signed_date: "2006-04-24"
legislation_bill_1_effective_date: "2006-09-01"
legislation_bill_2_number: "H.B. 18-1128"
legislation_bill_2_signed_date: "2018-05-29"
legislation_bill_2_effective_date: "2018-09-01"

# ===================================================================
# :: BREACH DEFINITION
# ===================================================================
breach_definition_text: "The unauthorized acquisition of unencrypted computerized data that compromises its security, confidentiality, or integrity."
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
risk_of_harm_analysis_standard: "Notice is required unless a prompt investigation determines that misuse of information about a Colorado resident has not occurred and is not reasonably likely to occur."
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
individual_notification_timeline_description: "Most expedient time possible and without unreasonable delay, but not later than 30 days after determining a security breach occurred. If conflict with applicable state or federal law, the law or regulation with shortest timeframe controls."
individual_notification_extensions_available: false
individual_notification_extension_max_days: 0
individual_notification_extension_request_deadline_days: 0
individual_notification_contents:
  - "The date, estimated date, or estimated date range of the breach"
  - "A description of the personal information acquired"
  - "Contact information for the covered entity"
  - "Toll-free numbers, addresses, and websites for major credit reporting agencies and the FTC"
  - "A statement that the resident can obtain information about fraud alerts and security freezes"
individual_notification_methods:
  - "Written notice"
  - "Telephonic notice"
  - "Electronic notice"

# ===================================================================
# :: SUBSTITUTE NOTIFICATION
# ===================================================================
substitute_notification_is_available: true
substitute_notification_cost_trigger: 250000
substitute_notification_affected_count_trigger: 250000
substitute_notification_insufficient_contact_info_trigger: true
substitute_notification_other_triggers: []
substitute_notification_methods:
  - "Email notice if email addresses available"
  - "Conspicuous posting on entity website"
  - "Notification to major statewide media"

# ===================================================================
# :: ATTORNEY GENERAL NOTIFICATION
# ===================================================================
ag_notification_is_required: true
ag_notification_threshold: 500
ag_notification_threshold_description: "If breach requires notification to 500 or more Colorado residents"
ag_notification_timeline_days: 30
ag_notification_timeline_description: "No later than 30 days after determining a breach occurred"
ag_notification_recipients: null
ag_notification_contents:
  - "Notification that breach affecting 500+ Colorado residents has occurred"
  - "Number of affected residents and nature of breach"

# ===================================================================
# :: CONSUMER REPORTING AGENCY NOTIFICATION
# ===================================================================
cra_notification_is_required: true
cra_notification_threshold: 1000
cra_notification_threshold_description: "If breach requires notification to 1,000 or more Colorado residents"
cra_notification_timeline_days: 0
cra_notification_timeline_description: "Without unreasonable delay"
cra_notification_recipients: null
cra_notification_contents:
  - "Timing, distribution, and content of notices to Colorado residents"
  - "Approximate number of affected persons"

# ===================================================================
# :: VENDOR NOTIFICATION (Third-Party Data Processors)
# ===================================================================
vendor_notification_is_required: true
vendor_notification_timeline_days: 0
vendor_notification_timeline_description: "Most expedient time possible and without unreasonable delay following discovery"
owner_liability_for_vendor_failure: null
vendor_cooperation_required: true

# ===================================================================
# :: EXEMPTIONS
# ===================================================================
exemption_hipaa: true
exemption_hipaa_description: "Entities regulated by state or federal law including HIPAA that maintain procedures pursuant to those laws are deemed compliant, but must still notify Attorney General if 500+ resident threshold met"
exemption_glba: true
exemption_glba_description: "Entities regulated by state or federal law including GLBA that maintain procedures pursuant to those laws are deemed compliant, but must still notify Attorney General if 500+ resident threshold met"
exemption_primary_regulator: true
exemption_primary_regulator_description: "Entities regulated by state or federal law that maintain procedures pursuant to those laws are deemed compliant, but must still notify Attorney General if 500+ resident threshold met. Where timing conflicts exist, the law or regulation with shortest notice timeframe controls."
exemption_own_notification_policy: false
exemption_own_notification_policy_description: null
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
enforcement_penalty_notes: "Attorney General may bring action to address violations and recover direct economic damages; specific penalty amounts not defined in data breach statute"

# ===================================================================
# :: SPECIAL PROVISIONS
# ===================================================================
provision_law_enforcement_delay: true
provision_law_enforcement_delay_description: "Notice may be delayed if law enforcement agency determines notification will impede criminal investigation. Notification shall be made after law enforcement determines notification will no longer impede investigation."
provision_government_entities_are_subject: true
provision_government_entities_notes: null
provision_waiver_not_permitted: false
provision_notice_at_collection_required: false
provision_other_description: "Timing conflict rule: If conflict exists between 30-day deadline and applicable state or federal law, the law or regulation with shortest timeframe for notice controls. Third-party service providers must cooperate with data owners, including sharing information relevant to breach (but not requiring disclosure of confidential business information or trade secrets)."

# ===================================================================
# :: OBSIDIAN TAGS
# ===================================================================
tags:
  - DataBreachLaws/Breach/trigger/acquisition
  - DataBreachLaws/Exempts/federal-regulator
  - DataBreachLaws/Exempts/glba
  - DataBreachLaws/Exempts/hipaa
  - DataBreachLaws/Notice/AG/required/threshold/500
  - DataBreachLaws/Notice/AG/required/timing/30days
  - DataBreachLaws/Notice/CRA/required/threshold/1000
  - DataBreachLaws/Notice/Consumer/30days
  - DataBreachLaws/PII/biometric
  - DataBreachLaws/PII/health-info
  - DataBreachLaws/PII/government-id
  - DataBreachLaws/RiskOfHarm/allowed
---
# Colorado Data Breach Notification Law

## Overview
- **Statutory Citation:** `Colo. Rev. Stat. § 6-1-716`
- **Statute Title:** [Colorado Protections for Consumer Data Privacy](https://coag.gov/resources/data-protection-laws/)
- **Jurisdiction Type:** U.S. State
- **Legislative History:**
  - **Original Legislation:** H.B. 1119 (signed April 24, 2006, effective September 1, 2006)
  - **Amendment:** H.B. 18-1128 (signed May 29, 2018, effective September 1, 2018)
  - **Last Verified:** September 2025

## Application & Covered Entities
Any individual or commercial entity that conducts business in Colorado and owns, licenses, or maintains computerized data including PI.

## Key Definitions

### Personal Information
An individual's first name or first initial and last name in combination with one or more of the following, when the data is not encrypted:
- Social Security number
- Student, military, or passport ID number
- Driver's license number or other state-issued identification card number
- Medical information or health insurance identification number
- Biometric data
- A username or email address, in combination with a password or security question and answer that would permit access to an online account
- Account number or credit/debit card number, in combination with any required security code, access code, or password

### Breach of Security
The unauthorized acquisition of unencrypted computerized data that compromises its security, confidentiality, or integrity.

## Notification Requirements & Triggers

### Risk of Harm Standard
Notice is required unless a prompt investigation determines that the "misuse of information about a Colorado resident has not occurred and is not reasonably likely to occur."

### Timing of Notice to Individuals
In the most expedient time possible and without unreasonable delay, but not later than **30 days** after determining that a security breach occurred.

**Important:** If there is a conflict between this deadline and an applicable state or federal law, the law or regulation with the shortest timeframe for notice to the individual controls.

### Content of Notice to Individuals
The notice must include:
- The date, estimated date, or estimated date range of the breach
- A description of the personal information acquired
- Contact information for the covered entity
- Toll-free numbers, addresses, and websites for major credit reporting agencies and the FTC
- A statement that the resident can obtain information about fraud alerts and security freezes

### Method of Notice to Individuals
Notice may be provided in writing, by telephone, or electronically.

### Substitute Notice Available
If the Entity can demonstrate that:
- The cost of providing notice will exceed **$250,000**, OR
- The affected class exceeds **250,000**, OR
- The entity has insufficient contact information

Substitute notice requires:
- Email notice if email addresses are available
- Conspicuous posting on the entity's website
- Notification to major statewide media

### Attorney General Notice
**Requirement:** Required if the breach requires notification to **500** or more Colorado residents.

**Timing:** Notice must be provided to the Attorney General no later than **30 days** after determining a breach occurred.

### Consumer Reporting Agency Notice
**Requirement:** Required if the breach requires notification to **1,000** or more Colorado residents.

**Timing:** Notice must be provided to all nationwide consumer reporting agencies without unreasonable delay.

### Third-Party/Vendor Obligations
A third-party service provider must notify the data owner of a breach in the most expedient time possible and without unreasonable delay following discovery. Third-party service providers must cooperate with data owners, including sharing information relevant to the breach (but not requiring disclosure of confidential business information or trade secrets).

## Exemptions, Penalties, and Other Provisions

### Encryption Safe Harbor
The law provides a safe harbor for encrypted data.

### Regulatory Exemptions
Entities regulated by state or federal law (including GLBA and HIPAA) that maintain procedures pursuant to those laws are deemed compliant with the statute, provided that notice to the Attorney General is still required if the **500**-resident threshold is met.

**Important:** Where timing conflicts exist, the law or regulation with the shortest notice timeframe controls.

### Penalties
The Attorney General may bring an action to address violations and recover direct economic damages.

### Private Right of Action
The statute does not provide for a private right of action.

## Key Provisions

### Delay for Law Enforcement
Notification may be delayed if a law enforcement agency determines that notification will impede a criminal investigation. Notification shall be made after the law enforcement agency determines that notification will no longer impede the investigation.

### Timing Conflicts
If there is a conflict between the 30-day deadline and an applicable state or federal law, the law or regulation with the shortest timeframe for notice to the individual controls. This rule also applies to Attorney General notification timing.
