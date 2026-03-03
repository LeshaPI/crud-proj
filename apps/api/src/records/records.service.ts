import { Injectable } from '@nestjs/common';
import { CreateRecordDto } from './dto/create-record.dto';
import { UpdateRecordDto } from './dto/update-record.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class RecordsService {
  constructor(private readonly prisma: PrismaService) {}

  create(createRecordDto: CreateRecordDto) {
    return this.prisma.record.create({
      data: createRecordDto,
    });
  }

  findAll() {
    return this.prisma.record.findMany();
  }

  findOne(id: string) {
    return this.prisma.record.findUnique({
      where: { id },
    });
  }

  update(id: string, updateRecordDto: UpdateRecordDto) {
    return this.prisma.record.update({
      where: { id },
      data: updateRecordDto,
    });
  }

  remove(id: string) {
    return this.prisma.record.delete({
      where: { id },
    });
  }
}
