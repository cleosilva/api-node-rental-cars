import { Router } from 'express';

import { createCategoryController } from '../modules/cars/userCases/createCategory/Index';
import { listCategoriesController } from '../modules/cars/userCases/listCategories/Index';

const categoriesRoutes = Router();

categoriesRoutes.post("/", (request, response) => {
    return createCategoryController.handle(request, response);
});

categoriesRoutes.get("/", (request, response) => {
    return listCategoriesController.handle(request, response);
})

export { categoriesRoutes }