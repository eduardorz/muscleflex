import { Controller, Get, Post, Body, Patch, Param, Delete, Query, ParseUUIDPipe, BadRequestException } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  getUsers(@Query('page') page?: string, @Query('limit') limit?: string){
    if (!page || !limit) return this.usersService.getUsersService(1, 5);
    return this.usersService.getUsersService(Number(page), Number(limit));
  }

  @Get(':id')
  getUserById(@Param('id', ParseUUIDPipe) id: string){
    return this.usersService.getUserByIdService(id)
  }

  /*
   @Post()
  createUserController(@Body() createUserDto: CreateUserDto) {
    return this.usersService.createUserService(createUserDto);
  }
  */
 

  @Patch(':id')
  updateUser(@Param('id', ParseUUIDPipe) id: string, @Body() user: UpdateUserDto){
    if (Object.keys(user).length === 0) throw new BadRequestException('Tiene que haber almenos 1 dato para modificar');
    return this.usersService.updateUserService(id, user);
  }

  @Delete(':id')
  deleteUserController(@Param('id') id: string) {
    return this.usersService.deleteUserService(id);
  }
}
