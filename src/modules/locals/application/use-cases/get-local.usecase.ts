import { Inject, Injectable } from '@nestjs/common';
import { LocalsEntity } from '../../domain/entities/locals.entity';
import { LocalRepositoryBase } from '../../domain/abstract/locals.repository.abstract';

@Injectable()
export class GetLocalUseCase {
  constructor(
    @Inject(LocalRepositoryBase)
    private readonly repo: LocalRepositoryBase,
  ) {}

  async execute(id: number): Promise<LocalsEntity> {
    return this.repo.findById(id);
  }
}
