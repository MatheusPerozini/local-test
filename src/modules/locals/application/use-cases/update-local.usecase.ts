import { UpdateResult } from 'typeorm';
import { UpdateLocalDto } from '../dtos/update-local.dto';
import { LocalRepository } from '../../infrastructure/repositories/local.repository';

export class UpdateLocalUseCase {
  constructor(private readonly repo: LocalRepository) {}

  async execute(id: number, dto: UpdateLocalDto): Promise<UpdateResult> {
    return this.repo.update(id, dto);
  }
}
