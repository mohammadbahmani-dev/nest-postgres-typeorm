import {
  Entity,
  Column,
  Index,
  PrimaryColumn,
  DeleteDateColumn,
} from 'typeorm';
import { ISession } from 'connect-typeorm';

@Entity({ name: 'sessions' })
export class SessionEntity implements ISession {
  @Index()
  @Column('bigint')
  expiredAt = Date.now();

  @PrimaryColumn('varchar')
  id = '';

  @Column('text')
  json = '';

  @DeleteDateColumn({ name: 'deleted_at' }) // Add delete date column
  deletedAt?: Date;
}
