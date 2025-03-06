// page for individual post
// need to see comments related to this post
import pg from "pg";

export default async function Page({ params }) {
  const slug = await params;
  const db = new pg.Pool({ connectionString: process.env.DB_CONN });
  const post = await db.query(`SELECT * FROM posts WHERE id = ${slug.id}`);
  // need [0] to display the singular
  const singlePost = post.rows[0];

  return (
    <div>
      <h1>{singlePost.title}</h1>
      <p>{singlePost.content}</p>
    </div>
  );
}
