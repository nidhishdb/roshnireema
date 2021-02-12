import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { ExtLink, InlinePageLink } from "../components/atoms"
import Contact from "../components/contact"

const About = _ => {
  return (
    <Layout activePage="about">
      <SEO title="About" />
      <div className="container">
        <article className="prose">
          <h2>About Me</h2>
          <p>
            I'm blah blah, I work full-time as a programmer at{" "}
            <ExtLink link="https://google.com/">Google</ExtLink>. In my
            free time, I study front-end development with React. My goal is to
            write useful apps and contribute to open source projects while
            working a full-time job.
          </p>
          <h2>Why make this website?</h2>
          <p>
	Blah blah blah Blah
          </p>
          <p>
            This also serves a motivation for me to continue making projects
            because now I finally have a place to showcase them.
          </p>
          <h2>Why write a blog?</h2>
          <p>
            My{" "}
            <InlinePageLink to="/blog/dark-mode-react-tailwind/">first blog post</InlinePageLink>{" "}
            explained it. I'd be happy if you read it :)
          </p>
          <h2>What else?</h2>
          <p>
            When I’m not programming, I endlessly browse Reddit (
            <ExtLink link="https://www.reddit.com/r/gamedev/">
              /r/gamedev
            </ExtLink>
            ,{" "}
            <ExtLink link="https://www.reddit.com/r/webdev/">/r/webdev</ExtLink>
            ,{" "}
            <ExtLink link="https://www.reddit.com/r/animalsbeingderps/">
              /r/animalsbeingderps
            </ExtLink>
            ). I also love watching{" "}
            <ExtLink link="https://netflix.com">movies</ExtLink>{" "}
            and listening to{" "}
              awesome music
          </p>
        </article>
      </div>
      <Contact />
    </Layout>
  )
}

export default About
