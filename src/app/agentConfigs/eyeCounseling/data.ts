export interface EyeArticle {
  keywords: string[];
  answer: string;
}

export const eyeArticles: EyeArticle[] = [
  {
    keywords: ["白内障", "cataract"],
    answer: "白内障は水晶体が濁って視力が低下する病気です。治療には手術が一般的です。",
  },
  {
    keywords: ["緑内障", "glaucoma"],
    answer: "緑内障は視神経が障害される病気で、早期発見と継続的な点眼治療が重要です。",
  },
  {
    keywords: ["ドライアイ", "dry eye"],
    answer: "ドライアイは涙の量や質が低下することで目が乾く状態で、人工涙液の使用が有効です。",
  },
  {
    keywords: ["ものもらい", "麦粒腫", "霰粒腫"],
    answer: "ものもらいはまぶたの腫れで、清潔を保ち必要に応じて医師の診察を受けます。",
  },
];

export function findEyeDiseaseInfo(question: string): string {
  const lowerQ = question.toLowerCase();
  for (const article of eyeArticles) {
    for (const key of article.keywords) {
      if (lowerQ.includes(key.toLowerCase())) {
        return article.answer;
      }
    }
  }
  return "申し訳ありません、該当する情報が見つかりませんでした。";
}
