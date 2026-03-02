export interface UserRecord {
  id: string;
  userId: string;
  title: string;
  content: string;
  createdAt: Date;
}

// Тип для создания записи (без id и даты, так как их генерирует бэкенд)
export type CreateRecordDto = Omit<UserRecord, 'id' | 'createdAt'>;

// Тип для обновления (все поля необязательные)
export type UpdateRecordDto = Partial<CreateRecordDto>;