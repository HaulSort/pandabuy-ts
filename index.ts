import { createHTTPClient } from "alistair/http";
import { id } from "alistair/id";
import randUserAgent from "rand-user-agent";
import { PandaBuyItem } from "./types";

const http = createHTTPClient({
  base: "https://www.pandabuy.com/gateway",
  transform: async (response) => {
    const text = await response.json();
    return text.data.item;
  },
  lifecycle: {
    before: async (request) => {
      request.headers.set("Accept", "application/json");
      request.headers.set(
        "User-Agent",
        randUserAgent("desktop", "windows", "chrome")
      );
      const newRequest = new Request(
        request.url + `&userId=${id(10, "0123456789")}`,
        request
      );
      return newRequest;
    },
    failure: async (count, request, response) => {
      console.log(count);
    },
  },
});

export async function getProduct(url: string): Promise<PandaBuyItem> {
  const body = await http.get<PandaBuyItem>(`/product/itemGet?url=${url}`);

  if (body.off) {
    throw new Error(`Request failed, PandaBuy error: ${body.off}`);
  }

  return body;
}
