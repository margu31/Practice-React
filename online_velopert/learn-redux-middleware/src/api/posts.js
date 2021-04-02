const sleep = n => new Promise(resolve => setTimeout(resolve, n));
// sleep(1000).then(() => console.log('Hello World'));

// { id, title, body }
const posts = [
  {
    id: 1,
    title: '황민현 별명',
    body: '황미녀, 사막여우'
  },
  {
    id: 2,
    title: '황민현 생일',
    body: '950805'
  },
  {
    id: 3,
    title: '민혀니 최고, 뉴이스트 최고',
    body: '곧 신곡 나와요'
  },
];

export const getPosts = async() => {
  await sleep(500);
  return posts;
};

export const getPostById = async (id) => {
  await sleep(500);
  return posts.find(post => post.id === id);
};
