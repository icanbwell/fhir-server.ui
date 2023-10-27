import { Request, Response } from 'express';
import { getImageVersion } from '../utils/getImageVersion';

/**
 * This route handler implements the /version endpoint which returns the current version of the code
 * @param {Request} req - The request object
 * @param {Response} res - The response object
 * @returns {Response} The response object
 */
export function handleVersion(req: Request, res: Response): Response {
  const image: string = process.env.DOCKER_IMAGE || '';
  if (image) {
    return res.json({ version: getImageVersion(), image: image });
  } else {
    return res.json({ version: 'unknown', image: 'unknown' });
  }
}
