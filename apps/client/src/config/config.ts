import { PREFIX } from "@libs/shared/CONST";

export const nextEnv = {
	URL_SERVER: process.env["URL_SERVER"] + PREFIX,
} as const;
