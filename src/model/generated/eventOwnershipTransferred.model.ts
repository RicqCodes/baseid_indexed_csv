import {
  Entity as Entity_,
  Column as Column_,
  PrimaryColumn as PrimaryColumn_,
  Index as Index_,
} from "typeorm";

@Entity_()
export class EventOwnershipTransferred {
  constructor(props?: Partial<EventOwnershipTransferred>) {
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
  previousOwner!: string;

  @Index_()
  @Column_("text", { nullable: false })
  newOwner!: string;
}
