import { config } from "dotenv";

config();

export const MONGODB_URI = process.env.MONGODB_URI || 'mongodb+srv://BDSM52:Xiucf6SzYQAEEn98@clusterdbsm52.udsuz.mongodb.net/SERM?retryWrites=true&w=majority'