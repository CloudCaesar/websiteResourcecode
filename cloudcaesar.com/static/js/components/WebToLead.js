import React, {
    useEffect,
    useState
} from 'react';
import {
    Form,
    FormGroup,
    FormField,
    Button,
    Divider,
    Accordion,
    Icon
} from 'semantic-ui-react';

const WebToLead = () => {
        const [activeIndex, setActiveIndex] = useState(-1);

        const handleAccordionClick = (e, {
            index
        }) => {
            setActiveIndex(activeIndex === index ? -1 : index);
        };

        useEffect(() => {
            const script = document.createElement('script');
            script.src = 'https://www.google.com/recaptcha/api.js';
            script.async = true;
            script.defer = true;
            document.body.appendChild(script);

            const timestampScript = document.createElement('script');
            timestampScript.innerHTML = `
      function timestamp() {
        var response = document.getElementById("g-recaptcha-response");
        var captchaSettings = document.getElementsByName("captcha_settings")[0];
        if (response == null || response.value.trim() == "") {
          if (captchaSettings) {
            var elems = JSON.parse(captchaSettings.value);
            elems["ts"] = JSON.stringify(new Date().getTime());
            captchaSettings.value = JSON.stringify(elems);
          }
        }
      }
      const intervalId = setInterval(timestamp, 500);
      window.timestampIntervalId = intervalId;
    `;
            document.body.appendChild(timestampScript);

            return () => {
                document.body.removeChild(script);
                document.body.removeChild(timestampScript);
                clearInterval(window.timestampIntervalId);
            };
        }, []);

        return ( <
                Form action = "https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8&orgId=00Dbn00000TlYlb"
                method = "POST"
                size = "large"
                style = {
                    {
                        backgroundColor: '#a9885c'
                    }
                } >
                <
                input type = "hidden"
                name = "captcha_settings"
                value = '{"keyname":"CZR","fallback":"true","orgId":"00Dbn00000TlYlb","ts":""}' /
                >
                <
                input type = "hidden"
                name = "oid"
                value = "00Dbn00000TlYlb" / >
                <
                input type = "hidden"
                name = "retURL"
                value = "http://cloudcaesar.com" / >

                <
                FormGroup widths = "equal" >
                <
                FormField label = { < label style = {
                        {
                            color: '#702963'
                        }
                    } > First Name < /label>}
                    control = "input"
                    id = "first_name"
                    name = "first_name"
                    maxLength = "40"
                    placeholder = "First Name" /
                    >
                    <
                    FormField
                    label = { < label style = {
                            {
                                color: '#702963'
                            }
                        } > Last Name < /label>}
                        control = "input"
                        id = "last_name"
                        name = "last_name"
                        maxLength = "80"
                        placeholder = "Last Name" /
                        >
                        <
                        /FormGroup> <
                        FormGroup widths = "equal" >
                        <
                        FormField
                        label = { < label style = {
                                {
                                    color: '#702963'
                                }
                            } > Email < /label>}
                            control = "input"
                            id = "email"
                            name = "email"
                            maxLength = "80"
                            placeholder = "Email" /
                            >
                            <
                            FormField
                            label = { < label style = {
                                    {
                                        color: '#702963'
                                    }
                                } > Company < /label>}
                                control = "input"
                                id = "company"
                                name = "company"
                                maxLength = "40"
                                placeholder = "Company" /
                                >
                                <
                                /FormGroup>

                                <
                                FormGroup widths = "equal" >
                                <
                                FormField
                                label = { < label style = {
                                        {
                                            color: '#702963'
                                        }
                                    } > Title < /label>}
                                    control = "input"
                                    id = "title"
                                    name = "title"
                                    maxLength = "40"
                                    placeholder = "Title" /
                                    >
                                    <
                                    FormField
                                    label = { < label style = {
                                            {
                                                color: '#702963'
                                            }
                                        } > Phone < /label>}
                                        control = "input"
                                        id = "phone"
                                        name = "phone"
                                        maxLength = "40"
                                        placeholder = "Phone" /
                                        >
                                        <
                                        /FormGroup>

                                        <
                                        Accordion styled >
                                        <
                                        Accordion.Title
                                        active = {
                                            activeIndex === 0
                                        }
                                        index = {
                                            0
                                        }
                                        onClick = {
                                            handleAccordionClick
                                        } >
                                        <
                                        Icon name = "dropdown" / >
                                        Optional Details <
                                        /Accordion.Title> <
                                        Accordion.Content active = {
                                            activeIndex === 0
                                        } >
                                        <
                                        FormGroup widths = "equal" >
                                        <
                                        FormField
                                        label = { < label style = {
                                                {
                                                    color: '#702963'
                                                }
                                            } > Street < /label>}
                                            control = "textarea"
                                            id = "street"
                                            name = "street"
                                            placeholder = "Street" /
                                            >
                                            <
                                            FormField
                                            label = { < label style = {
                                                    {
                                                        color: '#702963'
                                                    }
                                                } > City < /label>}
                                                control = "input"
                                                id = "city"
                                                name = "city"
                                                maxLength = "40"
                                                placeholder = "City" /
                                                >
                                                <
                                                /FormGroup>

                                                <
                                                FormGroup widths = "equal" >
                                                <
                                                FormField
                                                label = { < label style = {
                                                        {
                                                            color: '#702963'
                                                        }
                                                    } > State / Province < /label>}
                                                    control = "input"
                                                    id = "state"
                                                    name = "state"
                                                    maxLength = "20"
                                                    placeholder = "State/Province" /
                                                    >
                                                    <
                                                    FormField
                                                    label = { < label style = {
                                                            {
                                                                color: '#702963'
                                                            }
                                                        } > Zip < /label>}
                                                        control = "input"
                                                        id = "zip"
                                                        name = "zip"
                                                        maxLength = "20"
                                                        placeholder = "Zip" /
                                                        >
                                                        <
                                                        /FormGroup>

                                                        <
                                                        FormGroup widths = "equal" >
                                                        <
                                                        FormField
                                                        label = { < label style = {
                                                                {
                                                                    color: '#702963'
                                                                }
                                                            } > Country < /label>}
                                                            control = "input"
                                                            id = "country"
                                                            name = "country"
                                                            maxLength = "40"
                                                            placeholder = "Country" /
                                                            >
                                                            <
                                                            FormField
                                                            label = { < label style = {
                                                                    {
                                                                        color: '#702963'
                                                                    }
                                                                } > Website < /label>}
                                                                control = "input"
                                                                id = "url"
                                                                name = "url"
                                                                maxLength = "80"
                                                                placeholder = "Website" /
                                                                >
                                                                <
                                                                /FormGroup>

                                                                <
                                                                FormGroup widths = "equal" >
                                                                <
                                                                FormField
                                                                label = { < label style = {
                                                                        {
                                                                            color: '#702963'
                                                                        }
                                                                    } > Description < /label>}
                                                                    control = "textarea"
                                                                    id = "description"
                                                                    name = "description"
                                                                    placeholder = "Description" /
                                                                    >
                                                                    <
                                                                    /FormGroup> <
                                                                    /Accordion.Content> <
                                                                    /Accordion>

                                                                    <
                                                                    div className = "g-recaptcha"
                                                                    data - sitekey = "6Lc8KrMqAAAAAJYuFT-psNAG_WoBzFbBghYykFll" > < /div> <
                                                                    br / >
                                                                    <
                                                                    Button type = "submit"
                                                                    style = {
                                                                        {
                                                                            backgroundColor: '#702963',
                                                                            color: '#a9885c'
                                                                        }
                                                                    } >
                                                                    Submit <
                                                                    /Button> <
                                                                    Divider hidden / >
                                                                    <
                                                                    /Form>
                                                                );
                                                            };

                                                            export default WebToLead;