import React from 'react';

import { ContactContainer, OptionLink } from './contact.styles'

const ContactPage = () => (
    <ContactContainer>
        <div>
            Hey there! If there is anything you'd like to comment upon, please raise an issue at{'\n'}
            <strong>
                <OptionLink>
                    <a target='_blank'
                        href='https://github.com/daksh-goyal/royalcrow'>
                        https://github.com/daksh-goyal/royalcrow
                    </a>
                </OptionLink>
            </strong>
        </div>
    </ContactContainer>
);

export default ContactPage;
