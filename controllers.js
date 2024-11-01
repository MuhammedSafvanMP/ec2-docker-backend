import employeesModal from "./models.js";

// Create Employee
export const createEmployee = async (req, res) => {
    const data = req.body;
    
    try {
        const newEmployee = await employeesModal.create(data);
        res.status(201).json({ message: "Employee created successfully", data: newEmployee });
    } catch (error) {
        res.status(500).json({ message: "Error creating employee", error: error.message });
    }
};

// Edit Employee
export const editAEmployee = async (req, res) => {
    const { id } = req.params;
    const data = req.body;

    try {
        const editEmployee = await employeesModal.findOneAndUpdate({ _id: id }, data, { new: true });
        if (!editEmployee) {
            return res.status(404).json({ message: "Employee not found" });
        }
        res.status(200).json({ message: "Employee updated successfully", data: editEmployee });
    } catch (error) {
        res.status(500).json({ message: "Error updating employee", error: error.message });
    }
};

// Delete Employee
export const deleteAEmployee = async (req, res) => {
    const { id } = req.params;

    try {
        const deleteEmployee = await employeesModal.findOneAndDelete({ _id: id });
        if (!deleteEmployee) {
            return res.status(404).json({ message: "Employee not found" });
        }
        res.status(200).json({ message: "Employee deleted successfully", data: deleteEmployee });
    } catch (error) {
        res.status(500).json({ message: "Error deleting employee", error: error.message });
    }
};

// Get All Employees
export const getAllEmployees = async (req, res) => {
    try {
        const employees = await employeesModal.find();
        res.status(200).json({ message: "Employees retrieved successfully", data: employees });
    } catch (error) {
        res.status(500).json({ message: "Error retrieving employees", error: error.message });
    }
};
