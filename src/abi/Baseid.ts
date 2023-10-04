import * as ethers from 'ethers'
import {LogEvent, Func, ContractBase} from './abi.support'
import {ABI_JSON} from './Baseid.abi'

export const abi = new ethers.Interface(ABI_JSON);

export const events = {
    Approval: new LogEvent<([owner: string, approved: string, tokenId: bigint] & {owner: string, approved: string, tokenId: bigint})>(
        abi, '0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925'
    ),
    ApprovalForAll: new LogEvent<([owner: string, operator: string, approved: boolean] & {owner: string, operator: string, approved: boolean})>(
        abi, '0x17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31'
    ),
    AssociatedNameSet: new LogEvent<([owner: string, name: string, timestamp: bigint] & {owner: string, name: string, timestamp: bigint})>(
        abi, '0x7cd5df30cf9b6a098922e78dae7ba38e5688f8e830e3cbdfe337822ce8e08a28'
    ),
    BatchMetadataUpdate: new LogEvent<([_fromTokenId: bigint, _toTokenId: bigint] & {_fromTokenId: bigint, _toTokenId: bigint})>(
        abi, '0x6bd5c950a8d8df17f772f5af37cb3655737899cbf903264b9795592da439661c'
    ),
    DomainRegistered: new LogEvent<([owner: string, tokenId: bigint, domainName: string] & {owner: string, tokenId: bigint, domainName: string})>(
        abi, '0x5df60dd556b31ac95ccde15dabe6f8abe738560a81ba409f58e5aad66fc0675d'
    ),
    Initialized: new LogEvent<([version: number] & {version: number})>(
        abi, '0x7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb3847402498'
    ),
    MetadataUpdate: new LogEvent<([_tokenId: bigint] & {_tokenId: bigint})>(
        abi, '0xf8e1a15aba9398e019f0b49df1a4fde98ee17ae345cb5f6b5e2c27f5033e8ce7'
    ),
    OwnershipTransferred: new LogEvent<([previousOwner: string, newOwner: string] & {previousOwner: string, newOwner: string})>(
        abi, '0x8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0'
    ),
    Transfer: new LogEvent<([from: string, to: string, tokenId: bigint] & {from: string, to: string, tokenId: bigint})>(
        abi, '0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef'
    ),
}

