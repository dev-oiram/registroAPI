import { Controller, Get } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Logs } from './logs.entity';

@Controller('logs')
export class LogsController {
  constructor(
    @InjectRepository(Logs)
    private readonly logsRepository: Repository<Logs>,
  ) {}

  @Get()
  async obtenerLogs() {
    const logs = await this.logsRepository.find();
    return logs;
  }
}
