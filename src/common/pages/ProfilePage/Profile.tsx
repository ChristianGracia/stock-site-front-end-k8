import * as React from "react";
import { connect } from "react-redux";

import { Typography, Paper, Button, withStyles } from "@material-ui/core";

import style from "./ProfilePage.style";
import { Store } from "redux";

interface ProfileProps {
    classes: any;
}

const Profile = (props: ProfileProps) => {
    const { classes } = props;
    return (
        <React.Fragment>
            <Paper className={classes.profileContainer}></Paper>
            <Typography>Profile page</Typography>
        </React.Fragment>
    );
};

const mapStateToProps = (state: Store) => {
    return {};
};

const mapDispatchToProps = {};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withStyles(style)(Profile));
