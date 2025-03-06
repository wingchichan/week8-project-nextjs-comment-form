// page for all posts
import pg from "pg";
import Link from "next/link";

export default async function AllPosts() {
  const db = new pg.Pool({ connectionString: process.env.DB_CONN });

  const data = await db.query(`SELECT * FROM posts`);
  //   returns the useful data we need
  const posts = data.rows;
  console.log(posts);

  return (
    <div>
      {posts.map((post) => (
        <div key={post.id}>
          {/* ${post.id} ensures it takes you to the correct dynamic route depending on what the user clicks */}
          <Link href={`/posts/${post.id}`}>{post.title}</Link>
        </div>
      ))}
    </div>
  );
}
