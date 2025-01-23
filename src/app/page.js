import Link from 'next/link';

export const Home = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await res.json();

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">Blog Posts</h1>
      <ul className="grid grid-cols-5 gap-4">
        {data.map((post) => (
          <li key={post.id} className="hover:bg-gray-100 p-4 rounded-lg shadow-md transition-all">
            <Link
              href={`/blog/${post.id}`}
              className="text-blue-600 hover:text-blue-800 font-semibold text-lg"
            >
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
