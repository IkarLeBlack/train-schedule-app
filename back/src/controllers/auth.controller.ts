import { Body, Controller, Post, Logger } from '@nestjs/common';
import { AuthService } from '../services/auth.service';
import { CreateUserDto } from '../dto/create-user.dto';
import { LoginDto } from '../dto/login.dto';

@Controller('auth')
export class AuthController {
    private readonly logger = new Logger(AuthController.name);

    constructor(private readonly authService: AuthService) {}

    @Post('register')
    async register(@Body() createUserDto: CreateUserDto) {
        this.logger.log(`REGISTER BODY: ${JSON.stringify(createUserDto)}`);
        return this.authService.register(createUserDto);
    }

    @Post('login')
    async login(@Body() loginDto: LoginDto) {
        this.logger.log(`LOGIN BODY: ${JSON.stringify(loginDto)}`);
        return this.authService.login(loginDto);
    }
}
