import styles from "./App.module.css";
import { Header } from "./components/Header/Header";
import { Post } from "./components/Posts/Post";
import { Sidebar } from "./components/Sidebar/Sidebar";
import "./global.css";

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/luanastephany.png",
      name: "Luana Stephany",
      role: "Web Developer",
    },
    content: [
      { type: "paragraph", content: "Hi there 👋" },
      { type: "paragraph", content: "How are you today? Here is my website" },
      { type: "link", content: "jane.design/doctorcare" },
    ],
    publishedAt: new Date("2022-10-24 20:00:00"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/hygorchristian.png",
      name: "Hygor Christian",
      role: "Full stack developer",
    },
    content: [
      { type: "paragraph", content: "Hi there 👋" },
      { type: "paragraph", content: "How are you today? Here is my website" },
      { type: "link", content: "jane.design/doctorcare" },
    ],
    publishedAt: new Date("2022-10-23 22:00:00"),
  },
];

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => {
            return (
              <Post
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            );
          })}
        </main>
      </div>
    </div>
  );
}
