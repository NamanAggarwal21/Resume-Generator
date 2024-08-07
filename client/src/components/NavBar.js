import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";


const useStyles = makeStyles((theme) => ({
  sizeAvatar: {
    height: theme.spacing(4),
    width: theme.spacing(4),
  },
}));

const NavBar = () => {
  const classes = useStyles();
  const [user, setUser] = useState({});

  const logout = () => {
    localStorage.removeItem("user");
    window.location.replace("/");
  };

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    const theUser = localStorage.getItem("user");

    if (theUser && !theUser.includes("undefined")) {
      setUser(JSON.parse(theUser));
    }
  }, []);

  return (
 
    <div  >
        <div  className="navbar">
            <span className="fancy">
              RESUME BUILDER
            </span>
            <div className="avatar-icon">
                {/* AVATAR ICON */}
                {user?.email ? (
                  <IconButton onClick={handleClickOpen}>
                    <Avatar src={user.picture} alt={user.firstName} className={classes.sizeAvatar} ></Avatar>
                  </IconButton>
                ) : (
                  <></>
                )}
            </div>
            
        </div>
        

        <Dialog
          open={open}
          onClose={handleClose}
        >
              <DialogTitle id="alert-dialog-title" >{"Logout ?  "} </DialogTitle>
              <DialogContent   >
                <DialogContentText id="alert-dialog-description">
                  Are you sure you want to logout ?
                </DialogContentText>
              </DialogContent>
              <DialogActions    >
                <Button onClick={logout}  style={{color:'red',fontSize:'17px'}}>Yes</Button>
                <Button onClick={handleClose} style={{color:'green',fontSize:'17px'}} autoFocus>
                  No
                </Button>
              </DialogActions>
          
          
        </Dialog>

      
    </div>

  );
};

export default NavBar;