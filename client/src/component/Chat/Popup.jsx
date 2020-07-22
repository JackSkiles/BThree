import React, { Component } from 'react'
import { Modal } from 'react-bootstrap'

export default class Popup extends Component {
    constructor(props) {
        super(props);

        this.state = {
            modalState: true,
            seenModal: true,
        };
        this.handleModal = this.handleModal.bind(this); 
        
    }

        handleModal() {
            this.setState({ modalState: !this.state.modalState });
        }

        sawModal() {
            const { seenModal } = this.state
            this.setState({ seenModal: !this.state.seenModal });
            localStorage.setItem('sawModal', seenModal)

        }

        componentDidMount() {
            const seenModal = localStorage.getItem('sawModal') === 'true'
            this.setState({
                seenModal
            })
            this.sawModal()
        }


        render() {
            return (
                <div>
                    <div className={"modal fade" + (this.state.modalState ? " show d-block" : " d-none")} tabIndex="-1" role="dialog" style={{ margin: '265px auto' }} show={this.state.sawModal}>
                        <div className="modal-dialog" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" style={{ textAlign: 'center' }}>BThree Bot: Welcome!</h5>
                                    <button type="button" className="close" onClick={this.handleModal}>
                                        <span>&times;</span>
                                    </button>
                                </div>
                                <div className="modal-body">Welcome to the BThree Forum! Join the conversation! Ask a question or share information about what is going on in your area.</div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" onClick={this.handleModal}>Dismiss</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }


    }
