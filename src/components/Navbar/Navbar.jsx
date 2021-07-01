import {
  AppBar,
  Badge,
  IconButton,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import useStyles from "./styles";

const Navbar = ({ totalItems }) => {
  const classes = useStyles();
  const location = useLocation();

  return (
    <>
      <AppBar position="fixed" className={classes.appBar} color="inherit">
        <Toolbar>
          <Typography
            component={Link}
            to="/"
            variant="h6"
            className={classes.title}
            color="inherit"
          >
            <img
              src="https://www.vippng.com/png/detail/119-1195058_kakashi-obito-ms-mangekyou-sharingan.png"
              alt="susano commerce"
              height="45px"
              className={classes.image}
            />
            Eclipse
          </Typography>
          <div className={classes.grow} />
          <div className={classes.button}>
            {location.pathname === "/" && (
              <IconButton
                aria-label="Card items"
                color="inherit"
                component={Link}
                to="/cart"
              >
                <Badge badgeContent={totalItems} color="secondary">
                  <ShoppingCart />
                </Badge>
              </IconButton>
            )}
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
