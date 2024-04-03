import { IsNotEmpty, IsString, IsEnum, IsOptional } from 'class-validator';
import {taskStatus} from '../task.entity'; 


export class UpdateTaskDto {
  @IsNotEmpty()
  @IsString()
  @IsOptional()
  title?: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsEnum(taskStatus)
  @IsOptional()
  status?: taskStatus;
}