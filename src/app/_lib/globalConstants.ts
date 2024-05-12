import { activePlace, getMe } from "@/db/server-actions/getActions";

export const currentStats = await getMe();
export const currentPlace = await activePlace();
