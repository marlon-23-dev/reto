import { HttpService } from '@nestjs/axios';
import { User } from './entities/user.entity';
export declare class UsersService {
    private readonly httpService;
    constructor(httpService: HttpService);
    getUser(username: string): Promise<User>;
}
