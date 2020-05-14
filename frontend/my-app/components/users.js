import Modal from 'react-modal';
import { useState, useEffect } from 'react';
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid';

const styles = {
    content : {
        top                   : '50%',
        left                  : '50%',
        right                 : 'auto',
        bottom                : 'auto',
        marginRight           : '-50%',
        transform             : 'translate(-50%, -50%)',
      },
    container:{
    },
    user: {
        height:"30px",
        width:"30px",
        position:"absolute"
    },
    user_name: {
        fontFamily: "Comic Sans Ms",
        fontSize: "18px",
        color: "#030311",
        marginLeft:"40px",
        position:"absolute",
        marginTop:"2px",
    },
    item:{
        height:"40px",
        position:"relative"
    },
}
const Users_component = (props) => {
    useEffect(() => {
        setUsersList(props.users);  
    },[props.users]);

    useEffect(()=>{
        console.log('la')
        console.log('props',props.open)
        console.log('f',firstTime)
        if(firstTime && props.open)
            setFirstTime(false);  
        else
            openModal()
   
    },[props.open])

    const [modalIsOpen,setIsOpen] = useState(false);
    const [usersList, setUsersList] = useState([])
    let [firstTime, setFirstTime] = useState(true);
    let subtitle;

    const openModal = () => {
      setIsOpen(true);
    };
  
    const afterOpenModal = () => {
       // subtitle.style.color = '#f00';
    };

    const closeModal = () => {
        setIsOpen(false);
    }
  
    return (
        <div>
            <Modal
            ariaHideApp={false}
            isOpen={modalIsOpen}
            onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            style={styles.content}
            contentLabel="Example Modal"
            >
            <Container>
                <Grid container styles={styles.container} direction="column" alignContent="flex-start">
                    {usersList.map((user, id)=>{
                        return(<Grid item key={id} xs={12} style={styles.item} >
                            <img key={`img${id}`} src="/images/user.png" style={styles.user} />
                            <p key={`paragraph${id}`} style={styles.user_name}>{user}</p>
                        </Grid>)
                    })}
                </Grid>
            </Container>
            </Modal>
        </div>)
}


export default Users_component;