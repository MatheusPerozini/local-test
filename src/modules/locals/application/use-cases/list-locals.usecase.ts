import { Injectable } from '@nestjs/common';
import { LocalsEntity } from '../../domain/entities/locals.entity';
import { ILocalRepository } from '../../domain/interfaces/locals.repository.interface';

@Injectable()
export class ListLocalsUseCase {
  constructor(private readonly repo: ILocalRepository) {}

  execute(): Promise<LocalsEntity[]> {
    return this.repo.findAll();
  }
}
