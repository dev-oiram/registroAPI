import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class DatosContacto {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  correo: string;

  @Column({ type: 'bigint' })
  telefono: number;
}
