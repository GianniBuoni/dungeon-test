import { getMe } from "@/db/server-actions/getActions";

export const currentMe = await getMe();
