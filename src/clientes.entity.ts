import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from 'typeorm';
import { DatosContacto } from './datos-contacto.entity';
import { Claves } from 'src/claves.entity';

@Entity()
export class Clientes {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @OneToOne(() => DatosContacto)
  @JoinColumn()
  datosContacto: DatosContacto;

  @OneToOne(() => Claves)
  @JoinColumn()
  claves: Claves;
}
