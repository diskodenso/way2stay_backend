// import User Model
import User from "../models/User.js";
// import bcrypt to encrypt password
import bcrypt from "bcrypt";
// import jwt
import jwt from "jsonwebtoken";

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
export const createUser = async (req, res) => {
    try {
        const { isActive, email, username, password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = await User.create({
            isActive,
            contact: {
                email,
            },
            username,
            password: hashedPassword,
        });
        const token = jwt.sign(
            {
                email: newUser.contact.email,
                username: newUser.username,
                userId: newUser._id,
            }, // payload
            process.env.JWT_SECRET // jwt secret
            // { expiresIn: "1h" } // options
        );
        if (token && newUser) {
            res
                .status(201)
                .set("authorization", token)
                .send("User successfully created");
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
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
        firstname,
        lastname,
        birthdate,
        street,
        housenumber,
        favorites,
        postalcode,
        phonenumber,
        email,
        city,
        profilePicUrl,
        isActive,
    } = req.body;
    try {
        const updatedUser = {
            username,
            contact: {
                phonenumber,
                email,
            },
            firstname,
            lastname,
            birthdate,
            favorites,
            address: {
                street,
                housenumber,
                postalcode,
                city,
            },
            profilePicUrl,
            isActive,
        };
        const resUpdatedUser = await User.findByIdAndUpdate(userId, updatedUser, {
            new: true,
        });
        res.status(200).json(resUpdatedUser);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const favorites = async (req, res) => {
    const { userId, method, favorites } = req.body;
    let updatedUser = null;
    console.log(req.body);

    try {
        const user = User.findById(userId);
        console.log(user.favorites);
        if (method === "add") {
            user.favorites.push(flatId);
        } else if (method === "remove") {
            const userIndex = user.favorites.findIndex((favorite) => {
                return favorite === flatId;
            });
            updatedUser = user.favorite.splice(userIndex, 1);
        }
        const resUpdatedUser = User.findByIdAndUpdate(userId, updatedUser, {
            new: true,
        });
        res.status(200).json(resUpdatedUser);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// --- LOGIN CONTROLLER --- //
export const logIn = async (req, res) => {
    try {
        const { email, password } = req.body;
        // find user and check if registered - use findOne (mongo method) method and search by email and select the password to check
        const findUser = await User.findOne({ 'contact.email': email }).select(
            "+password"
        );
        console.log(email);
        // check if password is correct with bcrypt compare method
        const isPasswordCorrect = await bcrypt.compare(password, findUser.password);
        if (isPasswordCorrect) {
            const token = jwt.sign(
                {
                    email: findUser.contact.email,
                    userId: findUser._id,
                    username: findUser.username,
                },
                process.env.JWT_SECRET
                // { expiresIn: "1h" }
            );
            res
                .status(200)
                .set("authorization", token)
                .json({ userId: findUser._id, message: "User successfully logged in" });
        } else {
            res.status(401).send("Please create an account to log in");
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


// --- VERIFY SESSION CONTROLLER --- //
export const verifySession = async (req, res) => {
    res.status(200).json({
        userId: req.decodedToken.userId,
        message: "Token successfully verified",
    });
};
