export interface NetworkConnection {
  saveData?: boolean;
  effectiveType?: "2g" | "3g" | "4g" | "slow-2g";
  downlink?: number;
  addEventListener?: (event: string, handler: () => void) => void;
  removeEventListener?: (event: string, handler: () => void) => void;
}

export interface ExtendedNavigator extends Navigator {
  connection?: NetworkConnection;
  mozConnection?: NetworkConnection;
  webkitConnection?: NetworkConnection;
}
