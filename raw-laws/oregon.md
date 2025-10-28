---
state: "Oregon"
state_code: "OR"
jurisdiction_type: "U.S. State"
statute_citation: "Or. Rev. Stat. §§ 646A.600, 646A.602, 646A.604, 646A.624, 646A.626"
statute_title: "Oregon Consumer Identity Theft Protection Act"
statute_url: "https://www.oregonlaws.org/ors/646A.600"

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
legislation_bill_1_number: "S.B. 583"
legislation_bill_1_signed_date: "2007-07-12"
legislation_bill_1_effective_date: "2007-10-01"
legislation_bill_2_number: "S.B. 574"
legislation_bill_2_signed_date: "2013-06-13"
legislation_bill_2_effective_date: "2013-09-12"
legislation_bill_3_number: "S.B. 601"
legislation_bill_3_signed_date: "2015-06-10"
legislation_bill_3_effective_date: "2016-01-01"
legislation_bill_4_number: "S.B. 1551"
legislation_bill_4_signed_date: "2018-03-16"
legislation_bill_4_effective_date: "2018-06-02"
legislation_bill_5_number: "S.B. 684"
legislation_bill_5_signed_date: "2019-05-24"
legislation_bill_5_effective_date: "2020-01-01"

# ===================================================================
# :: BREACH DEFINITION
# ===================================================================
breach_definition_text: "Unauthorized acquisition of computerized data that materially compromises the security, confidentiality or integrity of personal information maintained or possessed by the entity."
breach_trigger: "unauthorized_acquisition"
breach_access_alone_triggers: false
breach_acquisition_alone_triggers: true

# ===================================================================
# :: ENCRYPTION SAFE HARBOR
# ===================================================================
exemption_encryption_safe_harbor: true
exemption_encryption_safe_harbor_negated_if_key_compromised: true
exemption_encryption_description: "Data rendered unusable through encryption, redaction, or other methods unless key compromised"

# ===================================================================
# :: RISK OF HARM ANALYSIS
# ===================================================================
risk_of_harm_analysis_is_required: true
risk_of_harm_analysis_can_eliminate_notification: true
risk_of_harm_analysis_standard: "Breach has not and will not likely result in harm"
risk_of_harm_analysis_documentation_required: true
risk_of_harm_analysis_documentation_retention_years: 5
risk_of_harm_analysis_ag_notification_required: false
risk_of_harm_analysis_ag_notification_threshold: 0
risk_of_harm_analysis_ag_notification_timeline_days: 0

# ===================================================================
# :: INDIVIDUAL NOTIFICATION
# ===================================================================
individual_notification_is_required: true
individual_notification_timeline_days: 45
individual_notification_timeline_description: "Most expedient manner possible, not later than 45 days after discovering or receiving notice of the breach"
individual_notification_extensions_available: false
individual_notification_extension_max_days: 0
individual_notification_extension_request_deadline_days: 0
individual_notification_contents:
  - "Description of the breach in general terms"
  - "Approximate date of the breach"
  - "Type of personal information subject to breach"
  - "Contact information for person providing notice"
  - "Contact information for national consumer reporting agencies"
  - "Advice to report suspected identity theft to law enforcement, Attorney General, and Federal Trade Commission"
individual_notification_methods:
  - "Written notice"
  - "Telephonic notice (if direct contact)"
  - "Electronic notice (if primary method of communication or E-Sign compliant)"

# ===================================================================
# :: SUBSTITUTE NOTIFICATION
# ===================================================================
substitute_notification_is_available: true
substitute_notification_cost_trigger: 250000
substitute_notification_affected_count_trigger: 350000
substitute_notification_insufficient_contact_info_trigger: true
substitute_notification_other_triggers: []
substitute_notification_methods:
  - "Conspicuous posting on entity website, if maintained"
  - "Notification to major statewide television and newspaper media"

