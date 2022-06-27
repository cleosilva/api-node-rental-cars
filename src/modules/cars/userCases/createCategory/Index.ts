import { CategoriesRepository } from "../../repositories/implementations/CategoriesRepository";
import { CreateCategoryController } from "./CreateCategoryController";
import { CreateCategoryUserCase } from "./CreateCategoryUserCase";

const categoryRepository = CategoriesRepository.getInstance();

const createCategoryUserCase = new CreateCategoryUserCase(categoryRepository);

const createCategoryController = new CreateCategoryController(createCategoryUserCase);

export { createCategoryController }
