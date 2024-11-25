import Header from "../partials/Header";
import Footer from "../partials/Footer";
import * as React from "react";

import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import Img from "./imgUrl";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";

function ViewParents() {
  const [data, setData] = useState([]);
  const [student, setStudentData] = useState([]);

  const [expanded, setExpanded] = React.useState(false);
  const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme }) => ({
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
    variants: [
      {
        props: ({ expand }) => !expand,
        style: {
          transform: "rotate(0deg)",
        },
      },
      {
        props: ({ expand }) => !!expand,
        style: {
          transform: "rotate(180deg)",
        },
      },
    ],
  }));

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  useEffect(() => {
    fetch("http://localhost:4000/admin/viewParents")
      .then((res) => res.json())
      .then((result) => {
        console.log("parents", result);
        setData(result);
      });
    fetch("http://localhost:4000/admin/viewStudents")
      .then((res) => res.json())
      .then((result) => {
        console.log("studentsss", result);
        setStudentData(result);
      });
  }, []);

  return (
    <>
      <Header />
      <div className="row m-3">
        {data.map((item, index) => (
          <Card
            sx={{ maxWidth: 345 }}
            className="col-4  me-3 bg-secondary"
            // style={{ backgroundColor: "#FF4500" }}
          >
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                  R
                </Avatar>
              }
              action={
                <IconButton aria-label="settings">
                  <MoreVertIcon />
                </IconButton>
              }
              title={item.parentRegID.name}
              subheader="September 14, 2016"
            />
            <CardMedia
              component="img"
              height="194"
              image={Img + item.parentRegID.image}
              alt="Paella dish"
            />
            <CardContent>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                Students:{" "}
              </Typography>
              {student
                .filter((items) => items.parent_id === item._id)
                .map((items, index) => (
                  <Typography variant="body2" sx={{ color: "text.secondary" }}>
                    {items.studentRegID.name}
                  </Typography>
                ))}
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>
              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton>
              <ExpandMore
                expand={expanded}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </ExpandMore>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography sx={{ marginBottom: 2 }}>Method:</Typography>
                <Typography sx={{ marginBottom: 2 }}>
                  Heat 1/2 cup of the broth in a pot until simmering, add
                  saffron and set aside for 10 minutes.
                </Typography>
                <Typography sx={{ marginBottom: 2 }}>
                  Heat oil in a (14- to 16-inch) paella pan or a large, deep
                  skillet fragrant, about 10 minutes. Add saffron broth and
                  remaining 4 1/2 cups chicken broth; bring to a boil.
                </Typography>
                <Typography sx={{ marginBottom: 2 }}>
                  Add rice and stir very gently to distribute. Top with
                  artichokes ain without stirring, until mussels have opened and
                  rice is just tender, 5 to 7 minutes more. (Discard any mussels
                  that don&apos;t open.)
                </Typography>
                <Typography>
                  Set aside off of the heat to let rest for 10 minutes, and then
                  serve.
                </Typography>
              </CardContent>
            </Collapse>
          </Card>
        ))}
      </div>
      <Footer />
    </>
  );
}

export default ViewParents;
