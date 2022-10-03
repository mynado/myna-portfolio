import style from "./HomePage.module.scss";

export default function HomePage() {
  return (
    <div className="page-container">
      <div className={style.titleContainer}>
        <span>Hi, my name is</span>
        <h1>
          MyNa Do.
          <br /> I'm a front end developer and multidisciplinary artist based in
          Stockholm, Sweden.
        </h1>
        <span>
          Currently working as a developer at{" "}
          <a href="https://bimobject.com" target="_blank" rel="noreferrer">
            <strong>BIMobject</strong>
          </a>
          .
        </span>
      </div>
    </div>
  );
}
