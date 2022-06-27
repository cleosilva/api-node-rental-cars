import { CategoriesRepository } from "../../repositories/implementations/CategoriesRepository";
import { ListCategoriesController } from "./ListCategoriesController";
import { ListCategoriesUserCase } from "./ListCategoriesUserCase";

const categoriesRepository = CategoriesRepository.getInstance();

const listCategoriesUserCase = new ListCategoriesUserCase(categoriesRepository);

const listCategoriesController = new ListCategoriesController(listCategoriesUserCase);

export { listCategoriesController }