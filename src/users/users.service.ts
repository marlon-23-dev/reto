import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { User } from './entities/user.entity';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class UsersService {
  constructor(private readonly httpService: HttpService) {}

  async getUser(username: string): Promise<User> {
    try {
      const response = await firstValueFrom(
        this.httpService.get(`https://api.github.com/users/${username}`),
      );

      const user: User = {
        login: response.data.login,
        id: response.data.id,
        name: response.data.name ?? null,
        bio: response.data.bio ?? null,
        location: response.data.location ?? null,
        email: response.data.email ?? null,
        public_repos: response.data.public_repos,
        followers: response.data.followers,
        following: response.data.following,
      };

      return user;
    } catch (error) {
      console.log(error);
      throw new Error('Error al obtener el usuario');
    }
  }
}
