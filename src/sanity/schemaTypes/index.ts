import { type SchemaTypeDefinition } from 'sanity'
import skills from '../schemas/skills'
import projects from '../schemas/projects'
import eductions from '../schemas/eductions'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [eductions ,skills, projects],
}
