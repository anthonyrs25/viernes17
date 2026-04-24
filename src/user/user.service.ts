import { Injectable, Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UserService {
    constructor(private prisma: PrismaService) {}
    findAll() {
    return this.prisma.user.findMany();
    }
}

@Module({
    providers: [UserService],
    exports: [UserService],
})
export class UserModule {}