import { DeleteResult } from 'typeorm';
import { LocalRepository } from '../../infrastructure/repositories/local.repository';
import { Inject, Injectable } from '@nestjs/common';
import { ILocalRepository } from '../../domain/interfaces/locals.repository.interface';

@Injectable()
export class DeleteLocalUseCase {
  constructor(
    @Inject(LocalRepository)
    private readonly repo: ILocalRepository,
  ) {}

  async execute(id: number): Promise<DeleteResult> {
    return this.repo.delete(id);
  }
}
