import React from "react";
import {Container, Row, Col, Nav, Button} from "react-bootstrap";
import { NavLink } from 'react-router-dom';
import { PersonStanding, Bot, FolderKanban, Map, Bookmark, Calendar, Share2, Download } from 'lucide-react';
import styles from './Header.module.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

function Header() {
    return (
        <Container className={`${styles.container}`}>
            <Row className={`${styles.row}`}>
                <Col xs={12} className="d-flex justify-content-between align-items-center p-0 m-0">
                    <a href="" className={`text-decoration-none ${styles.roadmaps}`}><span>← All roadmaps</span></a>
                    <div className="d-flex gap-1 align-items-center">
                        <Button variant="outline-none m-0 p-0 me-2 lh-1">
                            <Bookmark size={16} strokeWidth={2} className={`${styles.bookmark}`}/>
                        </Button>
                        <Button className={`d-flex align-items-center gap-2 rounded-2 border border-none ${styles.button} ${styles.buttonCalendar}`}>
                            <Calendar size={16} strokeWidth={2}/>
                            <span>Schedule Learning Time</span>
                        </Button>
                        <a href="" className={`d-flex align-items-center text-decoration-none gap-2 rounded-2 ${styles.button} ${styles.buttonDownload}`}>
                            <Download size={16} strokeWidth={2}/>
                            <span>Download</span>
                        </a>
                        <Button className={`d-flex align-items-center gap-2 rounded-2 border border-none ${styles.button} ${styles.buttonShare}`}>
                            <Share2 size={16} strokeWidth={2}/>
                            <span>Share</span>
                        </Button>
                    </div>
                </Col>
                <Col xs={12} className="text-start my-5 p-0 m-0">
                    <h1 className={`lh-1 fw-bold ${styles.h1}`}>Frontend Projects</h1>
                    <p className={`m-0 ${styles.p}`}>Project ideas to take you from beginner to advanced in Frontend</p>
                </Col>
                <Col xs={12} className="d-flex justify-content-between p-0 m-0">
                    <Nav className="gap-1">
                        <NavLink to="/roadmap" className={({ isActive }) => 
                            `d-flex align-items-center gap-1 px-2 pb-2 pt-0 ${styles.a} ${isActive ? styles.active : ''}`}>
                            <Map size={14}/><span>Roadmap</span>
                        </NavLink>
                        <NavLink to="/projects" className={({ isActive }) =>
                            `d-flex align-items-center gap-1 px-2 pb-2 pt-0 ${styles.a} ${isActive ? styles.active : ''}`}>
                            <FolderKanban size={14}/><span>Projects</span>
                        </NavLink>
                        <NavLink to="/aitutor" className={({ isActive }) =>
                            `d-flex align-items-center gap-1 px-2 pb-2 pt-0 ${styles.a} ${isActive ? styles.active : ''}`}>
                            <Bot size={14}/><span>AI Tutor</span>
                        </NavLink>
                    </Nav>
                    <Button className={`d-flex align-items-center gap-1 ${styles.buttonPersonalize}`}>
                        <PersonStanding size={16}/>Personalize
                        <span className={`rounded-5 ${styles.buttonPersonalizeSpan}`}>New</span>
                    </Button>
                </Col>
            </Row>
        </Container>
    );
}

export default Header;