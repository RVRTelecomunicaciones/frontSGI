import { Inject, Injectable } from '@angular/core';
import { StorageRepository } from '../domain/storage.repository';
import { StorageInfraestructure } from '../infraestructure/storage.infraestructure';

@Injectable()
export class StorageApplication {
  constructor(
    @Inject(StorageInfraestructure) private readonly storage: StorageRepository
  ) {}

  setField(property: string, value: string): void {
    this.storage.setStorage(property, value);
  }

  getField(property: string): string | null {
    return this.storage.getStorage(property);
  }

  getFieldInToken(field: string): string | string[] | null {
    return this.storage.getFieldInToken(field);
  }

  clear(): void {
    this.storage.clear();
  }
}
