/* eslint-disable jsx-a11y/alt-text */
import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import BusinessLaw from "../../../assets/BusinessLaw.svg";
import PartnershipLaw  from "../../../assets/partnershipLaw.svg";
import Realestate  from "../../../assets/Realestate.svg";
import Business2  from "../../../assets/Business2.svg";
import Landlord  from "../../../assets/Landlord.svg";
import Elder from "../../../assets/Elder.svg";
import classes from "./fullWidthGrid.module.css";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function FullWidthGrid() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={6} md={8}>
          <Item className={classes.itemContainer}>
            <img src={BusinessLaw}/>
          </Item>
        </Grid>
        <Grid item xs={6} md={4}>
          <Item className={classes.itemContainer}>
          <img src={PartnershipLaw}/>
          </Item>
        </Grid>
        <Grid item xs={6} md={4}>
          <Item className={classes.itemContainer}>
          <img src={Realestate}/>
          </Item>
        </Grid>
        <Grid item xs={6} md={8}>
          <Item className={classes.itemContainer}>
          <img src={Business2}/>
          </Item>
        </Grid>
        <Grid item xs={6} md={8}>
          <Item className={classes.itemContainer}>
          <img src={Landlord}/>
          </Item>
        </Grid>
        <Grid item xs={6} md={4}>
          <Item className={classes.itemContainer}>
          <img src={Elder}/>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
