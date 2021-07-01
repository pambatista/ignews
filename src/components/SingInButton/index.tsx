import styles from './styles.module.scss'
import { FaGithub} from 'react-icons/fa'
import { FiX } from 'react-icons/fi'

const isUserLogginIn = false

export function SignInButton() {
    return isUserLogginIn ? (
        <button
            type="button"
            className={styles.signInButton}
        >
            <FaGithub color="#04d361" />
            Sing in with GitHub
            <FiX color="#737380" className={styles.closeIcon} />
        </button>
    ): (
        <button
            type="button"
            className={styles.signInButton}
        >
            <FaGithub color="#eba417" />
            Sing in with GitHub
        </button>
    )
}