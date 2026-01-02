export const JOIN_DIRECTIONS = ["horizontal", "vertical"] as const;
export type JoinDirection = (typeof JOIN_DIRECTIONS)[number];

export interface JoinProps {
  as?: string;
  direction?: JoinDirection;
}
