import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Claves {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  pass: string;
}
