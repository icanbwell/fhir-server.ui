import { Request, Response } from 'express';
import * as v8 from 'v8';

/**
 * This route handler implements the checking of memory usage and returns non-200 status id usage is high
 * @param {Request} req - The request object
 * @param {Response} res - The response object
 * @param {number} memoryThresholdOffset - The memory threshold offset
 * @returns {Response} - The response object
 */
export function handleMemoryCheck(
  req: Request,
  res: Response,
  memoryThresholdOffset: number | undefined = undefined,
): Response {
  const heapStats = v8.getHeapStatistics();
  const memoryUsedMB = heapStats.used_heap_size / 1024 / 1024;
  const memoryAllocatedMB = heapStats.heap_size_limit / 1024 / 1024;
  const preDefinedMemoryMB = process.env.SERVER_RESTART_MEM_LIMIT ? parseInt(process.env.SERVER_RESTART_MEM_LIMIT) : null;
  const memoryUsedPercentage = Math.ceil(
    (memoryUsedMB / (preDefinedMemoryMB || memoryAllocatedMB)) * 100,
  );
  let memThreshold = process.env.SERVER_RESTART_MEM_THRESHOLD ? parseInt(process.env.SERVER_RESTART_MEM_THRESHOLD) : 95;
  // Reduce threshold so that requests stop coming before the server is restarted in liveness check
  if (memoryThresholdOffset) {
    memThreshold += memoryThresholdOffset;
  }
  if (memoryUsedPercentage > memThreshold) {
    return res.sendStatus(455);
  }
  return res.sendStatus(200);
}
