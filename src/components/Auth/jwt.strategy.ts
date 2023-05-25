import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";

import { ExtractJwt, Strategy } from "passport-jwt";

Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor() {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(), //extraer el token de la cabecera
            //ignoreExpiration: false, //no ignorar la expiracion del token
            secretOrKey: process.env.JWT_SECRET, //secret key
        });
    }

    async validate(payload: any) {
        return { username: payload.username };
    }
}