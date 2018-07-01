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
        paddingLeft: theme.spacing.unit * 5,
    },
    card : {
        maxwidth: 360,
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
});

class MenuList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open1 : true, 
            open2 : true,
            open3 : true, 
            // menuContent : menuList
        };
    };
    
    handleClick = (e, value) => {
        let v = this.state[value];
        this.setState({
            [value]: !v,
        });
    };

    render () {
        const {classes} = this.props;
        const menu = [
            {
                icon: null,
                title: "部门概述",
                name: 'open1',
                action: null,
                children: [
                    {
                        icon: <Home />,
                        title: "部门简介",
                        children: null,
                    },
                    {
                        icon: <People />,
                        title: "人事架构",
                        children: null,
                    },
                    {
                        icon: <School />,
                        title: "部长寄语",
                        children: null,
                    },
                    {
                        icon: <Camera />,
                        title: "照片墙",
                    }
                ]
            },
            {
                icon: null,
                title: "部员手册",
                name: 'open2',
                action: null,
                children: [
                    {
                        icon: <Assignment />,
                        title: "部员守则",
                        children: null,
                    },
                    {
                        icon: <Notification />,
                        title: "临时业务",
                        children: null,
                    },
                    {
                        icon: <Notes />,
                        title: "长期业务",
                        children: null,
                    },
                    {
                        icon: <Calendar />,
                        title: "排班表",
                        children: null
                    },
                    {
                        icon: <Supervisor />,
                        title: "老师&辅导员",
                        children: null
                    }
                ]
            },
            {
                icon: null,
                title: "部门日常",
                name: 'open3',
                action: null,
                children: [
                    {
                        icon: <Forum />,
                        title: "日常疑问",
                        children: null,
                    },
                    {
                        icon: <Comment />,
                        title: "日常吐槽",
                        children: null
                    },
                    {
                        icon: <Comment />,
                        title: "表白墙",
                        children: null
                    }
                ]
            },
            {
                icon: <Feedback />,
                title: "建议与投诉",
                name: null,
                action: () => {
                    console.log("Click 建议与投诉");
                    alert("你点击了 “建议与投诉”");
                },
                children: null,
            },
            {
                icon: <ContactMail />,
                title: "联系我们",
                name: null,
                action: () => {
                    console.log("Click 联系我们");
                    alert("你点击了 “联系我们”");
                },
                children: null
            }
        ];

        return (
            <div className={classes.root}>
                <List component="nav">
                {
                    menu.map((s, i) => {
                        // console.log(s);
                        return (
                            s.children === null ? 
                            <div key={i}>
                                <ListItem button onClick={s.action}>
                                    <ListItemIcon>{s.icon}</ListItemIcon>
                                    <ListItemText inset primary={s.title}/>
                                </ListItem>
                            </div>
                            :
                            <div key={i}>
                                <ListItem button name={s.name} value={this.state[s.name]} onClick={(e) => {
                                    this.handleClick(e, s.name);
                                }}>
                                    <ListItemText inset primary={s.title}/>
                                </ListItem>
                                <Collapse in={this.state[s.name]} time="auto" unmountOnExit>
                                    <List component="div" disablePadding>
                                        {s.children.map((ss, j) =>{
                                            return (
                                                <ListItem button className={classes.nested} key={j}>
                                                    <ListItemIcon>{ss.icon}</ListItemIcon>
                                                    <ListItemText inset primary={ss.title} />
                                                </ListItem>
                                            );
                                        })}
                                    </List>
                                </Collapse>
                            </div>
                        );
                    })
                }
                </List>
            </div>
        )
    }
};

MenuList.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MenuList);