import express from "express";
import { createEmployee, deleteAEmployee, editAEmployee, getAllEmployees } from "./controllers.js";

const routes = express.Router();

// Route for getting all employees and creating a new employee
routes.route("/employees")
  .get(getAllEmployees)
  .post(createEmployee);

// Route for editing and deleting a specific employee by ID
routes.route("/employees/:id")
  .put(editAEmployee)
  .delete(deleteAEmployee);

export default routes;
