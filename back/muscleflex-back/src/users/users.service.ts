import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from 'src/entities/users.entity';
import { UsersRepository } from './users.repository';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: UsersRepository,
  ) {}

    getUsersService(page: number, limit: number){
    return this.usersRepository.getUsersRepository(page, limit);
    }

    getUserByEmailService(email: string) {
        return this.usersRepository.getUserByEmailRepository(email);
    }

    getUserByIdService(id: string) {
        return this.usersRepository.getUserByIdRepository(id);
    }

    addUserService(user: Partial<User>) {
        return this.usersRepository.addUserRepository(user);
    }

    updateUserService(id: string, user: Partial<User>) {
        return this.usersRepository.updateUserRepository(id, user); 
    }

    deleteUserService(id: string) {
        return this.usersRepository.deleteUserRepository(id);
    }
}
