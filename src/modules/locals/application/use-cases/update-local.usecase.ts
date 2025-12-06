import { UpdateResult } from 'typeorm';
import { UpdateLocalDto } from '../dtos/update-local.dto';
import { ILocalRepository } from '../../domain/interfaces/locals.repository.interface';

export class UpdateLocalUseCase {
  constructor(private readonly repo: ILocalRepository) {}

  async execute(id: number, dto: UpdateLocalDto): Promise<UpdateResult> {
    return this.repo.update(id, dto);
  }
}
