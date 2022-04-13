import { Request, Response, NextFunction } from "express";
import { check, validationResult } from "express-validator";
const userSignupValidator = [
  check("password")
    .not()
    .isEmpty()
    .withMessage("Password cannot be empty")
    .isLength({ min: 4 })
    .withMessage("Password must be more than 4 charecters")
    .isLength({ max: 16 })
    .withMessage("Password must be less than 10 charecters"),
  check("firstName")
    .not()
    .isEmpty()
    .withMessage("User name can not be empty!")
    .isAlpha()
    .withMessage("only alphabets allowed")
    .isLength({ max: 25 })
    .withMessage("Maximum 25 characters required!"),
  check("lastName")
    .not()
    .isEmpty()
    .withMessage("User name can not be empty!")
    .isAlpha()
    .withMessage("only alphabets allowed")
    .isLength({ max: 25 })
    .withMessage("Maximum 25 characters required!"),
  check("email")
    .not()
    .isEmpty()
    .withMessage("Invalid email address!")
    .isEmail()
    .withMessage("Please enter a valid email address"),
  (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return res.status(402).json({ errors: errors.array() });
    next();
  },
];

const userLoginValidator = [
  check("email")
    .not()
    .isEmpty()
    .withMessage("Invalid email address!")
    .isEmail()
    .withMessage("Please enter a valid email address"),
  check("password")
    .not()
    .isEmpty()
    .withMessage("Password cannot be empty")
    .isLength({ min: 4 })
    .withMessage("Please enter a valid password!")
    .isLength({ max: 16 })
    .withMessage("Please enter a valid password!"),
  (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return res.status(402).json({ errors: errors.array() });
    next();
  },
];

export { userSignupValidator, userLoginValidator };
