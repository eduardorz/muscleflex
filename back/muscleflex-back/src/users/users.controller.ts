import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  getUsersController() {
    return this.usersService.getUsersService();
  }

  @Get(':id')
  getUserController(@Param('id') id: string) {
    return this.usersService.getUserService(id);
  }

  @Post()
  createUserController(@Body() createUserDto: CreateUserDto) {
    return this.usersService.createUserService(createUserDto);
  }

  @Patch(':id')
  updateUserController(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.updateUserService(id, updateUserDto);
  }

  @Delete(':id')
  deleteUserController(@Param('id') id: string) {
    return this.usersService.deleteUserService(id);
  }
}
