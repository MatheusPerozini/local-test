import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Patch,
  Delete,
} from '@nestjs/common';
import { CreateLocalUseCase } from './application/use-cases/create-local.usecase';
import { ListLocalsUseCase } from './application/use-cases/list-locals.usecase';
import { GetLocalUseCase } from './application/use-cases/get-local.usecase';
import { UpdateLocalUseCase } from './application/use-cases/update-local.usecase';
import { DeleteLocalUseCase } from './application/use-cases/delete-local.usecase';
import { UpdateLocalDto } from './application/dtos/update-local.dto';
import { CreateLocalDto } from './application/dtos/create-local-dto';

@Controller('locals')
export class LocalsController {
  constructor(
    private createLocal: CreateLocalUseCase,
    private listLocals: ListLocalsUseCase,
    private getLocal: GetLocalUseCase,
    private updateLocal: UpdateLocalUseCase,
    private deleteLocal: DeleteLocalUseCase,
  ) {}

  @Post()
  create(@Body() dto: CreateLocalDto) {
    return this.createLocal.execute(dto);
  }

  @Get()
  findAll() {
    return this.listLocals.execute();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.getLocal.execute(id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() dto: UpdateLocalDto) {
    return this.updateLocal.execute(id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.deleteLocal.execute(id);
  }
}
