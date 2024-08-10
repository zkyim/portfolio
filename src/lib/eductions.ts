import { client } from "@/sanity/lib/client";

export async function getEductions () {
    const query = `*[_type == 'eductions'] | order(date) {title, description, date}`;

    const data = await client.fetch(query);
    return data as any[];
}