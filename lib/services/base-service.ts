import { PerformanceMetrics } from "./types";

export abstract class BaseService {
  constructor(protected readonly provider: string) {}

  protected async withRateLimit<T>(fn: () => Promise<T>): Promise<T> {
    try {
      return await fn();
    } catch (error) {
      throw new Error(`${this.provider} rate limit or API error: ${(error as Error).message}`);
    }
  }

  protected mockMetrics(): PerformanceMetrics {
    return {
      spend: Number((Math.random() * 300).toFixed(2)),
      impressions: Math.floor(Math.random() * 10000),
      ctr: Number((Math.random() * 4).toFixed(2)),
      cpc: Number((Math.random() * 3).toFixed(2)),
      leads: Math.floor(Math.random() * 30),
      roas: Number((Math.random() * 5).toFixed(2))
    };
  }
}
