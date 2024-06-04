import { Controller, Get, Post, Body, Patch, Param, Delete, ConflictException, NotFoundException, UseGuards } from '@nestjs/common';
import { AlumnosService } from './alumnos.service';
import { CreateAlumnoDto } from './dto/create-alumno.dto';
import { UpdateAlumnoDto } from './dto/update-alumno.dto';
import { AuthController } from 'src/auth/auth.controller';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller('alumnos')
export class AlumnosController {
  constructor(private readonly alumnosService: AlumnosService) { }

  @Post()
  async create(@Body() createAlumnoDto: CreateAlumnoDto) {
    try {
      return await this.alumnosService.create(createAlumnoDto);
    } catch (error) {
      if (error.code === 11000) throw new ConflictException("La matricula ya esta en uso");
      throw error;
    }
  }

  @Get()
  findAll() {
    return this.alumnosService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const res = await this.alumnosService.findOne(id);
    if (!res) throw new NotFoundException("El alumno no se encuentra registrado.")
    return res;
  }

  @Patch(':id')
  @UseGuards(AuthGuard) 
  async update(@Param('id') id: string, @Body() updateAlumnoDto: UpdateAlumnoDto) {
    try {
      const res = await this.alumnosService.update(id, updateAlumnoDto)
      if (!res) throw new NotFoundException("El alumno no se encuentra registrado");
      return res;
    } catch (error) {
      if (error.code === 11000) throw new ConflictException("La matricula ya esta en uso");
      throw error;
    }

  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    const res = await this.alumnosService.remove(id);
    if (!res) throw new NotFoundException("El alumno no se encuentra registrado");
    return res;
  }
}
