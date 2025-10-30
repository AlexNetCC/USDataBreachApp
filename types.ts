export interface LegislativeHistory {
  number: string;
  signedDate: string;
  effectiveDate: string;
}

export type TriStateFilter = 'any' | 'yes' | 'no';
export type ViewMode = 'explorer' | 'assessment' | 'matrix';

export interface AppState {
  viewMode: ViewMode;
  searchTerm: string;
  filters: Filters;
  selectedStateCodes: string[];
}

export interface Filters {
  timelineMaxDays: number | null;
  agThresholdMax: number | null;
  privateRightOfAction: TriStateFilter;
  riskOfHarmAllowed: TriStateFilter;
  encryptionSafeHarbor: TriStateFilter;
}

export type EntityType = 'business' | 'government' | 'healthcare';


export interface AssessmentData {
  affectedCounts: { [stateCode: string]: number };
  isEncrypted: 'yes' | 'no' | 'unknown';
  wasKeyCompromised: 'yes' | 'no' | 'unknown';
  dataTypes: string[];
  entityType: EntityType;
  lawEnforcementInvolvement: boolean;
  lowRiskOfHarmConsidered: boolean;
}

export interface SavedAssessment {
  id: string;
  name: string;
  createdAt: string;
  lastModified: string;
  data: AssessmentData;
}

export interface AssessmentResult {
  stateCode: string;
  law: StateLaw;
  affectedCount: number;
  individualNotification: {
    required: 'Yes' | 'No' | 'Conditional';
    reason: string;
    timeline: string;
  };
  agNotification: {
    required: 'Yes' | 'No' | 'Conditional';
    reason: string;
    timeline: string;
  };
  craNotification: {
    required: 'Yes' | 'No' | 'Conditional';
    reason: string;
    timeline: string;
  };
}

export interface LawIndex {
  byStateCode: Map<string, StateLaw>;
  privateRightOfActionYes: Set<string>;
  privateRightOfActionNo: Set<string>;
  riskOfHarmAllowedYes: Set<string>;
  riskOfHarmAllowedNo: Set<string>;
  encryptionSafeHarborYes: Set<string>;
  encryptionSafeHarborNo: Set<string>;
}


export interface StateLaw {
  state: string;
  stateCode: string;
  jurisdictionType: string;
  statuteCitation: string;
  statuteTitle: string;
  statuteUrl: string;
  sourceDocumentation: string;
  lastVerified: string;
  verifiedBy: string;
  knownContradictions: boolean;
  knownContradictionsDescription: string | null;
  complexityLevel: string;
  legislativeHistory: LegislativeHistory[];
  breachDefinitionText: string;
  breachTrigger: string;
  breachAccessAloneTriggers: boolean;
  breachAcquisitionAloneTriggers: boolean;
  exemptionEncryptionSafeHarbor: boolean;
  exemptionEncryptionSafeHarborNegatedIfKeyCompromised: boolean;
  exemptionEncryptionDescription: string | null;
  riskOfHarmAnalysisIsRequired: boolean;
  riskOfHarmAnalysisCanEliminateNotification: boolean;
  riskOfHarmAnalysisStandard: string | null;
  riskOfHarmAnalysisDocumentationRequired: boolean;
  riskOfHarmAnalysisDocumentationRetentionYears: number;
  riskOfHarmAnalysisAgNotificationRequired: boolean;
  riskOfHarmAnalysisAgNotificationThreshold: number;
  riskOfHarmAnalysisAgNotificationTimelineDays: number;
  individualNotificationIsRequired: boolean;
  individualNotificationTimelineDays: number;
  individualNotificationTimelineDescription: string;
  individualNotificationExtensionsAvailable: boolean;
  individualNotificationExtensionMaxDays: number;
  individualNotificationExtensionRequestDeadlineDays: number;
  individualNotificationContents: string[];
  individualNotificationMethods: string[];
  substituteNotificationIsAvailable: boolean;
  substituteNotificationCostTrigger: number;
  substituteNotificationAffectedCountTrigger: number;
  substituteNotificationInsufficientContactInfoTrigger: boolean;
  substituteNotificationOtherTriggers: string[];
  substituteNotificationMethods: string[];
  agNotificationIsRequired: boolean;
  agNotificationThreshold: number | null;
  agNotificationThresholdDescription: string | null;
  agNotificationTimelineDays: number | null;
  agNotificationTimelineDescription: string | null;
  agNotificationTimelineRelativeTo?: 'breach_discovery' | 'individual_notice' | null;
  agNotificationTimelineRelativeDescription?: string | null;
  agNotificationRecipients: string | null;
  agNotificationContents: string[];
  craNotificationIsRequired: boolean;
  craNotificationThreshold: number | null;
  craNotificationThresholdDescription: string | null;
  craNotificationTimelineDays: number | null;
  craNotificationTimelineDescription: string | null;
  craNotificationRecipients: string | null;
  craNotificationContents: string[];
  vendorNotificationIsRequired: boolean;
  vendorNotificationTimelineDays: number;
  vendorNotificationTimelineDescription: string;
  ownerLiabilityForVendorFailure: string | null;
  vendorCooperationRequired: boolean;
  exemptionHipaa: boolean;
  exemptionHipaaDescription: string | null;
  exemptionGlba: boolean;
  exemptionGlbaDescription: string | null;
  exemptionPrimaryRegulator: boolean;
  exemptionPrimaryRegulatorDescription: string | null;
  exemptionOwnNotificationPolicy: boolean;
  exemptionOwnNotificationPolicyDescription: string | null;
  exemptionOtherDescription: string | null;
  enforcementPrivateRightOfAction: boolean;
  enforcementAuthority: string;
  enforcementAuthorityIsExclusive: boolean;
  enforcementTypeDamagesDescription: string | null;
  enforcementPenaltyPerDay: number;
  enforcementPenaltyPerIndividual: number;
  enforcementPenaltyPerRecord: number;
  enforcementPenaltyPerViolation: number;
  enforcementPenaltyFlatAmount: number;
  enforcementPenaltyMaximum: number;
  enforcementPenaltyBasis: string | null;
  enforcementPenaltyNotes: string | null;
  provisionLawEnforcementDelay: boolean;
  provisionLawEnforcementDelayDescription: string;
  provisionGovernmentEntitiesAreSubject: boolean;
  provisionGovernmentEntitiesNotes: string | null;
  provisionWaiverNotPermitted: boolean;
  provisionNoticeAtCollectionRequired: boolean;
  provisionOtherDescription: string | null;
  tags: string[];
  markdownContent: string;
  searchSnippet?: string;
}