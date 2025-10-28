---
# ===================================================================
# :: CORE INFORMATION
# ===================================================================
state: "Pennsylvania"
state_code: "PA"
jurisdiction_type: "U.S. State"
statute_citation: "73 Pa. Stat. § 2301 et seq."
statute_title: "Pennsylvania Breach of Personal Information Notification Act"
statute_url: "https://govt.westlaw.com/pac/Browse/Home/Pennsylvania/UnofficialPurdonsPennsylvaniaStatutes?guid=N9B3F41908C4F11DA86FC8D90DD1949D4&originationContext=documenttoc&transitionType=Default&contextData=(sc.Default)"

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
legislation_bill_1_number: "S.B. 712"
legislation_bill_1_signed_date: "2005-12-22"
legislation_bill_1_effective_date: "2006-06-20"
legislation_bill_2_number: "S.B. 696"
legislation_bill_2_signed_date: "2022-11-03"
legislation_bill_2_effective_date: "2023-05-02"
legislation_bill_3_number: "S.B. 824"
legislation_bill_3_signed_date: "2024-06-28"
legislation_bill_3_effective_date: "2024-09-26"

# ===================================================================
# :: BREACH DEFINITION
# ===================================================================
breach_definition_text: "Unauthorized access and acquisition of computerized data that materially compromises the security or confidentiality of personal information maintained by the entity as part of a database of personal information regarding multiple individuals and that causes or the entity reasonably believes has caused or will cause loss or injury to any resident of Pennsylvania."
breach_trigger: "unauthorized_access_and_acquisition"
breach_access_alone_triggers: false
breach_acquisition_alone_triggers: false

# ===================================================================
# :: ENCRYPTION SAFE HARBOR
# ===================================================================
exemption_encryption_safe_harbor: true
exemption_encryption_safe_harbor_negated_if_key_compromised: true
exemption_encryption_description: "Encrypted or redacted data"

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
individual_notification_timeline_description: "Without unreasonable delay, except to take any measures necessary to determine the scope of the breach and restore the reasonable integrity of the data system"
individual_notification_extensions_available: false
individual_notification_extension_max_days: 0
individual_notification_extension_request_deadline_days: 0
individual_notification_contents:
  - "Date or estimated date of breach"
  - "Description of information involved"
  - "Contact information for the entity"
individual_notification_methods:
  - "Written notice to last known home address"
  - "Telephonic notice if customer can reasonably be expected to receive it"
  - "Email notice if prior business relationship exists and valid email available"
  - "Electronic form for online account credentials (directing password change)"

# ===================================================================
# :: SUBSTITUTE NOTIFICATION
# ===================================================================
substitute_notification_is_available: true
substitute_notification_cost_trigger: 100000
substitute_notification_affected_count_trigger: 175000
substitute_notification_insufficient_contact_info_trigger: true
substitute_notification_other_triggers: []
substitute_notification_methods:
  - "Email notice when entity has email address for subject persons"
  - "Conspicuous posting on entity website, if entity maintains one"
  - "Notification to major statewide media"

# ===================================================================
# :: ATTORNEY GENERAL NOTIFICATION
# ===================================================================
ag_notification_is_required: true
ag_notification_threshold: 500
ag_notification_threshold_description: "If entity required to notify more than 500 Pennsylvania residents"
ag_notification_timeline_days: 0
ag_notification_timeline_description: "Concurrently with consumer notification"
ag_notification_recipients: "Attorney General"
ag_notification_contents:
  - "Organization name and location"
  - "Date of the breach of the security of the system"
  - "Summary of the breach incident"
  - "Estimated total number of individuals affected by the breach"
  - "Estimated total number of Pennsylvania residents affected by the breach"

# ===================================================================
# :: CONSUMER REPORTING AGENCY NOTIFICATION
# ===================================================================
cra_notification_is_required: false
cra_notification_threshold: null
cra_notification_threshold_description: "No formal CRA notification required; however, when entity provides notification to more than 500 persons, entity shall notify all nationwide consumer reporting agencies of timing, distribution, and number of notices"
cra_notification_timeline_days: null
cra_notification_timeline_description: null
cra_notification_recipients: null
cra_notification_contents: []

# ===================================================================
# :: VENDOR NOTIFICATION (Third-Party Data Processors)
# ===================================================================
vendor_notification_is_required: true
vendor_notification_timeline_days: 0
vendor_notification_timeline_description: "Following discovery of breach"
owner_liability_for_vendor_failure: "Third-party must notify owner/licensee following discovery"
vendor_cooperation_required: false

# ===================================================================
# :: EXEMPTIONS
# ===================================================================
exemption_hipaa: false
exemption_hipaa_description: null
exemption_glba: false
exemption_glba_description: null
exemption_primary_regulator: true
exemption_primary_regulator_description: "Entity that complies with notification requirements of primary or functional federal regulator"
exemption_own_notification_policy: true
exemption_own_notification_policy_description: "Entity with own notification procedures as part of information privacy or security policy consistent with statute requirements"
exemption_other_description: "Pennsylvania Insurance Data Security Act (40 PA. C.S. CH. 45): Entities subject to this Act are exempt from AG notification requirements"

