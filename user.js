const user = [
  {
    _id: 1,
    title: "Introduction to MongoDB",
    content: "MongoDB is a popular NoSQL database...",
    author: "John Doe",
    comments: [
      { user: "Alice", text: "Great article!" },
      { user: "Bob", text: "Thanks for sharing." },
      { user: "Eva", text: "Its beatifull!" },
      { user: "jessy" },
    ],
    metadata: { views: 1000, likes: 50 },
  },
  {
    _id: 3,
    title: "Getting Started with NoSQL Databases",
    content: "NoSQL databases provide flexible data models...",
    author: "Sarah Williams",
    comments: [
      { user: "Eva", text: "Very helpful!" },
      { user: "Frank", text: "Clear explanations." },
    ],
    metadata: { views: 1200, likes: 40 },
  },
  {
    _id: 4,
    title: "Advanced Queries in MongoDB",
    content: "Learn how to write complex queries...",
    author: "Michael Johnson",
    comments: [
      { user: "Grace", text: "Mind-blowing content!" },
      { user: "Henry", text: "Impressive examples." },
    ],
    metadata: { views: 1500, likes: 60 },
  },
  {
    _id: 5,
    title: "Optimizing MongoDB Performance",
    content: "Tips and tricks to improve MongoDB performance...",
    author: "Alex Turner",
    comments: [
      { user: "Ivy", text: "Very practical advice!" },
      { user: "Jack", text: "Helped me a lot." },
    ],
    metadata: { views: 900, likes: 55 },
  },
  {
    _id: 6,
    title: "Schema Design Best Practices",
    content: "Designing schemas for optimal performance...",
    author: "Emily Brown",
    comments: [
      { user: "Kevin", text: "Invaluable insights!" },
      { user: "Lily", text: "Well-structured explanations." },
    ],
    metadata: { views: 700, likes: 65 },
  },
  {
    _id: 7,
    title: "Introduction to MongoDB",
    content: "MongoDB is a popular NoSQL database...",
    author: "Vinod Thapa",
    comments: [
      { user: "Alice", text: "Awesome article!" },
      { user: "Vinod", text: "Thanks for sharing." },
    ],
    metadata: { views: 1000, likes: 70 },
  },
];
 export {user}

 console.log(user[0].comments[0].user)
//  https://fetch-backend-blush.vercel.app/api/user/1