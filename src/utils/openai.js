import OpenAI from 'openai';
//import OpenAI from 'https://deno.land/x/openai@v4.24.7/mod.ts';
import {openAiKey} from './constant';

const openai = new OpenAI({
  apiKey: openAiKey, 
  dangerouslyAllowBrowser: true,
});

export default openai;