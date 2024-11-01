import React from 'react'
import styles from './Navigation.module.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
function Navigation() {
    return (
        <div className={styles.container}>
            <div className={styles.menu}>
                <div className={styles.social}>
                    <button type="button">
                        Seller Centre
                    </button>
                    <button type="button">
                        Download
                    </button>
                    <div className={styles.social_icon}>
                        Follow us on
                        <i className='bi bi-instagram'></i>
                        <i className='bi bi-facebook'></i>
                    </div>

                </div>
                <div className={styles.auth_form}>
                    <div className={styles.nav_tool}>
                        <button type="button">
                            <i className='bi bi-bell'></i>
                            Notifications
                        </button>
                        <button type="button">
                            <i className='bi bi-info-circle'></i>
                            Help
                        </button>
                    </div>
                    <div className={styles.sign}>
                        <button type="button">Login</button>
                        <button type="button">Registers</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navigation