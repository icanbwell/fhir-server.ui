import { Request, Response } from 'express';

/**
 * This route handler implements /logout
 * @param {Request} req - Express request object
 * @param {Response} res - Express response object
 */
export const handleLogout = (req: Request, res: Response): void => {
  res.clearCookie('jwt');
  res.redirect('/');
};
