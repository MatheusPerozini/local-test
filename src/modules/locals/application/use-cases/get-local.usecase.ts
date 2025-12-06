import { LocalsEntity } from '../../domain/entities/locals.entity';
import { LocalRepository } from '../../infrastructure/repositories/local.repository';

export class GetLocalUseCase {
  constructor(private readonly repo: LocalRepository) {}

  async execute(id: number): Promise<LocalsEntity> {
    return this.repo.findById(id);
  }
}
