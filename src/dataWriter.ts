import * as spec from "./abi/Baseid";

export const writeBlock = async (ctx: any, block: any) => {
  ctx.store.BlockTable.write({
    id: block.header.id,
    number: block.header.height,
    timestamp: new Date(block.header.timestamp),
  });
};

export const decodeAndWriteEvent = async (ctx: any, log: any) => {
  try {
    switch (log.topics[0]) {
      case spec.events["Approval"].topic: {
        let e = spec.events["Approval"].decode(log);
        console.log("Approval", e);
        ctx.store.ApprovalTable.write({
          id: log.id,
          blockNumber: log.block.height,
          blockTimestamp: new Date(log.block.timestamp),
          transactionHash: log.transactionHash,
          eventName: "Approval",
          owner: e[0],
          approved: e[1],
          tokenId: e[2],
        });
        break;
      }
      case spec.events["ApprovalForAll"].topic: {
        let e = spec.events["ApprovalForAll"].decode(log);
        console.log("Approval All", e);

        ctx.store.ApprovalAllTable.write({
          id: log.id,
          blockNumber: log.block.height,
          blockTimestamp: new Date(log.block.timestamp),
          transactionHash: log.transactionHash,
          eventName: "ApprovalForAll",
          owner: e[0],
          operator: e[1],
          approved: e[2],
        });
        break;
      }
      case spec.events["AssociatedNameSet"].topic: {
        let e = spec.events["AssociatedNameSet"].decode(log);
        console.log("Associated Name", e);

        ctx.store.AssociateNameTable.write({
          id: log.id,
          blockNumber: log.block.height,
          blockTimestamp: new Date(log.block.timestamp),
          transactionHash: log.transactionHash,
          eventName: "AssociatedNameSet",
          owner: e[0],
          name: e[1],
          timestamp: e[2],
        });
        break;
      }
      case spec.events["BatchMetadataUpdate"].topic: {
        let e = spec.events["BatchMetadataUpdate"].decode(log);
        ctx.store.MetadataBatchTable.write({
          id: log.id,
          blockNumber: log.block.height,
          blockTimestamp: new Date(log.block.timestamp),
          transactionHash: log.transactionHash,
          eventName: "BatchMetadataUpdate",
          fromTokenId: e[0],
          toTokenId: e[1],
        });
        break;
      }
      case spec.events["DomainRegistered"].topic: {
        let e = spec.events["DomainRegistered"].decode(log);

        ctx.store.RegisterTable.write({
          id: log.id,
          blockNumber: log.block.height,
          blockTimestamp: new Date(log.block.timestamp),
          transactionHash: log.transactionHash,
          eventName: "DomainRegistered",
          owner: e[0],
          tokenId: e[1],
          domainName: e[2],
        });
        break;
      }
      case spec.events["Initialized"].topic: {
        let e = spec.events["Initialized"].decode(log);
        ctx.store.InitializedTable.write({
          id: log.id,
          blockNumber: log.block.height,
          blockTimestamp: new Date(log.block.timestamp),
          transactionHash: log.transactionHash,
          eventName: "Initialized",
          version: e[0],
        });
        break;
      }
      case spec.events["MetadataUpdate"].topic: {
        let e = spec.events["MetadataUpdate"].decode(log);
        ctx.store.MetadataUpdateTable.write({
          id: log.id,
          blockNumber: log.block.height,
          blockTimestamp: new Date(log.block.timestamp),
          transactionHash: log.transactionHash,
          eventName: "MetadataUpdate",
          tokenId: e[0],
        });
        break;
      }
      case spec.events["OwnershipTransferred"].topic: {
        let e = spec.events["OwnershipTransferred"].decode(log);
        ctx.store.OwnershipTransferredTable.write({
          id: log.id,
          blockNumber: log.block.height,
          blockTimestamp: new Date(log.block.timestamp),
          transactionHash: log.transactionHash,
          eventName: "OwnershipTransferred",
          previousOwner: e[0],
          newOwner: e[1],
        });
        break;
      }
      case spec.events["Transfer"].topic: {
        let e = spec.events["Transfer"].decode(log);
        ctx.store.TransfersTable.write({
          id: log.id,
          blockNumber: log.block.height,
          blockTimestamp: new Date(log.block.timestamp),
          transactionHash: log.transactionHash,
          eventName: "Transfer",
          from: e[0],
          to: e[1],
          tokenId: e[2],
        });
        break;
      }
    }
  } catch (error) {
    ctx.log.error(
      {
        error,
        blockNumber: log.block.height,
        blockHash: log.block.hash,
        address: log.address,
      },
      `Unable to decode event "${log.topics[0]}"`
    );
  }
};

export const writeTransaction = async (
  ctx: any,
  transaction: any,
  block: any
) => {
  ctx.store.TransactionsTable.write({
    id: transaction.id,
    blockNumber: block.header.height,
    blockTimestamp: new Date(block.header.timestamp),
    hash: transaction.hash,
    to: transaction.to!,
    from: transaction.from,
    status: transaction.status!,
  });
};
