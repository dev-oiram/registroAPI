import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Logs {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  fecha: Date;

  @Column()
  mensaje: string;
}
