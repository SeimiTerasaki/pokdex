export interface EvolutionData {
  id: number;
  baby_trigger_item?: string;
  chain: EvolutionChain;
}

export interface EvolutionChain {
  is_baby: boolean;
  species: {
    name: string;
    url: string;
  };
  evolution_details?: string;
  evolves_to: EvolutionChain[];
}

export interface EvoChainResult {
  species_name: string;
  id?: string;
}
