import { Injectable } from '@nestjs/common';
import { LocalsEntity } from '../../domain/entities/locals.entity';
import { LocalRepository } from '../../infrastructure/repositories/local.repository';

@Injectable()
export class ListLocalsUseCase {
  constructor(private readonly repo: LocalRepository) {}

  execute(): Promise<LocalsEntity[]> {
    return this.repo.findAll();
  }
}
