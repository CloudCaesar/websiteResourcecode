import React, {
    useState
} from 'react';
import axios from 'axios';
import {
    Form,
    Button,
    Message
} from 'semantic-ui-react';

const ContactForm = () => {
        const [formData, setFormData] = useState({
            name: '',
            email: '',
            message: ''
        });
        const [status, setStatus] = useState('');

        const handleChange = (e) => {
            setFormData({ ...formData,
                [e.target.name]: e.target.value
            });
        };

        const handleSubmit = async (e) => {
            e.preventDefault();
            try {
                const response = await axios.post('https://vercelemailserver.vercel.app/api/createLead', formData);
                //const response = await axios.post('http://localhost:3000/api/createLead', formData);

                if (response.data.success) {
                    setStatus('Form submitted successfully!');
                }
            } catch (error) {
                console.error('Error submitting form:', error);
                setStatus('Error submitting the form.');
            }
        };

        return ( <
            Form onSubmit = {
                handleSubmit
            } > {
                /* <Form.Field>
                        <label>Name</label>
                        <input type="text" name="name" value={formData.name} onChange={handleChange} required />
                      </Form.Field> */
            } <
            Form.Field >
            <
            label > Email < /label> <
            input type = "email"
            name = "email"
            value = {
                formData.email
            }
            onChange = {
                handleChange
            }
            required / >
            <
            /Form.Field> {
                /* <Form.Field>
                        <label>Message</label>
                        <textarea name="message" value={formData.message} onChange={handleChange} required></textarea>
                      </Form.Field> */
            } <
            Button type = "submit" > Submit < /Button> {
                status && < Message > {
                        status
                    } < /Message>} <
                    /Form>
            );
        };

        export default ContactForm;