import {
  Entity as Entity_,
  Column as Column_,
  PrimaryColumn as PrimaryColumn_,
  Index as Index_,
} from "typeorm";
import * as marshal from "./marshal";

@Entity_()
export class EventBatchMetadataUpdate {
  constructor(props?: Partial<EventBatchMetadataUpdate>) {
    Object.assign(this, props);
  }

  @PrimaryColumn_()
  id!: string;

  @Index_()
  @Column_("int4", { nullable: false })
  blockNumber!: number;

  @Index_()
  @Column_("timestamp with time zone", { nullable: false })
  blockTimestamp!: Date;

  @Index_()
  @Column_("text", { nullable: false })
  transactionHash!: string;

  @Index_()
  @Column_("text", { nullable: false })
  eventName!: string;

  @Column_("numeric", {
    transformer: marshal.bigintTransformer,
    nullable: false,
  })
  fromTokenId!: bigint;

  @Column_("numeric", {
    transformer: marshal.bigintTransformer,
    nullable: false,
  })
  toTokenId!: bigint;
}
