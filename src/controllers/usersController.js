// import User Model
import User from "../models/User.js";
// each controller needs to be exported seperately

// --- ALL USERS CONTROLLER --- //
export const getAllUsers = async (req, res) => {
    try {
        const allUsers = await User.find();
        res.status(200).json({ users: allUsers });
    } catch (error) {
        res.status(500).json(error);
    }
};

// --- SINGLE USER CONTROLLER --- //
export const getSingleUser = async (req, res) => {
    try {
        const { userId } = req.params;
        const singleUser = await User.findById(userId);
        res.status(200).json(singleUser);
    } catch (error) {
        res.status(500).json(error);
    }
};

// --- CREATE NEW USER CONTROLLER --- //
export const createNewUser = async (req, res) => {
    try {
        const { isActive, email, username, password } = req.body;
        const newUser = await User.create(
            {
                isActive,
                contact: {
                    email
                },
                username,
                password
            }
        );
        res.status(201).json(newUser);
    } catch (error) {
        res.status(500).json(error);
    }
};

// --- DELETE EXISTING USER CONTROLLER --- //
export const deleteUser = async (req, res) => {
    try {
        const { userId } = req.params;
        await User.findByIdAndDelete(userId);
        res.status(200).send("User successfully deleted");
    } catch (error) {
        res.status(500).json(error);
    }
};

// --- UPDATE EXISTING USER CONTROLLER --- //
export const updateUser = async (req, res) => {
    const { userId } = req.params;
    const {
        username,
        password,
        firstname,
        lastname,
        birthdate,
        street,
        housenumber,
        postalcode,
        phonenumber,
        email,
        isActive
    } = req.body;
    try {
        const updatedUser = {
            username,
            password,
            contact: {
                phonenumber,
                email
            },
            firstname,
            lastname,
            birthdate,
            address: {
                street,
                housenumber,
                postalcode
            },
            isActive
        };
        const resUpdatedUser = await User.findByIdAndUpdate(userId, updatedUser, { new: true });
        res.status(200).json(resUpdatedUser);
    } catch (error) {
        res.status(500).json(error.message);
    }
};
