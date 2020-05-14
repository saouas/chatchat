import Container from '@material-ui/core/Container'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router'
import io from 'socket.io-client';
import ScrollToBottom from 'react-scroll-to-bottom';
import { css } from 'glamor';
import Users_component from './../components/users';

const CSS_SCROLL = css({
    height: 400,
    overflow: `auto`,
    overflowX:`hidden`
});

const styles = {
    container: {
        backgroundColor: "white",
        height: "570px",
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        borderRadius: "6px",
        textAlign: "center",
        maxWidth: "600px",
        minWidth: "20%",
        padding: "0"
    },
    topbar: {
        position: "relative",
        backgroundColor: "#3f51b5",
        border: "2px solid white",
        borderRadius: "6px",
        height: "60px",
        width: "100%",
        overflow:"hidden"
    },
    pastille: {
        color: "#a8ffa8",
    },
    pseudo: {
        color: "white",
        position: "absolute",
        top: "0%",
        left: "0%",
        paddingLeft: "30px",
        marginTop: "15px",
        fontSize: "20px"
    },
    close: {
        position: "absolute",
        top: "0%",
        right: "0%",
        height: "15px",
        width: "15px",
        paddingTop: "5px",
        paddingRight: "5px"
    },
    people:{
        position: "absolute",
        top: "0%",
        right: "0%",
        height: "18px",
        width: "18px",
        paddingTop: "3px",
        paddingRight: "30px"
    },
    sub_container: {
        position: "absolute",
        padding: "0"
    },
    hr: {
        padding: "0",
    },
    input_container: {
        position: "relative",
        padding: "0",
    },
    input: {
        position: "absolute",
        left: "0%",
        width:"68%",
        paddingLeft: "10px",
        marginRight: "20px",
    },
    button: {
        position: "absolute",
        right: "0%",
        marginRight: "10px",
        height: "76px",
        width:"25%"
    },
    messages: {
        overflowY: "scroll",
        display: "flex",
        flexDirection: "column",
        height: "400px",
        overflowX: "hidden"
    },
    incomingMessage: {
        borderRadius: "8px",
        backgroundColor: "#1982FC",
        minHeight: "20px",
        width: "100px",
        textAlign: "center",
        padding: "20px 5px 20px 5px",
    },
    adminMessage: {
        borderRadius: "8px",
        backgroundColor: "rgb(236, 236, 236)",
        minHeight: "20px",
        width: "100px",
        textAlign: "center",
        padding: "20px 5px 20px 5px",
    },
    myMessage: {
        borderRadius: "8px",
        backgroundColor: "#43CC47",
        minHeight: "20px",
        width: "100px",
        textAlign: "center",
        padding: "20px 5px 20px 5px",
    },
    incomingMessageList: {
        height: "100%",
        marginTop: "5px"
    },
    myMessageList: {
        height: "100%",
        marginRight: "10px"
    },
    pseudoMymessage: {
        position: "absolute",
        marginTop: "20px",
        color: "#a2a2a2",
        fontSize: "15px",
        marginLeft: "-60px",
        width: "50px",
        height: "50px",
        overflow:"hidden",

    },
    pseudoIncomingMessage: {
        position: "absolute",
        marginTop: "-40px",
        color: "#a2a2a2",
        fontSize: "15px",
        marginLeft: "110px",
        width: "50px",
        height: "50px",
        overflow: "hidden",
        marginRight:"10px"
    },
    itemIncomingMessage: {
        position: "relative",
        marginLeft: "20px",
        marginBottom: "-60px"
    },
    itemMyMessage: {
        position: "relative",
        marginRight: "50px",
        minHeight: "0px",
    },
    containerItemMyMessage: {
        position: "absolute",
        right: "0%"
    }
}

let socket;

