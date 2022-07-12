/** @format */

import InputOption from "./InputOption";
import ThumbUpAltOutlinedIcon from "@mui/icons-material/ThumbUpAltOutlined";
import styles from "/styles/Post.module.css";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
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
            <h1>{name}</h1>
            <h4 className="font-[300] text-gray-400 text-[0.6rem]">{descr}</h4>
          </div>
        </div>

        <div className={styles.post__body}>
          <p>{message}</p>
        </div>
        <div className={styles.post__buttons}>
          <InputOption
            title="Like"
            color="gray"
            Icons={ThumbUpAltOutlinedIcon}
          />
          <InputOption title="Comment" color="gray" Icons={ChatOutlinedIcon} />
          <InputOption title="Share" color="gray" Icons={ShareOutlinedIcon} />
          <InputOption title="Send" color="gray" Icons={SendOutlinedIcon} />
        </div>
      </div>
    </>
  );
};

export default Post;
