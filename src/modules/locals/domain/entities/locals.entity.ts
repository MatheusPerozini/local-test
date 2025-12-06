import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'Locals' })
export class LocalsEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar' })
  name: string;

  @Column({ type: 'text' })
  description: string;

  @Column({ type: 'varchar' })
  latitude: string;

  @Column({ type: 'varchar' })
  longitude: string;

  @Column({ type: 'varchar', nullable: true })
  image?: string;
}
