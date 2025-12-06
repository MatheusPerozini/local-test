import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'Locals' })
export class LocalsEntity {
  constructor({ name, description, latitude, longitude, image }) {
    this.name = name;
    this.description = description;
    this.latitude = latitude;
    this.longitude = longitude;
    this.image = image;
  }

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
