import { promises as fs } from 'fs';
import path from 'path';

import yaml from 'js-yaml';
import { GetStaticProps } from 'next';
import Head from 'next/head';

import { App } from '../src/App';
import { ProjectContent } from '../src/ProjectContent';

interface Props {
  lastUpdated: string;
  projects: ProjectContent[];
}

export default function Home({ lastUpdated, projects }: Props) {
  return (
    <>
      <Head>
        <title>Eric Rabinowitz</title>
        <link
          rel='icon'
          href='/favicon.png'
        />
      </Head>
      <App
        lastUpdated={lastUpdated}
        projects={projects}
      />
    </>
  );
}

const getProjects = async () => {
  const projectsDirectory = path.join(process.cwd(), 'content/work');
  const filenames = await fs.readdir(projectsDirectory);
  const projects = filenames.map(async (filename) => {
    const filePath = path.join(projectsDirectory, filename);
    const fileContents = await fs.readFile(filePath, 'utf8');

    return yaml.load(fileContents) as ProjectContent;
  });

  return Promise.all(projects);
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const lastUpdated = new Intl.DateTimeFormat('en-US', { dateStyle: 'long' }).format(new Date());

  return {
    props: {
      lastUpdated,
      projects: await getProjects(),
    },
  };
};
