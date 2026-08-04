import styles from './Header.module.css'

function Header() {

  return (
    <header className={styles.header}>
      <span className={styles.logo}>Kursportalen</span>
      <nav className={styles.nav}>
        <a href="/" className={styles.navLink}>Startsida</a>
        <a href="/" className={styles.navLink}>Kurser</a>
        <a href="/" className={styles.navLink}>Kontakt</a>
      </nav>
    </header>
  )
}

export default Header