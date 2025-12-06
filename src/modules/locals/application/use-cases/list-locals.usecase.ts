import { LocalsEntity } from '../../domain/entities/locals.entity';
import { LocalRepository } from '../../infrastructure/repositories/local.repository';

export class ListLocalsUseCase {
  constructor(private readonly repo: LocalRepository) {}

  execute(): Promise<LocalsEntity[]> {
    return this.repo.findAll();
  }
}
