import { getMe } from "@/db/server-actions/getActions";

export const currentStats = await getMe();
