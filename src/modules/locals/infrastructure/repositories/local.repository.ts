import { InjectRepository } from '@nestjs/typeorm';
import { LocalsEntity } from '../../domain/entities/locals.entity';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { ILocalRepository } from '../../domain/interfaces/locals.repository.interface';
import { UpdateLocalDto } from '../../application/dtos/update-local.dto';
import { CreateLocalDto } from '../../application/dtos/create-local-dto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class LocalRepository implements ILocalRepository {
  constructor(
    @InjectRepository(LocalsEntity)
    private readonly localRepository: Repository<LocalsEntity>,
  ) {}

  create(data: CreateLocalDto): Promise<LocalsEntity> {
    return this.localRepository.save(this.localRepository.create(data));
  }

  findById(id: number): Promise<LocalsEntity | null> {
    return this.localRepository.findOne({ where: { id } });
  }

  findAll(): Promise<LocalsEntity[]> {
    return this.localRepository.find();
  }

  update(id: number, data: UpdateLocalDto): Promise<UpdateResult> {
    return this.localRepository.update(id, data);
  }

  delete(id: number): Promise<DeleteResult> {
    return this.localRepository.delete(id);
  }
}
