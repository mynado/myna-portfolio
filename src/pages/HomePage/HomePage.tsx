import style from "./HomePage.module.scss";

export default function HomePage() {
  return (
    <div className="page-container">
      <div className={style.titleContainer}>
        <span>Hi, my name is</span>
        <h1>MyNa Do.</h1>
        <h2>
          I'm a Frontend Developer with a fullstack mindset, based in Stockholm,
          Sweden.
        </h2>
        <p>
          <strong>
            Immediately available for new opportunities. I bring 5+ years of
            experience with Angular, React, and SvelteKit.
          </strong>
        </p>
      </div>
    </div>
  );
}
