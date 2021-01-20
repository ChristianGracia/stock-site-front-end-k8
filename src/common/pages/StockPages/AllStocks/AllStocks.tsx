import * as React from "react";
import { connect } from "react-redux";

import { Typography, Paper, Button, withStyles } from "@material-ui/core";

import { Store } from "common/redux/store";

import style from "./AllStocksPage.style";

interface AllStocksProps {
    title: string;
    updateTitle: any;
    classes: any;
}

const AllStocks = (props: AllStocksProps) => {
    const { classes } = props;
    return (
        <React.Fragment>
            <Paper className={classes.allStocksContainer}></Paper>
            <Typography>AllStocks page</Typography>
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
)(withStyles(style)(AllStocks));