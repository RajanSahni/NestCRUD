import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IStudent } from 'src/interface/student.interface';
import { CreateStudentDto } from 'src/dto/create-student.dto';
import { UpdateStudentDto } from 'src/dto/update-student.dto';

@Injectable()
export class StudentService {
  constructor(
    @InjectModel('Student') private readonly studentModel: Model<IStudent>,
  ) {}

  // Create
  async create(createStudentDto: CreateStudentDto): Promise<IStudent> {
    const newStudent = new this.studentModel(createStudentDto);
    return await newStudent.save();
  }

  // Read all
  async findAll(): Promise<IStudent[]> {
    return await this.studentModel.find().exec();
  }

  // Read by ID
  async findOne(id: string): Promise<IStudent> {
    const student = await this.studentModel.findById(id).exec();
    if (!student) {
      throw new NotFoundException(`Student with ID ${id} not found`);
    }
    return student;
  }

  // Update
  async update(
    id: string,
    updateStudentDto: UpdateStudentDto,
  ): Promise<IStudent> {
    const updatedStudent = await this.studentModel.findByIdAndUpdate(
      id,
      updateStudentDto,
      { new: true },
    );
    if (!updatedStudent) {
      throw new NotFoundException(`Student with ID ${id} not found`);
    }
    return updatedStudent;
  }

  // Delete
  async remove(id: string): Promise<IStudent> {
    const deletedStudent = await this.studentModel.findByIdAndDelete(id);
    if (!deletedStudent) {
      throw new NotFoundException(`Student with ID ${id} not found`);
    }
    return deletedStudent;
  }
}
