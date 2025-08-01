import { Test, TestingModule } from '@nestjs/testing';
import { HttpClient, HttpClientError } from './http-client';

describe('HttpClient', () => {
  let httpClient: HttpClient;

  beforeAll(async () => {
    // Mock the Node.js Fetch API
    global.fetch = vi.fn();
  });

  afterAll(async () => {
    vi.restoreAllMocks();
  });

  beforeEach(async () => {
    (global.fetch as any).mockReset();
    const module: TestingModule = await Test.createTestingModule({
      providers: [HttpClient],
    }).compile();

    httpClient = module.get<HttpClient>(HttpClient);
  });

  it('should construct a well-formed GET request', async () => {
    createMockResponse('hi');

    await httpClient.get('https://example.com');

    expect(fetch).toHaveBeenCalledWith('https://example.com', {
      method: 'GET'
    });
  });

  it('should return a response object', async () => {
    createMockResponse('Hello, world!');

    const result = await httpClient.get('https://example.com');

    expect(result).toBeDefined();
    expect(result).toEqual('Hello, world!');
  });

  it('should throw an error if the request fails', async () => {
    createMockResponse('Error', 500);

    await expect(httpClient.get('https://example.com')).rejects.toThrow('Request failed');
  });
});

const createMockResponse = (statusText: string, status: number = 200) => {
  (global.fetch as any).mockResolvedValue({
    status,
    ok: status === 200,
    statusText: status === 200 ? 'OK' : 'Error',
    text: async () => (statusText)
  } as Response);
}

