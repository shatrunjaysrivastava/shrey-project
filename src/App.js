import NewsLetter from './NewsLetter';
import styles from './styles.module.css';

function App() {
  console.log('nnnnnn');
  return (
    <div className={styles.main_container}>
      <NewsLetter />
      <div className={styles.copyright_container}>Copyright 2022 All Right Reserved By SG</div>
    </div>
  );
}

export default App;
