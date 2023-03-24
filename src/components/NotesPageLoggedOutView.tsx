import styles from "../styles/Note.module.css";
import styleUtils from "../styles/utils.module.css";
import { Card } from "react-bootstrap";
import { MdDelete } from "react-icons/md";

const NotesPageLoggedOutView = () => {
    return (
        <Card className={`${styles.noteCard} ${styles.note}`}>
            <Card.Body className={styles.cardBody}>
                <Card.Title className= {styleUtils.flexCenter}>
                    Welcome to Blue Tasks App 
                    <br/>
                    Coming Soon
                    <MdDelete
                    className= "text-muted ms-auto"
                    />
                </Card.Title>
                <Card.Text className={styles.cardText}>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum quae rerum, non itaque at cum repellat expedita hic ipsum. Rem illo laborum corporis facere labore voluptatem repudiandae. Id, tempore debitis!
                </Card.Text>
            </Card.Body>
            <Card.Footer className= "text-muted">
                Please Login to see your Tasks
            </Card.Footer>
        </Card>
    );
}

export default NotesPageLoggedOutView;