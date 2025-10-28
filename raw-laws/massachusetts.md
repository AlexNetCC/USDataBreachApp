---
state: "Massachusetts"
state_code: "MA"
jurisdiction_type: "U.S. State"
statute_citation: "Mass. Gen. Laws § 93H (201 C.M.R. 17.00)"
statute_title: "Massachusetts Data Security Breach Notification Law"
statute_url: "https://malegislature.gov/laws/generallaws/parti/titlexv/chapter93h"

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
legislation_bill_1_number: "H.B. 4144"
legislation_bill_1_signed_date: "2007-08-03"
legislation_bill_1_effective_date: "2007-10-31"
legislation_bill_2_number: "H.B. 4806"
legislation_bill_2_signed_date: "2019-01-10"
legislation_bill_2_effective_date: "2019-04-11"

# ===================================================================
# :: BREACH DEFINITION
# ===================================================================
breach_definition_text: "Unauthorized acquisition or unauthorized use of unencrypted data or encrypted electronic data and the confidential process or key that is capable of compromising the security, confidentiality, or integrity of personal information maintained by an Entity that creates a substantial risk of identity theft or fraud against a Massachusetts resident. Notification obligations apply to a breach of security OR acquisition or use without authorization."
breach_trigger: "unauthorized_acquisition_or_use"
breach_access_alone_triggers: false
breach_acquisition_alone_triggers: true

# ===================================================================
# :: ENCRYPTION SAFE HARBOR
# ===================================================================
exemption_encryption_safe_harbor: true
exemption_encryption_safe_harbor_negated_if_key_compromised: true
exemption_encryption_description: "No breach if data is encrypted unless confidential process or key was also acquired"

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
individual_notification_timeline_description: "As soon as practicable and without unreasonable delay following discovery of the breach. Entities cannot delay notification on grounds that total number of residents affected is not yet ascertained."
individual_notification_extensions_available: false
individual_notification_extension_max_days: 0
individual_notification_extension_request_deadline_days: 0
individual_notification_contents:
  - "The resident's right to obtain a police report"
  - "How a resident may request a security freeze and necessary information for requesting it"
  - "That there shall be no charge for a security freeze"
  - "Mitigation services to be provided pursuant to the statute (18 months credit monitoring if SSN involved)"
  - "Name of parent or affiliated corporation if applicable"
individual_notification_methods:
  - "Written notice"
  - "Electronic notice, if consistent with 15 U.S.C. § 7001 (E-Sign Act)"

# ===================================================================
# :: SUBSTITUTE NOTIFICATION
# ===================================================================
substitute_notification_is_available: true
substitute_notification_cost_trigger: 250000
substitute_notification_affected_count_trigger: 500000
substitute_notification_insufficient_contact_info_trigger: true
substitute_notification_other_triggers: []
substitute_notification_methods:
  - "Email notice if Entity has email addresses for affected persons"
  - "Clear and conspicuous posting on Entity website home page, if Entity maintains one"
  - "Publication in or broadcast through media that provide notice throughout Massachusetts"

# ===================================================================
# :: ATTORNEY GENERAL NOTIFICATION
# ===================================================================
ag_notification_is_required: true
ag_notification_threshold: 1
ag_notification_threshold_description: "Required for all breaches when notice is provided to Massachusetts residents (threshold of 1 affected Massachusetts resident)"
ag_notification_timeline_days: 0
ag_notification_timeline_description: "When notice is provided to a Massachusetts resident, notice must be provided to both state Attorney General and director of Consumer Affairs and Business Regulation"
ag_notification_recipients: "Attorney General and Director of Consumer Affairs and Business Regulation"
ag_notification_contents:
  - "The nature of the breach of security or unauthorized acquisition or use"
  - "The number of residents of Massachusetts affected by such incident at time of notification"
  - "The name and address of the person or agency that experienced the breach"
  - "The name and title of the person or agency reporting the breach and their relationship to entity"
  - "The type of person or agency reporting the breach"
  - "The person responsible for the breach, if known"
  - "The type of personal information compromised (SSN, driver's license, financial account, credit/debit card, etc.)"
  - "Whether the person or agency maintains a written information security program"
  - "Any steps the person or agency has taken or plans to take relating to the incident, including updating information security program"
  - "Person who experienced breach must file report certifying any credit monitoring services comply with law's requirements if SSN affected"

