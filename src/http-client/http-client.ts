import { Injectable } from '@nestjs/common';

export class HttpClientError extends Error {
  status: number;
  body: string;

  constructor(message: string, status: number, body: string) {
    super(message);
    this.name = 'HttpClientError';
    this.status = status;
    this.body = body;
  }
}

@Injectable()
export class HttpClient {
  async get(url: string): Promise<string> {
    const response = await fetch(url, {
      method: 'GET',
    });

    const body = await response.text();

    if (!response.ok) {
      this.throwHttpClientError(response, body);
    }

    return body;
  }

  private throwHttpClientError(response: Response, body: string) {
    throw new HttpClientError(`Request failed`, response.status, body);
  }
}
