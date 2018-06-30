import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Home from '@material-ui/icons/Home';
import Domain from '@material-ui/icons/Domain';
import People from '@material-ui/icons/People';
import AssignmentInd from '@material-ui/icons/AssignmentInd';
import School from '@material-ui/icons/School';
import Camera from '@material-ui/icons/Camera';
import Assignment from '@material-ui/icons/Assignment';
import Notification from '@material-ui/icons/Notifications';
import Notes from '@material-ui/icons/Note';
import ListIcon from '@material-ui/icons/List';
import Calendar from '@material-ui/icons/DateRange';
import Supervisor from '@material-ui/icons/SupervisorAccount';
import Forum from '@material-ui/icons/Forum';
import Comment from '@material-ui/icons/Comment';
import Today from '@material-ui/icons/Today';
import Favorite from '@material-ui/icons/Favorite';
import Feedback from '@material-ui/icons/Feedback';
import ContactMail from '@material-ui/icons/ContactMail';
import {withStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { ListSubheader, Card, CardActions, CardMedia } from '@material-ui/core';
import Pic1 from './img/Desktop.jpg';

const styles = theme => ({
    root : {
        width : '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
    nested: {
        paddingLeft: theme.spacing.unit * 4,
    },
    card : {
        maxwidth: 360,
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
});

class DepartIntro extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: true,
        };
    };

    handleClick = () => {
        this.setState(state => ({open : !state.open}));
    };

    render() {
        const { classes } = this.props;
        //const listContent = ["部门简介", "部门架构", "部长寄语", "照片墙"];
        const listContent = [
            { 
                icon : <Home/>, 
                text : "部门简介"
            },
            {
                icon : <People/>,
                text : "部门架构"
            },
            {
                icon : <School/>,
                text : "部长寄语"
            },
            {
                icon : <Camera />,
                text : "照片墙"
            }
        ];
        return (
            <div className={classes.root}>
                <Card className={classes.card}>
                    <CardMedia className={classes.media}
                        image={Pic1}
                        title="Card Media"
                    />
                </Card>
                <Divider/>
                <List component="nav" subheader={<ListSubheader component="div">部门概述</ListSubheader>}>
                    <ListItem button onClick={this.handleClick}>
                        <ListItemText inset primary="部门概述" />
                    </ListItem>
                    <Collapse in={this.state.open} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            {listContent.map((s, i) => {
                                return (
                                    <ListItem button className={classes.nested} key={i}>
                                        <ListItemIcon>{s.icon}</ListItemIcon>
                                        <ListItemText inset primary={s.text} />
                                    </ListItem>
                                );
                            })}
                        </List>
                    </Collapse>
                </List>
            </div>
        );
    }
}

DepartIntro.propTypes = {
    classes : PropTypes.object.isRequired,
};

export default withStyles(styles)(DepartIntro);
/*
class Member extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open : true,
        };
    };

    handleClick = () => {
        this.setState(state => ({open : !state.open}));
    };

    render () {
        const {classes} = this.props;
        const listContent = [
            {
                icon : <Assignment/>,
                text : "部员守则"
            },
            {
                icon : <Notification/>,
                text : "临时业务"
            },
            {
                icon : <Notes/>,
                text : "长期业务"
            },
            {
                icon : <Calendar/>,
                text : "排班表"
            },
            {
                icon : <Supervisor/>,
                text : "老师&辅导员"
            }
        ];

        return (
            <div>
                <
        )
    }
}
*/