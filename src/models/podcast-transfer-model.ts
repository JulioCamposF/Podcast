//isto seria o modelo a ser seguido , para que todos os dados seja obrigatorios estes componentes
import { PodcastModel } from "./podcast-model";

export interface PodcastTransferModel {
  statusCode: number;
  body: PodcastModel[];
}

export { PodcastModel };
