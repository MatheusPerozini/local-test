import { UpdateResult } from 'typeorm';
import { UpdateLocalDto } from '../dtos/update-local.dto';
import { Inject, Injectable } from '@nestjs/common';
import { LocalRepositoryBase } from '../../domain/abstract/locals.repository.abstract';

@Injectable()
export class UpdateLocalUseCase {
  constructor(
    @Inject(LocalRepositoryBase)
    private readonly repo: LocalRepositoryBase,
  ) {}

  async execute(id: number, dto: UpdateLocalDto): Promise<UpdateResult> {
    return this.repo.update(id, dto);
  }
}
