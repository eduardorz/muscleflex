import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Appointment } from './appointments.entity';

@Entity()
export class Class {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column({ type: 'text' })
  description: string;

  @Column()
  instructor: string;

  @Column({ type: 'timestamp' })
  schedule: Date;

  @OneToMany(() => Appointment, (appointment) => appointment.gymClass)
  appointments: Appointment[];
}