export const functions = {
    adminDomain: new Func<[name: string], {name: string}, []>(
        abi, '0x41431574'
    ),
    approve: new Func<[to: string, tokenId: bigint], {to: string, tokenId: bigint}, []>(
        abi, '0x095ea7b3'
    ),
    balanceOf: new Func<[owner: string], {owner: string}, bigint>(
        abi, '0x70a08231'
    ),
    domains: new Func<[_: string], {}, ([owner: string, tokenId: bigint] & {owner: string, tokenId: bigint})>(
        abi, '0x26449235'
    ),
    getApproved: new Func<[tokenId: bigint], {tokenId: bigint}, string>(
        abi, '0x081812fc'
    ),
    getAssociatedName: new Func<[user: string], {user: string}, string>(
        abi, '0x2273d497'
    ),
    getDomainAddress: new Func<[name: string], {name: string}, string>(
        abi, '0x94310e51'
    ),
    getRecord: new Func<[name: string], {name: string}, string>(
        abi, '0x11dd8845'
    ),
    initialize: new Func<[_tld: string], {_tld: string}, []>(
        abi, '0xf62d1888'
    ),
    isApprovedForAll: new Func<[owner: string, operator: string], {owner: string, operator: string}, boolean>(
        abi, '0xe985e9c5'
    ),
    name: new Func<[], {}, string>(
        abi, '0x06fdde03'
    ),
    owner: new Func<[], {}, string>(
        abi, '0x8da5cb5b'
    ),
    ownerOf: new Func<[tokenId: bigint], {tokenId: bigint}, string>(
        abi, '0x6352211e'
    ),
    price: new Func<[name: string], {name: string}, bigint>(
        abi, '0xfe2c6198'
    ),
    records: new Func<[_: string], {}, ([isRecordSet: boolean, record: string] & {isRecordSet: boolean, record: string})>(
        abi, '0x541e771d'
    ),
    registerDomain: new Func<[name: string], {name: string}, []>(
        abi, '0xa5cad08a'
    ),
    renounceOwnership: new Func<[], {}, []>(
        abi, '0x715018a6'
    ),
    'safeTransferFrom(address,address,uint256)': new Func<[from: string, to: string, tokenId: bigint], {from: string, to: string, tokenId: bigint}, []>(
        abi, '0x42842e0e'
    ),
    'safeTransferFrom(address,address,uint256,bytes)': new Func<[from: string, to: string, tokenId: bigint, data: string], {from: string, to: string, tokenId: bigint, data: string}, []>(
        abi, '0xb88d4fde'
    ),
    setAdminWhitelist: new Func<[addr: string, value: boolean], {addr: string, value: boolean}, []>(
        abi, '0x69d0a133'
    ),
    setApprovalForAll: new Func<[operator: string, approved: boolean], {operator: string, approved: boolean}, []>(
        abi, '0xa22cb465'
    ),
    setAssociatedName: new Func<[name: string], {name: string}, []>(
        abi, '0xa000001d'
    ),
    setBaseURI: new Func<[newBaseURI: string], {newBaseURI: string}, []>(
        abi, '0x55f804b3'
    ),
    setRecord: new Func<[name: string, record: string], {name: string, record: string}, []>(
        abi, '0xc1880a98'
    ),
    supportsInterface: new Func<[interfaceId: string], {interfaceId: string}, boolean>(
        abi, '0x01ffc9a7'
    ),
    symbol: new Func<[], {}, string>(
        abi, '0x95d89b41'
    ),
    tld: new Func<[], {}, string>(
        abi, '0x2d551432'
    ),
    tokenIdToDomain: new Func<[_: bigint], {}, string>(
        abi, '0x8cd108de'
    ),
    tokenURI: new Func<[tokenId: bigint], {tokenId: bigint}, string>(
        abi, '0xc87b56dd'
    ),
    transferFrom: new Func<[from: string, to: string, tokenId: bigint], {from: string, to: string, tokenId: bigint}, []>(
        abi, '0x23b872dd'
    ),
    transferOwnership: new Func<[newOwner: string], {newOwner: string}, []>(
        abi, '0xf2fde38b'
    ),
    userAssociatedName: new Func<[_: string], {}, string>(
        abi, '0x9cec2d94'
    ),
    withdraw: new Func<[], {}, []>(
        abi, '0x3ccfd60b'
    ),
}

export class Contract extends ContractBase {

    balanceOf(owner: string): Promise<bigint> {
        return this.eth_call(functions.balanceOf, [owner])
    }

    domains(arg0: string): Promise<([owner: string, tokenId: bigint] & {owner: string, tokenId: bigint})> {
        return this.eth_call(functions.domains, [arg0])
    }

    getApproved(tokenId: bigint): Promise<string> {
        return this.eth_call(functions.getApproved, [tokenId])
    }

    getAssociatedName(user: string): Promise<string> {
        return this.eth_call(functions.getAssociatedName, [user])
    }

    getDomainAddress(name: string): Promise<string> {
        return this.eth_call(functions.getDomainAddress, [name])
    }

    getRecord(name: string): Promise<string> {
        return this.eth_call(functions.getRecord, [name])
    }

    isApprovedForAll(owner: string, operator: string): Promise<boolean> {
        return this.eth_call(functions.isApprovedForAll, [owner, operator])
    }

    name(): Promise<string> {
        return this.eth_call(functions.name, [])
    }

    owner(): Promise<string> {
        return this.eth_call(functions.owner, [])
    }

    ownerOf(tokenId: bigint): Promise<string> {
        return this.eth_call(functions.ownerOf, [tokenId])
    }

    price(name: string): Promise<bigint> {
        return this.eth_call(functions.price, [name])
    }

    records(arg0: string): Promise<([isRecordSet: boolean, record: string] & {isRecordSet: boolean, record: string})> {
        return this.eth_call(functions.records, [arg0])
    }

    supportsInterface(interfaceId: string): Promise<boolean> {
        return this.eth_call(functions.supportsInterface, [interfaceId])
    }

    symbol(): Promise<string> {
        return this.eth_call(functions.symbol, [])
    }

    tld(): Promise<string> {
        return this.eth_call(functions.tld, [])
    }

    tokenIdToDomain(arg0: bigint): Promise<string> {
        return this.eth_call(functions.tokenIdToDomain, [arg0])
    }

    tokenURI(tokenId: bigint): Promise<string> {
        return this.eth_call(functions.tokenURI, [tokenId])
    }

    userAssociatedName(arg0: string): Promise<string> {
        return this.eth_call(functions.userAssociatedName, [arg0])
    }
}
