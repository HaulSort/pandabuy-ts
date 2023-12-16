export interface PandaBuyItem {
  id: string;
  crawlerItemKey: string;
  lastUpdateTime: string;
  innerTransMap: InnerTransMap;
  translateTime: number;
  fromCache: boolean;
  fromLangCache: boolean;
  lang: string;
  source: string;
  shortCode?: any;
  putCacheFlag: boolean;
  favorite?: any;
  enableItemAttr: number;
  globalDiscount?: any;
  orderDiscount?: any;
  itemDiscount?: any;
  timeInfo: TimeInfo;
  findSame: number;
  riskInfo: any[];
  keywordInfo: any[];
  newStoreId?: any;
  newStoreName?: any;
  newStoreUrl?: any;
  newItemUrl?: any;
  detail_url: string;
  post_fee: number;
  ems_fee: number;
  express_fee: number;
  num: number;
  num_iid: string;
  title: string;
  sales: string;
  providerType: string;
  desc_short: string;
  nick: string;
  price: string;
  suggestive_price: string;
  props_name: string;
  orginal_price: string;
  total_sold: string;
  seller_id: string;
  favcount: string;
  total_price: string;
  fanscount: string;
  off: string;
  shop_id: string;
  min_num: number;
  item_mv: string;
  titleCn: string;
  pic_url: string;
  cid: string;
  desc: string;
  noReason7DReturn: string;
  responseTime: string;
  skus: Skus;
  prop_arr: Proparr[];
  translate_prop_arr: Proparr[];
  props_img: Propsimg;
  item_imgs: Itemimg[];
  props: Prop[];
  seller_info: Sellerinfo;
  activity_discount: any[];
  reason: string;
  tags?: any;
}

interface Sellerinfo {
  nick: string;
  delivery_score: string;
  level: string;
  shop_type?: any;
  item_score: string;
  user_num_id: string;
  zhuy: string;
  shop_logo: string;
  shop_name: string;
  title: string;
  score_p: string;
  sid: string;
}

interface Prop {
  value: string;
  name: string;
}

interface Itemimg {
  url: string;
}

interface Propsimg {
  "1627207:12558436": string;
  "1627207:28341": string;
}

interface Proparr {
  valueId: string;
  valueName: string;
  propId: string;
  propName: string;
}

interface Skus {
  sku: Sku[];
}

interface Sku {
  specId?: any;
  properties_name: string;
  quantity: number;
  total_price: number;
  price: number;
  limit: string;
  sku_id: string;
  orginal_price: number;
  properties: string;
  logistics_time: string;
}

interface TimeInfo {
  volume: string;
  imageCount: number;
  averageTime: number;
  weight: number;
  fineImageList: any[];
  imageList: any[];
  sales: number;
  goodsInfo: GoodsInfo[];
  fineImageCount: number;
}

interface GoodsInfo {
  deliverTime: string;
  payTime: string;
  warehouseTime: string;
  arrivalTime: number;
  itemNo: string;
}

interface InnerTransMap {}
