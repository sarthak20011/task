import jwt from "jsonwebtoken";

const jwtSecretKey = String(process.env.JWTSECRETKEY);

const session = "3days";
const createToken = (id: object) => {
    return jwt.sign({ id }, jwtSecretKey, { expiresIn: session });
};

export default createToken;
