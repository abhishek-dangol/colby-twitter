import Head from "next/head";
import styles from "../styles/Home.module.scss";
import Post from "../components/Post";
import Bio from "../components/Post/Bio";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Bio
          headhsot="https://pbs.twimg.com/profile_images/1111467405895712768/XOR37rzU_400x400.jpg"
          name="Abhishek Dangol"
          tagline="Helping others by leading by example"
          role="Associate Software Engineer"
        />

        <ul className={styles.posts}>
          <li>
            <Post content="Het, I'm a new post!" date="4/5/2021" />
          </li>
          <li>
            <Post
              content="I'm working in Figma trying to design a new website that shows all my tweets!"
              date="3/2/2021"
            />
          </li>
          <li>
            <Post
              content="I'm working in Figma trying to design a new website that shows all my tweets!"
              date="3/2/2021"
            />
          </li>
          <li>
            <Post
              content="I'm working in Figma trying to design a new website that shows all my tweets!"
              date="3/5/2021"
            />
          </li>
        </ul>
        <form>
          <textarea className={styles.formContent}></textarea>
          <button className={styles.formButton}>Add New Post</button>
        </form>
      </main>
    </div>
  );
}
