import { DeleteResult } from 'typeorm';
import { LocalRepository } from '../../infrastructure/repositories/local.repository';

export class DeleteLocalUseCase {
  constructor(private readonly repo: LocalRepository) {}

  async execute(id: number): Promise<DeleteResult> {
    return this.repo.delete(id);
  }
}
