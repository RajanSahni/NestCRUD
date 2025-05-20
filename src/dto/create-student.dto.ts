import { IsString, IsNotEmpty, IsNumber } from 'class-validator';

export class CreateStudentDto {
  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @IsNumber()
  readonly rollNumber: number;

  @IsNumber()
  readonly studentClass: number;

  @IsString()
  @IsNotEmpty()
  readonly gender: string;

  @IsNumber()
 readonly marks: number;
}
