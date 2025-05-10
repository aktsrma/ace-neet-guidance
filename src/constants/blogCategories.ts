
export const NEET_CATEGORIES = [
  {
    name: "Subject Strategy",
    description: "Tips and strategies for NEET subjects",
    subcategories: ["Physics", "Chemistry", "Biology"]
  },
  {
    name: "Time Management",
    description: "Study planning and time management tips",
    subcategories: ["Study Schedule", "Revision Strategy"]
  },
  {
    name: "Exam Tips",
    description: "Techniques for better exam performance",
    subcategories: ["MCQ Strategy", "Test Taking"]
  },
  {
    name: "Success Stories",
    description: "Inspiring stories from successful NEET aspirants",
    subcategories: []
  },
  {
    name: "Mock Tests",
    description: "Strategies for mock test preparation",
    subcategories: ["Practice Tests", "Analysis"]
  },
  {
    name: "Important Topics",
    description: "Must-know topics for NEET preparation",
    subcategories: ["High Yield Topics", "Previous Year Questions"]
  },
  {
    name: "Common Mistakes",
    description: "Mistakes to avoid in NEET preparation",
    subcategories: ["Study Mistakes", "Exam Mistakes"]
  }
] as const;

export type Category = typeof NEET_CATEGORIES[number]["name"];

// Export the category names as an array for easier usage in dropdowns
export const blogCategories = NEET_CATEGORIES.map(category => category.name);
