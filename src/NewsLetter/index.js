import styles from './styles.module.css';

function NewsLetter () {
    return (
        <div className={styles.newsletter_container}>
            <div className={styles.upper_container}>
                <div className={styles.upper_left_container}>
                    <div className={styles.newsletter_heading}>Newsletter</div>
                    <div className={styles.newsletter_content}>Get news about articles and updates in your inbox.</div>
                </div>
                <div className={styles.upper_right_container}>
                    <input className={styles.input_container} type="text" placeholder="NAME"/>
                    <input className={styles.input_container} type="text" placeholder="EMAIL"/>
                    <input className={styles.input_container} type="text" placeholder="MESSAGE"/>
                </div>
            </div>
            <div className={styles.lower_container}>
                <div className={styles.content_container}>
                    <div className={styles.content}>GET</div> 
                    <div className={styles.content}><div style={{marginRight:'30px'}}>IN</div><div>TOUCH</div></div>
                </div>
                <button onClick={console.log('hahahha')} className={styles.submit_button}>SEND</button>
            </div>
        </div>
    )
}

export default NewsLetter;