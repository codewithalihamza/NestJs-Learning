import { RegisterService } from './register.service';
import { CreateRegisterDto } from './dto/create-register.dto';
import { UpdateRegisterDto } from './dto/update-register.dto';
export declare class RegisterController {
    private readonly registerService;
    constructor(registerService: RegisterService);
    create(createRegisterDto: CreateRegisterDto): Promise<import("./entities/register.entity").Register>;
    findAll(): Promise<import("./entities/register.entity").Register[]>;
    findOne(id: string): string;
    update(id: string, updateRegisterDto: UpdateRegisterDto): string;
    remove(id: string): string;
}
