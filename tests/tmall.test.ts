import { expect, test } from "bun:test";
import { getProduct } from "..";

const url = "https://detail.tmall.com/item.htm?id=741409950882";

const product = await getProduct(url);

test("English product name", () => {
  expect(product.title).toBe(
    "GZBC High Street YEEZY BLCG DOVE double-layer heavy peace pigeon sweater hoodie kanye joint name same style"
  );
});

test("Chinese product name", () => {
  expect(product.titleCn).toBe(
    "GZBC高街YEEZY BLCG DOVE双层重磅和平鸽子卫衣帽衫kanye联名同款"
  );
});

test("Product price", () => {
  expect(product.price).toBe("338.0");
});

test("Product volume", () => {
  expect(product.timeInfo.volume).toBe("34.0*27.0*11.0");
});

test("Product weight", () => {
  expect(product.timeInfo.weight).toBe(1253);
});

test("Original URL", () => {
  expect(product.detail_url).toBe(url);
});
