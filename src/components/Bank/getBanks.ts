import { fetchBanks } from "../../services/apiBank";

interface BanksResult {
  id: string;
  name: string;
}

export default async function getBanks(): Promise<BanksResult[]> {
  try {
    const { data } = await fetchBanks();

    if (!data) console.log("Error while fetching the banks");

    return data;
  } catch (err) {
    console.error(err);
    throw err;
  }
}
