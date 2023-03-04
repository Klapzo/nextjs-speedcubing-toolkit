import MainButton from '../MainButton/MainButton'
import styles from './title.module.css'
function Title () {
  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.title}>SPEEDCUBING TOOLKIT</h1>
        <MainButton />

      </div>
    </>

  )
}

export default Title
