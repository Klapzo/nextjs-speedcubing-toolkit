import styles from './title.module.css'
function Title ({ buttonExpanded }) {
  return (
    <>
      <h1 className={styles.title + ' ' + (buttonExpanded && styles.buttonExpanded)}>SPEEDCUBING TOOLKIT</h1>

    </>

  )
}

export default Title
