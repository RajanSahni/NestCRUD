import { Document } from 'mongoose';

export interface IStudent extends Document {
  readonly name: string;
  readonly rollNumber: number;
  readonly studentClass: number;
  readonly gender: string;
  readonly marks: string;
}
