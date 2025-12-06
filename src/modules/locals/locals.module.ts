import { ILocalRepository } from './domain/abstract/locals.repository.abstract';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LocalsEntity } from './domain/entities/locals.entity';
import { LocalsController } from './locals.controller';
import { LocalRepository } from './infrastructure/repositories/local.repository';
import { CreateLocalUseCase } from './application/use-cases/create-local.usecase';
import { GetLocalUseCase } from './application/use-cases/get-local.usecase';
import { ListLocalsUseCase } from './application/use-cases/list-locals.usecase';
import { UpdateLocalUseCase } from './application/use-cases/update-local.usecase';
import { DeleteLocalUseCase } from './application/use-cases/delete-local.usecase';

@Module({
  imports: [TypeOrmModule.forFeature([LocalsEntity])],
  controllers: [LocalsController],
  providers: [
    { provide: ILocalRepository, useClass: LocalRepository },
    CreateLocalUseCase,
    GetLocalUseCase,
    ListLocalsUseCase,
    UpdateLocalUseCase,
    DeleteLocalUseCase,
  ],
})
export class LocalsModule {}
