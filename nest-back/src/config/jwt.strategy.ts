import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import { CookieRequest } from "src/interfaces/CookieRequest";
import { PaylodI } from "src/interfaces/Payload";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy){

    constructor(
        private configService:ConfigService
    ){
        super({
            jwtFromRequest:ExtractJwt.fromExtractors([(req:CookieRequest)=>{
                return req.cookies?.jwt
            }]),
            ignoreExpiration:false,
            secretOrKey:configService.getOrThrow<string>('SECRET')
        })
    }
    async validate(payload:PaylodI) {
        console.log(payload);
        return {id:payload.id,role:payload.role}
    }
    
}