# ===================================================================
# :: CONSUMER REPORTING AGENCY NOTIFICATION
# ===================================================================
cra_notification_is_required: true
cra_notification_threshold: 0
cra_notification_threshold_description: "Director of consumer affairs identifies relevant CRAs and state agencies; Entity must notify those identified"
cra_notification_timeline_days: 0
cra_notification_timeline_description: "As soon as practicable and without unreasonable delay after director identifies relevant agencies"
cra_notification_recipients: "Consumer reporting agencies identified by director of consumer affairs and business regulation"
cra_notification_contents:
  - "Notice to consumer reporting agencies identified by director"
  - "Notice to state agencies identified by director"
  - "Director of consumer affairs and business regulation reports incident publicly on website and makes available electronic copies of sample consumer notice"

# ===================================================================
# :: VENDOR NOTIFICATION (Third-Party Data Processors)
# ===================================================================
vendor_notification_is_required: true
vendor_notification_timeline_days: 0
vendor_notification_timeline_description: "As soon as practicable and without unreasonable delay when Entity knows or has reason to know of breach or when personal information acquired or used by unauthorized person or used for unauthorized purpose"
owner_liability_for_vendor_failure: "Third-party Entity must cooperate with owner/licensor including informing of breach date/nature and steps taken/planned"
vendor_cooperation_required: true

# ===================================================================
# :: EXEMPTIONS
# ===================================================================
exemption_hipaa: false
exemption_hipaa_description: null
exemption_glba: false
exemption_glba_description: null
exemption_primary_regulator: true
exemption_primary_regulator_description: "Compliance with primary/functional state or federal regulator rules sufficient if Attorney General and director notified"
exemption_own_notification_policy: false
exemption_own_notification_policy_description: null
exemption_other_description: null

# ===================================================================
# :: ENFORCEMENT
# ===================================================================
enforcement_private_right_of_action: false
enforcement_authority: "Attorney General"
enforcement_authority_is_exclusive: false
enforcement_type_damages_description: "No explicit private right of action in statute; violations actionable under Chapter 93A (Consumer Protection statute) allowing consumer damages. Attorney General may pursue enforcement through civil penalties, damages, and injunctive relief."

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
enforcement_penalty_notes: "Violations actionable under Chapter 93A (Consumer Protection statute); specific penalty amounts not defined in data breach statute"

# ===================================================================
# :: SPECIAL PROVISIONS
# ===================================================================
provision_law_enforcement_delay: true
provision_law_enforcement_delay_description: "Notice may be delayed if law enforcement agency determines notification will impede criminal investigation and has notified Attorney General in writing and informed Entity of determination. Notification must be made without unreasonable delay and as soon as possible after law enforcement determines notification will no longer impede investigation. Entity must cooperate with law enforcement in investigation of breach or unauthorized acquisition/use."
provision_government_entities_are_subject: true
provision_government_entities_notes: null
provision_waiver_not_permitted: false
provision_notice_at_collection_required: false
provision_other_description: "18-month credit monitoring required at no cost if SSN involved. Breach trigger includes 'unauthorized use' (not just acquisition). Security freeze provision: resident's right to obtain freeze at no cost. Must notify both Attorney General and Director of Consumer Affairs and Business Regulation. Director identifies relevant CRAs. Vendor cooperation required. Chapter 93A enforcement available."

