import 'bootstrap/dist/css/bootstrap.css';
import styles from './navbar.module.css';

export default function Navbar(props) {
    return(
        <div className={`${styles.navbar}`}>
            <div className={`container`}>
                <div className={`row justify-content-between`}>
                    <div className={`col mt-4`}>
                        { !props.isPlaying && <div className={`${styles.title}`}>EveryLine</div> }
                    </div>
                </div>
            </div>
        </div>
    )
}



