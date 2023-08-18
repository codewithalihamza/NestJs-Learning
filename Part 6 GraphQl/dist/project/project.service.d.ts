import { Repository } from 'typeorm';
import { CreateProjectInput } from './dto/create-project.input';
import { UpdateProjectInput } from './dto/update-project.input';
import { Project } from './entities/project.entity';
export declare class ProjectService {
    private readonly projectRepository;
    constructor(projectRepository: Repository<Project>);
    create(createProjectInput: CreateProjectInput): Promise<Project>;
    findAll(): Promise<Project[]>;
    findOne(id: string): Promise<Project>;
    update(id: string, updateProjectInput: UpdateProjectInput): string;
    remove(id: number): string;
}
