import { NextFunction, Request, Response } from "express";
import { Redis } from "ioredis";

export const redisClient = new Redis({
  port: 6379,
  host: "localhost",
});

export const cacheMiddleware = async (req, res, next) => {
  const cachedUser = await redisClient.get("user");
  console.log(next);
  console.log(cachedUser);
  if (cachedUser) {
    res.send(JSON.parse(cachedUser));
  } else {
    next();
  }
};
