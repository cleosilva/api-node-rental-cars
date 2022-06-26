import { Specification } from "../model/Specification";

interface ICreateSpeficationsDTO {
    name: string;
    description: string;
}

interface ISpecificationsRepository {
    create({ name, description} : ICreateSpeficationsDTO): void;
    findByName(name:string): Specification;
}

export { ISpecificationsRepository, ICreateSpeficationsDTO }