# ===================================================================
# :: ENFORCEMENT
# ===================================================================
enforcement_private_right_of_action: false
enforcement_authority: "Attorney General"
enforcement_authority_is_exclusive: true
enforcement_type_damages_description: "Exclusive authority under Unfair Trade Practices and Consumer Protection Law"

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
enforcement_penalty_notes: "Attorney General has exclusive authority under Unfair Trade Practices and Consumer Protection Law; specific penalty amounts not enumerated in data breach statute"

# ===================================================================
# :: SPECIAL PROVISIONS
# ===================================================================
provision_law_enforcement_delay: true
provision_law_enforcement_delay_description: "Notification may be delayed if law enforcement agency determines and advises entity in writing, specifically referencing statute, that notification will impede criminal or civil investigation. Notification must be made after law enforcement determines it will not compromise investigation or national or homeland security."
provision_government_entities_are_subject: true
provision_government_entities_notes: null
provision_waiver_not_permitted: false
provision_notice_at_collection_required: false
provision_other_description: "Recent amendment S.B. 824 (effective September 26, 2024). Both access AND acquisition required. REQUIRED credit monitoring: If breach includes first/last name + SSN, bank account number, or DL/state ID number, entity MUST offer 1 year of credit monitoring services at no cost and provide access to one independent credit report. Unique substitute thresholds: $100,000 cost OR 175,000 affected. When notifying 500+ persons, must notify all nationwide CRAs of timing, distribution, and number of notices. Insurance Data Security Act exemption from AG notification. Law enforcement must advise in writing specifically referencing statute. Exclusive AG enforcement authority."

# ===================================================================
# :: OBSIDIAN TAGS
# ===================================================================
tags:
  - DataBreachLaws/Breach/trigger/access-and-acquisition
  - DataBreachLaws/Exempts/federal-regulator
  - DataBreachLaws/Exempts/insurance-data-security-act
  - DataBreachLaws/Exempts/own-policy
  - DataBreachLaws/Notice/AG/required/threshold/500
  - DataBreachLaws/Notice/AG/required/timing/concurrent
  - DataBreachLaws/Notice/CRA/informal-requirement
  - DataBreachLaws/Notice/Consumer/asap
  - DataBreachLaws/PII/financial-accounts
  - DataBreachLaws/PII/government-id
  - DataBreachLaws/PII/health-info
  - DataBreachLaws/PII/online-account-credentials
  - DataBreachLaws/RiskOfHarm/not-allowed
  - DataBreachLaws/special-provision/credit-monitoring-required
---

# Pennsylvania Data Breach Notification Law

