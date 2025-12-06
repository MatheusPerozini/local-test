import { DeleteResult, UpdateResult } from 'typeorm';
import { LocalsEntity } from '../entities/locals.entity';
import { CreateLocalDto } from '../../application/dtos/create-local-dto';

export abstract class ILocalRepository {
  abstract create(data: CreateLocalDto): Promise<LocalsEntity>;
  abstract findById(id: number): Promise<LocalsEntity | null>;
  abstract findAll(): Promise<LocalsEntity[]>;
  abstract update(
    id: number,
    data: Partial<LocalsEntity>,
  ): Promise<UpdateResult>;
  abstract delete(id: number): Promise<DeleteResult>;
}
