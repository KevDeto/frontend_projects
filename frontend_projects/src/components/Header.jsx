import React from "react";
import {Container, Row, Col, Nav, Button} from "react-bootstrap";
import { PersonStanding, Bot, FolderKanban, Map, Bookmark, Calendar, Share2, Download } from 'lucide-react';
import 'bootstrap-icons/font/bootstrap-icons.css';

function Header() {
    return (
        <Container className="border border-2 px-4" style={{width: '790px', height: '260px'}}>
            <Row className="align-items-center justify-content-between h-100 flex-column">
                {/* Fila 1: Navegación superior */}
                <Col xs={12} className="d-flex justify-content-between align-items-center px-2 py-3 flex-grow-0">
                    <a className="text-decoration-none text-dark" href=""><span>← All roadmaps</span></a>
                    <div className="d-flex gap-1 align-items-center">
                        <Button className="p-0 me-2 d-flex align-items-center"
                                variant="outline-secondary" 
                                size="sm">
                            <Bookmark size={16} strokeWidth={2}/>
                        </Button>
                        <Button className="d-flex align-items-center gap-2 lh-1 fw-semibold" 
                                variant="outline-secondary" 
                                size="sm" style={{
                                    padding: '8px 12px'}}>
                            <Calendar size={16} strokeWidth={2}/>
                            <span>Schedule Learning Time</span>
                        </Button>
                        <a href="" 
                            className="btn btn-link text-decoration-none border border-1 border-secondary text-secondary d-flex gap-2 align-items-center lh-1 fw-semibold bg-warning" style={{
                                padding: '8px 12px'}}>
                            <Download size={16} strokeWidth={2}/>
                            Download
                        </a>
                        <Button className="d-flex gap-2 align-items-center lh-1 fw-semibold" 
                                variant="outline-secondary bg-warning" 
                                size="sm" style={{
                                    padding: '8px 12px'}}>
                                <Share2 size={16} strokeWidth={2}/>
                            Share
                        </Button>
                    </div>
                </Col>

                {/* Fila 2: Título y descripción */}
                <Col xs={12} className="text-start flex-grow-0 ">
                    <h1 className="fw-bold" style={{fontSize: '48px'}}>Frontend Projects</h1>
                    <p style={{fontSize: '18px'}}>Project ideas to take you from beginner to advanced in Frontend</p>
                </Col>

                {/* Fila 3: Navegación inferior */}
                <Col xs={12} className="d-flex justify-content-between align-items-center flex-grow-0">
                    <Nav className="d-flex gap-2 align-items-center" style={{
                        fontSize: '14px'
                        }}>
                        <Nav.Link className="pb-2 px-2 pt-0 d-flex align-items-center gap-1 text-dark" href="#roadmap">
                            <Map size={16}/>Roadmap
                        </Nav.Link>
                        <Nav.Link className="pb-2 px-2 pt-0 d-flex align-items-center gap-1 text-dark" href="#projects">
                            <FolderKanban size={16}/>Projects
                        </Nav.Link>
                        <Nav.Link className="pb-2 px-2 pt-0 d-flex align-items-center gap-1 text-dark" href="#aitutor">
                            <Bot size={16}/>AI Tutor
                        </Nav.Link>
                    </Nav>
                    <Button className="d-flex align-items-center gap-2 pb-2 px-0 pt-0" 
                            variant="outline-none" 
                            size="sm">
                        <PersonStanding size={16}/>
                        <span style={{fontSize: '14px'}}>Personalize</span>
                        <span className="bg-warning text-dark rounded-pill fw-semibold px-2 ms-1" style={{
                            fontSize: '12px', 
                            padding:'2px 2px', 
                            lineHeight: '16px'}}>New
                        </span>
                    </Button>
                </Col>
            </Row>
        </Container>
    );
}

export default Header;