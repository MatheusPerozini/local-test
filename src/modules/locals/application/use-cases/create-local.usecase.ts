import { CreateLocalDto } from '../dtos/create-local-dto';
import { LocalsEntity } from '../../domain/entities/locals.entity';
import { Inject, Injectable } from '@nestjs/common';
import { LocalRepositoryBase } from '../../domain/abstract/locals.repository.abstract';

@Injectable()
export class CreateLocalUseCase {
  constructor(
    @Inject(LocalRepositoryBase)
    private readonly repo: LocalRepositoryBase,
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
