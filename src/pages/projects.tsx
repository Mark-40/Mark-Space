import { FC } from "react";

import Header from "components/Header";
import Layout from "components/Layout";
import Projects from "containers/Projects";
import { featuredProjects, projects } from "lib/projects";

const ProjectsPage: FC = () => {
  return (
    <Layout title="Projects" header={<Header />}>
      <Projects
        title="🚀 Projects"
        desc="Some of the key projects I've worked on"
        projects={featuredProjects}
      />
      <Projects title="Others" projects={projects} />
    </Layout>
  );
};

export default ProjectsPage;
