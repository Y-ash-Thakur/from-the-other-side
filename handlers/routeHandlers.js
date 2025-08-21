import { getData } from '../utils/getData.js';
import { sendResponse } from '../utils/sendResponse.js';


export async function handleGet(res){
  const data = await getData();
  const content = JSON.stringify(data)
  return sendResponse(res, 200, 'application/json', content);
}