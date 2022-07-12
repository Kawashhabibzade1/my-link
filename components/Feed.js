/** @format */

import CreateIcon from "@mui/icons-material/Create";
import { useEffect, useState } from "react";
import InputOption from "./InputOption";
import styles from "/styles/Feed.module.css";
import ImageIcon from "@mui/icons-material/Image";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import EventNoteIcon from "@mui/icons-material/EventNote";
import CalendarViewDayIcon from "@mui/icons-material/CalendarViewDay";
import Post from "./Post";
import { db } from "./firebase";
import firebase from "firebase/compat/app";

const Feed = () => {
  const [input, setInput] = useState("");
  const [posts, setPosts] = useState([]);
  const [show, setShow] = useState(false);
  const onDbao = () => setShow(true);
  console.log(show);

  // useEffect(() => {
  //   db.collection("posts").onSnapshot((snapshot) =>
  //     setPosts(
  //       snapshot.docs.map((doc) => ({
  //         id: doc.id,
  //         data: doc.data(),
  //       }))
  //     )
  //   );
  // }, []);

  const sendPost = (e) => {
    e.preventDefault();
  };
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
                value={input}
                onChange={(e) => setInput(e.target.value)}
              />
              {show ? (
                <button type="submit" onClick={sendPost}>
                  Send
                </button>
              ) : null}
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

        <Post name="kawash" descr="testing description" message="hello Guys" />
        <Post name="kawash" descr="testing description" message="hello Guys1" />
        <Post name="kawash" descr="testing description" message="hello Guys2" />
        <Post name="kawash" descr="testing description" message="hello Guys3" />
        <Post name="kawash" descr="testing description" message="hello Guys3" />
        <Post name="kawash" descr="testing description" message="hello Guys3" />
        <Post name="kawash" descr="testing description" message="hello Guys3" />
        <Post name="kawash" descr="testing description" message="hello Guys3" />
      </div>
    </>
  );
};

export default Feed;
