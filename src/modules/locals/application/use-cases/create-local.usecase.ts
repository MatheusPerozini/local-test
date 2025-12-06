import { CreateLocalDto } from '../dtos/create-local-dto';
import { LocalsEntity } from '../../domain/entities/locals.entity';
import { Inject, Injectable } from '@nestjs/common';
import { ILocalRepository } from '../../domain/abstract/locals.repository.abstract';

@Injectable()
export class CreateLocalUseCase {
  constructor(
    @Inject(ILocalRepository)
    private readonly repo: ILocalRepository,
  ) {}

  async execute(dto: CreateLocalDto): Promise<LocalsEntity> {
    return this.repo.create({
      name: dto.name,
      description: dto.description,
      latitude: dto.latitude,
      longitude: dto.longitude,
      image: dto.image,
    });
  }
}
