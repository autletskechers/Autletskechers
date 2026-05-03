import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || '' });

export interface ProductDetails {
  name: string;
  originalPrice: number;
  discountedPrice: number;
  description: string;
  category: string;
  gender: 'Men' | 'Women' | 'Kids' | 'Unisex';
}

export async function analyzeProductImage(imageUrl: string): Promise<ProductDetails | null> {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: [
        {
          text: `Analyze this image of a Skechers product. 
          Extract the specific model name (e.g. "Skechers Slip-ins Go Walk 7").
          Estimate the original price in Indonesian Rupiah (IDR) for this type of shoe (usually between 799,000 to 1,699,000).
          Calculate the discounted price which is 21% of the original price (equivalent to a 79% discount).
          Provide a brief, professional description in Indonesian.
          Determine if it's for Men, Women, or Kids.
          Categorize it (e.g. Walking, Running, Training, Lifestyle).`
        },
        {
          inlineData: {
            mimeType: "image/jpeg",
            data: await fetchImageAsBase64(imageUrl)
          }
        }
      ],
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            name: { type: Type.STRING },
            originalPrice: { type: Type.NUMBER },
            discountedPrice: { type: Type.NUMBER },
            description: { type: Type.STRING },
            category: { type: Type.STRING },
            gender: { 
              type: Type.STRING,
              enum: ['Men', 'Women', 'Kids', 'Unisex']
            }
          },
          required: ["name", "originalPrice", "discountedPrice", "description", "category", "gender"]
        }
      }
    });

    const result = JSON.parse(response.text);
    return result as ProductDetails;
  } catch (error) {
    console.error("Error analyzing product image:", error);
    return null;
  }
}

async function fetchImageAsBase64(url: string): Promise<string> {
  const response = await fetch(url);
  const blob = await response.blob();
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      const base64String = (reader.result as string).split(',')[1];
      resolve(base64String);
    };
    reader.onerror = reject;
    reader.readAsDataURL(blob);
  });
}