# ===================================================================
# :: ATTORNEY GENERAL NOTIFICATION
# ===================================================================
ag_notification_is_required: true
ag_notification_threshold: 250
ag_notification_threshold_description: "If number of Oregon residents affected exceeds 250"
ag_notification_timeline_days: 0
ag_notification_timeline_description: "Same manner as to consumers; in writing or electronically"
ag_notification_recipients: "Attorney General"
ag_notification_contents:
  - "Notice of breach in same manner as to consumers"

# ===================================================================
# :: CONSUMER REPORTING AGENCY NOTIFICATION
# ===================================================================
cra_notification_is_required: true
cra_notification_threshold: 1000
cra_notification_threshold_description: "If entity notifies more than 1,000 individuals"
cra_notification_timeline_days: 0
cra_notification_timeline_description: "Without unreasonable delay"
cra_notification_recipients: "Major consumer reporting agencies"
cra_notification_contents:
  - "Timing, distribution, and content of notification"
  - "Police report number (if available)"

# ===================================================================
# :: VENDOR NOTIFICATION (Third-Party Data Processors)
# ===================================================================
vendor_notification_is_required: true
vendor_notification_timeline_days: 10
vendor_notification_timeline_description: "As soon as practicable, not later than 10 days after discovering the breach"
owner_liability_for_vendor_failure: "Third-party must notify owner/licensee within 10 days and AG if 250+ residents affected or number cannot be determined (unless entity already notified)"
vendor_cooperation_required: false

# ===================================================================
# :: EXEMPTIONS
# ===================================================================
exemption_hipaa: true
exemption_hipaa_description: "Entities complying with HIPAA/HITECH regulations"
exemption_glba: true
exemption_glba_description: "Entities complying with GLBA Title V with greater protection and disclosure requirements"
exemption_primary_regulator: true
exemption_primary_regulator_description: "Personal information subject to and entity complying with notification requirements of primary or functional federal regulator"
exemption_own_notification_policy: false
exemption_own_notification_policy_description: null
exemption_other_description: null

# ===================================================================
# :: ENFORCEMENT
# ===================================================================
enforcement_private_right_of_action: false
enforcement_authority: "Attorney General"
enforcement_authority_is_exclusive: false
enforcement_type_damages_description: "Violation is unlawful trade practice under ORS 646.607"

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
enforcement_penalty_notes: "Violations treated as unlawful trade practices under Oregon law; specific penalty amounts not enumerated in data breach statute"

# ===================================================================
# :: SPECIAL PROVISIONS
# ===================================================================
provision_law_enforcement_delay: true
provision_law_enforcement_delay_description: "Notification may be delayed if law enforcement agency determines notification will impede criminal investigation and agency has made written request. Notification must be made after law enforcement determines disclosure will not compromise investigation."
provision_government_entities_are_subject: true
provision_government_entities_notes: null
provision_waiver_not_permitted: false
provision_notice_at_collection_required: false
provision_other_description: "Explicit 45-day timeline. Unique substitute notification threshold: 350,000 affected (highest in nation). Vendor notification explicit 10-day deadline. Risk of harm analysis allowed with 5-year documentation retention. Credit monitoring restrictions: entities offering free credit monitoring cannot require credit/debit card; fee-based monitoring must separately disclose fee. Inadvertent acquisition exception if not used unlawfully or harmfully. Multiple legislative amendments (5 bills from 2007-2020). Police report number required in CRA notification if available. Vendor must notify AG if 250+ affected or number cannot be determined."

# ===================================================================
# :: OBSIDIAN TAGS
# ===================================================================
tags:
  - DataBreachLaws/Breach/trigger/acquisition
  - DataBreachLaws/Exempts/federal-regulator
  - DataBreachLaws/Exempts/glba
  - DataBreachLaws/Exempts/hipaa
  - DataBreachLaws/Notice/AG/required/threshold/250
  - DataBreachLaws/Notice/AG/required/timing/concurrent
  - DataBreachLaws/Notice/AG/Shame-Site
  - DataBreachLaws/Notice/CRA/required/threshold/1000
  - DataBreachLaws/Notice/Consumer/45days
  - DataBreachLaws/Notice/Vendor/10-days
  - DataBreachLaws/PII/biometric
  - DataBreachLaws/PII/financial-accounts
  - DataBreachLaws/PII/government-id
  - DataBreachLaws/RiskOfHarm/allowed/documentation-req
