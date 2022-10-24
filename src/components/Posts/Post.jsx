import { Avatar } from "../Avatar/Avatar";
import { Comment } from "../Comment/Comment";
import styles from "./Post.module.css";

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src="https://github.com/luanastephany.png" />

          <div className={styles.authorInfo}>
            <strong>Luana</strong>
            <span>web developer</span>
          </div>
        </div>

        <time dateTime="2022-10-21 08:13:30">1h ago</time>
      </header>

      <div className={styles.content}>
        <p>Hi there 👋</p>
        <p>How are you today? Here is my website</p>
        <p>
          <a href=""> 👉 jane.design/doctorcare</a>
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Leave a comment</strong>
        <textarea placeholder="Write your feedback" />
        <footer>
          <button type="submit">Post</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  );
}
