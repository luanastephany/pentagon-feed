import styles from "./App.module.css";
import { Header } from "./components/Header/Header";
import { Sidebar } from "./components/Sidebar/Sidebar";
import "./global.css";
import { Post } from "./Post";

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post author="Luana" content="A new post" />
        </main>
      </div>
    </div>
  );
}
