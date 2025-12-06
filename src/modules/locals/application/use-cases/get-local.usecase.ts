import { Inject, Injectable } from '@nestjs/common';
import { LocalsEntity } from '../../domain/entities/locals.entity';
import { LocalRepository } from '../../infrastructure/repositories/local.repository';

@Injectable()
export class GetLocalUseCase {
  constructor(
    @Inject(LocalRepository)
    private readonly repo: LocalRepository,
  ) {}

  async execute(id: number): Promise<LocalsEntity> {
    return this.repo.findById(id);
  }
}
