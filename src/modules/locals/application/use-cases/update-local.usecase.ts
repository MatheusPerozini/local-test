import { UpdateResult } from 'typeorm';
import { UpdateLocalDto } from '../dtos/update-local.dto';
import { Inject, Injectable } from '@nestjs/common';
import { ILocalRepository } from '../../domain/abstract/locals.repository.abstract';

@Injectable()
export class UpdateLocalUseCase {
  constructor(
    @Inject(ILocalRepository)
    private readonly repo: ILocalRepository,
  ) {}

  async execute(id: number, dto: UpdateLocalDto): Promise<UpdateResult> {
    return this.repo.update(id, dto);
  }
}
