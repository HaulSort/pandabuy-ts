import { expect, test } from "bun:test";
import { getProduct } from "..";

const url = "https://detail.1688.com/offer/716991604513.html";

const product = await getProduct(url);

test("English product name", () => {
  expect(product.title).toBe(
    "One piece dropshipping ivienne Xiaohongshu Vivian Queen Mother ice crushing Blue Watch quartz Saturn watch women's watch"
  );
});

test("Chinese product name", () => {
  expect(product.titleCn).toBe(
    "一件代发ivienne小红书薇薇安西太后碎冰蓝表石英土星手表女表"
  );
});

test("Product price", () => {
  expect(product.price).toBe("210.00");
});

test("Product volume", () => {
  expect(product.timeInfo.volume).toBe("17.0*17.0*11.0");
});

test("Product weight", () => {
  expect(product.timeInfo.weight).toBe(514);
});

test("Original URL", () => {
  expect(product.detail_url).toBe(url);
});
