import { client } from "@/sanity/lib/client";

export async function getFrontEndSkills () {
    const query = `*[_type == 'skills' && category == 'frontend'] | order(_createdAt) {skill, category, Percentage}`;

    const data = await client.fetch(query);
    return data as any[];
}
export async function getBackEndSkills () {
    const query = `*[_type == 'skills' && category == 'backend'] | order(_createdAt) {skill, category, Percentage}`;

    const data = await client.fetch(query);
    return data as any[];
}
export async function getToolsSkills () {
    const query = `*[_type == 'skills' && category == 'tools'] | order(_createdAt) {skill, category, Percentage}`;

    const data = await client.fetch(query);
    return data as any[];
}