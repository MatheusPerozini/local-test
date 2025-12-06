import { DeleteResult, UpdateResult } from 'typeorm';
import { LocalsEntity } from '../entities/locals.entity';

export interface ILocalRepository {
  create(data: LocalsEntity): Promise<LocalsEntity>;
  findById(id: number): Promise<LocalsEntity | null>;
  findAll(): Promise<LocalsEntity[]>;
  update(id: number, data: Partial<LocalsEntity>): Promise<UpdateResult>;
  delete(id: number): Promise<DeleteResult>;
}
