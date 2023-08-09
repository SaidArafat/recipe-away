export interface Recipe {
  publisher: string;
  title: string;
  source_url: string;
  recipe_id: string;
  image_url: string;
  social_rank: number;
  publisher_url: string;
}

export interface Feedback {
  id: number;
  message: string;
  title: string;
  job: string;
  image: string;
}
