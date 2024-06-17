import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index = () => (
  <Main
    description={"Dinesh's personal website"}
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2 data-testid="heading">Hi</h2>
          <p>I&apos;m Dinesh. I am a Software Engineer at Cadence Design Systems. I work on Palladium and Protium PreCompiler, and on Palladium runtime software.
            <a href="https://iith.ac.in/">UT Austin</a> and <a href="https://iith.ac.in/">IIT Hyderabad</a> Alumnus.
          </p>
        </div>
      </header>
      <p> Please feel free to read more <Link to="/about">about me</Link>,
        or you can check out my {' '}
        <Link to="/resume">resume</Link>, {' '}
        or <Link to="/contact">contact</Link> me.
      </p>

    </article>
  </Main>
);

export default Index;
