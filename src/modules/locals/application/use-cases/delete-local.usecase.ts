import { DeleteResult } from 'typeorm';
import { LocalRepository } from '../../infrastructure/repositories/local.repository';
import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class DeleteLocalUseCase {
  constructor(
    @Inject(LocalRepository)
    private readonly repo: LocalRepository,
  ) {}

  async execute(id: number): Promise<DeleteResult> {
    return this.repo.delete(id);
  }
}