---

# Oregon Data Breach Notification Law

## Overview
- **Statutory Citation:** `Or. Rev. Stat. §§ 646A.600, 646A.602, 646A.604, 646A.624, 646A.626`
- **Statute Title:** [Oregon Consumer Identity Theft Protection Act](https://www.oregonlaws.org/ors/646A.600)
- **Jurisdiction Type:** U.S. State
- **Legislative History:**
  - **Original Legislation:** S.B. 583 (signed July 12, 2007, effective October 1, 2007)
  - **Major Amendments:**
    - S.B. 574 (signed June 13, 2013, effective September 12, 2013)
    - S.B. 601 (signed June 10, 2015, effective January 1, 2016)
    - S.B. 1551 (signed March 16, 2018, effective June 2, 2018)
    - S.B. 684 (signed May 24, 2019, effective January 1, 2020)
  - **Last Verified:** September 2025

## Application & Covered Entities
Any individual or legal entity, whether or not organized to operate at a profit, or a public body that owns, licenses, maintains, stores, manages, collects, processes, acquires or otherwise possesses personal information in the course of the Entity's business, vocation, occupation or volunteer activities. This does not include any person or entity that contracts with the Entity to maintain, store, manage, process or otherwise access personal information for the purpose of, or in connection with, providing services to or on behalf of the Entity.

## Key Definitions

### Personal Information - Category 1
An Oregon resident's first name or first initial and last name in combination with any one or more of the following data elements, if encryption, redaction, or other methods have not rendered the data unusable or if the data elements are encrypted and the encryption key has also been acquired:
- Social Security number
- Driver's license number or state identification card number issued by the Department of Transportation
- Passport number or other identification number issued by the United States
- Account number, credit card number, or debit card number in combination with any required security code, access code, or password that would permit access to an Oregon resident's financial account, or any other information or combination of information that a person reasonably knows or should know would permit access to the consumer's financial account
- Biometric data from automatic measurements of a consumer's physical characteristics, such as an image of a fingerprint, retina, or iris, that are used to authenticate the consumer's identity in the course of a financial or other transaction
- A consumer's health insurance policy number or health insurance subscriber identification number in combination with any other unique identifier that a health insurer uses to identify the consumer
- Any information about a consumer's medical history or mental or physical condition or about a health care professional's medical diagnosis or treatment of the consumer

### Personal Information - Category 2
A username or other means of identifying a consumer for the purpose of permitting access to the consumer's account, together with any other method necessary to authenticate the username or means of identification.

### Exclusions
Personal information also includes any personal information data element or any combination of the personal information data elements without the consumer's first name or first initial and last name if encryption, redaction, or other methods have not rendered the data element or combination of data elements unusable and the data element or combination of data elements would enable an individual to commit identity theft. Personal information does not include publicly available information, other than a Social Security number, that is lawfully made available to the general public from federal, state or local government records.

### Breach of Security
Unauthorized acquisition of computerized data that materially compromises the security, confidentiality or integrity of personal information maintained or possessed by the Entity.

### Good-Faith Exception
Does not include an inadvertent acquisition of personal information by an Entity or that Entity's employee or agent if the personal information is not used in violation of applicable law or in a manner that harms or poses an actual threat to the security, confidentiality or integrity of the personal information.

## Notification Requirements & Triggers

### Notification Obligation
An Entity to which the statute applies shall give notice of the breach of security to any consumer to whom the personal information pertains.

**Exception:** Notification is not required if, after an appropriate investigation or after consultation with relevant federal, state, or local agencies responsible for law enforcement, the Entity reasonably determines that the breach has not and will not likely result in harm to the individuals whose personal information has been acquired and accessed. Such a determination must be documented in writing and the documentation must be maintained for **5 years**.

### Timing of Notification
The disclosure shall be made in the most expedient manner possible and without unreasonable delay, but not later than **45 days** after discovering or receiving notice of the breach. In providing the notice, the Entity shall take reasonable measures necessary to determine sufficient contact information for the individuals, determine the scope of the breach, and restore the reasonable integrity, security, and confidentiality of the personal information.

### Notification Methods
Notice may be provided by one of the following methods:
- In writing
- By telephone, if the Entity contacts the affected consumer directly
- Electronically, if the Entity's primary method of communication with the individual is by electronic means or is consistent with 15 U.S.C. § 7001 (E-Sign Act)

### Content of Notice to Individuals
Notice shall include at a minimum:
- A description of the breach of security in general terms
- The approximate date of the breach of security
- The type of personal information that was subject to the breach of security
- Contact information for the person providing the notice
- Contact information for national consumer reporting agencies
- Advice to the individual to report suspected identity theft to law enforcement, including the Attorney General and the Federal Trade Commission

### Attorney General Notification
The entity must provide notice to the Attorney General, either in writing or electronically, if the number of Oregon residents affected exceeds **250**. The Entity shall disclose the breach of security to the Attorney General in the same manner as to consumers.

### Consumer Reporting Agency Notification
If an Entity notifies more than **1,000** individuals under this section, the Entity shall notify, without unreasonable delay, all nationwide consumer reporting agencies of the timing, distribution, and content of the notification. The Entity shall include the police report number, if available, in its notification to the consumer reporting agencies.

### Substitute Notice Available
If the Entity demonstrates that:
- The cost of providing notice would exceed **$250,000**, OR
- The affected class of individuals to be notified exceeds **350,000**, OR
- The Entity does not have sufficient contact information

Substitute notice consists of the following:
- Conspicuous posting of the notice or a link to the notice on the Entity's website, if the Entity maintains a website
- Notification to major statewide television and newspaper media

### Third-Party Data Notification
Any person that maintains or otherwise possesses personal information on behalf of another person shall notify the other person of any breach of security as soon as practicable, but not later than **10 days** after discovering the breach of security or having a reason to believe that the breach of security occurred. That person must also notify the Attorney General in writing or electronically if the number of residents affected exceeds **250** or cannot be determined, unless the Entity has already notified the Attorney General.

## Exemptions, Penalties, and Other Provisions

### Encryption Safe Harbor
The law provides a safe harbor for data rendered unusable through encryption, redaction, or other methods.

### Primary Regulator Exemption
Personal information that is subject to, and an Entity that complies with the notification requirements or breach of security procedures that the person's primary or functional federal regulator adopts, promulgates or issues in rules, regulations, procedures, guidelines or guidance.

### Gramm-Leach-Bliley Act Exemption
An Entity that complies with regulations regarding notification requirements or breach of security procedures that provide greater protection to personal information and at least as thorough disclosure requirements promulgated pursuant to Title V of the Gramm-Leach-Bliley Act.

### HIPAA/HITECH Exemption
An Entity that complies with regulations promulgated under HIPAA or the HITECH Act.

### Credit Monitoring Services Restrictions
If an Entity offers credit monitoring or identity theft prevention services without charge, the Entity may not require the affected individual to provide a credit or debit card number or accept another service offered by the Entity for free. If services are offered for a fee, the Entity must separately, distinctly, clearly, and conspicuously disclose in the offer that the person will charge the consumer a fee. The entity must require compliance with these terms from any company offering services on the entity's behalf.

## Key Provisions

### Unlawful Practice
Violation of the statute is an unlawful practice under ORS 646.607 (Unlawful Trade Practice).

### Delay for Law Enforcement
Notification may be delayed if a law enforcement agency determines that the notification will impede a criminal investigation and that agency has made a written request that the notification be delayed. The required notification shall be made after that law enforcement agency determines that its disclosure will not compromise the investigation and notifies the Entity in writing.

### Attorney General Enforcement
The Attorney General has enforcement authority over this statute as an unlawful trade practice.
