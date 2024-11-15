"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const axios_1 = require("@nestjs/axios");
const common_1 = require("@nestjs/common");
const rxjs_1 = require("rxjs");
let UsersService = class UsersService {
    constructor(httpService) {
        this.httpService = httpService;
    }
    async getUser(username) {
        try {
            const response = await (0, rxjs_1.firstValueFrom)(this.httpService.get(`https://api.github.com/users/${username}`));
            const user = {
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
        }
        catch (error) {
            console.log(error);
            throw new Error('Error al obtener el usuario');
        }
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [axios_1.HttpService])
], UsersService);
//# sourceMappingURL=users.service.js.map