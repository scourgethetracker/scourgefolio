import React from 'react'
import { Headings } from '../../core/headings/headings'
import './style.css'

const About = React.forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div ref={ref} className="about-section">
      {/* 🎯 Display the section title and subtitle */}
      <Headings title="About" subtitle="Hello, I'm Benji!." />{' '}
      {/* 📝 Edit the biography below to reflect your own journey and interests */}
      <p className="about-text">
        I&apos;m a Site Reliability, Cloud & DevOps Engineer with 10+ years of experience 
        managing high-volume, customer-facing services in dynamic environments. 
        Expertise in Amazon Web Services (AWS), Akamai, Linode, and Infrastructure as 
        Code (CloudFormation, Terraform & Ansible). Passionate about improving service reliability 
        through automation and monitoring with tools such as NewRelic, App Dynamics & Datadog. 
        Proficient in Python, PHP, and Bash. Experienced technical lead and mentor with a strong 
        background in incident response, GitOps practices (IaC, SCM, CI/CD), cybersecurity, 
        and performance testing.
        &nbsp;<br/><br/>
        In my spare time I explore assistive technogoloy, security techonology both cybersecurity and physical security, 
        3D printing, wood & metal working. I'm also an experienced TTRPG enthusiast (as both DM and Player where applicable)
        and home brewer &#127867;.
        &nbsp;<br/><br/>
        {/* 🔗 Update the href attribute with your Socials link */}
        Follow my
        <a className="about-link" href="https://github.com/scourgethetracker" target="_blank" rel="noreferrer">
          GitHub
          {/* 🔄 Change 'Instagram' to your preferred social media or remove if not applicable */}
        </a>{' '}
        to see my journey!
      </p>
    </div>
  )
})

About.displayName = 'About'

export { About }
