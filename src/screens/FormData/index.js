import React, { useEffect } from "react";
import { Box, Paper, Grid } from "@material-ui/core";
import { useStyles } from "./styles";
import clsx from "clsx";
import { firestore } from "../../config/Firebase/firebase";
import "firebase/firestore";
import FormControllabel from "../components/FormControllabel";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Avatar from "@material-ui/core/Avatar";
import Typography from "material-ui/styles/typography";
import BusinessIcon from "@material-ui/icons/Business";
import EmailIcon from "@material-ui/icons/Email";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import PeopleIcon from "@material-ui/icons/People";
import DateRangeIcon from "@material-ui/icons/DateRange";
export default function FormData() {
  const classes = useStyles();
  const [list, setList] = React.useState([]);
  const [show, setShow] = React.useState(false);
  useEffect(() => {
    dataFromFirebase();
  }, [list]);

  const dataFromFirebase = async () => {
    const lists = [];
    console.log("before list is " + lists);
    console.log("dataFromFirebase");
    firestore.collection("developer").onSnapshot(
      (snapshot) => {
        snapshot.forEach((doc) => {
          const {
            name,
            email,
            organization,
            developerType,
            end,
            experience,
            people,
            time,
            date,
          } = doc.data();
          lists.push({
            name: name,
            email: email,
            organization: organization,
            developerType: developerType,
            end: end,
            experience: experience,
            people: people,
            time: time,
            date: date,
          });
          console.log("kist is", lists.email);
        });
        setList(lists);
      },
      (err) => {
        console.log(err);
      }
    );
  };

  const showData = () => {
    setShow(!show);
  };

  const OtherDetails = (props) => {
    console.log("date", props.experience);
    return (
      <Box>
        <Box className={clsx(classes.box2)}>
          <Box className={clsx(classes.inbox)}>
            <h3>Experience {props.experience}</h3>
          </Box>
          <Box className={clsx(classes.outbox)}>
            <PeopleIcon /> {props.people}
          </Box>
        </Box>
      </Box>
    );
  };

  const RenderView = () => {
    console.log("data is" + JSON.stringify(list));
    return list.map((item, index) => {
      var name = item.name;
      var initials = name.match(/\b\w/g) || [];
      initials = (
        (initials.shift() || "") + (initials.pop() || "")
      ).toUpperCase();

      return (
        <Grid item xs={3}>
          <Paper elevation={3} className={clsx(classes.paper)}>
            <div className={clsx(classes.box2)}>
              <Avatar className={clsx(classes.avatar)}>
                {/* {item.name.charAt(0)} */}
                {initials}
              </Avatar>
              <div>
                <h2>{item.name}</h2>
                <h4 style={{ color: "grey" }}>
                  {item.developerType}-{item.end}
                </h4>
              </div>
            </div>
            <Box className={clsx(classes.box2)}>
              <Box className={clsx(classes.inbox)}>
                <EmailIcon color="disabled" />
                <h5>{item.email}</h5>
              </Box>
              <Box className={clsx(classes.outbox)}>
                <BusinessIcon color="disabled" />
                <h5>{item.organization}</h5>
              </Box>
            </Box>
            <Box>
              {show == true ? (
                <OtherDetails
                  experience={item.experience.label}
                  time={item.time.label}
                  people={item.people}
                  date={item.date}
                />
              ) : null}
              {show == false ? (
                <ExpandMoreIcon onClick={showData} />
              ) : (
                <ArrowUpwardIcon onClick={showData} />
              )}
            </Box>
          </Paper>
        </Grid>
      );
    });
  };
  return (
    <Box>
      <Box bgcolor="primary.main" color="primary.contrastText" p={2}></Box>
      <Box
        className={clsx(classes.box1)}
        bgcolor="primary.main"
        color="primary.contrastText"
        p={3}
      ></Box>
      <Grid className={clsx(classes.grid)} container spacing={3}>
        <RenderView />
      </Grid>
      <Box marginTop={95} bgcolor="primary.main" p={2}></Box>
      <Box
        className={clsx(classes.box)}
        //flexDirection="row"
        bgcolor="primary.main"
        color="primary.contrastText"
        p={2}
      ></Box>
    </Box>
  );
}

// <Box className={clsx(classes.box2)}>
// <Avatar className={clsx(classes.avatar)}>
//   {/* {item.name.charAt(0)} */}
//   {initials}
// </Avatar>
//               <Box className={clsx(classes.paper)}>
// <h2 style={{ marginLeft: "5%" }}>{item.name}</h2>
//                 {/* <h5>{item.end}</h5> */}
//                 <h3 style={{ color: "grey" }}>
//                   {item.developerType}-{item.end}
//                 </h3>
//               </Box>
// {/* <h4 style={{ color: "grey" }}>
//     {item.developerType}-{item.end}
//   </h4> */}
//             </Box>
// <Box className={clsx(classes.box2)}>
//   <Box className={clsx(classes.inbox)}>
//     <EmailIcon color="disabled" />
//     <h5>{item.email}</h5>
//   </Box>
//    <Box className={clsx(classes.outbox)}>
//      <BusinessIcon color="disabled" />
//      <h5>{item.organization}</h5>
//    </Box>
// </Box>
// <Box>
//   {show == true ? (
//     <OtherDetails
//       experience={item.experience.label}
//       time={item.time.label}
//       people={item.people}
//       date={item.date}
//     />
//   ) : null}
//   {show == false ? (
//     <ExpandMoreIcon onClick={showData} />
//   ) : (
//     <ArrowUpwardIcon onClick={showData} />
//   )}
// </Box>
