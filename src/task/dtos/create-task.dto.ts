import { IsNotEmpty, IsString, IsEnum, IsOptional } from 'class-validator';
import {taskStatus} from '../task.entity'; 


export class CreateTaskDto {
    @IsNotEmpty()
    @IsString()
    title: string;

    @IsString()
    @IsOptional()
    description?: string;

    @IsEnum(taskStatus)
    @IsOptional()
    status?: taskStatus;
}