import { StateLaw, LawIndex } from '../types';

export const createLawIndex = (laws: StateLaw[]): LawIndex => {
  const index: LawIndex = {
    byStateCode: new Map(),
    privateRightOfActionYes: new Set(),
    privateRightOfActionNo: new Set(),
    riskOfHarmAllowedYes: new Set(),
    riskOfHarmAllowedNo: new Set(),
    encryptionSafeHarborYes: new Set(),
    encryptionSafeHarborNo: new Set(),
  };

  for (const law of laws) {
    if (!law.stateCode) continue;

    index.byStateCode.set(law.stateCode, law);

    if (law.enforcementPrivateRightOfAction) {
      index.privateRightOfActionYes.add(law.stateCode);
    } else {
      index.privateRightOfActionNo.add(law.stateCode);
    }

    if (law.riskOfHarmAnalysisCanEliminateNotification) {
      index.riskOfHarmAllowedYes.add(law.stateCode);
    } else {
      index.riskOfHarmAllowedNo.add(law.stateCode);
    }

    if (law.exemptionEncryptionSafeHarbor) {
      index.encryptionSafeHarborYes.add(law.stateCode);
    } else {
      index.encryptionSafeHarborNo.add(law.stateCode);
    }
  }

  return index;
};
