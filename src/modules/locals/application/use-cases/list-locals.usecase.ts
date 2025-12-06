import { Inject, Injectable } from '@nestjs/common';
import { LocalsEntity } from '../../domain/entities/locals.entity';
import { LocalRepositoryBase } from '../../domain/abstract/locals.repository.abstract';

@Injectable()
export class ListLocalsUseCase {
  constructor(
    @Inject(LocalRepositoryBase)
    private readonly repo: LocalRepositoryBase,
  ) {}

  execute(): Promise<LocalsEntity[]> {
    return this.repo.findAll();
  }
}
