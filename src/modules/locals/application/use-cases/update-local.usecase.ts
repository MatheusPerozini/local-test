import { UpdateResult } from 'typeorm';
import { UpdateLocalDto } from '../dtos/update-local.dto';
import { LocalRepository } from '../../infrastructure/repositories/local.repository';
import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class UpdateLocalUseCase {
  constructor(
    @Inject(LocalRepository)
    private readonly repo: LocalRepository,
  ) {}

  async execute(id: number, dto: UpdateLocalDto): Promise<UpdateResult> {
    return this.repo.update(id, dto);
  }
}
