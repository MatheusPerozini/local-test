import { Inject, Injectable } from '@nestjs/common';
import { LocalsEntity } from '../../domain/entities/locals.entity';
import { ILocalRepository } from '../../domain/abstract/locals.repository.abstract';

@Injectable()
export class ListLocalsUseCase {
  constructor(
    @Inject(ILocalRepository)
    private readonly repo: ILocalRepository,
  ) {}

  execute(): Promise<LocalsEntity[]> {
    return this.repo.findAll();
  }
}
