// 
export const generateToken = (user, message, statusCode, res) => {
  const token = user.generateJsonWebToken();

  // Use different cookie names for Admin and Patient
  const cookieName = user.role === 'Admin' ? 'adminToken' : 'patientToken';

  res
    .status(statusCode)
    .cookie(cookieName, token, {
      expires: new Date(
        Date.now() + process.env.COOKIE_EXPIRE * 24 * 60 * 60 * 1000
      ),
      httpOnly: true,
      secure: true,          // ✅ Required for HTTPS in production
      sameSite: "None",      // ✅ Required for cross-site cookies (Vercel ↔ Render)
    })
    .json({
      success: true,
      message,
      user,
      token,
    });
};
