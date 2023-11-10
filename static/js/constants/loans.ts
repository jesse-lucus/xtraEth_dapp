interface LoanTermData {
  readonly address: string
  readonly name: string
  readonly description: string
  readonly leverage: string
  readonly loanOriginationFee: string
  readonly loanRetentionPremium: string
  readonly principalRepaymentCondition: string
  readonly principalRepaymentDuring: boolean
}

export type LoanTermDataMap = { readonly [loanTerm: string]: LoanTermData }

const LOAN_TERMS: LoanTermDataMap = {
  '0x7400165E167479a3c81C8fC8CC3df3D2a92E9017': {
    address: '0x7400165E167479a3c81C8fC8CC3df3D2a92E9017',
    name: 'Upfront',
    description: 'Upfront simple loan, where all fees are paid at launch.',
    leverage: '4x',
    loanOriginationFee: '25% of borrowed capital (4x leverage)',
    loanRetentionPremium: '0%',
    principalRepaymentCondition: '100% of borrowed capital due by the end of the loan term',
    principalRepaymentDuring: false,
  },
  '0x740019A6b3a9cF3bd193986a560B05726143B217': {
    address: '0x740019A6b3a9cF3bd193986a560B05726143B217',
    name: 'Amortizing',
    description: 'Amortizing with interest loan, small up front cost with premium & principle payment each period.',
    leverage: '10x',
    loanOriginationFee: '10% of borrowed capital (10x leverage)',
    loanRetentionPremium: '6.25% in premiums due by the end of each quarter of the loan term',
    principalRepaymentCondition: '25% of borrowed capital due by the end of each quarter of the loan term',
    principalRepaymentDuring: true,
  },
  '0x74001C747B6cc9091EE63bC9424DfF633FBAc617': {
    address: '0x74001C747B6cc9091EE63bC9424DfF633FBAc617',
    name: 'Interest only',
    description: 'Interest only loan, small up front cost requiring premium payment each period.',
    leverage: '6.66x',
    loanOriginationFee: '15% of borrowed capital (6.66x leverage)',
    loanRetentionPremium: '6.25% in premiums due by the end of each quarter of the loan term',
    principalRepaymentCondition: '100% of borrowed capital due by the end of the loan term',
    principalRepaymentDuring: false,
  },
}

export const ACTIVE_LOAN_TERMS = LOAN_TERMS
