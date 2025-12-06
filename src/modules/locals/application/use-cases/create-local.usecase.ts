import { CreateLocalDto } from '../dtos/create-local-dto';
import { LocalsEntity } from '../../domain/entities/locals.entity';
import { LocalRepository } from '../../infrastructure/repositories/local.repository';
import { Inject, Injectable } from '@nestjs/common';
import { ILocalRepository } from '../../domain/interfaces/locals.repository.interface';

@Injectable()
export class CreateLocalUseCase {
  constructor(
    @Inject(LocalRepository)
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
