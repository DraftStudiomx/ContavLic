import {getCliClient} from 'sanity/cli'
import {SINGLETONS} from '../config/singletons/singletons'

interface SanityDocument {
  _id: string
  _type: string
  [key: string]: unknown
}

/**
 * Creates one singleton document per entry in SINGLETONS.
 *
 * 1. Take a backup of your dataset with:
 * `npx sanity@latest dataset export`
 *
 * 2. Update the SINGLETONS constant to your needs
 *
 * 3. Run the script:
 * npx sanity@latest exec ./lib/createSingletons.ts --with-user-token
 *
 * 4. Update your desk structure to use the new documents
 */

const client = getCliClient()

async function createSingletons() {
  const documents = SINGLETONS.map((singleton) => ({
    _id: singleton.id,
    _type: singleton._type,
  }))

  const transaction = client.transaction()

  documents.forEach((doc) => {
    transaction.createOrReplace(doc as SanityDocument)
  })

  await transaction
    .commit()
    .then((res) => {
      console.log(res)
    })
    .catch((err) => {
      console.error(err)
    })
}

createSingletons()
