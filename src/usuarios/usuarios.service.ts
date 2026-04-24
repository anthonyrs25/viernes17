import { Injectable } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UsuariosService {
constructor(private readonly prismaUsuarios: PrismaService) {}

  create(createUsuarioDto: CreateUsuarioDto) {
    return this.prismaUsuarios.user.create({data: createUsuarioDto});
  }

  findAll() {
    return this.prismaUsuarios.user.findMany();
  }

  findOne(id: number) {
    return this.prismaUsuarios.user.findUnique({where: {id}});
  }

  update(id: number, updateUsuarioDto: UpdateUsuarioDto) {
    return this.prismaUsuarios.user.update({where: {id}, data: updateUsuarioDto});
  }

  remove(id: number) {
    return this.prismaUsuarios.user.delete({where: {id}});
  }
}
