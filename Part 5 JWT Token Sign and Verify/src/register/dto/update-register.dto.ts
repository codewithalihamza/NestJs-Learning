import { PartialType } from '@nestjs/mapped-types';
import { CreateRegisterDto } from './create-register.dto';

export class UpdateRegisterDto extends PartialType(CreateRegisterDto) {
    username:string
    email:string
    password:string
}
