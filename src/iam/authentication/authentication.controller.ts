/* eslint-disable prettier/prettier */
import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { AuthenticationService } from './authentication.service';
import { SignUpDto } from './dto/sign-up.dto/sign-up.dto';
import { SignInDto } from './dto/sign-in.dto/sign-in.dto';
// import { Response } from 'express';

@Controller('authentication')
export class AuthenticationController {
    constructor(private readonly authService: AuthenticationService){}

    @Post('sign-up')
    async signUp(@Body() signUpDto: SignUpDto ){
        return this.authService.SignUp(signUpDto)
    }

    @HttpCode(HttpStatus.OK)
    @Post('sign-in')
    async signIn( @Body() signInDto: SignInDto){
        return  await this.authService.signIn(signInDto);
    
    }


// Safe Version
    // @HttpCode(HttpStatus.OK)
    // @Post('sign-in')
    // async signIn(@Res({ passthrough:true }) response: Response,
    // @Body() signInDto: SignInDto){
    //     const accessToken = await this.authService.signIn(signInDto);
    //     response.cookie('accessToken', accessToken, {
    //         secure:true,
    //         httpOnly:true,
    //         sameSite:true,
    //     })
    // }
}
