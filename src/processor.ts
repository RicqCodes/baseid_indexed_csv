import {
  EvmBatchProcessor,
  EvmBatchProcessorFields,
  BlockHeader,
  Log as _Log,
  Transaction as _Transaction,
} from "@subsquid/evm-processor";
import { lookupArchive } from "@subsquid/archive-registry";
import * as baseidAbi from "./abi/Baseid";

export const processor = new EvmBatchProcessor()
  .setDataSource({
    archive: lookupArchive("base-mainnet", { type: "EVM" }),
  })
  .setFields({
    log: {
      topics: true,
      data: true,
      transactionHash: true,
    },
    transaction: {
      hash: true,
      input: true,
      from: true,
      value: true,
      status: true,
    },
  })
  .addLog({
    address: ["0x1d390ae05533780b789f41becd82da83d3d4c4d9"],
    topic0: [
      baseidAbi.events["Approval"].topic,
      baseidAbi.events["ApprovalForAll"].topic,
      baseidAbi.events["AssociatedNameSet"].topic,
      baseidAbi.events["BatchMetadataUpdate"].topic,
      baseidAbi.events["DomainRegistered"].topic,
      baseidAbi.events["Initialized"].topic,
      baseidAbi.events["MetadataUpdate"].topic,
      baseidAbi.events["OwnershipTransferred"].topic,
      baseidAbi.events["Transfer"].topic,
    ],
    range: {
      from: 3528583,
    },
  });

export type Fields = EvmBatchProcessorFields<typeof processor>;
export type Block = BlockHeader<Fields>;
export type Log = _Log<Fields>;
export type Transaction = _Transaction<Fields>;
