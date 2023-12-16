import { expect, test } from "bun:test";
import { getProduct } from "..";

const url = "https://item.taobao.com/item.htm?id=681156549118";

const product = await getProduct(url);

test("English product name", () => {
  expect(product.title).toBe(
    "TPISY HOMER FRANK OCEAN Sphere Legs four-corner ball decorative pendant necklace"
  );
});

test("Chinese product name", () => {
  expect(product.titleCn).toBe(
    "TPISY  HOMER FRANK OCEAN Sphere Legs 四角球体吊坠装饰项链"
  );
});

test("Product price", () => {
  expect(product.price).toBe("139");
});

test("Product volume", () => {
  expect(product.timeInfo.volume).toBe("10.0*10.0*4.0");
});

test("Product weight", () => {
  expect(product.timeInfo.weight).toBe(115);
});

test("Original URL", () => {
  expect(product.detail_url).toBe(url);
});
