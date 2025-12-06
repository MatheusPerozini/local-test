import { DeleteResult } from 'typeorm';
import { Inject, Injectable } from '@nestjs/common';
import { ILocalRepository } from '../../domain/abstract/locals.repository.abstract';

@Injectable()
export class DeleteLocalUseCase {
  constructor(
    @Inject(ILocalRepository)
    private readonly repo: ILocalRepository,
  ) {}

  async execute(id: number): Promise<DeleteResult> {
    return this.repo.delete(id);
  }
}