const Chat_component = ({location}) => {
    const router = useRouter();
    const [name, setName] = useState("");
    const [room, setRoom] = useState("");
    const [messages, setMessages] = useState([]);
    const [message, setMessage] = useState([]);
    const [openModal, setOpenModal] = useState(true);
    const ENDPOINT = "localhost:8080";
    const [listUsers, setListUsers] = useState([]);

    useEffect(() => {
        const { name,room } = router.query;
        socket = io(ENDPOINT);
 
        if((name != undefined) && (room != undefined)){
            setName(name);
            setRoom(room);

            socket.emit('join', { name,room }, (error) => {
                if(error)
                    console.log(`error : ${error}`);
            })
        }
        
        return () => {
            if((name != undefined) && (room != undefined)){
                socket.emit('disconnect');
                socket.disconnect();
            }
        };

    },[router,ENDPOINT]);

    useEffect(()=>{
        socket.on('newMessage', (message) => {
            setMessages(messages => [...messages, message]);
        })

        socket.on('listUsers', (data) =>{
            setListUsers(data.users);
        })

    },[router]);

    useEffect(() => {
        console.log("valeur changer",listUsers)
    },[listUsers])

    useEffect(() => {
    console.log("state modale a changer")
    }, [openModal]);

    const sendMessage = (e) => {
        e.preventDefault();

        if(message != "" && room != undefined && name != undefined){
            socket.emit('sendMessage', ( {user: name, text: message} ), () => {
                setMessage('');
            });

            
       }
    }

    const disconnect = (e) => {
        e.preventDefault();

        socket.emit('disconnect');
        socket.disconnect();
        router.push(`/join`)
    }
    return (<div>
        <Container style={styles.container}>
            <Container style={styles.sub_container}>
                <Container style={styles.topbar}>
                    <p style={styles.pseudo}><span style={styles.pastille}>• </span>{name}</p>
                    <img style={styles.people} src="/images/people.png" onClick={() => setOpenModal(!openModal)}></img>
                    <img style={styles.close} src="/images/close.png" onClick={(e) => disconnect(e) }>
                    </img>
                </Container>

                <Grid container style={styles.messages}>
                <ScrollToBottom id="scrollToBottom" className={`${CSS_SCROLL}`}>

                    <Grid container style={styles.incomingMessageList} direction="column" spacing={8} wrap="nowrap">
                            {messages.map((message, i) => {
                                    if(message.user == name.trim().toLowerCase()){
                                        return( <Grid item key={i} id={`inboxMessage${i}`} style={styles.itemIncomingMessage} xs={12}>
                                            <Grid container key={`${i}2`} style={styles.containerItemIncomingMessage}>
                                    <Grid item key={`${i}3`} style={styles.incomingMessage}>{message.text}</Grid>
                                                <Grid key={`${i}4`} item style={styles.pseudoIncomingMessage}>{message.user}</Grid>
                                            </Grid>
                                        </Grid>)
                                    }
                                    else if (message.user == "admin"){
                                        return( <Grid item key={i} id={`inboxMessage${i}`} style={styles.itemIncomingMessage} xs={12}>
                                            <Grid container key={`${i}2`} style={styles.containerItemIncomingMessage}>
                                    <Grid item key={`${i}3`} style={styles.adminMessage}>{message.text}</Grid>
                                                <Grid key={`${i}4`} item style={styles.pseudoIncomingMessage}>Admin</Grid>
                                            </Grid>
                                        </Grid>)
                                    }
                                    else{
                                        return (<Grid item  key={i} id={`myMessage${i}`} style={styles.itemMyMessage} xs={12}>
                                            <Grid item container key={`${i}2`} style={styles.containerItemMyMessage}>
                                                <Grid item key={`${i}3`} style={styles.pseudoMymessage}>{message.user}</Grid>
                                                <Grid item key={`${i}4`} style={styles.myMessage}>{message.text}</Grid>
                                            </Grid>
                                        </Grid>)
                                    }
                                })}
                    </Grid>

                    </ScrollToBottom>

                </Grid>

                <Users_component users={listUsers} open={openModal}>
            </Users_component>
                <Grid container style={styles.input_container} fluid="true"  diction="row" >
                    <hr style={styles.hr}></hr>
                    <Grid item xs={12}>
                        <TextField
                            id="outlined-multiline-static"
                            label="Message"
                            multiline
                            rows={2}
                            variant="filled"
                            style={styles.input}
                            onChange={(e) => setMessage(e.target.value)}
                            value={message}
                            onKeyPress={(e) => (e.key === "Enter") ? sendMessage(e) : null }
                        />
                    </Grid>
              
                    <Grid item xs={6}>
                        <Button
                            id=""
                            label="Entrer"
                            color="primary"
                            size="large"
                            variant="contained"
                            style={styles.button}
                            onClick={(e) => sendMessage(e)}
                        >Envoyer</Button>
                    </Grid>
                    
                  
                </Grid>
            </Container>
        </Container>
    </div>)
};

export default Chat_component;