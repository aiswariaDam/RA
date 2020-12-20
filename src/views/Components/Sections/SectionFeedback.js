/*eslint-disable*/
import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
// core components
import styles from "assets/jss/material-kit-react/views/componentsSections/downloadStyle.js";

const useStyles = makeStyles(styles);

export default function SectionFeedback() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <GridContainer className={classes.textCenter} justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <h2>How was your experience</h2>
            <h4>
            Click on the image to replace it. To change parameters of a block, click on the blue gear icon. 
            You can set a background type and its content. Click on the Buttons parameter to enable buttons for this block. 
            Click in the text to change your text style or color. Select text to change its formatting or add links.
            </h4>
          </GridItem>
          <GridItem xs={12} sm={8} md={6}>
            <Button
              color="primary"
              size="lg"
              href=""
              target="_blank"
            >
              Know More
            </Button>
            <Button
              color="primary"
              size="lg"
              href=""
              target="_blank"
            >
              Visite
            </Button>
          </GridItem>
        </GridContainer>
        <br />
        <br />
        <GridContainer className={classes.textCenter} justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <h2>Want more?</h2>
            <h4>
              We{"'"}ve launched{" "}
              <a
                href=""
                target="_blank"
              >
                HelpU{" "}
              </a>
              Click on the image to replace it. To change parameters of a block, click on the blue gear icon. 
            You can set a background type and its content. Click on the Buttons parameter to enable buttons for this block. 
            Click in the text to change your text style or color. Select text to change its formatting or add links.
            
            </h4>
          </GridItem>
          <GridItem xs={12} sm={8} md={6}>
            <Button
              color="rose"
              size="lg"
              href=""
              target="_blank"
            >
              Company Profile
            </Button>
            <Button
              color="rose"
              size="lg"
              href=""
              target="_blank"
            >
              Our Team
            </Button>
          </GridItem>
        </GridContainer>
        <div className={classes.textCenter + " " + classes.sharingArea}>
          <GridContainer justify="center">
            <h3>Thank you for supporting us!</h3>
          </GridContainer>
          <Button color="twitter">
            <i className={classes.socials + " fab fa-twitter"} /> Tweet
          </Button>
          <Button color="facebook">
            <i className={classes.socials + " fab fa-facebook-square"} /> Share
          </Button>
          <Button color="google">
            <i className={classes.socials + " fab fa-google-plus-g"} />
            Share
          </Button>
          <Button color="github">
            <i className={classes.socials + " fab fa-github"} /> Star
          </Button>
        </div>
      </div>
    </div>
  );
}
