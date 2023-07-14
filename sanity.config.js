import {defineConfig} from 'sanity'

// TOOLS
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'

// STRUCTURES
import {deskStructure} from './structures/desk'

// SCHEMAS
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'builder-API-test',

  projectId: '5ip6coup',
  dataset: 'production',
  cdn: 'true',

  plugins: [
    deskTool({
      structure: deskStructure,
    }), 
    visionTool()
  ],

  schema: {
    types: schemaTypes,
  },
})
