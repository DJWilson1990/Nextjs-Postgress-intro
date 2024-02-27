import Image from "next/image";
import { sql } from "@vercel/postgres";

export default async function Posts() {
  const posts = await sql`SELECT * FROM posts;`;

  return (
    <div className="m-6 border-2 border-solid border-red-300">
      <h1 className="text-center text-4xl font-bold">POSTS</h1>
      <ul>
        {posts.rows.map((post) => (
          <li key={post.id} className="text-center text-indigo-500 m-2">
            {post.title}:{post.content}
          </li>
        ))}
      </ul>
    </div>
  );
}
