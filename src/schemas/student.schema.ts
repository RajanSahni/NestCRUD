import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type CatDocument = HydratedDocument<Student>;

@Schema()
export class Student {
  @Prop()
  name: string;

  @Prop()
  rollNumber: number; // Renamed for clarity

  @Prop()
  studentClass: number; // Avoid using `class` as a property name

  
  @Prop()
  gender: string;

  @Prop()
  marks: number;

}

export const StudentSchema = SchemaFactory.createForClass(Student);
