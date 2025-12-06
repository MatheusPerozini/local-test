import { Inject, Injectable } from '@nestjs/common';
import { LocalsEntity } from '../../domain/entities/locals.entity';
import { ILocalRepository } from '../../domain/abstract/locals.repository.abstract';

@Injectable()
export class GetLocalUseCase {
  constructor(
    @Inject(ILocalRepository)
    private readonly repo: ILocalRepository,
  ) {}

  async execute(id: number): Promise<LocalsEntity> {
    return this.repo.findById(id);
  }
}
