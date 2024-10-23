import { GoogleGenerativeAI } from "@google/generative-ai";
function filterOutValuesStartingWithGreaterThan(arr: string[]): string[] {
  return arr.filter((value) => value.startsWith('>'));
}

export async function POST(req: Request) {
  try {
    const genAI = new GoogleGenerativeAI(process.env.GOOGLE_AI_API_KEY || "");
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
  
  const prompt = "Get 3 new Message suggestions for the writer to write message in the true feedback application. The application is use to send anoynumous suggestions to the another username. This message can be anything. Use formal tone for the messages. ";
  
  const result = await model.generateContent(prompt);
  const text=result.response.text()

  console.log( typeof result.response);
  const messages = text.trim().split('\n\n');
  const trimmedMessage=filterOutValuesStartingWithGreaterThan(messages)
  let suggestedMessages:string[]=[]
  trimmedMessage.map((msg)=>{
    suggestedMessages.push(msg.replace(">",""))
  })
  console.log(suggestedMessages)

  return Response.json({
      success:true,
      suggestedMessages
  },{
    status:200
  })
  } catch (error) {
    console.error('An unexpected error occurred:', error);
    return Response.json({
      error
      },{
    status:401
      })
      

      
  }

}





/*import OpenAI from 'openai';
import { OpenAIStream, StreamingTextResponse } from 'ai';


const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export const runtime = 'edge';

export async function POST(req: Request) {
  try {
    const prompt =
      "Create a list of three open-ended and engaging questions formatted as a single string. Each question should be separated by '||'. These questions are for an anonymous social messaging platform, like Qooh.me, and should be suitable for a diverse audience. Avoid personal or sensitive topics, focusing instead on universal themes that encourage friendly interaction. For example, your output should be structured like this: 'What’s a hobby you’ve recently started?||If you could have dinner with any historical figure, who would it be?||What’s a simple thing that makes you happy?'. Ensure the questions are intriguing, foster curiosity, and contribute to a positive and welcoming conversational environment.";

    const response = await openai.completions.create({
      model: 'gpt-3.5-turbo-instruct',
      max_tokens: 400,
      stream: true,
      prompt,
    });

    const stream = OpenAIStream(response);
    
    
    return new StreamingTextResponse(stream);
  } catch (error) {
    if (error instanceof OpenAI.APIError) {
      // OpenAI API error handling
      const { name, status, headers, message } = error;
      return Response.json({ name, status, headers, message }, { status });
    } else {
      // General error handling
      console.error('An unexpected error occurred:', error);
      throw error;
    }
  }
}*/