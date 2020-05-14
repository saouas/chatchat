import React,{ useState } from "react";
import Router from 'next/router';
import Container from '@material-ui/core/Container'
import Button from '@material-ui/core/Button';

const styles = {
        form:{
            backgroundColor:"white",
            maxHeight:"600px",
            position:"fixed",
            top:"50%",
            left:"50%",
            transform:"translate(-50%, -50%)",
            borderRadius:"6px",
            textAlign:"center",
            minWidth:"30%",
        },
        textField:{
            marginLeft:"50px",
            marginRight:"50px",
            marginBottom:"30px",
            width:"210px",
            height:"30px",
        },
        title:{
            textAlign:"center",
            fontFamily:"Comic Sans MS, cursive, sans-serif",
            fontSize:"28px",
            color:"#4141af",
            marginBottom:"60px"
        },
        button:{
            marginTop:"20px",
            marginBottom:"30px"
        },
        footer:{
            color:"#3520a1",
            paddingBottom:"20px"
        },
        label:{
            width:"50px",
            textAlign:"left",
            display:"inline-block",
            color:"rgb(65, 65, 175)",
            marginLeft:"10px"
        },
        labelText:{
            fontFamily:"Comic Sans MS, cursive, sans-serif"
        }
}

const Join_component = () => {
    const [name, setName] = useState("");
    const [room, setRoom] = useState("");

    return(<div>
        <Container >
            <form style={styles.form}>
            <h2 style={styles.title}>ChatChat</h2>
                <label style={styles.label} htmlFor="pseudonyme"><p style={styles.labelText}>Pseudo</p></label>
                <input
                id="pseudonyme"
                label="Pseudonyme"
                type="Pseudonyme"
                autoComplete="current-password"
                variant="outlined"
                style={styles.textField}
                type="text"
                onChange={e => setName(e.target.value)}
                                />

                <br></br>

                <label style={styles.label} htmlFor="pseudonyme"><p style={styles.labelText}>Room</p></label>
                <input
                id="room"
                label="Room"
                type="Room"
                autoComplete="current-password"
                variant="outlined"
                style={styles.textField}
                type="text"
                onChange={e => setRoom(e.target.value)}
                                />

                <br></br>

                <Button
                id=""
                label="Entrer"
                color="primary"
                size="large"
                variant="contained"
                style={styles.button}
                onClick={(e) => (name && room) ? Router.push(`/chat?name=${name}&room=${room}`) : e.preventDefault()}
                >Entrer</Button>
                

                <p style={styles.footer}>Made with ❤️ by Salim Aouas</p>
            </form>
        </Container></div>
    )

};


 export default Join_component;