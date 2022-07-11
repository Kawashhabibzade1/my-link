/** @format */

import styles from "/styles/Post.module.css";
const Post = ({ name, descr, message, photoUrl }) => {
  return (
    <>
      <div className={styles.post}>
        <div className={styles.post__header}>
          <img
            src="https://media-exp2.licdn.com/dms/image/C4D03AQFUWjDlOD8vXQ/profile-displayphoto-shrink_100_100/0/1612563234794?e=1661990400&v=beta&t=WvKeZnMoBBM2OxaC3o-NTlZUZpNeqCm6vKooQwDYSI4"
            alt="avatar"
            className="w-[2.5rem] h-[2.5rem] shadow-md rounded-full shadow-gray-400 bg-slate-200"
          />
          <div className={styles.post__info}>
            <h1>Mir Kawash Habibzade</h1>
            <h4 className="font-[300] text-gray-400 text-[0.6rem]">{descr}</h4>
          </div>
        </div>

        <div className="post__body">
          <p>{message}</p>
        </div>
      </div>
    </>
  );
};

export default Post;
