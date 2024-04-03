import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';


export enum taskStatus {
    PENDING = 'PENDING',
    IN_PROGRESS = 'IN_PROGRESS',
    COMPLETED = 'COMPLETED',
  }


@Schema()
export class Task {
    @Prop({ required: true })
    title: string;

    @Prop()
    description: string;

    @Prop({ default: taskStatus.PENDING })
    status: string;
}

export const TaskSchema = SchemaFactory.createForClass(Task);