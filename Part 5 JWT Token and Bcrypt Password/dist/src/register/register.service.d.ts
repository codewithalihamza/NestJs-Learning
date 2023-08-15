import { Register } from './entities/register.entity';
import { CreateRegisterDto } from './dto/create-register.dto';
import { UpdateRegisterDto } from './dto/update-register.dto';
import { Repository } from 'typeorm';
export declare class RegisterService {
    private readonly RegisterRepository;
    constructor(RegisterRepository: Repository<Register>);
    create(createRegisterDto: CreateRegisterDto): Promise<Register>;
    findAll(): Promise<Register[]>;
    findOne(id: number): string;
    update(id: number, updateRegisterDto: UpdateRegisterDto): string;
    remove(id: number): string;
    findByEmail(email: string): Promise<Register | undefined>;
}
