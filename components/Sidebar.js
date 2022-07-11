import styles from "/styles/Sidebar.module.css";

const Sidebar = () => {
  const RecentItems = (topics) => {
    return (
      <>
        <div className={styles.sidebar__RecentItem}>
          <span className={styles.sidebar__hash}>#</span>
          <p>{topics}</p>
        </div>
      </>
    );
  };
  return (
    <>
      <div className={styles.sidebar} id="display">
        <div className={styles.sidebar__top}>
          <img
            src="https://images.unsplash.com/photo-1516321497487-e288fb19713f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
            alt="bg"
            className={styles.sidebar__bg}
          />
          <img
            src="https://media-exp2.licdn.com/dms/image/C4D03AQFUWjDlOD8vXQ/profile-displayphoto-shrink_100_100/0/1612563234794?e=1661990400&v=beta&t=WvKeZnMoBBM2OxaC3o-NTlZUZpNeqCm6vKooQwDYSI4"
            alt="avatar"
            className="w-[4rem] h-[4rem] shadow-md rounded-full shadow-gray-400 bg-slate-200"
          />
          <h2>Mir Kawash Habibzade</h2>
          <h4 className="font-[300] text-gray-400">
            Creative Head at Neuronious
          </h4>
          <br />
        </div>
        <div className={styles.sidebar__stats}>
          <div className={styles.sidebar__stat}>
            <h6>Connections</h6>
            <p className={styles.stats__number}> 1236 Connects</p>
          </div>
          <div className={styles.sidebar__stat}>
            <h6>Who viewed you </h6>
            <p className={styles.stats__number}> 1000 Views</p>
          </div>
        </div>
        <div className={styles.sidebar__bottom}>
          <p className="text-[14px] font-[300]">Recents</p>
          {RecentItems("ReactJs")}
          {RecentItems("development")}
          {RecentItems("coding")}
          {RecentItems("NextJs")}
          {RecentItems("developer")}
        </div>
      </div>
    </>
  );
};

export default Sidebar;