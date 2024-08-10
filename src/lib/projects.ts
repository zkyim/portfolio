import { client } from "@/sanity/lib/client";

export async function getProjects () {
    const query = `*[_type == 'projects'] | order(_createdAt) { title, description, images, tags, demoLink, githubLink, publishedAt, isResponsive}`;

    const data = await client.fetch(query);
    return data as any[];
}
export async function getProjectsLegth () {
    const query = `*[_type == 'projects'] | order(_createdAt) { title, description, images, tags, demoLink, githubLink, publishedAt, isResponsive}`;

    const data = await client.fetch(query);
    return data.length as number;
}