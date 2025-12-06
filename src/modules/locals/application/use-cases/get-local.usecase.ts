import { Inject, Injectable } from '@nestjs/common';
import { LocalsEntity } from '../../domain/entities/locals.entity';
import { LocalRepository } from '../../infrastructure/repositories/local.repository';
import { ILocalRepository } from '../../domain/interfaces/locals.repository.interface';

@Injectable()
export class GetLocalUseCase {
  constructor(
    @Inject(LocalRepository)
    private readonly repo: ILocalRepository,
  ) {}

  async execute(id: number): Promise<LocalsEntity> {
    return this.repo.findById(id);
  }
}
