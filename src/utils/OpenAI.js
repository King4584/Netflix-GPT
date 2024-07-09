import OpenAI from 'openai';
import { GPT_ApiKey } from './constants';

const openai = new OpenAI({
  
    apiKey: GPT_ApiKey, // This is the default and can be omitted
    dangerouslyAllowBrowser: true,
});

export default openai;