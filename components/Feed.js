/** @format */

import CreateIcon from "@mui/icons-material/Create";
import { useState } from "react";
import InputOption from "./InputOption";
import styles from "/styles/Feed.module.css";
import ImageIcon from "@mui/icons-material/Image";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import EventNoteIcon from "@mui/icons-material/EventNote";
import CalendarViewDayIcon from "@mui/icons-material/CalendarViewDay";
import Post from "./Post";

const Feed = (props) => {
  const [show, setShow] = useState(false);
  const onDbao = () => setShow(true);
  console.log(show);
  return (
    <>
      <div className={styles.feed}>
        <div className={styles.feed__inputcontainer}>
          <div className={styles.feed__input} id="media1">
            <CreateIcon />
            <form>
              <input
                type="text"
                placeholder="Search"
                onFocus={onDbao}
                id="media2"
              />
              {show ? <button type="submit">Send</button> : null}
            </form>
          </div>
          <div className={styles.feed__inputoption}>
            <InputOption title="photos" color="#70B5F9" Icons={ImageIcon} />
            <InputOption
              title="video"
              color="#E7A33E"
              Icons={SubscriptionsIcon}
            />
            <InputOption title="Events" color="#C0CBCD" Icons={EventNoteIcon} />
            <InputOption
              title="Write Article"
              color="#7FC15E"
              Icons={CalendarViewDayIcon}
            />
          </div>
        </div>
        <Post
          name="Mir Kawash Habibzade"
          descr="Description"
          message="messasge goes here"
        />
      </div>
    </>
  );
};

export default Feed;
