import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';
// import EmailLink from '../components/Contact/EmailLink';
import ContactIcons from '../components/Contact/ContactIcons';

const Contact = () => (
  <Main
    title="Contact"
    description="Contact Dinesh"
  >
    <article className="post" id="contact">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/contact">Contact</Link></h2>
        </div>
      </header>
      <div className="email-at">
        <p>#208, 912w 22nd</p>
        <p>Austin, Texas</p>
        <p>78705</p>

        {/* <EmailLink /> */}
      </div>
      <ContactIcons />
    </article>
  </Main>
);

export default Contact;
