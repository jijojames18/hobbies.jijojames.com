class ContactForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        name: '',
        email: '',
        message: '',
        errorMessage: ''
      };
  
      this.handleInputChange = this.handleInputChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleSubmit() {
        if (grecaptcha.getResponse())
        {
            $.ajax({
                method: "POST",
                url: REST_ENDPOINT_CONTACT,
                data: { name: this.state.name, message: this.state.message, email: this.state.email }
            })
            .done(function(msg) {
            });
        }
        else
        {
            this.setState({
                ['errorMessage']: "I guess you are a robot!!!..."
            });
            event.preventDefault();
        }
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
    
        this.setState({
            [name]: value
        });
    }
  
    render() {
        return (
            <div class="modal-content">
                <div class="modal-header">
                    <h3 class="header-title">Say hello</h3>
                    <div class="close-btn"><img src="img/close_contact.png" alt="" /></div>    
                </div>
                <div class="modal-body">
                    <div class="col-md-6 col-md-offset-3">
                        <form id="contact" action="" method="POST" onSubmit={this.handleSubmit}>
                            <div class="row">
                                <div class="col-md-12">
                                    <h4 class="form-error">{this.state.errorMessage}</h4>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-12">
                                    <fieldset>
                                        <input name="name" type="text" class="form-control" id="name" value={this.state.name}
                                            onChange={this.handleInputChange} placeholder="Your name..." required/>
                                    </fieldset>
                                </div>
                                <div class="col-md-12">
                                    <fieldset>
                                        <input name="email" type="email" class="form-control" id="email"  value={this.state.email}
                                        onChange={this.handleInputChange} placeholder="Your email..." required />
                                    </fieldset>
                                </div>
                                <div class="col-md-12">
                                    <fieldset>
                                        <textarea name="message" rows="6" class="form-control" id="message" value={this.state.message}
                                        onChange={this.handleInputChange} placeholder="Your message..." required></textarea>
                                    </fieldset>
                                </div>
                                <div class="col-md-12 reCaptcha-container" id="reCaptcha-container">
                                </div>
                                <div class="col-md-12">
                                    <fieldset>
                                        <button type="submit" id="form-submit" class="btn">Send Message Now</button>
                                    </fieldset>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

ReactDOM.render(
    <ContactForm />,
    document.getElementById('modal')
);