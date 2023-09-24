import { op } from "@tensorflow/tfjs";

const BusService = () => {
  const _apiBase = "https://transit.hereapi.com/v8/stations";
  const _apiKey = "AIzaSyBLJywnQWvwWKzi77qj2KlKtKfPEkh1YI4";
  const options = {
    method: "GET",
    headers: {
      "Content-type": "application/json",
      Authorization: "Bearer",
    },
  };
  const getResource = async () => {
    try {
      const response = await fetch(
        `https://transit.router.hereapi.com/v8/routes
        ?apiKey={${_apiKey}}
        &origin=41.79457,12.25473
        &destination=41.90096,12.50243`,
        options
      );

      if (!response.ok)
        throw new Error(`Could not fetch, status: ${response.status}`);

      const data = await response.json();
      return data;
    } catch (e) {
      throw e;
    }
  };
  return { getResource };
};
export default BusService;
