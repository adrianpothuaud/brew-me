import path from 'path'

export const clientPath = path.join(
  path.dirname( // .
    path.dirname( // ./server
      __dirname, // ./server/src
    ),
  ),
  'client',
  'dist',
)
