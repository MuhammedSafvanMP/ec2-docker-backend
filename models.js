import mongoose from "mongoose";

const employeesSchema =  new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    position: {
        type: String,
        require: true
    },
    role: {
        type: String,
        enum: ["intern", "junior", "senior"],
        require: true
    }
}, {timestamps: true});



const Employees = new mongoose.model("employee", employeesSchema);
export default Employees;