import { GoogleGenerativeAIEmbeddings } from '@langchain/google-genai';

// Uploads and chat must use the same model, or similarity search returns unrelated chunks.
// gemini-embedding-001 outputs 3072-dimension vectors, so the Pinecone index must match.
export const getEmbeddings = () => {
  return new GoogleGenerativeAIEmbeddings({
    apiKey: process.env.GOOGLE_GENERATIVE_AI_API_KEY!,
    model: 'gemini-embedding-001',
  });
}
