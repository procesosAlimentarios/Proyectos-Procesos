import { Controller, Get, Post, Body, Patch, Param, Delete, ConflictException, NotFoundException, HttpCode } from '@nestjs/common';
import { AsignaturasService } from './asignaturas.service';
import { CreateAsignaturaDto } from './dto/create-asignatura.dto';
import { UpdateAsignaturaDto } from './dto/update-asignatura.dto';

@Controller('asignaturas')
export class AsignaturasController {
  constructor(private readonly asignaturasService: AsignaturasService) { }

  @Post()
  async create(@Body() createAsignaturaDto: CreateAsignaturaDto) {
    try {
      return await this.asignaturasService.create(createAsignaturaDto);
    } catch (error) {
      if (error.code === 11000) throw new ConflictException("La meteria ya existe.");
      throw error
    }

  }

  @Get()
  findAll() {
    return this.asignaturasService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const materia = await this.asignaturasService.findOne(id);
    if (!materia) throw new NotFoundException("La materia no fue encontrada");
    return materia;
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateAsignaturaDto: UpdateAsignaturaDto) {
    try {
      const materia = await this.asignaturasService.update(id, updateAsignaturaDto);
      if (!materia) throw new NotFoundException("La materia no se encuentra registrada");
      return materia;
    } catch (error) {
      if (error.code === 11000) throw new ConflictException("La meteria ya existe.");
      throw error;
    }

  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    const materia = await this.asignaturasService.remove(id);
    if (!materia) throw new NotFoundException("La materia no se encuentra registrada");
    return materia;
  }
}