# ===================================================================
# :: OBSIDIAN TAGS
# ===================================================================
tags:
  - DataBreachLaws/Breach/trigger/acquisition-or-use
  - DataBreachLaws/Exempts/federal-regulator
  - DataBreachLaws/Notice/AG/required/threshold/1
  - DataBreachLaws/Notice/AG/required/timing/concurrent
  - DataBreachLaws/Notice/AG/Shame-Site
  - DataBreachLaws/Notice/CRA/required/threshold/director-identified
  - DataBreachLaws/Notice/Consumer/asap
  - DataBreachLaws/PII/financial-accounts
  - DataBreachLaws/PII/government-id
  - DataBreachLaws/RiskOfHarm/not-allowed
  - DataBreachLaws/special-provision/credit-monitoring-required
---
# Massachusetts Data Breach Notification Law

## Overview
- **Statutory Citations:** `Mass. Gen. Laws § 93H (201 C.M.R. 17.00)`
- **Statute Title:** [Massachusetts Data Security Breach Notification Law](https://malegislature.gov/laws/generallaws/parti/titlexv/chapter93h)
- **Jurisdiction Type:** U.S. State
- **Legislative History:**
  - **Original Legislation:** H.B. 4144 (signed August 3, 2007, effective October 31, 2007)
  - **Major Amendments:**
    - H.B. 4806 (signed January 10, 2019, effective April 11, 2019)
  - **Last Verified:** September 2025

## Application & Covered Entities
A natural person, legal entity, or any Massachusetts government agency that owns, licenses, maintains, or stores personal information about a resident of Massachusetts.

## Key Definitions

### Personal Information
A resident's first name and last name or first initial and last name in combination with any one or more of the following data elements that relates to such resident:
- Social Security number
- Driver's license or state-issued identification card number
- Financial account number or credit card number, with or without any required security code, access code, personal ID number, or password, that would permit access to a resident's financial account

### Exclusions
Personal information does not include information that is lawfully obtained from publicly available information, or from federal, state, or local government records lawfully made available to the general public.

### Breach of Security
Unauthorized acquisition or unauthorized use of unencrypted data or encrypted electronic data and the confidential process or key that is capable of compromising the security, confidentiality, or integrity of personal information maintained by an Entity that creates a substantial risk of identity theft or fraud against a Massachusetts resident.

**Special Note:** Notification obligations apply to a breach of security **OR** acquisition or use without authorization.

### Good-Faith Exception
A good-faith but unauthorized acquisition of personal information by an Entity, or employee or agent thereof, for the lawful purpose of such Entity, is not a breach of security unless the personal information is used in an unauthorized manner or subject to further unauthorized disclosure.

## Notification Requirements & Triggers

### Notification Obligation
An Entity that owns or licenses the data shall provide notice to affected residents when the Entity knows or has reason to know of:
- A breach of security, OR
- That the personal information of such resident was acquired or used by an unauthorized person or used for an unauthorized purpose

### Timing of Notification
The notification shall be given as soon as practicable and without unreasonable delay following discovery of the breach. Entities cannot delay notification "on the grounds that the total number of residents affected is not yet ascertained."

### Notification Methods
Notice may be provided by one of the following methods:
- Written notice
- Electronic notice, if consistent with the provisions regarding electronic records and signatures set forth in 15 U.S.C. § 7001 (E-Sign Act)

### Content of Notice to Individuals
Notice provided to the resident must include:
- The resident's right to obtain a police report
- How a resident may request a security freeze and the necessary information to be provided when requesting the security freeze
- That there shall be no charge for a security freeze
- Mitigation services to be provided pursuant to the statute
- If the person or agency that experienced a breach is owned by another person or corporation, the name of the parent or affiliated corporation

### Credit Monitoring Services
An Entity that experiences an incident requiring notice and involving social security numbers shall provide credit monitoring services at no cost to affected residents for a period of **not less than 18 months**. The Entity shall provide all information necessary for enrollment and shall include information on how the resident may place a security freeze.

### Substitute Notice Available
If the Entity demonstrates that:
- The cost of providing written notice will exceed **$250,000**, OR
- The affected class of Massachusetts residents to be notified exceeds **500,000** residents, OR
- The Entity does not have sufficient contact information

Substitute notice shall consist of **all** of the following:
- Email notice, if the Entity has email addresses for the members of the affected class
- Clear and conspicuous posting of the notice on the home page of the Entity's website, if the Entity maintains one
- Publication in or broadcast through media that provide notice throughout Massachusetts

### Attorney General Notification
When notice is provided to a Massachusetts resident, notice must be provided to both the state Attorney General and the director of Consumer Affairs and Business Regulation.

Notice to the Attorney General shall include:
- The nature of the breach of security or unauthorized acquisition or use
- The number of residents of Massachusetts affected by such incident at the time of notification
- The name and address of the person or agency that experienced the breach
- The name and title of the person or agency reporting the breach and their relationship to the person or agency that experienced the breach
- The type of person or agency reporting the breach
- The person responsible for the breach, if known
- The type of personal information compromised, including but not limited to Social Security number, driver's license number, financial account number, credit or debit card number, or other data
- Whether the person or agency maintains a written information security program
- Any steps the person or agency has taken or plans to take relating to the incident, including updating the written information security program

A person who experienced a breach of security shall file a report with the attorney general and the director of consumer affairs and business regulation certifying that any credit monitoring services comply with the law's requirements for providing credit monitoring to individuals if social security numbers are affected.

### Additional Attorney General and Director Requirements
Upon receipt of notice, the director of consumer affairs and business regulation shall:
- Report the incident publicly on its website and make available electronic copies of the sample notice sent to consumers
- Identify any relevant consumer reporting agency or state agency and forward the names to the notifying Entity

The Entity shall, as soon as practicable and without unreasonable delay, also provide notice to consumer reporting agencies and state agencies identified by the director.

### Third-Party Data Notification
An Entity that maintains or stores, but does not own or license data that includes personal information about a resident of Massachusetts, shall provide notice as soon as practicable and without unreasonable delay when such Entity:
- Knows or has reason to know of a breach of security, OR
- Knows or has reason to know that the personal information of such resident was acquired or used by an unauthorized person or used for an unauthorized purpose

Such Entity shall cooperate with the owner or licensor of such personal information. Cooperation shall include, but not be limited to:
- Informing the owner or licensor of the breach or unauthorized acquisition or use
- The date or approximate date of such incident and the nature thereof
- Any steps the Entity has taken or plans to take relating to the incident (provided that cooperation shall not require disclosure of confidential business information or trade secrets, or notice to a resident that may not have been affected)

## Exemptions, Penalties, and Other Provisions

### Encryption Safe Harbor
No breach if data is encrypted, unless the confidential process or key was also acquired.

### Primary Regulator Exemption
Notification pursuant to laws, rules, regulations, guidance, or guidelines established by an Entity's primary or functional state or federal regulator is sufficient for compliance if:
- Notice is provided to affected Massachusetts residents in accordance with the maintained or required procedures when a breach occurs, AND
- The Entity also notifies the attorney general and the director of the office of consumer affairs and business regulation

### Private Right of Action
No explicit private right of action is provided in the statute itself; however, violations are actionable under the state's consumer protection statute (Chapter 93A), which allows for consumer damages.

## Key Provisions

### Delay for Law Enforcement
Notice may be delayed if a law enforcement agency determines that the notice will impede a criminal investigation and has notified the Attorney General in writing thereof and informed the Entity of such determination.

Notice required by the statute must be made without unreasonable delay and as soon as possible after the law enforcement agency determines that notification will no longer impede the investigation.

The Entity shall cooperate with law enforcement in its investigation of any breach or unauthorized acquisition or use (provided that such disclosure shall not require disclosure of confidential business information or trade secrets).

### Attorney General Enforcement
The Attorney General may pursue enforcement through civil penalties, damages, and injunctive relief.
