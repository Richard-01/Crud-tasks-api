import { 
    Controller,
    Post,
    Body,
    ValidationPipe,
    Put,
    Get,
    Delete,
    Param,
} from '@nestjs/common';

import { TaskService } from "./task.service";
import { CreateTaskDto } from "./dtos/create-task.dto";
import { UpdateTaskDto } from "./dtos/update-task.dto";


@Controller('task')
export class TaskController {
    constructor(private taskService: TaskService) {}

    @Post()
    async create(@Body(new ValidationPipe()) createTaskDto: CreateTaskDto) {
        return this.taskService.create(createTaskDto);
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body(new ValidationPipe()) updateTaskDto: UpdateTaskDto) {
        return this.taskService.update(id, updateTaskDto);
    }

    @Get()
    async findAll() {
        return this.taskService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: string) {
        return this.taskService.findOne(id);
    }

    @Delete(':id')
    async delete(@Param('id') id: string) {
        return this.taskService.delete(id);
    }

}
