import {
  Entity as Entity_,
  Column as Column_,
  PrimaryColumn as PrimaryColumn_,
  Index as Index_,
} from "typeorm";
import * as marshal from "./marshal";

@Entity_()
export class EventAssociatedNameSet {
  constructor(props?: Partial<EventAssociatedNameSet>) {
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

  @Index_()
  @Column_("text", { nullable: false })
  owner!: string;

  @Column_("text", { nullable: false })
  name!: string;

  @Column_("numeric", {
    transformer: marshal.bigintTransformer,
    nullable: false,
  })
  timestamp!: bigint;
}
