import { BaseService } from "./base-service";
import { IntegrationService, PerformanceMetrics } from "./types";

class MetaAdsService extends BaseService implements IntegrationService {
  constructor() {
    super("Meta Ads");
  }

  async sync(): Promise<PerformanceMetrics[]> {
    return this.withRateLimit(async () => [this.mockMetrics()]);
  }
}

class GoogleAdsService extends BaseService implements IntegrationService {
  constructor() {
    super("Google Ads");
  }

  async sync(): Promise<PerformanceMetrics[]> {
    return this.withRateLimit(async () => [this.mockMetrics()]);
  }
}

class LinkedInAdsService extends BaseService implements IntegrationService {
  constructor() {
    super("LinkedIn Ads");
  }

  async sync(): Promise<PerformanceMetrics[]> {
    return this.withRateLimit(async () => [this.mockMetrics()]);
  }
}

export const adServices = {
  meta: new MetaAdsService(),
  google: new GoogleAdsService(),
  linkedin: new LinkedInAdsService()
};
