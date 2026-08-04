import styles from './InfoSection.module.css'

function InfoSection() {

  return (
    <div className={styles.infoSection}>
      <h1 className={styles.header}>Lär dig bygga moderna webbapplikationer</h1>
      <p className={styles.description}>Praktiska kurser inom webbutveckling, design och moderna verktyg.</p>
      {/* todo fix buttons */}
      <div>
        <button>Hej 1</button>
        <button>Hej 2</button>
      </div>
    </div>
  )
}

export default InfoSection