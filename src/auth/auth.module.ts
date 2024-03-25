import { LocalStrategy } from './utils/LocalStrategy';
import { Module } from '@nestjs/common';
import { AuthController } from './controllers/auth.controller';
import { AuthService } from './services/auth.service';
import { UsersService } from 'src/users/users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/typeorm/user.entity';
import { PassportModule } from '@nestjs/passport';
import { sessionSerializer } from './utils/SessionSerialzer';
@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    PassportModule.register({
      session: true,
    }),
  ],
  controllers: [AuthController],
  providers: [
    {
      provide: 'AUTH_SERVICE',
      useClass: AuthService,
    },
    {
      provide: 'USER_SERVICE',
      useClass: UsersService,
    },
    LocalStrategy,
    sessionSerializer,
  ],
})
export class AuthModule {}