## Overview
- **Statutory Citation:** `73 Pa. Stat. § 2301 et seq.`)
- **Statute Title:** [Pennsylvania Breach of Personal Information Notification Act](https://govt.westlaw.com/pac/Browse/Home/Pennsylvania/UnofficialPurdonsPennsylvaniaStatutes?guid=N9B3F41908C4F11DA86FC8D90DD1949D4&originationContext=documenttoc&transitionType=Default&contextData=(sc.Default))
- **Jurisdiction Type:** U.S. State
- **Legislative History:**
  - **Original Legislation:** S.B. 712 (signed December 22, 2005, effective June 20, 2006)
  - **Major Amendments:**
    - S.B. 696 (signed November 3, 2022, effective May 2, 2023)
    - S.B. 824 (signed June 28, 2024, effective September 26, 2024)
  - **Last Verified:** September 2025

## Application & Covered Entities
Any state agency, political subdivision, or an individual or a business (collectively, Entity) doing business in Pennsylvania that maintains, stores, or manages computerized data that includes personal information of Pennsylvania residents.

## Key Definitions

### Personal Information
An individual's first name or first initial and last name in combination with and linked to any one or more of the following data elements when the data elements are not encrypted or redacted:
- Social Security number
- Driver's license number or state identification card number issued in lieu of a driver license
- Account number, credit card number, or debit card number in combination with any required security code, access code, or password that would permit access to an individual's financial account
- Medical information in the possession of a State agency or State agency contractor
- Health insurance information
- User name or email address in combination with a password or security questions and answers that would permit access to an online account

### Exclusions
Personal information does not include publicly available information that is lawfully made available to the general public from federal, state, or local government records.

### Breach of Security
Unauthorized access and acquisition of computerized data that materially compromises the security or confidentiality of personal information maintained by the Entity as part of a database of personal information regarding multiple individuals and that causes or the Entity reasonably believes has caused or will cause loss or injury to any resident of Pennsylvania.

### Good-Faith Exception
Good-faith acquisition of personal information by an employee or agent of the Entity for the purposes of the Entity is not a breach of the security of the system if the personal information is not used for a purpose other than the lawful purpose of the Entity and is not subject to further unauthorized disclosure.

## Notification Requirements & Triggers

### Notification Obligation
Any Entity to which the statute applies shall provide notice of any breach of the security of the system to any individual whose principal mailing address, as reflected in the computerized data that is maintained, stored, or managed by the Entity, is in Pennsylvania and whose unencrypted and unredacted personal information was or is reasonably believed to have been accessed and acquired by an unauthorized person.

An Entity must provide notice of the breach if encrypted information is accessed and acquired in an unencrypted form, if the security breach is linked to a breach of the security of the encryption, or if the security breach involves a person with access to the encryption key.

### Timing of Notification
Except to take any measures necessary to determine the scope of the breach and to restore the reasonable integrity of the data system, the notice shall be made without unreasonable delay.

### Notification Methods
Notice may be provided by any of the following methods:
- Written notice to the last known home address for the individual
- Telephonic notice, if the customer can be reasonably expected to receive it and the notice is given in a clear and conspicuous manner, describes the incident in general terms, and verifies personal information but does not require the customer to provide personal information, and the customer is provided with a telephone number to call or a website to visit for further information or assistance
- Email notice, if a prior business relationship exists and the Entity has a valid email address for the individual
- **For online account credentials:** Notice may be provided in electronic form that directs the individual to promptly change his or her password and security question or answer, or to take other appropriate steps to protect the online account with the entity or other online accounts involving the same login credentials

### Content of Notice to Individuals
- Date or estimated date of breach
- Description of information involved
- Contact information for the entity

### Attorney General Notification
Any Entity required to notify more than **500** Pennsylvania residents must concurrently provide notice to the Attorney General of the breach. Notice must include:
- The organization name and location
- The date of the breach of the security of the system
- A summary of the breach incident
- An estimated total number of individuals affected by the breach
- An estimated total number of Pennsylvania residents affected by the breach

### Consumer Reporting Agency Notification
When an Entity provides notification to more than **500** persons at one time, the Entity shall also notify, without unreasonable delay, all nationwide consumer reporting agencies of the timing, distribution, and number of notices.

### Substitute Notice Available
If the Entity demonstrates that:
- The cost of providing notice would exceed **$100,000**, OR
- The affected class of subject persons to be notified exceeds **175,000**, OR
- The Entity does not have sufficient contact information

Substitute notice shall consist of all of the following:
- Email notice when the Entity has an email address for the subject persons
- Conspicuous posting of the notice on the Entity's website, if the Entity maintains one
- Notification to major statewide media

### Credit Monitoring Services and Free Credit Report
If a breach of security has occurred and the Entity reasonably believes that the data accessed includes an individual's first name and last name or an individual's first initial and last name, in combination with:
- Social Security number, OR
- Bank account number, OR
- Driver's license or state ID number

The Entity must also:
- Offer affected individuals credit monitoring services at no cost for a period of **1 year**
- Assume all costs and fees in providing the affected individuals access to one independent credit report from a consumer reporting agency if the individual is not eligible to obtain an independent credit report from a consumer reporting agency for free under 15 U.S.C. § 1681

If these requirements are triggered, the no-cost services must be described in the individual notification.

### Third-Party Data Notification
An Entity that maintains, stores, or manages computerized data on behalf of another Entity shall provide notice of any breach of the security system following discovery to the Entity on whose behalf it maintains, stores or manages the data.

## Exemptions, Penalties, and Other Provisions

### Encryption Safe Harbor
The law provides a safe harbor for encrypted or redacted data.

### Primary Regulator Exemption
An Entity that complies with the notification requirements or procedures pursuant to the rules, regulations, procedures, or guidelines established by the Entity's primary or functional federal regulator shall be in compliance with this act.

### Federal Interagency Guidance Exemption
A financial institution that complies with the notification requirements prescribed by the Federal Interagency Guidance on Response Programs for Unauthorized Access to Customer Information and Customer Notice is deemed to be in compliance with this act.

### Own Notification Policy Exemption
An Entity that maintains its own notification procedures as part of an information privacy or security policy for the treatment of personal information and is consistent with the notice requirements of this act shall be deemed to be in compliance with the notification requirements of this act if it notifies subject persons in accordance with its policies in the event of a breach of security.

### Insurance Data Security Act Exemption
An Entity that is subject to the requirements of the Pennsylvania Insurance Data Security Act (40 PA. C.S. CH. 45) is exempt from notice requirements to the Attorney General.

## Key Provisions

### Delay for Law Enforcement
Notification required may be delayed if a law enforcement agency determines and advises the Entity in writing, specifically referencing the statute, that the notification will impede a criminal or civil investigation. The required notification shall be made after the law enforcement agency determines that it will not compromise the investigation or national or homeland security.

### Attorney General Enforcement
The Attorney General shall have exclusive authority to bring an action under the Unfair Trade Practices and Consumer Protection Law for a violation of the statute.
