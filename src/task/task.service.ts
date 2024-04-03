import { Injectable } from '@nestjs/common';
import { Model } from "mongoose";
import { InjectModel } from "@nestjs/mongoose";
import { Task } from "./task.entity";
import { CreateTaskDto } from "./dtos/create-task.dto";
import { UpdateTaskDto } from "./dtos/update-task.dto";


@Injectable()
export class TaskService {
    constructor(@InjectModel(Task.name) private taskModel: Model<Task>) {}

    async create(task: CreateTaskDto){
        const newTask = new this.taskModel(task);
        return await newTask.save();
    }

    async update(id: string, task: UpdateTaskDto){
        return this.taskModel
            .findByIdAndUpdate(id, task, {
                new: true,
            })
            .exec();
    }

    async findAll(){
        return this.taskModel.find().exec();
    }

    async findOne(id: string){
        return this.taskModel.findById(id).exec();
    }

    async delete(id: string){
        const deleteItem = this.taskModel.findByIdAndDelete(id).exec();
        if (deleteItem){
            return `Se elimino correctamente. ID eliminado ${id}.`;
        }else{
            return `No se pudo eliminar el ID->${id}, porque no se encontró ningun resultado.`;
        }
    }
}
