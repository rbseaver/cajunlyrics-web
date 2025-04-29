import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';


export interface BuildInformation {
  version: string;
}

@Injectable()
export class VersionService {
  private version: string;
  /**
   * Get the version of the application
   * @returns BuildInformation Object containing the version
   * @throws Error if package.json file is not found, corrupt, etc...
   * @todo Eventually, add more information to this object, like build date, commit hash, etc.
   */
  getVersion = (): BuildInformation => {
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

    return {
      version: this.version
    };
  }
}
