import React, { useState, useEffect } from 'react';
import './App.css';
import Post from './Post';
import { db } from './firebase';
import { makeStyles } from '@mui/styles';
import Modal from '@mui/material/Modal';
import { Button } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';


function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)` ,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper, 
    border: '2px solid #080',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

function App() {
  const classes = useStyles();
  const theme = createTheme();
  const [modalStyle] = useState(getModalStyle);
  
  const [posts, setPosts] = useState([]);
  const [open, setOpen] = useState(false);
  //useEffect: Runs a piece of code based on a specific condition

  useEffect(() => {
    //this is where the code runs
    db.collection('posts').onSnapshot(snapshot => {
      //Everytime a new post is added, this line of code activates
      setPosts(snapshot.docs.map(doc => ({
        id: doc.id, 
        post: doc.data()
      })))
    })   //"posts" inside of firebase also everytime a document gets modified inside of post it takes a screenshot

  }, [] );   //conditions go here and there just variables 



  return (
    <div className="App">
      <ThemeProvider theme={theme}></ThemeProvider>;
      <Modal
        open={open}
        onClose={() => setOpen(false)}
      >
        <div style={modalStyle} className={classes.paper}>
          <h2>I am a modal</h2>
        </div>
      </Modal>
      <div className="app__header">
        <img 
          className="app__headerImage"
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png" 
          alt="instagram_text"
        />
      </div>

      <Button></Button>

      <h1>Hello clever programmers let's build a react app!!!</h1>
      
      {
        posts.map(({id, post}) => (
          <Post key={id} username={post.username} caption={post.caption} imageUrl={post.imageUrl} />
        ))
      }
    </div>
  );
}

export default App;
