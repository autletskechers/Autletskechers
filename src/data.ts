export interface Product {
  id: string;
  name: string;
  price: string;
  originalPrice?: string;
  discountPercentage?: number;
  image: string;
  gallery?: string[];
  description?: string;
  category: string;
  gender: 'Men' | 'Women' | 'Kids' | 'Unisex';
  isNew?: boolean;
  isBestSeller?: boolean;
  isPromo?: boolean;
  sizes?: string[];
}

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: "Skechers Slip-ins Stamina Sport Women's - Silver",
    price: "Rp 272.790",
    originalPrice: "Rp 1.299.000",
    discountPercentage: 79,
    image: "https://cdn.phototourl.com/member/2026-05-03-8d5f41d4-541b-4926-b82e-1ee86f186f85.jpg",
    gallery: [
      "https://cdn.phototourl.com/member/2026-05-03-8d5f41d4-541b-4926-b82e-1ee86f186f85.jpg",
      "https://cdn.phototourl.com/member/2026-05-03-531cb64f-f60f-49b4-8ff0-221e800ba2a8.jpg",
      "https://cdn.phototourl.com/member/2026-05-03-8813a602-31c8-4e03-b97c-e60982fb51fc.jpg"
    ],
    description: "Kenyamanan luar biasa berpadu dengan teknologi Skechers Hands-Free Slip-ins®. Didesain dengan Heel Pillow™ eksklusif kami, sepatu latihan bertali ini dilengkapi upper mesh dan sintetis dengan insole Skechers Air-Cooled Memory Foam® yang empuk.",
    category: "Training",
    gender: "Women",
    isNew: true
  },
  {
    id: '2',
    name: "Skechers D'Lites Hiker Women's - Mauve",
    price: "Rp 251.790",
    originalPrice: "Rp 1.199.000",
    discountPercentage: 79,
    image: "https://cdn.phototourl.com/member/2026-05-03-ff20ccaf-ac3a-4790-905f-0cf30b4e34c0.jpg",
    gallery: [
      "https://cdn.phototourl.com/member/2026-05-03-ff20ccaf-ac3a-4790-905f-0cf30b4e34c0.jpg",
      "https://cdn.phototourl.com/member/2026-05-03-b26bac0f-6055-4fe3-8622-db73169c4684.jpg",
      "https://cdn.phototourl.com/member/2026-05-03-cf76979a-5cd4-41ba-8063-7e21b97d3119.jpg"
    ],
    description: "Nikmati gaya klasik yang tangguh dengan Skechers D'Lites® Hiker. Sepatu hiking kasual bertali ini memiliki upper mesh dan sintetis dengan aksen warna yang kontras, serta insole Skechers Air-Cooled Memory Foam® yang ikonik.",
    category: "Lifestyle",
    gender: "Women",
    isNew: true
  },
  {
    id: '3',
    name: "Skechers Slip-ins D'Lux Journey Men's - Taupe",
    price: "Rp 314.790",
    originalPrice: "Rp 1.499.000",
    discountPercentage: 79,
    image: "https://cdn.phototourl.com/member/2026-05-03-840c0473-721a-4a48-9674-c9bd7c647da5.jpg",
    gallery: [
      "https://cdn.phototourl.com/member/2026-05-03-840c0473-721a-4a48-9674-c9bd7c647da5.jpg",
      "https://cdn.phototourl.com/member/2026-05-03-04729634-73dd-4307-95eb-fb3d4a6e6a80.jpg",
      "https://cdn.phototourl.com/member/2026-05-03-c1099eb6-def1-4cf2-95fc-4c230ecf282f.jpg"
    ],
    description: "Langkahlah dengan kenyamanan dan gaya bersama Skechers Hands-Free Slip-ins®: D'Lux Journey. Didesain dengan Heel Pillow™ eksklusif kami, sepatu walking ini dilengkapi upper mesh atletis dan sintetis dengan insole Skechers Air-Cooled Memory Foam®.",
    category: "Lifestyle",
    gender: "Men",
    isNew: true
  },
  {
    id: '4',
    name: "Skechers Slip-ins Summits Men's - Blue/Black",
    price: "Rp 230.790",
    originalPrice: "Rp 1.099.000",
    discountPercentage: 79,
    image: "https://cdn.phototourl.com/member/2026-05-03-2665b2aa-7cbf-48ac-962a-c83078bb74f6.jpg",
    gallery: [
      "https://cdn.phototourl.com/member/2026-05-03-2665b2aa-7cbf-48ac-962a-c83078bb74f6.jpg",
      "https://cdn.phototourl.com/member/2026-05-03-fac12eef-b8e4-4cde-938d-f1efe16cec90.jpg",
      "https://cdn.phototourl.com/member/2026-05-03-f994ac93-b011-4b72-af89-4a8372c948d0.jpg"
    ],
    description: "Melangkah dengan mudah menggunakan Skechers Hands-Free Slip-ins®: Summits. Didesain dengan Heel Pillow™ eksklusif, gaya vegan ini dilengkapi upper mesh dengan tali sepatu yang tetap (fixed) dan insole Skechers Air-Cooled Memory Foam® yang empuk.",
    category: "Training",
    gender: "Men",
    isNew: true
  },
  {
    id: '5',
    name: "Skechers Slip-ins Go Walk Anywhere Women's - Navy",
    price: "Rp 314.790",
    originalPrice: "Rp 1.499.000",
    discountPercentage: 79,
    image: "https://cdn.phototourl.com/member/2026-05-03-b4462cdd-0c03-4f6d-b521-438774ec59ac.jpg",
    gallery: [
      "https://cdn.phototourl.com/member/2026-05-03-b4462cdd-0c03-4f6d-b521-438774ec59ac.jpg"
    ],
    description: "Tingkatkan pengalaman berjalan Anda dengan teknologi kenyamanan superior dari Skechers Hands-Free Slip-ins®: Go Walk Anywhere.",
    category: "Walking",
    gender: "Women",
    isBestSeller: true
  },
  {
    id: '6',
    name: "Skechers Slip-ins Summits Men's - Black/White",
    price: "Rp 230.790",
    originalPrice: "Rp 1.099.000",
    discountPercentage: 79,
    image: "https://cdn.phototourl.com/member/2026-05-03-8a75e5f3-ef20-4921-8f5f-3ca149e7dcde.jpg",
    gallery: [
      "https://cdn.phototourl.com/member/2026-05-03-8a75e5f3-ef20-4921-8f5f-3ca149e7dcde.jpg"
    ],
    description: "Melangkah dengan mudah menggunakan Skechers Hands-Free Slip-ins®: Summits. Didesain dengan Heel Pillow™ eksklusif.",
    category: "Training",
    gender: "Men",
    isBestSeller: true
  },
  {
    id: '7',
    name: "Skechers Microstrides School Girl's - Black",
    price: "Rp 167.790",
    originalPrice: "Rp 799.000",
    discountPercentage: 79,
    image: "https://cdn.phototourl.com/member/2026-05-03-877a327a-e745-42a5-90d3-edb3c877d919.jpg",
    gallery: [
      "https://cdn.phototourl.com/member/2026-05-03-877a327a-e745-42a5-90d3-edb3c877d919.jpg"
    ],
    description: "Gaya sekolah yang cerdas berpadu dengan kenyamanan yang dapat diandalkan dalam Skechers Microstrides. Sepatu Mary Jane yang ringan ini dilengkapi upper sintetis halus dengan insole yang empuk.",
    category: "Lifestyle",
    gender: "Kids",
    isNew: true
  },
  {
    id: '8',
    name: "Skechers Bounder 2.0 Men's - Navy",
    price: "Rp 251.790",
    originalPrice: "Rp 1.199.000",
    discountPercentage: 79,
    image: "https://cdn.phototourl.com/member/2026-05-03-8a48ba7d-1054-466d-919b-09c45a33a3d8.jpg",
    gallery: [
      "https://cdn.phototourl.com/member/2026-05-03-8a48ba7d-1054-466d-919b-09c45a33a3d8.jpg"
    ],
    description: "Pertahankan kecepatan dalam kenyamanan ringan yang sporty dengan Skechers Bounder 2.0. Sepatu atletis ini dilengkapi upper mesh dan sintetis dengan insole Skechers Air-Cooled Memory Foam®.",
    category: "Running",
    gender: "Men",
    isBestSeller: true
  },
  {
    id: '9',
    name: "Skechers Slip-ins Ultra Flex 3.0 Women's - Purple",
    price: "Rp 272.790",
    originalPrice: "Rp 1.299.000",
    discountPercentage: 79,
    image: "https://cdn.phototourl.com/member/2026-05-03-7c2f8b27-8ae0-4bad-928f-98f5dd380f50.jpg",
    gallery: [
      "https://cdn.phototourl.com/member/2026-05-03-7c2f8b27-8ae0-4bad-928f-98f5dd380f50.jpg",
      "https://cdn.phototourl.com/member/2026-05-03-9c38b15a-ed01-4489-b7a9-dbbc93c6a39a.jpg",
      "https://cdn.phototourl.com/member/2026-05-03-31c980bb-3b14-4014-a0a7-c9de12d4a88c.jpg"
    ],
    description: "Nikmati kenyamanan tanpa hambatan dengan Skechers Hands-Free Slip-ins®: Ultra Flex 3.0. Didesain dengan Heel Pillow™ eksklusif kami, sepatu ini dilengkapi upper Stretch Fit® yang nyaman seperti mengenakan kaus kaki.",
    category: "Walking",
    gender: "Women",
    isNew: true
  },
  {
    id: '10',
    name: "Skechers Slip-ins Go Walk Anywhere Men's - Navy",
    price: "Rp 314.790",
    originalPrice: "Rp 1.499.000",
    discountPercentage: 79,
    image: "https://cdn.phototourl.com/member/2026-05-03-2d43ac04-1c0e-4d7a-94ba-95cf3c893a62.jpg",
    gallery: [
      "https://cdn.phototourl.com/member/2026-05-03-2d43ac04-1c0e-4d7a-94ba-95cf3c893a62.jpg",
      "https://cdn.phototourl.com/member/2026-05-03-344ec67a-80be-4f96-828e-a6607a7cf6b4.jpg",
      "https://cdn.phototourl.com/member/2026-05-03-c994dee2-68f2-411a-b40d-a0d589886b38.jpg"
    ],
    description: "Tingkatkan pengalaman berjalan Anda dengan teknologi kenyamanan superior dari Skechers Hands-Free Slip-ins®: Go Walk Anywhere. Dilengkapi dengan bantalan ULTRA GO® yang responsif dan Heel Pillow™ yang dipatenkan.",
    category: "Walking",
    gender: "Men",
    isNew: true
  },
  {
    id: '11',
    name: "Skechers Slip-ins GO WALK 7 Men's - Black",
    price: "Rp 272.790",
    originalPrice: "Rp 1.299.000",
    discountPercentage: 79,
    image: "https://cdn.phototourl.com/member/2026-05-03-8b6db8b6-65aa-45d8-9d31-5690bf4dbb74.jpg",
    gallery: [
      "https://cdn.phototourl.com/member/2026-05-03-8b6db8b6-65aa-45d8-9d31-5690bf4dbb74.jpg",
      "https://cdn.phototourl.com/member/2026-05-03-8a5dabe7-3bf8-4e0d-b44c-ce44fe9b7246.jpg",
      "https://cdn.phototourl.com/member/2026-05-03-138e2920-78ab-4239-ad65-2654d1c6142f.jpg"
    ],
    description: "Berjalanlah dengan kenyamanan superior menggunakan Skechers Hands-Free Slip-ins®: GO WALK 7™. Didesain dengan Heel Pillow™ eksklusif kami, sepatu berjalan ini dilengkapi upper mesh teknis dengan bantalan ULTRA GO® yang ringan dan teknologi Hyper Pillar™ untuk dukungan tambahan.",
    category: "Walking",
    gender: "Men",
    isNew: true
  },
  {
    id: '12',
    name: "Skechers Slip-ins Go Walk Joy Women's - Mauve",
    price: "Rp 230.790",
    originalPrice: "Rp 1.099.000",
    discountPercentage: 79,
    image: "https://cdn.phototourl.com/member/2026-05-03-5e7b4ee6-cb05-4a4c-827b-61a52adda047.jpg",
    gallery: [
      "https://cdn.phototourl.com/member/2026-05-03-5e7b4ee6-cb05-4a4c-827b-61a52adda047.jpg",
      "https://cdn.phototourl.com/member/2026-05-03-2f802c3c-0397-4885-8f0c-9df4982a8a33.jpg",
      "https://cdn.phototourl.com/member/2026-05-03-cba046d8-1cd2-43a0-93aa-b545f04c8db6.jpg"
    ],
    description: "Langkahlah dengan kenyamanan maksimal bersama Skechers Hands-Free Slip-ins®: GO WALK Joy™. Dilengkapi dengan bantalan 5GEN® yang inovatif dan insole Skechers Goga Mat™ Berpendingin Udara.",
    category: "Walking",
    gender: "Women",
    isNew: true
  },
  {
    id: '13',
    name: "Skechers Slip-ins Go Walk Flex Women's - Grey",
    price: "Rp 230.790",
    originalPrice: "Rp 1.099.000",
    discountPercentage: 79,
    image: "https://cdn.phototourl.com/member/2026-05-03-26c912c5-8d6d-47a0-8c7b-095eca4aa03d.jpg",
    gallery: [
      "https://cdn.phototourl.com/member/2026-05-03-26c912c5-8d6d-47a0-8c7b-095eca4aa03d.jpg",
      "https://cdn.phototourl.com/member/2026-05-03-4ea4a992-111c-4763-8a63-aa9fed16c83a.jpg",
      "https://cdn.phototourl.com/member/2026-05-03-899e7bf3-1560-4593-b56f-9f67b298ae4b.jpg"
    ],
    description: "Nikmati kenyamanan fleksibel dengan Skechers Hands-Free Slip-ins®: GO WALK® Flex. Menampilkan Heel Pillow™ eksklusif kami, sepatu walking ini memiliki upper mesh atletis dengan insole Skechers Air-Cooled Memory Foam®.",
    category: "Walking",
    gender: "Women",
    isNew: true
  },
  {
    id: '14',
    name: "Skechers Slip-ins Go Walk Joy Women's - Black/White",
    price: "Rp 230.790",
    originalPrice: "Rp 1.099.000",
    discountPercentage: 79,
    image: "https://cdn.phototourl.com/member/2026-05-03-2f22a166-9c17-4dbc-9c43-676e51ef8192.jpg",
    gallery: [
      "https://cdn.phototourl.com/member/2026-05-03-2f22a166-9c17-4dbc-9c43-676e51ef8192.jpg",
      "https://cdn.phototourl.com/member/2026-05-03-325de1ad-f0c5-445b-8d09-f70b89a607e3.jpg",
      "https://cdn.phototourl.com/member/2026-05-03-98819032-0161-4a56-9472-e01fe36455ed.jpg"
    ],
    description: "Nikmati kenyamanan ringan dan gaya yang mudah digunakan dengan Skechers Hands-Free Slip-ins®: GO WALK Joy™. Sepatu vegan ini dilengkapi upper mesh atletis dengan bantalan 5GEN® yang responsif.",
    category: "Walking",
    gender: "Women",
    isNew: true
  },
  {
    id: '15',
    name: "Skechers Slip-ins GO WALK 7 Women's - Grey/Pink",
    price: "Rp 272.790",
    originalPrice: "Rp 1.299.000",
    discountPercentage: 79,
    image: "https://cdn.phototourl.com/member/2026-05-03-129486d5-a8c5-4d9f-8dee-c54e4d3854cc.jpg",
    gallery: [
      "https://cdn.phototourl.com/member/2026-05-03-129486d5-a8c5-4d9f-8dee-c54e4d3854cc.jpg",
      "https://cdn.phototourl.com/member/2026-05-03-f18035bd-74b6-4da0-b86c-5d2d21b499d8.jpg",
      "https://cdn.phototourl.com/member/2026-05-03-04569b55-50b6-4691-9af7-e3513b71c7ec.jpg"
    ],
    description: "Nikmati kemudahan melangkah dengan Skechers Hands-Free Slip-ins®: GO WALK 7™. Menampilkan Heel Pillow™ yang dipatenkan, sepatu berjalan ini memiliki upper mesh atletis dengan bantalan ULTRA GO® yang ringan.",
    category: "Walking",
    gender: "Women",
    isNew: true
  },
  {
    id: '16',
    name: "Skechers Slip-ins GO WALK 7 Women's - Beige",
    price: "Rp 272.790",
    originalPrice: "Rp 1.299.000",
    discountPercentage: 79,
    image: "https://cdn.phototourl.com/member/2026-05-03-9c7b406a-2431-4bb3-bb1f-5703c2198a65.jpg",
    gallery: [
      "https://cdn.phototourl.com/member/2026-05-03-9c7b406a-2431-4bb3-bb1f-5703c2198a65.jpg",
      "https://cdn.phototourl.com/member/2026-05-03-ce7a2cec-ed46-4828-a3a9-e8586e3e019e.jpg",
      "https://cdn.phototourl.com/member/2026-05-03-c8cfa412-8fe2-4f84-9c0a-6d61b0c0916b.jpg"
    ],
    description: "Kenyamanan berjalan yang revolusioner hadir dalam Skechers Hands-Free Slip-ins®: GO WALK 7™. Didesain dengan Heel Pillow™ eksklusif, sepatu ini dilengkapi upper mesh atletis, insole Air-Cooled Memory Foam®, dan teknologi Hyper Pillar™ yang sangat ringan untuk dukungan ekstra.",
    category: "Walking",
    gender: "Women",
    isNew: true
  },
  {
    id: '17',
    name: "Skechers Slip-ins GO WALK Anywhere Women's - Black",
    price: "Rp 314.790",
    originalPrice: "Rp 1.499.000",
    discountPercentage: 79,
    image: "https://cdn.phototourl.com/member/2026-05-03-df1df27a-03e7-409e-bd30-46f542d7a468.jpg",
    gallery: [
      "https://cdn.phototourl.com/member/2026-05-03-df1df27a-03e7-409e-bd30-46f542d7a468.jpg",
      "https://cdn.phototourl.com/member/2026-05-03-ba445cae-e535-48a0-ba77-986fdcbf44a6.jpg",
      "https://cdn.phototourl.com/member/2026-05-03-2ceb2688-49a5-4164-b0c0-87fa81e40b6e.jpg"
    ],
    description: "Nikmati kenyamanan tanpa batas dengan Skechers Hands-Free Slip-ins®: GO WALK Anywhere. Didesain dengan Heel Pillow™ eksklusif untuk kemudahan pemakaian, sepatu ini memiliki upper rajutan teknis dan sol luar Goodyear® Performance.",
    category: "Walking",
    gender: "Women",
    isNew: true
  },
  {
    id: '18',
    name: "Skechers Slip-ins GO WALK 7 Women's - Mauve/Light Pink",
    price: "Rp 272.790",
    originalPrice: "Rp 1.299.000",
    discountPercentage: 79,
    image: "https://cdn.phototourl.com/member/2026-05-03-a4ab48b0-f24b-4a9f-918a-caf4739406e6.jpg",
    gallery: [
      "https://cdn.phototourl.com/member/2026-05-03-a4ab48b0-f24b-4a9f-918a-caf4739406e6.jpg",
      "https://cdn.phototourl.com/member/2026-05-03-7381ebb6-a4d4-42c7-b624-1fd26adb3fa2.jpg",
      "https://cdn.phototourl.com/member/2026-05-03-c3487ebd-6ccd-477f-92cb-357f98e1de4d.jpg"
    ],
    description: "Langkahlah dengan kenyamanan superior menggunakan Skechers Hands-Free Slip-ins®: GO WALK 7™. Didesain dengan Heel Pillow™ yang dipatenkan, sepatu berjalan ini memiliki upper mesh teknis dengan bantalan ULTRA GO® yang ringan.",
    category: "Walking",
    gender: "Women",
    isNew: true
  },
  {
    id: '19',
    name: "Skechers Slip-ins D'Lux Walker Women's - Grey/Blue",
    price: "Rp 272.790",
    originalPrice: "Rp 1.299.000",
    discountPercentage: 79,
    image: "https://cdn.phototourl.com/member/2026-05-03-c140d0e8-1d85-4d6f-8755-f07aa17fb9c9.jpg",
    gallery: [
      "https://cdn.phototourl.com/member/2026-05-03-c140d0e8-1d85-4d6f-8755-f07aa17fb9c9.jpg",
      "https://cdn.phototourl.com/member/2026-05-03-628e4fad-f816-4743-865d-ec0c00f9d9af.jpg",
      "https://cdn.phototourl.com/member/2026-05-03-52e9df35-7bb9-4f72-96cd-40c587356c7d.jpg"
    ],
    description: "Langkahlah dengan kenyamanan maksimal bersama Skechers Hands-Free Slip-ins®: D'Lux Walker. Dibuat dengan Heel Pillow™ eksklusif, sepatu ini memiliki upper mesh atletis dengan insole Air-Cooled Memory Foam® yang empuk.",
    category: "Walking",
    gender: "Women",
    isNew: true
  },
  {
    id: '20',
    name: "Skechers Slip-ins GO WALK 7 Women's - Taupe/Black",
    price: "Rp 272.790",
    originalPrice: "Rp 1.299.000",
    discountPercentage: 79,
    image: "https://cdn.phototourl.com/member/2026-05-03-8bfb6c65-98a1-43d8-8630-eba46264d8a6.jpg",
    gallery: [
      "https://cdn.phototourl.com/member/2026-05-03-8bfb6c65-98a1-43d8-8630-eba46264d8a6.jpg",
      "https://cdn.phototourl.com/member/2026-05-03-759d6320-5a3e-46b6-b73f-53f902458765.jpg",
      "https://cdn.phototourl.com/member/2026-05-03-50163442-1dd1-4bb2-adb1-2d17d966880a.jpg"
    ],
    description: "Kombinasi sempurna antara gaya dan fungsi hadir dalam Skechers Hands-Free Slip-ins®: GO WALK 7™. Didesain dengan Heel Pillow™ yang eksklusif, sepatu ini memiliki upper mesh atletis, bantalan ULTRA GO® yang ringan, dan Hyper Pillar Technology™ yang tinggi pantulannya untuk dukungan tambahan.",
    category: "Walking",
    gender: "Women",
    isNew: true
  },
  {
    id: '21',
    name: "Skechers Slip-ins D'Lux Walker Women's - Navy Blue",
    price: "Rp 272.790",
    originalPrice: "Rp 1.299.000",
    discountPercentage: 79,
    image: "https://cdn.phototourl.com/member/2026-05-03-c140d0e8-1d85-4d6f-8755-f07aa17fb9c9.jpg",
    gallery: [
      "https://cdn.phototourl.com/member/2026-05-03-c140d0e8-1d85-4d6f-8755-f07aa17fb9c9.jpg",
      "https://cdn.phototourl.com/member/2026-05-03-628e4fad-f816-4743-865d-ec0c00f9d9af.jpg",
      "https://cdn.phototourl.com/member/2026-05-03-52e9df35-7bb9-4f72-96cd-40c587356c7d.jpg"
    ],
    description: "Keseimbangan sempurna antara dukungan dan gaya hadir dalam Skechers Hands-Free Slip-ins®: D'Lux Walker. Didesain dengan Heel Pillow™ yang dipatenkan, sepatu ini menawarkan kenyamanan luar biasa dengan insole berpendingin udara.",
    category: "Walking",
    gender: "Women",
    isNew: true
  },
  {
    id: '22',
    name: "Skechers Slip-ins Ultra Flex 3.0 Women's - Black",
    price: "Rp 272.790",
    originalPrice: "Rp 1.299.000",
    discountPercentage: 79,
    image: "https://cdn.phototourl.com/member/2026-05-03-c1ded6da-e508-4dee-a510-5bea6b796286.jpg",
    gallery: [
      "https://cdn.phototourl.com/member/2026-05-03-c1ded6da-e508-4dee-a510-5bea6b796286.jpg",
      "https://cdn.phototourl.com/member/2026-05-03-78f875e4-6416-4041-a24b-4b56c54e400d.jpg",
      "https://cdn.phototourl.com/member/2026-05-03-ce68c52c-350f-4400-8384-a3a165fdcb2c.jpg"
    ],
    description: "Nikmati kenyamanan tanpa hambatan dengan Skechers Hands-Free Slip-ins®: Ultra Flex 3.0. Didesain dengan Heel Pillow™ eksklusif kami, sepatu ini dilengkapi upper Stretch Fit® yang nyaman seperti mengenakan kaus kaki dan insole Memory Foam® berpendingin udara.",
    category: "Walking",
    gender: "Women",
    isNew: true
  },
  {
    id: '23',
    name: "Skechers Slip-ins GO WALK 7 Women's - Black/White Premium",
    price: "Rp 272.790",
    originalPrice: "Rp 1.299.000",
    discountPercentage: 79,
    image: "https://cdn.phototourl.com/member/2026-05-03-7d82fed0-8335-4ac0-a677-b9549de6aea1.jpg",
    gallery: [
      "https://cdn.phototourl.com/member/2026-05-03-7d82fed0-8335-4ac0-a677-b9549de6aea1.jpg",
      "https://cdn.phototourl.com/member/2026-05-03-334a6078-ff0e-4a7b-92b2-728e824298ce.jpg",
      "https://cdn.phototourl.com/member/2026-05-03-d5392e2e-af81-4967-8771-5572bc5a7556.jpg"
    ],
    description: "Langkahlah dengan kenyamanan superior dan gaya klasik menggunakan Skechers Hands-Free Slip-ins®: GO WALK 7™. Didesain dengan Heel Pillow™ yang dipatenkan, sepatu berjalan ini menawarkan perpaduan sempurna antara kemudahan pemakaian dan bantalan ULTRA GO® yang responsif.",
    category: "Walking",
    gender: "Women",
    isNew: true
  },
  {
    id: '24',
    name: "Skechers Slip-ins GO WALK 7 Women's - Grey/Light Blue",
    price: "Rp 272.790",
    originalPrice: "Rp 1.299.000",
    discountPercentage: 79,
    image: "https://cdn.phototourl.com/member/2026-05-03-4b699002-81d9-4fbf-a8ff-64c1024d5a65.jpg",
    gallery: [
      "https://cdn.phototourl.com/member/2026-05-03-4b699002-81d9-4fbf-a8ff-64c1024d5a65.jpg",
      "https://cdn.phototourl.com/member/2026-05-03-e8dc8385-36fe-4f98-a7f2-8ddd05c89cfb.jpg",
      "https://cdn.phototourl.com/member/2026-05-03-a301e3c9-ae41-4063-a554-86ee58c97b97.jpg"
    ],
    description: "Nikmati kemudahan melangkah setiap hari dengan Skechers Hands-Free Slip-ins®: GO WALK 7™. Dilengkapi dengan Heel Pillow™ yang eksklusif, sepatu ini memiliki upper mesh yang sejuk dan teknologi Hyper Pillar™ untuk kenyamanan berjalan yang tak tertandingi.",
    category: "Walking",
    gender: "Women",
    isNew: true
  },
  {
    id: '25',
    name: "Skechers Slip-ins GO WALK 7 Women's - Beige/Tan",
    price: "Rp 272.790",
    originalPrice: "Rp 1.299.000",
    discountPercentage: 79,
    image: "https://cdn.phototourl.com/member/2026-05-03-dae3c4b8-508a-4d5f-a3d0-4d346da5083b.jpg",
    gallery: [
      "https://cdn.phototourl.com/member/2026-05-03-dae3c4b8-508a-4d5f-a3d0-4d346da5083b.jpg",
      "https://cdn.phototourl.com/member/2026-05-03-2fcefd31-2553-4d52-8671-9ab448834549.jpg",
      "https://cdn.phototourl.com/member/2026-05-03-987577b7-da7a-434c-b300-39abbf5fa1d4.jpg"
    ],
    description: "Dapatkan kenyamanan berjalan maksimal dengan Skechers Hands-Free Slip-ins®: GO WALK 7™. Sepatu ini dilengkapi dengan Heel Pillow™ yang dipatenkan, upper mesh teknis yang ringan, bantalan ULTRA GO® yang responsif, dan Hyper Pillar Technology™ untuk dukungan tambahan.",
    category: "Walking",
    gender: "Women",
    isNew: true
  },
  {
    id: '26',
    name: "Skechers Slip-ins D'Lux Walker Women's - White/Light Grey",
    price: "Rp 272.790",
    originalPrice: "Rp 1.299.000",
    discountPercentage: 79,
    image: "https://cdn.phototourl.com/member/2026-05-03-7f8b26e6-612d-4f94-87f3-0b37a9389937.jpg",
    gallery: [
      "https://cdn.phototourl.com/member/2026-05-03-7f8b26e6-612d-4f94-87f3-0b37a9389937.jpg",
      "https://cdn.phototourl.com/member/2026-05-03-7582791e-e9af-4eb9-9977-54eb0766eee4.jpg",
      "https://cdn.phototourl.com/member/2026-05-03-9484add6-5a6f-4842-a19a-af6c8790fbce.jpg"
    ],
    description: "Langkahlah dengan kenyamanan superior dan gaya klasik menggunakan Skechers Hands-Free Slip-ins®: D'Lux Walker. Didesain dengan Heel Pillow™ yang dipatenkan, sepatu berjalan ini menawarkan perpaduan sempurna antara kemudahan pemakaian dan bantalan yang responsif untuk mendukung aktivitas harian Anda.",
    category: "Walking",
    gender: "Women",
    isNew: true
  },
  {
    id: '27',
    name: "Skechers Slip-ins GO WALK 7 Women's - Beige Pearl",
    price: "Rp 272.790",
    originalPrice: "Rp 1.299.000",
    discountPercentage: 79,
    image: "https://cdn.phototourl.com/member/2026-05-03-a65520e7-d0b2-40ac-b019-befaa4115c64.jpg",
    gallery: [
      "https://cdn.phototourl.com/member/2026-05-03-a65520e7-d0b2-40ac-b019-befaa4115c64.jpg",
      "https://cdn.phototourl.com/member/2026-05-03-36aba7a6-9250-4309-9a93-9f3b81c1fbfa.jpg"
    ],
    description: "Kenyamanan luar biasa berpadu dengan teknologi Skechers Hands-Free Slip-ins®. Didesain dengan Heel Pillow™ eksklusif kami, sepatu walking ini dilengkapi upper mesh yang sejuk dengan bantalan ULTRA GO® yang responsif.",
    category: "Walking",
    gender: "Women",
    isNew: true
  },
  {
    id: '28',
    name: "Skechers Slip-ins Go Walk 7 Women's - Black Multicolor",
    price: "Rp 272.790",
    originalPrice: "Rp 1.259.000",
    discountPercentage: 78,
    image: "https://cdn.phototourl.com/member/2026-05-03-dfad32f3-cf3d-43e7-8c51-5b5f74306981.jpg",
    gallery: [
      "https://cdn.phototourl.com/member/2026-05-03-dfad32f3-cf3d-43e7-8c51-5b5f74306981.jpg",
      "https://cdn.phototourl.com/member/2026-05-03-56bf91f7-78aa-4d4c-a8d6-ecd732d4026f.jpg",
      "https://cdn.phototourl.com/member/2026-05-03-f3e05005-c751-405c-ab66-893bed6b41ac.jpg"
    ],
    description: "Langkahlah dengan kenyamanan superior dan gaya klasik menggunakan Skechers Hands-Free Slip-ins®: GO WALK 7™. Didesain dengan Heel Pillow™ yang dipatenkan, sepatu berjalan ini menawarkan perpaduan sempurna antara kemudahan pemakaian dan bantalan yang responsif.",
    category: "Walking",
    gender: "Women",
    isNew: true
  },
  {
    id: '29',
    name: "Skechers Slip-ins GO WALK 7 Women's - Navy/Pink Premium",
    price: "Rp 272.790",
    originalPrice: "Rp 1.259.000",
    discountPercentage: 78,
    image: "https://cdn.phototourl.com/member/2026-05-03-317d2535-d4e8-46ca-b8c1-446d3a71c4ab.jpg",
    gallery: [
      "https://cdn.phototourl.com/member/2026-05-03-317d2535-d4e8-46ca-b8c1-446d3a71c4ab.jpg",
      "https://cdn.phototourl.com/member/2026-05-03-486f8b8b-7f7c-4e43-8f52-bd12ddac4095.jpg",
      "https://cdn.phototourl.com/member/2026-05-03-ed63bcc8-52fa-49c8-9608-327a1411cfe0.jpg"
    ],
    description: "Nikmati kemudahan melangkah setiap hari dengan Skechers Hands-Free Slip-ins®: GO WALK 7™. Dilengkapi dengan Heel Pillow™ yang eksklusif, sepatu ini memiliki upper mesh yang sejuk dan teknologi Hyper Pillar™ untuk kenyamanan berjalan yang tak tertandingi.",
    category: "Walking",
    gender: "Women",
    isNew: true
  },
  {
    id: '30',
    name: "Skechers Slip-ins GO WALK 7 Women's - Black/White Floral",
    price: "Rp 272.790",
    originalPrice: "Rp 1.259.000",
    discountPercentage: 78,
    image: "https://cdn.phototourl.com/member/2026-05-03-5a1c2788-5439-49d1-847b-ff9577f05f11.jpg",
    gallery: [
      "https://cdn.phototourl.com/member/2026-05-03-5a1c2788-5439-49d1-847b-ff9577f05f11.jpg",
      "https://cdn.phototourl.com/member/2026-05-03-cb4a735c-c7fb-4f78-a43c-552a4401e83c.jpg",
      "https://cdn.phototourl.com/member/2026-05-03-c90e71a3-cee6-472d-857b-1eba54aa0c0c.jpg"
    ],
    description: "Langkahlah dengan kenyamanan superior dan gaya klasik menggunakan Skechers Hands-Free Slip-ins®: GO WALK 7™. Didesain dengan Heel Pillow™ yang dipatenkan, sepatu berjalan ini menawarkan perpaduan sempurna antara kemudahan pemakaian dan bantalan yang responsif.",
    category: "Walking",
    gender: "Women",
    isNew: true
  },
  {
    id: '31',
    name: "Skechers Slip-ins GO WALK 7 Women's - Black Charcoal",
    price: "Rp 272.790",
    originalPrice: "Rp 1.259.000",
    discountPercentage: 78,
    image: "https://cdn.phototourl.com/member/2026-05-03-860ab6ee-61f9-49ab-933e-e823dd0a2f3d.jpg",
    gallery: [
      "https://cdn.phototourl.com/member/2026-05-03-860ab6ee-61f9-49ab-933e-e823dd0a2f3d.jpg",
      "https://cdn.phototourl.com/member/2026-05-03-6a37a8a5-37b4-408d-8140-9aa987b620a1.jpg",
      "https://cdn.phototourl.com/member/2026-05-03-9e7b16cb-d4cf-4ea1-b071-9a73f5aa5bde.jpg"
    ],
    description: "Langkahlah dengan kenyamanan superior dan gaya klasik menggunakan Skechers Hands-Free Slip-ins®: GO WALK 7™. Didesain dengan Heel Pillow™ yang dipatenkan, sepatu berjalan ini menawarkan perpaduan sempurna antara kemudahan pemakaian dan bantalan ULTRA GO® yang responsif.",
    category: "Walking",
    gender: "Women",
    isNew: true
  },
  {
    id: '32',
    name: "Skechers Slip-ins GO WALK 7 Women's - Purple/Light Pink",
    price: "Rp 272.790",
    originalPrice: "Rp 1.259.000",
    discountPercentage: 78,
    image: "https://cdn.phototourl.com/member/2026-05-03-b3e1b952-54bd-499b-aeec-8e1ea4139b18.jpg",
    gallery: [
      "https://cdn.phototourl.com/member/2026-05-03-b3e1b952-54bd-499b-aeec-8e1ea4139b18.jpg",
      "https://cdn.phototourl.com/member/2026-05-03-4d5bc47f-b599-4aa6-847c-898d2d030387.jpg",
      "https://cdn.phototourl.com/member/2026-05-03-96ede279-05ed-4ada-bcd4-2ffe03d73b85.jpg"
    ],
    description: "Langkahlah dengan kenyamanan superior dan gaya klasik menggunakan Skechers Hands-Free Slip-ins®: GO WALK 7™. Didesain dengan Heel Pillow™ yang dipatenkan, sepatu berjalan ini menawarkan perpaduan sempurna antara kemudahan pemakaian dan bantalan ULTRA GO® yang responsif.",
    category: "Walking",
    gender: "Women",
    isNew: true
  },
  {
    id: '33',
    name: "Skechers Slip-ins GO WALK 7 Women's - Beige/Mauve",
    price: "Rp 272.790",
    originalPrice: "Rp 1.299.000",
    discountPercentage: 79,
    image: "https://cdn.phototourl.com/member/2026-05-03-75abc510-eb84-4b1a-8427-49ce20b6ec3a.jpg",
    gallery: [
      "https://cdn.phototourl.com/member/2026-05-03-75abc510-eb84-4b1a-8427-49ce20b6ec3a.jpg",
      "https://cdn.phototourl.com/member/2026-05-03-b9f1ebf3-1e92-4b23-98b9-0a3d77b05467.jpg",
      "https://cdn.phototourl.com/member/2026-05-03-2ded85a8-d521-4879-aed2-4a30813e4540.jpg"
    ],
    description: "Nikmati kemudahan melangkah setiap hari dengan Skechers Hands-Free Slip-ins®: GO WALK 7™. Dilengkapi dengan Heel Pillow™ yang eksklusif, sepatu ini memiliki upper mesh yang sejuk dan teknologi Hyper Pillar™ untuk kenyamanan berjalan yang tak tertandingi.",
    category: "Walking",
    gender: "Women",
    isNew: true
  },
  {
    id: '34',
    name: "Skechers Slip-ins GO WALK 7 Women's - Black/Pink",
    price: "Rp 299.000",
    originalPrice: "Rp 1.259.000",
    discountPercentage: 76,
    image: "https://cdn.phototourl.com/member/2026-05-03-dc7b665b-5cbb-47d1-9134-4386f0c449b2.jpg",
    gallery: [
      "https://cdn.phototourl.com/member/2026-05-03-dc7b665b-5cbb-47d1-9134-4386f0c449b2.jpg",
      "https://cdn.phototourl.com/member/2026-05-03-1174e26e-17da-443f-af04-1a79892c68f1.jpg",
      "https://cdn.phototourl.com/member/2026-05-03-1d50342c-d1aa-4959-81ab-17899524c587.jpg"
    ],
    description: "Nikmati kemudahan melangkah setiap hari dengan Skechers Hands-Free Slip-ins®: GO WALK 7™. Dilengkapi dengan Heel Pillow™ yang eksklusif, sepatu ini memiliki upper mesh yang sejuk dan teknologi Hyper Pillar™ untuk kenyamanan berjalan yang tak tertandingi.",
    category: "Walking",
    gender: "Women",
    isNew: true
  },
  {
    id: '35',
    name: "Skechers Slip-ins GO WALK 7 Women's - Navy/Light Blue",
    price: "Rp 319.000",
    originalPrice: "Rp 1.259.000",
    discountPercentage: 74,
    image: "https://cdn.phototourl.com/member/2026-05-03-9469dcb4-1a4f-4e2b-91a2-ba9c74aaeaf0.jpg",
    gallery: [
      "https://cdn.phototourl.com/member/2026-05-03-9469dcb4-1a4f-4e2b-91a2-ba9c74aaeaf0.jpg",
      "https://cdn.phototourl.com/member/2026-05-03-fc11e0dd-1f1a-40d0-9b36-c22de7743960.jpg",
      "https://cdn.phototourl.com/member/2026-05-03-994427fb-e693-460d-8343-4ecbe77bfa9a.jpg"
    ],
    description: "Nikmati kemudahan melangkah setiap hari dengan Skechers Hands-Free Slip-ins®: GO WALK 7™. Dilengkapi dengan Heel Pillow™ yang eksklusif, sepatu ini memiliki upper mesh yang sejuk dan teknologi Hyper Pillar™ untuk kenyamanan berjalan yang tak tertandingi.",
    category: "Walking",
    gender: "Women",
    isNew: true
  },
  {
    id: '36',
    name: "Skechers Slip-ins GO WALK 7 Women's - Navy Blue Elite",
    price: "Rp 279.000",
    originalPrice: "Rp 1.259.000",
    discountPercentage: 78,
    image: "https://cdn.phototourl.com/member/2026-05-03-5a02d031-239f-4a41-bbc7-69c278dd7b1c.jpg",
    gallery: [
      "https://cdn.phototourl.com/member/2026-05-03-5a02d031-239f-4a41-bbc7-69c278dd7b1c.jpg",
      "https://cdn.phototourl.com/member/2026-05-03-62e484ea-64b7-4d2c-b8e7-26f279a37323.jpg",
      "https://cdn.phototourl.com/member/2026-05-03-9469dcb4-1a4f-4e2b-91a2-ba9c74aaeaf0.jpg"
    ],
    description: "Langkahlah dengan kenyamanan superior menggunakan Skechers Hands-Free Slip-ins®: GO WALK 7™. Menampilkan Heel Pillow™ eksklusif, sepatu berjalan ini memiliki upper mesh yang sirkulasi udaranya terjaga dengan baik dan bantalan ULTRA GO® yang responsif.",
    category: "Walking",
    gender: "Women",
    isNew: true
  },
  {
    id: '37',
    name: "Skechers Slip-ins GO WALK 7 Women's - Silver/Grey",
    price: "Rp 322.000",
    originalPrice: "Rp 1.259.000",
    discountPercentage: 74,
    image: "https://cdn.phototourl.com/member/2026-05-03-a51955ab-125d-4ecd-bc54-b265abc0145b.jpg",
    gallery: [
      "https://cdn.phototourl.com/member/2026-05-03-a51955ab-125d-4ecd-bc54-b265abc0145b.jpg",
      "https://cdn.phototourl.com/member/2026-05-03-7f6c567e-c421-42c0-95dc-3018b205e606.jpg",
      "https://cdn.phototourl.com/member/2026-05-03-b5e73f3c-a5b9-4186-9d17-846901f6ea08.jpg"
    ],
    description: "Nikmati kemudahan melangkah setiap hari dengan Skechers Hands-Free Slip-ins®: GO WALK 7™. Dilengkapi dengan Heel Pillow™ yang eksklusif, sepatu ini memiliki upper mesh yang sejuk dan teknologi Hyper Pillar™ untuk kenyamanan berjalan yang tak tertandingi.",
    category: "Walking",
    gender: "Women",
    isNew: true
  },
  {
    id: '38',
    name: "Skechers Slip-ins GO WALK 7 Women's - Black/Light Purple",
    price: "Rp 297.000",
    originalPrice: "Rp 1.259.000",
    discountPercentage: 76,
    image: "https://cdn.phototourl.com/member/2026-05-03-57ac2c2a-8bb4-4d74-8378-77ea7b018a59.jpg",
    gallery: [
      "https://cdn.phototourl.com/member/2026-05-03-57ac2c2a-8bb4-4d74-8378-77ea7b018a59.jpg",
      "https://cdn.phototourl.com/member/2026-05-03-80002b66-b245-41f2-8c53-3b3e941f25df.jpg",
      "https://cdn.phototourl.com/member/2026-05-03-9b65ab2e-0a5b-4aaa-bc63-2bb581e8c4e9.jpg"
    ],
    description: "Nikmati kemudahan melangkah setiap hari dengan Skechers Hands-Free Slip-ins®: GO WALK 7™. Dilengkapi dengan Heel Pillow™ yang eksklusif, sepatu ini memiliki upper mesh yang sejuk dan teknologi Hyper Pillar™ untuk kenyamanan berjalan yang tak tertandingi.",
    category: "Walking",
    gender: "Women",
    isNew: true
  },
  {
    id: '39',
    name: "Skechers Slip-ins GO WALK 7 Women's - Rose/Mauve",
    price: "Rp 277.000",
    originalPrice: "Rp 1.259.000",
    discountPercentage: 78,
    image: "https://cdn.phototourl.com/member/2026-05-03-8df6629e-2743-4158-a58f-8408fcce6928.jpg",
    gallery: [
      "https://cdn.phototourl.com/member/2026-05-03-8df6629e-2743-4158-a58f-8408fcce6928.jpg",
      "https://cdn.phototourl.com/member/2026-05-03-fc6d6305-4250-4f32-86d3-226796ce4a90.jpg",
      "https://cdn.phototourl.com/member/2026-05-03-1fc163c0-ca9c-43cc-8852-5060153a00d2.jpg"
    ],
    description: "Nikmati kemudahan melangkah setiap hari dengan Skechers Hands-Free Slip-ins®: GO WALK 7™. Dilengkapi dengan Heel Pillow™ yang eksklusif, sepatu ini memiliki upper mesh yang sejuk dan teknologi Hyper Pillar™ untuk kenyamanan berjalan yang tak tertandingi.",
    category: "Walking",
    gender: "Women",
    isNew: true
  },
  {
    id: '40',
    name: "Skechers Slip-ins GO WALK 7 Women's - Beige/Cream",
    price: "Rp 323.000",
    originalPrice: "Rp 1.259.000",
    discountPercentage: 74,
    image: "https://cdn.phototourl.com/member/2026-05-03-07b0de61-d6b5-473a-af6b-72b5ea6a690c.jpg",
    gallery: [
      "https://cdn.phototourl.com/member/2026-05-03-07b0de61-d6b5-473a-af6b-72b5ea6a690c.jpg",
      "https://cdn.phototourl.com/member/2026-05-03-8a54b701-5e51-48c1-ab0d-4ca04cef2b0e.jpg",
      "https://cdn.phototourl.com/member/2026-05-03-dbba92f3-45e4-4723-a0d9-38d7031d448f.jpg"
    ],
    description: "Langkahlah dengan kenyamanan superior menggunakan Skechers Hands-Free Slip-ins®: GO WALK 7™. Menampilkan Heel Pillow™ eksklusif, sepatu berjalan ini memiliki upper mesh yang sirkulasi udaranya terjaga dengan baik dan bantalan ULTRA GO® yang responsif.",
    category: "Walking",
    gender: "Women",
    isNew: true
  },
  {
    id: '41',
    name: "Skechers Slip-ins Go Walk 7 - Special Edition Teal",
    price: "Rp 199.000",
    originalPrice: "Rp 1.259.000",
    discountPercentage: 84,
    image: "https://iili.io/BQ9Kz21.md.jpg",
    description: "Nikmati kemudahan melangkah setiap hari dengan Skechers Hands-Free Slip-ins® GO WALK 7™.",
    category: "Walking",
    gender: "Kids",
    isPromo: true,
    sizes: ["28", "29", "30", "31", "32", "33", "34", "35"]
  },
  {
    id: '42',
    name: "Skechers Slip-ins Go Walk 7 - Special Edition Grey/Pink",
    price: "Rp 199.000",
    originalPrice: "Rp 1.259.000",
    discountPercentage: 84,
    image: "https://iili.io/BQ9KorP.md.jpg",
    description: "Nikmati kemudahan melangkah setiap hari dengan Skechers Hands-Free Slip-ins® GO WALK 7™.",
    category: "Walking",
    gender: "Kids",
    isPromo: true,
    sizes: ["28", "29", "30", "31", "32", "33", "34", "35"]
  },
  {
    id: '43',
    name: "Skechers Slip-ins Go Walk 7 - Special Edition Black/White",
    price: "Rp 199.000",
    originalPrice: "Rp 1.259.000",
    discountPercentage: 84,
    image: "https://iili.io/BQ9KnEB.md.jpg",
    description: "Nikmati kemudahan melangkah setiap hari dengan Skechers Hands-Free Slip-ins® GO WALK 7™.",
    category: "Walking",
    gender: "Kids",
    isPromo: true,
    sizes: ["28", "29", "30", "31", "32", "33", "34", "35"]
  },
  {
    id: '44',
    name: "Skechers Slip-ins Go Walk 7 - Special Edition Beige",
    price: "Rp 199.000",
    originalPrice: "Rp 1.259.000",
    discountPercentage: 84,
    image: "https://iili.io/BQ9KCBV.md.jpg",
    description: "Nikmati kemudahan melangkah setiap hari dengan Skechers Hands-Free Slip-ins® GO WALK 7™.",
    category: "Walking",
    gender: "Kids",
    isPromo: true,
    sizes: ["28", "29", "30", "31", "32", "33", "34", "35"]
  },
  {
    id: '45',
    name: "Skechers Slip-ins Go Walk 7 - Special Edition Navy",
    price: "Rp 199.000",
    originalPrice: "Rp 1.259.000",
    discountPercentage: 84,
    image: "https://iili.io/BQ9KIYF.md.jpg",
    description: "Nikmati kemudahan melangkah setiap hari dengan Skechers Hands-Free Slip-ins® GO WALK 7™.",
    category: "Walking",
    gender: "Kids",
    isPromo: true,
    sizes: ["28", "29", "30", "31", "32", "33", "34", "35"]
  },
  {
    id: '46',
    name: "Skechers Slip-ins Go Walk 7 - Special Edition Charcoal",
    price: "Rp 199.000",
    originalPrice: "Rp 1.259.000",
    discountPercentage: 84,
    image: "https://iili.io/BQ9Kupa.md.jpg",
    description: "Nikmati kemudahan melangkah setiap hari dengan Skechers Hands-Free Slip-ins® GO WALK 7™.",
    category: "Walking",
    gender: "Kids",
    isPromo: true,
    sizes: ["28", "29", "30", "31", "32", "33", "34", "35"]
  },
  {
    id: '47',
    name: "Skechers Slip-ins Go Walk 7 - Special Edition Lavender",
    price: "Rp 199.000",
    originalPrice: "Rp 1.259.000",
    discountPercentage: 84,
    image: "https://iili.io/BQ9KRTJ.md.jpg",
    description: "Nikmati kemudahan melangkah setiap hari dengan Skechers Hands-Free Slip-ins® GO WALK 7™.",
    category: "Walking",
    gender: "Kids",
    isPromo: true,
    sizes: ["28", "29", "30", "31", "32", "33", "34", "35"]
  },
  {
    id: '48',
    name: "Skechers Slip-ins Go Walk 7 - Special Edition Maroon",
    price: "Rp 199.000",
    originalPrice: "Rp 1.259.000",
    discountPercentage: 84,
    image: "https://iili.io/BQ9K5hv.md.jpg",
    description: "Nikmati kemudahan melangkah setiap hari dengan Skechers Hands-Free Slip-ins® GO WALK 7™.",
    category: "Walking",
    gender: "Kids",
    isPromo: true,
    sizes: ["28", "29", "30", "31", "32", "33", "34", "35"]
  },
  {
    id: '49',
    name: "Skechers Slip-ins Go Walk 7 - Special Edition Olive",
    price: "Rp 199.000",
    originalPrice: "Rp 1.259.000",
    discountPercentage: 84,
    image: "https://iili.io/BQ9K7QR.md.jpg",
    description: "Nikmati kemudahan melangkah setiap hari dengan Skechers Hands-Free Slip-ins® GO WALK 7™.",
    category: "Walking",
    gender: "Kids",
    isPromo: true,
    sizes: ["28", "29", "30", "31", "32", "33", "34", "35"]
  },
  {
    id: '50',
    name: "Skechers Slip-ins Go Walk 7 - Special Edition Peach",
    price: "Rp 199.000",
    originalPrice: "Rp 1.259.000",
    discountPercentage: 84,
    image: "https://iili.io/BQ9KaBp.md.jpg",
    description: "Nikmati kemudahan melangkah setiap hari dengan Skechers Hands-Free Slip-ins® GO WALK 7™.",
    category: "Walking",
    gender: "Kids",
    isPromo: true,
    sizes: ["28", "29", "30", "31", "32", "33", "34", "35"]
  },
  {
    id: '51',
    name: "Skechers Slip-ins Go Walk 7 - Special Edition Sky Blue",
    price: "Rp 199.000",
    originalPrice: "Rp 1.259.000",
    discountPercentage: 84,
    image: "https://iili.io/BQ9Kl4I.md.jpg",
    description: "Nikmati kemudahan melangkah setiap hari dengan Skechers Hands-Free Slip-ins® GO WALK 7™.",
    category: "Walking",
    gender: "Kids",
    isPromo: true,
    sizes: ["28", "29", "30", "31", "32", "33", "34", "35"]
  },
  {
    id: '52',
    name: "Skechers Slip-ins Go Walk 7 - Special Edition Rose",
    price: "Rp 199.000",
    originalPrice: "Rp 1.259.000",
    discountPercentage: 84,
    image: "https://iili.io/BQ9KGvn.md.jpg",
    description: "Nikmati kemudahan melangkah setiap hari dengan Skechers Hands-Free Slip-ins® GO WALK 7™.",
    category: "Walking",
    gender: "Kids",
    isPromo: true,
    sizes: ["28", "29", "30", "31", "32", "33", "34", "35"]
  },
  {
    id: '53',
    name: "Skechers Slip-ins Go Walk 7 - Special Edition Mauve",
    price: "Rp 199.000",
    originalPrice: "Rp 1.259.000",
    discountPercentage: 84,
    image: "https://iili.io/BQ9KMps.md.jpg",
    description: "Nikmati kemudahan melangkah setiap hari dengan Skechers Hands-Free Slip-ins® GO WALK 7™.",
    category: "Walking",
    gender: "Kids",
    isPromo: true,
    sizes: ["28", "29", "30", "31", "32", "33", "34", "35"]
  },
  {
    id: '54',
    name: "Skechers Slip-ins Go Walk 7 - Special Edition Cream",
    price: "Rp 199.000",
    originalPrice: "Rp 1.259.000",
    discountPercentage: 84,
    image: "https://iili.io/BQ9KWTG.md.jpg",
    description: "Nikmati kemudahan melangkah setiap hari dengan Skechers Hands-Free Slip-ins® GO WALK 7™.",
    category: "Walking",
    gender: "Kids",
    isPromo: true,
    sizes: ["28", "29", "30", "31", "32", "33", "34", "35"]
  },
  {
    id: '55',
    name: "Skechers Slip-ins Go Walk 7 - Special Edition Tan",
    price: "Rp 199.000",
    originalPrice: "Rp 1.259.000",
    discountPercentage: 84,
    image: "https://iili.io/BQ9KXjf.md.jpg",
    description: "Nikmati kemudahan melangkah setiap hari dengan Skechers Hands-Free Slip-ins® GO WALK 7™.",
    category: "Walking",
    gender: "Kids",
    isPromo: true,
    sizes: ["28", "29", "30", "31", "32", "33", "34", "35"]
  },
  {
    id: '56',
    name: "Skechers Slip-ins Go Walk 7 - Special Edition Silver",
    price: "Rp 199.000",
    originalPrice: "Rp 1.259.000",
    discountPercentage: 84,
    image: "https://iili.io/BQ9KhQ4.md.jpg",
    description: "Nikmati kemudahan melangkah setiap hari dengan Skechers Hands-Free Slip-ins® GO WALK 7™.",
    category: "Walking",
    gender: "Kids",
    isPromo: true,
    sizes: ["28", "29", "30", "31", "32", "33", "34", "35"]
  },
  {
    id: '57',
    name: "Skechers Slip-ins Go Walk 7 - Special Edition Copper",
    price: "Rp 199.000",
    originalPrice: "Rp 1.259.000",
    discountPercentage: 84,
    image: "https://iili.io/BQ9KwCl.md.jpg",
    description: "Nikmati kemudahan melangkah setiap hari dengan Skechers Hands-Free Slip-ins® GO WALK 7™.",
    category: "Walking",
    gender: "Kids",
    isPromo: true,
    sizes: ["28", "29", "30", "31", "32", "33", "34", "35"]
  },
  {
    id: '58',
    name: "Skechers Slip-ins Go Walk 7 - Special Edition Bronze",
    price: "Rp 199.000",
    originalPrice: "Rp 1.259.000",
    discountPercentage: 84,
    image: "https://iili.io/BQ9KNG2.md.jpg",
    description: "Nikmati kemudahan melangkah setiap hari dengan Skechers Hands-Free Slip-ins® GO WALK 7™.",
    category: "Walking",
    gender: "Kids",
    isPromo: true,
    sizes: ["28", "29", "30", "31", "32", "33", "34", "35"]
  },
  {
    id: '59',
    name: "Skechers Slip-ins Go Walk 7 - Special Edition Gold",
    price: "Rp 199.000",
    originalPrice: "Rp 1.259.000",
    discountPercentage: 84,
    image: "https://iili.io/BQ9KO4S.md.jpg",
    description: "Nikmati kemudahan melangkah setiap hari dengan Skechers Hands-Free Slip-ins® GO WALK 7™.",
    category: "Walking",
    gender: "Kids",
    isPromo: true,
    sizes: ["28", "29", "30", "31", "32", "33", "34", "35"]
  },
  {
    id: '60',
    name: "Skechers Slip-ins Go Walk 7 - Special Edition Ivory",
    price: "Rp 199.000",
    originalPrice: "Rp 1.259.000",
    discountPercentage: 84,
    image: "https://iili.io/BQ9Kk37.md.jpg",
    description: "Nikmati kemudahan melangkah setiap hari dengan Skechers Hands-Free Slip-ins® GO WALK 7™.",
    category: "Walking",
    gender: "Kids",
    isPromo: true,
    sizes: ["28", "29", "30", "31", "32", "33", "34", "35"]
  },
  {
    id: '61',
    name: "Skechers Slip-ins Go Walk 7 - Special Edition Mint",
    price: "Rp 199.000",
    originalPrice: "Rp 1.259.000",
    discountPercentage: 84,
    image: "https://iili.io/BQ9Kva9.md.jpg",
    description: "Nikmati kemudahan melangkah setiap hari dengan Skechers Hands-Free Slip-ins® GO WALK 7™.",
    category: "Walking",
    gender: "Kids",
    isPromo: true,
    sizes: ["28", "29", "30", "31", "32", "33", "34", "35"]
  },
  {
    id: '62',
    name: "Skechers Slip-ins Go Walk 7 - Special Edition Coral",
    price: "Rp 199.000",
    originalPrice: "Rp 1.259.000",
    discountPercentage: 84,
    image: "https://iili.io/BQ9K8ve.md.jpg",
    description: "Nikmati kemudahan melangkah setiap hari dengan Skechers Hands-Free Slip-ins® GO WALK 7™.",
    category: "Walking",
    gender: "Kids",
    isPromo: true,
    sizes: ["28", "29", "30", "31", "32", "33", "34", "35"]
  },
  {
    id: '63',
    name: "Skechers Slip-ins Go Walk 7 - Special Edition Sage",
    price: "Rp 199.000",
    originalPrice: "Rp 1.259.000",
    discountPercentage: 84,
    image: "https://iili.io/BQ9KgTb.md.jpg",
    description: "Nikmati kemudahan melangkah setiap hari dengan Skechers Hands-Free Slip-ins® GO WALK 7™.",
    category: "Walking",
    gender: "Kids",
    isPromo: true,
    sizes: ["28", "29", "30", "31", "32", "33", "34", "35"]
  },
  {
    id: '64',
    name: "Skechers Slip-ins Go Walk 7 - Special Edition Mustard",
    price: "Rp 199.000",
    originalPrice: "Rp 1.259.000",
    discountPercentage: 84,
    image: "https://iili.io/BQ9Krjj.md.jpg",
    description: "Nikmati kemudahan melangkah setiap hari dengan Skechers Hands-Free Slip-ins® GO WALK 7™.",
    category: "Walking",
    gender: "Kids",
    isPromo: true,
    sizes: ["28", "29", "30", "31", "32", "33", "34", "35"]
  },
  {
    id: '65',
    name: "Skechers Slip-ins Go Walk 7 - Special Edition Emerald",
    price: "Rp 199.000",
    originalPrice: "Rp 1.259.000",
    discountPercentage: 84,
    image: "https://iili.io/BQ9K4Zx.md.jpg",
    description: "Nikmati kemudahan melangkah setiap hari dengan Skechers Hands-Free Slip-ins® GO WALK 7™.",
    category: "Walking",
    gender: "Kids",
    isPromo: true,
    sizes: ["28", "29", "30", "31", "32", "33", "34", "35"]
  },
  {
    id: '66',
    name: "Skechers Slip-ins Go Walk 7 - Special Edition Ruby",
    price: "Rp 199.000",
    originalPrice: "Rp 1.259.000",
    discountPercentage: 84,
    image: "https://iili.io/BQ9KPCQ.md.jpg",
    description: "Nikmati kemudahan melangkah setiap hari dengan Skechers Hands-Free Slip-ins® GO WALK 7™.",
    category: "Walking",
    gender: "Kids",
    isPromo: true,
    sizes: ["28", "29", "30", "31", "32", "33", "34", "35"]
  },
  {
    id: '67',
    name: "Skechers Slip-ins Go Walk 7 - Special Edition Sapphire",
    price: "Rp 199.000",
    originalPrice: "Rp 1.259.000",
    discountPercentage: 84,
    image: "https://iili.io/BQ9KiGV.md.jpg",
    description: "Nikmati kemudahan melangkah setiap hari dengan Skechers Hands-Free Slip-ins® GO WALK 7™.",
    category: "Walking",
    gender: "Kids",
    isPromo: true,
    sizes: ["28", "29", "30", "31", "32", "33", "34", "35"]
  },
  {
    id: '68',
    name: "Skechers Slip-ins Go Walk 7 - Special Edition Amethyst",
    price: "Rp 199.000",
    originalPrice: "Rp 1.259.000",
    discountPercentage: 84,
    image: "https://iili.io/BQ9Ks6B.md.jpg",
    description: "Nikmati kemudahan melangkah setiap hari dengan Skechers Hands-Free Slip-ins® GO WALK 7™.",
    category: "Walking",
    gender: "Kids",
    isPromo: true,
    sizes: ["28", "29", "30", "31", "32", "33", "34", "35"]
  },
  {
    id: '69',
    name: "Skechers Slip-ins Go Walk 7 - Special Edition Onyx",
    price: "Rp 199.000",
    originalPrice: "Rp 1.259.000",
    discountPercentage: 84,
    image: "https://iili.io/BQ9KQ3P.md.jpg",
    description: "Nikmati kemudahan melangkah setiap hari dengan Skechers Hands-Free Slip-ins® GO WALK 7™.",
    category: "Walking",
    gender: "Kids",
    isPromo: true,
    sizes: ["28", "29", "30", "31", "32", "33", "34", "35"]
  },
  {
    id: '70',
    name: "Skechers Slip-ins Go Walk 7 - Special Edition Pearl",
    price: "Rp 199.000",
    originalPrice: "Rp 1.259.000",
    discountPercentage: 84,
    image: "https://iili.io/BQ9Kt8F.md.jpg",
    description: "Nikmati kemudahan melangkah setiap hari dengan Skechers Hands-Free Slip-ins® GO WALK 7™.",
    category: "Walking",
    gender: "Kids",
    isPromo: true,
    sizes: ["28", "29", "30", "31", "32", "33", "34", "35"]
  },
  {
    id: '71',
    name: "Skechers Slip-ins Go Walk 7 - Special Edition Quartz",
    price: "Rp 199.000",
    originalPrice: "Rp 1.259.000",
    discountPercentage: 84,
    image: "https://iili.io/BQ9KZa1.md.jpg",
    description: "Nikmati kemudahan melangkah setiap hari dengan Skechers Hands-Free Slip-ins® GO WALK 7™.",
    category: "Walking",
    gender: "Kids",
    isPromo: true,
    sizes: ["28", "29", "30", "31", "32", "33", "34", "35"]
  },
  {
    id: '72',
    name: "Skechers Slip-ins Go Walk 7 - Special Edition Jade",
    price: "Rp 199.000",
    originalPrice: "Rp 1.259.000",
    discountPercentage: 84,
    image: "https://iili.io/BQ9KpwJ.md.jpg",
    description: "Nikmati kemudahan melangkah setiap hari dengan Skechers Hands-Free Slip-ins® GO WALK 7™.",
    category: "Walking",
    gender: "Kids",
    isPromo: true,
    sizes: ["28", "29", "30", "31", "32", "33", "34", "35"]
  },
  {
    id: '73',
    name: "Skechers Slip-ins Go Walk 7 - Special Edition Amber",
    price: "Rp 199.000",
    originalPrice: "Rp 1.259.000",
    discountPercentage: 84,
    image: "https://iili.io/BQ9KyZv.md.jpg",
    description: "Nikmati kemudahan melangkah setiap hari dengan Skechers Hands-Free Slip-ins® GO WALK 7™.",
    category: "Walking",
    gender: "Kids",
    isPromo: true,
    sizes: ["28", "29", "30", "31", "32", "33", "34", "35"]
  },
  {
    id: '74',
    name: "Skechers Slip-ins Go Walk 7 - Special Edition Garnet",
    price: "Rp 199.000",
    originalPrice: "Rp 1.259.000",
    discountPercentage: 84,
    image: "https://iili.io/BQ9fHnR.md.jpg",
    description: "Nikmati kemudahan melangkah setiap hari dengan Skechers Hands-Free Slip-ins® GO WALK 7™.",
    category: "Walking",
    gender: "Kids",
    isPromo: true,
    sizes: ["28", "29", "30", "31", "32", "33", "34", "35"]
  },
  {
    id: '75',
    name: "Skechers Slip-ins Go Walk 7 - Special Edition Topaz",
    price: "Rp 199.000",
    originalPrice: "Rp 1.259.000",
    discountPercentage: 84,
    image: "https://iili.io/BQ9fJGp.md.jpg",
    description: "Nikmati kemudahan melangkah setiap hari dengan Skechers Hands-Free Slip-ins® GO WALK 7™.",
    category: "Walking",
    gender: "Kids",
    isPromo: true,
    sizes: ["28", "29", "30", "31", "32", "33", "34", "35"]
  },
  {
    id: '76',
    name: "Skechers Slip-ins Go Walk 7 - Special Edition Citrine",
    price: "Rp 199.000",
    originalPrice: "Rp 1.259.000",
    discountPercentage: 84,
    image: "https://iili.io/BQ9fd6N.md.jpg",
    description: "Nikmati kemudahan melangkah setiap hari dengan Skechers Hands-Free Slip-ins® GO WALK 7™.",
    category: "Walking",
    gender: "Kids",
    isPromo: true,
    sizes: ["28", "29", "30", "31", "32", "33", "34", "35"]
  },
  {
    id: '77',
    name: "Skechers Slip-ins Go Walk 7 - Special Edition Peridot",
    price: "Rp 199.000",
    originalPrice: "Rp 1.259.000",
    discountPercentage: 84,
    image: "https://iili.io/BQ9f3FI.md.jpg",
    description: "Nikmati kemudahan melangkah setiap hari dengan Skechers Hands-Free Slip-ins® GO WALK 7™.",
    category: "Walking",
    gender: "Kids",
    isPromo: true,
    sizes: ["28", "29", "30", "31", "32", "33", "34", "35"]
  },
  {
    id: '78',
    name: "Skechers Slip-ins Go Walk 7 - Special Edition Aquamarine",
    price: "Rp 199.000",
    originalPrice: "Rp 1.259.000",
    discountPercentage: 84,
    image: "https://iili.io/BQ9fFat.md.jpg",
    description: "Nikmati kemudahan melangkah setiap hari dengan Skechers Hands-Free Slip-ins® GO WALK 7™.",
    category: "Walking",
    gender: "Kids",
    isPromo: true,
    sizes: ["28", "29", "30", "31", "32", "33", "34", "35"]
  },
  {
    id: '79',
    name: "Skechers Slip-ins Go Walk 7 - Special Edition Moonstone",
    price: "Rp 199.000",
    originalPrice: "Rp 1.259.000",
    discountPercentage: 84,
    image: "https://iili.io/BQ9fK8X.md.jpg",
    description: "Nikmati kemudahan melangkah setiap hari dengan Skechers Hands-Free Slip-ins® GO WALK 7™.",
    category: "Walking",
    gender: "Kids",
    isPromo: true,
    sizes: ["28", "29", "30", "31", "32", "33", "34", "35"]
  },
  {
    id: '80',
    name: "Skechers Slip-ins Go Walk 7 - Special Edition Obsidian",
    price: "Rp 199.000",
    originalPrice: "Rp 1.259.000",
    discountPercentage: 84,
    image: "https://iili.io/BQ9fq9n.md.jpg",
    description: "Nikmati kemudahan melangkah setiap hari dengan Skechers Hands-Free Slip-ins® GO WALK 7™.",
    category: "Walking",
    gender: "Kids",
    isPromo: true,
    sizes: ["28", "29", "30", "31", "32", "33", "34", "35"]
  },
  {
    id: '81',
    name: "Skechers Women's Lifestyle - Elegant White",
    price: "Rp 255.000",
    originalPrice: "Rp 1.199.000",
    discountPercentage: 79,
    image: "https://iili.io/BQ9Go7t.md.jpg",
    description: "Gaya jalanan yang chic berpadu dengan kenyamanan legendaris Skechers.",
    category: "Lifestyle",
    gender: "Women",
    isPromo: true
  },
  {
    id: '82',
    name: "Skechers Women's Lifestyle - Soft Pink",
    price: "Rp 265.000",
    originalPrice: "Rp 1.199.000",
    discountPercentage: 78,
    image: "https://iili.io/BQ9Gn2I.md.jpg",
    description: "Sentuhan feminin untuk aktivitas harian Anda yang dinamis.",
    category: "Lifestyle",
    gender: "Women",
    isPromo: true
  },
  {
    id: '83',
    name: "Skechers Women's Lifestyle - Urban Grey",
    price: "Rp 275.000",
    originalPrice: "Rp 1.199.000",
    discountPercentage: 77,
    image: "https://iili.io/BQ9GfBR.md.jpg",
    description: "Warna abu-abu netral yang cocok dengan berbagai outfit casual Anda.",
    category: "Lifestyle",
    gender: "Women",
    isPromo: true
  },
  {
    id: '84',
    name: "Skechers Women's Lifestyle - Classic Navy",
    price: "Rp 285.000",
    originalPrice: "Rp 1.199.000",
    discountPercentage: 76,
    image: "https://iili.io/BQ9GFLv.md.jpg",
    description: "Keanggunan dalam kesederhanaan dengan warna navy yang timeless.",
    category: "Lifestyle",
    gender: "Women",
    isPromo: true
  },
  {
    id: '85',
    name: "Skechers Women's Lifestyle - Midnight Black",
    price: "Rp 295.000",
    originalPrice: "Rp 1.199.000",
    discountPercentage: 75,
    image: "https://iili.io/BQ9GxkX.md.jpg",
    description: "Siap melangkah dengan percaya diri bersama Skechers All-Black.",
    category: "Lifestyle",
    gender: "Women",
    isPromo: true
  },
  {
    id: '86',
    name: "Skechers Women's Lifestyle - Pastel Dream",
    price: "Rp 305.000",
    originalPrice: "Rp 1.199.000",
    discountPercentage: 75,
    image: "https://iili.io/BQ9Gzpn.md.jpg",
    description: "Kombinasi warna pastel yang memberikan kesan ceria dan segar.",
    category: "Lifestyle",
    gender: "Women",
    isPromo: true
  },
  {
    id: '87',
    name: "Skechers Women's Lifestyle - Rose Gold Touch",
    price: "Rp 315.000",
    originalPrice: "Rp 1.199.000",
    discountPercentage: 74,
    image: "https://iili.io/BQ9GTIs.md.jpg",
    description: "Aksen rose gold yang menambah kesan mewah pada penampilan Anda.",
    category: "Lifestyle",
    gender: "Women",
    isPromo: true
  },
  {
    id: '88',
    name: "Skechers Women's Lifestyle - Desert Beige",
    price: "Rp 325.000",
    originalPrice: "Rp 1.199.000",
    discountPercentage: 73,
    image: "https://iili.io/BQ9GuhG.md.jpg",
    description: "Warna beige yang hangat dan natural untuk kenyamanan sepanjang hari.",
    category: "Lifestyle",
    gender: "Women",
    isPromo: true
  },
  {
    id: '89',
    name: "Skechers Women's Lifestyle - Sky Blue Flare",
    price: "Rp 333.000",
    originalPrice: "Rp 1.199.000",
    discountPercentage: 72,
    image: "https://iili.io/BQ9G7El.md.jpg",
    description: "Ringan seperti awan dengan desain biru langit yang menawan.",
    category: "Lifestyle",
    gender: "Women",
    isPromo: true
  },
  {
    id: '90',
    name: "Skechers Women's Lifestyle - Lavender Mist",
    price: "Rp 258.000",
    originalPrice: "Rp 1.199.000",
    discountPercentage: 78,
    image: "https://iili.io/BQ9GY42.md.jpg",
    description: "Kenyamanan maksimal dengan sentuhan warna lavender yang lembut.",
    category: "Lifestyle",
    gender: "Women",
    isPromo: true
  },
  {
    id: '91',
    name: "Skechers Women's Lifestyle - Mint Fresh",
    price: "Rp 262.000",
    originalPrice: "Rp 1.199.000",
    discountPercentage: 78,
    image: "https://iili.io/BQ9Gc2S.md.jpg",
    description: "Memberikan kesan segar pada setiap langkah kaki Anda.",
    category: "Lifestyle",
    gender: "Women",
    isPromo: true
  },
  {
    id: '92',
    name: "Skechers Women's Lifestyle - Sunny Yellow",
    price: "Rp 268.000",
    originalPrice: "Rp 1.199.000",
    discountPercentage: 78,
    image: "https://iili.io/BQ9GlY7.md.jpg",
    description: "Tunjukkan sisi ceria Anda dengan warna kuning yang ikonik.",
    category: "Lifestyle",
    gender: "Women",
    isPromo: true
  },
  {
    id: '93',
    name: "Skechers Women's Lifestyle - Peach Fuzz",
    price: "Rp 272.000",
    originalPrice: "Rp 1.199.000",
    discountPercentage: 77,
    image: "https://iili.io/BQ9G0v9.md.jpg",
    description: "Warna peach yang manis untuk gaya yang lebih playful.",
    category: "Lifestyle",
    gender: "Women",
    isPromo: true
  },
  {
    id: '94',
    name: "Skechers Women's Lifestyle - Coral Reef",
    price: "Rp 278.000",
    originalPrice: "Rp 1.199.000",
    discountPercentage: 77,
    image: "https://iili.io/BQ9G1pe.md.jpg",
    description: "Vibrant dan energetik, siap menemani aktivitas outdoor Anda.",
    category: "Lifestyle",
    gender: "Women",
    isPromo: true
  },
  {
    id: '95',
    name: "Skechers Women's Lifestyle - Forest Green",
    price: "Rp 282.000",
    originalPrice: "Rp 1.199.000",
    discountPercentage: 76,
    image: "https://iili.io/BQ9GGTu.md.jpg",
    description: "Kesan alami yang kuat dengan kenyamanan bantalan super empuk.",
    category: "Lifestyle",
    gender: "Women",
    isPromo: true
  },
  {
    id: '96',
    name: "Skechers Women's Lifestyle - Ruby Red",
    price: "Rp 288.000",
    originalPrice: "Rp 1.199.000",
    discountPercentage: 76,
    image: "https://iili.io/BQ9GMhb.md.jpg",
    description: "Berani tampil beda dengan warna merah ruby yang elegan.",
    category: "Lifestyle",
    gender: "Women",
    isPromo: true
  },
  {
    id: '97',
    name: "Skechers Women's Lifestyle - Deep Ocean",
    price: "Rp 292.000",
    originalPrice: "Rp 1.199.000",
    discountPercentage: 76,
    image: "https://iili.io/BQ9GVQj.md.jpg",
    description: "Kedalaman warna biru yang menenangkan untuk kenyamanan harian.",
    category: "Lifestyle",
    gender: "Women",
    isPromo: true
  },
  {
    id: '98',
    name: "Skechers Women's Lifestyle - Golden Sand",
    price: "Rp 298.000",
    originalPrice: "Rp 1.199.000",
    discountPercentage: 75,
    image: "https://iili.io/BQ9GXCx.md.jpg",
    description: "Warna pasir keemasan yang memberikan kesan hangat dan nyaman.",
    category: "Lifestyle",
    gender: "Women",
    isPromo: true
  },
  {
    id: '99',
    name: "Skechers Women's Lifestyle - Silver Moon",
    price: "Rp 302.000",
    originalPrice: "Rp 1.199.000",
    discountPercentage: 75,
    image: "https://iili.io/BQ9GhEQ.md.jpg",
    description: "Kilau perak yang futuristik untuk gaya urban yang modern.",
    category: "Lifestyle",
    gender: "Women",
    isPromo: true
  },
  {
    id: '100',
    name: "Skechers Women's Lifestyle - Bronze Glow",
    price: "Rp 308.000",
    originalPrice: "Rp 1.199.000",
    discountPercentage: 74,
    image: "https://iili.io/BQ9Gj4V.md.jpg",
    description: "Aksen perunggu yang unik untuk menonjolkan karakter Anda.",
    category: "Lifestyle",
    gender: "Women",
    isPromo: true
  },
  {
    id: '101',
    name: "Skechers Women's Lifestyle - Ivory Silk",
    price: "Rp 312.000",
    originalPrice: "Rp 1.199.000",
    discountPercentage: 74,
    image: "https://iili.io/BQ9GN3B.md.jpg",
    description: "Kemurnian warna ivory yang berpadu dengan insole memory foam.",
    category: "Lifestyle",
    gender: "Women",
    isPromo: true
  },
  {
    id: '102',
    name: "Skechers Women's Lifestyle - Charcoal Dusk",
    price: "Rp 318.000",
    originalPrice: "Rp 1.199.000",
    discountPercentage: 73,
    image: "https://iili.io/BQ9GOYP.md.jpg",
    description: "Warna arang yang maskulin namun didesain khusus untuk wanita.",
    category: "Lifestyle",
    gender: "Women",
    isPromo: true
  },
  {
    id: '103',
    name: "Skechers Women's Lifestyle - Sage Green",
    price: "Rp 322.000",
    originalPrice: "Rp 1.199.000",
    discountPercentage: 73,
    image: "https://iili.io/BQ9Gev1.md.jpg",
    description: "Trend warna sage yang menenangkan untuk gaya hidup sehat.",
    category: "Lifestyle",
    gender: "Women",
    isPromo: true
  },
  {
    id: '104',
    name: "Skechers Women's Lifestyle - Berry Blast",
    price: "Rp 328.000",
    originalPrice: "Rp 1.199.000",
    discountPercentage: 73,
    image: "https://iili.io/BQ9GkyF.md.jpg",
    description: "Ledakan warna beri yang manis dan penuh energi.",
    category: "Lifestyle",
    gender: "Women",
    isPromo: true
  },
  {
    id: '105',
    name: "Skechers Women's Lifestyle - Olive Branch",
    price: "Rp 331.000",
    originalPrice: "Rp 1.199.000",
    discountPercentage: 72,
    image: "https://iili.io/BQ9G8Tg.md.jpg",
    description: "Classic olive untuk gaya yang lebih mature and berkelas.",
    category: "Lifestyle",
    gender: "Women",
    isPromo: true
  },
  {
    id: '106',
    name: "Skechers Women's Lifestyle - Teal Wave",
    price: "Rp 257.000",
    originalPrice: "Rp 1.199.000",
    discountPercentage: 79,
    image: "https://iili.io/BQ9GrCv.md.jpg",
    description: "Kesegaran warna teal dengan sirkulasi udara yang maksimal.",
    category: "Lifestyle",
    gender: "Women",
    isPromo: true
  },
  {
    id: '107',
    name: "Skechers Women's Lifestyle - Magenta Magic",
    price: "Rp 263.000",
    originalPrice: "Rp 1.199.000",
    discountPercentage: 78,
    image: "https://iili.io/BQ9G4GR.md.jpg",
    description: "Warna magenta yang bold untuk mencuri perhatian di mana pun.",
    category: "Lifestyle",
    gender: "Women",
    isPromo: true
  },
  {
    id: '108',
    name: "Skechers Women's Lifestyle - Apricot Sun",
    price: "Rp 269.000",
    originalPrice: "Rp 1.199.000",
    discountPercentage: 78,
    image: "https://iili.io/BQ9G64p.md.jpg",
    description: "Keceriaan warna apron yang hangat untuk pagi yang semangat.",
    category: "Lifestyle",
    gender: "Women",
    isPromo: true
  },
  {
    id: '109',
    name: "Skechers Women's Lifestyle - Indigo Night",
    price: "Rp 274.000",
    originalPrice: "Rp 1.199.000",
    discountPercentage: 77,
    image: "https://iili.io/BQ9Gi3N.md.jpg",
    description: "Warna indigo yang dalam untuk kenyamanan malam hari.",
    category: "Lifestyle",
    gender: "Women",
    isPromo: true
  },
  {
    id: '110',
    name: "Skechers Women's Lifestyle - Powder Pink",
    price: "Rp 284.000",
    originalPrice: "Rp 1.199.000",
    discountPercentage: 76,
    image: "https://iili.io/BQ9GsaI.md.jpg",
    description: "Lembut dan empuk, seperti berjalan di atas awan pink.",
    category: "Lifestyle",
    gender: "Women",
    isPromo: true
  },
  {
    id: '111',
    name: "Skechers Women's Lifestyle - Earthy Brown",
    price: "Rp 294.000",
    originalPrice: "Rp 1.199.000",
    discountPercentage: 75,
    image: "https://iili.io/BQ9GQyX.md.jpg",
    description: "Koneksi dengan alam melalui warna cokelat tanah yang autentik.",
    category: "Lifestyle",
    gender: "Women",
    isPromo: true
  },
  {
    id: '112',
    name: "Skechers Women's Lifestyle - Aqua Marine",
    price: "Rp 304.000",
    originalPrice: "Rp 1.199.000",
    discountPercentage: 75,
    image: "https://iili.io/BQ9GbZG.md.jpg",
    description: "Keindahan warna laut dalam setiap langkah kaki Anda.",
    category: "Lifestyle",
    gender: "Women",
    isPromo: true
  },
  {
    id: '113',
    name: "Skechers Women's Lifestyle - Purple Haze",
    price: "Rp 314.000",
    originalPrice: "Rp 1.199.000",
    discountPercentage: 74,
    image: "https://iili.io/BQ9GyG4.md.jpg",
    description: "Warna ungu yang misterius dan menawan untuk gaya unik.",
    category: "Lifestyle",
    gender: "Women",
    isPromo: true
  },
  {
    id: '114',
    name: "Skechers Women's Lifestyle - Marble White",
    price: "Rp 324.000",
    originalPrice: "Rp 1.199.000",
    discountPercentage: 73,
    image: "https://iili.io/BQ9M96l.md.jpg",
    description: "Desain putih bersih dengan tekstur yang terinspirasi dari marmer.",
    category: "Lifestyle",
    gender: "Women",
    isPromo: true
  },
  {
    id: '115',
    name: "Skechers Women's Lifestyle - Onyx Shine",
    price: "Rp 330.000",
    originalPrice: "Rp 1.199.000",
    discountPercentage: 72,
    image: "https://iili.io/BQ9MJF2.md.jpg",
    description: "Kilau hitam onyx yang memberikan kesan tangguh dan elegan.",
    category: "Lifestyle",
    gender: "Women",
    isPromo: true
  },
  {
    id: '116',
    name: "Skechers Women's Lifestyle - Creamy Pearl",
    price: "Rp 333.000",
    originalPrice: "Rp 1.199.000",
    discountPercentage: 72,
    image: "https://iili.io/BQ9MdaS.md.jpg",
    description: "Kenyamanan premium dengan pilihan warna krem mutiara yang halus.",
    category: "Lifestyle",
    gender: "Women",
    isPromo: true
  },
  {
    id: '117',
    name: "Skechers Women's Fashion - Triple Blue set",
    price: "Rp 255.000",
    originalPrice: "Rp 1.199.000",
    discountPercentage: 79,
    image: "https://iili.io/BQ9miyQ.md.jpg",
    gallery: [
      "https://iili.io/BQ9miyQ.md.jpg",
      "https://iili.io/BQ9mP8x.md.jpg",
      "https://iili.io/BQ9mLuV.md.jpg"
    ],
    description: "Kombinasi tiga gaya dalam satu paket kenyamanan untuk wanita aktif.",
    category: "Lifestyle",
    gender: "Women",
    isPromo: true
  },
  {
    id: '118',
    name: "Skechers Women's Fashion - Lavender Trio",
    price: "Rp 265.000",
    originalPrice: "Rp 1.199.000",
    discountPercentage: 78,
    image: "https://iili.io/BQ9m6aj.md.jpg",
    gallery: [
      "https://iili.io/BQ9m6aj.md.jpg",
      "https://iili.io/BQ9mQwB.md.jpg",
      "https://iili.io/BQ9mZZP.md.jpg"
    ],
    description: "Warna lavender yang menawan untuk melengkapi koleksi harian Anda.",
    category: "Lifestyle",
    gender: "Women",
    isPromo: true
  },
  {
    id: '119',
    name: "Skechers Women's Fashion - Teal Elegance",
    price: "Rp 275.000",
    originalPrice: "Rp 1.199.000",
    discountPercentage: 77,
    image: "https://iili.io/BQ9mDn1.md.jpg",
    gallery: [
      "https://iili.io/BQ9mDn1.md.jpg",
      "https://iili.io/BQ9mbMF.md.jpg",
      "https://iili.io/BQ9mm6g.md.jpg"
    ],
    description: "Desain teal yang elegan dengan tiga sudut pandang berbeda.",
    category: "Lifestyle",
    gender: "Women",
    isPromo: true
  },
  {
    id: '120',
    name: "Skechers Women's Fashion - Minty Fresh Pack",
    price: "Rp 285.000",
    originalPrice: "Rp 1.199.000",
    discountPercentage: 76,
    image: "https://iili.io/BQ9myFa.md.jpg",
    gallery: [
      "https://iili.io/BQ9myFa.md.jpg",
      "https://iili.io/BQ9p9cJ.md.jpg",
      "https://iili.io/BQ9pd9R.md.jpg"
    ],
    description: "Kesegaran warna mint dalam desain slip-on yang praktis.",
    category: "Lifestyle",
    gender: "Women",
    isPromo: true
  },
  {
    id: '121',
    name: "Skechers Women's Fashion - Peachy Dream",
    price: "Rp 295.000",
    originalPrice: "Rp 1.199.000",
    discountPercentage: 75,
    image: "https://iili.io/BQ9p2up.md.jpg",
    gallery: [
      "https://iili.io/BQ9p2up.md.jpg",
      "https://iili.io/BQ9pFtI.md.jpg",
      "https://iili.io/BQ9pfnt.md.jpg"
    ],
    description: "Warna peach yang hangat untuk tampilan yang lebih ceria.",
    category: "Lifestyle",
    gender: "Women",
    isPromo: true
  },
  {
    id: '122',
    name: "Skechers Women's Fashion - Urban Grey Set",
    price: "Rp 305.000",
    originalPrice: "Rp 1.199.000",
    discountPercentage: 75,
    image: "https://iili.io/BQ9pqMX.md.jpg",
    gallery: [
      "https://iili.io/BQ9pqMX.md.jpg",
      "https://iili.io/BQ9pBPn.md.jpg",
      "https://iili.io/BQ9pnFs.md.jpg"
    ],
    description: "Gaya urban minimalis dengan sentuhan warna abu-abu modern.",
    category: "Lifestyle",
    gender: "Women",
    isPromo: true
  },
  {
    id: '123',
    name: "Skechers Women's Fashion - Classic Navy Wave",
    price: "Rp 315.000",
    originalPrice: "Rp 1.199.000",
    discountPercentage: 74,
    image: "https://iili.io/BQ9pocG.md.jpg",
    gallery: [
      "https://iili.io/BQ9pocG.md.jpg",
      "https://iili.io/BQ9pxSf.md.jpg",
      "https://iili.io/BQ9pI94.md.jpg"
    ],
    description: "Warna navy yang abadi untuk gaya hidup yang dinamis.",
    category: "Lifestyle",
    gender: "Women",
    isPromo: true
  },
  {
    id: '124',
    name: "Skechers Women's Fashion - Sunset Glow Pack",
    price: "Rp 325.000",
    originalPrice: "Rp 1.199.000",
    discountPercentage: 73,
    image: "https://iili.io/BQ9pTAl.md.jpg",
    gallery: [
      "https://iili.io/BQ9pTAl.md.jpg",
      "https://iili.io/BQ9puN2.md.jpg",
      "https://iili.io/BQ9p5o7.md.jpg"
    ],
    description: "Kilauan sunset dalam desain sepatu yang sangat ringan.",
    category: "Lifestyle",
    gender: "Women",
    isPromo: true
  },
  {
    id: '125',
    name: "Skechers Women's Fashion - Azure Blue Trio",
    price: "Rp 333.000",
    originalPrice: "Rp 1.199.000",
    discountPercentage: 72,
    image: "https://iili.io/BQ9p7V9.md.jpg",
    gallery: [
      "https://iili.io/BQ9p7V9.md.jpg",
      "https://iili.io/BQ9pYPe.md.jpg",
      "https://iili.io/BQ9pcKu.md.jpg"
    ],
    description: "Biru azure yang jernih untuk langkah kaki yang lebih ringan.",
    category: "Lifestyle",
    gender: "Women",
    isPromo: true
  },
  {
    id: '126',
    name: "Skechers Women's Fashion - Forest Set",
    price: "Rp 255.000",
    originalPrice: "Rp 1.199.000",
    discountPercentage: 79,
    image: "https://iili.io/BQ9plcb.md.jpg",
    gallery: [
      "https://iili.io/BQ9plcb.md.jpg",
      "https://iili.io/BQ9pEHx.md.jpg",
      "https://iili.io/BQ9pGAQ.md.jpg"
    ],
    description: "Kesan alami yang kuat dengan kenyamanan bantalan super empuk.",
    category: "Lifestyle",
    gender: "Women",
    isPromo: true
  },
  {
    id: '127',
    name: "Skechers Women's Fashion - Sand Dune Pack",
    price: "Rp 265.000",
    originalPrice: "Rp 1.199.000",
    discountPercentage: 78,
    image: "https://iili.io/BQ9pMNV.md.jpg",
    gallery: [
      "https://iili.io/BQ9pMNV.md.jpg",
      "https://iili.io/BQ9pXoP.md.jpg",
      "https://iili.io/BQ9phV1.md.jpg"
    ],
    description: "Warna pasir yang hangat untuk gaya kasual yang rileks.",
    category: "Lifestyle",
    gender: "Women",
    isPromo: true
  },
  {
    id: '128',
    name: "Skechers Women's Fashion - Night Shadow Trio",
    price: "Rp 275.000",
    originalPrice: "Rp 1.199.000",
    discountPercentage: 77,
    image: "https://iili.io/BQ9pjiF.md.jpg",
    gallery: [
      "https://iili.io/BQ9pjiF.md.jpg",
      "https://iili.io/BQ9pNKg.md.jpg",
      "https://iili.io/BQ9pOla.md.jpg"
    ],
    description: "Kombinasi warna gelap yang elegan untuk kepercayaan diri maksimal.",
    category: "Lifestyle",
    gender: "Women",
    isPromo: true
  },
  {
    id: '129',
    name: "Skechers Women's Fashion - Cherry Blossom Pack",
    price: "Rp 285.000",
    originalPrice: "Rp 1.199.000",
    discountPercentage: 76,
    image: "https://iili.io/BQ9peUJ.md.jpg",
    gallery: [
      "https://iili.io/BQ9peUJ.md.jpg",
      "https://iili.io/BQ9pvHv.md.jpg",
      "https://iili.io/BQ9p8RR.md.jpg"
    ],
    description: "Sentuhan bunga sakura yang lembut dalam setiap langkah.",
    category: "Lifestyle",
    gender: "Women",
    isPromo: true
  },
  {
    id: '130',
    name: "Skechers Women's Fashion - Smoke Grey Trio",
    price: "Rp 295.000",
    originalPrice: "Rp 1.199.000",
    discountPercentage: 75,
    image: "https://iili.io/BQ9pSNp.md.jpg",
    gallery: [
      "https://iili.io/BQ9pSNp.md.jpg",
      "https://iili.io/BQ9pUDN.md.jpg",
      "https://iili.io/BQ9prxI.md.jpg"
    ],
    description: "Warna abu-abu asap yang versatile untuk segala suasana.",
    category: "Lifestyle",
    gender: "Women",
    isPromo: true
  },
  {
    id: '131',
    name: "Skechers Women's Fashion - Ocean Breeze Pack",
    price: "Rp 305.000",
    originalPrice: "Rp 1.199.000",
    discountPercentage: 75,
    image: "https://iili.io/BQ9p4Vt.md.jpg",
    gallery: [
      "https://iili.io/BQ9p4Vt.md.jpg",
      "https://iili.io/BQ9p6iX.md.jpg",
      "https://iili.io/BQ9pifn.md.jpg"
    ],
    description: "Kesejukan angin laut dalam desain sepatu yang breathable.",
    category: "Lifestyle",
    gender: "Women",
    isPromo: true
  },
  {
    id: '132',
    name: "Skechers Women's Fashion - Mystic Purple Trio",
    price: "Rp 315.000",
    originalPrice: "Rp 1.199.000",
    discountPercentage: 74,
    image: "https://iili.io/BQ9psls.md.jpg",
    gallery: [
      "https://iili.io/BQ9psls.md.jpg",
      "https://iili.io/BQ9pLUG.md.jpg",
      "https://iili.io/BQ9pZJf.md.jpg"
    ],
    description: "Warna ungu misterius yang akan menarik perhatian.",
    category: "Lifestyle",
    gender: "Women",
    isPromo: true
  },
  {
    id: '133',
    name: "Skechers Women's Fashion - Cream Pearl Set",
    price: "Rp 325.000",
    originalPrice: "Rp 1.199.000",
    discountPercentage: 73,
    image: "https://iili.io/BQ9pDOl.md.jpg",
    gallery: [
      "https://iili.io/BQ9pDOl.md.jpg",
      "https://iili.io/BQ9pbb2.md.jpg",
      "https://iili.io/BQ9ppxS.md.jpg"
    ],
    description: "Kehalusan warna krem mutiara untuk tampilan yang bersih.",
    category: "Lifestyle",
    gender: "Women",
    isPromo: true
  },
  {
    id: '134',
    name: "Skechers Women's Fashion - Onyx Deep Pack",
    price: "Rp 333.000",
    originalPrice: "Rp 1.199.000",
    discountPercentage: 72,
    image: "https://iili.io/BQ9pyW7.md.jpg",
    gallery: [
      "https://iili.io/BQ9pyW7.md.jpg",
      "https://iili.io/BQ9y9s9.md.jpg",
      "https://iili.io/BQ9yJfe.md.jpg"
    ],
    description: "Kepekatan warna onyx untuk kesan tangguh dan modern.",
    category: "Lifestyle",
    gender: "Women",
    isPromo: true
  },
  {
    id: '135',
    name: "Skechers Women's Fashion - Ruby Flare Trio",
    price: "Rp 255.000",
    originalPrice: "Rp 1.199.000",
    discountPercentage: 79,
    image: "https://iili.io/BQ9yd0u.md.jpg",
    gallery: [
      "https://iili.io/BQ9yd0u.md.jpg",
      "https://iili.io/BQ9yFJj.md.jpg",
      "https://iili.io/BQ9yK5x.md.jpg"
    ],
    description: "Kilauan merah ruby yang berani untuk gaya yang menonjol.",
    category: "Lifestyle",
    gender: "Women",
    isPromo: true
  },
  {
    id: '136',
    name: "Skechers Women's Fashion - Silver Moon Set",
    price: "Rp 265.000",
    originalPrice: "Rp 1.199.000",
    discountPercentage: 78,
    image: "https://iili.io/BQ9yfOQ.md.jpg",
    gallery: [
      "https://iili.io/BQ9yfOQ.md.jpg",
      "https://iili.io/BQ9yqbV.md.jpg",
      "https://iili.io/BQ9yCzB.md.jpg"
    ],
    description: "Kesan futuristik dengan warna perak yang berkilau.",
    category: "Lifestyle",
    gender: "Women",
    isPromo: true
  },
  {
    id: '137',
    name: "Skechers Women's Fashion - Bronze Glow Set",
    price: "Rp 275.000",
    originalPrice: "Rp 1.199.000",
    discountPercentage: 77,
    image: "https://iili.io/BQ9yos1.md.jpg",
    gallery: [
      "https://iili.io/BQ9yos1.md.jpg",
      "https://iili.io/BQ9yI0g.md.jpg",
      "https://iili.io/BQ9yTga.md.jpg"
    ],
    description: "Warna perunggu yang hangat untuk melengkapi penampilan Anda.",
    category: "Lifestyle",
    gender: "Women",
    isPromo: true
  },
  {
    id: '138',
    name: "Skechers Women's Fashion - Sky Flare Pack",
    price: "Rp 285.000",
    originalPrice: "Rp 1.199.000",
    discountPercentage: 76,
    image: "https://iili.io/BQ9yAdJ.md.jpg",
    gallery: [
      "https://iili.io/BQ9yAdJ.md.jpg",
      "https://iili.io/BQ9yR5v.md.jpg",
      "https://iili.io/BQ9yazN.md.jpg"
    ],
    description: "Keindahan langit biru dalam setiap langkah nyaman Anda.",
    category: "Lifestyle",
    gender: "Women",
    isPromo: true
  },
  {
    id: '139',
    name: "Skechers Women's Fashion - Earthy Earth Trio",
    price: "Rp 295.000",
    originalPrice: "Rp 1.199.000",
    discountPercentage: 75,
    image: "https://iili.io/BQ9y1qX.md.jpg",
    gallery: [
      "https://iili.io/BQ9y1qX.md.jpg",
      "https://iili.io/BQ9yE1n.md.jpg",
      "https://iili.io/BQ9yGgs.md.jpg"
    ],
    description: "Warna-warna bumi yang natural dan menenangkan.",
    category: "Lifestyle",
    gender: "Women",
    isPromo: true
  },
  {
    id: '140',
    name: "Skechers Women's Fashion - Sunset Wave Set",
    price: "Rp 305.000",
    originalPrice: "Rp 1.199.000",
    discountPercentage: 75,
    image: "https://iili.io/BQ9yW7f.md.jpg",
    gallery: [
      "https://iili.io/BQ9yW7f.md.jpg",
      "https://iili.io/BQ9yXe4.md.jpg",
      "https://iili.io/BQ9yhml.md.jpg"
    ],
    description: "Transisi warna yang indah terinspirasi dari matahari terbenam.",
    category: "Lifestyle",
    gender: "Women",
    isPromo: true
  },
  {
    id: '141',
    name: "Skechers Women's Fashion - Mystic Glow Pack",
    price: "Rp 315.000",
    originalPrice: "Rp 1.199.000",
    discountPercentage: 74,
    image: "https://iili.io/BQ9ywI2.md.jpg",
    gallery: [
      "https://iili.io/BQ9ywI2.md.jpg",
      "https://iili.io/BQ9yNXS.md.jpg",
      "https://iili.io/BQ9yOL7.md.jpg"
    ],
    description: "Kilauan misterius yang memberikan sentuhan unik pada gaya Anda.",
    category: "Lifestyle",
    gender: "Women",
    isPromo: true
  },
  {
    id: '142',
    name: "Skechers Women's Fashion - Pearl Shine Trio",
    price: "Rp 325.000",
    originalPrice: "Rp 1.199.000",
    discountPercentage: 73,
    image: "https://iili.io/BQ9ykB9.md.jpg",
    gallery: [
      "https://iili.io/BQ9ykB9.md.jpg",
      "https://iili.io/BQ9yv1e.md.jpg",
      "https://iili.io/BQ9y8ru.md.jpg"
    ],
    description: "Kilau mutiara yang halus untuk penampilan yang sangat berkelas.",
    category: "Lifestyle",
    gender: "Women",
    isPromo: true
  },
  {
    id: '143',
    name: "Skechers Women's Fashion - Golden Hour Set",
    price: "Rp 333.000",
    originalPrice: "Rp 1.199.000",
    discountPercentage: 72,
    image: "https://iili.io/BQ9yg7j.md.jpg",
    gallery: [
      "https://iili.io/BQ9yg7j.md.jpg",
      "https://iili.io/BQ9yrkx.md.jpg",
      "https://iili.io/BQ9y4mQ.md.jpg"
    ],
    description: "Warna-warna hangat di waktu emas (golden hour).",
    category: "Lifestyle",
    gender: "Women",
    isPromo: true
  },
  {
    id: '144',
    name: "Skechers Women's Fashion - Ocean Deep Trio",
    price: "Rp 255.000",
    originalPrice: "Rp 1.199.000",
    discountPercentage: 79,
    image: "https://iili.io/BQ9yPIV.md.jpg",
    gallery: [
      "https://iili.io/BQ9yPIV.md.jpg",
      "https://iili.io/BQ9yihB.md.jpg",
      "https://iili.io/BQ9ysLP.md.jpg"
    ],
    description: "Kedalaman warna samudra untuk gaya yang tenang and berani.",
    category: "Lifestyle",
    gender: "Women",
    isPromo: true
  },
  {
    id: '145',
    name: "Skechers Women's Fashion - Night Sky Set",
    price: "Rp 265.000",
    originalPrice: "Rp 1.199.000",
    discountPercentage: 78,
    image: "https://iili.io/BQ9yQB1.md.jpg",
    gallery: [
      "https://iili.io/BQ9yQB1.md.jpg",
      "https://iili.io/BQ9yZEF.md.jpg",
      "https://iili.io/BQ9ytrg.md.jpg"
    ],
    description: "Terinspirasi dari langit malam yang indah and tenang.",
    category: "Lifestyle",
    gender: "Women",
    isPromo: true
  },
  {
    id: '146',
    name: "Skechers Women's Fashion - Desert Rose Trio",
    price: "Rp 275.000",
    originalPrice: "Rp 1.199.000",
    discountPercentage: 77,
    image: "https://iili.io/BQ9yb2a.md.jpg",
    gallery: [
      "https://iili.io/BQ9yb2a.md.jpg",
      "https://iili.io/BQ9ymYJ.md.jpg",
      "https://iili.io/BQ9yypR.md.jpg"
    ],
    description: "Warna mawar gurun yang eksotis and menawan.",
    category: "Lifestyle",
    gender: "Women",
    isPromo: true
  },
  {
    id: '147',
    name: "Skechers Women's Fashion - Arctic Set",
    price: "Rp 285.000",
    originalPrice: "Rp 1.199.000",
    discountPercentage: 76,
    image: "https://iili.io/BQH9HIp.md.jpg",
    gallery: [
      "https://iili.io/BQH9HIp.md.jpg",
      "https://iili.io/BQH9JhN.md.jpg",
      "https://iili.io/BQH9dQI.md.jpg"
    ],
    description: "Kesejukan kutub utara dalam desain sepatu yang modern.",
    category: "Lifestyle",
    gender: "Women",
    isPromo: true
  },
  {
    id: '148',
    name: "Skechers Performance Apparel - Active Tee Set",
    price: "Rp 159.000",
    originalPrice: "Rp 499.000",
    discountPercentage: 68,
    image: "https://iili.io/BQHI2RV.md.jpg",
    gallery: [
      "https://iili.io/BQHI2RV.md.jpg",
      "https://iili.io/BQHIdHQ.md.jpg",
      "https://iili.io/BQHI9lj.md.jpg"
    ],
    description: "Kaos performa tinggi dengan teknologi moisture-wicking untuk kenyamanan maksimal.",
    category: "Apparel",
    gender: "Women",
    isPromo: true
  },
  {
    id: '149',
    name: "Skechers Comfort Wear - Relaxed Lounge Pack",
    price: "Rp 169.000",
    originalPrice: "Rp 529.000",
    discountPercentage: 68,
    image: "https://iili.io/BQHIHUx.md.jpg",
    gallery: [
      "https://iili.io/BQHIHUx.md.jpg",
      "https://iili.io/BQHI3OB.md.jpg",
      "https://iili.io/BQHIFDP.md.jpg"
    ],
    description: "Pakaian santai yang lembut dan breathable untuk aktivitas harian Anda.",
    category: "Apparel",
    gender: "Women",
    isPromo: true
  },
  {
    id: '150',
    name: "Skechers Sport - Dynamic Training Gear",
    price: "Rp 179.000",
    originalPrice: "Rp 549.000",
    discountPercentage: 67,
    image: "https://iili.io/BQHIfx1.md.jpg",
    gallery: [
      "https://iili.io/BQHIfx1.md.jpg",
      "https://iili.io/BQHIqWF.md.jpg",
      "https://iili.io/BQHIBig.md.jpg"
    ],
    description: "Gear latihan yang fleksibel mendukung setiap gerakan atletik Anda.",
    category: "Apparel",
    gender: "Women",
    isPromo: true
  },
  {
    id: '151',
    name: "Skechers Essential - Daily Lifestyle Top",
    price: "Rp 189.000",
    originalPrice: "Rp 599.000",
    discountPercentage: 68,
    image: "https://iili.io/BQHInfa.md.jpg",
    gallery: [
      "https://iili.io/BQHInfa.md.jpg",
      "https://iili.io/BQHIo0J.md.jpg",
      "https://iili.io/BQHIxUv.md.jpg"
    ],
    description: "Atasan kasual yang stylish untuk tampilan Urban yang modern.",
    category: "Apparel",
    gender: "Women",
    isPromo: true
  },
  {
    id: '152',
    name: "Skechers Elite - Premium Comfort Apparel",
    price: "Rp 199.000",
    originalPrice: "Rp 649.000",
    discountPercentage: 69,
    image: "https://iili.io/BQHIIJR.md.jpg",
    gallery: [
      "https://iili.io/BQHIIJR.md.jpg",
      "https://iili.io/BQHITRp.md.jpg",
      "https://iili.io/BQHI5xt.md.jpg"
    ],
    description: "Koleksi premium dengan bahan terbaik untuk kenyamanan tanpa batas.",
    category: "Apparel",
    gender: "Women",
    isPromo: true
  },
  {
    id: '153',
    name: "Skechers Flex - Versatile Workout Set",
    price: "Rp 209.000",
    originalPrice: "Rp 699.000",
    discountPercentage: 70,
    image: "https://iili.io/BQHIAbI.md.jpg",
    gallery: [
      "https://iili.io/BQHIAbI.md.jpg",
      "https://iili.io/BQHIYsn.md.jpg",
      "https://iili.io/BQHIl0G.md.jpg"
    ],
    description: "Didesain untuk fleksibilitas tinggi baik di gym maupun di jalan.",
    category: "Apparel",
    gender: "Women",
    isPromo: true
  },
  {
    id: '154',
    name: "Skechers Zen - Mindful Yoga Apparel",
    price: "Rp 219.000",
    originalPrice: "Rp 729.000",
    discountPercentage: 70,
    image: "https://iili.io/BQHI0gf.md.jpg",
    gallery: [
      "https://iili.io/BQHI0gf.md.jpg",
      "https://iili.io/BQHIEJ4.md.jpg",
      "https://iili.io/BQHIG5l.md.jpg"
    ],
    description: "Bahan stretch 4-arah yang mengikuti kontur tubuh dengan sempurna.",
    category: "Apparel",
    gender: "Women",
    isPromo: true
  },
  {
    id: '155',
    name: "Skechers Pro - Athletic Performance Top",
    price: "Rp 229.000",
    originalPrice: "Rp 749.000",
    discountPercentage: 69,
    image: "https://iili.io/BQHIMe2.md.jpg",
    gallery: [
      "https://iili.io/BQHIMe2.md.jpg",
      "https://iili.io/BQHIVbS.md.jpg",
      "https://iili.io/BQHIXz7.md.jpg"
    ],
    description: "Pilihan terbaik untuk atlet profesional yang menginginkan durabilitas.",
    category: "Apparel",
    gender: "Women",
    isPromo: true
  },
  {
    id: '156',
    name: "Skechers Breeze - Airy Summer Apparel",
    price: "Rp 239.000",
    originalPrice: "Rp 769.000",
    discountPercentage: 69,
    image: "https://iili.io/BQHIhX9.md.jpg",
    gallery: [
      "https://iili.io/BQHIhX9.md.jpg",
      "https://iili.io/BQHIjse.md.jpg",
      "https://iili.io/BQHINqu.md.jpg"
    ],
    description: "Sirkulasi udara maksimal untuk menjaga Anda tetap sejuk.",
    category: "Apparel",
    gender: "Women",
    isPromo: true
  },
  {
    id: '157',
    name: "Skechers Urban - Street Style Collection",
    price: "Rp 249.000",
    originalPrice: "Rp 799.000",
    discountPercentage: 69,
    image: "https://iili.io/BQHIO0b.md.jpg",
    gallery: [
      "https://iili.io/BQHIO0b.md.jpg",
      "https://iili.io/BQHIegj.md.jpg",
      "https://iili.io/BQHIvdx.md.jpg"
    ],
    description: "Gaya jalanan ikonik dengan detail logo Skechers yang chic.",
    category: "Apparel",
    gender: "Women",
    isPromo: true
  },
  {
    id: '158',
    name: "Skechers Motion - Dynamic Flow Top",
    price: "Rp 259.000",
    originalPrice: "Rp 829.000",
    discountPercentage: 69,
    image: "https://iili.io/BQHI85Q.md.jpg",
    gallery: [
      "https://iili.io/BQHI85Q.md.jpg",
      "https://iili.io/BQHIUmB.md.jpg",
      "https://iili.io/BQHISeV.md.jpg"
    ],
    description: "Didesain untuk mengalir seiring dengan gerakan dinamis Anda.",
    category: "Apparel",
    gender: "Women",
    isPromo: true
  },
  {
    id: '159',
    name: "Skechers Alpha - Superior Quality Gear",
    price: "Rp 269.000",
    originalPrice: "Rp 849.000",
    discountPercentage: 68,
    image: "https://iili.io/BQHIrzP.md.jpg",
    gallery: [
      "https://iili.io/BQHIrzP.md.jpg",
      "https://iili.io/BQHI4X1.md.jpg",
      "https://iili.io/BQHI6LF.md.jpg"
    ],
    description: "Kualitas superior bagi mereka yang tidak ingin berkompromi.",
    category: "Apparel",
    gender: "Women",
    isPromo: true
  },
  {
    id: '160',
    name: "Skechers Vortex - Modern Athletic Apparel",
    price: "Rp 279.000",
    originalPrice: "Rp 869.000",
    discountPercentage: 68,
    image: "https://iili.io/BQHIiqg.md.jpg",
    gallery: [
      "https://iili.io/BQHIiqg.md.jpg",
      "https://iili.io/BQHIs1a.md.jpg",
      "https://iili.io/BQHIZdv.md.jpg"
    ],
    description: "Desain vortex yang modern memberikan kesan cepat and tangguh.",
    category: "Apparel",
    gender: "Women",
    isPromo: true
  },
  {
    id: '161',
    name: "Skechers Signature - Iconic Apparel Set",
    price: "Rp 299.000",
    originalPrice: "Rp 899.000",
    discountPercentage: 67,
    image: "https://iili.io/BQHIt7R.md.jpg",
    gallery: [
      "https://iili.io/BQHIt7R.md.jpg",
      "https://iili.io/BQHIDep.md.jpg",
      "https://iili.io/BQHIbmN.md.jpg"
    ],
    description: "Set ikonik Skechers yang memadukan warisan desain dengan teknologi modern.",
    category: "Apparel",
    gender: "Women",
    isPromo: true
  }
];

export const CATEGORIES = [
  { name: 'Wanita', image: 'https://cdn.phototourl.com/member/2026-05-03-b4462cdd-0c03-4f6d-b521-438774ec59ac.jpg' },
  { name: 'Pria', image: 'https://cdn.phototourl.com/member/2026-05-03-8a75e5f3-ef20-4921-8f5f-3ca149e7dcde.jpg' },
  { name: 'Anak-anak', image: 'https://cdn.phototourl.com/member/2026-05-03-877a327a-e745-42a5-90d3-edb3c877d919.jpg' },
  { name: 'Pakaian', image: 'https://images.unsplash.com/photo-1523381235212-d73f80385227?auto=format&fit=crop&q=80&w=800' },
];
