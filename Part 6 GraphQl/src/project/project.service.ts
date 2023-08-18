import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { CreateProjectInput } from './dto/create-project.input';
import { UpdateProjectInput } from './dto/update-project.input';
import { Project } from './entities/project.entity';

@Injectable()
export class ProjectService {
  constructor(@InjectRepository(Project)  private readonly projectRepository:Repository<Project>){}

   create(createProjectInput: CreateProjectInput):Promise<Project>{
    const project= this.projectRepository.create(createProjectInput)
    return this.projectRepository.save(project)
  }

  findAll():Promise<Project[]> {
    return this.projectRepository.find({
      relations:["employees"]
    })
  }

  findOne(id: string):Promise<Project> {
    return this.projectRepository.findOne({where:{id},relations:["employees"]})
  }

  update(id: string, updateProjectInput: UpdateProjectInput) {
    return `This action updates a #${id} project`;
  }

  remove(id: number) {
    return `This action removes a #${id} project`;
  }
}
