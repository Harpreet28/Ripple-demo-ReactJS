import React from "react";
import { Card, CardContent } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ButtonBase from "@material-ui/core/ButtonBase";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
  card: {
    width: 400,
    height: 400,
    color: "white",
    backgroundColor: "black"
  },
  title: {
    marginBottom: 20,
    fontSize: 20,
    color: "white"
  },
  pos: {
    marginTop: 50,
    marginBottom: 20,
    color: "white"
  },
  buttonRipple: {
    color: "white",
    opacity: 0.3
  }
}));

export default function PolarrRipple() {
  const classes = useStyles();

  return (
    <div>
      <ButtonBase
        TouchRippleProps={{
          classes: { rippleVisible: classes.buttonRipple }
        }}
      >
        <Card className={classes.card}>
          <CardContent>
            <Typography className={classes.title} color="textSecondary">
              Polarr
            </Typography>
            <Typography variant="headline" component="h2">
              Ripple Component
            </Typography>
            <Typography className={classes.pos} color="textSecondary">
              Click anywhere to see ripple effect
            </Typography>
          </CardContent>
        </Card>
      </ButtonBase>
    </div>
  );
}
