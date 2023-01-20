import path from 'path';
import { promises as fs } from 'fs';

export default async function abiHandler(fileName: string): Promise<string> {
  //Find the absolute path of the json directory
  const jsonDirectory = path.join(process.cwd(), 'src/artifacts');
  //Read the json data file data.json
  const fileContents = await fs.readFile(jsonDirectory + `/${fileName}.json`, 'utf8');
  //Return the content of the data file in json format
  return JSON.parse(fileContents).abi;
}
