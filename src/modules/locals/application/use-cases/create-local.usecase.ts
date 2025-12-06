import { CreateLocalDto } from '../dtos/create-local-dto';
import { LocalsEntity } from '../../domain/entities/locals.entity';
import { LocalRepository } from '../../infrastructure/repositories/local.repository';

export class CreateLocalUseCase {
  constructor(private readonly repo: LocalRepository) {}

  async execute(dto: CreateLocalDto): Promise<LocalsEntity> {
    const local = new LocalsEntity({
      name: dto.name,
      description: dto.description,
      latitude: dto.latitude,
      longitude: dto.longitude,
      image: dto.image,
    });

    return this.repo.create(local);
  }
}
