import { Body, Controller, Post, Get } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Clientes } from 'src/clientes.entity';
import { DatosContacto } from 'src/datos-contacto.entity';
import { Claves } from 'src/claves.entity';
import { Logs } from 'src/logs.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Controller('usuarios')
export class ClientesController {
  constructor(
    @InjectRepository(Clientes)
    private clientesRepository: Repository<Clientes>,
    @InjectRepository(DatosContacto)
    private datosContactoRepository: Repository<DatosContacto>,
    @InjectRepository(Claves)
    private clavesRepository: Repository<Claves>,
    @InjectRepository(Logs)
    private readonly logsRepository: Repository<Logs>,
  ) {}

  @Get()
  async obtenerClientes() {
    const usuarios = await this.clientesRepository.find({
      relations: ['datosContacto', 'claves'],
    });
    return usuarios;
  }

  @Post()
  async crearUsuario(
    @Body('cliente') clienteData: Clientes,
    @Body('datosContacto') datosContactoData: DatosContacto,
    @Body('claves') clavesData: Claves,
  ) {
    const datosContacto = this.datosContactoRepository.create(datosContactoData);
    const claves = this.clavesRepository.create(clavesData);

    const cliente = new Clientes();
    cliente.nombre = clienteData.nombre;
    cliente.datosContacto = datosContacto;
    cliente.claves = claves;

    await this.datosContactoRepository.save(datosContacto);
    await this.clavesRepository.save(claves);
    const createdCliente = await this.clientesRepository.save(cliente);

    // Crear nuevo log
    const logEntry = new Logs();
    logEntry.fecha = new Date();
    logEntry.mensaje = `Nuevo usuario: ${cliente.nombre}`;
    await this.logsRepository.save(logEntry);

    return {
      cliente: createdCliente,
    };
  }
}
