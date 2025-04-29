import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class VersionService {
  private version: string;

  getVersion = (): string => {
    const packagePath = path.resolve('.', 'package.json');

    let contents: string;
    try {
      contents = fs.readFileSync(
        packagePath,
        'utf8',
      );
      this.version = JSON.parse(contents).version;
    }
    catch (error) {
      throw new Error('Unable to read package.json file');
    }

    return this.version;
  }
}
