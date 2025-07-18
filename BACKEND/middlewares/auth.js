import { User } from "../models/userSchema.js";
import { catchAsyncErrors } from "./catchAsyncErrors.js";
import ErrorHandler from "./errorMiddleware.js";
import jwt from "jsonwebtoken";

// Admin Auth Middleware
export const isAdminAuthenticated = catchAsyncErrors(async (req, res, next) => {
  const token = req.cookies.adminToken;

  if (!token) {
    return next(new ErrorHandler(" Dashboard Admin not authenticated", 400));
  }

  const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
  req.user = await User.findById(decoded.id);

  if (!req.user || req.user.role !== "Admin") {
    return next(
      new ErrorHandler(
        `${req.user?.role || "User"} not authorized for this resource!`,
        403
      )
    );
  }

  next();
});

// Patient Auth Middleware
export const isPatientAuthenticated = catchAsyncErrors(async (req, res, next) => {
  const token = req.cookies.patientToken;

  if (!token) {
    return next(new ErrorHandler("Patient not authenticated", 400));
  }

  const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
  req.user = await User.findById(decoded.id);

  if (!req.user || req.user.role !== "Patient") {
    return next(
      new ErrorHandler(
        `${req.user?.role || "User"} not authorized for this resource!`,
        403
      )
    );
  }

  next();
});
