import { Specification } from "../../model/Specification";
import { ICreateSpeficationsDTO, ISpecificationsRepository } from "../ISpecificationsRepository";

class SpecificationsRepository implements ISpecificationsRepository {

    private spefications: Specification[];
    
    constructor() {
        this.spefications = [];
    }

    create({ name, description }: ICreateSpeficationsDTO): void {
       const specification = new Specification();

       Object.assign({
        name,
        description,
        create_at: new Date(),
       });

       this.spefications.push(specification);
    }

    findByName(name: string): Specification {
        const specification = this.spefications.find((specification) => specification.name === name);
        return specification;
    }
}

export { SpecificationsRepository }