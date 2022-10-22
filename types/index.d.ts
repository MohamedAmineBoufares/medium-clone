export interface Post {
  _id: string;
  createdAt: string;
  title: string;

  author: {
    name: string;
    image: string;
  };

  description: string;

  mianImage: {
    asset: {
      url: string;
    };
  };

  slug: {
    current: string;
  };

  body: [object];
}
