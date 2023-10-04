import {
  decodeAndWriteEvent,
  writeBlock,
  writeTransaction,
} from "./dataWriter";

export const processBlocks = async (ctx: { blocks: any }) => {
  for (let block of ctx.blocks) {
    await writeBlock(ctx, block);
    for (let log of block.logs) {
      if (log.address === "0x1d390ae05533780b789f41becd82da83d3d4c4d9") {
        await decodeAndWriteEvent(ctx, log);
      }
    }
    for (let transaction of block.transactions) {
      await writeTransaction(ctx, transaction, block);
    }
  }
};
