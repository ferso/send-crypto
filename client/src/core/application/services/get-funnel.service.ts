import { inject, injectable } from "inversify";
import { FunnelRepository } from "@core/data/repositories/funnel.repository";

@injectable()
export class GetFunnelService {
  constructor(
    @inject("FunnelRepository")
    private readonly funnelRepository: FunnelRepository
  ) {}

  async getFunnel(input: any) {
    return await this.funnelRepository.getNextFunnelStep(input);
  }
}
