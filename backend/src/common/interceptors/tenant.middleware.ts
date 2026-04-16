import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class TenantMiddleware implements NestMiddleware {
  use(req: Request & { tenantId?: string }, res: Response, next: NextFunction) {
    const auth = req.headers.authorization;
    if (auth && auth.startsWith('Bearer ')) {
      try {
        const base64Url = auth.split('.')[1];
        const decoded = Buffer.from(base64Url, 'base64').toString('utf8');
        const payload = JSON.parse(decoded);
        if (payload?.schoolId) {
          req.tenantId = payload.schoolId;
        }
      } catch (err) {
        // ignore
      }
    }
    next();
  }
}
