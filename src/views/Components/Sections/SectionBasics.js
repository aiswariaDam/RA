import React from "react";
// plugin that creates slider
import Slider from "nouislider";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Radio from "@material-ui/core/Radio";
import Switch from "@material-ui/core/Switch";
// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite";
import People from "@material-ui/icons/People";
import Check from "@material-ui/icons/Check";
import FiberManualRecord from "@material-ui/icons/FiberManualRecord";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import CustomLinearProgress from "components/CustomLinearProgress/CustomLinearProgress.js";
import Paginations from "components/Pagination/Pagination.js";
import Badge from "components/Badge/Badge.js";

import styles from "assets/jss/material-kit-react/views/componentsSections/basicsStyle.js";

const useStyles = makeStyles(styles);

export default function SectionBasics() {
  const classes = useStyles();
  const [checked, setChecked] = React.useState([24, 22]);
  const [selectedEnabled, setSelectedEnabled] = React.useState("b");
  const [checkedA, setCheckedA] = React.useState(true);
  const [checkedB, setCheckedB] = React.useState(false);
 
  const handleToggle = value => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    setChecked(newChecked);
  };
  return (
    <div className={classes.sections}>
      <div className={classes.container}>
        <div className={classes.title}>
          <h2>Basic Elements</h2>
        </div>
        <div id="Sample">
          <div className={classes.title}>
            <h3>
            Sample
              <br />
              <small>Click on the image to replace it. 
                To change parameters of a block, click on the blue gear icon. 
                You can set a background type and its content. Click on the Buttons parameter to enable buttons for this block. Click in the text to change your text style or color. Select text to change its formatting or add links.</small>
            </h3>
          </div>
          
        </div>
        <div className={classes.space50} />
        
        <div id="inputs">
          <div className={classes.title}>
            <h3>Our Services
            <br />
              <small>Click on the image to replace it. 
                To change parameters of a block, click on the blue gear icon. 
                You can set a background type and its content. Click on the Buttons parameter to enable buttons for this block. Click in the text to change your text style or color. Select text to change its formatting or add links.</small>
            
              </h3>
            
          </div>
          
        </div>
        <Link to={"/login-page"} className={classes.link}>
            <Button color="primary" size="lg" simple>
              View Login Page
            </Button>
          </Link>

          <Link to={"/profile-page"} className={classes.link}>
            <Button color="primary" size="lg" simple>
              Company Profile
            </Button>
          </Link>

        <div className={classes.space70} />
        <div id="checkRadios">
         
        </div>
        <div className={classes.space70} />
        <div id="progress">
          
        </div>
        
      </div>
    </div>
  );
}
