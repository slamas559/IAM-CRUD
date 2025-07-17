import { Request, Response, NextFunction } from 'express';

export const authorizeRoles = (...allowedRoles: string[]) => {
  return (req: any, res: Response, next: NextFunction) => {
    if (!req.user || !req.user.roles) {
      return res.status(401).json({ message: 'Unauthorized' });
    }

    const userRoles = req.user.roles;

    const hasRole = userRoles.some((role: string) => allowedRoles.includes(role));

    if (!hasRole) {
      return res.status(403).json({ message: 'Forbidden: insufficient permissions' });
    }

    next();
  };
};
