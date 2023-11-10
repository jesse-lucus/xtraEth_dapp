import { constructSameAddressMap } from '../utils/constructSameAddressMap'
import { SupportedChainId } from './chains'

type AddressMap = { [chainId: number]: string }
/**
 * Lending Pool Contracts
 */
export const V2_XCHANGE_FACTORY_ADDRESS: AddressMap = {
  [SupportedChainId.MAINNET]: '0x7de800467aFcE442019884f51A4A1B9143a34fAc',
  [SupportedChainId.ARBITRUM_ONE]: '0x7de800467aFcE442019884f51A4A1B9143a34fAc',
  [SupportedChainId.POLYGON]: '0x7de800467aFcE442019884f51A4A1B9143a34fAc',
  [SupportedChainId.OPTIMISM]: '0x7de800467aFcE442019884f51A4A1B9143a34fAc',
}

export const XCHANGE_LENDING_POOL_V1: AddressMap = {
  [SupportedChainId.MAINNET]: '0x740015c39da5D148fcA25A467399D00bcE10c001',
  [SupportedChainId.ARBITRUM_ONE]: '0x740015c39da5D148fcA25A467399D00bcE10c001',
  [SupportedChainId.POLYGON]: '0x740015c39da5D148fcA25A467399D00bcE10c001',
  [SupportedChainId.OPTIMISM]: '0x740015c39da5D148fcA25A467399D00bcE10c001',
}

export const XCHANGE_LENDING_POOL_RESERVE: AddressMap = {
  [SupportedChainId.MAINNET]: '0x7ca54e9aa3128bf15f764fa0f0f93e72b5267000',
  [SupportedChainId.ARBITRUM_ONE]: '0x7ca54e9aa3128bf15f764fa0f0f93e72b5267000',
  [SupportedChainId.POLYGON]: '0x7ca54e9aa3128bf15f764fa0f0f93e72b5267000',
  [SupportedChainId.OPTIMISM]: '0x7ca54e9aa3128bf15f764fa0f0f93e72b5267000',
}
export const XCHANGE_ROUTER_V1: AddressMap = {
  ...constructSameAddressMap('0x7DE8063E9fB43321d2100e8Ddae5167F56A50060', [
    SupportedChainId.MAINNET,
    SupportedChainId.ARBITRUM_ONE,
    SupportedChainId.POLYGON,
    SupportedChainId.OPTIMISM,
  ]),
}

export const XCHANGE_LOAN_000: AddressMap = {
  [SupportedChainId.MAINNET]: '0x7400165E167479a3c81C8fC8CC3df3D2a92E9017',
  [SupportedChainId.ARBITRUM_ONE]: '0x7400165E167479a3c81C8fC8CC3df3D2a92E9017',
  [SupportedChainId.POLYGON]: '0x7400165E167479a3c81C8fC8CC3df3D2a92E9017',
  [SupportedChainId.OPTIMISM]: '0x7400165E167479a3c81C8fC8CC3df3D2a92E9017',
}

export const V2_XCHANGE_FACTORY_ADDRESSES: AddressMap = V2_XCHANGE_FACTORY_ADDRESS
