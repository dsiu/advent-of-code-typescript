import * as fs from 'fs'
import * as path from 'path'

const data = fs.readFileSync(
  path.join(__dirname, 'AOC2024_Day03_Data.txt'),
  'utf-8'
)

export {data}

