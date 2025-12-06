import { DeleteResult } from 'typeorm';
import { Inject, Injectable } from '@nestjs/common';
import { LocalRepositoryBase } from '../../domain/abstract/locals.repository.abstract';

@Injectable()
export class DeleteLocalUseCase {
  constructor(
    @Inject(LocalRepositoryBase)
    private readonly repo: LocalRepositoryBase,
  ) {}

  async execute(id: number): Promise<DeleteResult> {
    return this.repo.delete(id);
  }
}
