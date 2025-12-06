import { LocalsEntity } from '../../domain/entities/locals.entity';
import { ILocalRepository } from '../../domain/interfaces/locals.repository.interface';

export class GetLocalUseCase {
  constructor(private readonly repo: ILocalRepository) {}

  async execute(id: number): Promise<LocalsEntity> {
    return this.repo.findById(id);
  }
}
