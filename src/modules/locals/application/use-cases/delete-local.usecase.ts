import { DeleteResult } from 'typeorm';
import { ILocalRepository } from '../../domain/interfaces/locals.repository.interface';

export class DeleteLocalUseCase {
  constructor(private readonly repo: ILocalRepository) {}

  async execute(id: number): Promise<DeleteResult> {
    return this.repo.delete(id);
  }
}
