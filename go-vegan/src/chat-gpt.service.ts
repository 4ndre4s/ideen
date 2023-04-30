import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class GptService {
  private readonly apiKey: string = process.env.OPENAI_API_KEY;
  private readonly apiUrl: string = 'https://api.openai.com/v1/engines/davinci-codex/completions';

  async createCompletion(prompt: string, temperature = 0.3, max_tokens = 150): Promise<any> {
    const response = await axios.post(
      this.apiUrl,
      {
        prompt: prompt,
        temperature: temperature,
        max_tokens: max_tokens,
        top_p: 1.0,
        frequency_penalty: 0.0,
        presence_penalty: 0.0,
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.apiKey}`,
        },
      },
    );
    return response.data;
  }
}
