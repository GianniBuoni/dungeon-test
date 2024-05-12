import { getEquippedWeapon, getStats } from "./serverActions";

export const currentStats = await getStats();
export const equippedWeaponId = await getEquippedWeapon();
