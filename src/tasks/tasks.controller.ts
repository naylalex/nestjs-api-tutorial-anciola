import { Controller, Get, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('tasks')
@Controller('tasks')
@Get
getTasks() {
    return null
}
@Get(':id')
getTaskById(){
    return null
}
@Post()
CreateTask(){
    return null
}

export class TasksController {}
