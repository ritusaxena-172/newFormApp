import { makeStyles, withStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  box: {
    position: "absolute",
    height: "50%",
    transform: "translate(0%, -100%)",
  },
  box1: {
    position: "absolute",
    height: "50%",
    transform: "translate(2950%, -10%)",
  },
  avatar: {
    width: 100,
    fontSize: 40,
    height: 100,
  },
  paper: {
    padding: "2%",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    display: "flex",
    // width: "100%",
    // height: "100%",
  },
  box2: {
    padding: "2%",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    display: "flex",
  },
  text: {
    padding: "1%",
  },
  inbox: {
    margin: "1%",
    paddingRight: "1%",
    alignItems: "center",
    flexDirection: "row",
    display: "flex",
    width: "110%",
    height: "50%",
    // backgroundColor: "grey",
    borderRadius: "15px !important",
  },
  outbox: {
    paddingLeft: "1%",
    alignItems: "center",
    flexDirection: "row",
    display: "flex",
    width: "110%",
    height: "40%",
    // backgroundColor: "grey",
    borderRadius: "20px !important",
  },
}));
