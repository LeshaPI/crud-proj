export interface UserRecord {
  id: string;
  userId: string;
  title: string;
  content: string;
  createdAt: Date;
}

export interface CreateUserDto {
  email: string;
  password: string;
}

export interface UserProfile {
  id: string;
  email: string;
}

export type CreateRecordDto = Omit<UserRecord, 'id' | 'createdAt'>;

export type UpdateRecordDto = Partial<CreateRecordDto>;
